function getDbCon(){
 var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
return db;
}

var newPerson = function(person) {
   db = getDbCon();
 
db.close(); 
}