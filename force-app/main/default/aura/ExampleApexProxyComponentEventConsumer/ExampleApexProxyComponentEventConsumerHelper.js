({
	init : function(component, event, helper) {

		var apexProxy = component.find('apexProxy');
		var action = component.get('c.theApexMethod');
		var params = { param1 : 'PARAM1' };

		apexProxy.call(
			action,
			params,
	        "method2Success",
	        "method2Error",
	        "COMPONENT"
		);

	}

})