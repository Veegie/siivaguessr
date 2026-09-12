# [SiIvaGuessr](https://siivaguessr.meme)

A daily browser game for guessing the jokes in high-quality [SiIvaGunner](https://youtube.com/c/SiIvaGunner) rips. Released under MIT to allow others to contribute or host their own forks, if they so desire.

## Database

All songs and answers are stored in `/js/db.js`. This is kept separate from the game and UI logic in `/js/siivaguessr.js` because the database contains around 12,000 songs, which, as you might expect, makes the file quite unwieldy. There are countless ways to make this more efficient, but most of them would involve setting up a proper backend, and I had no interest in putting in that kind of effort. The main downside of keeping everything static and client-side is the extra cost in serving the files, which is easy enough to offload to services like CloudFlare.

(And yes, it makes it easier to cheat, but cheating in a 'dle is impossible to prevent, so, also not really worth the effort!)

Once the database is loaded, the song list used for the autocomplete entry is populated by iterating over all entries and retrieving all song titles and answers.

### Entry Format

Fairly self-explanatory. Each entry in the database is a plain JavaScript object, keyed by the rip's YouTube video hash.

```
"MFFy3zH81es": {
    "title": "Break Down - Cave Story",
    "wiki": "https://siivagunner.wiki/wiki/Break%20Down%20(Alpha%20Mix)%20-%20Cave%20Story",
    "joke": "Light's Theme - Death Note",
    "artist": "Helpful Salad"
}
```

`title`: The name of the track. The title displayed on YouTube.

`wiki`: Link to the rip's SiIvaGunner wiki article.

`joke`: The answer to expect when this question is loaded.

`artist`: The rip creator, if known.

Some rips have titles that can't reasonably be guessed if a song is selected in Reverse or Sicko Mode (Fusion remixes, April Fools' Day titles, rips that do not use any elements from the original song, non-existent tracks, tracks from games that don't exist, etc.). The core of the game is recognizing songs, not memorizing YouTube video titles, so to prevent this situation and to prevent cluttering the song list with these titles, add an `exclude` property to an entry, set to `"title"`, to prevent the title from being added to the song list:

```
"8yKicipHiQE": {
    "title": "SEQ_PRINCE - LazyTown (DS) (Unreleased)",
    "exclude": "title",
    "wiki": "https://siivagunner.wiki/wiki/SEQ%20PRINCE%20-%20LazyTown%20(DS)%20(Unreleased)",
    "joke": "I'm a Prince - LazyTown",
    "artist": "scooblee"
}
```

For similar reasons, I recommend removing `(___ Mix)` and other variation subtitles from song titles, as these will create useless noise in the song list.

### Multi-Joke Rips

Same format, but `joke` is an array of objects following this format:

`time`: A comma separated list of timestamps and timestamp ranges.

`joke`: Same as `joke` above.

Example:

```
"_mHHzgQD5-c": {
    "title": "Remix 9 - Rhythm Heaven Fever",
    "wiki": "https://siivagunner.wiki/wiki/Remix%209%20(Japanese)%20(Instrumental)%20-%20Rhythm%20Heaven%20Fever",
    "joke": [
        { "time": "3:51, 0:07, 1:36", "joke": "Dreamscape - 009 Sound System" },
        { "time": "0:16, 0:37-0:42,1:45, 2:06-2:11", "joke": "Paralyzer - Finger Eleven" },
        { "time": "0:30", "joke": "Promise (Get Down) - Hirose Kohmi" },
        { "time": "2:16, 0:44", "joke": "Never Gonna Give You Up - Rick Astley" },
        { "time": "0:51-0:56, 2:20-2:25", "joke": "Night of Nights - beatMARIO / COOL&CREATE" },
        { "time": "3:29, 0:59, 1:14, 2:29, 2:43, 3:15", "joke": "Bad Apple!! feat.nomico - Alstroemeria Records" },
        { "time": "1:07, 1:21-1:27, 2:36, 2:50-2:56,3:22, 3:36-3:42", "joke": "Caramelldansen - Caramell" },
        { "time": "1:59", "joke": "RED ZONE - beatmania IIDX 11 IIDX RED" }],
    "artist": "WaluigiTime64"
},
```

## Building & Hosting

There's not really anything to build. A simple bash script is provided to simplify the packaging a bit. All it requires is [terser](https://github.com/terser/terser), which is used to minify the JavaScript.

```
npm install terser -g
```

Run the script with `bash build.sh`. The output is a `dist/` folder containing all the required files.

Put the contents of `dist/` on any web server capable of serving static files, and it should be good to go. I _highly_ recommend setting up a service like CloudFlare to cache the files. The database is loaded in its entirety client-side, which is a whopping 4.5 MB per visitor. Because the entire site is static files, CloudFlare caches pretty much the entire thing.

### Fix for Bluesky Embeds

Bluesky's logic for fetching OpenGraph images in embed cards, for some reason, defaults to full-sized article images even if a 200x200 icon is provided. This makes embeds look awful, as you would expect:

![Screenshot of a Bluesky post, showing a 200x200px icon messily resized to fill a 512px wide preview](https://i.imgur.com/cwnNc3Z.png)

To fix this, you will need to do some custom routing based on the user agent. For nginx, add the following map directive to your `nginx.conf` to detect the user agent of Bluesky's content scraper:

```
map $http_user_agent $use_banner_og_img {
    default 0;
    "~*Bluesky Cardyb" 1;
}
```

And then read the variable as so in your site's configuration:

```
location /img/logo200.png {
    if ($use_banner_og_img = 1) {
            return 301 /img/banner.png;
    }
    try_files $uri $uri/ =404;
}
```

This selectively redirects requests for the logo icon to the larger banner, only when the request is coming from Bluesky. And embeds are fixed:

![Screenshot of a Bluesky post which is correctly displaying the SiIvaGuessr logo](https://i.imgur.com/temfHHF.png)