"use strict";

// ---- ELEMENTS ---- //
const modalBtn = document.querySelector(".modal-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
// ---- END OF ELEMENTS ---- //

// ---- FUNCTIONS ---- //
// Open modal
const openModal = () => modalOverlay.classList.toggle("open-modal");

// Clode modal
const closeModal = () => modalOverlay.classList.toggle("open-modal");
// ---- END OF FUNCTIONS ---- //

// ---- EVENT LISTENERS ---- //
// User opens modal
modalBtn.addEventListener("click", openModal);

// User closes modal
closeBtn.addEventListener("click", closeModal);
// ---- END OF EVENT LISTENERS ---- //
