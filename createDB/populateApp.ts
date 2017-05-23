function startDB(){
	 conn = new Mongo();
	 db = conn.getDB("QuorumDB");
	 db.Rooms.drop();
	 db.Chats.drop();
	 db.Users.drop();
	 return db;
}

function importRoomData(db){

	 let list: any[] = [
	  {
            roomID : 1,
   	    title : "Engineers Chat Room",
   	    isActive : true,
   	    isPublic : true,
   	    description : "Come here to share your favorite tech!",
   	    users : ["Joey", "Tymon", "Dominic"],
   	    moderators : ["Dominic"],
   	    admin: "Joey",
   	    keywords: ["Science","Math", "EE"]
 	  },
 	  {
   	    roomID : 2,
   	    title: "Social Workers Chat Room",
   	    isActive : true,
   	    isPublic : true,
   	    description : "Come here to learn how to help your community",
   	    users : ["Cher", "Ana"],
   	    moderators : [],
   	    admin: "Cher",
   	    keywords: ["Helpful","Charity", "Support"]
 	  },
 	  {
   	    roomID: 3,
   	    title : "Gamers Chat Room",
   	    isActive: true,
   	    isPublic: true,
   	    description: "League Gamers not welcome!",
   	    users: ["Ry", "Ra", "Rin"],
   	    moderators: ["Rin"],
   	    admin: "Ry",
   	    keywords: ["Nerds", "#gamerlyfe", "#willanyoneseethis"]
 	  },
 	  {
   	    roomID: 4,
   	    title : "Musicians Chat Room",
   	    isActive: true,
   	    isPublic: true,
   	    description: "Share your favorite music here!",
   	    users: ["Chopin", "Mozart", "Beethoven"],
   	    moderators: ["Chopin","Mozart"],
   	    admin: "Beethoven",
   	    keywords: ["Piano", "Violin", "Kazoo"]
 	  },
 	  {
   	    roomID: 5,
   	    title : "Recipes Chat Room",
   	    isActive: true,
   	    isPublic: true,
   	    description: "Share your favorite recipes here!",
   	    users: ["Gordon", "Boyardee", "BadNBoujee"],
   	    moderators: ["Gordon"],
   	    admin: "BadNBoujee",
   	    keywords: ["Hungry People", "Forks", "Knives"]
 	  }
	 ]	 

	 db.createCollection("Rooms");

	 for(var i = 0; i< list.length; i++){    
   	     /*print('Collection: ' + collections[i]);*/
             db.Rooms.insert(list[i]);
	 }

	 /*db.Rooms.insert(sample);*/
	 db.getCollection("Rooms").find().forEach(printjson);
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
             sender: "Dom",
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
             sender: "Joey2",
	     toRoom: 2,
	     content: "I def didn't copy paste these",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 10
         },
	 {
             sender: "Dom2",
	     toRoom: 2,
	     content: "liar",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 0
         },
	 {
             sender: "Tymon2",
	     toRoom: 2,
	     content: "truther",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 0
         },
	 {
             sender: "Joey3",
	     toRoom: 3,
	     content: "this message is a test",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 10
         },
	 {
             sender: "Dom3",
	     toRoom: 3,
	     content: "we should have wrote a script to output this",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 0
         },
	 {
             sender: "Tymon3",
	     toRoom: 3,
	     content: "yeah we messed up",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 0
         },
	 {
             sender: "Joey4",
	     toRoom: 4,
	     content: "...",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 10
         },
	 {
             sender: "Dom4",
	     toRoom: 4,
	     content: "sigh",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 0
         },
	 {
             sender: "Tymon4",
	     toRoom: 4,
	     content: "only one more!",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 0
         },
	 {
             sender: "Joey5",
	     toRoom: 5,
	     content: "anyone else notice I always have the most points?",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 10
         },
	 {
             sender: "Dom5",
	     toRoom: 5,
	     content: "wait what",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 0
         },
	 {
             sender: "Tymon5",
	     toRoom: 5,
	     content: "omg you suck",
	     timestamp: "2017-05-16T21:13:32.270Z",
	     score: 0
         }]
	 db.createCollection("Chats");

	 for(var i = 0; i< list.length; i++){    
   	     /*print('Collection: ' + collections[i]);*/
             db.Chats.insert(list[i]);
	 }

	 /*db.Rooms.insert(sample);*/
	 db.getCollection("Chats").find().forEach(printjson);
}

db = startDB();
importRoomData(db);
importChatsData(db);
printjson(db.getCollectionNames())



