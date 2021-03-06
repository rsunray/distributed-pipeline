const MongoClient = require('mongodb').MongoClient;

//mongo url
var url = "mongodb://localhost:27017/users";

//user activity updater
module.exports = function(user,jobId,status,callback){
  MongoClient.connect(url,function(err,db){
    if(err){
      console.log(err);
    }
    else{
      db.collection('activities').updateOne({user:user,jobId:jobId},{$set:{status:status}},function(err,reply){
          if (err) {
            console.log(err);
          }
          else {
            callback();
          }
      });//end of findall
    }
  });//end of mongoclient
}
