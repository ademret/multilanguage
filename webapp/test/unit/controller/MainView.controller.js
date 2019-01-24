/*global QUnit*/

sap.ui.define([
	"com/test/multilanguageproject/controller/MainView.controller"
], function (oController) {
	"use strict";

	QUnit.module("MainView Controller");

	QUnit.test("I should test the MainView controller", function (assert) {
		var oAppController = new oController();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});