var MongoClient = require('mongodb').MongoClient,
test = require('assert');

// Connection url
var url = 'mongodb://dbAdmin:quorumdb@ds064299.mlab.com:64299/quorumdb';

function importRoomData(db){
         
	let list: any[] = [
	  {
            roomID : 1,
   	    title : "Engineers Chat Room",
   	    isActive : true,
   	    isPublic : true,
   	    description : "Come here to share your favorite tech!",
   	    users : ["Joey", "Tymon","Elon"],
   	    moderators : ["Tymon"],
   	    admin: "Joey",
   	    keywords: ["Science","Math", "EE"]
 	  },
 	  {
   	    roomID : 2,
   	    title: "Social Workers Chat Room",
   	    isActive : true,
   	    isPublic : true,
   	    description : "Come here to learn how to help your community",
   	    users : ["Joey","Dominic","Tymon","Elon"],
   	    moderators : ["Elon"],
   	    admin: "Joey",
   	    keywords: ["Helpful","Charity", "Support"]
 	  },
 	  {
   	    roomID: 3,
   	    title : "Gamers Chat Room",
   	    isActive: true,
   	    isPublic: true,
   	    description: "League Gamers not welcome!",
   	    users: ["Joey","Dominic","Tymon","Elon"],
   	    moderators: ["Elon"],
   	    admin: "Joey",
   	    keywords: ["Nerds", "#gamerlyfe", "#willanyoneseethis"]
 	  },
 	  {
   	    roomID: 4,
   	    title : "Musicians Chat Room",
   	    isActive: true,
   	    isPublic: true,
   	    description: "Share your favorite music here!",
   	    users: ["Dominic", "Tymon", "Not-Joey"],
   	    moderators: ["Not-Joey","Dominic"],
   	    admin: "Tymon",
   	    keywords: ["Piano", "Violin", "Kazoo"]
 	  },
 	  {
   	    roomID: 5,
   	    title : "Recipes Chat Room",
   	    isActive: true,
   	    isPublic: true,
   	    description: "Share your favorite recipes here!",
   	    users: ["Joey","Dominic","Not-Joey"],
   	    moderators: ["Joey","Not-Joey"],
   	    admin: "Dominic",
   	    keywords: ["Hungry People", "Forks", "Knives"]
 	  }]	 

	 var col = db.collection("Rooms");

	 for(var i = 0; i< list.length; i++){   
             col.insert(list[i]);
	 }
	 
}
function importChatsData(db){
         
	 let list: any[] = [
	 {
             sender: "Joey",
	     toRoom: 1,
	     content: "this message is a test",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 10
         },
	 {
             sender: "Elon",
	     toRoom: 1,
	     content: "hi joey",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 0
         },
	 {
             sender: "Tymon",
	     toRoom: 1,
	     content: "Hi guys",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 0
         },
	 {
             sender: "Joey",
	     toRoom: 2,
	     content: "I def didn't copy paste these",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 10
         },
	 {
             sender: "Elon",
	     toRoom: 2,
	     content: "liar",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 0
         },
	 {
             sender: "Dominic",
	     toRoom: 2,
	     content: "truther",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 0
         },
	 {
             sender: "Joey",
	     toRoom: 3,
	     content: "this message is a test",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 10
         },
	 {
             sender: "Elon",
	     toRoom: 3,
	     content: "we should have wrote a script to output this",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 0
         },
	 {
             sender: "Tymon",
	     toRoom: 3,
	     content: "yeah we messed up",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 0
         },
	 {
             sender: "Dominic",
	     toRoom: 4,
	     content: "...",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 10
         },
	 {
             sender: "Tymon",
	     toRoom: 4,
	     content: "sigh",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 0
         },
	 {
             sender: "Not-Joey",
	     toRoom: 4,
	     content: "only one more!",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 0
         },
	 {
             sender: "Not-Joey",
	     toRoom: 5,
	     content: "I ate all the popsicles",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 10
         },
	 {
             sender: "Dominic",
	     toRoom: 5,
	     content: "wait what",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 0
         },
	 {
             sender: "Joey",
	     toRoom: 5,
	     content: "omg you suck",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 0
         }]

	 var col = db.collection("Chats");

	 for(var i = 0; i< list.length; i++){    
             col.insert(list[i]);
	 }
	 
}

function importUsersData(db){

	 let list: any[] = [
	  {
            username : "Joey",
	    email: "joey@joey.com",
   	    password: "plaintextpass",
   	    memberships: [1,2,3,5],
	    owner: [1,2,3]
 	  },
	  {
            username : "Tymon",
	    email: "tymon@tymon.com",
   	    password : "plaintextpass",
   	    memberships: [1,2,3,4],
	    owner: [4]
 	  },
	  {
            username : "Dominic",
	    email: "dominic@dominic.com",
   	    password : "plaintextpass",
   	    memberships: [2,3,4,5],
	    owner: [5]
 	  },
	  {
            username : "Rick",
	    email: "rick@rick.com",
   	    password : "plaintextpass",
   	    memberships: [],
	    owner: []
 	  },
	  {
            username : "Not-Joey",
	    email: "not-joey@not-joey.com",
   	    password : "plaintextpass",
   	    memberships: [4,5],
	    owner: []
 	  },
	  {
            username : "Elon",
	    email: "dank@musk.com",
   	    password : "plaintextpass",
   	    memberships: [1,2,3],
	    owner: []
 	  }]	 

	 var col = db.collection("Users");

	 for(var i = 0; i< list.length; i++){    
             col.insert(list[i]);
	 }
}

// Connect using MongoClient
MongoClient.connect(url, function(err, db) {
  importRoomData(db);
  importChatsData(db);
  importUsersData(db);
  db.close();
});
