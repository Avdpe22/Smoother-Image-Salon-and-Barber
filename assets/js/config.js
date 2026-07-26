/* ==========================================================================
   SMOOTHER IMAGE — SITE CONFIG
   --------------------------------------------------------------------------
   Edit this one file to change every booking + social link across the site.
   Every <a data-book="..."> and <a data-social="..."> element gets its href
   filled in from here by assets/js/app.js.

   BOOKING STATUS (verified July 2026)
   Two live Booksy books exist for this address:
     Mike Neal   — booksy 387165, 5.0 / 251 reviews, full service menu
     Twuan Looney— booksy 1658389, 5.0 / 26 reviews, evenings only
   Jordan, Shenique and Creshawn have no Booksy book yet, so their buttons
   fall back to the main shop page. Add their URLs below when they have one.

   Two other "Smoother Image" Booksy listings exist (1562002 and 1423642).
   Both are empty shells with no services and wrong address data — one is
   recycled from a previous tenant. Do NOT link them. Claim and delete them
   through Booksy support instead.
   ========================================================================== */

window.SITE_CONFIG = {
  booking: {
    // Main shop listing — Mike Neal's book.
    general:  "https://booksy.com/en-us/387165_smoother-image-barber-shop_barber-shop_25016_grandview",
    mike:     "https://booksy.com/en-us/387165_smoother-image-barber-shop_barber-shop_25016_grandview",

    // Twuan Looney's own Booksy business. Evenings only (after 4pm).
    twuan:    "https://booksy.com/en-us/1658389_smoother-image-twuan_barber-shop_25016_grandview",

    // TODO — no book yet. Currently falls through to the main shop page.
    jordan:   "",
    shenique: "",
    creshawn: ""
  },

  social: {
    instagram: "https://www.instagram.com/smootherimage95/",
    facebook:  "https://www.facebook.com/mike.neal.12",
    tiktok:    "",
    snapchat:  "https://www.snapchat.com/place/smoother-image-barber-and-beauty/03f40722-f482-11ed-8fb7-7be766b3690a",
    google:    ""
  }
};
