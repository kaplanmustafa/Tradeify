package com.tradeify.tradeify_ws.category;

import org.springframework.data.jpa.repository.JpaRepository;


public interface GeneralCategoryRepository extends JpaRepository<GeneralCategory, Long>{
	
	GeneralCategory findByCategoryNameContaining(String categoryName);
}
