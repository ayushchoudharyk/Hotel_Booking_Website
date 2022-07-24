class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<a href="index.html" class="header-logo">
          <img
            class="logo-img"
            src="../assests/images/logo.png"
            alt="logo" /></a>

                <button
                    type="button"
                    class="login-tag btn btn-light"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                >
                    Login
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
    <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Please Login</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <!-- <form action="">
                        <label for="uname">Username:  </label>
                        <input type="text" name="uname" id="uname">
                        <br>
                        <label for="pass">Password:</label>
                        <input type="password" name="pass" id="pass">
                    </form> -->
            <form>
              <div class="mb-3">
                <label
                  for="exampleInputEmail1"
                  class="form-label"
                  placeholder="Enter User Name"
                  >Username</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="uname"
                  aria-describedby="emailHelp"
                  placeholder="Enter Username"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Password</label
                >
                <input
                  type="password"
                  class="form-control"
                  id="psw"
                  placeholder="Enter Password"
                />
              </div>
              <button
                type="submit"
                onclick="login()"
                class="btn btn-primary d-grid gap-2 col-2 mx-auto"
              >
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
