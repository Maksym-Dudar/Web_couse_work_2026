import { instance } from "../axios.interceptor";
import { API } from "@/config/api.config";
import type {
	ICartItem,
	IProductCard,
	IProductDetails,
	IProductGroupSearchCard,
	IProductParams,
	IWishlist,
} from "@/shared/types/product/product.type";
import type { IProductDetailsDto, IProductGroup } from "./dto.type";
import categoryParser from "@/utils/categoryParser";
import type {
	ICreateProduct,
	IGetDetailsRequest,
	IGetSearchRequest,
	IGetWishlistRequest,
} from "./requests.type";

class ProductService {
	constructor() {}

	async getCards(
		params: IProductParams,
		signal?: AbortSignal,
	): Promise<IProductCard[]> {
		console.log(params)
		const res = (await instance.get(API.PRODUCT_CARDS, { params, signal }));
				console.log(res);
		console.log("tyyyyyt");
		return res.data;
	}

	async getDetails(
		params: IGetDetailsRequest,
		signal?: AbortSignal,
	): Promise<IProductDetails> {
		const res = await instance.get<IProductDetailsDto>(API.PRODUCT, {
			params,
			signal,
		});
		return {
			...res.data,
			offerExpires: new Date(res.data.offerExpires),
			category: res.data.category.map((val) => {
				return categoryParser(val);
			}),
		};
	}

	async getSearchCards(
		params: IGetSearchRequest,
		signal?: AbortSignal,
	): Promise<IProductGroupSearchCard[]> {
		return ((await instance.get(API.PRODUCT_SEARCH, { params, signal })).data);
	}

	async getCartCards(
		products: number[],
		signal?: AbortSignal,
	): Promise<ICartItem[]> {
		const params = products.join(",");
		return (await instance.get(API.PRODUCT_BAG, { params, signal })).data;
	}

	async getWishlist(
		params: IGetWishlistRequest,
		signal?: AbortSignal,
	): Promise<IWishlist[]> {
		return (await instance.get(API.USER_WISHLIST, { params, signal })).data;
	}

	async getProductGroup(signal?: AbortSignal): Promise<IProductGroup[]> {
		return (await instance.get(API.PRODUCT_GROUP, { signal })).data;
	}

	async createProduct(payload: FormData): Promise<IProductDetails> {
		return (await instance.post(API.PRODUCT, payload)).data;
	}
}

export const productService = new ProductService();
