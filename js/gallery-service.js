'use strict';
var gProjs = [];
createProjects();

function createProject(name, title, desc, url, lables, img) {
  var proj = {
    id: makeId(6),
    name: name,
    title: title,
    desc: desc,
    url: url,
    publishedAt: Date().toString(),
    labels: lables,
    img: img,
  };

  return proj;
}

function createProjects() {
  gProjs.push(
    createProject(
      'Minesweeper',
      'Arcade',
      'Fun clone of the original Minesweeper game',
      'https://geiger01.github.io/Minesweeper_js/',
      ['gaming', ' vanilla js'],
      '../img/portfolio/minesweeper.png'
    )
  );

  gProjs.push(
    createProject(
      'Pacman',
      'Arcade',
      'Fun clone of the game Pacman',
      'https://vigilant-volhard-00960b.netlify.app/',
      ['gaming', ' vanilla js'],
      '../img/portfolio/pacman.png'
    )
  );

  gProjs.push(
    createProject(
      'Touch The Nums',
      'Arcade',
      'Touch the numbers as fast as you can',
      'https://relaxed-austin-52d2a2.netlify.app/',
      ['gaming', ' vanilla js'],
      '../img/portfolio/nums.png'
    )
  );
}

function getProjs() {
  return gProjs;
}
