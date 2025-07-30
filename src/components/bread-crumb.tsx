import Link from "next/link";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadCrumbProps {
	link: string;
	curretPage: string;
	title: string;
}

const BreadCrumb = ({ link, title, curretPage }: BreadCrumbProps) => {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink asChild>
						<Link href={link}>{title}</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<span className="text-blue-200">{curretPage}</span>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
};

export default BreadCrumb;
