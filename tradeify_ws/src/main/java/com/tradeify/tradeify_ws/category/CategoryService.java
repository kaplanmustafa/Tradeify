package com.tradeify.tradeify_ws.category;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CategoryService {
	
	@Autowired
	CategoryRepository categoryRepository;
	
	public List<Category> getCategories() {
		
		return categoryRepository.findAll();
	}	
}
