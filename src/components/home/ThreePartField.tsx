import { threePartField as content } from "@/content/home";

/* The Three-Part Field (Playbook p. 21).
   Three equal fields, fixed reading order, one colour, one continuous
   hairline that resolves into the closing statement. No icons.
   Narrow screens: fields stack and the line runs down the left edge. */
export default function ThreePartField() {
  return (
    <section
      id="intelligence"
      aria-labelledby="three-part-field-title"
      data-theme="light"
      className="mindra-on-sage bg-sage text-carbon"
    >
      <h2 id="three-part-field-title" className="sr-only">{content.heading}</h2>

      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-[max(48px,6vw)] py-8 md:py-9 lg:py-10">
        <div className="border-l border-carbon pl-5 md:border-l-0 md:pl-0">
          <ul className="m-0 grid list-none grid-cols-1 gap-y-6 p-0 md:grid-cols-3 md:gap-x-6 lg:gap-x-8">
            {content.fields.map((f) => (
              <li key={f.label}>
                <p className="mb-2 font-text text-[0.6875rem] font-semibold uppercase leading-[1.3] tracking-[0.12em]">
                  {f.label}
                </p>
                <p className="m-0 max-w-[16ch] font-display text-[1.375rem] font-normal leading-[1.2] tracking-[-0.01em] md:max-w-[18ch] lg:text-[1.625rem]">
                  {f.text}
                </p>
              </li>
            ))}
          </ul>

          {/* One continuous 1px line across all three fields */}
          <div aria-hidden className="mt-7 hidden h-px w-full bg-carbon md:block" />

          <p className="mt-6 font-text text-[0.9375rem] font-semibold leading-[1.4] md:mt-5 lg:text-[1.0625rem]">
            {content.statement}
          </p>
        </div>
      </div>
    </section>
  );
}
