({

	call : function(component, event, helper) {

		var args = event.getParam('arguments');
		var action = args.action;
		var actionParams = args.actionParams;
		var onSuccess = args.onSuccess;
		var onError = args.onError;
		var eventLevel = args.eventLevel;

		var componentEvent = component.getEvent("componentEvent");
		var applicationEvent = $A.get("e.c:applicationEvent");

		action.setParams(actionParams);

		action.setCallback(this, function(response) {

			var responseState = response.getState();
			var responseError = response.getError();
			var responseValue = response.getReturnValue();

			var eventParams = { title : onSuccess, data : responseValue };

			switch(responseState) {

				default: break;
				case 'NEW': break;
				case 'RUNNING': break;

				case 'SUCCESS':

                    if(typeof onSuccess === "function") {

						// onSuccess is an anonymous function - call with the returned value
						onSuccess(responseValue);

                    } else if(typeof onSuccess === "string") {

						// onSuccess is a string, which is interpreted as the "title" parameter in the ApexProxyApplicationEvent or ApexProxyComponentEvent
                    		if(eventLevel === 'APPLICATION') {
                    			applicationEvent.setParams(eventParams);
                    			applicationEvent.fire();
                    		} else if(eventLevel === 'COMPONENT') {
                    			componentEvent.setParams(eventParams);
                    			componentEvent.fire();
                    		}

                    }
					break;

				case 'ERROR':
				case 'INCOMPLETE':

					if(typeof onError === "function") {

						// onError is an anonymous function - call with the returned value
						onError(responseValue);

                    } else if(typeof onError === "string") {

                    		eventParams.error = responseError;

						// onError is a string, which is interpreted as the "title" parameter in the ApexProxyApplicationEvent or ApexProxyComponentEvent
                    		if(eventLevel === 'APPLICATION') {
                    			applicationEvent.setParams(eventParams);
                    			applicationEvent.fire();
                    		} else if(eventLevel === 'COMPONENT') {
                    			componentEvent.setParams(eventParams);
                    			componentEvent.fire();
                    		}

                    }
					break;

			}

		});

		$A.enqueueAction(action);

	}
})