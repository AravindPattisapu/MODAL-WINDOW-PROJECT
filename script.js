'use strict';
// REFACTORING - USING VARIABLES FOR A CLEAN CODE!
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsShowModal = document.querySelectorAll(`.show-modal`);
// OPEN MODAL FUNCTION DESCRIBING WHAT SHOULD HAPPEN WHEN WE CLICK ON THREE SHOW MODAL BUTTONS
const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};
//CLOSE MODAL FUNCTION DESCRIBING WHAT SHOULD HAPPEN WHEN WE CLICK ON x BUTTON AND CLICK ON OVERLAY
const closedModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};
// FOR LOOP THAT EXECUTES OPEN MODAL FOR EACH SHOW MODAL BUTTON (3)
for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener(`click`, openModal);
// WHAT SHOULD HAPPEN WHEN x BUTTON IS CLICKED
btnCloseModal.addEventListener(`click`, closedModal);
// WHAT SHOULD HAPPEN WHEN WE CLICK ON OVERLAY
overlay.addEventListener(`click`, closedModal);

// IF THE ESCAPE KEY IS PRESSED AND THE HIDDEN CLASS IS NOT CURRENTLY PRESENT ( THAT IS IT IS BLURRING(OVERLAY IS ACTIVE) AND MODAL IS SHOWING ( ALL OPEN))
document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closedModal();
  }
});
