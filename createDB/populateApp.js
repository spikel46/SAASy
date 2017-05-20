function startDB() {
    conn = new Mongo();
    db = conn.getDB("QuorumDB");
    db.Rooms.drop();
    db.Chats.drop();
    db.Users.drop();
    return db;
}
function importRoomData(db) {
    var list = [
        {
            roomID: 1,
            title: "Engineers Chat Room",
            isActive: true,
            isPublic: true,
            description: "Come here to share your favorite tech!",
            users: ["Joey", "Tymon", "Dominic"],
            moderators: ["Dominic"],
            admin: "Joey",
            keywords: ["Science", "Math", "EE"]
        },
        {
            roomID: 2,
            title: "Social Workers Chat Room",
            isActive: true,
            isPublic: true,
            description: "Come here to learn how to help your community",
            users: ["Cher", "Ana"],
            moderators: [],
            admin: "Cher",
            keywords: ["Helpful", "Charity", "Support"]
        },
        {
            roomID: 3,
            title: "Gamers Chat Room",
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
            title: "Musicians Chat Room",
            isActive: true,
            isPublic: true,
            description: "Share your favorite music here!",
            users: ["Chopin", "Mozart", "Beethoven"],
            moderators: ["Chopin", "Mozart"],
            admin: "Beethoven",
            keywords: ["Piano", "Violin", "Kazoo"]
        },
        {
            roomID: 5,
            title: "Recipes Chat Room",
            isActive: true,
            isPublic: true,
            description: "Share your favorite recipes here!",
            users: ["Gordon", "Boyardee", "BadNBoujee"],
            moderators: ["Gordon"],
            admin: "BadNBoujee",
            keywords: ["Hungry People", "Forks", "Knives"]
        }
    ];
    db.createCollection("Rooms", {
        validator: { $or: [
                { roomID: { $type: "number" } },
                { isActive: { $type: "bool" } },
                { isPublic: { $type: "bool" } }
            ]
        }
    });
    for (var i = 0; i < list.length; i++) {
        /*print('Collection: ' + collections[i]);*/
        db.Rooms.insert(list[i]);
    }
    /*db.Rooms.insert(sample);*/
    db.getCollection("Rooms").find().forEach(printjson);
}
function importChatsData(db) {
    var list = [
        {
            sender: "Joey",
            toRoom: 1,
            content: "this message is a test",
            timestamp: "2017-05-16T21:13:32.270Z",
            score: 10
        },
        {
            sender: "Dom",
            toRoom: 2,
            content: "hi joey",
            timestamp: "2017-05-16T21:13:32.270Z",
            score: 10
        },
        {
            sender: "Joey2",
            toRoom: 3,
            content: "Maymays",
            timestamp: "2017-05-16T21:13:32.270Z",
            score: 10
        },
        {
            sender: "Tymon",
            toRoom: 4,
            content: "Mr. SunBeam",
            timestamp: "2017-05-16T21:13:32.270Z",
            score: 10
        },
        {
            sender: "Joey5",
            toRoom: 2,
            content: "this message is a test",
            timestamp: "2017-05-16T21:13:32.270Z",
            score: 10
        }, {
            sender: "Joey",
            toRoom: 2,
            content: "crazy how all these messages have the same timestamp which isn't currently displayed",
            timestamp: "2017-05-16T21:13:32.270Z",
            score: 10
        },
        {
            sender: "Tymon",
            toRoom: 5,
            content: "this message is a test",
            timestamp: "2017-05-16T21:13:32.270Z",
            score: 10
        },
        {
            sender: "Dominic",
            toRoom: 5,
            content: "this message is a test",
            timestamp: "2017-05-15T21:10:32.270Z",
            score: 10
        },
        {
            sender: "Joey",
            toRoom: 5,
            content: "this message is a test",
            timestamp: "2017-05-15T21:10:32.270Z",
            score: 10
        },
        {
            sender: "Joey",
            toRoom: 5,
            content: "this message is a test",
            timestamp: "2017-05-15T21:10:32.270Z",
            score: 10
        },
        {
            sender: "Joey",
            toRoom: 1,
            content: "this message is a test",
            timestamp: "2017-05-15T21:10:32.270Z",
            score: 10
        },
        {
            sender: "Joey",
            toRoom: 4,
            content: "this message is a test",
            timestamp: "2017-05-15T21:10:32.270Z",
            score: 10
        },
        {
            sender: "Joey",
            toRoom: 4,
            content: "this message is a test",
            timestamp: "2017-05-15T21:10:32.270Z",
            score: 10
        },
        {
            sender: "Joey",
            toRoom: 3,
            content: "this message is a test",
            timestamp: "2017-05-15T21:11:32.270Z",
            score: 10
        },
        {
            sender: "Joey",
            toRoom: 3,
            content: "this message is a test",
            timestamp: "2017-05-15T21:11:32.270Z",
            score: 10
        },
        {
            sender: "Joey",
            toRoom: 2,
            content: "this message is a test",
            timestamp: "2017-05-15T21:11:32.270Z",
            score: 10
        },
        {
            sender: "Joey",
            toRoom: 2,
            content: "this message is a test",
            timestamp: "2017-05-15T21:11:32.270Z",
            score: 10
        },
        {
            sender: "Joey",
            toRoom: 3,
            content: "this message is a test",
            timestamp: "2017-05-15T21:11:32.270Z",
            score: 10
        },
        {
            sender: "Joey",
            toRoom: 4,
            content: "this message is a test",
            timestamp: "2000-05-15T21:11:32.270Z",
            score: 10
        },
        {
            sender: "Joey",
            toRoom: 4,
            content: "this message is a test",
            timestamp: "2000-05-15T21:11:32.270Z",
            score: 10
        },
        {
            sender: "Joey",
            toRoom: 5,
            content: "this message is a test",
            timestamp: "2000-05-15T21:11:32.270Z",
            score: 10
        },
        {
            sender: "Joey",
            toRoom: 5,
            content: "this message is a test",
            timestamp: "2000-05-15T21:11:32.270Z",
            score: 10
        },
        {
            sender: "Joey",
            toRoom: 5,
            content: "keep doing this",
            timestamp: "2000-05-15T21:11:32.270Z",
            score: 0
        }
    ];
    db.createCollection("Chats", {
        validator: { $or: [
                { sender: { $type: "string" } },
                { toRoom: { $type: "bool" } },
                { timestamp: { $type: "date" } }
            ]
        }
    });
    for (var i = 0; i < list.length; i++) {
        /*print('Collection: ' + collections[i]);*/
        db.Chats.insert(list[i]);
    }
    /*db.Chats.insert(sample);*/
    db.getCollection("Chats").find().forEach(printjson);
}
db = startDB();
importRoomData(db);
importChatsData(db);
printjson(db.getCollectionNames());
