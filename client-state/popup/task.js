const btnCloseModal = document.querySelector(`.modal__close`);
const modal = document.querySelector(`.modal`);

window.addEventListener(`load`, () => {
  if (getCookie(`modal`) === `closed`) {
    modal.classList.remove(`modal_active`);
  } else {
    modal.classList.add(`modal_active`);
  }
})

btnCloseModal.addEventListener(`click`, () => {
  modal.classList.remove(`modal_active`);
  setCookie('modal', `closed`);
})

function setCookie(name, value) {
  document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
  const value = `; ${document.cookie} `;
  let parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop();
  }
}