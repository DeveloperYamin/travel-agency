/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */
import React from "react";

export default function Page() {
  return (
    <>
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
                    <h1 className="xl-heading text-light">
                      Privacy &amp; Policy
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
        {/* ============================ Booking Title ================================== */}
        {/* ============================ Articles Section ================================== */}
        <section>
          <div className="container">
            <div className="row justify-content-center g-4">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <h2>Privacy &amp; Policy</h2>
                <p>
                  When ordering or registering on our Site you may be asked to
                  enter your name, member name, email address, mailing address,
                  country, billing information or other details to help you with
                  your experience. These information are collected in purpose of
                  providing services described on it, like to verify your
                  identity when you sign in to website, to process your
                  transactions made on site, to respond to support tickets and
                  offer customer services, for administrative and accounting
                  needs that we required to provide to government. When you
                  submit a support question we collect your first name, last
                  name and your email address so that we can correspond with
                  you.
                </p>
                <h3 className="fs-4">Google Analytics</h3>
                <p>
                  In a professional context it often happens that private or
                  corporate clients corder a publication to be made and
                  presented with the actual content still not being ready. Think
                  of a news blog that's filled with content hourly on the day of
                  going live. However, reviewers tend to be distracted by
                  comprehensible content, say, a random text copied from a
                  newspaper or the internet.{" "}
                </p>
                <h3 className="fs-4">Who we share your data with</h3>
                <p>
                  In a professional context it often happens that private or
                  corporate clients corder a publication to be made and
                  presented with the actual content still not being ready. Think
                  of a news blog that's filled with content hourly on the day of
                  going live. However, reviewers tend to be distracted by
                  comprehensible content, say, a random text copied from a
                  newspaper or the internet.{" "}
                </p>
                <h3 className="fs-4">Embedded content from other websites</h3>
                <p>
                  In a professional context it often happens that private or
                  corporate clients corder a publication to be made and
                  presented with the actual content still not being ready. Think
                  of a news blog that's filled with content hourly on the day of
                  going live. However, reviewers tend to be distracted by
                  comprehensible content, say, a random text copied from a
                  newspaper or the internet.{" "}
                </p>
                <h3 className="fs-4">How long we retain your data</h3>
                <p>
                  In a professional context it often happens that private or
                  corporate clients corder a publication to be made and
                  presented with the actual content still not being ready. Think
                  of a news blog that's filled with content hourly on the day of
                  going live. However, reviewers tend to be distracted by
                  comprehensible content, say, a random text copied from a
                  newspaper or the internet.{" "}
                </p>
                <h3 className="fs-4">Changes to this privacy policy</h3>
                <p>
                  In a professional context it often happens that private or
                  corporate clients corder a publication to be made and
                  presented with the actual content still not being ready. Think
                  of a news blog that's filled with content hourly on the day of
                  going live. However, reviewers tend to be distracted by
                  comprehensible content, say, a random text copied from a
                  newspaper or the internet.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Articles Section End ================================== */}
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
        {/* ============================ Call To Action Start ================================== */}
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
        {/* Print Invoice */}
        <div
          className="modal modal-lg fade"
          id="invoice"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="invoicemodal"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered invoice-pop-form"
            role="document"
          >
            <div className="modal-content" id="invoicemodal">
              <div className="modal-header">
                <h4 className="modal-title fs-6">Download your invoice</h4>
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
                <div className="invoiceblock-wrap p-3">
                  {/* Header */}
                  <div className="invoice-header d-flex align-items-center justify-content-between mb-4">
                    <div className="inv-fliop01 d-flex align-items-center justify-content-start">
                      <div className="inv-fliop01">
                        <div className="square--60 circle bg-light-primary text-primary">
                          <i className="fa-solid fa-file-invoice fs-2" />
                        </div>
                      </div>
                      <div className="inv-fliop01 ps-3">
                        <span className="text-uppercase d-block fw-semibold text-md text-dark lh-2 mb-0">
                          Invoice #3256425
                        </span>
                        <span className="text-sm text-muted lh-2">
                          <i className="fa-regular fa-calendar me-1" />
                          Issued Date 12 Jul 2023
                        </span>
                      </div>
                    </div>
                    <div className="inv-fliop02">
                      <span className="label text-success bg-light-success">
                        Paid
                      </span>
                    </div>
                  </div>
                  {/* Invoice Body */}
                  <div className="invoice-body">
                    {/* Invoice Top Body */}
                    <div className="invoice-bodytop">
                      <div className="row align-items-start justify-content-between">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="invoice-desc mb-2">
                            <h6>From</h6>
                            <p className="text-md lh-2 mb-0">
                              #782 Baghambari, Poudery Colony
                              <br />
                              Shivpuras Town, Canada
                              <br />
                              QBH230542 USA
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-6">
                          <div className="invoice-desc mb-2">
                            <h6>To</h6>
                            <p className="text-md lh-2 mb-0">
                              Dhananjay Verma/ Brijendra Mani
                              <br />
                              220 K.V Jail Road Hydel Colony
                              <br />
                              271001 Gonda, UP
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Invoice Mid Body */}
                    <div className="invoice-bodymid py-2">
                      <ul className="gray rounded-3 p-3 m-0">
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                          <span className="fw-medium text-sm text-muted-2 mb-0">
                            Account No.:
                          </span>
                          <span className="fw-semibold text-muted-2 text-md">
                            ************4562
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                          <span className="fw-medium text-sm text-muted-2 mb-0">
                            Reference ID:
                          </span>
                          <span className="fw-semibold text-muted-2 text-md">
                            #2326524
                          </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 py-1">
                          <span className="fw-medium text-sm text-muted-2 mb-0">
                            Pay by:
                          </span>
                          <span className="fw-semibold text-muted-2 text-md">
                            25 Aug 2023
                          </span>
                        </li>
                      </ul>
                    </div>
                    {/* Invoice bott Body */}
                    <div className="invoice-bodybott py-2 mb-2">
                      <div className="table-responsive border rounded-2">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Item</th>
                              <th scope="col">Price</th>
                              <th scope="col">Qut.</th>
                              <th scope="col">Total Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">king Bed in Royal Resort</th>
                              <td>$514</td>
                              <td>03</td>
                              <td>$514</td>
                            </tr>
                            <tr>
                              <th scope="row">Breakfast for 3</th>
                              <td>$214</td>
                              <td>03</td>
                              <td>$214</td>
                            </tr>
                            <tr>
                              <th scope="row">Tax &amp; VAT</th>
                              <td>$78</td>
                              <td>-</td>
                              <td>$772.40</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="invoice-bodyaction">
                      <div className="d-flex text-end justify-content-end align-items-center">
                        <a
                          href="#"
                          className="btn btn-sm btn-light-success fw-medium me-2"
                        >
                          Download Invoice
                        </a>
                        <a
                          href="#"
                          className="btn btn-sm btn-light-primary fw-medium me-2"
                        >
                          Print Invoice
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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
    </>
  );
}
