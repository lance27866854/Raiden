var game = new Phaser.Game(400, 500, Phaser.AUTO, "canvas");
//game.state.add("boot", bootState);
game.state.add("load", loadState);
game.state.add("menu", menuState);
game.state.add("about", aboutState);
game.state.add("", selectState);
game.state.add("play", playState);
game.state.add("lose", loseState);
game.state.add("win", winState);
game.state.start("menu");