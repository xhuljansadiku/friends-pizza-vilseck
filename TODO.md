# TODO – Friends Pizza Vilseck

## Duhet nga pronari / ne

- [ ] **Picat online:** sistemi i porosive (DISH, `friends-pizza.order.app.hd.digital`) nuk ka picat 1–14. Pronari duhet të kontrollojë panelin e DISH.
- [ ] **Legjenda e alergjenëve:** çfarë do të thonë kodet `1,2,3…` dhe `a,b,c…`. Kodet janë ruajtur te `allergens` në `lib/content.ts`; legjenda shtohet poshtë menusë.
- [ ] **Vlerësimet e Google:** 3–5 vlerësime të vërteta (teksti, emri, yjet) nga Google Maps, që shtohen te `testimonials` në `lib/content.ts`. Rating-u dhe numri janë te `googleReviews`.
- [ ] **Tuna Salad (€8.50):** është në sistemin e porosive, por jo në menunë tonë. Duhet konfirmuar.
- [x] **Instagram / Facebook:** shtuar te footer-i, faqja Contact dhe `sameAs` për Google (`business.social` në `lib/content.ts`).
- [x] **Fotot:** 5 foto te `public/images/` (hero, galeria, About). Origjinalet 1–13.jpg dhe screenshot-i te `public/` duhen fshirë ose zhvendosur para publikimit. 11.jpg (fëmijë) nuk përdoret pa pëlqimin e prindërve.
- [ ] **Hostingu:** ku do publikohet faqja. Ndërruesi EN/DE (`proxy.ts`) kërkon host që ekzekuton Next.js (p.sh. Vercel), jo hosting statik.

## Vendim

- [x] **Google Maps:** zgjidhur me banner cookie-sh. Harta ngarkohet vetëm pas pëlqimit ("Load map" / "Accept all"); "Cookie settings" te footer-i e rihap bannerin.

## Më vonë: teknike / SEO

- [ ] Faqe 404 e personalizuar.
- [ ] Lidhje te profili i Google Business.

## Në fund: rishikimi ligjor (Impressum + Datenschutz)

- [ ] Kontrollo çfarë shërbimesh të jashtme përdor faqja realisht.
- [ ] Datenschutz: hoster-i i saktë (tani shkruan One.com).
- [ ] Datenschutz: DISH si ofruesi i porosive online.
- [x] Datenschutz: Google Maps dhe Cookies përditësuar sipas bannerit (pëlqim, Art. 6 Abs. 1 lit. a DSGVO, § 25 TDDDG).
- [ ] Impressum: USt-IdNr., nëse ka.
- [ ] Pronari (Fatmir Fazliji) lexon dhe konfirmon të dy tekstet.
