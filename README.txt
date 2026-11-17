MYSTE LOUNGE WEBSITE
====================

DEPLOY TO NETLIFY
1. Unzip this file. You'll get a folder called myste-site.
2. Log in at app.netlify.com.
3. Add new project > Deploy manually. Drag the myste-site folder in.
4. Netlify gives you a test address like something.netlify.app. Check it on
   your phone and computer.

TURN ON THE CONTACT FORM (one time)
1. In the Netlify project: Project configuration > Forms > Enable form detection.
2. Drag the folder in again (Deploys > drag to redeploy).
3. Forms > Form notifications > Add notification > Email > info@mystelounge.com.
4. Send a test message from the site to confirm it arrives.

CONNECT MYSTELOUNGE.COM (only when you're happy with the test site)
1. Netlify: Domain management > Add a domain > mystelounge.com.
2. Wix: Domains > mystelounge.com > Manage DNS records.
   - A record, host @  ->  75.2.60.5   (replace the existing Wix A records)
   - CNAME, host www   ->  your-site-name.netlify.app
   - Do NOT touch the MX records (that's the info@ email).
3. Wait a few hours. Netlify adds HTTPS automatically.
Old Wix page addresses (/menu, /reservations, /event-list, etc.) redirect
to the right place on the new site.

ADDING CONTENT LATER (search index.html for "LATER")
- Gallery: put photos in images/ and paste the gallery section back in.
- Menu: add a photo and a price list to each card.
- Keep photos under about 400 KB each.
