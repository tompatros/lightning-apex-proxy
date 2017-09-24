public with sharing class ExampleApex {
    
    @AuraEnabled
    public static String method1(String param1) {
		String return1 = param1 + ' RETURN1';
		return return1;
    }
    
}
