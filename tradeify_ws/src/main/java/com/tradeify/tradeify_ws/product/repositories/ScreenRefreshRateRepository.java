package com.tradeify.tradeify_ws.product.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradeify.tradeify_ws.product.entities.ScreenRefreshRate;


public interface ScreenRefreshRateRepository extends JpaRepository<ScreenRefreshRate, Long>{

	List<ScreenRefreshRate> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<ScreenRefreshRate> findAllByOrderById();
}
