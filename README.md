# IZAAN CURTAINS website

Static site: `index.html`, `style.css`, `script.js`. No build step, no paid services.

## Deploy on GitHub Pages (free)
1. Create a GitHub repository and upload everything in this folder (keep the `assets` folder).
2. Repo **Settings → Pages** → Source: *Deploy from a branch* → Branch `main`, folder `/ (root)` → Save.
3. Your site appears at `https://<your-username>.github.io/<repo-name>/`.

## Adding your logo and photos
- Your original logo is included unchanged as `assets/logo.png` (header and footer). Copy slide photos to `assets/slide-1.jpg` … `slide-4.jpg`; they load automatically.
- Admin panel: open `index.html#admin` (or the footer "Admin" link). Set your WhatsApp number, phone, email, address and Maps link there.
  Admin data (products, gallery, details) is saved **in the visitor's own browser only** for now, so changes made there
  are not visible to other people until Firebase is connected.

## Firebase later (free Spark plan)
All data reads/writes go through the `Store` object near the top of `script.js` (keys `iz_s`, `iz_p`, `iz_g`, `iz_sl`, `iz_logo`).
To connect Firebase: create a project, enable Firestore (data), Storage (photos) and Authentication (admin login),
paste the config into `firebase-config.js`, load the Firebase web SDK before `script.js`, and replace `Store.get/Store.set`
with Firestore calls. Replace the browser-only passcode with Firebase Authentication and lock writes with Firestore security rules.
