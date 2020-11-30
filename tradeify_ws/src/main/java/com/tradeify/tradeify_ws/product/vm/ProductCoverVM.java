package com.tradeify.tradeify_ws.product.vm;

import com.tradeify.tradeify_ws.file.vm.FileAttachmentVM;
import com.tradeify.tradeify_ws.product.Product;

import lombok.Data;

@Data
public class ProductCoverVM {
	
	private long id;
	
	private String productName;
	
	private String brand;
	
	private String description;
	
	private float price;
	
	private FileAttachmentVM coverImage;

	public ProductCoverVM(Product product) {
		this.setId(product.getId());
		this.setProductName(product.getProductName());
		this.setBrand(product.getBrand().getBrandName());
		this.setDescription(product.getDescription());
		this.setPrice(product.getPrice());
		if(product.getImages().get(0) != null)
			this.coverImage = new FileAttachmentVM(product.getImages().get(0));
	}
}
