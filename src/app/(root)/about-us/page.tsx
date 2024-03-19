/* eslint-disable @next/next/no-css-tags */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Page() {
  return (
    <>
      <div id="main-wrapper">
        <div className="clearfix" />
        <section
          className="bg-cover position-relative"
          style={{ background: "url(assets/img/bg.jpg)no-repeat" }}
          data-overlay={5}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-7 col-lg-9 col-md-12">
                <div className="fpc-capstion text-center my-4">
                  <div className="fpc-captions">
                    <h1 className="xl-heading text-light">
                      About GeoTrip &amp; Our Mission
                    </h1>
                    <p className="text-light">
                      Cicero famously orated against his political opponent
                      Lucius Sergius Catilina. Occasionally the first Oration
                      against Catiline is taken for type specimens
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fpc-banner" />
        </section>
        <section>
          <div className="container">
            <div className="row align-items-center justify-content-between g-4">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="">
                  <h2 className="lh-base fs-1 fw-bold">
                    Who We're &amp; Mission?
                  </h2>
                  <p>
                    In a professional context it often happens that private or
                    corporate clients corder a publication to be made and
                    presented with the actual content still not being ready.
                    Think of a news blog that's filled with content hourly on
                    the day of going live. However, reviewers tend to be
                    distracted by comprehensible content, say, a random text
                    copied from a newspaper or the internet. The are likely to
                    focus on the text, disregarding the layout and its elements.
                  </p>
                  <p>
                    On the other hand, we denounce with righteous indignation
                    and dislike men who are so beguiled and demoralized by the
                    charms of pleasure of the moment, so blinded by desire, that
                    they cannot foresee the pain and trouble that are bound to
                    ensue; and equal blame belongs to those who fail in their
                    duty through weakness of will, which is the same as saying
                    through shrinking from toil and pain. These cases are
                    perfectly simple and easy to distinguish. In a free hour,
                    when our power of choice is untrammelled and when nothing
                    prevents our being able to do what we like best, every
                    pleasure is to be welcomed and every pain avoided.{" "}
                  </p>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="position-relative">
                  <img
                    src="assets/img/side-3.png"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-cover"
          style={{ background: "url(assets/img/bg-title.jpg)no-repeat" }}
          data-overlay={5}
        >
          <div className="ht-150" />
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="video-play-wrap text-center">
                  <div className="video-play-btn d-flex align-items-center justify-content-center">
                    <a
                      href="https://www.youtube.com/watch?v=A8EI6JaFbv4"
                      data-bs-toggle="modal"
                      data-bs-target="#popup-video"
                      className="square--90 circle bg-white fs-2 text-primary"
                    >
                      <i className="fa-solid fa-play" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ht-150" />
        </section>
        <section className="py-4 gray">
          <div className="container">
            <div className="row align-items-center justify-content-between g-4">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                <div className="urfacts-wrap d-flex align-items-center justify-content-center">
                  <div className="urfacts-first flex-shrink-0">
                    <h3 className="fs-1 fw-medium text-primary mb-0">32K</h3>
                  </div>
                  <div className="urfacts-caps ps-3">
                    <p className="text-muted-2 lh-base mb-0">
                      Overall
                      <br />
                      Booking
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                <div className="urfacts-wrap d-flex align-items-center justify-content-center">
                  <div className="urfacts-first flex-shrink-0">
                    <h3 className="fs-1 fw-medium text-primary mb-0">25+</h3>
                  </div>
                  <div className="urfacts-caps ps-3">
                    <p className="text-muted-2 lh-base mb-0">
                      Years
                      <br />
                      Successfully
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                <div className="urfacts-wrap d-flex align-items-center justify-content-center">
                  <div className="urfacts-first flex-shrink-0">
                    <h3 className="fs-1 fw-medium text-primary mb-0">45K</h3>
                  </div>
                  <div className="urfacts-caps ps-3">
                    <p className="text-muted-2 lh-base mb-0">
                      Happly
                      <br />
                      Users
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                <div className="urfacts-wrap d-flex align-items-center justify-content-center">
                  <div className="urfacts-first flex-shrink-0">
                    <h3 className="fs-1 fw-medium text-primary mb-0">22</h3>
                  </div>
                  <div className="urfacts-caps ps-3">
                    <p className="text-muted-2 lh-base mb-0">
                      Countries
                      <br />
                      We Work
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                <div className="secHeading-wrap text-center mb-5">
                  <h2>Trending &amp; Popular Articles</h2>
                  <p>
                    Cicero famously orated against his political opponent Lucius
                    Sergius Catilina.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center g-4">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="blogGrid-wrap d-flex flex-column h-100">
                  <div className="blogGrid-pics">
                    <a href="#" className="d-block">
                      <img
                        src="assets/img/blog-1.jpg"
                        className="img-fluid rounded"
                        alt="Blog image"
                      />
                    </a>
                  </div>
                  <div className="blogGrid-caps pt-3">
                    <div className="d-flex align-items-center mb-1">
                      <span className="label text-success bg-light-success">
                        Destination
                      </span>
                    </div>
                    <h4 className="fw-bold fs-6 lh-base">
                      <a href="#" className="text-dark">
                        Make Your Next Journey Delhi To Paris in Comfirtable And
                        Best Price
                      </a>
                    </h4>
                    <p className="mb-3">
                      Think of a news blog that's filled with content hourly on
                      the Besides, random text risks to be unintendedly humorous
                      or offensive day of going live.
                    </p>
                    <a className="text-primary fw-medium" href="#">
                      Read More
                      <i className="fa-solid fa-arrow-trend-up ms-2" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="blogGrid-wrap d-flex flex-column h-100">
                  <div className="blogGrid-pics">
                    <a href="#" className="d-block">
                      <img
                        src="assets/img/blog-2.jpg"
                        className="img-fluid rounded"
                        alt="Blog image"
                      />
                    </a>
                  </div>
                  <div className="blogGrid-caps pt-3">
                    <div className="d-flex align-items-center mb-1">
                      <span className="label text-success bg-light-success">
                        Journey
                      </span>
                    </div>
                    <h4 className="fw-bold fs-6 lh-base">
                      <a href="#" className="text-dark">
                        Make Your Next Journey Delhi To Paris in Comfirtable And
                        Best Price
                      </a>
                    </h4>
                    <p className="mb-3">
                      Think of a news blog that's filled with content hourly on
                      the Besides, random text risks to be unintendedly humorous
                      or offensive day of going live.
                    </p>
                    <a className="text-primary fw-medium" href="#">
                      Read More
                      <i className="fa-solid fa-arrow-trend-up ms-2" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="blogGrid-wrap d-flex flex-column h-100">
                  <div className="blogGrid-pics">
                    <a href="#" className="d-block">
                      <img
                        src="assets/img/blog-3.jpg"
                        className="img-fluid rounded"
                        alt="Blog image"
                      />
                    </a>
                  </div>
                  <div className="blogGrid-caps pt-3">
                    <div className="d-flex align-items-center mb-1">
                      <span className="label text-success bg-light-success">
                        Business
                      </span>
                    </div>
                    <h4 className="fw-bold fs-6 lh-base">
                      <a href="#" className="text-dark">
                        Make Your Next Journey Delhi To Paris in Comfirtable And
                        Best Price
                      </a>
                    </h4>
                    <p className="mb-3">
                      Think of a news blog that's filled with content hourly on
                      the Besides, random text risks to be unintendedly humorous
                      or offensive day of going live.
                    </p>
                    <a className="text-primary fw-medium" href="#">
                      Read More
                      <i className="fa-solid fa-arrow-trend-up ms-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                      <h5 className="fs-6 fw-bold">
                        Suggested Currency For you
                      </h5>
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
        <div
          className="modal fade"
          id="popup-video"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="popupvideo"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content" id="popupvideo">
              <iframe
                className="embed-responsive-item"
                height={480}
                src="https://www.youtube.com/embed/qN3OueBm9F4?rel=0"
                frameBorder={0}
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <a id="back2Top" className="top-scroll" title="Back to top" href="#">
          <i className="fa-solid fa-sort-up" />
        </a>
      </div>
    </>
  );
}
