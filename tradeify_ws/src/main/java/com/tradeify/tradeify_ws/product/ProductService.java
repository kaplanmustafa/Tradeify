package com.tradeify.tradeify_ws.product;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.category.GeneralCategory;
import com.tradeify.tradeify_ws.category.SubCategory;
import com.tradeify.tradeify_ws.file.FileAttachment;
import com.tradeify.tradeify_ws.file.FileAttachmentRepository;
import com.tradeify.tradeify_ws.file.FileService;
import com.tradeify.tradeify_ws.product.entities.BatteryPower;
import com.tradeify.tradeify_ws.product.entities.Brand;
import com.tradeify.tradeify_ws.product.entities.CameraResolution;
import com.tradeify.tradeify_ws.product.entities.CaseDiameter;
import com.tradeify.tradeify_ws.product.entities.Color;
import com.tradeify.tradeify_ws.product.entities.DisplayTechnology;
import com.tradeify.tradeify_ws.product.entities.FrontCameraResolution;
import com.tradeify.tradeify_ws.product.entities.GraphicsCard;
import com.tradeify.tradeify_ws.product.entities.InternalMemory;
import com.tradeify.tradeify_ws.product.entities.OperatingType;
import com.tradeify.tradeify_ws.product.entities.PanelType;
import com.tradeify.tradeify_ws.product.entities.ProcessorModel;
import com.tradeify.tradeify_ws.product.entities.ProcessorType;
import com.tradeify.tradeify_ws.product.entities.Ram;
import com.tradeify.tradeify_ws.product.entities.ScreenRefreshRate;
import com.tradeify.tradeify_ws.product.entities.ScreenResolution;
import com.tradeify.tradeify_ws.product.entities.ScreenSize;
import com.tradeify.tradeify_ws.product.entities.Ssd;
import com.tradeify.tradeify_ws.product.entities.WarrantyType;
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
		product.setDescription(productSubmitVM.getDescription());
		product.setPrice(Float.valueOf(productSubmitVM.getPrice()));
		
		if(productSubmitVM.getGeneralCategory() != null)
			product.setGeneralCategory(new GeneralCategory(Long.valueOf(productSubmitVM.getGeneralCategory())));
		if(productSubmitVM.getSubCategory() != null)
			product.setSubCategory(new SubCategory(Long.valueOf(productSubmitVM.getSubCategory())));
		if(productSubmitVM.getBatteryPower() != null)
			product.setBatteryPower(new BatteryPower(Long.valueOf(productSubmitVM.getBatteryPower())));
		if(productSubmitVM.getBrand() != null)
			product.setBrand(new Brand(Long.valueOf(productSubmitVM.getBrand())));
		if(productSubmitVM.getCameraResolution() != null)
			product.setCameraResolution(new CameraResolution(Long.valueOf(productSubmitVM.getCameraResolution())));
		if(productSubmitVM.getCaseDiameter() != null)
			product.setCaseDiameter(new CaseDiameter(Long.valueOf(productSubmitVM.getCaseDiameter())));
		if(productSubmitVM.getColor() != null)
			product.setColor(new Color(Long.valueOf(productSubmitVM.getColor())));
		if(productSubmitVM.getDisplayTechnology() != null)
			product.setDisplayTechnology(new DisplayTechnology(Long.valueOf(productSubmitVM.getDisplayTechnology())));
		if(productSubmitVM.getFrontCameraResolution() != null)
			product.setFrontCameraResolution(new FrontCameraResolution(Long.valueOf(productSubmitVM.getFrontCameraResolution())));
		if(productSubmitVM.getGraphicsCard() != null)
			product.setGraphicsCard(new GraphicsCard(Long.valueOf(productSubmitVM.getGraphicsCard())));
		if(productSubmitVM.getInternalMemory() != null)
			product.setInternalMemory(new InternalMemory(Long.valueOf(productSubmitVM.getInternalMemory())));
		if(productSubmitVM.getOperatingType() != null)
			product.setOperatingType(new OperatingType(Long.valueOf(productSubmitVM.getOperatingType())));
		if(productSubmitVM.getPanelType() != null)
			product.setPanelType(new PanelType(Long.valueOf(productSubmitVM.getPanelType())));
		if(productSubmitVM.getProcessorModel() != null)
			product.setProcessorModel(new ProcessorModel(Long.valueOf(productSubmitVM.getProcessorModel())));
		if(productSubmitVM.getProcessorType() != null)
			product.setProcessorType(new ProcessorType(Long.valueOf(productSubmitVM.getProcessorType())));
		if(productSubmitVM.getRam() != null)
			product.setRam(new Ram(Long.valueOf(productSubmitVM.getRam())));
		if(productSubmitVM.getScreenRefreshRate() != null)
			product.setScreenRefreshRate(new ScreenRefreshRate(Long.valueOf(productSubmitVM.getScreenRefreshRate())));
		if(productSubmitVM.getScreenResolution() != null)
			product.setScreenResolution(new ScreenResolution(Long.valueOf(productSubmitVM.getScreenResolution())));
		if(productSubmitVM.getScreenSize() != null)
			product.setScreenSize(new ScreenSize(Long.valueOf(productSubmitVM.getScreenSize())));
		if(productSubmitVM.getSsd() != null)
			product.setSsd(new Ssd(Long.valueOf(productSubmitVM.getSsd())));
		if(productSubmitVM.getWarrantyType() != null)
			product.setWarrantyType(new WarrantyType(Long.valueOf(productSubmitVM.getWarrantyType())));
		
		productRepository.save(product);
		
		Optional<FileAttachment> optionalFileAttachment = fileAttachmentRepository.findById(productSubmitVM.getCoverImage());
		
		if(optionalFileAttachment.isPresent()) {
			FileAttachment fileAttachment = optionalFileAttachment.get();
			fileAttachment.setProduct(product);
			fileAttachmentRepository.save(fileAttachment);
		}
		
		for(int i=0; i<4; i++) {
			if(productSubmitVM.getImages().get(i) != null) {
				Optional<FileAttachment> optional = fileAttachmentRepository.findById(productSubmitVM.getImages().get(i));
				if(optional.isPresent()) {
					FileAttachment fileAttachment = optionalFileAttachment.get();
					fileAttachment.setProduct(product);
					fileAttachmentRepository.save(fileAttachment);
				}
			}
		}
		
		/*if(productSubmitVM.getImages() != null) {
			for(Long image: productSubmitVM.getImages()) {
				Optional<FileAttachment> optional 
				= fileAttachmentRepository.findById(image);
				
				if(optional.isPresent()) {
					FileAttachment fileAttachment = optionalFileAttachment.get();
					fileAttachment.setProduct(product);
					fileAttachmentRepository.save(fileAttachment);
				}
			}
		}*/
	}
}
