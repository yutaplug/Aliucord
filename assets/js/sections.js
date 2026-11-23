// Browsers only use favicons declared in <head>; the Markdown page can only add them to <body>.
document.querySelectorAll('body link[rel~="icon"]').forEach(icon => document.head.append(icon));

/* Group rendered Markdown into sections, preserving its existing anchors. */
(() => {
  const navigation = document.querySelector('.section-selector');
  if (!navigation) return;

  const links = [...navigation.querySelectorAll('a[href^="#"]')];
  const headings = links.map(link => document.getElementById(link.hash.slice(1)));
  // Leave the documentation readable if the page layout changes.
  if (headings.some(heading => !heading || heading.parentElement !== navigation.parentElement)) return;

  const panels = headings.map(heading => {
    const panel = document.createElement('section');
    panel.className = 'documentation-section';
    panel.setAttribute('aria-labelledby', heading.id);
    heading.before(panel);
    let element = heading;
    while (element && !element.matches('footer, .site-footer, script') &&
      (element === heading || !headings.includes(element))) {
      const next = element.nextElementSibling;
      panel.append(element);
      element = next;
    }
    return panel;
  });

  // Box each "###" topic with its content so sections read as separate cards.
  // Tables are already boxed, so topics built around one keep their plain layout.
  const hasTable = elements => elements.some(element => element.matches('table') || element.querySelector('table'));
  function wrapInCard(elements, className) {
    const card = document.createElement('div');
    card.className = className;
    elements[0].before(card);
    card.append(...elements);
  }
  panels.forEach(panel => {
    const body = [...panel.children].slice(1);
    const topics = body.filter(element => element.tagName === 'H3');
    if (!topics.length) {
      // Sections without "###" topics become a single card.
      if (body.length && !hasTable(body)) wrapInCard(body, 'doc-card');
      return;
    }
    topics.forEach(topic => {
      const group = [topic];
      for (let next = topic.nextElementSibling; next && !/^H[1-3]$/.test(next.tagName); next = next.nextElementSibling) {
        group.push(next);
      }
      if (hasTable(group)) return;
      // A heading with nothing under it is a notice, not a topic.
      wrapInCard(group, group.length === 1 ? 'doc-card doc-callout' : 'doc-card');
    });
  });

  function selectSection(scroll) {
    let anchor;
    try { anchor = decodeURIComponent(location.hash.slice(1)); } catch { anchor = ''; }
    const target = document.getElementById(anchor);
    const selected = panels.find(panel => target && panel.contains(target)) || panels[0];
    panels.forEach((panel, index) => {
      panel.hidden = panel !== selected;
      if (panel === selected) links[index].setAttribute('aria-current', 'page');
      else links[index].removeAttribute('aria-current');
    });
    if (scroll && target && selected.contains(target)) {
      // Reveal nested anchors inside collapsibles before scrolling to them.
      let ancestor = target.parentElement;
      while (ancestor && ancestor !== selected) {
        if (ancestor.tagName === 'DETAILS') ancestor.open = true;
        ancestor = ancestor.parentElement;
      }
      target.scrollIntoView({ block: 'start' });
    }
  }

  window.addEventListener('hashchange', () => selectSection(true));
  selectSection(Boolean(location.hash));
})();
