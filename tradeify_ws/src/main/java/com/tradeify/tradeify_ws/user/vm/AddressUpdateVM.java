package com.tradeify.tradeify_ws.user.vm;

import com.tradeify.tradeify_ws.user.CurrentPasswordControl;

import lombok.Data;

@Data
@CurrentPasswordControl
public class AddressUpdateVM {
	
	private String updatedAddress;
}
