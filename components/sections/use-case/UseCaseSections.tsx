import { RichText } from "@/components/common/RichText";
import type { UseCase } from "@/data/use-cases";

export function UseCaseSections({ uc }: { uc: UseCase }) {
  if (!uc.sections?.length) return null;

  return (
    <>
      {uc.sections.map((section, i) => (
        <section
          key={section.heading}
          className="py-20"
          style={{
            background: i % 2 === 0 ? "var(--bg-base)" : "var(--bg-surface)",
            borderTop: "1px solid var(--bg-border)",
          }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="font-display font-bold mb-6"
              style={{ fontSize: "clamp(26px, 3vw, 36px)", letterSpacing: "-0.025em" }}
            >
              {section.heading}
            </h2>
            <div
              className="space-y-4 text-base"
              style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
            >
              {section.body.map((block) =>
                Array.isArray(block) ? (
                  <ul key={block[0].slice(0, 40)} className="space-y-3">
                    {block.map((item) => (
                      <li key={item.slice(0, 40)} className="flex items-start gap-3">
                        <span
                          className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ background: "var(--brand-green)" }}
                          aria-hidden="true"
                        />
                        <span>
                          <RichText text={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p key={block.slice(0, 40)}>
                    <RichText text={block} />
                  </p>
                ),
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
