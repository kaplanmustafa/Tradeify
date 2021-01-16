package com.tradeify.tradeify_ws.product.vm;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.tradeify.tradeify_ws.file.FileAttachment;
import com.tradeify.tradeify_ws.file.vm.FileAttachmentVM;
import com.tradeify.tradeify_ws.product.Product;

import lombok.Data;

@Data
public class ProductEditVM {
	
	private long id;
	
	private String productName;
	
	private String description;
	
	private float price;
	
	private FileAttachmentVM coverImage;
	
	private List<FileAttachmentVM> images = new ArrayList<>();

	public ProductEditVM(Product product) {
		this.setId(product.getId());
		this.setProductName(product.getProductName());
		this.setDescription(product.getDescription());
		this.setPrice(product.getPrice());
		List<FileAttachment> images = product.getImages();
		Collections.sort(images, (a, b) -> Long.compare(a.getId(), b.getId()));
		
		if(product.getImages() != null) {
			for(FileAttachment image: images) {
				if(image.isCover() == true) {
					this.coverImage = new FileAttachmentVM(image);
				} else {
					this.images.add(new FileAttachmentVM(image));
				}
			}
		}
			
	}
}
