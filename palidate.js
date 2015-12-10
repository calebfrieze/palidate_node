var https = require('https')

module.exports = palidate

function palidate(options, callback){
  var error = null
  var credentials = new Buffer(options.clientId + ":" + options.clientSecret).toString('base64')
  var httpsOptions = {
    path: '/v1/oauth2/token',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credentials
    }
  }
  switch (options.env) {
    case 'live':
      httpsOptions.hostname = 'api.paypal.com'
      break
    case 'sandbox':
      httpsOptions.hostname = 'api.sandbox.paypal.com'
      break
    default:
      error = 'badhost'
  }
  
  var httpsCallBack = function(res){
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      var data = JSON.parse(chunk)
      if(data.error_description){
        var obj = {
          status: 'fail',
          error: data.error_description,
          message: "Your credentials are invalid. Troubleshooting: 1. Make sure you have created your REST App in developer.paypal.com 2. Double check your Client ID and Secret from your REST App 3. If you are using sandbox in your options.env, you need to use your sandbox credentials and vice versa for a live environment."
        }
        callback(obj, null)
      } else if(data.access_token){
        var obj = {
          status: 'pass',
          access_token: data.access_token
        }
        callback(null, obj)
      }
    })
  }
  
  var postData = "grant_type=client_credentials"
  if(!error){
    var httpsReq = https.request(httpsOptions, httpsCallBack)
    
    httpsReq.write(postData)
    httpsReq.end()
  } else if(error === "badhost"){
    callback({error: "You can only specify live or sandbox for env"}, null)
  }
}
