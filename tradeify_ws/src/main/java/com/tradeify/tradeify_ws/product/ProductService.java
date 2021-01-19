package com.tradeify.tradeify_ws.product;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.tradeify.tradeify_ws.category.GeneralCategory;
import com.tradeify.tradeify_ws.category.GeneralCategoryRepository;
import com.tradeify.tradeify_ws.category.SubCategory;
import com.tradeify.tradeify_ws.category.SubCategoryRepository;
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
import com.tradeify.tradeify_ws.product.vm.ProductEditVM;
import com.tradeify.tradeify_ws.product.vm.ProductFilterVM;
import com.tradeify.tradeify_ws.product.vm.ProductSubmitVM;


@Service
public class ProductService {
	
	ProductRepository productRepository;
	GeneralCategoryRepository generalCategoryRepository;
	SubCategoryRepository subCategoryRepository;
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

	public ProductService(ProductRepository productRepository, GeneralCategoryRepository generalCategoryRepository, SubCategoryRepository subCategoryRepository,
			FileAttachmentRepository fileAttachmentRepository, FileService fileService, BatteryPowerService batteryPowerService, BrandService brandService,
			CameraResolutionService cameraResolutionService, CaseDiameterService caseDiameterService,
			ColorService colorService, DisplayTechnologyService displayTechnologyService, FrontCameraResolutionService frontCameraResolutionService,
			GraphicsCardService graphicsCardService, InternalMemoryService internalMemoryService, OperatingTypeService operatingTypeService,
			PanelTypeService panelTypeService, ProcessorModelService processorModelService,	ProcessorTypeService processorTypeService,
			RamService ramService, ScreenRefreshRateService screenRefreshRateService, ScreenResolutionService screenResolutionService,
			ScreenSizeService screenSizeService, SsdService ssdService,	WarrantyTypeService warrantyTypeService) {
		super();
		this.productRepository = productRepository;
		this.generalCategoryRepository = generalCategoryRepository;
		this.subCategoryRepository = subCategoryRepository;
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
			product.setBatteryPower(batteryPowerService.getBatteryPowerByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBatteryPower()));
		if(productSubmitVM.getBrand() != null)
			product.setBrand(brandService.getBrandByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getBrand()));
		if(productSubmitVM.getCameraResolution() != null)
			product.setCameraResolution(cameraResolutionService.getCameraResolutionByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getCameraResolution()));
		if(productSubmitVM.getCaseDiameter() != null)
			product.setCaseDiameter(caseDiameterService.getCaseDiameterByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getCaseDiameter()));
		if(productSubmitVM.getColor() != null)
			product.setColor(colorService.getColorByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getColor()));
		if(productSubmitVM.getDisplayTechnology() != null)
			product.setDisplayTechnology(displayTechnologyService.getDisplayTechnologyByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getDisplayTechnology()));
		if(productSubmitVM.getFrontCameraResolution() != null)
			product.setFrontCameraResolution(frontCameraResolutionService.getFrontCameraResolutionByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getFrontCameraResolution()));
		if(productSubmitVM.getGraphicsCard() != null)
			product.setGraphicsCard(graphicsCardService.getGraphicsCardByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getGraphicsCard()));
		if(productSubmitVM.getInternalMemory() != null)
			product.setInternalMemory(internalMemoryService.getInternalMemoryByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getInternalMemory()));
		if(productSubmitVM.getOperatingType() != null)
			product.setOperatingType(operatingTypeService.getOperatingTypeByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getOperatingType()));
		if(productSubmitVM.getPanelType() != null)
			product.setPanelType(panelTypeService.getPanelTypeByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getPanelType()));
		if(productSubmitVM.getProcessorModel() != null)
			product.setProcessorModel(processorModelService.getProcessorModelByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getProcessorModel()));
		if(productSubmitVM.getProcessorType() != null)
			product.setProcessorType(processorTypeService.getProcessorTypeByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getProcessorType()));
		if(productSubmitVM.getRam() != null)
			product.setRam(ramService.getRamByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getRam()));
		if(productSubmitVM.getScreenRefreshRate() != null)
			product.setScreenRefreshRate(screenRefreshRateService.getScreenRefreshRateByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getScreenRefreshRate()));
		if(productSubmitVM.getScreenResolution() != null)
			product.setScreenResolution(screenResolutionService.getScreenResolutionByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getScreenResolution()));
		if(productSubmitVM.getScreenSize() != null)
			product.setScreenSize(screenSizeService.getScreenSizeByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getScreenSize()));
		if(productSubmitVM.getSsd() != null)
			product.setSsd(ssdService.getSsdByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getSsd()));
		if(productSubmitVM.getWarrantyType() != null)
			product.setWarrantyType(warrantyTypeService.getWarrantyTypeByCategory(productSubmitVM.getGeneralCategory(), productSubmitVM.getSubCategory(),productSubmitVM.getWarrantyType()));
		
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
		GeneralCategory generalInDB = generalCategoryRepository.getOne(Long.valueOf(generalId));
		SubCategory subInDB = subCategoryRepository.getOne(Long.valueOf(subId));
		
		Specification<Product> specification = generalCategoryIs(generalInDB);
		specification = specification.and(subCategoryIs(subInDB));
		
		return productRepository.findAll(specification, page);
	}
	
	public Page<Product> getProductsByFilters(String generalId, String subId, ProductFilterVM filterList, Pageable page) {
		GeneralCategory generalInDB = generalCategoryRepository.getOne(Long.valueOf(generalId));
		SubCategory subInDB = subCategoryRepository.getOne(Long.valueOf(subId));
		
		Specification<Product> specification = generalCategoryIs(generalInDB);
		specification = specification.and(subCategoryIs(subInDB));
		
		if(filterList.getPriceFilters().get(0) != null) { //minPrice
			specification = specification.and(priceGreaterThan(filterList.getPriceFilters().get(0)));
		}
		
		if(filterList.getPriceFilters().get(1) != null) { //maxPrice
			specification = specification.and(priceLessThan(filterList.getPriceFilters().get(1)));
		}
		
		int index = 0;
		for(Long item : filterList.getBrandFilters()) {
			if(item != null) {
				Brand inDB = brandService.getById(item);
				if(index == 0) {
					specification = specification.and(brandIs(inDB));
				} else {
					specification = specification.or(brandIs(inDB));	
				}
				index++;
			}
		}
		
		index = 0;
		for(Long item : filterList.getColorFilters()) {
			if(item != null) {
				Color inDB = colorService.getById(item);
				if(index == 0) {
					specification = specification.and(colorIs(inDB));
				} else {
					specification = specification.or(colorIs(inDB));
				}
				index++;
			}
		}
		
		index = 0;
		for(Long item : filterList.getBatteryPowerFilters()) {
			if(item != null) {
				BatteryPower inDB = batteryPowerService.getById(item);
				if(index == 0) {
					specification = specification.and(batteryPowerIs(inDB));
				} else {
					specification = specification.or(batteryPowerIs(inDB));
				}
				index++;
			}
		}
		
		index = 0;
		for(Long item : filterList.getCameraResolutionFilters()) {
			if(item != null) {
				CameraResolution inDB = cameraResolutionService.getById(item);
				if(index == 0) {
					specification = specification.and(cameraResolutionIs(inDB));
				} else {
					specification = specification.or(cameraResolutionIs(inDB));
				}
				index++;
			}
		}
		
		index = 0;
		for(Long item : filterList.getCaseDiameterFilters()) {
			if(item != null) {
				CaseDiameter inDB = caseDiameterService.getById(item);
				if(index == 0) {
					specification = specification.and(caseDiameterIs(inDB));
				} else {
					specification = specification.or(caseDiameterIs(inDB));
				}
				index++;
			}
		}
		
		index = 0;
		for(Long item : filterList.getDisplayTechnologyFilters()) {
			if(item != null) {
				DisplayTechnology inDB = displayTechnologyService.getById(item);
				if(index == 0) {
					specification = specification.and(displayTechnologyIs(inDB));
				} else {
					specification = specification.or(displayTechnologyIs(inDB));
				}
				index++;
			}
		}
		
		index = 0;
		for(Long item : filterList.getFrontCameraResolutionFilters()) {
			if(item != null) {
				FrontCameraResolution inDB = frontCameraResolutionService.getById(item);
				if(index == 0) {
					specification = specification.and(frontCameraResolutionIs(inDB));
				} else {
					specification = specification.or(frontCameraResolutionIs(inDB));
				}
				index++;
			}
		}
		
		index = 0;
		for(Long item : filterList.getGraphicsCardFilters()) {
			if(item != null) {
				GraphicsCard inDB = graphicsCardService.getById(item);
				if(index == 0) {
					specification = specification.and(graphicsCardIs(inDB));
				} else {
					specification = specification.or(graphicsCardIs(inDB));
				}
				index++;
			}
		}
		
		index = 0;
		for(Long item : filterList.getInternalMemoryFilters()) {
			if(item != null) {
				InternalMemory inDB = internalMemoryService.getById(item);
				if(index == 0) {
					specification = specification.and(internalMemoryIs(inDB));
				} else {
					specification = specification.or(internalMemoryIs(inDB));
				}
				index++;
			}
		}
		
		index = 0;
		for(Long item : filterList.getOperatingTypeFilters()) {
			if(item != null) {
				OperatingType inDB = operatingTypeService.getById(item);
				if(index == 0) {
					specification = specification.and(operatingTypeIs(inDB));
				} else {
					specification = specification.or(operatingTypeIs(inDB));
				}
				index++;
			}
		}
		
		index = 0;
		for(Long item : filterList.getPanelTypeFilters()) {
			if(item != null) {
				PanelType inDB = panelTypeService.getById(item);
				if(index == 0) {
					specification = specification.and(panelTypeIs(inDB));
				} else {
					specification = specification.or(panelTypeIs(inDB));
				}
				index++;
			}
		}
		
		index = 0;
		for(Long item : filterList.getProcessorModelFilters()) {
			if(item != null) {
				ProcessorModel inDB = processorModelService.getById(item);
				if(index == 0) {
					specification = specification.and(processorModelIs(inDB));
				} else {
					specification = specification.or(processorModelIs(inDB));
				}
				index++;
			}
		}
		
		index = 0;
		for(Long item : filterList.getProcessorTypeFilters()) {
			if(item != null) {
				ProcessorType inDB = processorTypeService.getById(item);
				if(index == 0) {
					specification = specification.and(processorTypeIs(inDB));
				} else {
					specification = specification.or(processorTypeIs(inDB));
				}
				index++;
			}
		}
		
		index = 0;
		for(Long item : filterList.getRamFilters()) {
			if(item != null) {
				Ram inDB = ramService.getById(item);
				if(index == 0) {
					specification = specification.and(ramIs(inDB));
				} else {
					specification = specification.or(ramIs(inDB));
				}
				index++;
			}
		}
		
		index = 0;
		for(Long item : filterList.getScreenRefreshRateFilters()) {
			if(item != null) {
				ScreenRefreshRate inDB = screenRefreshRateService.getById(item);
				if(index == 0) {
					specification = specification.and(screenRefreshRateIs(inDB));
				} else {
					specification = specification.or(screenRefreshRateIs(inDB));
				}
				index++;
			}
		}
		
		index = 0;
		for(Long item : filterList.getScreenResolutionFilters()) {
			if(item != null) {
				ScreenResolution inDB = screenResolutionService.getById(item);
				if(index == 0) {
					specification = specification.and(screenResolutionIs(inDB));
				} else {
					specification = specification.or(screenResolutionIs(inDB));
				}
				index++;
			}
		}
		
		index = 0;
		for(Long item : filterList.getScreenSizeFilters()) {
			if(item != null) {
				ScreenSize inDB = screenSizeService.getById(item);
				if(index == 0) {
					specification = specification.and(screenSizeIs(inDB));
				} else {
					specification = specification.or(screenSizeIs(inDB));
				}
				index++;
			}
		}
		
		index = 0;
		for(Long item : filterList.getSsdFilters()) {
			if(item != null) {
				Ssd inDB = ssdService.getById(item);
				if(index == 0) {
					specification = specification.and(ssdIs(inDB));
				} else {
					specification = specification.or(ssdIs(inDB));
				}
				index++;
			}
		}
		
		index = 0;
		for(Long item : filterList.getWarrantyTypeFilters()) {
			if(item != null) {
				WarrantyType inDB = warrantyTypeService.getById(item);
				if(index == 0) {
					specification = specification.and(warrantyTypeIs(inDB));
				} else {
					specification = specification.or(warrantyTypeIs(inDB));
				}
				index++;
			}
		}
		
		return productRepository.findAll(specification, page);
	}
	
	public Page<Product> getProductsByCategoryAndBrand(String generalId, String subId, long productId, Pageable page) {
		Optional<Product> inDB = productRepository.findById(productId);
		
		Product product = null;
		if(inDB.isPresent())
			product = inDB.get();
		
		return productRepository.findAllByIdNotAndGeneralCategoryIdAndSubCategoryIdAndBrandId(Long.valueOf(productId), 
				Long.valueOf(generalId), Long.valueOf(subId), product.getBrand().getId(), page);
	}
	
	public Product getProductById(Long id) {
		Optional<Product> inDB = productRepository.findById(id); 
		if(inDB.isPresent()) {
			Product product = inDB.get();
			return product;
		}
		return null;
	}
	
	public Page<Product> getProductsBySearch(String search, Pageable page) {
		String[] words = search.split("\\|");
		
		Specification<Product> specification = null; 
		
		List<GeneralCategory> categories = new ArrayList<>();
		
		for(String word : words) {
			String wordUpper = word.toLowerCase();
			wordUpper = word.substring(0, 1).toUpperCase() + wordUpper.substring(1);
			GeneralCategory generalCategory = generalCategoryRepository.findByCategoryNameContaining(wordUpper);
			
			if(generalCategory != null) {
				categories.add(generalCategory);
				if(specification == null) {
					specification = generalCategoryIs(generalCategory);
				} else {
					specification = specification.or(generalCategoryIs(generalCategory));
				}
			}
		}
		
		int index = 0;
		for(String word : words) {
			String wordUpper = word.toLowerCase();
			wordUpper = word.substring(0, 1).toUpperCase() + wordUpper.substring(1);
			List<Brand> brands = new ArrayList<>();
			
			for(GeneralCategory category : categories) {
				List<Brand> result = brandService.getByGeneralCategory(category.getId(), wordUpper);
				List<Brand> newList = new ArrayList<>();
				Stream.of(brands, result).forEach(newList::addAll);
				brands = newList;
			}
			
			if(brands.isEmpty()) {
				brands = brandService.getByBrandName(wordUpper);
			}
			
			for(Brand brand : brands) {
				if(specification == null) {
					specification = brandIs(brand);
				} else {
					if(index == 0) {
						specification = specification.and(brandIs(brand));
					} else {
						specification = specification.or(brandIs(brand));
					}
				}
				index++;
			}
		}
		
		if(specification == null) {
			return Page.empty();
		}
		
		return productRepository.findAll(specification, page);
	}
	
	public ProductEditVM getProductForEdit(long productId) {
		
		Product product = productRepository.getOne(productId);
		
		return new ProductEditVM(product);
	}
	
	public void deleteProduct(long id) {
		Optional<Product> inDB = productRepository.findById(id);
		
		if(inDB.isPresent()) {
			Product product = inDB.get();
			productRepository.delete(product);
		} 		
	}
	
	public Product updateProduct(long id, ProductSubmitVM updatedProduct) {
		
		Product inDB = productRepository.getOne(id);
		inDB.setProductName(updatedProduct.getProductName());
		inDB.setDescription(updatedProduct.getDescription());
		inDB.setPrice(Float.valueOf(updatedProduct.getPrice()));
		
		productRepository.save(inDB);
		
		FileAttachment oldProductCover = fileAttachmentRepository.findByProductIdAndIsCoverTrue(id);
		
		if(oldProductCover.getId() != updatedProduct.getCoverImage()) {
			Optional<FileAttachment> optionalFileAttachment = fileAttachmentRepository.findById(updatedProduct.getCoverImage());
			
			if(optionalFileAttachment.isPresent()) {
				if(oldProductCover != null) {
					oldProductCover.setProduct(null);
					fileAttachmentRepository.save(oldProductCover);
				}
				
				FileAttachment fileAttachment = optionalFileAttachment.get();
				fileAttachment.setCover(true);
				fileAttachment.setProduct(inDB);
				fileAttachmentRepository.save(fileAttachment);
			}
		}
		
		List<FileAttachment> oldImages = fileAttachmentRepository.findByProductIdAndIsCoverFalseOrderById(id);
		
		for(int i=0; i<4; i++) {
			if(updatedProduct.getImages().get(i) == null) {
				continue;
			}
			
			if(oldImages.size() < (i+1)) {
				Optional<FileAttachment> optional = fileAttachmentRepository.findById(updatedProduct.getImages().get(i));
				
				if(optional.isPresent()) {
					FileAttachment fileAttachment = optional.get();
					fileAttachment.setProduct(inDB);
					fileAttachmentRepository.save(fileAttachment);
				}
				continue;
			}
			
			if(oldImages.get(i).getId() != updatedProduct.getImages().get(i)) {
				Optional<FileAttachment> optional = fileAttachmentRepository.findById(updatedProduct.getImages().get(i));
				
				if(optional.isPresent()) {
					FileAttachment fileAttachment = optional.get();
					
					if(oldImages.get(i) != null) {
						oldImages.get(i).setProduct(null);
						fileAttachmentRepository.save(oldImages.get(i));
					}
					
					fileAttachment.setProduct(inDB);
					fileAttachmentRepository.save(fileAttachment);
				}
			}
		}
		
		return inDB;
	}
	
	Specification<Product> generalCategoryIs(GeneralCategory generalCategory) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("generalCategory"), generalCategory); 
		};
	}
	
	Specification<Product> subCategoryIs(SubCategory subCategory) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("subCategory"), subCategory); 
		};
	}
	
	Specification<Product> brandIs(Brand brand) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("brand"), brand); 
		};
	}
	
	Specification<Product> colorIs(Color color) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("color"), color); 
		};
	}
	
	Specification<Product> batteryPowerIs(BatteryPower power) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("batteryPower"), power); 
		};
	}
	
	Specification<Product> cameraResolutionIs(CameraResolution cameraResolution) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("cameraResolution"), cameraResolution); 
		};
	}
	
	Specification<Product> caseDiameterIs(CaseDiameter caseDiameter) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("caseDiameter"), caseDiameter); 
		};
	}
	
	Specification<Product> displayTechnologyIs(DisplayTechnology displayTechnology) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("displayTechnology"), displayTechnology); 
		};
	}
	
	Specification<Product> frontCameraResolutionIs(FrontCameraResolution frontCameraResolution) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("frontCameraResolution"), frontCameraResolution); 
		};
	}
	
	Specification<Product> graphicsCardIs(GraphicsCard graphicsCard) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("graphicsCard"), graphicsCard); 
		};
	}
	
	Specification<Product> internalMemoryIs(InternalMemory internalMemory) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("internalMemory"), internalMemory); 
		};
	}
	
	Specification<Product> operatingTypeIs(OperatingType operatingType) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("operatingType"), operatingType); 
		};
	}
	
	Specification<Product> panelTypeIs(PanelType panelType) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("panelType"), panelType); 
		};
	}
	
	Specification<Product> processorModelIs(ProcessorModel processorModel) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("processorModel"), processorModel); 
		};
	}
	
	Specification<Product>processorTypeIs(ProcessorType processorType) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("processorType"), processorType); 
		};
	}
	
	Specification<Product> ramIs(Ram ram) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("ram"), ram); 
		};
	}
	
	Specification<Product> screenRefreshRateIs(ScreenRefreshRate screenRefreshRate) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("screenRefreshRate"), screenRefreshRate); 
		};
	}
	
	Specification<Product> screenResolutionIs(ScreenResolution screenResolution) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("screenResolution"), screenResolution); 
		};
	}
	
	Specification<Product> screenSizeIs(ScreenSize screenSize) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("screenSize"), screenSize); 
		};
	}
	
	Specification<Product> ssdIs(Ssd ssd) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("ssd"), ssd); 
		};
	}
	
	Specification<Product> warrantyTypeIs(WarrantyType warrantyType) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.equal(root.get("warrantyType"), warrantyType); 
		};
	}
	
	Specification<Product> priceGreaterThan(float minPrice) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.greaterThan(root.get("price"), minPrice);
		};
	}
	
	Specification<Product> priceLessThan(float maxPrice) {
		return (root, query, criteriaBuilder) -> {
				return criteriaBuilder.lessThan(root.get("price"), maxPrice);
		};
	}
}
