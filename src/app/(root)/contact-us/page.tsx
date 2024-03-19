/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Page() {
  return (
    <div id="main-wrapper">
      {/* ============================ Booking Title ================================== */}
      <section
        className="bg-cover position-relative"
        style={{ background: "url(assets/img/bg-title.jpg)no-repeat" }}
        data-overlay={5}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-12">
              <div className="fpc-capstion text-center my-4">
                <div className="fpc-captions">
                  <h1 className="xl-heading text-light">Get-in Touch</h1>
                  <p className="text-light">
                    Cicero famously orated against his political opponent Lucius
                    Sergius Catilina. Occasionally the first Oration against
                    Catiline is taken for type specimens
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============================ Booking Title ================================== */}
      {/* ============================ Form Section ================================== */}
      <section>
        <div className="container">
          <div className="row justify-content-between g-4 mb-5">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="card p-4 rounded-4 border br-dashed text-center h-100">
                <div className="crds-icons d-inline-flex mx-auto mb-3 text-primary fs-2">
                  <i className="fa-solid fa-briefcase" />
                </div>
                <div className="crds-desc">
                  <h5>Drop a Mail</h5>
                  <p className="fs-6 text-md lh-2 mb-0">
                    Themezhub@gmail.com
                    <br />
                    Paythemezhub@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="card p-4 rounded-4 border br-dashed text-center h-100">
                <div className="crds-icons d-inline-flex mx-auto mb-3 text-primary fs-2">
                  <i className="fa-solid fa-headset" />
                </div>
                <div className="crds-desc">
                  <h5>Call Us</h5>
                  <p className="fs-6 text-md lh-2 mb-0">
                    (0522) 2563568
                    <br />
                    +91 256 6548 457
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="card p-4 rounded-4 border br-dashed text-center h-100">
                <div className="crds-icons d-inline-flex mx-auto mb-3 text-primary fs-2">
                  <i className="fa-solid fa-globe" />
                </div>
                <div className="crds-desc">
                  <h5>Connect with Social</h5>
                  <p className="text-md lh-2">
                    Let's Connect with Us via social media
                  </p>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      {" "}
                      <a
                        className="square--40 circle gray-simple color--facebook"
                        href="#"
                      >
                        <i className="fa-brands fa-facebook-f" />
                      </a>{" "}
                    </li>
                    <li className="list-inline-item">
                      {" "}
                      <a
                        className="square--40 circle gray-simple color--instagram"
                        href="#"
                      >
                        <i className="fa-brands fa-instagram" />
                      </a>{" "}
                    </li>
                    <li className="list-inline-item">
                      {" "}
                      <a
                        className="square--40 circle gray-simple color--twitter"
                        href="#"
                      >
                        <i className="fa-brands fa-twitter" />
                      </a>{" "}
                    </li>
                    <li className="list-inline-item">
                      {" "}
                      <a
                        className="square--40 circle gray-simple color--dribbble"
                        href="#"
                      >
                        <i className="fa-brands fa-dribbble" />
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between g-4">
            <div className="col-xl-7 col-lg-7 col-md-12">
              <div className="contactForm gray-simple p-4 rounded-3">
                <form>
                  <div className="row align-items-center">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="touch-block d-flex flex-column mb-4">
                        <h2>Drop Us a Line</h2>
                        <p>
                          Get in touch via form below and we will reply as soos
                          as we can.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Your Name</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">eMail ID</label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Phone No.</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="form-group">
                        <label className="form-label">Subject</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label className="form-label">Your Query</label>
                        <textarea
                          className="form-control ht-120"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12">
                      <div className="form-group mb-0">
                        <button
                          type="button"
                          className="btn fw-medium btn-primary"
                        >
                          Send Message
                          <i className="fa-solid fa-paper-plane ms-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12">
              <iframe
                className="full-width ht-100 grayscale rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin"
                height={500}
                style={{ border: 0 }}
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
          </div>
        </div>
      </section>
      {/* ============================ Form Section End ================================== */}
      {/* ============================ Call To Action Start ================================== */}
      <div className="py-5 bg-primary">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <h4 className="text-light fw-bold lh-base m-0">
                Join our Newsletter To Keep Up To Date With Us!
              </h4>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="newsletter-forms mt-md-0 mt-4">
                <form>
                  <div className="row align-items-center justify-content-between bg-white rounded-3 p-2 gx-0">
                    <div className="col-xl-9 col-lg-8 col-md-8">
                      <div className="form-group m-0">
                        <input
                          type="text"
                          className="form-control bold ps-1 border-0"
                          placeholder="Enter Your Mail!"
                        />
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-4">
                      <div className="form-group m-0">
                        <button
                          type="button"
                          className="btn btn-dark fw-medium full-width"
                        >
                          Submit
                          <i className="fa-solid fa-arrow-trend-up ms-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Log In Modal */}
      <div
        className="modal fade"
        id="login"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="loginmodal"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered login-pop-form"
          role="document"
        >
          <div className="modal-content" id="loginmodal">
            <div className="modal-header">
              <h4 className="modal-title fs-6">Sign In / Register</h4>
              <a
                href="#"
                className="text-muted fs-4"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-square-xmark" />
              </a>
            </div>
            <div className="modal-body">
              <div className="modal-login-form py-4 px-md-3 px-0">
                <form>
                  <div className="form-floating mb-4">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="name@example.com"
                    />
                    <label>User Name</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                    <label>Password</label>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-primary full-width font--bold btn-lg"
                    >
                      Log In
                    </button>
                  </div>
                  <div className="modal-flex-item d-flex align-items-center justify-content-between mb-3">
                    <div className="modal-flex-first">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="savepassword"
                          defaultValue="option1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="savepassword"
                        >
                          Save Password
                        </label>
                      </div>
                    </div>
                    <div className="modal-flex-last">
                      <a
                        href="JavaScript:Void(0);"
                        className="text-primary fw-medium"
                      >
                        Forget Password?
                      </a>
                    </div>
                  </div>
                </form>
              </div>
              <div className="prixer px-3">
                <div className="devider-wraps position-relative">
                  <div className="devider-text text-muted-2 text-md">
                    Sign In with More Methods
                  </div>
                </div>
              </div>
              <div className="social-login py-4 px-2">
                <ul className="row align-items-center justify-content-between g-3 p-0 m-0">
                  <li className="col">
                    <a
                      href="#"
                      className="square--60 border br-dashed rounded-2 full-width"
                    >
                      <i className="fa-brands fa-facebook color--facebook fs-2" />
                    </a>
                  </li>
                  <li className="col">
                    <a
                      href="#"
                      className="square--60 border br-dashed rounded-2"
                    >
                      <i className="fa-brands fa-whatsapp color--whatsapp fs-2" />
                    </a>
                  </li>
                  <li className="col">
                    <a
                      href="#"
                      className="square--60 border br-dashed rounded-2"
                    >
                      <i className="fa-brands fa-linkedin color--linkedin fs-2" />
                    </a>
                  </li>
                  <li className="col">
                    <a
                      href="#"
                      className="square--60 border br-dashed rounded-2"
                    >
                      <i className="fa-brands fa-dribbble color--dribbble fs-2" />
                    </a>
                  </li>
                  <li className="col">
                    <a
                      href="#"
                      className="square--60 border br-dashed rounded-2"
                    >
                      <i className="fa-brands fa-twitter color--twitter fs-2" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-footer align-items-center justify-content-center">
              <p>
                Don't have an account yet?
                <a href="signup.html" className="text-primary fw-medium ms-1">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End Modal */}
      {/* Choose Currency Modal */}
      <div
        className="modal modal-lg fade"
        id="currencyModal"
        tabIndex={-1}
        aria-labelledby="currenyModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fs-6" id="currenyModalLabel">
                Select Your Currency
              </h4>
              <a
                href="#"
                className="text-muted fs-4"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-square-xmark" />
              </a>
            </div>
            <div className="modal-body">
              <div className="allCurrencylist">
                <div className="suggestedCurrencylist-wrap mb-4">
                  <div className="d-inline-block mb-0 ps-3">
                    <h5 className="fs-6 fw-bold">Suggested Currency For you</h5>
                  </div>
                  <div className="suggestedCurrencylists">
                    <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-2 gy-2 gx-3 m-0 p-0">
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            United State Dollar
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            USD
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Pound Sterling
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            GBP
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency active" href="#">
                          <div className="text-dark text-md fw-medium">
                            Indian Rupees
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            Inr
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Euro
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            EUR
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Australian Dollar
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            aud
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Thai Baht
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            thb
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="suggestedCurrencylist-wrap">
                  <div className="d-inline-block mb-0 ps-3">
                    <h5 className="fs-6 fw-bold">All Currencies</h5>
                  </div>
                  <div className="suggestedCurrencylists">
                    <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-2 gy-2 gx-3 m-0 p-0">
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            United State Dollar
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            USD
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Property currency
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            GBP
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Argentine Peso
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            EUR
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Azerbaijani Manat
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            Inr
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Australian Dollar
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            aud
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Bahraini Dinar
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            thb
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Brazilian Real
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            USD
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Bulgarian Lev
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            GBP
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Canadian Dollar
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            EUR
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Chilean Peso
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            Inr
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Colombian Peso
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            aud
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Danish Krone
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            thb
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Egyptian Pound
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            USD
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Hungarian Forint
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            GBP
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Japanese Yen
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            EUR
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Jordanian Dinar
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            Inr
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Kuwaiti Dinar
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            aud
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Malaysian Ringgit
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            thb
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCurrency" href="#">
                          <div className="text-dark text-md fw-medium">
                            Singapore Dollar
                          </div>
                          <div className="text-muted-2 text-md text-uppercase">
                            thb
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Choose Countries Modal */}
      <div
        className="modal modal-lg fade"
        id="countryModal"
        tabIndex={-1}
        aria-labelledby="countryModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fs-6" id="countryModalLabel">
                Select Your Country
              </h4>
              <a
                href="#"
                className="text-muted fs-4"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-square-xmark" />
              </a>
            </div>
            <div className="modal-body">
              <div className="allCountrieslist">
                <div className="suggestedCurrencylist-wrap mb-4">
                  <div className="d-inline-block mb-0 ps-3">
                    <h5 className="fs-6 fw-bold">
                      Suggested Countries For you
                    </h5>
                  </div>
                  <div className="suggestedCurrencylists">
                    <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-2 gx-3 m-0 p-0">
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/united-states.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            United State Dollar
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/united-kingdom.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Pound Sterling
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry active" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/flag.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Indian Rupees
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/belgium.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Euro
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/brazil.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Australian Dollar
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/china.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Thai Baht
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="suggestedCurrencylist-wrap">
                  <div className="d-inline-block mb-0 ps-3">
                    <h5 className="fs-6 fw-bold">All Countries</h5>
                  </div>
                  <div className="suggestedCurrencylists">
                    <ul className="row align-items-center justify-content-start row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-2 gx-3 m-0 p-0">
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/united-states.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            United State Dollar
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/vietnam.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Property currency
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/turkey.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Argentine Peso
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/spain.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Azerbaijani Manat
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/japan.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Australian Dollar
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/flag.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Bahraini Dinar
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/portugal.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Brazilian Real
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/italy.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Bulgarian Lev
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/germany.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Canadian Dollar
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/france.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Chilean Peso
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/european.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Colombian Peso
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/china.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Danish Krone
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/brazil.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Egyptian Pound
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/belgium.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Hungarian Forint
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/turkey.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Japanese Yen
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/spain.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Jordanian Dinar
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/germany.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Kuwaiti Dinar
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/france.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Malaysian Ringgit
                          </div>
                        </a>
                      </li>
                      <li className="col">
                        <a className="selectCountry" href="#">
                          <div className="d-inline-block">
                            <img
                              src="assets/img/flag/brazil.png"
                              className="img-fluid circle"
                              width={35}
                              alt=""
                            />
                          </div>
                          <div className="text-dark text-md fw-medium ps-2">
                            Singapore Dollar
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a id="back2Top" className="top-scroll" title="Back to top" href="#">
        <i className="fa-solid fa-sort-up" />
      </a>
    </div>
  );
}
