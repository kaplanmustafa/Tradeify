package com.tradeify.tradeify_ws.product;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.category.GeneralCategory;
import com.tradeify.tradeify_ws.category.SubCategory;
import com.tradeify.tradeify_ws.file.FileAttachment;
import com.tradeify.tradeify_ws.file.FileAttachmentRepository;
import com.tradeify.tradeify_ws.file.FileService;
import com.tradeify.tradeify_ws.product.services.BatteryPowerService;
import com.tradeify.tradeify_ws.product.services.BrandService;
import com.tradeify.tradeify_ws.product.services.CameraResolutionService;
import com.tradeify.tradeify_ws.product.services.CaseDiameterService;
import com.tradeify.tradeify_ws.product.services.ColorService;
import com.tradeify.tradeify_ws.product.services.DisplayTechnologyService;
import com.tradeify.tradeify_ws.product.services.FrontCameraResolutionService;
import com.tradeify.tradeify_ws.product.services.GraphicsCardService;
import com.tradeify.tradeify_ws.product.services.InternalMemoryService;
import com.tradeify.tradeify_ws.product.services.OperatingTypeService;
import com.tradeify.tradeify_ws.product.services.PanelTypeService;
import com.tradeify.tradeify_ws.product.services.ProcessorModelService;
import com.tradeify.tradeify_ws.product.services.ProcessorTypeService;
import com.tradeify.tradeify_ws.product.services.RamService;
import com.tradeify.tradeify_ws.product.services.ScreenRefreshRateService;
import com.tradeify.tradeify_ws.product.services.ScreenResolutionService;
import com.tradeify.tradeify_ws.product.services.ScreenSizeService;
import com.tradeify.tradeify_ws.product.services.SsdService;
import com.tradeify.tradeify_ws.product.services.WarrantyTypeService;
import com.tradeify.tradeify_ws.product.vm.ProductSubmitVM;


@Service
public class ProductService {
	
	ProductRepository productRepository;
	FileAttachmentRepository fileAttachmentRepository;
	FileService fileService;
	BatteryPowerService batteryPowerService;
	BrandService brandService;
	CameraResolutionService cameraResolutionService;
	CaseDiameterService caseDiameterService;
	ColorService colorService;
	DisplayTechnologyService displayTechnologyService;
	FrontCameraResolutionService frontCameraResolutionService;
	GraphicsCardService graphicsCardService;
	InternalMemoryService internalMemoryService;
	OperatingTypeService operatingTypeService;
	PanelTypeService panelTypeService;
	ProcessorModelService processorModelService;
	ProcessorTypeService processorTypeService;
	RamService ramService;
	ScreenRefreshRateService screenRefreshRateService;
	ScreenResolutionService screenResolutionService;
	ScreenSizeService screenSizeService;
	SsdService ssdService;
	WarrantyTypeService warrantyTypeService;

	public ProductService(ProductRepository productRepository, FileAttachmentRepository fileAttachmentRepository,
			FileService fileService, BatteryPowerService batteryPowerService, BrandService brandService,
			CameraResolutionService cameraResolutionService, CaseDiameterService caseDiameterService,
			ColorService colorService, DisplayTechnologyService displayTechnologyService, FrontCameraResolutionService frontCameraResolutionService,
			GraphicsCardService graphicsCardService, InternalMemoryService internalMemoryService, OperatingTypeService operatingTypeService,
			PanelTypeService panelTypeService, ProcessorModelService processorModelService,	ProcessorTypeService processorTypeService,
			RamService ramService, ScreenRefreshRateService screenRefreshRateService, ScreenResolutionService screenResolutionService,
			ScreenSizeService screenSizeService, SsdService ssdService,	WarrantyTypeService warrantyTypeService) {
		super();
		this.productRepository = productRepository;
		this.fileAttachmentRepository = fileAttachmentRepository;
		this.fileService = fileService;
		this.batteryPowerService = batteryPowerService;
		this.brandService = brandService;
		this.cameraResolutionService = cameraResolutionService;
		this.caseDiameterService = caseDiameterService;
		this.colorService = colorService;
		this.displayTechnologyService = displayTechnologyService;
		this.frontCameraResolutionService = frontCameraResolutionService;
		this.graphicsCardService = graphicsCardService;
		this.internalMemoryService = internalMemoryService;
		this.operatingTypeService = operatingTypeService;
		this.panelTypeService = panelTypeService;
		this.processorModelService = processorModelService;
		this.processorTypeService = processorTypeService;
		this.ramService = ramService;
		this.screenRefreshRateService = screenRefreshRateService;
		this.screenResolutionService = screenResolutionService;
		this.screenSizeService = screenSizeService;
		this.ssdService = ssdService;
		this.warrantyTypeService = warrantyTypeService;
	}

