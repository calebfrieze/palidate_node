# palidate
A library to test your PayPal Integration


```javascript

var options = {
  env: 'sandbox',
  clientId: 'Your Client ID',
  clientSecret: 'Your Client Secret'
}

palidate(options, function(err, res){
  if(err){
    console.log(err)
  } else {
    console.log(res)
  }
})

```