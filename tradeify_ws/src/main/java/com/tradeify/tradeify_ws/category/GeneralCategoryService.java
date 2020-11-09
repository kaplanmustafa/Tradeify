package com.tradeify.tradeify_ws.category;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class GeneralCategoryService {
	
	@Autowired
	GeneralCategoryRepository categoryRepository;
	
	public List<GeneralCategory> getCategories() {
		
		return categoryRepository.findAll();
	}	
}
