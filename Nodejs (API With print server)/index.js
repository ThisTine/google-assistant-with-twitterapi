require('dotenv').config() //environment varibles (running locally)
const express = require('express') // server-api
const app = express() 
const Twitter = require('twitter') //twitter-api
const nodemailer = require('nodemailer'); //send EMAIL
// set PORT 
const PORT = process.env.PORT || 5000
//login to email service
const transporter = nodemailer.createTransport({
    service: 'hotmail', //mail provider
    auth: {
      user: process.env.EMAIL_ACC,
      pass: process.env.EMAIL_PWD
    }
  });
  
// make API to be open to eveyone
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if(req.method === 'OPTIONS'){
        return res.sendStatus(200)
    }
    next();
})

// get respond
app.get('/',function(_,res){
    const client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
      });
//procress respond
      let alltweets =[]
      const tweethashtag = '#ขอกำลังใจให้ผมหน่อยซิ' //hashtag
    client.get('search/tweets', {q: tweethashtag,count:10,result_type: 'recent',tweet_mode:'extended',exclude:'replies',exclude:'retweets'}, function(error, tweets, response) {
        tweets.statuses.forEach(function(tweet) {
            const tweettext = tweet.full_text
            const tweetnohash = tweettext.replace(tweethashtag, "")
            const tweetnospace = tweetnohash.replace(/\n/g,"")
            alltweets = [...alltweets,{name: tweet.user.name, text: tweetnospace}]
        });
        if(alltweets.length === 0){
            alltweets = [{name:"googlehome",text:"ไม่มีเพื่อนคนไหน ที่อยากจะให้กำลังใจหรอกนะ  คุณมัน ไม่มีเพื่อน ไม่มีเพื่อน ไม่มีเพื่อน ไม่มีเพื่อน ไม่มีเพื่อน ไม่มีเพื่อน ไม่มีเพื่อน ไม่มีเพื่อน ไม่มีเพื่อน ไม่มีเพื่อน ไม่มีเพื่อน ไม่มีเพื่อน ไม่มีเพื่อน ไม่มีเพื่อน ไม่มีเพื่อน ไม่มีเพื่อน" }]
        }
        let alllength = alltweets.length-1
        const rng = Math.floor(Math.random() * alllength);
        const sendtweet = alltweets[rng]  
//send email to print server 
        const mailOptions = {
            from: process.env.EMAIL_ACC,
            to: process.env.EMAIL_PRINT,
            subject: 'ข้อความ',
            html: `<center><h2>จาก ${sendtweet.name}</h2> <br/> <h1 style="font-size:50px;text-decoration:underline">${sendtweet.text}</h1></center>`
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        res.json(sendtweet) //send respond
     });
    
    
})

//server will run on PORT 5000 OR whatever HEROKU give us

app.listen(PORT)