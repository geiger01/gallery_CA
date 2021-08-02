'use strict';
var gProjs = [];
createProjects();

function createProject(name, title, desc, url, date, lables, img) {
  var proj = {
    id: makeId(6),
    name: name,
    title: title,
    desc: desc,
    url: url,
    publishedAt: date,
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
      '20.07.21',
      ['gaming', ' vanilla js'],
      'img/portfolio/minesweeper.png'
    )
  );
  gProjs.push(
    createProject(
      'Book Store',
      'Data-Storage',
      'Book store website to keep track of books',
      'https://elastic-hoover-3f8c32.netlify.app/',
      '30.07.21',
      ['CRUD', ' MVC', ' vanilla js', ' local-storage'],
      'img/portfolio/book.png'
    )
  );

  gProjs.push(
    createProject(
      'Pacman',
      'Arcade',
      'Fun clone of the game Pacman',
      'https://vigilant-volhard-00960b.netlify.app/',
      '19.07.21',
      ['gaming', ' vanilla js'],
      'img/portfolio/pacman.png'
    )
  );
  gProjs.push(
    createProject(
      'Calculator',
      'Math',
      '',
      'https://silly-lamport-6ffff8.netlify.app/',
      '16.07.21',
      ['vanilla js'],
      'img/portfolio/calc.png'
    )
  );

  gProjs.push(
    createProject(
      'Touch The Nums',
      'Arcade',
      'Touch the numbers as fast as you can',
      'https://relaxed-austin-52d2a2.netlify.app/',
      '13.07.21',
      ['gaming', ' vanilla js', ' local-storage'],
      'img/portfolio/nums.png'
    )
  );
  gProjs.push(
    createProject(
      'Safe Content',
      'Login-auth',
      'login authentication page',
      'https://amazing-thompson-6fd20f.netlify.app/secret.html',
      '28.07.21',
      ['MVC', ' vanilla js'],
      'img/portfolio/log.png'
    )
  );
  gProjs.push(
    createProject(
      'Picture Quiz',
      'Quiz',
      'Quiz game website',
      'https://optimistic-galileo-907c6e.netlify.app/',
      '17.07.21',
      ['Arcade', ' vanilla js'],
      'img/portfolio/quiz.png'
    )
  );
}

function getProjs() {
  return gProjs;
}
