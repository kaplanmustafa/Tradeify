package com.tradeify.tradeify_ws.category.vm;

import com.tradeify.tradeify_ws.category.Category;

import lombok.Data;

@Data
public class CategoryVM {
	
	private long id;

	private String categoryName;
	
	public CategoryVM(Category category) {
		this.setId(category.getId());
		this.setCategoryName(category.getCategoryName());
	}
}
