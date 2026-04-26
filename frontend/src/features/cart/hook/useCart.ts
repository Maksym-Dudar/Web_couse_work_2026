"use client";

import { productService } from "@/services/requests/product/product.services";
import type { ICartItem } from "@/shared/types/product/product.type";
import { useCartStore } from "@/store/cart/store";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import calcSubtotal from "../lib/calcSubtotal";
import calcTotal from "../lib/calcTotal";
import { useRouter } from "next/navigation";
import { PAGE } from "@/config";
import type { IDelivery } from "@/constants/delivery.constants";
import { ordersService } from "@/services/requests";
import type { ICreateOrder } from "@/services/requests/orders/requests.type";

export function useCart() {
	const router = useRouter();
	const cart = useCartStore((state) => state.cart);
	const [error, setError] = useState<Error | null>(null);

	const productIds = useMemo(
		() => cart.map((item) => item.productId).sort(),
		[cart],
	);
	const {
		data,
		isLoading,
		isError,
		error: getCartError,
	} = useQuery<ICartItem[], Error>({
		queryKey: ["cart", productIds],
		queryFn: ({ signal }) => productService.getCartCards(productIds, signal),
		enabled: productIds.length > 0,
	});

	useEffect(() => {
		if (isError && getCartError) setError(getCartError);
	}, [isError, getCartError]);
	const [shippingMethod, setShippingMethod] = useState<IDelivery>("Free");

	const subtotal = useMemo(() => calcSubtotal(cart, data ?? []), [cart, data]);

	const total = useMemo(() => calcTotal(subtotal, 0), [subtotal]);

	const checkoutMutation = useMutation({
		mutationFn: (data: ICreateOrder) => ordersService.createOrder(data),
		onSuccess: (data) => router.push(PAGE.CHECKOUT_DETAILS(data.id)),
		onError: (err: Error) => setError(err),
	});

	const onCheckout = () => {
		checkoutMutation.mutate({ total, subtotal, shippingMethod, items: cart });
	};

	return {
		shippingMethod,
		data,
		isLoading,
		isError: !!error,
		error,
		subtotal,
		total,
		onCheckout,
		setShippingMethod,
	};
}
