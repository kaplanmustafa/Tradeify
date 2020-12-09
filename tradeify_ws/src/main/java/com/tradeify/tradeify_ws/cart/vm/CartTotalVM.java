package com.tradeify.tradeify_ws.cart.vm;

import lombok.Data;

@Data
public class CartTotalVM {
	
	private int totalProduct;
	
	private float totalPrice;

	public CartTotalVM(int totalProduct, float totalPrice) {
		this.setTotalProduct(totalProduct);
		this.setTotalPrice(totalPrice);
	}
}
