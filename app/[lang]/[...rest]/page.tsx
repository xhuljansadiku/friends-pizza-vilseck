import { notFound } from "next/navigation";

// Any URL without its own route lands here, so the localized not-found page
// renders inside the site layout (header, footer) instead of the bare default.
export default function CatchAll() {
  notFound();
}
