const projectsArr = [
  {
    pId: 1,
    pName: 'Budgety App',
    tags: ['Ruby', 'Rails', 'PostgreSQL', 'Render'],
    pImg: './Images/Budgety.png',
    pText: 'Mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what. This project is done with Ruby on Rails implementing all the CRUD methods.',
    btnLive: 'https://budgety-eoo6.onrender.com/',
    btnSrc: 'https://github.com/raminka13/budgety/',
  },
  {
    pId: 2,
    pName: 'Blog App',
    tags: ['Ruby', 'Rails', 'PostgreSQL'],
    pImg: './Images/BlogApp.png',
    pText: 'A blog is a a regularly updated website or web page, typically one run by an individual or small group, that is written in an informal or conversational style. This project is done with Ruby on Rails implementing all the CRUD methods.',
    btnLive: 'https://github.com/raminka13/blog-app',
    btnSrc: 'https://github.com/raminka13/blog-app',
  },
  {
    pId: 3,
    pName: 'Math Magicians',
    tags: ['React', 'JavaScript', 'CSS', 'API'],
    pImg: './Images/math-magicians.png',
    pText: '"Math magicians" is a website for all fans of mathematics. A simple calculator is implemented in this project. It allows users to do some simple math operations. You can also check a random math quote. This project is done with React and JavaScript. It is a single page application.',
    btnLive: 'https://raminka13.github.io/math-magicians/',
    btnSrc: 'https://github.com/raminka13/math-magicians/',
  },
  {
    pId: 4,
    pName: 'Recipe App',
    tags: ['Ruby', 'Rails', 'PostgreSQL', 'Render'],
    pImg: './Images/RecipeApp.png',
    pText: 'The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. This project is done with Ruby on Rails implementing all the CRUD methods.',
    btnLive: 'https://recipe-app-1ru1.onrender.com/',
    btnSrc: 'https://github.com/raminka13/recipe-app',
  },
  {
    pId: 5,
    pName: 'Space Travelers Hub',
    tags: ['React', 'Redux', 'JavaScript', 'CSS', 'API'],
    pImg: './Images/Space-Missions.png',
    pText: 'This is a website for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions. This project is done with React and Redux implementing all the CRUD methods. It is a single page application.',
    btnLive: 'https://space-traverlers-raminka-nyame.netlify.app/',
    btnSrc: 'https://github.com/raminka13/space-missions',
  },
  {
    pId: 6,
    pName: 'ToDo App',
    tags: ['HTML/CSS', 'JavaScript', 'Webpack'],
    pImg: './Images/ToDoApp.png',
    pText: 'This is a simple ToDo app. You can add, edit, delete and mark as completed your tasks. You can also filter your tasks by completed or uncompleted. This project is done with JavaScript and Webpack. It is a single page application.',
    btnLive: 'https://raminka13.github.io/todo-app/dist/',
    btnSrc: 'https://github.com/raminka13//todo-app/',
  },
  {
    pId: 7,
    pName: 'Booklist App',
    tags: ['HTML/CSS', 'JavaScript', 'SPA'],
    pImg: './Images/BooksListApp.png',
    pText: 'With this great app you can make a list of books to read later. You can add, edit, delete and mark as read your books. This project is done with JavaScript and Webpack. It is a single page application.',
    btnLive: 'https://raminka13.github.io/booklistapp-es6-modules/',
    btnSrc: 'https://raminka13.github.io/booklistapp-es6-modules/',
  },
];

// Projects
const projContainer = document.getElementById('projects');
const projTitle = document.createElement('div');
const pTitle = document.createElement('h1');

projContainer.appendChild(projTitle);
projTitle.className = 'projtitle';
projTitle.appendChild(pTitle);
pTitle.className = 'mtitle';
pTitle.textContent = 'Projects';

function createProject(project) {
  const projDiv = document.createElement('div');

  const img = document.createElement('img');
  const pWrp = document.createElement('div');
  const name = document.createElement('h2');
  const lang = document.createElement('div');
  const langList = document.createElement('ul');
  const pBtn = document.createElement('a');
  const nameProj = document.createTextNode(project.pName);

  projDiv.className = 'project';

  img.src = project.pImg;
  img.alt = project.pName;
  img.className = 'projectimg';
  img.dataset.projnum = project.pId;

  pWrp.className = 'projectwrp mproj';
  name.appendChild(nameProj);
  name.className = 'projtxt';

  pWrp.appendChild(lang);
  lang.appendChild(langList);

  project.tags.forEach((_element, index) => {
    const tag = document.createElement('li');
    const tagBtn = document.createElement('button');

    tagBtn.className = 'smallbtn';
    tagBtn.textContent = project.tags[index];
    langList.appendChild(tag);
    tag.appendChild(tagBtn);
  });

  lang.className = 'projlang';

  pBtn.textContent = 'See this project';
  pBtn.className = 'projbtn';
  pBtn.dataset.projnum = project.pId;

  projContainer.appendChild(projDiv);

  projDiv.appendChild(img);
  projDiv.appendChild(pWrp);
  pWrp.appendChild(name);
  pWrp.appendChild(pBtn);
}
projectsArr.forEach(createProject);

