import SolutionsCatalog from "@/components/solutions/SolutionsCatalog";
import { catalogMetadata } from "@/lib/solutions/server";

export const metadata = catalogMetadata("en");

export default function SolutionsPage() {
	return <SolutionsCatalog locale="en" />;
}
