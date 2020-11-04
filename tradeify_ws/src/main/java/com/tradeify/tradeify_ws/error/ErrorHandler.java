package com.tradeify.tradeify_ws.error;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;

@RestController
public class ErrorHandler implements ErrorController{

	@Autowired
	private ErrorAttributes errorAttributes;
	
	@RequestMapping("/error")
	ApiError handleError(WebRequest webRequest) {
		Map<String, Object> attributes = this.errorAttributes.getErrorAttributes(webRequest, true);
		String message = (String) attributes.get("message");
		String path = (String) attributes.get("path");
		int status = (Integer) attributes.get("status");
		ApiError error = new ApiError(status, message, path);
		
		if(attributes.containsKey("errors")) {
			List<FieldError> fieldErrors = new ArrayList<FieldError>();
			List<ObjectError> objectErrors = new ArrayList<ObjectError>();
			
			List<?> errorList = (List<?>) attributes.get("errors");
			for(Object errorItem: errorList) {
				if(errorItem instanceof FieldError) {
					fieldErrors.add((FieldError) errorItem);
				} else if(errorItem instanceof ObjectError) {
					objectErrors.add((ObjectError) errorItem);
				}
			}
			Map<String, String> validationErrors = new HashMap<String, String>();
			
			for(FieldError fieldError: fieldErrors) {
			validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
			}
			
			String errorHeader="";
			for(ObjectError objectError: objectErrors) {
				if(objectError.getDefaultMessage().contains("password"))
					errorHeader = "password";
				else if(objectError.getDefaultMessage().contains("email"))
					errorHeader = "email";
				else if(objectError.getDefaultMessage().contains("phone"))
					errorHeader = "phone";
				validationErrors.put(errorHeader, objectError.getDefaultMessage());
			}
			
			error.setValidationErrors(validationErrors);
		}
		return error;
	}
	
	public String getErrorPath() {	
		return "/error";
	}
}