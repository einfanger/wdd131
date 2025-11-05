// Character Object
const character = {
  name: "Fenric Wolf",
  class: "Wolf",
  level: 3,
  health: 100,
  image: "wolf.png",

  attacked() {
    this.health -= 20;
    if (this.health <= 0) {
      this.health = 0;
      alert(`${this.name} has died`);
    }
    updateCard();
  },

  levelUp() {
    this.level += 1;
    alert(`${this.name} leveled up! Now level ${this.level} 🎉`);
    updateCard();
  }
};

function updateCard() {
  document.getElementById("name").textContent = character.name;
  document.getElementById("class").textContent = character.class;
  document.getElementById("level").textContent = character.level;
  document.getElementById("health").textContent = character.health;
  document.getElementById("image").src = character.image;
}

document.getElementById("attackBtn").addEventListener("click", () => character.attacked());
document.getElementById("levelUpBtn").addEventListener("click", () => character.levelUp());

updateCard();
