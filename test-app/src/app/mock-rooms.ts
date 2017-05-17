import { Room } from './room';

export const ROOMS: Room[] = [
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
];