// Modal
const overlayModal = document.querySelector('.modal-overlay');
function closeModal() {
  overlayModal.classList.remove('active');
}

function createModal(id) {
  const project = projectsArr.find((project) => Number(project.pId) === Number(id));
  const modCont = document.createElement('div');
  const modName = document.createElement('h2');
  const lang = document.createElement('div');
  const langList = document.createElement('ul');
  const modImg = document.createElement('img');
  const modText = document.createElement('div');
  const modP = document.createElement('p');
  const liveBtn = document.createElement('a');
  const srcBtn = document.createElement('a');
  const modTitle = document.createTextNode(project.pName);
  const modParr = document.createTextNode(project.pText);

  const btnClose = document.createElement('div');
  modCont.appendChild(btnClose);
  btnClose.className = 'modal-menu-close';
  btnClose.addEventListener('click', closeModal);

  for (let i = 0; i < 3; i += 1) {
    const bar = document.createElement('span');
    bar.className = 'bar';
    btnClose.appendChild(bar);
  }

  modCont.className = 'proj-wrp-mod';
  modCont.appendChild(modName);

  modName.className = 'projtxt-mod';
  modName.appendChild(modTitle);

  modCont.appendChild(lang);
  lang.appendChild(langList);

  project.tags.forEach((tage) => {
    const tag = document.createElement('li');
    const tagBtn = document.createElement('button');

    tagBtn.className = 'smallbtn-mod';
    tagBtn.textContent = tage;
    langList.appendChild(tag);
    tag.appendChild(tagBtn);
  });
  lang.className = 'projlang-mod';

  modImg.src = project.pImg;
  modImg.alt = project.pName;
  modImg.className = 'projectimg-mod';

  modText.appendChild(modP);
  modP.appendChild(modParr);
  modText.className = 'mod-wrpr';
  modP.className = 'mtext-mod';

  liveBtn.textContent = 'See live';
  liveBtn.href = project.btnLive;
  liveBtn.target = '_blank';
  liveBtn.className = 'projbtn-mod';

  srcBtn.textContent = 'See source';
  srcBtn.href = project.btnSrc;
  srcBtn.target = '_blank';
  srcBtn.className = 'projbtn-mod-src';

  overlayModal.appendChild(modCont);
  modCont.appendChild(modImg);
  modCont.appendChild(modText);
  modText.appendChild(liveBtn);
  modText.appendChild(srcBtn);
}

// Modal Operations
function cleanModal() {
  const div = overlayModal;
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function openModal() {
  overlayModal.classList.toggle('active');
  window.onclick = (event) => {
    if (event.target === overlayModal) {
      overlayModal.classList.remove('active');
    }
  };
}

projContainer.addEventListener('click', (e) => {
  const elementId = e.target.dataset.projnum;
  if (e.target.classList.contains('projbtn') || e.target.classList.contains('projectimg')) {
    cleanModal(overlayModal.id);
    createModal(elementId);
    openModal();
  }
});

// Mobile Menu
const mobMenu = document.querySelector('.mobile-menu');
const overlayMenu = document.querySelector('.navlinks');

mobMenu.addEventListener('click', () => {
  mobMenu.classList.toggle('active');
  overlayMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n
  .addEventListener('click', () => {
    mobMenu.classList.remove('active');
    overlayMenu.classList.remove('active');
  }));

document.querySelector('.navlinks').addEventListener('click', () => {
  mobMenu.classList.remove('active');
  overlayMenu.classList.remove('active');
});

// Form Validation
const subBtn = document.getElementById('submitbtn');
const errMsg = document.getElementById('error_msg');
const mailForm = document.getElementById('email-address');

subBtn.onclick = (event) => {
  const mailValue = document.getElementById('email-address').value;
  const lowerMail = mailValue.toLowerCase();

  if (mailValue !== lowerMail) {
    errMsg.textContent = 'Format is not correct';
    mailForm.classList.toggle('email_error');
    event.preventDefault();
  }
};

// Local Storage
const ctcForm = document.getElementById('contact');
const ctcName = document.getElementById('fname');
const ctcMsg = document.getElementById('message');

let strData;

ctcForm.addEventListener('input', () => {
  const ctcNameVal = ctcName.value;
  const ctcMailValue = mailForm.value;
  const ctcMsgValue = ctcMsg.value;

  mailForm.classList.remove('email_error');
  errMsg.textContent = '';

  if (!ctcNameVal && !ctcMailValue && !ctcMsgValue) {
    return;
  }

  strData = {
    ctcNameVal,
    ctcMailValue,
    ctcMsgValue,
  };

  localStorage.setItem('strData', JSON.stringify(strData));
});

strData = JSON.parse(localStorage.getItem('strData'));

if (strData) {
  ctcName.value = strData.ctcNameVal;
  mailForm.value = strData.ctcMailValue;
  ctcMsg.value = strData.ctcMailValue;
}