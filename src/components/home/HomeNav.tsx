import Link from "next/link";
import FoldMark from "@/components/brand/FoldMark";
import { navItems, type NavItem } from "@/content/home";

const BASE =
  "inline-flex min-h-[2.75rem] items-center font-text text-[0.9375rem] font-medium leading-none tracking-[0.01em] text-mineral no-underline transition-colors duration-[240ms]";
const PLAIN  = `${BASE} px-2 hover:text-white`;
const BUTTON = `${BASE} rounded-[2px] border border-mineral/60 px-5 hover:border-mineral hover:bg-mineral/10`;

function ItemLink({ item }: { item: NavItem }) {
  const className = item.cta ? BUTTON : PLAIN;
  return item.href.startsWith("/")
    ? <Link href={item.href} className={className}>{item.label}</Link>
    : <a href={item.href} className={className}>{item.label}</a>;
}

/* Minimal primary navigation. Only destinations that work today
   (see content/home.ts). Two short items fit at every width, so there is
   no collapsed menu to maintain. */
export default function HomeNav() {
  return (
    <header data-theme="dark" className="mindra absolute inset-x-0 top-0 z-[100] bg-carbon">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-8 lg:px-[max(48px,6vw)]"
      >
        <Link href="/" aria-label="MINDRA — home" className="-ml-1 flex items-center p-1">
          <FoldMark priority sizes="64px" quality={90} alt="" className="block h-auto w-[52px]" />
        </Link>

        <ul className="m-0 flex list-none items-center gap-2 p-0 sm:gap-4">
          {navItems.map((item) => (
            <li key={item.label}><ItemLink item={item} /></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
