package com.tradeify.tradeify_ws.category;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface SubCategoryRepository extends JpaRepository<SubCategory, Long>{

	List<SubCategory> findAllByGeneralCategoryIdOrderById(Long generalCategoryId);
	
	List<SubCategory> findAllByOrderById();
	
	SubCategory findByCategoryNameContaining(String categoryName);
}
