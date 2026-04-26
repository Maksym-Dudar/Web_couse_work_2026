import { ProductRow } from "@/features/product/ui/ProductRow";


export default function page() {
	return (
		<>
			{/* <HeroProductSection />
			<CommentProductSection /> */}
			<ProductRow sort='Top Rated' />
		</>
	);
}
