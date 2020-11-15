package com.tradeify.tradeify_ws.product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface ColorRepository extends JpaRepository<Color, Long>{

	List<Color> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<Color> findAllByOrderById();
}
