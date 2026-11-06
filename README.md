# AEVOR — static watch discovery website

## Files
- `index.html` — page structure, SEO metadata and structured data
- `styles.css` — responsive styling, themes and motion
- `app.js` — product catalogue and all browser-side interactions
- `manifest.webmanifest`, `sw.js`, `favicon.svg` — installability/offline shell

## Run / deploy
Upload all files into the same folder on any static host (Cloudflare Pages, GitHub Pages, etc.). PWA installation requires HTTPS (or localhost). Product images and Google Fonts are externally hosted, so those assets need an internet connection.

## Edit the catalogue
Open `app.js` and find `const PRODUCTS = [...]` near the top.
Each product is one object:
- `id`: unique, URL-safe identifier
- `name`, `brand`, `price`
- `gender`: Men / Women / Unisex
- `type`: Analog / Digital / Smart
- `strap`, `movement`, `style`
- `affiliate`: the destination for the Order now button
- `image`: public image URL
- `specs`: details shown in quick view and comparison
- `featured`: higher numbers appear earlier in Featured sorting

To add a product, copy one object and change its fields. To remove one, delete its object including the comma separator. Use `price: null` when no price is known. Do not invent product specifications; use `Not specified` until verified.

## Browser storage
Wishlist, recently viewed, comparison selections and theme preference use `localStorage` on the visitor's device. Clearing browser data removes them. There is no central account or cross-device sync.

## Affiliate / commerce notes
AEVOR is a discovery and affiliate-referral experience, not a checkout. The seller handles payment, stock, shipping, returns and warranty. Confirm affiliate program terms and disclose commissions clearly. Links currently use `rel="sponsored nofollow"`.

## Important limitations / launch checklist
1. Replace the typographic AEVOR placeholder with the supplied official logo if you have a logo asset file. The current logo is a text mark because no logo file was attached to this build request.
2. The PWA uses a simple SVG icon. For wider iOS/Android compatibility, add dedicated 192×192 and 512×512 PNG icons and update the manifest.
3. The Watch of the Week area is prepared for weekly rotation logic, but this starter build's visible feature is the rotating Editor's Choice. If you want a distinct Watch of the Week block, add it as a separate section.
4. Product specs are conservative placeholders based on the supplied names and listing text. Verify every claim against the seller page before publishing.
5. Product images and affiliate URLs can change or be removed by the marketplace.
6. SEO needs a final public domain, real social preview image, Search Console verification, sitemap.xml and robots.txt before launch.
7. The search and filters work in the browser only. Search engines may not index product-specific client-rendered content as reliably as server-rendered pages.
8. The current `sw.js` caches the static app shell, not third-party marketplace images.
