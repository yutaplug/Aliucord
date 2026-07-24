# Aliucord documentation

Mirror of the documentation for the Aliucord app. Official page [here](https://aliucord.com/documentation).

<style>html, body, .markdown-body, table, tr, td, th { background-color: #121212 !important; color: white !important; } h1, h2 { border-bottom: none !important; }</style>

---

# FAQ and Common issues

## How to install Aliucord
Download the latest [Manager APK](https://github.com/Aliucord/Manager/releases/download/v1.3.0/aliucord-manager-v1.3.0.apk) and install it. Once installed, open it and grant all perms, then press "New install" and proceed with the installation.

## How to install plugins
1. Join the [Aliucord Discord server](https://discord.gg/EsNDvBaHVU)
2. Make sure you are using the Aliucord app
3. Go to `#plugins-list` or `#new-plugins` channels and hold any message
4. Click on `View [Author]'s Plugins` for `#plugins-list` or `Install [Plugin name]` for `#new-plugins`
5. Install the plugin you want

**Tips:**
- Most plugins need an app restart to work properly.
- The PluginWeb plugin is recommended if you want a built-in plugin list.
- You can use the `#bot-spam` channel to find plugins with Lumi bot. Just type `!plugins` followed by the name/keyword of the plugin you want.

## How to install themes
**If the theme you are using doesn't work for you, either you are not using the right transparency mode, you are not using theme mirror from `#theme-support` pins (this only affects image background), or Themer is broken on your end (can happen depending on Android version/OS)**

1. Join the [Aliucord Discord server](https://discord.gg/EsNDvBaHVU)
2. Make sure you are using the Aliucord app
3. Install `Themer` plugin
4. Go to `#themes` channel and hold any message (NOT THE LINK)
5. Click on the first option `Install [Theme name]`
6. Go to Themer plugin settings and enable the theme

## How to install plugins manually
Required for [#unmaintained-plugins](https://discord.com/channels/811255666990907402/861935147272110100) channel

If you already have the plugin `.zip`, just follow two last steps.

1. Go to any plugin repository ([like this one](https://github.com/Juby210/Aliucord-plugins))
2. Click the branch button and select `builds`
3. Click the `[PluginName].zip` of the plugin you want
4. Click `Raw`, `View raw` or the download button to download the `.zip` file
5. Using a file manager ([we recommend Material Files](https://play.google.com/store/apps/details?id=me.zhanghai.android.files) ([F-Droid](https://f-droid.org/packages/me.zhanghai.android.files/))) move the downloaded `.zip` to the `Aliucord/plugins` folder
6. Restart Aliucord

## Is there a plugin for...?
- No, there is no plugin to get nitro for free. However, you can type `!fakenitro` in `#bot-spam` channel to get a list of plugins that mimic nitro features.
- No, there is no plugin for RPC (Rich Presence).
- No, there is no soundboard plugin.
- No, there is no plugin to mass/bulk delete messages/dms.
- No, a plugin for new/modern UI doesn't exist. However, you can install the "DiscordRN Dark" theme which mimics the color & font of it.
- No, there is no plugin to bypass file size.

## Can i use Aliucord with the new Discord UI? will the devs update it to a newer version?
No. Aliucord can only be used with 126.21 Discord version and the devs won't update the base version to a newer one due to several reasons (a list can be found [here](/documentation#old-ui)). This doesn't mean Aliucord is abandoned, it is still actively maintained and plugins are still being created and worked on, along with backports of features from new Discord. You can use [another client](https://github.com/Discord-Client-Encyclopedia-Management/Discord3rdparties) that uses the new version if you prefer it.

## What features from new Discord have been backported? and which ones are missing?
See [this list](/documentation#backports) for backported features and [this one](/documentation#missing-features) for missing features.

## Is tracking & telemetry disabled / is there a no track plugin?
Yes, NoTrack is part of the CorePlugins. Crashlytics, Adjust, Discord analytics and Spotify analytics are all disabled.

## Is Aliucord safe? does it have any virus or can i get banned for using it?
Aliucord is completely safe & open source. It has been the most popular Discord client mod for many years already, and there's no case of someone being banned for using it nor getting hacked. Just don't install unofficial plugins that might abuse the API or steal your credentials (and don't share your token).

## Google Play Protect says Aliucord is potentially harmful
Every Android app is signed with a signature by its developer. This way Android can confirm an apk comes from a credible source and wasn't tampered with. Because Aliucord is built locally on your device, that also means it is signed locally on your device, with a signature created just for you (can be found at Aliucord/ks.keystore). This means that the signature of your Aliucord app is unique and Google doesn't recognise it. That's why it shows you a warning that this app is from an untrusted developer. Thus, you can safely ignore the warning.

## Duckduckgo anti tracker / Other anti tracker says Aliucord contains trackers even though its supposed to block them
Most of these apps simply check for the existence of tracking libraries inside the app. Aliucord still contains discords tracking libraries, removing them entirely would be virtually impossible. Instead, we simply disable them or patch them to do nothing. So while anti tracking apps still flag Aliucord, tracking is disabled as much as possible. The only tracking that is still enabled is essential for basic functionality, for instance Google firebase is required for notifications to work as that is how discord sends them to your phone.

## Why is Aliucord starting so slowly?
First reason is most likely MessageLogger plugin, this plugin has a database which can make your app slower if it gets big. To clear it go to the plugin settings and click both clear edited messages and deleted messages. If this didn't solve it or you don't even have the plugin installed, try clearing cache, app data or reinstalling Aliucord through the manager.

## I got the new experimental status notifications for when friends change their status, how do i turn it off?
Go into the notification settings for Aliucord (Settings app, not inside Aliucord) and go into notification categories. There you should find a setting called "other". Turn it off. If you don't see notification categories, go into advanced settings first and turn on "Manage notification categories for each app".

## I can't login because of 2FA
If you have logging issues due to 2FA you most likely have security keys added. You will need to remove them from an official Discord client. After that, you will be able to log in normally. Note that backup codes do not work either.

## Manager is failing on downloading step
Use a VPN (if you don't have one, ProtonVPN is free) or use another network. Some ISPs, such as all the ones in Turkey, block either our backend and/or GitHub.

## Manager is failing or is stuck on installing step
Your OS doesn't properly show install prompts. Cancel the install, enable "Keep Patched APKs" in settings, try to re-install, and once you get stuck again, then go back to settings to export the apk. You can then manually install the APK yourself.

---

# Backports

- 💣: Broken or partially broken
- 🚧: Still in development or beta
- ⚠️: Maintenance mode (unusable/broken or can compromise your account)

**Note:** To install the plugins from here you need to click the plugin name, it will download the plugin `.zip`, now just move it to the `Aliucord/plugins` folder using a file manager & restart Aliucord in case it was open.

## Plugins

|Feature|Plugin Name|
|-|-|
|Voice messages|[VoiceMessages](https://github.com/mantikafasi/AliucordPlugins/raw/builds/VoiceMessages.zip)|
|Playing Audio files|[AudioPlayer](https://github.com/mantikafasi/AliucordPlugins/raw/builds/AudioPlayer.zip)|
|Forwarding messages|[ForwardMessages](https://github.com/Ushie/Aliucord-Plugins/raw/builds/ForwardMessages.zip)|
|Closing DMs from bottomsheet|[CloseDMs](https://github.com/DiamondMiner88/aliucord-plugins/raw/builds/CloseDMs.zip)|
|Bot commands|[SlashCommandsFix](https://github.com/LavaDesu/Awoocord/raw/builds/SlashCommandsFixBeta.zip) 🚧|
|Bot embeds|[ComponentsV2](https://github.com/LavaDesu/Awoocord/raw/builds/ComponentsV2Beta.zip) 🚧|
|Quests|[ViewQuests](https://github.com/nyxiereal/AliucordPlugins/raw/builds/ViewQuests.zip) 🚧|
|Summaries|[Summaries](https://github.com/MCausc78/RNSucks/raw/builds/Summaries.zip) 🚧|
|Embed playing|[Fluff](https://github.com/yutaplug/Aliucord/raw/builds/Fluff.zip)|
|Swiping to reply|[SwipeToReply](https://github.com/RazerTexz/My-plugins/raw/builds/SwipeToReply.zip) ([TapTap](https://github.com/Vendicated/AliucordPlugins/raw/builds/TapTap.zip) is recommended instead)|
|Nick command|[SlashNick](https://github.com/rushiiMachine/aliucord-plugins/raw/builds/SlashNick.zip)|
|Changing pronouns & display name|[MoreProfile](https://github.com/Halkiion/aliucord-plugins/raw/builds/MoreProfile.zip) ⚠️|
|Duplicate channel|[CloneChannels](https://github.com/DiamondMiner88/aliucord-plugins/raw/builds/CloneChannels.zip)|
|Discovery|[Discovery](https://github.com/wingio/plugins/raw/builds/Discovery.zip) 💣|
|Devices page|[Sessions](https://github.com/wingio/plugins/raw/builds/Sessions.zip) 💣|
|Webhooks|[EditWebhooks](https://github.com/c10udburst-discord/aliucord-plugins/raw/builds/EditWebhooks.zip)|
|Sorted searching|[Scout](https://github.com/LavaDesu/Awoocord/raw/builds/Scout.zip)|
|New Discord markdown|[MarkdownFix](https://github.com/yutaplug/yutaplugins/raw/builds/MarkdownFix.zip)|
|Connection icons|[UnknownConnectionIcons](https://github.com/nyakowint/AliuPlugins/raw/builds/UnknownConnectionIcons.zip)|
|Copy message link|[MessageLinkContext](https://github.com/wingio/plugins/raw/builds/MessageLinkContext.zip)|
|Delete embed|[DeleteEmbeds](https://github.com/c10udburst-discord/aliucord-plugins/raw/builds/DeleteEmbeds.zip)|
|Favorite channels|[FavoriteChannels](https://github.com/zt64/aliucord-plugins/raw/builds/FavoriteChannels.zip)|
|New emojis|[NewEmojis](https://github.com/Juby210/Aliucord-plugins/raw/builds/NewEmojis.zip)|
|Favorite GIFs|[Frecents](https://github.com/zt64/aliucord-plugins/raw/builds/Frecents.zip)|
|Member since|[BetterUserDetails](https://github.com/Ushie/Aliucord-Plugins/raw/builds/BetterUserDetails.zip)|
|DMTabsV2|[DMTabs](https://github.com/OmegaSunkey/awesomeplugins/raw/builds/DMTabs.zip)|
|Remove attachments individually|[AttachmentRemover](https://github.com/RazerTexz/My-plugins/raw/builds/AttachmentRemover.zip)|
|Silent messages|[SilentMessages](https://github.com/RazerTexz/My-plugins/raw/builds/SilentMessages.zip)|
|Channel browser|[ChannelBrowser](https://github.com/LampDelivery/AliucordPlugins/raw/builds/ChannelBrowser.zip)|
|Compact links|[CompactLinks](https://github.com/LampDelivery/AliucordPlugins/raw/builds/CompactLinks.zip)|
|Copy channel link|[CopyLinks](https://github.com/LampDelivery/AliucordPlugins/raw/builds/CopyLinks.zip)|
|Message grouping|[Clump](https://github.com/LavaDesu/Awoocord/raw/builds/Clump.zip)|
|DM previews|[Glance](https://github.com/cillynder/Awoocord/raw/builds/Glance.zip)|
|Profile colors|[ModernProfiles](https://github.com/l6t9/AliucordPlugins/raw/builds/ModernProfiles.zip)|
|Evolving Nitro badges|[ModernNitroIcons](https://github.com/Ushie/Aliucord-Plugins/raw/builds/ModernNitroIcons.zip)|
|New member badge|[NewMemberBadge](https://github.com/Ushie/Aliucord-Plugins/raw/builds/NewMemberBadge.zip)|
|Friend nicknames|[NativeFriendNicknames](https://github.com/miaaaa0a/aliucord-plugins/raw/builds/NativeFriendNicknames.zip)|
|Muting voice channels|[MuteVoiceAndStageChannels](https://github.com/Ushie/Aliucord-Plugins/raw/builds/MuteVoiceAndStageChannels.zip)|
|Avatar in dm header|[AvatarInHeader](https://github.com/Ushie/Aliucord-Plugins/raw/builds/AvatarInHeader.zip)|
|Persist message drafts|[PersistMessageDrafts](https://github.com/Ushie/Aliucord-Plugins/raw/builds/PersistMessageDrafts.zip)|
|Fix attachment limit|[AttachmentLimitFix](https://github.com/Ushie/Aliucord-Plugins/raw/builds/AttachmentLimitFix.zip)|
|Showing mentions inside muted-hidden channels|[ShowHiddenMutedChannelsWithMentions](https://github.com/Ushie/Aliucord-Plugins/raw/builds/ShowHiddenMutedChannelsWithMentions.zip)|
|Adding friends by username|[FriendFix](https://github.com/tsyqax/aliucord_plugins_tsq/raw/builds/FriendFix.zip)|
|Adding tags to forums|[ForumTagFix](https://github.com/tsyqax/aliucord_plugins_tsq/raw/builds/ForumTagFix.zip)|
|Media channels|[MediaChannelFix](https://github.com/tsyqax/aliucord_plugins_tsq/raw/builds/MediaChannelFix.zip)|
|Media remix|[PhotoEditor](https://github.com/mantikafasi/AliucordPlugins/raw/builds/PhotoEditor.zip)|
|Onboarding|[FixOnboardingFork](https://github.com/tsyqax/aliucord_plugins_tsq/raw/builds/FixOnboardingFork.zip)|
|Compact images|[MosaicFork](https://github.com/tsyqax/aliucord_plugins_tsq/raw/builds/MosaicFork.zip)|
|Gradient role colors and styled display names|[ModernUserStyles](https://github.com/pilotbellyt-spec/AliucordPlugins/raw/builds/ModernUserStyles.zip)|
|New icons|[NewIcons](https://github.com/mantikafasi/AliucordPlugins/raw/builds/NewIcons.zip)|
|Bookmarks/reminders for messages|[MessageBookmarks](https://github.com/pilotbellyt-spec/AliucordPlugins/raw/builds/MessageBookmarks.zip)|
|Ignoring users|[IgnoreFeature](https://github.com/pilotbellyt-spec/AliucordPlugins/raw/builds/IgnoreFeature.zip)|
|Message requests|[MessageRequests](https://github.com/pilotbellyt-spec/AliucordPlugins/raw/builds/MessageRequests.zip)|
|Jump to top in forums|[JumpToTop](https://github.com/pilotbellyt-spec/AliucordPlugins/raw/builds/JumpToTop.zip)|
|Auto idle status|[AutoIdle](https://github.com/autodistries/aliucord-plugins/raw/builds/AutoIdle.zip)|
|Managing stickers in server settings|[ManageStickers](https://github.com/pilotbellyt-spec/AliucordPlugins/raw/builds/ManageStickers.zip)|
|Activities V2|[ActivitiesV2](https://github.com/secp192k1/Aliucord-Plugins/raw/builds/ActivitiesV2.zip)|
|QR login|[QRCodeLogin](https://github.com/secp192k1/Aliucord-Plugins/raw/21770595a84b0961253155f0806e17d0f97db609/QRCodeLogin.zip)|
|Spoilers|[FixSpoilers](https://github.com/mantikafasiCorp/VibePlugins/raw/builds/FixSpoilers.zip)|

## Built-in to Aliucord

- Viewing forwarded messages
- Upload size (new 10mb limit for non-nitro users)
- Display names
- Pomelo usernames (`@username` instead of `username#1234`)
- Polls
- Pronouns
- New profile badges (quests, developer, etc.)
- Avatar decorations
- Guild tags
- Nameplates

---

# Changelog

This page only shows the most relevant/important changes for most Aliucord users, if you want to see more internal changes that are not that relevant for normal Aliucord users, see the [commits page](https://github.com/Aliucord/Aliucord/commits/main).

## 2.9.7 (CURRENT VERSION)
- Fix avatars not loading
- Fix crash when clicking on safe mode status

## 2.9.6
- Display avatars at correct resolution

## 2.9.5
- Enable reply button in message actions for poll result messages
- Fix some memory leak issues caused by faulty base app code
- Fix animated webp rendering in various places
- Fix absence of create thread button in guilds that have community enabled
- Fix ViewProfileImages not working with avatar decorations

## 2.9.4
- Fix crash when opening update notification and fix duplicate plugin entries

## 2.9.3
- Revert "Support autocomplete entries with the same name" due to it causing app to be slow

## 2.9.2
- Disable sticker suggestions by default
- Treat invalid local plugin versions as outdated
- Fix ghost unread indicator in guilds with forum channels
- Remove bio height limit
- Support autocomplete entries with the same name
- Fix mismatching clock data (e.g date formatters breaking, old timeouts suddenly being reapplied)

## 2.9.1
- Fix scrolling bug in dm list

## 2.9.0
- Fix CoreUpdater and PluginUpdater
- Allow muted DM's (including Group Channels) with unread mentions to appear in side bar

## 2.8.0
- Load settings properly
- Fix Aliucord dir not being created
- Fix various PluginDownloader bugs
- Allow disabling updater

## 2.7.1
- Support slowmode permission
- Fix collapsing bug
- Fix admin/owner perms to include new pins perm
- Scan for repo links only in plugin channels

## 2.7.0
- Allow installing plugins from link context menu
- Fix token login
- Fix "Hide Muted Channels" option accidentally hiding muted threads with unread mentions from channel list
- Fix "Hide Muted Channels" option accidentally hiding channels that contain unread mentions
- Remove sideloading block warning
- Properly display decos during message send
- Display guild tags
- Implement nameplates
- Allow installing plugins from #bot-spam channel
- Fix avatar decorations alignment in DMs list

## 2.6.0
- Temporarily fix Voice Chat until March
- Implement avatar decorations
- Fix animated webp emojis not rendering
- Add safe mode to disable all plugins
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
- User decorations coming soon
- Add Google sideloading block warning
- Rich video embed fix (such as fxtwitter)
- Italicize CorePlugins for /plugins command
- Randomize donation link in settings
- Fix AutoMod messages being broken (caused by ForwardedMessages)
- Disable school hubs dialog
- Add support for avif
- Remove billing
- Support new pin features
- Fix duplicate install buttons in #plugin-development channel

## 2.3.1
- Fix various poll bugs
- Fix a crash when leaving a server with a forwarded message loaded
- Fix reply previews
- Add AlignThreads fix as a CorePlugin

---

# Forks

To install them, download the plugin `.zip` and move it to the `Aliucord/plugins` folder using a file manager & restart Aliucord in case it was open.

|Fork|Download|
|-|-|
|Waifuim fork by Serinova fixes the command being fully broken.|[Download Waifuim fork](https://github.com/OasisVee/AliucordPlugins3/raw/builds/Waifuim.zip)|
|NekosLife fork by Serinova fixes the command being fully broken.|[Download NekosLife fork](https://github.com/OasisVee/AliucordPlugins3/raw/builds/NekosLife.zip)|
|CheckLinks fork by Serinova fixes the majority of the urls not being checked (VirusTotal changed its link structure).|[Download CheckLinks fork](https://github.com/OasisVee/AliucordPlugins2/raw/builds/CheckLinks.zip)|
|Ip fork by Serinova fixes the `/ip` command.|[Download Ip fork](https://github.com/OasisVee/AliucordPluginsSc/raw/builds/Ip.zip)|
|SendEmbeds fork by Serinova makes the `/embed` command work again by using directwebhook (original API died).|[Download SendEmbeds fork](https://github.com/OasisVee/aliucord-pluginsC/raw/builds/SendEmbeds.zip)|
|PlayableEmbeds fork by Enovale and Omar (renamed to Fluff) makes the embeds work for every site and fixes YouTube embeds.|[Download Fluff](https://github.com/yutaplug/Aliucord/raw/builds/Fluff.zip)|
|TapTap fork by Rushii adds option to delete messages.|[Download TapTap fork](https://github.com/yutaplug/Aliucord/raw/builds/TapTap.zip)|
|TextReplace fork by DeafThing removes the character limit.|[Download TextReplace fork](https://github.com/DeafThing/aliucord-pluginsC/raw/builds/TextReplace.zip)|
|MoreHighlight fork by yuta (renamed to MarkdownFix) fixes empty lines not showing when theres several headers in a row, and link not being blue in subtext.|[Download MarkdownFix](https://github.com/yutaplug/yutaplugins/blob/builds/MarkdownFix.zip)|

---

# Missing Features

Compared to the React Native client.

If a feature isn't here, see the [Backports](/documentation/#backports) page in case it already exists as a plugin or it's already built-in.

|Feature|Notes|
|-|-|
|Apps|Context menu for bots|
|Shop|Discord decoration/orbs store|
|Super reactions|The fancy reactions that are more annoying than normal ones|
|E2EE VC|End-to-end encryption in voice chats|
|Connection info|Steam games count, reddit karma count, etc.|
|Managing join requests|Managing join requests|
|Family center|Family center|
|In-game friends|In-game friends|
|Soundboard|Soundboard in VCs|
|Security keys|Security key to login|

---

# New UI

**How to get modern Discord interface (UI) in Aliucord**

This is not really possible due to Aliucord using an old Discord version. However, there are two themes ([DiscordRN Dark](https://discord.com/channels/811255666990907402/824357609778708580/1396601756187885659) & [Discord Midnight theme](https://discord.com/channels/811255666990907402/824357609778708580/1400698799600570398)) that replicate the color & font of it (the UI itself is not possible to replicate).

Alternatively, you can search for another modified Discord client that uses the new version instead of the old one [here](https://github.com/Discord-Client-Encyclopedia-Management/Discord3rdparties).

---

# Old UI

**Why does Aliucord use an old Discord version?**

1. The new Discord app is React Native while the Discord version that Aliucord uses (126.21) is Kotlin. React Native is a framework for building apps using JavaScript, which is not as performant as Kotlin code. Discord's React Native version is known to have performance issues, especially on lower-end devices, because the app has been ported from iOS over to Android.

2. Everything would need to be rewritten, wasting time, considering how bad the new Discord version is.

3. Aliucord developers don't like to work with the new one. [Notice from the AliucordRN repository](https://github.com/Aliucord/AliucordRN#-notice-)

4. If Aliucord ceases to exist, there wouldn't be any active clients using the good old Discord version. [Bluecord situation](https://github.com/user-attachments/assets/11f4b1cc-e786-4c74-a6a6-3a55dc7c26f0)

5. Features from new Discord versions can be backported to the old one, and [many already have been](https://yutaplug.github.io/Aliucord/#backports). [What does backporting mean?](https://en.wikipedia.org/wiki/Backporting)

6. Modded clients for the new Discord version already exist, such as [Kettu/Rain](https://raincord.dev).

---

# Sounds

**How to use StartupSound & NoticeSound plugins**

**GitHub:**
  - Create a GitHub account
  - Create a repo (make sure it's public)
  - Click add file and upload the sound
  - Once uploaded, click its name
  - Hold `View raw` and copy the address
  - Paste the link into the plugin

**Locally:**
  - Install [this file manager](https://play.google.com/store/apps/details?id=me.zhanghai.android.files) & open it (or any file manager that lets you copy file paths)
  - Find the sound file
  - Click the 3 dots next to it & press `Copy Path`
  - Go to the plugin settings & paste it
  - Add `file://` at the start
  - Final result should be `file:///storage/emulated/0/Example/Example.mp3`

---

# Themer

**Note:** Reading the [Documentation](https://github.com/Aliucord/documentation/blob/main/theme-dev) and using the [Theme maker site](https://aliucord.com/theme-maker) can help you make your own theme.

**If the theme you are using doesn't work for you, either you are not using the right transparency mode, you are not using theme mirror from `#theme-support` pins (this only affects image background), or Themer is broken on your end (can happen depending on Android version/OS)**

## How to set a custom background

First of all, you need to enable transparency in Themer settings (chat, chat & settings). If you want full transparency, you need to use the [template](#how-to-make-the-background-work-with-full-transparency).

**ALLOWED HOSTS:** GitHub, GitLab, Imgbb, Imgur, Locally (this one is not a website but your local files).

**GitHub:**
  - Create a GitHub account
  - Create a repo (make sure it's public)
  - Click `Add file` and upload the image/gif
  - Once uploaded, click its name
  - Hold the image and copy the address
  - Go to Themer settings → your theme → `Background` & paste it

**Locally:**
  - Install [this file manager](https://play.google.com/store/apps/details?id=me.zhanghai.android.files) & open it (or any file manager that lets you copy file paths)
  - Find the image/gif file
  - Click the 3 dots next to it & press `Copy path`
  - Go to Themer settings → your theme → `Background` & paste it
  - Add `file://` at the start
  - Final result should be `file:///storage/emulated/0/Example/Example.jpg`

## How to set a custom font

First of all, you need to enable the `Enable Custom Fonts` option in Themer settings.

**GitHub:**
  - Create a GitHub account
  - Create a repo (make sure it's public)
  - Click `Add file` and upload the font
  - Once uploaded, click its name
  - Hold `View raw` and copy the address
  - Go to Themer settings → your theme → `Fonts` & paste it where the asterisk is

**Note:** If the font you want is already uploaded in some repo, you can just copy the raw link, no need to make your own repo.

**Locally:**
  - Install [this file manager](https://play.google.com/store/apps/details?id=me.zhanghai.android.files) & open it (or any file manager that lets you copy file paths)
  - Find the font file
  - Click the 3 dots next to it & press `Copy path`
  - Go to Themer settings → your theme → `Fonts` & paste it where the asterisk is
  - Add `file://` at the start
  - Final result should be `file:///storage/emulated/0/Example/Example.ttf`

## Why does my background image not work

- You didn't enable transparency
- You enabled full transparency which doesn't work without the template
- You are using `cdn.discordapp.com` or `media.discordapp.net` which don't work as a valid URL anymore
- The URL is incorrect

## How to make the background work with full transparency

- Open the [template](https://github.com/OasisVee/theme-templates/blob/main/full-transparency-background-template.json)
- Press the 3 dots and download
- Move the downloaded `.json` to your `Aliucord/themes` folder using a file manager & restart Aliucord if it was open
- Go to Themer settings, enable full transparency & enable the theme
- Go inside the theme settings → `Background` & paste the image/gif url
- Press back, press the save button & restart Aliucord

---

# UserPFP and BG

## UserPFP
- Make sure you have the plugin installed
- Join the [UserPFP server](https://discord.gg/userpfp-1129784704267210844)
- Read `#avatar-rules` before proceeding
- Go to `#request-here` and use the `/request` command
- Add the gif you want
- When it's accepted go to the plugin settings and click "Redownload databases"
- Restart Aliucord to see the changes

## UserBG
- Make sure you have the plugin installed
- Join the [UserBG server](https://discord.gg/ECg96KZ3Fh)
- Read `#usrbg-guide` before proceeding
- Use the `/bg` command in any channel that you can type in
- Add the image/gif you want
- Check `#userbg-log` to see if it has been accepted or not
- When it's accepted go to the plugin settings and click "Redownload databases"
- Restart Aliucord to see the changes

---

# How to logcat

**Note:** You will need a computer, if you don't have one, read [this](https://pastebin.com/pNhXwhrd) instead.

A logcat provides invaluable information about any errors that occurred in our app(s) or related errors
on your device for further debugging. (Do **NOT** apply **ANY** filters!)

You will need:
- A computer
- ADB installed ([Windows tutorial](<https://streamable.com/h0618w>))

1. Enable USB debugging in your phone's developer options
2. Run the following command in a terminal (cmd for Windows): `adb logcat -c`
3. If you have not previously authorized adb on your phone, open it now and authorize your pc
4. Now open Aliucord and reproduce the issue
5. Run the following command now: `adb logcat -d > logcat.txt`
6. The generated logcat will be in your user home directory
