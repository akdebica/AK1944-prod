import { Button } from "@/components/shared/Button/Button";
import type { Biogram } from "@/payload-types";
import { BiogramHistory } from "./biogramTemplate";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import MorePeopleBiograms from "./moreBiograms";

export const BiogramHistoryPage = ({ biogram }: { biogram: Biogram }) => {
  return (
    <div className="pb-20">
      <Container
        as="article"
        className="flex flex-col gap-10 pb-6 tablet:gap-14 tablet:pb-36"
      >
        <Breadcrumbs />
        <Heading variant="h2" color="green" contrast="yellow">
          {biogram.name}
        </Heading>
        <BiogramHistory biogram={biogram} />
        <Button
          variant="primary"
          label="Znajdź grób"
          ariaDescription="Znajdź grób"
          className="m-auto mt-6"
          href={"/inwentarz-grobow"}
          disabled
        />
        <MorePeopleBiograms currentSlug={biogram.slug ?? undefined} />
      </Container>
    </div>
  );
};
