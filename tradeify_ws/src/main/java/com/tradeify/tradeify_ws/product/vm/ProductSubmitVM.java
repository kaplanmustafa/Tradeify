package com.tradeify.tradeify_ws.product.vm;

import java.util.List;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.tradeify.tradeify_ws.category.GeneralCategory;
import com.tradeify.tradeify_ws.category.SubCategory;
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
import com.tradeify.tradeify_ws.product.entities.Ram;
import com.tradeify.tradeify_ws.product.entities.ScreenRefreshRate;
import com.tradeify.tradeify_ws.product.entities.ScreenResolution;
import com.tradeify.tradeify_ws.product.entities.ScreenSize;
import com.tradeify.tradeify_ws.product.entities.Ssd;
import com.tradeify.tradeify_ws.product.entities.WarrantyType;

import lombok.Data;

@Data
public class ProductSubmitVM {

	@NotNull
	@Size(min = 1, max= 255)
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
	
	private Ram ram;
	
	private ScreenRefreshRate screenRefreshRate;
	
	private ScreenResolution screenResolution;
	
	private ScreenSize screenSize;
	
	private Ssd ssd;
	
	private WarrantyType warrantyType;
	
	@NotNull
	@Size(min = 1, max= 255)
	private float price;
	
	private String description;
	
	private long coverImage;
	
	private List<Long> images;
}
