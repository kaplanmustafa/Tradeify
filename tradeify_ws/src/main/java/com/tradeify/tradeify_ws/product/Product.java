package com.tradeify.tradeify_ws.product;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.tradeify.tradeify_ws.category.GeneralCategory;
import com.tradeify.tradeify_ws.category.SubCategory;
import com.tradeify.tradeify_ws.file.FileAttachment;
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
import com.tradeify.tradeify_ws.product.validators.FloatValue;

import lombok.Data;

@Data
@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@NotNull
	@Size(min = 1, max= 255)
	private String productName;

	@ManyToOne
	private GeneralCategory generalCategory;
	
	@ManyToOne
	private SubCategory subCategory;
	
	@ManyToOne
	private BatteryPower batteryPower;
	
	@ManyToOne
	private Brand brand;
	
	@ManyToOne
	private CameraResolution cameraResolution;
	
	@ManyToOne
	private CaseDiameter caseDiameter;
	
	@ManyToOne
	private Color color;
	
	@ManyToOne
	private DisplayTechnology displayTechnology;
	
	@ManyToOne
	private FrontCameraResolution frontCameraResolution;
	
	@ManyToOne
	private GraphicsCard graphicsCard;
	
	@ManyToOne
	private InternalMemory internalMemory;
	
	@ManyToOne
	private OperatingType operatingType;
	
	@ManyToOne
	private PanelType panelType;
	
	@ManyToOne
	private ProcessorModel processorModel;
	
	@ManyToOne
	private ProcessorType processorType;
	
	@ManyToOne
	private Ram ram;
	
	@ManyToOne
	private ScreenRefreshRate screenRefreshRate;
	
	@ManyToOne
	private ScreenResolution screenResolution;
	
	@ManyToOne
	private ScreenSize screenSize;
	
	@ManyToOne
	private Ssd ssd;
	
	@ManyToOne
	private WarrantyType warrantyType;
	
	@NotNull
	@FloatValue
	private float price;
	
	private String description;
	
	/*@OneToOne(mappedBy = "product", cascade = CascadeType.REMOVE)
	private FileAttachment coverImage;*/
	
	@OneToMany(mappedBy = "product", cascade = CascadeType.REMOVE) 
	private List<FileAttachment> images;
}
