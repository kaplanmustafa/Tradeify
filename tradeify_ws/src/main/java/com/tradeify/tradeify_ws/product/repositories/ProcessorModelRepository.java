package com.tradeify.tradeify_ws.product.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradeify.tradeify_ws.product.entities.ProcessorModel;


public interface ProcessorModelRepository extends JpaRepository<ProcessorModel, Long>{

	List<ProcessorModel> findAllBySubCategoryIdAndGeneralCategoryIdOrderById(Long subCategoryId, Long generalCategoryId);
	
	List<ProcessorModel> findAllByOrderById();
}
