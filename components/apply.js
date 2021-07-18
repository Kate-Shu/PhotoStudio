// class Apply extends HTMLElement{
//  constructor(){
//   super();
//   let link = document.createElement('link');
//   link.href = 'style/apply.css';
//   link.rel = 'stylesheet';
//   link.type = 'text/css';
//   document.body.appendChild(link);
//  }
//  connectedCallback(){
//   this.innerHTML = `
//   <div class="popup-container">
//  <div class="popup-wrapper">
//   <div class="text">input your contact number and we call you</div>
//   <form action="#" class="form">
//    <div class="input-wrapper">
//     <input class="input" type="text" autocomplete="off" placeholder=" " id="name" name="name" required>
//     <label for="name" class="label">Name</label>
//     <div class="error-message">
//      Data is not valid.
//     </div>
//    </div>
//    <div class="input-wrapper">
//     <input class="input" autocomplete="off" placeholder=" " id="phone" name="phone" required>
//     <label class="label" for="phone">Phone number</label>
//     <div class="error-message">
//      Data is not valid.
//     </div>
//    </div>
//    <div class="input-wrapper">
//     <input class="input" autocomplete="off" placeholder=" " id="mail" name="mail" type="email" required>
//     <label class="label" for="mail">E-mail</label>
//     <div class="error-message">
//      Data is not valid.
//     </div>
//    </div>
//    <div class="input-wrapper">
//     <input class="input" autocomplete="off" placeholder=" " id="description" name="description" maxlength="40" 
// required>
//     <label class="label" for="description" >Brief description of your event </label>
//    </div>
//    <div class="input-wrapper">
//     <input type="date" class="inputDate" autocomplete="off" placeholder=" " id="date" name="date" required>
//     <label class="label labelDate" for="date">Chose the date of your event </label>
//    </div>
//    <button class="btn" type="submit">
//     <span>Apply</span>
//    </button>
//   </form>
//  </div>
// </div>
// <div class="modal-overlay">
//  <div class="modal">
//   <div class="modal-title">
//    Thank you
//   </div>
//   <div class="modal-description">
//    for your application!
//   </div>
//   <button class="btn go-homepage">
//    <span>
//     go back to the home page
//    </span>
//   </button>
//  </div>
// </div>
//   `;
//  }
// }
// customElements.define('apply-component', Apply);