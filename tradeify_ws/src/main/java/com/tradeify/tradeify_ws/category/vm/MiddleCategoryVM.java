package com.tradeify.tradeify_ws.category.vm;

import com.tradeify.tradeify_ws.category.MiddleCategory;

import lombok.Data;

@Data
public class MiddleCategoryVM {
	
	private long id;

	private String categoryName;
	
	private long generalCategoryId;
	
	public MiddleCategoryVM(MiddleCategory category) {
		this.setId(category.getId());
		this.setCategoryName(category.getCategoryName());
		this.setGeneralCategoryId(category.getGeneralCategory().getId());
	}
}
