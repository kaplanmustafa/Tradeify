package com.tradeify.tradeify_ws.product;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.file.FileAttachment;
import com.tradeify.tradeify_ws.file.FileAttachmentRepository;
import com.tradeify.tradeify_ws.file.FileService;
import com.tradeify.tradeify_ws.product.vm.ProductSubmitVM;


@Service
public class ProductService {
	
	ProductRepository productRepository;
	FileAttachmentRepository fileAttachmentRepository;
	FileService fileService;

	public ProductService(ProductRepository productRepository, FileAttachmentRepository fileAttachmentRepository,
			FileService fileService) {
		super();
		this.productRepository = productRepository;
		this.fileAttachmentRepository = fileAttachmentRepository;
		this.fileService = fileService;
	}

	public void save(ProductSubmitVM productSubmitVM) {
		Product product = new Product();
		
		product.setProductName(productSubmitVM.getProductName());
		product.setGeneralCategory(productSubmitVM.getGeneralCategory());
		product.setSubCategory(productSubmitVM.getSubCategory());
		product.setBatteryPower(productSubmitVM.getBatteryPower());
		product.setBrand(productSubmitVM.getBrand());
		product.setCameraResolution(productSubmitVM.getCameraResolution());
		product.setCaseDiameter(productSubmitVM.getCaseDiameter());
		product.setColor(productSubmitVM.getColor());
		product.setDisplayTechnology(productSubmitVM.getDisplayTechnology());
		product.setFrontCameraResolution(productSubmitVM.getFrontCameraResolution());
		product.setGraphicsCard(productSubmitVM.getGraphicsCard());
		product.setInternalMemory(productSubmitVM.getInternalMemory());
		product.setOperatingType(productSubmitVM.getOperatingType());
		product.setPanelType(productSubmitVM.getPanelType());
		product.setProcessorModel(productSubmitVM.getProcessorModel());
		product.setRam(productSubmitVM.getRam());
		product.setScreenRefreshRate(productSubmitVM.getScreenRefreshRate());
		product.setScreenResolution(productSubmitVM.getScreenResolution());
		product.setScreenSize(productSubmitVM.getScreenSize());
		product.setSsd(productSubmitVM.getSsd());
		product.setWarrantyType(productSubmitVM.getWarrantyType());
		product.setPrice(productSubmitVM.getPrice());
		product.setDescription(productSubmitVM.getDescription());
		
		productRepository.save(product);
		
		Optional<FileAttachment> optionalFileAttachment = fileAttachmentRepository.findById(productSubmitVM.getCoverImage());
		
		if(optionalFileAttachment.isPresent()) {
			FileAttachment fileAttachment = optionalFileAttachment.get();
			fileAttachment.setProduct(product);
			fileAttachmentRepository.save(fileAttachment);
		}
	}
}
