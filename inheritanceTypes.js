var EventType;
(function (EventType) {
    EventType["SPORT"] = "sport";
    EventType["friendly"] = "friendly";
})(EventType || (EventType = {}));
var shit = {
    type: EventType.SPORT,
    UserID: "shit",
    dateCreated: new Date()
};
