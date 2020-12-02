package com.tradeify.tradeify_ws.product;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;


public interface ProductRepository extends JpaRepository<Product, Long>, JpaSpecificationExecutor<Product>{
	
	Page<Product> findAllByGeneralCategoryIdAndSubCategoryId(Long generalCategoryId, Long subCategoryId, Pageable page);
	
	Page<Product> findAllByIdNotAndGeneralCategoryIdAndSubCategoryIdAndBrandId(Long id, Long generalCategoryId, Long subCategoryId, 
			Long brandId, Pageable page);
}
