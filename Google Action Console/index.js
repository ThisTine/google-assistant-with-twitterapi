const { conversation } = require('@assistant/conversation');
const functions = require('firebase-functions');

const app = conversation();
const axios = require('axios'); //Don't forget to add Axios to Package.json file
app.handle('getwebtweet'/* webhook name*/, conv => { 
   //add your api link
  return axios.get(' <YOUR SERVER API > ').then((result)=>{
    console.log(result);
		conv.add("จาก"+result.data.name +" "+result.data.text);
  });
  
});

exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);
