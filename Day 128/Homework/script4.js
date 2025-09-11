class Character {
  static count = 0

  constructor(health, damage, speed, level) {
    this.health = health
    this.damage = damage
    this.speed = speed
    this.level = level
    Character.count++
  }

  static count_characters() {
    return Character.count
  }

  getInfo() {
    console.log(
      `Health: ${this.health}, Damage: ${this.damage}, Speed: ${this.speed}, Level: ${this.level}`
    );
  }
}

const ninja = new Character(100, 25, 80, 5)
const samurai = new Character(120, 30, 60, 6)
const viking = new Character(150, 40, 50, 7)
const warrior = new Character(110, 20, 70, 4)
const veteran = new Character(130, 35, 55, 8)
const tribesman = new Character(90, 15, 65, 3)
const necromancer = new Character(80, 45, 40, 9)

console.log("შექმნილი პერსონაჟების რაოდენობა:", Character.count_characters());

ninja.getInfo();
necromancer.getInfo();