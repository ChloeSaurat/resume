const collapseBox = (anchor, box) => {
  box.style.display = "none";
  let openBox = false;
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    // event.currentTarget.innerHTML = '';
    if (openBox) {
      event.currentTarget.innerHTML = '<h4> CAREER BACKGROUND </h4>';
      box.style.display = "none";
      openBox = false;
      // console.log('click false');
    } else {
      event.currentTarget.innerHTML = '<h4>CAREER BACKGROUND</h4>';
      box.style.display = "block";
      openBox = true;
      // console.log('click true');
    }
  });
};

const experienceAnchor = document.querySelector('a[href="#collapseExperience"]');
const experienceBox = document.querySelector("#collapseExperience");
collapseBox(experienceAnchor, experienceBox);

