# Twitter API with Google Assistant
As you can see on my clip video I made google home get data from twitter api and talk back to me ! (Very Cool right ? OWO )
# this is the video that i talked about !
[![Youtube](https://i.ytimg.com/vi/Dtvg-oja5yQ/maxresdefault.jpg)](https://youtu.be/Dtvg-oja5yQ)
(click to see the video)

## This project using these languages/Libaries/Whatever
* Javascript
* [Nodejs](https://nodejs.org/en/)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Express](https://expressjs.com/)
* [Twitter for Node.js ](https://www.npmjs.com/package/twitter)
* [Nodemailer](https://nodemailer.com/about/)
* [Axois](https://www.npmjs.com/package/axios)
* [Twitter Dev Account](https://developer.twitter.com/)
* [Google Action](https://console.actions.google.com/)
* [Heroku](https://http://heroku.com/)

## How does it work ?
![How does it Work](docs/images/r1)

it's pretty easy so 
# We take to google and it will sent request to our API
# Than our API Will get the request and send the request to Twitter API to get the newest 10 tweets
# The Twitter API will send all the datas as Json to our API 
# Than our API Will process all the datas and random 1 tweet from 10 tweets (So we don't get the same tweet everytime we call google home) and send it to our google assistant

## Getting start
So They have 2 (+1) folders, All of them has comments to show you how it works (Read it if you want)

### Google Action Console
This is folder for [Google Action Console](https://console.actions.google.com/).
It will tell Our Google Assistant to get the data from our API

### NodeJS (API)
This folder will create an API to process datas and send data back to google server

### NodeJS (API With print server)
This is the same as **NodeJS (API)** but if you watch my video till the end. you will see that after the google assistant Talked to us, my printer will print the respond that google said.
*This is easy but your printer need to have function that can print using email*

## Creator
[Thistine](https://thistine.com)

## Have Fun
:)