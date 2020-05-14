Menu = function (game) {
  console.log("CARGO MENU");
};

Menu.prototype = {
  create: function () {
    this.background = this.game.add.sprite(0, 0, "titlepage");
    this.background.inputEnabled = true;
    this.background.events.onInputDown.add(this.goGame, this);
    console.log("CARGO prototype MENU");
  },
  goGame: function () {
    this.state.start("Game");
  },
};
