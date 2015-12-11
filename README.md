# palidate-node
A nodejs library to test your PayPal Rest Integration.

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

The code above tests your credentials and will return a status variable that is either "pass" or "fail".
If your credentials "pass" then you will receive your access token back in your result to make your PayPal API calls.
Great to test out your PayPal Rest credentials, or use the resulting access token to further develop.


https://www.npmjs.com/package/palidate

This module is NOT officially linked to or apart of PayPal.com and is not directly supported by PayPal.
