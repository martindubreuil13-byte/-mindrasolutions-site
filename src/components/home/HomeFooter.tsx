import Link from "next/link";
import Image from "next/image";
import lockup from "@/assets/brand/mindra-lockup.png";
import { footer } from "@/content/home";

const LABEL =
  "mb-4 font-text text-[0.6875rem] font-semibold uppercase leading-[1.3] tracking-[0.12em] text-sage";
const LINK =
  "inline-flex min-h-[2.25rem] items-center font-text text-[0.9375rem] leading-[1.4] text-mineral no-underline transition-colors duration-[240ms] hover:text-white";

/* Restrained sign-off. Approved stacked lockup anchored bottom-left,
   working links only, copyright. */
export default function HomeFooter() {
  return (
    <footer data-theme="dark" className="mindra relative z-[3] bg-carbon text-mineral">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-14 md:px-8 md:pt-16 lg:px-[max(48px,6vw)]">
        <div className="grid gap-12 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-5">
            <Link href="/" aria-label="MINDRA — home" className="inline-block">
              <Image
                src={lockup}
                alt="MINDRA"
                sizes="140px"
                className="block h-auto w-[140px]"
              />
            </Link>
          </div>

          <nav aria-label="Footer" className="md:col-span-3 md:col-start-7">
            <p className={LABEL}>{footer.productsLabel}</p>
            <ul className="m-0 list-none p-0">
              {footer.products.map((p) => (
                <li key={p.label}>
                  {p.external ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className={LINK}>
                      {p.label}<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <Link href={p.href} className={LINK}>{p.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className={LABEL}>{footer.contactLabel}</p>
            <a href={footer.contact.href} className={LINK}>{footer.contact.label}</a>
          </div>
        </div>

        <div className="mt-12 border-t border-mineral/15 pt-6 md:mt-14">
          <p className="m-0 font-text text-[0.8125rem] leading-[1.4] text-mineral/70">
            © {new Date().getFullYear()} {footer.legal}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
