## [SiIvaGuessr](https://siivaguessr.meme)

A daily browser game for guessing the jokes in high-quality [SiIvaGunner](https://youtube.com/c/SiIvaGunner) rips. Released under MIT to allow others to contribute or host their own forks, if they so desire.

### Database

All songs and answers are stored in `/js/db.js`. This is kept separate from the game and UI logic in `/js/siivaguessr.js` because the database contains around 12,000 songs, which, as you might expect, makes the file quite unwieldy. There are countless ways to make this more efficient, but most of them would involve setting up a proper backend, and I had no interest in putting in that kind of effort. The main downside of keeping everything static and client-side is the extra cost in serving the files, which is easy enough to offload to services like CloudFlare.

(And yes, I guess it makes it easier to cheat, but cheating in a 'dle is impossible to prevent, so, also not really worth the effort!)

### Building & Hosting

There's not really anything to build. A simple bash script is provided to simplify the packaging a bit. All it requires is [terser](https://github.com/terser/terser), which is used to minify the JavaScript.

```
npm install terser -g
```

Run the script with `bash build.sh`. The output is a `dist/` folder containing all the required files.

Put the contents of `dist/` on any web server capable of serving static files, and it should be good to go. I _highly_ recommend setting up a service like CloudFlare to cache the files. The database is loaded in its entirety client-side, which is a whopping 4.5 MB per visitor. Because the entire site is static files, CloudFlare caches pretty much the entire thing.

#### Fix for Bluesky Embeds

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