import Link from "next/link";
import Image from "next/image";
/* Approved flat two-colour lockup (Asset Package V1.0, 02_Flat_Vector). The
   dimensional master is for 400 px and wider; below that the guide calls for flat. */
import lockup from "@/assets/brand/mindra-lockup-flat-mineral.svg";
import { footer } from "@/content/home";
import { CONTAINER, External } from "@/components/home/primitives";

const LABEL =
  "mb-4 font-text text-[0.75rem] font-semibold uppercase leading-[1.3] tracking-[0.12em] text-sage";
const LINK =
  "inline-flex min-h-[2.75rem] items-center gap-2 font-text text-[0.9375rem] leading-[1.4] text-mineral no-underline transition-colors duration-[240ms] hover:text-white";

/* Restrained sign-off. The approved stacked flat two-colour lockup (Mineral
   wordmark, for Carbon grounds) anchored bottom-left of the grid, working
   links only, contact, copyright. */
export default function HomeFooter() {
  return (
    <footer data-theme="dark" className="mindra relative z-[3] bg-carbon text-mineral">
      <div className={`${CONTAINER} pb-8 pt-20 md:pt-24`}>
        <div className="grid gap-14 md:grid-cols-12 md:gap-x-6">
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" aria-label="MINDRA — home" className="inline-block">
              <Image
                src={lockup}
                alt="MINDRA"
                className="block h-auto w-[168px] md:w-[192px]"
              />
            </Link>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-12 md:col-span-7 lg:col-span-8 lg:grid-cols-3">
            <div>
              <p className={LABEL}>{footer.navLabel}</p>
              <ul className="m-0 list-none p-0">
                {footer.nav.map((l) => (
                  <li key={l.label}><a href={l.href} className={LINK}>{l.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <p className={LABEL}>{footer.productsLabel}</p>
              <ul className="m-0 list-none p-0">
                {footer.products.map((p) => (
                  <li key={p.label}>
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className={LINK}>
                      {p.label}
                      <External />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 lg:col-span-1">
              <p className={LABEL}>{footer.contactLabel}</p>
              <a href={footer.contact.href} className={LINK}>{footer.contact.label}</a>
            </div>
          </nav>
        </div>

        <div className="mt-16 border-t border-mineral/15 pt-6 md:mt-20">
          <p className="m-0 font-text text-[0.8125rem] leading-[1.4] text-mineral/70">
            © {new Date().getFullYear()} {footer.legal}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
