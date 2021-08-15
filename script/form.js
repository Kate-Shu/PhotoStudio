const inputName = document.querySelectorAll('.input')[0];
const inputPhone = document.querySelectorAll('.input')[1];
const inputMail = document.querySelectorAll('.input')[2];
const errMessageName = document.querySelectorAll('.error-message')[0];
const errMessagePhone = document.querySelectorAll('.error-message')[1];
const errMessageMail = document.querySelectorAll('.error-message')[2];
const form = document.querySelector('.form');
const applyBtn = document.querySelector('.btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modal = document.querySelector('.modal');
const btnGoHomepage = document.querySelector('.go-homepage');
const pop = document.querySelector('.pop');


const regExpValidName = /^[a-zA-ZА-Яа-я\s]+$/;
const regExpValidPhone = /^\+?[0-9\s]+$/;
// const regExpValidEmail = /^\w+@\w+\.\w{2,}$/; 
// const regExpValidEmail = /^[a-zA-ZА-Яа-я]\@[a-zA-ZА-Яа-я]\.[a-zA-ZА-Яа-я]+$/;


const validData = {
  getFeedback(name, phone, form, btnhome) {

    if (name) {
      name.addEventListener('focusout', () => {
        if (name.value != '') {
          name.value = name.value[0].toUpperCase() + name.value.slice(1);
        }
        return;
      });

      name.addEventListener('keypress', event => {
        if (!regExpValidName.test(event.key)) {
          errMessageName.style.opacity = '0.8';
          event.preventDefault();
        } else {
          errMessageName.style.opacity = '0';
        }
      });
    }

    if (phone) {
      phone.addEventListener('keypress', event => {
        if (!regExpValidPhone.test(event.key)) {
          errMessagePhone.style.opacity = '0.8';
          event.preventDefault();
        } else {
          errMessagePhone.style.opacity = '0';
        }
      });
    }


    // mail.addEventListener('keypress', event => {
    //  if(!regExpValidEmail.test(event.key)){
    // errMessageMail.style.opacity = '0.8';
    // event.preventDefault();
    //  }else{
    // errMessageMail.style.opacity = '0';
    //  }
    // });

    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        modalOverlay.classList.add('open');

      });
    }

    if (btnhome) {
      btnhome.setAttribute('onclick', 'location.href = "index.html"');
    }

  }
};

const init = () => {
  validData.getFeedback(inputName, inputPhone, form, btnGoHomepage);
};
