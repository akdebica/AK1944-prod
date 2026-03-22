import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import type { Metadata } from "next";
import { privacyPolicyData } from "./data";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Polityka prywatności ŚZŻAK - Środowisko 5. Pułku Strzelców Konnych AK w Dębicy",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pb-20">
      <Container className="flex flex-col gap-10 pb-6 md:gap-14 md:pb-36">
        <Breadcrumbs />
        <Heading variant="h2" color="green" contrast="yellow">
          Polityka prywatności
        </Heading>

        <div className="max-w-4xl space-y-8 font-sourceSans text-18 text-textDarkGreen">
          {privacyPolicyData.sections.map((section, index) => (
            <section key={index}>
              <p className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
                {section.title}
              </p>

              {"content" in section && (
                <p className="leading-relaxed">{section.content}</p>
              )}

              {"list" in section && section.list && (
                <ul className="mt-4 list-inside list-disc space-y-2 pl-4">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {"detailedList" in section && section.detailedList && (
                <ul className="mt-4 list-inside list-disc space-y-2 pl-4">
                  {section.detailedList.map((item, i) => (
                    <li key={i}>
                      <span className="font-semibold">{item.title}</span> –{" "}
                      {item.description}
                    </li>
                  ))}
                </ul>
              )}

              {"detailedList" in section && section.footer && (
                <p className="mt-4 leading-relaxed">{section.footer}</p>
              )}

              {"paragraphs" in section && section.paragraphs && (
                <>
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i} className="mt-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </>
              )}
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
