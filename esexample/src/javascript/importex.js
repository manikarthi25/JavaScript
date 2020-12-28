import {welcome, name} from './exportdefault';
// no need use curly braces in default
import add from './exportdefault';
//import multiply from './exportdefault';


console.log("Import, Export, Default Example : ", welcome, name);

console.log("Module - Default - Add : ", add(5, 6));
//console.log("Module - Default - Multiply : ", multiply(6, 6));


