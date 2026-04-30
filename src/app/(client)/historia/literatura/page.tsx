import { List } from "@/app/(client)/historia/literatura/_components/List";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs/Breadcrumbs";
import Container from "@/components/shared/Container";
import { Heading } from "@/components/shared/Heading/Heading";
import { Pagination } from "@/components/shared/Pagination";
import { fetchCollection } from "@/dataAccess/fetchPayloadCollection";

type PageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

const ITEMS_PER_PAGE = 20;

export default async function LiteraturePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;

  const { docs: literature, totalPages } = await fetchCollection({
    collection: "literature",
    query: {
      limit: ITEMS_PER_PAGE,
      pagination: true,
      page: currentPage,
    },
  });

  return (
    <div>
      <Container
        as="main"
        className="tablet:px-10 tablet:pb-10 desktop:px-24 desktop:pb-20"
      >
        <div className="mb-8 flex flex-col items-start gap-4">
          <Breadcrumbs />
          <Heading variant="h2" color="green" contrast="yellow" className="m-0">
            Literatura
          </Heading>
        </div>
        <List data={literature} />
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </Container>
    </div>
  );
}