	public void save(ProductSubmitVM productSubmitVM) {
		Product product = new Product();
		
		product.setProductName(productSubmitVM.getProductName());
		if(productSubmitVM.getDescription() != null)
			product.setDescription(productSubmitVM.getDescription());
		product.setPrice(Float.valueOf(productSubmitVM.getPrice()));
		
		if(productSubmitVM.getGeneralCategory() != null) 
			product.setGeneralCategory(new GeneralCategory(Long.valueOf(productSubmitVM.getGeneralCategory())));	
		if(productSubmitVM.getSubCategory() != null)
			product.setSubCategory(new SubCategory(Long.valueOf(productSubmitVM.getSubCategory())));
		if(productSubmitVM.getBatteryPower() != null)
			product.setBatteryPower(batteryPowerService.getBatteryPowerByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		if(productSubmitVM.getBrand() != null)
			product.setBrand(brandService.getBrandByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		if(productSubmitVM.getCameraResolution() != null)
			product.setCameraResolution(cameraResolutionService.getCameraResolutionByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		if(productSubmitVM.getCaseDiameter() != null)
			product.setCaseDiameter(caseDiameterService.getCaseDiameterByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		if(productSubmitVM.getColor() != null)
			product.setColor(colorService.getColorByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		if(productSubmitVM.getDisplayTechnology() != null)
			product.setDisplayTechnology(displayTechnologyService.getDisplayTechnologyByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		if(productSubmitVM.getFrontCameraResolution() != null)
			product.setFrontCameraResolution(frontCameraResolutionService.getFrontCameraResolutionByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		if(productSubmitVM.getGraphicsCard() != null)
			product.setGraphicsCard(graphicsCardService.getGraphicsCardByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		if(productSubmitVM.getInternalMemory() != null)
			product.setInternalMemory(internalMemoryService.getInternalMemoryByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		if(productSubmitVM.getOperatingType() != null)
			product.setOperatingType(operatingTypeService.getOperatingTypeByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		if(productSubmitVM.getPanelType() != null)
			product.setPanelType(panelTypeService.getPanelTypeByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		if(productSubmitVM.getProcessorModel() != null)
			product.setProcessorModel(processorModelService.getProcessorModelByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		if(productSubmitVM.getProcessorType() != null)
			product.setProcessorType(processorTypeService.getProcessorTypeByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		if(productSubmitVM.getRam() != null)
			product.setRam(ramService.getRamByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		if(productSubmitVM.getScreenRefreshRate() != null)
			product.setScreenRefreshRate(screenRefreshRateService.getScreenRefreshRateByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		if(productSubmitVM.getScreenResolution() != null)
			product.setScreenResolution(screenResolutionService.getScreenResolutionByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		if(productSubmitVM.getScreenSize() != null)
			product.setScreenSize(screenSizeService.getScreenSizeByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		if(productSubmitVM.getSsd() != null)
			product.setSsd(ssdService.getSsdByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		if(productSubmitVM.getWarrantyType() != null)
			product.setWarrantyType(warrantyTypeService.getWarrantyTypeByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		
		productRepository.save(product);	
		
		Optional<FileAttachment> optionalFileAttachment = fileAttachmentRepository.findById(productSubmitVM.getCoverImage());
		
		if(optionalFileAttachment.isPresent()) {
			FileAttachment fileAttachment = optionalFileAttachment.get();
			fileAttachment.setCover(true);
			fileAttachment.setProduct(product);
			fileAttachmentRepository.save(fileAttachment);
		}
		
		for(int i=0; i<4; i++) {
			if(productSubmitVM.getImages().get(i) != null) {
				Optional<FileAttachment> optional = fileAttachmentRepository.findById(productSubmitVM.getImages().get(i));
				if(optional.isPresent()) {
					FileAttachment fileAttachment = optional.get();
					fileAttachment.setProduct(product);
					fileAttachmentRepository.save(fileAttachment);
				}
			}
		}
		
	}

	public Page<Product> getProductsByCategory(String generalId, String subId, Pageable page) {
		return productRepository.findAllByGeneralCategoryIdAndSubCategoryId(Long.valueOf(generalId), Long.valueOf(subId), page);
	}
}
