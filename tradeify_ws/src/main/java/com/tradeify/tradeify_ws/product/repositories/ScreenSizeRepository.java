package com.tradeify.tradeify_ws.product.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradeify.tradeify_ws.product.entities.ScreenSize;


public interface ScreenSizeRepository extends JpaRepository<ScreenSize, Long>{

	List<ScreenSize> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<ScreenSize> findAllByOrderById();
}
