({
    init : function(component, event, helper) {

    		// locate the apex proxy component within this component
    		var apexProxy = component.find('apexProxy');

    		// the "action" is the apex @auraenabled method on this component's controller
    		// in this case "ExampleApex.method1"
		var action = component.get('c.theApexMethod');

		// params to the method are pass as an object with property names matching
		var params = {
			param1 : 'PARAM1'
		};

		// call the aura:method exposed on the ApexProxy component
		apexProxy.call(
			action,
			params,
            function(payload) {
				// onSuccess function
				// anonymous function retains references to component, event and helper
				// ApexProxy component passes "payload", which is whatever the Apex method returns
                component.set('v.callbackValue', payload);
                // from here, you could make further calls to helper.whateverMethodToDoStuff();
            },
			function(payload) {
            		// onError function
            		// anonymous function retains references to component, event and helper
            		// ApexProxy component passes "payload", which is whatever the Apex method returns
                console.log(payload);
                // from here, you could make further calls to helper.whateverMethodToDoStuff();
            }
		);

    }

})