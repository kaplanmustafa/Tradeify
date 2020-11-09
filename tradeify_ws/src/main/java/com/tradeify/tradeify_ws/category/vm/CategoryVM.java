package com.tradeify.tradeify_ws.category.vm;

import com.tradeify.tradeify_ws.category.GeneralCategory;
import com.tradeify.tradeify_ws.category.MiddleCategory;
import com.tradeify.tradeify_ws.category.SubCategory;

import lombok.Data;

@Data
public class CategoryVM {
	
	private long id;

	private String categoryName;
	
	public CategoryVM(GeneralCategory category) {
		this.setId(category.getId());
		this.setCategoryName(category.getCategoryName());
	}
	
	public CategoryVM(MiddleCategory category) {
		this.setId(category.getId());
		this.setCategoryName(category.getCategoryName());
	}
	
	public CategoryVM(SubCategory category) {
		this.setId(category.getId());
		this.setCategoryName(category.getCategoryName());
	}
}
