let disableLoader = () => {
  document.getElementById('loader').style.visibility = 'hidden';
  document.getElementsByTagName('body')[0].style.visibility = 'visible';
};

let displayLoader = () => {
  document.getElementsByTagName('body')[0].style.visibility = 'hidden';
  document.getElementById('loader').style.visibility = 'visible';
};


class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<a href="index.html" class="header-logo">
          <img
            class="logo-img"
            src="../assests/images/logo.png"
            alt="logo" /></a>
                  <button
                    id="loginBtn"
                    type="button"
                    class="btn btn-light"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    onclick="mainLogin(event)"
                >
                 LOGIN
                </button>`;
  }
}

customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="footer">
        <footer class="index-footer">
          <div class="contact-ftr">
            <a
              class="btn btn-info"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              >Contact Us</a
            >
          </div>

          <div class="social-icons">
            <a href="https://www.facebook.com/"
              ><img
                class="social-icon"
                src="assests/images/facebook.png"
                alt="Facebook"
            /></a>
            <a href="https://www.instagram.com/"
              ><img
                class="social-icon"
                src="assests/images/instagram.png"
                alt="instagram"
            /></a>
            <a href="https://www.twitter.com/"
              ><img
                class="social-icon"
                src="assests/images/twitter.png"
                alt="twitter"
            /></a>
          </div>
        </footer>
        <div class="copy_right-ftr">
          <p class="copy_right-p">&#169; 2022 ROOM SEARCH PVT.LTD.</p>
        </div>
      </div>
    </div>


    <!-- Login Modal -->
   <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Please Login</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id= "login-form">
              <div class="mb-3">
                  <label for="username" class="form-label" placeholder="Enter User Name">Username: </label>
                  <input type="text" class="form-control" id="usr-name" name="username" placeholder="Enter Username" required />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" id="usr-psw"  class="form-control" id="psw" placeholder="Enter Password" required />
              </div>
              <button type="submit" id="login-modal-button" onclick="login(event)" class="btn btn-primary d-grid gap-2 col-2 mx-auto" data-bs-dismiss="modal">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>


    <!--Contact Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Get in touch</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>Thank you for reaching out!!!</p>
            <p>Please enter your email and we will get back to you</p>
            <form action="index.html">
              <label for="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
              />
              <br />
            </form>
          </div>
          <div class="modal-footer">
            <input
              type="submit"
              value="Submit"
              class="btn btn-primary btn-sm"
            />
          </div>
        </div>
      </div>
    </div>`;
  }
}

customElements.define('my-footer', MyFooter);

let login_Btn = document.getElementById('loginBtn');
let login_modal_button = document.getElementById('login-modal-button');
let usrName = document.getElementById('usr-name');
let usrPsw = document.getElementById('usr-psw');

login_Btn.addEventListener('click', (e) => {
  if (localStorage.getItem('isLogin') === 'true') {
    localStorage.setItem('isLogin', 'false');
    location.reload();
  }
});

login_modal_button.addEventListener('click', (e) => {
  localStorage.setItem('username', 'admin');
  localStorage.setItem('password', 'admin');
  localStorage.setItem('isLogin', 'false');

  // here we are setting the func. for login (e)
  e.preventDefault();
  if (
    usrName.value === localStorage.getItem('username') &&
    usrPsw.value === localStorage.getItem('password')
  ) {
    localStorage.setItem('isLogin', 'true');
    alert('Successfully logged in!');
    login_Btn.dataset.target = '';
    login_Btn.innerHTML = 'LOGOUT';
    location.reload();
  } else {
    alert('Incorrect credentials! Login failed!');
    // clearing values of username & password fields from login modal
    usrName.value = '';
    usrPsw.value = '';
  }
});

let isLogin = localStorage.getItem('isLogin');
let loginElement = document.getElementById('login');

let checkLogin = () => {
  if (!isLogin || isLogin === 'false') {
    localStorage.clear();
    login_Btn.dataset.target = '#login-modal';
    login_Btn.innerText = 'LOGIN';
  } else if (isLogin === 'true') {
    login_Btn.dataset.target = '';
    login_Btn.innerText = 'LOGOUT';
  }
};
checkLogin();
