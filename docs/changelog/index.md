# Changelog

## 2.?.? (unknown version number yet)
- Fix avatar decorations alignment in DMs list

## 2.6.0 (current version)
- Temporarily fix Voice Chat until March
- Implement avatar decorations
- Fix animated webp emojis not rendering
- Add safe mode (disables all plugins)
- Add missing experiments
- Disable smooth keyboard animation
- Add new Discord badges
- Disallow creating polls without permission
- Remove more billing upsells

## 2.5.0
- Remove old voice workaround
- Don't remove billing if user has nitro (the "billing settings" section from settings is now also removed for non-nitro users)
- Fix links opening in aliucord's window instead of the link's app window (such as youtube)

## 2.4.0
- User decorations coming soon (there's a coreplugin that lays the underground, they are not visible yet tho)
- Add Google sideloading block warning
- Rich video embed fix (such as fxtwitter)
- Italicize CorePlugins for /plugins command
- Randomize donation link in settings
- Fix AutoMod messages being broken (caused by ForwardedMessages)
- Disable school hubs dialog
- Add support for avif
- Remove billing
- Prevent overriding CorePlugins with external plugins in PluginDownloader
- Support new pin features
- Fix duplicate install buttons in #plugin-development channel
- Use original ref from links in PluginDownloader

## 2.3.1
- Fix various poll bugs
- Add fallback gif format sticker
- NPE when leaving guild with forwarded msg loaded (fixes a crash when leaving a server with a forwarded message loaded)
- Handle unknown new reply message types (fixes reply previews)
- Add AlignThreads fix as a CorePlugin
