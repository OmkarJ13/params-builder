# params-parser
Helper library to ease generation of query parameters for APIs. 

Can use utility methods for generating params for simple conditions
```
import { equals, greaterThanOrEqualTo } from './utility.js';

const params1 = equals('name', 'John');
console.log(params1);
// > {name: 'eq.John'}

const params2 = greaterThanOrEqualTo('amount', 0);
console.log(params2);
// > {amount: 'gte.0'}
```

For multiple conditions, we can build the params using the builder
```
import ParamsBuilder from "./params-builder.js";

const params3 = new ParamsBuilder()
  .equals('name', 'John')
  .greaterThanOrEqualTo('amount', 0)
  .isOneOf('city', ['London', 'New York'])
  .build();

console.log(params3);
// > {name: 'eq.John', amount: 'gte.0', city: 'in.(London,New York)'}
```

Even supports complex operations such as and/or and nested conditions
```
import ParamsBuilder from "./params-builder.js";
import { equals, greaterThanOrEqualTo, lessThan } from "./utility.js";

const params4 = new ParamsBuilder()
  .equals('name', 'John')
  .and(greaterThanOrEqualTo('amount', 0), lessThan('amount', 100))
  .or(equals('city', 'London'), equals('city', 'New York'))
  .build();

console.log(params4);
// > {name: 'eq.John', and: '(amount.gte.0,amount.lt.100)', or: '(city.eq.London,city.eq.New York)'}
```
