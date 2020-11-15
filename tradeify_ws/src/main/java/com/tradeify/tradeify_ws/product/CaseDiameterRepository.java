package com.tradeify.tradeify_ws.product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface CaseDiameterRepository extends JpaRepository<CaseDiameter, Long>{

	List<CaseDiameter> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<CaseDiameter> findAllByOrderById();
}
