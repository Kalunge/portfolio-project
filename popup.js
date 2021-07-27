const projects = [
  {
    id: 'tonic-id',
    title: 'Tonic',
    details: ['Canopy', 'Back End dev', 2015],
    image: './img/snapshot.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Css', 'Javascript'],
    firstButton: 'See Live',
    secondButton: 'See Source',
  },
  {
    id: 'facebook-id',
    title: 'Facebook',
    details: ['Canopy', 'Back End dev', 2015],
    image: './img/sectionthree.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Css', 'Javascript'],
    firstButton: 'See Live',
    secondButton: 'See Source',
  },
  {
    id: 'uber-id',
    title: 'Uber',
    details: ['Canopy', 'Back End dev', 2015],
    image: './img//sectiontwo.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Css', 'Javascript'],
    firstButton: 'See Live',
    secondButton: 'See Source',
  },
  {
    id: 'twitter-id',
    title: 'Twitter',
    details: ['Canopy', 'Back End dev', 2015],
    image: './img/sectionfour.png',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologyList: ['Html', 'Css', 'Javascript'],
    firstButton: 'See Live',
    secondButton: 'See Source',
  },
];

const section = document.querySelector('.project-container');
projects.forEach((project) => {
  const div = document.createElement('div');
  div.className = 'project-card';
  div.innerHTML = `
          <div>
          <h2>${project.title}<span class="material-icons"> close </span></h2>
          </div>
          <div>
          <ul>
              <li >${project.details[0]}</li>
              <li >${project.details[1]}</li>
              <li >${project.details[2]}</li>
            </ul>
          </div>
          <div>
            <img src=${project.image} alt="tonic1" class="mob">            
          </div>
          <div>
            <p>${project.description}</p>
          </div>
          <div>
            <ul>
              <li >${project.technologyList[0]}</li>
              <li >${project.technologyList[1]}</li>
              <li >${project.technologyList[2]}</li>
            </ul>
          </div>
            <div>
            <button >${project.firstButton}</button>
            <button >${project.secondButton}</button>
            </div>
          </div>
         `;
  // section.appendChild(div);
});

// const showPopUp = (project) => {
//   const popUpSection = document.createElement('section');
//   popUpSection.innerHTML = `
//          <div>
//           <h2>${project.title}<span class="material-icons"> close </span></h2>
//           </div>
//           <div>
//           <ul>
//               <li >${project.details[0]}</li>
//               <li >${project.details[1]}</li>
//               <li >${project.details[2]}</li>
//             </ul>
//           </div>
//           <div>
//             <img src=${project.image}>
//           </div>
//           <div>
//             <p>${project.description}</p>
//           </div>
//           <div>
//             <ul>
//               <li >${project.technologyList[0]}</li>
//               <li >${project.technologyList[1]}</li>
//               <li >${project.technologyList[2]}</li>
//             </ul>
//           </div>
//             <div>
//             <button >${project.firstButton}</button>
//             <button >${project.secondButton}</button>
//             </div>
//           </div>
//     `;

//   document.querySelector('body').appendChild(popUpSection);
// };

const seeProjectButtons = document.querySelectorAll('.showpopup');
let project = projects[0];

for (let i = 0; i < projects.length; i += 1) {
  project = projects[i];
}

// seeProjectButtons.forEach((button) => {
//   console.log(button.id);
// });
// projects.forEach((project) => {
//   console.log(project.id);
// });

// for (let project of projects) {

// }
seeProjectButtons.forEach((button) => {
  if (button.id === project.id) {
    button.addEventListener('click', () => {
      const popUpSection = document.createElement('section');
      popUpSection.innerHTML = `
           <div>
            <h2>${project.title}</h2>
            <span class="material-icons"> close </span>
            </div>
            <div>
            <ul>
                <li >${project.details[0]}</li>
                <li >${project.details[1]}</li>
                <li >${project.details[2]}</li>
              </ul>
            </div>
            <div>
              <img src=${project.image}>
            </div>
            <div>
              <p>${project.description}</p>
            </div>
            <div>
              <ul>
                <li >${project.technologyList[0]}</li>
                <li >${project.technologyList[1]}</li>
                <li >${project.technologyList[2]}</li>
              </ul>
            </div>
              <div>
              <button >${project.firstButton}</button>
              <button >${project.secondButton}</button>
              </div>
            </div>
      `;

      document.querySelector('.project-container').appendChild(popUpSection);
    });
  }
});
