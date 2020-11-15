package com.tradeify.tradeify_ws.product.vm;

import com.tradeify.tradeify_ws.product.Brand;
import com.tradeify.tradeify_ws.product.Color;
import com.tradeify.tradeify_ws.product.OperatingType;

import lombok.Data;

@Data
public class ProductAttributeVM {
	
	private long id;

	private String categoryName;
	
	private long generalCategoryId;
	
	private long middleCategoryId;
	
	public ProductAttributeVM(Brand brand) {
		this.setId(brand.getId());
		this.setCategoryName(brand.getBrandName());
		this.setGeneralCategoryId(brand.getGeneralCategory().getId());
		this.setMiddleCategoryId(brand.getSubCategory().getId());
	}
	
	public ProductAttributeVM(Color color) {
		this.setId(color.getId());
		this.setCategoryName(color.getColorName());
		this.setGeneralCategoryId(color.getGeneralCategory().getId());
		this.setMiddleCategoryId(color.getSubCategory().getId());
	}
	
	public ProductAttributeVM(OperatingType operatingType) {
		this.setId(operatingType.getId());
		this.setCategoryName(operatingType.getOperatingTypeName());
		this.setGeneralCategoryId(operatingType.getGeneralCategory().getId());
		this.setMiddleCategoryId(operatingType.getSubCategory().getId());
	}
}
