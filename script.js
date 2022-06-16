const projectsArr = [
  {
    pId: 1,
    pName: 'Project One',
    tags: ['HTML/CSS', 'Ruby On Rails', 'Bootstrap'],
    pImg: '../Images/project1.jpg',
    pText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat tincidunt mattis. Sed ornare sapien lacus, nec placerat leo tempus sed. Curabitur ac augue',
    btnLive: 'https://raminka13.github.io/M1-Portfolio/',
    btnSrc: 'https://github.com/raminka13/M1-Portfolio',
  },
  {
    pId: 2,
    pName: 'Project Two',
    tags: ['HTML/CSS', 'Ruby On Rails', 'Javascript'],
    pImg: '../Images/project2.jpg',
    pText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat tincidunt mattis. Sed ornare sapien lacus, nec placerat leo tempus sed. Curabitur ac augue',
    btnLive: 'https://raminka13.github.io/M1-Portfolio/',
    btnSrc: 'https://github.com/raminka13/M1-Portfolio',
  },
  {
    pId: 3,
    pName: 'Project Three',
    tags: ['HTML/CSS', 'Ruby On Rails', 'Javascript'],
    pImg: '../Images/project3.jpg',
    pText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat tincidunt mattis. Sed ornare sapien lacus, nec placerat leo tempus sed. Curabitur ac augue',
    btnLive: 'https://raminka13.github.io/M1-Portfolio/',
    btnSrc: 'https://github.com/raminka13/M1-Portfolio',
  },
  {
    pId: 4,
    pName: 'Project Four',
    tags: ['HTML/CSS', 'Bootstrap', 'Javascript'],
    pImg: '../Images/project4.jpg',
    pText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat tincidunt mattis. Sed ornare sapien lacus, nec placerat leo tempus sed. Curabitur ac augue',
    btnLive: 'https://raminka13.github.io/M1-Portfolio/',
    btnSrc: 'https://github.com/raminka13/M1-Portfolio',
  },
  {
    pId: 5,
    pName: 'Project Five',
    tags: ['HTML/CSS', 'Ruby On Rails', 'Javascript'],
    pImg: '../Images/project5.jpg',
    pText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat tincidunt mattis. Sed ornare sapien lacus, nec placerat leo tempus sed. Curabitur ac augue',
    btnLive: 'https://raminka13.github.io/M1-Portfolio/',
    btnSrc: 'https://github.com/raminka13/M1-Portfolio',
  },
  {
    pId: 6,
    pName: 'Project Six',
    tags: ['HTML/CSS', 'Ruby On Rails', 'Javascript'],
    pImg: '../Images/project6.jpg',
    pText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat tincidunt mattis. Sed ornare sapien lacus, nec placerat leo tempus sed. Curabitur ac augue',
    btnLive: 'https://raminka13.github.io/M1-Portfolio/',
    btnSrc: 'https://github.com/raminka13/M1-Portfolio',
  },
];

const overlayModal = document.querySelector('.modal-overlay');

function createModal(_project) {
  const modCont = document.createElement('div');
  const modName = document.createElement('h2');
  const lang = document.createElement('div');
  const langList = document.createElement('ul');
  const modImg = document.createElement('img');
  const modText = document.createElement('div');
  const modP = document.createElement('p');
  const liveBtn = document.createElement('a');
  const srcBtn = document.createElement('a');
  const modTitle = document.createTextNode(_project.pName);
  const modParr = document.createTextNode(_project.pText);

  const btnClose = document.createElement('div');
  modCont.appendChild(btnClose);
  btnClose.className = 'modal-menu-close';
  btnClose.addEventListener('click', closeModal);


    for(let i = 0; i < 3 ; i += 1){
      const bar = document.createElement('span');
      bar.className = 'bar';
      btnClose.appendChild(bar);
    };
  
  modCont.className = 'proj-wrp-mod';
  modCont.appendChild(modName);

  modName.className = 'projtxt-mod';
  modName.appendChild(modTitle);

  modCont.appendChild(lang);
  lang.appendChild(langList);

  _project.tags.forEach((_element, index) => {
    const tag = document.createElement('li');
    const tagBtn = document.createElement('button');

    tagBtn.className = 'smallbtn-mod';
    tagBtn.textContent = _project.tags[index];
    langList.appendChild(tag);
    tag.appendChild(tagBtn);
  });
  lang.className = 'projlang-mod';

  modImg.src = _project.pImg;
  modImg.alt = _project.pName;
  modImg.className = 'projectimg-mod';

  modText.appendChild(modP);
  modP.appendChild(modParr);
  modText.className = 'mod-wrpr';
  modP.className = 'mtext-mod';

  liveBtn.textContent = 'See live';
  liveBtn.href = _project.btnLive
  liveBtn.className = 'projbtn-mod';

  srcBtn.textContent = 'See source';
  srcBtn.href = _project.btnSrc
  srcBtn.className = 'projbtn-mod-src';

  overlayModal.appendChild(modCont);
  modCont.appendChild(modImg);
  modCont.appendChild(modText);
  modText.appendChild(liveBtn);
  modText.appendChild(srcBtn);
};

const projContainer = document.getElementById('projects');

function createProject(project) {
  const projDiv = document.createElement('div');
  const projDeco = document.createElement('div');
  const projDeco1 = document.createElement('div');
  const img = document.createElement('img');
  const pWrp = document.createElement('div');
  const name = document.createElement('h2');
  const lang = document.createElement('div');
  const langList = document.createElement('ul');
  const pBtn = document.createElement('a');
  const nameProj = document.createTextNode(project.pName);

  projDiv.className = 'project';
  projDiv.dataset.proj = project.pId;

  projDeco.className = 'deco' + (project.pId + 2);
  projDeco1.className = 'deco' + (project.pId + 3);

  img.src = project.pImg;
  img.alt = project.pName;
  img.className = 'projectimg';
  img.addEventListener('click', showModal);

  pWrp.className = 'projectwrp';

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
  pBtn.addEventListener('click', showModal);

  projContainer.appendChild(projDiv);
  projContainer.appendChild(projDeco);
  projContainer.appendChild(projDeco1);
  projDiv.appendChild(img);
  projDiv.appendChild(pWrp);
  pWrp.appendChild(name);
  pWrp.appendChild(pBtn);
};
projectsArr.forEach(createProject);

function showModal(e) {
  createModal(projectsArr[5]);
  overlayModal.classList.toggle('active');
};

function closeModal(e) {
  overlayModal.classList.remove('active');
};

const mobMenu = document.querySelector('.mobile-menu');
const overlayMenu = document.querySelector('.navlinks');
const closeB = document.querySelector('.mobile-menu-close');
const closeMod = document.querySelector('.modal-menu-close');


mobMenu.addEventListener('click', () => {
  mobMenu.classList.toggle('active');
  overlayMenu.classList.toggle('active');
});

closeB.addEventListener('click', () => {
  mobMenu.classList.toggle('active');
  overlayMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n
  .addEventListener('click', () => {
    mobMenu.classList.remove('active');
    overlayMenu.classList.remove('active');
  }));

document.querySelectorAll('.mobile-menu-close').forEach((n) => n
  .addEventListener('click', () => {
    mobMenu.classList.remove('active');
    overlayMenu.classList.remove('active');
  }));

// document.querySelectorAll('.modal-menu-close').forEach((n) => n
//   .addEventListener('click', () => {
//     overlayModal.classList.remove('active');
//   }));