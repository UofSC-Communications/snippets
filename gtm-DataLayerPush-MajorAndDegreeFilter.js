```
  Location: /study/majors_and_degrees/
  Purpose: To push the value of the major and degree filter to GTM

```

document.ready(function (){
  $(/*Element Name*/).on('change', function() {
    dataLayer.push({
      event:/*Event Name*/,
      filterValue: this.value
    })
  })
})
