interface gen<T> {
  content: T;
}

const hey: gen<string> = {
  content: "hits",
};

const nice: gen<string[]> = {
  content: ["asfa", "afsafa", "sfasfa"],
};

const shit: gen<object> = {
  content: { jey: "sta", this: 6 },
};


const identify = <T>(x:T):T => x

