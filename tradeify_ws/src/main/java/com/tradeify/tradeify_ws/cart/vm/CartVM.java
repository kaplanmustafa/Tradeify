package com.tradeify.tradeify_ws.cart.vm;

import com.tradeify.tradeify_ws.cart.Cart;
import com.tradeify.tradeify_ws.file.FileAttachment;
import com.tradeify.tradeify_ws.file.vm.FileAttachmentVM;

import lombok.Data;

@Data
public class CartVM {
	
	private long id;
	
	private String brandName;
	
	private String productName;
	
	private long productId;
	
	private int quantity;
	
	private float price;
	
	private FileAttachmentVM coverImage;

	public CartVM(Cart cart) {
		this.setId(cart.getId());
		this.setBrandName(cart.getProduct().getBrand().getBrandName());
		this.setProductName(cart.getProduct().getProductName());
		this.setProductId(cart.getProduct().getId());
		this.setQuantity(cart.getQuantity());
		this.setPrice(cart.getProduct().getPrice());
		if(cart.getProduct().getImages() != null) {
			for(FileAttachment image: cart.getProduct().getImages()) {
				if(image.isCover() == true)
					this.coverImage = new FileAttachmentVM(image);
			}
		}
			
	}
}
