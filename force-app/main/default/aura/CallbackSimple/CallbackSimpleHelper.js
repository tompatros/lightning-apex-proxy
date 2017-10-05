({
	init : function(component, event, helper) {

		var action = component.get('c.method1');

		action.setCallback(this, function(response) {

			var responseState = response.getState();
			var responseError = response.getError();
			var responseValue = response.getReturnValue();

			switch(responseState) {

				default: break;
				case 'NEW': break;
				case 'RUNNING': break;

				case 'SUCCESS':
					component.set('v.callbackDone', responseValue);
					break;

				case 'ERROR':
				case 'INCOMPLETE':
					console.log(responseError);
					break;

			}

		});

		$A.enqueueAction(action);

    }
})