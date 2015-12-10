# palidate
A library to test your PayPal Integration

Install the module and use the starting code below. (Use --save-dev if you want to use as a DEV dependency)

``` bash
npm install palidate --save

```

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

This will return a status variable that is either "pass" or "fail".
If your credentials "pass" then you will receive your access token to make your PayPal API calls.


https://www.npmjs.com/package/palidate

This module is NOT officially linked to or apart of PayPal.com and is not directly supported by PayPal.
