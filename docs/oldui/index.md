# Why does Aliucord use an old Discord version?

- The new Discord app is React Native while the Discord version that Aliucord uses (126.21) is Kotlin. React Native is very slow compared to Kotlin. RN is a framework for building apps using JavaScript, which is not as performant as Kotlin code. Discord's React Native version is known to have performance issues, especially on lower-end devices, because the app has been ported from iOS over to Android.

- Everything would need to be rewritten, wasting time, considering how bad the new Discord version is.

- Aliucord developers don't like to work with the new one. [Notice from the AliucordRN repository](https://github.com/Aliucord/AliucordRN#-notice-)

- If Aliucord ceases to exist, there wouldn't be any active clients using the good old Discord version. [Bluecord situation](https://github.com/Discord-Client-Encyclopedia-Management/Discord3rdparties#user-content-fn-8-9830c9da557f0042dfc833eae2becd36)

- Features from new Discord versions can be backported to the old one. [What does backporting mean?](https://en.wikipedia.org/wiki/Backporting)

- Modded clients for the new Discord version already exist, such as [Kettu](https://www.raincord.dev/kettu) or [Shiggycord](https://shiggycord.dev).
