function submitText()
{
var newLine =`<b><font color='#378ab3'>${document.getElementById("firstname").value} ${document.getElementById("lastname").value}</b></font>: ${document.getElementById("input").value}<br/>`;// name + ": " + msg + "\n";
document.getElementById('response').innerHTML += newLine;

var apigClient = apigClientFactory.newClient({
  accessKey: 'AKIAIUMBDI342WMXG2WQ',
  secretKey: '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',
  region: 'us-east-2',
  //apiKey: '7HRdIm8MLu7lFI9B48y5p1wDrOfhYzCX71KAyeBm'
});

var chatbotName="ChatBot";
var params = {
  // This is where any modeled request parameters should be added.
  // The key is the parameter name, as it is defined in the API in API Gateway.
  "type" : "object",
  "properties" : {
    "messages" : {
      "type" : "array",
      "items" : {
        "$ref":"https://apigateway.amazonaws.com/restapis/567hobf4j3/models/Message"
      }
    }
  }
};

var body ={
  // This is where you define the body of the request,
  "first_name":document.getElementById("firstname").value,
  "last_name":document.getElementById("lastname").value,
  "context":document.getElementById("input").value,
};

var response=null;
var additionalParams = {
  // If there are any unmodeled query parameters or headers that must be
  //   sent with the request, add them here.
  headers: {
    "x-api-key":'7HRdIm8MLu7lFI9B48y5p1wDrOfhYzCX71KAyeBm'
    //param0: '',
    //param1: ''
  }
  //queryParams: {
  //  param0: '',
  //  param1: ''
  //}
};
apigClient.chatbotPost(params,body)
    .then(function(result){
      // Add success callback code here.
      console.log(result);
      console.log(result.message);
      //document.getElementById('response').innerText = result.data.message;
      newLine =`<b><font color= green>${chatbotName}</b></font>: ${result.data.message}<br/>`;// name + ": " + msg + "\n";
      document.getElementById('response').innerHTML += newLine;
      document.getElementById('response').scrollTop = document.getElementById('response').scrollHeight;

      //response=result.message;
      console.log("success"); 
    }).catch( function(result){
      // Add error callback code here.
      console.log("fail");
    });
}

function clearMsg()
{
   document.getElementById('response').innerHTML = "";
}
