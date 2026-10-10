# Aliucord documentation

<link rel="stylesheet" href="/Aliucord/assets/css/custom.css?v=dark-10">
<script src="/Aliucord/assets/js/sections.js?v=1" defer></script>

<nav class="section-selector" aria-label="Documentation sections">
  <span class="section-selector-label">Choose a section</span>
  <div class="section-links">
    <a href="#beginner-guide">Beginner guide</a>
    <a href="#backports">Backports</a>
    <a href="#changelog">Changelog</a>
    <a href="#forks">Forks</a>
    <a href="#missing-features">Missing features</a>
    <a href="#new-ui">New UI</a>
    <a href="#old-ui">Old UI</a>
    <a href="#sounds">Sounds</a>
    <a href="#themer">Themer</a>
    <a href="#userpfp-and-bg">UserPFP and BG</a>
    <a href="#how-to-logcat">How to logcat</a>
    <a href="#themer-fixer">Themer Fixer</a>
    <a href="#customrpc">CustomRPC</a>
    <a href="#my-plugins">My plugins</a>
    <a href="#faq">FAQ</a>
  </div>
</nav>

# Beginner guide

### READING [FAQ](/Aliucord/#faq) IS HIGHLY RECOMMENDED

### How to install Aliucord
Download the latest [Manager APK](https://github.com/Aliucord/Manager/releases/download/v1.3.0/aliucord-manager-v1.3.0.apk) and install it. Once installed, open it and grant all perms, then press "New install" and proceed with the installation.

### How to install plugins
1. Join the [Aliucord Discord server](https://discord.gg/EsNDvBaHVU)
2. Make sure you are using the Aliucord app
3. Go to `#plugins-list` or `#new-plugins` channels and hold any message
4. Click on `View [Author]'s Plugins` for `#plugins-list` or `Install [Plugin name]` for `#new-plugins`
5. Install the plugin you want

<details class="plugin-tips">
<summary>Plugin tips</summary>
<ul class="tips-list">
  <li><span class="tip-label">Restart</span><p>Most plugins need an app restart to work properly.</p></li>
  <li><span class="tip-label">Browse</span><p>Use the PluginWeb plugin for a built-in plugin list.</p></li>
  <li><span class="tip-label">Search</span><p>Find plugins with Lumi bot in <code>#bot-spam</code>. Type <code>!plugins</code> followed by a plugin name or keyword.</p></li>
</ul>
</details>

<details id="how-to-install-plugins-manually" markdown="1">
<summary>How to install plugins manually</summary>

Required for [#unmaintained-plugins](https://discord.com/channels/811255666990907402/861935147272110100) channel

If you already have the plugin `.zip`, just follow two last steps.

1. Go to any plugin repository ([like this one](https://github.com/Juby210/Aliucord-plugins))
2. Click the branch button and select `builds`
3. Click the `[PluginName].zip` of the plugin you want
4. Click `Raw`, `View raw` or the download button to download the `.zip` file
5. Using a file manager ([we recommend Material Files](https://play.google.com/store/apps/details?id=me.zhanghai.android.files) ([F-Droid](https://f-droid.org/packages/me.zhanghai.android.files/))) move the downloaded `.zip` to the `Aliucord/plugins` folder
6. Restart Aliucord

</details>

### How to install themes
**If the theme you are using doesn't work for you, either you are not using the right transparency mode, you are not using theme mirror from `#theme-support` pins (this only affects image background), or Themer is broken on your end (can happen depending on Android version/OS)**

1. Join the [Aliucord Discord server](https://discord.gg/EsNDvBaHVU)
2. Make sure you are using the Aliucord app
3. Install `Themer` plugin
4. Go to `#themes` channel and hold any message (NOT THE LINK)
5. Click on the first option `Install [Theme name]`
6. Go to Themer plugin settings and enable the theme

# Backports

<details class="status-legend">
<summary>Status legend</summary>
<ul class="status-list">
  <li><span class="status-badge status-broken"><span aria-hidden="true">💣</span> Broken</span><span>Broken or partially broken.</span></li>
  <li><span class="status-badge status-beta"><span aria-hidden="true">🚧</span> Beta</span><span>Still in development or beta.</span></li>
  <li><span class="status-badge status-maintenance"><span aria-hidden="true">⚠️</span> Maintenance</span><span>Unusable, broken, or may compromise your account.</span></li>
</ul>
</details>

These plugins are recommended to get and fix features from new Discord. To install the plugins from here you need to click the plugin name, it will download the plugin `.zip`, now just move it to the `Aliucord/plugins` folder using a file manager & restart Aliucord in case it was open.

### Plugins

|Feature|Plugin Name|
|-|-|
|Voice messages|[VoiceMessages](https://github.com/yutaplug/yutaplugins/raw/builds/VoiceMessages.zip)|
|Playing Audio files|[AudioPlayer](https://github.com/mantikafasi/AliucordPlugins/raw/builds/AudioPlayer.zip)|
|Forwarding messages|[ForwardMessages](https://github.com/yutaplug/yutaplugins/raw/builds/ForwardMessages.zip)|
|Closing DMs from bottomsheet|[CloseDMs](https://github.com/DiamondMiner88/aliucord-plugins/raw/builds/CloseDMs.zip)|
|Bot commands|[SlashCommandsFix](https://github.com/LavaDesu/Awoocord/raw/builds/SlashCommandsFixBeta.zip) 🚧|
|Bot embeds|[ComponentsV2](https://github.com/LavaDesu/Awoocord/raw/builds/ComponentsV2Beta.zip) 🚧|
|Quests|[ViewQuests](https://github.com/nyxiereal/AliucordPlugins/raw/builds/ViewQuests.zip) 🚧|
|Summaries|[Summaries](https://github.com/MCausc78/RNSucks/raw/builds/Summaries.zip) 🚧|
|Embed playing|[PlayEmbeds](https://github.com/yutaplug/yutaplugins/raw/builds/PlayEmbeds.zip)|
|Swiping to reply|[SwipeToReply](https://github.com/RazerTexz/My-plugins/raw/builds/SwipeToReply.zip) ([TapTap](https://github.com/Vendicated/AliucordPlugins/raw/builds/TapTap.zip) is recommended instead)|
|Nick command|[SlashNick](https://github.com/rushiiMachine/aliucord-plugins/raw/builds/SlashNick.zip)|
|Changing pronouns & display name|[MoreProfile](https://github.com/Halkiion/aliucord-plugins/raw/builds/MoreProfile.zip) ⚠️|
|Duplicate channel|[CloneChannels](https://github.com/DiamondMiner88/aliucord-plugins/raw/builds/CloneChannels.zip)|
|Discovery|[ServerDiscovery](https://github.com/yutaplug/yutaplugins/raw/builds/ServerDiscovery.zip)|
|Devices page|[Devices](https://github.com/yutaplug/yutaplugins/raw/builds/Devices.zip)|
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
|New Discord link style|[NewLinks](https://github.com/yutaplug/yutaplugins/raw/builds/NewLinks.zip)|
|Copy channel link|[CopyLinks](https://github.com/LampDelivery/AliucordPlugins/raw/builds/CopyLinks.zip)|
|Message grouping|[Clump](https://github.com/LavaDesu/Awoocord/raw/builds/Clump.zip)|
|DM previews|[Glance](https://github.com/cillynder/Awoocord/raw/builds/Glance.zip)|
|Profile colors|[ModernProfiles](https://github.com/l6t9/AliucordPlugins/raw/builds/ModernProfiles.zip)|
|New Discord badges|[NewDiscordBadges](https://github.com/yutaplug/yutaplugins/raw/builds/NewDiscordBadges.zip)|
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
|Keep video playing when scrolling|[KeepVideoPlaying](https://github.com/secp192k1/Aliucord-Plugins/raw/builds/KeepVideoPlaying.zip)|
|DM pins|[DMPins](https://github.com/bappitybup/aliucord-plugins/raw/builds/DMPins.zip)|
|Six most recent profile pictures|[RecentProfilePictures](https://github.com/yutaplug/yutaplugins/raw/builds/RecentProfilePictures.zip)|
|Super reactions|[SuperReactions](https://github.com/yutaplug/yutaplugins/raw/builds/SuperReactions.zip)|
|Profile effects and frames|[ProfileEffects](https://github.com/yutaplug/yutaplugins/raw/builds/ProfileEffects.zip)|
|Opening Discord links in app|[MessageLinkFix](https://github.com/yutaplug/yutaplugins/raw/builds/MessageLinkFix.zip)|
|Onboarding|[Onboarding](https://github.com/yutaplug/yutaplugins/raw/builds/Onboarding.zip)|
|Profile board and wishlist|[ProfileBoard](https://github.com/yutaplug/yutaplugins/raw/builds/ProfileBoard.zip)|
|Friend request codes|[FriendCodes](https://github.com/secp192k1/Aliucord-Plugins/raw/builds/FriendCodes.zip)|
|Report Raid button|[ReportRaid](https://github.com/yutaplug/yutaplugins/raw/builds/ReportRaid.zip)|
|Dark and onyx themes|[NewThemes](https://github.com/yutaplug/yutaplugins/raw/builds/NewThemes.zip)|
|300 bio character limit|[Bio300](https://github.com/yutaplug/yutaplugins/raw/builds/Bio300.zip)|
|New notification types|[Notifications](https://github.com/yutaplug/yutaplugins/raw/builds/Notifications.zip)|
|New report form|[ReportForm](https://github.com/yutaplug/yutaplugins/raw/builds/ReportForm.zip)|
|Apps button|[MessageApps](https://github.com/yutaplug/yutaplugins/raw/builds/MessageApps.zip)|
|Shop|[Shop](https://github.com/yutaplug/yutaplugins/raw/builds/Shop.zip)|
|Connection info|[ConnectionInfo](https://github.com/yutaplug/yutaplugins/raw/builds/ConnectionInfo.zip)|
|Image descriptions|[ImageDescriptions](https://github.com/yutaplug/yutaplugins/raw/builds/ImageDescriptions.zip)|
|`@time` command|[Time](https://github.com/yutaplug/yutaplugins/raw/builds/Time.zip)|
|`@game` command|[GameMentions](https://github.com/yutaplug/yutaplugins/raw/builds/GameMentions.zip)|
|DM activities|[DMActivities](https://github.com/yutaplug/yutaplugins/raw/builds/DMActivities.zip)|

### Built-in to Aliucord

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
- Account standing
- `Larger File Uploads` guild perk
- New spoilered attachments
- 20MB file size limit

# Changelog

This page only shows the most relevant/important changes for most Aliucord users, if you want to see more internal changes that are not that relevant for normal Aliucord users, see the [commits page](https://github.com/Aliucord/Aliucord/commits/main).

### 2.11.0 (CURRENT VERSION)
- Fix some images and videos showing as files
- No longer detect Aliucord as an old client in plugins like MessageLatency (incorrect date caused this)
- Fix opening threads by tapping them in a chat message
- Animated AVIF support
- More new Discord badges
- Add indicator for private profiles
- More detailed plugin update notifications
- Show unknown permissions when authorizing apps and fix Authorized Apps crash
- Add JFIF support

### 2.10.0
- Support new 20MB file size limit
- Fix spoilered attachments
- Fix server icon long press
- Backport safety hub/account standing
- Fix jumping to archived threads
- Add support for Friend Request Accepted message type
- Fix "Larger File Uploads" guild boost perk
- Show authors for core plugins
- Add UI feedback to Token login
- Fix navbar in Plugin Settings Page

### 2.9.7 
- Fix avatars not loading
- Fix crash when clicking on safe mode status

### 2.9.6
- Display avatars at correct resolution

### 2.9.5
- Enable reply button in message actions for poll result messages
- Fix some memory leak issues caused by faulty base app code
- Fix animated webp rendering in various places
- Fix absence of create thread button in guilds that have community enabled
- Fix ViewProfileImages not working with avatar decorations

### 2.9.4
- Fix crash when opening update notification and fix duplicate plugin entries

### 2.9.3
- Revert "Support autocomplete entries with the same name" due to it causing app to be slow

### 2.9.2
- Disable sticker suggestions by default
- Treat invalid local plugin versions as outdated
- Fix ghost unread indicator in guilds with forum channels
- Remove bio height limit
- Support autocomplete entries with the same name
- Fix mismatching clock data (e.g date formatters breaking, old timeouts suddenly being reapplied)

### 2.9.1
- Fix scrolling bug in dm list

### 2.9.0
- Fix CoreUpdater and PluginUpdater
- Allow muted DM's (including Group Channels) with unread mentions to appear in side bar

### 2.8.0
- Load settings properly
- Fix Aliucord dir not being created
- Fix various PluginDownloader bugs
- Allow disabling updater

### 2.7.1
- Support slowmode permission
- Fix collapsing bug
- Fix admin/owner perms to include new pins perm
- Scan for repo links only in plugin channels

### 2.7.0
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

### 2.6.0
- Temporarily fix Voice Chat until March
- Implement avatar decorations
- Fix animated webp emojis not rendering
- Add safe mode to disable all plugins
- Add missing experiments
- Disable smooth keyboard animation
- Add new Discord badges
- Disallow creating polls without permission
- Remove more billing upsells

### 2.5.0
- Remove old voice workaround
- Don't remove billing if user has nitro (the "billing settings" section from settings is now also removed for non-nitro users)
- Fix links opening in aliucord's window instead of the link's app window (such as youtube)

### 2.4.0
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

### 2.3.1
- Fix various poll bugs
- Fix a crash when leaving a server with a forwarded message loaded
- Fix reply previews
- Add AlignThreads fix as a CorePlugin

# Forks

To install them, download the plugin `.zip` and move it to the `Aliucord/plugins` folder using a file manager & restart Aliucord in case it was open.

|Fork|Download|
|-|-|
|Waifuim fork by Serinova fixes the command being fully broken.|[Download Waifuim fork](https://github.com/OasisVee/AliucordPlugins3/raw/builds/Waifuim.zip)|
|NekosLife fork by Serinova fixes the command being fully broken.|[Download NekosLife fork](https://github.com/OasisVee/AliucordPlugins3/raw/builds/NekosLife.zip)|
|CheckLinks fork by Serinova fixes the majority of the urls not being checked (VirusTotal changed its link structure).|[Download CheckLinks fork](https://github.com/OasisVee/AliucordPlugins2/raw/builds/CheckLinks.zip)|
|Ip fork by Serinova fixes the `/ip` command.|[Download Ip fork](https://github.com/OasisVee/AliucordPluginsSc/raw/builds/Ip.zip)|
|SendEmbeds fork by Serinova makes the `/embed` command work again by using directwebhook (original API died).|[Download SendEmbeds fork](https://github.com/OasisVee/aliucord-pluginsC/raw/builds/SendEmbeds.zip)|
|TapTap fork by Rushii adds option to delete messages.|[Download TapTap fork](https://github.com/yutaplug/Aliucord/raw/builds/TapTap.zip)|
|TextReplace fork by DeafThing removes the character limit.|[Download TextReplace fork](https://github.com/DeafThing/aliucord-pluginsC/raw/builds/TextReplace.zip)|

# Missing Features

Compared to the React Native client.

If a feature isn't here, see the [Backports](/Aliucord/#backports) page in case it already exists as a plugin or it's already built-in.

|Feature|Notes|
|-|-|
|E2EE VC|End-to-end encryption in voice chats|
|Managing join requests|Managing join requests|
|Family center|Family center|
|In-game friends|In-game friends|
|Soundboard|Soundboard in VCs|
|Security keys|Security key to login|
|Custom typing indicators|Yes|

# New UI

**How to get modern Discord interface (UI) in Aliucord**

This is not really possible due to Aliucord using an old Discord version. However, there are two themes ([DiscordRN Dark](https://discord.com/channels/811255666990907402/824357609778708580/1396601756187885659) or [Discord Midnight theme](https://discord.com/channels/811255666990907402/824357609778708580/1400698799600570398)) that replicate the color & font of it (the UI itself is not possible to replicate). You can also use NewIcons plugin and BetterFontScale with 16.5 size.

Alternatively, you can search for another modified Discord client that uses the new version instead of the old one [here](https://github.com/Discord-Client-Encyclopedia-Management/Discord3rdparties).

# Old UI

**Why does Aliucord use an old Discord version?**

1. The new Discord app is React Native while the Discord version that Aliucord uses (126.21) is Kotlin. React Native is a framework for building apps using JavaScript, which is not as performant as Kotlin code. Discord's React Native version is known to have performance issues, especially on lower-end devices, because the app has been ported from iOS over to Android.

2. Everything would need to be rewritten, wasting time, considering how bad the new Discord version is.

3. Aliucord developers don't like to work with the new one. [Notice from the AliucordRN repository](https://github.com/Aliucord/AliucordRN#-notice-)

4. If Aliucord ceases to exist, there wouldn't be any active clients using the good old Discord version. [Bluecord situation](https://github.com/user-attachments/assets/11f4b1cc-e786-4c74-a6a6-3a55dc7c26f0)

5. Features from new Discord versions can be backported to the old one, and [many already have been](https://yutaplug.github.io/Aliucord/#backports). [What does backporting mean?](https://en.wikipedia.org/wiki/Backporting)

6. Modded clients for the new Discord version already exist, such as [Kettu/Rain](https://raincord.dev).

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

# Themer

**Note:** Reading the [Documentation](https://github.com/Aliucord/documentation/blob/main/theme-dev) and using the [Theme maker site](https://aliucord.com/theme-maker) can help you make your own theme.

**If the theme you are using doesn't work for you, either you are not using the right transparency mode, you are not using theme mirror from `#theme-support` pins (this only affects image background), or Themer is broken on your end (can happen depending on Android version/OS)**

### How to set a custom background

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

### How to set a custom font

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

### Why does my background image not work

- You didn't enable transparency
- You enabled full transparency which doesn't work without the template
- You are using `cdn.discordapp.com` or `media.discordapp.net` which don't work as a valid URL anymore
- The URL is incorrect

### How to make the background work with full transparency

- Open the [template](https://github.com/OasisVee/theme-templates/blob/main/full-transparency-background-template.json)
- Press the 3 dots and download
- Move the downloaded `.json` to your `Aliucord/themes` folder using a file manager & restart Aliucord if it was open
- Go to Themer settings, enable full transparency & enable the theme
- Go inside the theme settings → `Background` & paste the image/gif url
- Press back, press the save button & restart Aliucord

# UserPFP and BG

### UserPFP
- Make sure you have the plugin installed
- Join the [UserPFP server](https://discord.gg/userpfp-1129784704267210844)
- Read `#avatar-rules` before proceeding
- Go to `#request-here` and use the `/request` command
- Add the gif you want
- When it's accepted go to the plugin settings and click "Redownload databases"
- Restart Aliucord to see the changes

### UserBG
- Make sure you have the plugin installed
- Join the [UserBG server](https://discord.gg/ECg96KZ3Fh)
- Read `#usrbg-guide` before proceeding
- Use the `/bg` command in any channel that you can type in
- Add the image/gif you want
- Check `#userbg-log` to see if it has been accepted or not
- When it's accepted go to the plugin settings and click "Redownload databases"
- Restart Aliucord to see the changes

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

# Themer Fixer

If you are on an AOSP-based ROM / Custom ROM and you have issues with Themer not theming some components properly, and you have root access, you can try this method. It works for full transparency and no transparency.

### Requirements

- [LSPosed/Vector](https://github.com/JingMatrix/Vector/releases)
    - Vector needs a Zygisk implementation to work
- [Discord Themer](https://github.com/Aliucord/DiscordThemer/releases)
- Aliucord Themer plugin

### Steps

1. Install the Themer plugin in Aliucord and install and enable a theme.
2. Install Discord Themer. You need LSPosed for it to work, so install it too.
3. Enter LSPosed and enable Discord Themer in Modules.
4. Select Aliucord.
5. [Download this file](https://github.com/WhenFreedom/Themes/releases/download/v1.0.1/ThemerFixer.json) 
6. Go to Discord Themer and enable Advanced Settings, then press Load Settings and select the json file you downloaded.
7. Restart Aliucord

### It doesn't work!

In case it didnt work you may want to try to do the following:

1. Enter Discord Themer and enable Force Disable Module.
2. Tap on Colors. 
3. Search for "primary" in the search bar
4. Scroll until you see strings with "(i)" next to them.
5. Make each of these strings transparent by clicking on the color and sliding the transparency bar.
6. Make sure these listed strings are transparent:
    - primary
        - primary_500
        - primary_600
        - primary_630
        - primary_660
        - primary_700
        - primary_800
    - primary_dark
        - primary_dark_600
        - primary_dark_630
        - primary_dark_660
        - primary_dark_700
        - primary_dark_800
    - brand
        - brand_500
    - brand_new
        - brand_new
        - brand_new_500
7. Go back and disable Force Disable Module.
8. Disable Advanced Settings and re-enable it.
9. Restart Aliucord.

# CustomRPC

### How to make images show up to others

Create a Discord application and enter its **Application ID** in CustomRPC, even when using an image URL. Without it, a URL image may appear for you because CustomRPC displays it locally, but other Discord clients may not show it. The application ID lets CustomRPC send image URLs through Discord's image proxy and use uploaded assets.

1. Open CustomRPC settings and press **Developer Portal**, or open the [Discord Developer Portal](https://discord.com/developers/applications).
2. Log in, press **New Application**, enter a name, accept the required terms, and press **Create**. If you already have an application, you can use it instead.
3. In the application's **General Information**, copy the **Application ID**.
4. Return to CustomRPC and paste it into **Application ID** under **Images**.
5. Choose your **Activity type** and fill in **Activity name**, **Details**, and **State**.
6. Set your **Large image** and optionally **Small image** using either method below.
7. Press **Save and enable**, or **Save changes** if the activity is already enabled. Enabling CustomRPC automatically turns on Discord activity sharing.

URL images may take a moment to appear while Discord processes them. If others still cannot see an image, check that the application ID is correct and that the image URL opens without logging in, or use an uploaded asset from that same application.

### Use an image URL

- Under **Large image**, paste a public HTTPS link directly to an image into **Image URL**. The link must work without logging in.
- Optionally, repeat this under **Small image**.
- Add **Hover text** if you want text to appear when someone hovers over the image.
- Press **Save changes** if the activity is already enabled.

### Use an uploaded asset

An asset is an image uploaded to your Discord application. You use its name, called an **asset key**, instead of an image URL.

1. In the Developer Portal, open the application whose ID you entered in CustomRPC.
2. Open **Rich Presence → Art Assets**.
3. Upload your image and give it a simple name, such as `my_image`. Save your changes. Discord references uploaded assets using lowercase keys. [Discord’s asset guide](https://github.com/discord/discord-api-docs/blob/main/developers/rich-presence/using-with-the-embedded-app-sdk.mdx)
4. Return to CustomRPC.
5. Under **Large image**, clear **Image URL** and enter `my_image` into **Asset key**.
6. Optionally, repeat this under **Small image** using another uploaded asset.
7. Press **Save and enable**, or **Save changes** if already enabled.

**Image URLs override asset keys**, so leave the corresponding **Image URL** empty when using an uploaded asset.

# My plugins

### BetterMessageLogger
Better version of MessageLogger with additional options. Also includes options from SimpleMessageLogger. 
See edit history by long pressing the message.

### FakeDecor
Allow users to upload custom avatar decorations locally and through Decor API. Shares API with Vencord, meaning you can also see Vencord users avatar decorations.

### HideCallButtons
Improved and updated version of HideCallButtons by Wing. Hides them in more places than profile sheet and adds a DM-only /call command.

### MarkdownFix
Backports newer Discord markdown: #, ##, ### headers, -# subtext, hyperlinks, bullet points and nested lists. Also fixes broken posts in forums.

### ReadAll
Read all notifications.

### RecentProfilePictures
Backports viewing your six most recent uploaded profile pictures and being able to apply them.

### HideModActions
Hides "Kick/Ban/Timeout" actions on user profile sheet.

### SuperReactions
Backports sending (nitro only) and viewing super reactions.

### ProfileEffects
Backports viewing Discord Nitro profile effects and profile frames.

### CustomRPC
Allows you to set a custom rich presence through plugin settings. Thanks to &lt;@477497542205243392&gt; for helping!

### NewDiscordBadges
Backports displaying newer Discord badges such as evolving Nitro and gifting. More new badges are also planned, such as Account Age, Streaming, Game Time, and Game Variety.

### VoiceMessages
Fixed fork of VoiceMessages by Mantikafasi with redesigned voice button and added compatibility with Android 7. Also adds ability to send audio files as voice messages.

### ForwardMessages
Fork of ForwardMessages by Reis with favoriting support. Hold a channel/dm in the forward menu to favorite/unfavorite.

### SearchHistoryFix
Fixes cleared search history being restored after an app restart.

### InstantMessages
Send messages instantly, without any animation. Also fixes flickering bug when sending a new message.

### IRC
IRC Layout.

### PlayEmbeds
Plays video and audio embeds from anywhere (youtube, soundcloud, spotify, fxtwitter, etc.)
Replaces PlayableEmbeds/Fluff.

### GifDownloadFix
Fixes downloading gifs from tenor, klipy and giphy.
Replaces TenorGifFix.

### SettingsFix
Fixes accessibility and friend request settings persistance.

### NewLinks
Compacts Discord links like new Discord does.
Replaces CompactLinks and does not require MoreHighlight/MarkdownFix.

### ServerDiscovery
Replaces old Discovery plugin.

### Devices
Manage devices from Aliucord. Replaces old Sessions plugin.

### ServerSheetFix
Fixes layout issues in server sheets.

### Onboarding
Backports Onboarding & "Channels & Roles" button.

### ProfileBoard
Backports "Board" and "Wishlist" sections in profiles.

### MessageLinkFix
Forces opening message links in Aliucord instead of browser/official Discord and fixes an issue where sometimes it redirected you to the bottom of the chat.

### ReportRaid
Backports "Report Raid" button in guild sheets.

### NewThemes
Backports themes from new Discord with sync support.

### Bio300
Backports the new 300 character limit when editing your bio.

### Notifications
Backports new notification types.

### FontScaleFix
Fixes "chat font scaling" option not working.

### ReportForm
Backports new report message categories.

### MessageApps
Backports "Apps" button in message context menu.

### Shop
Backports browsing Discord Shop collections and collectibles from User Settings.

### ConnectionInfo
Backports connection info such as Steam games count, Reddit karma count, etc. Replaces UnknownConnectionIcons

### FriendRequestFix
Fixes **accepting** friend requests. For sending, install FriendFix.

### ImageDescriptions
Backports seeing and setting image descriptions (alt text).

### Time
Backports `@time` from desktop.

### QuickReactions
Allows editing which emojis appear in reaction row from plugin settings.

### GameMentions
Backports `@game` from desktop. Requires MarkdownFix to display and open the mentions.

### VoiceChannelMenu
Adds context menu for vcs in channel list with options to edit channel (if you have the perm), copy link and copy id. Interferes with MuteStageAndVoiceChannels.

### KeepChannelScroll
Keeps channel list scroll position per-server even when switching servers and restarting app.

### TranslateMessages
New and better replacement for Translate plugin (not a fork). Has option to auto-translate messages and choose your own API (uses Google API by default).

### DMActivities
Backports seeing activities from your friends in DM row, like in new Discord.

### FallbackFont
Lets you pick your own font file (TTF/OTF) to use for characters your device can't display, instead of showing empty boxes. Works in chat, the chatbox and everywhere else in the app.

### MessageLatency
Port of Vencord plugin.
EXPLANATION: <https://vencord.dev/plugins/MessageLatency>

### StickerPaste
Paste stickers instead of directly sending them (nitro only).

### DMButtonIcon
Allows you to change the DM icon to any Discord icon through plugin settings.

### SquareServers
Make server icons square like the new Discord app.

# FAQ

### Can Aliucord be used with the new Discord UI?
No. Aliucord can only be used with 126.21 Discord version and the devs won't update the base version to a newer one due to several reasons (a list can be found [here](/documentation#old-ui)). This doesn't mean Aliucord is abandoned, it is still actively maintained and plugins are still being created and worked on, along with backports of features from new Discord. You can use [another client](https://github.com/Discord-Client-Encyclopedia-Management/Discord3rdparties) that uses the new version if you prefer it.

Note: To make Aliucord the closest possible to new Discord, you can use [DiscordRN Dark](https://discord.com/channels/811255666990907402/824357609778708580/1396601756187885659) or [Discord Midnight theme](https://discord.com/channels/811255666990907402/824357609778708580/1400698799600570398) themes that replicate the color & font (the UI itself is not possible to replicate). You can also use NewIcons plugin and BetterFontScale with 16.5 size.

### What features from new Discord have been backported? and which ones are missing?
See [this list](/Aliucord/#backports) for backported features and [this one](/Aliucord/#missing-features) for missing features.

### Is tracking & telemetry disabled / is there a no track plugin?
Yes, NoTrack is part of the CorePlugins. Crashlytics, Adjust, Discord analytics and Spotify analytics are all disabled.

### Is Aliucord safe? does it have any virus or can i get banned for using it?
Aliucord is completely safe & open source. It has been the most popular Discord client mod for many years already, and there's no case of someone being banned for using it nor getting hacked. Just don't install unofficial plugins that might abuse the API or steal your credentials (and don't share your token).

### Google Play Protect says Aliucord is potentially harmful
Every Android app is signed with a signature by its developer. This way Android can confirm an apk comes from a credible source and wasn't tampered with. Because Aliucord is built locally on your device, that also means it is signed locally on your device, with a signature created just for you (can be found at Aliucord/ks.keystore). This means that the signature of your Aliucord app is unique and Google doesn't recognise it. That's why it shows you a warning that this app is from an untrusted developer. Thus, you can safely ignore the warning.

### Duckduckgo anti tracker / Other anti tracker says Aliucord contains trackers even though its supposed to block them
Most of these apps simply check for the existence of tracking libraries inside the app. Aliucord still contains discords tracking libraries, removing them entirely would be virtually impossible. Instead, we simply disable them or patch them to do nothing. So while anti tracking apps still flag Aliucord, tracking is disabled as much as possible. The only tracking that is still enabled is essential for basic functionality, for instance Google firebase is required for notifications to work as that is how discord sends them to your phone.

### Why is Aliucord starting so slowly?
First reason is most likely MessageLogger plugin, this plugin has a database which can make your app slower if it gets big. To clear it go to the plugin settings and click both clear edited messages and deleted messages. If this didn't solve it or you don't even have the plugin installed, try clearing cache, app data or reinstalling Aliucord through the manager.

### I got the new experimental status notifications for when friends change their status, how do i turn it off?
Go into the notification settings for Aliucord (Settings app, not inside Aliucord) and go into notification categories. There you should find a setting called "other". Turn it off. If you don't see notification categories, go into advanced settings first and turn on "Manage notification categories for each app".

### I can't login because of 2FA
If you have logging issues due to 2FA you most likely have security keys added. You will need to remove them from an official Discord client. After that, you will be able to log in normally. Note that backup codes do not work either.

### Manager is failing on downloading step
Use a VPN (if you don't have one, ProtonVPN is free) or use another network. Some ISPs, such as all the ones in Turkey, block either our backend and/or GitHub.

### Manager is failing or is stuck on installing step
Your OS doesn't properly show install prompts. Cancel the install, enable "Keep Patched APKs" in settings, try to re-install, and once you get stuck again, then go back to settings to export the apk. You can then manually install the APK yourself.
