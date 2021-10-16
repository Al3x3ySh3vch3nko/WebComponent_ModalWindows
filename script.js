'use strict';
// Const
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsShowModal = document.querySelectorAll('.show-modal')
// Functions
const f_openModal = function()
{
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const f_closeModal = function()
{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
// EventListener
for (let i=0; i<btnsShowModal.length; i++)
{
    btnsShowModal[i].addEventListener
    ('click', f_openModal);
}

btnCloseModal.addEventListener
('click', f_closeModal)

overlay.addEventListener
('click', f_closeModal)
// Global EventListener
document.addEventListener('keydown', function(event)
{
    if(event.key === 'Escape' && !modal.classList.contains('hidden'))
    {
    f_closeModal()
    }
})
