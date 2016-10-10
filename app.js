var restify = require('restify');
var builder = require('botbuilder');

//=========================================================
// Bot Setup
//=========================================================

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat bot
var connector = new builder.ChatConnector({
    appId: "04e2bedb-952e-49b4-9925-0a05122471d3",
    appPassword: "5hJSGKggwhbTxUYwD18y2rY"
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

//=========================================================
// Bots Dialogs
//=========================================================

bot.dialog('/', function (session) {
    //session.send("Hello greg");
    session.send(session);
    /*require("request");
    var request = require('request');
    request('https://api.projectoxford.ai/luis/v1/application?id=b146abe2-b63c-47e7-a781-feef75a398b7&subscription-key=921efd6f49f9421cab1191ba1bfe1572&q=%22'++'%22', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})*/
});