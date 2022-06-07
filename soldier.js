const soldier = {
  name: "Bob",
  health: 10,
  weapon: {
    nameWeapon: "М416",
    ammunition: 30,
  },
  supplies: 3,
  fire: function () {
    const ammunitionTrue = "бах-бах";
    const ammunitionFalse = "обойма пуста. Перезарядитесь.";
    if (this.weapon.ammunition > 0) {
      console.log(ammunitionTrue);
      this.weapon.ammunition--;
      return false;
    } else {
      console.log(ammunitionFalse);
      return false;
    }
  },
  reload: function () {
    const reloadAmmunitTrue = "перезарядка ...";
    const reloadAmmunitFalse = "не осталось припасов";
    if (this.supplies !== 0) {
      this.ammunition = 30;
      this.supplies--;
      console.log(reloadAmmunitTrue);
      return false;
    } else {
      console.log(reloadAmmunitFalse);
      return false;
    }
  },
  hurt: function () {
    this.health--;
    if (this.health === 0) {
      console.log("Ты проиграл");
    }
  },
};

// soldier.reload();
soldier.hurt();
console.log(soldier);
