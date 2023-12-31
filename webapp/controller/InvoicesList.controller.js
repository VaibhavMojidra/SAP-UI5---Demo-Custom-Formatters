sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"../model/formatter"
	],function(Controller,JSONModel,formatter){
		"use strict";
		return Controller.extend("com.vaibhavmojidra.customformattersdemo.controller.InvoicesList",{
			formatter: formatter,
			onInit:function(){
				var oViewModel=new JSONModel({currency:"EUR"});
				this.getView().setModel(oViewModel,"myView");
			}
		});
	}
);