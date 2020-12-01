package com.tradeify.tradeify_ws.product.vm;

import java.util.List;

import com.tradeify.tradeify_ws.category.GeneralCategory;
import com.tradeify.tradeify_ws.category.SubCategory;
import com.tradeify.tradeify_ws.file.FileAttachment;
import com.tradeify.tradeify_ws.product.Product;
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

import lombok.Data;

@Data
public class ProductVM {

	private long id;
	
	private String productName;

	private GeneralCategory generalCategory;
	
	private SubCategory subCategory;
	
	private BatteryPower batteryPower;
	
	private Brand brand;
	
	private CameraResolution cameraResolution;
	
	private CaseDiameter caseDiameter;
	
	private Color color;
	
	private DisplayTechnology displayTechnology;
	
	private FrontCameraResolution frontCameraResolution;
	
	private GraphicsCard graphicsCard;
	
	private InternalMemory internalMemory;
	
	private OperatingType operatingType;
	
	private PanelType panelType;
	
	private ProcessorModel processorModel;
	
	private ProcessorType processorType;
	
	private Ram ram;
	
	private ScreenRefreshRate screenRefreshRate;
	
	private ScreenResolution screenResolution;
	
	private ScreenSize screenSize;
	
	private Ssd ssd;
	
	private WarrantyType warrantyType;
	
	private float price;
	
	private String description;
	
	private List<FileAttachment> images;
	
	public ProductVM(Product product) {
		this.setId(product.getId());
		this.setProductName(product.getProductName());
		this.setGeneralCategory(product.getGeneralCategory());
		this.setSubCategory(product.getSubCategory());
		this.setBatteryPower(product.getBatteryPower());
		this.setBrand(product.getBrand());
		this.setCameraResolution(product.getCameraResolution());
		this.setCaseDiameter(product.getCaseDiameter());
		this.setColor(product.getColor());
		this.setDisplayTechnology(product.getDisplayTechnology());
		this.setFrontCameraResolution(product.getFrontCameraResolution());
		this.setGraphicsCard(product.getGraphicsCard());
		this.setInternalMemory(product.getInternalMemory());
		this.setOperatingType(product.getOperatingType());
		this.setPanelType(product.getPanelType());
		this.setProcessorModel(product.getProcessorModel());
		this.setProcessorType(product.getProcessorType());
		this.setRam(product.getRam());
		this.setScreenRefreshRate(product.getScreenRefreshRate());
		this.setScreenResolution(product.getScreenResolution());
		this.setScreenSize(product.getScreenSize());
		this.setSsd(product.getSsd());
		this.setWarrantyType(product.getWarrantyType());
		this.setPrice(product.getPrice());
		this.setDescription(product.getDescription());
		this.setImages(product.getImages());
	}
}
