// Your code here
class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }
  static getDragons(...dragons) {
    return dragons.map(el => el.name);
  }
}

const d1 = new Dragon('smaug','black')
const d2 = new Dragon('drogon','red')

console.log(d1)
console.log(d1.breathesFire())
console.log(Dragon.getDragons(d1,d2))

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
