// Modules
// modules apply defer and strict modde automatically
/* import playGuitar, {
  shredding as shred,
  plucking as fingerPicking,
} from "./guitars.js"; */

import * as Guitars from "./guitars.js";
import User from "./user.js";
const me = new User("email@email.com", "Milo");
console.log(me);
console.log(me.greeting());

console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());
