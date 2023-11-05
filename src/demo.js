import Parser from "./parser.js";
import { equals, greaterThanOrEqualTo, lessThan } from "./utility.js";

// Can use with multiple operators
const params = new Parser()
  .equals('name', 'John')
  .isOneOf('city', ['London', 'New York'])
  .build();

console.log(params);
// > {name: 'eq.John', city: 'in.(London,New York)'}

// Even supports complex operations such as and/or and nested operations
const params2 = new Parser()
  .and(greaterThanOrEqualTo('amount', 0), lessThan('amount', 100))
  .or(equals('payment_mode', 'corporate_card'), equals('payment_mode', 'paid_by_company'))
  .build();

console.log(params2);
// > {and: '(amount.gte.0,amount.lt.100)', or: '(payment_mode.eq.corporate_card,payment_mode.eq.paid_by_company)'}