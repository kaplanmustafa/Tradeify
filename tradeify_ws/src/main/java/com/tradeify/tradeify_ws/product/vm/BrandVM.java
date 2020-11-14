package com.tradeify.tradeify_ws.product.vm;

import com.tradeify.tradeify_ws.product.Brand;

import lombok.Data;

@Data
public class BrandVM {
	
	private long id;

	private String categoryName;
	
	private long generalCategoryId;
	
	private long middleCategoryId;
	
	public BrandVM(Brand brand) {
		this.setId(brand.getId());
		this.setCategoryName(brand.getBrandName());
		this.setGeneralCategoryId(brand.getGeneralCategory().getId());
		this.setMiddleCategoryId(brand.getSubCategory().getId());
	}
}
