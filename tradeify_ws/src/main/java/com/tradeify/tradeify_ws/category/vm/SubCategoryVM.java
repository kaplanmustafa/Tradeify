package com.tradeify.tradeify_ws.category.vm;

import com.tradeify.tradeify_ws.category.SubCategory;

import lombok.Data;

@Data
public class SubCategoryVM {
	
	private long id;

	private String categoryName;
	
	private long generalCategoryId;
	
	public SubCategoryVM(SubCategory category) {
		this.setId(category.getId());
		this.setCategoryName(category.getCategoryName());
		this.setGeneralCategoryId(category.getGeneralCategory().getId());
	}
}
