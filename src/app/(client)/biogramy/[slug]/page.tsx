import { ComingSoon } from "@/components/ComingSoon/ComingSoon";
import { fetchBySlug } from "@/dataAccess/fetchPayloadCollection";
import { BiogramHistoryPage } from "../components/biogramHistory";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const { doc: biogram } = await fetchBySlug("biograms", slug);

  if (!biogram) {
    return <ComingSoon />;
  }

  return <BiogramHistoryPage biogram={biogram} />;
}
