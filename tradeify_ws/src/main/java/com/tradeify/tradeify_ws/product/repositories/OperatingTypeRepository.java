package com.tradeify.tradeify_ws.product.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradeify.tradeify_ws.product.entities.OperatingType;


public interface OperatingTypeRepository extends JpaRepository<OperatingType, Long>{

	List<OperatingType> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<OperatingType> findAllByOrderById();
}
