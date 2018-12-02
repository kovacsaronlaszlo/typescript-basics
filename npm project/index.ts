import { Person } from './person';
import * as _ from 'lodash';

let bar = new Person();
bar.firstName = 'Test';
bar.lastName = 'LastName';

console.log(bar);

var array = [1,2,3,4,5];
console.log(_.reverse(array));
