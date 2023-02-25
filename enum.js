var STEP;
(function (STEP) {
    STEP[STEP["one"] = 0] = "one";
    STEP[STEP["two"] = 1] = "two";
    STEP[STEP["three"] = 2] = "three";
})(STEP || (STEP = {}));
console.log(STEP.three);
var STATUS_CODES;
(function (STATUS_CODES) {
    STATUS_CODES[STATUS_CODES["OK"] = 200] = "OK";
    STATUS_CODES[STATUS_CODES["CREATED"] = 201] = "CREATED";
    STATUS_CODES[STATUS_CODES["ACCEPTED"] = 202] = "ACCEPTED";
})(STATUS_CODES || (STATUS_CODES = {}));
console.log(STATUS_CODES.ACCEPTED);
