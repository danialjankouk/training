enum EventType {
  SPORT = "sport",
  friendly = "friendly",
}
type IDs = string | number;

type Events = {
  type: EventType;
};

type UserEvent = Events & {
  UserID: IDs;
  dateCreated: Date;
};

interface UserEvent2 extends Events {
    UserID:IDs
}

let shit: UserEvent = {
  type: EventType.SPORT,
  UserID: "shit",
  dateCreated: new Date(),
};
