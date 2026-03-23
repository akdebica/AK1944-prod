import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import type { Metadata } from "next";
import { regulationsData } from "./data";

export const metadata: Metadata = {
  title: "Regulamin",
  description:
    "Regulamin korzystania ze strony internetowej ŚZŻAK - Środowisko 5. Pułku Strzelców Konnych AK w Dębicy",
};

export default function RegulationsPage() {
  return (
    <div className="pb-20">
      <Container className="flex flex-col gap-10 pb-6 md:gap-14 md:pb-36">
        <Breadcrumbs />
        <Heading variant="h2" color="green" contrast="yellow">
          Regulamin serwisu
        </Heading>

        <div className="max-w-4xl space-y-8 font-sourceSans text-18 text-textDarkGreen">
          {regulationsData.sections.map((section, index) => (
            <section key={index}>
              <h2 className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
                {section.title}
              </h2>

              {section.intro && (
                <p className="mb-4 leading-relaxed">{section.intro}</p>
              )}

              {section.definitions && (
                <ul className="list-inside list-disc space-y-2 pl-4">
                  {section.definitions.map((def, defIndex) => (
                    <li key={defIndex}>
                      <span className="font-semibold">{def.term}</span> –{" "}
                      {def.definition}
                    </li>
                  ))}
                </ul>
              )}

              {section.items && (
                <ol className="list-decimal space-y-3 pl-6">
                  {section.items.map((item, itemIndex) => {
                    if (typeof item === "string") {
                      // Obsługa linków w § 8
                      if (item.includes("Polityce Prywatności")) {
                        const parts = item.split("Polityce Prywatności");
                        return (
                          <li key={itemIndex} className="leading-relaxed">
                            {parts[0]}
                            <a
                              href="/polityka-prywatnosci"
                              className="font-semibold text-greenMain underline contrast:text-yellowContrast"
                            >
                              Polityce Prywatności
                            </a>
                            {parts[1]}
                          </li>
                        );
                      }
                      // Obsługa maili w § 10
                      if (item.includes("ak.debica@gmail.com")) {
                        const parts = item.split("ak.debica@gmail.com");
                        return (
                          <li key={itemIndex} className="leading-relaxed">
                            {parts[0]}
                            <a
                              href="mailto:ak.debica@gmail.com"
                              className="font-semibold text-greenMain underline contrast:text-yellowContrast"
                            >
                              ak.debica@gmail.com
                            </a>
                            {parts[1]}
                          </li>
                        );
                      }
                      return (
                        <li key={itemIndex} className="leading-relaxed">
                          {item}
                        </li>
                      );
                    } else {
                      return (
                        <li key={itemIndex} className="leading-relaxed">
                          {item.content}
                          <ul className="mt-2 list-inside list-disc space-y-1 pl-6">
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>{subItem}</li>
                            ))}
                          </ul>
                        </li>
                      );
                    }
                  })}
                </ol>
              )}
            </section>
          ))}

          <div className="mt-10 border-t border-greenMain/20 pt-6 text-16 italic text-textDarkGreen/70">
            <p>Ostatnia aktualizacja: {regulationsData.lastUpdated}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
