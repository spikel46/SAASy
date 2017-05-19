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
            commentCount: 2,
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
            commentCount: 2,
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
            commentCount: 2,
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
            commentCount: 2,
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
            commentCount: 2,
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
            cID: 0,
            toRoom: 1,
            content: "hi dom",
            timestamp: "2017-05-16T21:13:32.270Z",
            score: 10
        },
        {
            sender: "Dom",
            cID: 1,
            toRoom: 1,
            content: "hi joey",
            timestamp: "2017-05-16T21:13:32.270Z",
            score: 10
        },
        {
            sender: "Joey2",
            cID: 0,
            toRoom: 2,
            content: "hi tymon",
            timestamp: "2017-05-16T21:13:32.270Z",
            score: 10
        },
        {
            sender: "Tymon",
            cID: 1,
            toRoom: 2,
            content: "Wow you look so much like Joey",
            timestamp: "2017-05-16T21:13:32.270Z",
            score: 10
        },
        {
            sender: "Dom2",
            cID: 0,
            toRoom: 3,
            content: "this is a message",
            timestamp: "2017-05-16T21:13:32.270Z",
            score: 10
        },
        {
            sender: "Tymon2",
            cID: 1,
            toRoom: 3,
            content: "crazy how all these messages don't all have the same timestamp which is now currently displayed",
            timestamp: "2017-05-16T21:13:32.270Z",
            score: 10
        },
        {
            sender: "NotInThisRoom",
            cID: 0,
            toRoom: 4,
            content: "this message is a test",
            timestamp: "2017-05-16T21:13:32.270Z",
            score: 10
        },
        {
            sender: "AyLeMao",
            cID: 1,
            toRoom: 4,
            content: "this message is a test",
            timestamp: "2017-05-15T21:10:32.270Z",
            score: 10
        },
        {
            sender: "Joey",
            cID: 0,
            toRoom: 5,
            content: "this message is a test",
            timestamp: "2017-05-15T21:10:32.270Z",
            score: 10
        },
        {
            sender: "Joey",
            cID: 1,
            toRoom: 5,
            content: "this message is also a test",
            timestamp: "2017-05-15T21:10:32.270Z",
            score: 10
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
