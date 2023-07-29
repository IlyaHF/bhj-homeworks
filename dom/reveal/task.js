window.onscroll = showSection;

function showSection() {
  const revealBlock = document.querySelectorAll(`.reveal`);
  const viewport = window.innerHeight;
  revealBlock.forEach(section => {
    let topBorder = section.getBoundingClientRect().top;
    topBorder < viewport ? section.classList.add(`reveal_active`) :
    section.classList.remove(`reveal_active`);
  });
}