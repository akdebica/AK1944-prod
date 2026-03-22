import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import type { Metadata } from "next";
import { cookiesPolicyData } from "./data";

export const metadata: Metadata = {
  title: "Polityka cookies",
  description:
    "Polityka wykorzystywania plików cookies na stronie AK1944 - ŚZŻAK",
};

export default function CookiesPolicyPage() {
  return (
    <div className="pb-20">
      <Container className="flex flex-col gap-10 pb-6 md:gap-14 md:pb-36">
        <Breadcrumbs />
        <Heading variant="h2" color="green" contrast="yellow">
          Polityka cookies
        </Heading>

        <div className="max-w-4xl space-y-8 font-sourceSans text-18 text-textDarkGreen">
          {cookiesPolicyData.sections.map((section, index) => (
            <section key={index}>
              <p className="mb-4 font-lora text-24 font-bold text-greenMain contrast:text-yellowContrast">
                {section.title}
              </p>
              <p className="leading-relaxed">{section.content}</p>

              {"list" in section && section.list && (
                <ul className="mt-4 list-inside list-disc space-y-2 pl-4">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {"types" in section && section.types && (
                <div className="mt-6 space-y-6">
                  {section.types.map((type, i) => (
                    <div key={i}>
                      <p className="mb-2 font-semibold text-greenMain">
                        {type.title}
                      </p>
                      <p className="leading-relaxed">{type.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {"footer" in section && section.footer && (
                <p className="mt-4 leading-relaxed">{section.footer}</p>
              )}
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
