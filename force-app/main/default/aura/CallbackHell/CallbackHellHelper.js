({
	beginDescent : function(component, event, helper) {

		var action = component.get('c.circle1');

		action.setCallback(this, function(response) {

			var responseState = response.getState();
			var responseError = response.getError();
			var responseValue = response.getReturnValue();

			switch(responseState) {

				default: break;
				case 'NEW': break;
				case 'RUNNING': break;

				case 'SUCCESS':

					component.set('v.inCircle1', responseValue);

					var action2 = component.get('c.circle2');

					action2.setCallback(this, function(response2) {

						var responseState2 = response2.getState();
						var responseError2 = response2.getError();
						var responseValue2 = response2.getReturnValue();

						switch(responseState2) {

							default: break;
							case 'NEW': break;
							case 'RUNNING': break;

							case 'SUCCESS':
	
								component.set('v.inCircle2', responseValue2);

								var action3 = component.get('c.circle3');

								action3.setCallback(this, function(response3) {

									var responseState3 = response3.getState();
									var responseError3 = response3.getError();
									var responseValue3 = response3.getReturnValue();

									switch(responseState3) {

										default: break;
										case 'NEW': break;
										case 'RUNNING': break;

										case 'SUCCESS':
											component.set('v.inCircle3', responseValue3);
											// we could keep going...
											break;

										case 'ERROR':
										case 'INCOMPLETE':
											console.log(responseError3);
											break;

									}

								});

								$A.enqueueAction(action3);

								break;

							case 'ERROR':
							case 'INCOMPLETE':
								console.log(responseError2);
								break;

						}

					});

					$A.enqueueAction(action2);

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