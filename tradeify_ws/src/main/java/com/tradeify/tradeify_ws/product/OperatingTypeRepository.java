package com.tradeify.tradeify_ws.product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface OperatingTypeRepository extends JpaRepository<OperatingType, Long>{

	List<OperatingType> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<OperatingType> findAllByOrderById();
}
