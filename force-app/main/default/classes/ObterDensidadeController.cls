public class ObterDensidadeController {
    
    @AuraEnabled(cacheable=true)
    public static String obterDensidade(){
        
        String sessionId = Page.ObterSessionId.getContent().toString();
        String densidade = '';

        try {
            HttpRequest request = new HttpRequest();
            request.setMethod('GET');
            request.setHeader('Authorization', 'Bearer '+ sessionId);
            request.setEndpoint(Url.getSalesforceBaseUrl().toExternalForm() + '/services/data/v44.0/ui-api/themes/active');

            Http http = new Http();
            HttpResponse response = http.send(request);

            if(response.getStatusCode() == 200){
                densidade = (String) ((Map<String,Object>) JSON.deserializeUntyped(response.getBody())).get('density');
            } else {
                throw new CalloutException(response.getBody());
            }
        } catch (Exception e){
            throw e;
        }

        return densidade;
    }
}
