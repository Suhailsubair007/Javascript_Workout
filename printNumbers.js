const dataTypeValues = [
  undefined, // undefined
  null, // null
  true, // boolean
  42, // number
  9007199254740991n, // bigint
  "Hello, world!", // string
  Symbol("symbol"), // symbol
  52,
  -1,
  { key: "value" }, // object
  [1, 2, 3], // array (which is a type of object)
  function () {
    return "I am a function";
  }, // function (which is also a type of object)
];

const nums = dataTypeValues.filter((x) => typeof x === "number");

console.log(nums);
