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
