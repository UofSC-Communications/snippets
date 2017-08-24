```
  Location:  /insidecarolina
  Purpose: The parse UTM paramaters for those who are coming to sign up for Inside Carolina. 
```

// Parse parameters in URL
$.urlParam = function(name){
  var results = new RegExp(&apos;[\?&amp;]&apos; + name + &apos;=([^&amp;#]*)&apos;).exec(window.location.href);
  var checkNull = results == null ? '' : results[1] || 0;

  return checkNull;
}

// Create hidden input elems and add them to form
function addFormElem(paramName, fieldName) {
  var paramValue = $.urlParam(paramName);
  // This has already been XML escaped for OmniUpdate
  var $utmEl = $(&quot;&lt;input type=&apos;hidden&apos; name=&apos;&quot; + fieldName + &quot;&apos; value=&apos;&quot; + paramValue + &quot;&apos; /&gt;&quot;);
  if (paramValue != "") {
  $("#mc-embedded-subscribe-form").prepend($utmEl);
  }
}

// Name of the field tag as you added in your email marketing provider
var utmParams = {
  "utm_source"   : "USOURCE",
  "utm_medium"   : "UMEDIUM",
  "utm_campaign" : "UCAMPAIGN",
  "utm_content"  : "UCONTENT"
};

// Loop through object and add input elem for respective key/value
for (var param in utmParams) {
  addFormElem(param, utmParams[param]);
}
