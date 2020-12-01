package com.tradeify.tradeify_ws.product.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradeify.tradeify_ws.product.entities.FrontCameraResolution;


public interface FrontCameraResolutionRepository extends JpaRepository<FrontCameraResolution, Long>{

	List<FrontCameraResolution> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<FrontCameraResolution> findAllByOrderById();
	
	FrontCameraResolution findBySubCategoryIdAndGeneralCategoryIdAndPrivateId(Long subCategoryId, Long generalCategoryId, Long privateId);
}
