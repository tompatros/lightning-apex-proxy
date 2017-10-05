({
    init : function(component, event, helper) {
    		helper.init(component, event, helper);
    },
    handleApexProxyApplicationEvent : function(component, event, helper) {
		var data = event.getParam("data");
		component.set('v.applicationEventValue', data);
    }
})