package com.tradeify.tradeify_ws.product.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradeify.tradeify_ws.product.entities.ScreenResolution;


public interface ScreenResolutionRepository extends JpaRepository<ScreenResolution, Long>{

	List<ScreenResolution> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<ScreenResolution> findAllByOrderById();
	
	ScreenResolution findBySubCategoryIdAndGeneralCategoryIdAndPrivateId(Long subCategoryId, Long generalCategoryId, Long privateId);
}
