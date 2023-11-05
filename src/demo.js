import Parser from "./parser.js";
import { greaterThanOrEqual, lessThan } from "./utility.js";

const params = new Parser()
  .equals('name', 'John')
  .oneOf('city', ['London', 'New York'])
  .build();

console.log(params);
// > {name: 'eq.John', city: 'in.(London,New York)'}

const params2 = new Parser()
  .and(greaterThanOrEqual('amount', 0), lessThan('amount', 100))
  .build();

console.log(params2);
// > {and: '(amount.gte.0,amount.lt.100)'}