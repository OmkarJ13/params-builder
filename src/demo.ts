import { isNot, isNotOneOf } from "./operators";
import { ParamsBuilder } from "./params-builder";

interface Category {
  id: string;
  is_enabled: boolean;
  system_category: string | null;
  // ... Other properties
}

const categoryParams = new ParamsBuilder<Category>()
  .equals('is_enabled', true)
  .or(
    isNot('system_category', null),
    isNotOneOf('system_category', ['Mileage', 'Per Diem', 'Activity', 'Unspecified'])
  )
  .build();

console.log(categoryParams);
// {is_enabled: 'eq.true', or: '(system_category.is_not.null,system_category.not_in.(Mileage,Per Diem,Activity,Unspecified))'}


interface Project {
  id: string;
  org_category_ids: number[] | null;
  is_enabled: boolean;
  name: string;
  // ... Other properties
}

const projectParams = new ParamsBuilder<Project>()
  .equals('is_enabled', true)
  .contains('org_category_ids', [10093, 10032, 10053])
  .ilike('name', 'some name')
  .build();

console.log(projectParams);
// {is_enabled: 'eq.true', org_category_ids: 'cs.10093,10032,10053', name: 'ilike.some name'}