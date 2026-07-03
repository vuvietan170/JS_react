// import { getStudent } from "./services/studentService.js";
// import { log } from "./utils/logger.js";
// log("list student");
// console.log(getStudent());
import{
    add,
    subtract,
    log
} from "./utils/barrelExport.js";
console.log(add(2,3));
console.log(subtract(3,4));
log("INfo");