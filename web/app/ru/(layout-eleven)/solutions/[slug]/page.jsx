import SolutionDetail from "@/components/solutions/SolutionDetail";
import { detailMetadata, detailStaticParams } from "@/lib/solutions/server";

export function generateStaticParams() {
	return detailStaticParams();
}

export function generateMetadata({ params }) {
	return detailMetadata("ru", params.slug);
}

export default function SolutionPage({ params }) {
	return <SolutionDetail locale="ru" slug={params.slug} />;
}
