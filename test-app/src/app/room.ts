export class Room {
  roomID: number;
  title: string;
  isActive: boolean;
  isPublic: boolean;
  description: string;
  users: Array<string>;
  moderators: Array<string>;
  admin: string;
  keywords: Array<string>;
}