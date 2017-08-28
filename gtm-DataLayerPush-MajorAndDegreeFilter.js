```
  Location: /study/majors_and_degrees/
  Purpose: To push the value of the Major and Degree filster to Google Tag Manager
  
```

document.ready(function (){
  $(/*Element Name*/).on('change', function() {
    dataLayer.push({
      event:/*Event Name*/,
      filterValue: this.value
    })
  })
})
