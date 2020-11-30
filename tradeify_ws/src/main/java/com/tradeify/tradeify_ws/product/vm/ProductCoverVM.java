package com.tradeify.tradeify_ws.product.vm;

import com.tradeify.tradeify_ws.file.FileAttachment;
import com.tradeify.tradeify_ws.file.vm.FileAttachmentVM;
import com.tradeify.tradeify_ws.product.Product;

import lombok.Data;

@Data
public class ProductCoverVM {
	
	private long id;
	
	private String productName;
	
	private String brand;
	
	private float price;
	
	private FileAttachmentVM coverImage;

	public ProductCoverVM(Product product) {
		this.setId(product.getId());
		this.setProductName(product.getProductName());
		this.setBrand(product.getBrand().getBrandName());
		this.setPrice(product.getPrice());
		if(product.getImages().get(0) != null) {
			for(FileAttachment image: product.getImages()) {
				if(image.isCover() == true)
					this.coverImage = new FileAttachmentVM(image);
			}
		}
			
	}
}
