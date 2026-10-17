# TODO – Friends Pizza Vilseck

## Duhet nga pronari / ne

- [ ] **Picat online:** sistemi i porosive (DISH, `friends-pizza.order.app.hd.digital`) nuk ka picat 1–14. Pronari duhet të kontrollojë panelin e DISH.
- [x] **Legjenda e alergjenëve:** marrë nga menuja e printuar (2026-10-17). Kodet dalin pranë çdo pjate te faqja Speisekarte, legjenda poshtë menusë (`allergenLegend` në `lib/content.ts`). "h) sulfide" u përkthye si Sulfite.
- [ ] **Dallime menuja e printuar vs. faqja e vjetër:** Quattro Formaggi (printuar: feta, faqja: fontina) dhe Margherita (printuar: mini mozzarella, pa kripë). Tani mbetet versioni i faqes së vjetër. Pronari të thotë cili është i saktë.
- [x] **Vlerësimet e Google:** vendosur të mos shtojmë citate. Seksioni tregon vetëm rating-un dhe numrin (`googleReviews` në `lib/content.ts`) me link te Google, ku vizitorët i lexojnë vetë. Rating-u dhe numri përditësohen me dorë kur ndryshojnë.
- [x] **Tuna Salad (€8.50):** konfirmuar nga menuja e printuar dhe shtuar. Gjithashtu u shtuan Veggie Pizza, Ham Pizza, Ben & Jerry's, Liefergebühr 2 €, Mindestbestellwert 15 € (fletëpalosja thotë 10 €, por i saktë është 15 €, sipas përdoruesit 2026-10-17) dhe pagesa në dollarë.
- [x] **Instagram / Facebook:** shtuar te footer-i, faqja Contact dhe `sameAs` për Google (`business.social` në `lib/content.ts`).
- [x] **Fotot:** 5 foto te `public/images/` (hero, galeria, About). Origjinalet 1–13.jpg dhe screenshot-i te `public/` duhen fshirë ose zhvendosur para publikimit. 11.jpg (fëmijë) nuk përdoret pa pëlqimin e prindërve. Fotot e menusë së printuar (WhatsApp, 2026-10-17) u zhvendosën nga public/images te Desktop/friends-pizza-menu-photos/, që të mos publikohen.
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
- [x] Impressum: USt-IdNr. Sipas përdoruesit (2026-10-17) është biznes i vogël / i vetëpunësuar, pa USt-IdNr., prandaj nuk shtohet. Pronari ta konfirmojë gjatë rishikimit.
- [ ] Pronari (Fatmir Fazliji) lexon dhe konfirmon të dy tekstet.
