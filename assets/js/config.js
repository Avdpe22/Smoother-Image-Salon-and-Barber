/* =============================================================
   SMOOTHER IMAGE — LINK CONFIGURATION
   -------------------------------------------------------------
   This is the ONLY file you edit to change where booking buttons
   and social icons point. Every page reads from here, so one edit
   updates the whole site.

   HOW TO FILL THIS IN
   -------------------
   Whichever platform you land on (Cal.com, Fresha, Square, etc.),
   you get one public link per barber plus one "book anyone" link.
   Paste those URLs below, exactly as the platform gives them.

   Example shapes:
     Cal.com   ->  https://cal.com/smootherimage-mike/haircut
     Fresha    ->  https://www.fresha.com/book-now/<your-slug>
     Square    ->  https://squareup.com/appointments/book/<id>

   Leave a value as "#" and that button simply won't navigate.
   ============================================================= */

const BOOKING_LINKS = {
  general:  "#SET_YOUR_MAIN_BOOKING_LINK",
  mike:     "#SET_MIKE_BOOKING_LINK",
  twaun:    "#SET_TWAUN_BOOKING_LINK",
  jordan:   "#SET_JORDAN_BOOKING_LINK",
  shenique: "#SET_SHENIQUE_BOOKING_LINK",
  creshawn: "#SET_CRESHAWN_BOOKING_LINK"
};

/* -------------------------------------------------------------
   SOCIAL LINKS
   Snapchat is the shop's real, verified location page.
   The other three are PLACEHOLDERS — replace before launch.
   ------------------------------------------------------------- */
const SOCIAL_LINKS = {
  instagram: "#SET_REAL_INSTAGRAM_URL",
  facebook:  "#SET_REAL_FACEBOOK_URL",
  tiktok:    "#SET_REAL_TIKTOK_URL",
  snapchat:  "https://www.snapchat.com/place/smoother-image-barber-and-beauty/03f40722-f482-11ed-8fb7-7be766b3690a",
  google:    "#SET_GOOGLE_BUSINESS_PROFILE_URL"
};

/* -------------------------------------------------------------
   SHOP DETAILS — used by the footer and structured data.
   ------------------------------------------------------------- */
const SHOP = {
  name: "Smoother Image Barber Salon",
  phone: "+18169661272",
  phoneDisplay: "(816) 966-1272",
  street: "12121 Blue Ridge Ext, Suite F",
  city: "Grandview",
  state: "MO",
  zip: "64030"
};
