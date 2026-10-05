import SolutionsCatalog from "@/components/solutions/SolutionsCatalog";
import { catalogMetadata } from "@/lib/solutions/server";

export const metadata = catalogMetadata("ru");

export default function SolutionsPage() {
	return <SolutionsCatalog locale="ru" />;
}
