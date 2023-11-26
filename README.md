# params-builder

Helper library to ease generation of query parameters for Platform APIs.

- Install via NPM (Recommended)
```
npm i @omkarj13/params-builder
```

- Install via CDN
```
<script src="https://www.unpkg.com/@omkarj13/params-builder@latest/dist/bundle.js"></script>
```

- Code Snippet
```typescript
import { isNot, isNotOneOf } from "./operators";
import { ParamsBuilder } from "./params-builder";

// Type-safety, to make sure the correct keys and values for params are being passed
interface Category {
  id: string;
  is_enabled: boolean;
  system_category: string | null;
  // ... Other properties
}

// Supports nested conditions, and various operators
const categoryParams = new ParamsBuilder<Category>()
  .equals('is_enabled', true)
  .or(
    isNot('system_category', null),
    isNotOneOf('system_category', ['Mileage', 'Per Diem', 'Activity', 'Unspecified'])
  )
  .build();

console.log(categoryParams);
// {is_enabled: 'eq.true', or: '(system_category.is_not.null,system_category.not_in.(Mileage,Per Diem,Activity,Unspecified))'}


// Supports flattening the types, to filter nested properties
interface Project {
  id: string;
  category_ids: number[] | null;
  user: {
    id: string;
    full_name: string;
    email: string;
  }
  is_enabled: boolean;
  name: string;
  // ... Other properties
}

const projectParams = new ParamsBuilder<Project>()
  .equals('is_enabled', true)
  .ilike('name', 'some name')
  .equals('user->email', 'abc@xyz.com')
  .build();

console.log(projectParams);
// {is_enabled: 'eq.true', name: 'ilike.some name', user->email: 'eq.abc@xyz.com'}

```
