function handler(event) {
    // NOTE: This example function is for a viewer request event trigger. 
    // Choose viewer request for event trigger when you associate this function with a distribution. 
    
    var request = event.request;
    var uri = request.uri || "/";
    var qs = request.querystring ? Object.keys(request.querystring).map(function(k){
      var v = request.querystring[k];
      if (!v || !v.value) return "";
      // zachovat i duplicitní klíče
      var parts = [encodeURIComponent(k) + "=" + encodeURIComponent(v.value)];
      if (v.multiValue && v.multiValue.length) {
        v.multiValue.forEach(function(m){ parts.push(encodeURIComponent(k) + "=" + encodeURIComponent(m.value)); });
      }
      return parts.join("&");
    }).filter(Boolean).join("&") : "";
    
    var location = "https://www.bonitoo.io" + uri + (qs ? ("?" + qs) : "");
    
    var response = {
        statusCode: 308,
        statusDescription: 'Permanent redirect',
        headers: {
            'location': { value: location },
            "cache-control": { value: "public, max-age=300" },
            'cloudfront-functions': { value: 'generated-by-CloudFront-Functions' }
        }
    };
    return response;
}
