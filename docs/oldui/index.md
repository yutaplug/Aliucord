
# Why does Aliucord use an old Discord version?
1. React Native is very slow compared to Kotlin. RN is a framework for building apps using JavaScript, which is not as performant as Kotlin code. Discord's React Native version is known to have performance issues, especially on lower-end devices, because the app has been ported from iOS over to Android.
2. Everything would need to be rewritten, wasting time, considering how bad the new Discord version is.
3. Aliucord developers don't like to work with the new one.
:::details Notice from the AliucordRN repository
We decided to keep all development on the good old 126.21 version of Discord, which is the last version of Discord that doesn't use React Native framework. It may lack of new features that Discord added in the past year, but we should be able to keep existing functionality and to add some new features. [...] Most of our developers just disliked working and using Discord React Native (its performance is really poor and is full of bugs, there are many reasons to just not like it). If you still want to use new Discord with mods, the best choice is Vendetta (made by different team, unaffiliated).  
Source: [GitHub](https://github.com/Aliucord/AliucordRN#-notice-)
:::
4. If Aliucord ceases to exist, there wouldn't be any active clients using the good old Discord version.
:::warning Bluecord
Bluecord is also a modded client for the old version of Discord, but the main developer is not a good person, so we don't recommend using it.  
Source: [Google Drive](https://drive.google.com/drive/mobile/folders/1Y2m2lMSpN3GlOcXyceaO88Ljnr8xuNcp)
:::
5. Features from new Discord versions can be backported to the old one.
:::tip What does backporting mean?
Backporting is the process of porting a software update that was developed for a relatively current version of a software entity, to an older version of the software.  
Source: [Wikipedia](https://en.wikipedia.org/wiki/Backporting)
:::
6. Modded clients for the new Discord version already exist, such as [Kettu](https://github.com/C0C0B01/KettuManager/releases/).