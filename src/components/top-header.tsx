/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const navMenu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Travel Guide",
    link: "/travel-guide",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  }
];

export default function TopHeader() {
  return (
    <header className="header header-light">
      <div className="container">
        <nav id="navigation" className="navigation navigation-landscape">
          <div className="nav-header">
            <a className="nav-brand" href="#">
              <img src="assets/img/logo.png" className="logo" alt="" />
            </a>
            <div className="nav-toggle" />
            <div className="mobile_nav">
              <ul>
                <li className="currencyDropdown me-2">
                  <a
                    href="#"
                    className="nav-link"
                    data-bs-toggle="modal"
                    data-bs-target="#currencyModal"
                  >
                    <span className="fw-medium">INR</span>
                  </a>
                </li>
                <li className="languageDropdown me-2">
                  <a
                    href="#"
                    className="nav-link"
                    data-bs-toggle="modal"
                    data-bs-target="#countryModal"
                  >
                    <img
                      src="assets/img/flag/flag.png"
                      className="img-fluid"
                      width={17}
                      alt="Country"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-light-primary text-primary rounded"
                    data-bs-toggle="modal"
                    data-bs-target="#login"
                  >
                    <i className="fa-regular fa-circle-user fs-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="nav-menus-wrapper"
            style={{ transitionProperty: "none" }}
          >
            <ul className="nav-menu">
              {navMenu.map((menu) => (
                <li key={menu.link}>
                  <Link href={`${menu.link}`}>{menu.name}</Link>
                </li>
              ))}
            </ul>
            <ul className="nav-menu nav-menu-social align-to-right">
              <li className="currencyDropdown me-2">
                <a
                  href="#"
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#currencyModal"
                >
                  <span className="fw-medium">INR</span>
                </a>
              </li>
              <li className="languageDropdown me-2">
                <a
                  href="#"
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#countryModal"
                >
                  <img
                    src="assets/img/flag/flag.png"
                    className="img-fluid"
                    width={17}
                    alt="Country"
                  />
                </a>
              </li>
              <li className="list-buttons">
                <a
                  href="#"
                  className="bg-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#login"
                >
                  <i className="fa-regular fa-circle-user fs-6 me-2" />
                  Sign In / Register
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
