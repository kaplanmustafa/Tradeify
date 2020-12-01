package com.tradeify.tradeify_ws.product.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradeify.tradeify_ws.product.entities.CameraResolution;


public interface CameraResolutionRepository extends JpaRepository<CameraResolution, Long>{

	List<CameraResolution> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<CameraResolution> findAllByOrderById();
	
	CameraResolution findBySubCategoryIdAndGeneralCategoryIdAndPrivateId(Long subCategoryId, Long generalCategoryId, Long privateId);
}
