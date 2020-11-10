package com.tradeify.tradeify_ws.category;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MiddleCategoryService {
	
	@Autowired
	MiddleCategoryRepository middleCategoryRepository;
	
	public List<MiddleCategory> getCategories(Long id) {
		
		return middleCategoryRepository.findAllByGeneralCategoryIdOrderById(id);
	}	
}
