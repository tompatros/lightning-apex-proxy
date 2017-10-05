public with sharing class ExampleApex {
    
    @AuraEnabled
    public static String theApexMethod(String param1) {
		return 'theApexMethodResponse';
    }
    
}
