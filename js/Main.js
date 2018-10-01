
var Monsters = [
    {
      name:"Orc",
      health:5,
      attack:2,
      cooldown:2
    },
    {
      name:"Goblin",
      health:3,
      attack:1,
      cooldown:0.5
    },
    {
      name:"Pizza Guy",
      health:2,
      attack:0,
      cooldown:10
    }
]
var Modifiers = [
  {
    modifier:"Slow",
    cooldown:0.5
  },
  {
    modifier:"Buff",
    attack:1
  },
  {
    modifier:"Healthy",
    health: 1
  },
  {
    modifier:"Sickly",
    health:-1
  }
]
function pickMonster() {
  var monsterIndex = Math.round(Math.random() * Monsters.length)
  var monster =  Monsters[monsterIndex]
  var modifier = Modifiers[Math.round(Math.random() * Modifiers.length)]
  $("#enName").html(modifier.modifier + " " + monster.name)
  if (typeof modifier.health !== "undefined") {
    $("#enHealth").html(monster.health + modifier.health)
    $("#maxEnHealth").html(monster.health + modifier.health)
  } else if (typeof modifier.cooldown !== "undefined") {
    $("#enCool").html(monster.cooldown + modifier.cooldown)
  } else if (typeof modifier.attack !== "undefined") {
    $("#enAttack").html(monster.attack + modifier.attack)
  }
}
