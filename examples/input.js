console.log("log");
console.info("info");
console.warn("warning");
console.error("error");

console.log("keep this"); // keep this log
console.debug("debugging"); // keep it

console.log("another keep");
console.debug("debugging without keep comment");

const add = (a,b) => {
  return a + b;
}

add(1,3);
console.log('The Addition of 1 and 3 is', add(1,3));
