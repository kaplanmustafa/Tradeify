package com.tradeify.tradeify_ws.product.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradeify.tradeify_ws.product.entities.Color;


public interface ColorRepository extends JpaRepository<Color, Long>{

	List<Color> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<Color> findAllByOrderById();
	
	Color findBySubCategoryIdAndGeneralCategoryIdAndPrivateId(Long subCategoryId, Long generalCategoryId, Long privateId);
}
