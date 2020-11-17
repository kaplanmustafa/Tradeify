package com.tradeify.tradeify_ws.product.vm;

import lombok.Data;

@Data
public class ProductAttributeVM {
	
	private long id;

	private String categoryName;
	
	private long generalCategoryId;
	
	private long middleCategoryId;
	
	public ProductAttributeVM(long id, String categoryName, long generalCategoryId, long middleCategoryId) {
		this.setId(id);
		this.setCategoryName(categoryName);
		this.setGeneralCategoryId(generalCategoryId);
		this.setMiddleCategoryId(middleCategoryId);
	}
	
}
