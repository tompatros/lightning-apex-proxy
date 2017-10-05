({
    init : function(component, event, helper) {
    		helper.init(component, event, helper);
    },
    handleApexProxyComponentEvent : function(component, event, helper) {
    		var data = event.getParam("data");
    		component.set('v.componentEventValue', data);
    }
})