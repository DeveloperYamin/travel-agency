/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      <div className="clearfix" />
      <div id="main-wrapper">
        <div
          className="image-cover hero-header bg-white"
          style={{ background: "url(assets/img/banner.jpg)no-repeat" }}
          data-overlay={5}
        >
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12">
                <div className="position-relative text-center mb-5">
                  <h1>
                    Starts Your Trip with{" "}
                    <span className="position-relative z-4">
                      GeoTrip
                      <span className="position-absolute top-50 start-50 translate-middle d-none d-md-block mt-4">
                        <svg width="185px" height="23px" viewBox="0 0 445.5 23">
                          <path
                            className="fill-white opacity-7"
                            d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </h1>
                  <p className="fs-5 fw-light">
                    Take a little break from the work strss of everyday.
                    Discover plan trip and explore beautiful destinations.
                  </p>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="search-wrap bg-white rounded-3 p-3">
                  <div className="search-upper">
                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                      <div className="flx-start mb-sm-0 mb-2">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="trip"
                            id="return"
                            defaultValue="option1"
                            defaultChecked
                          />
                          <label className="form-check-label" htmlFor="return">
                            Return
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="trip"
                            id="oneway"
                            defaultValue="option2"
                          />
                          <label className="form-check-label" htmlFor="oneway">
                            One Way
                          </label>
                        </div>
                      </div>
                      <div className="flx-end d-flex align-items-center flex-wrap">
                        <div className="px-sm-2 pb-3 pt-0 ps-0 mob-full">
                          <div className="booking-form__input guests-input">
                            <i className="fa-solid fa-user-clock text-muted me-2" />
                            <button name="guests-btn" id="guests-input-btn">
                              1 Guest
                            </button>
                            <div
                              className="guests-input__options"
                              id="guests-input-options"
                            >
                              <div>
                                <span
                                  className="guests-input__ctrl minus"
                                  id="adults-subs-btn"
                                >
                                  <i className="fa-solid fa-minus" />
                                </span>
                                <span className="guests-input__value">
                                  <span id="guests-count-adults">1</span>Adults
                                </span>
                                <span
                                  className="guests-input__ctrl plus"
                                  id="adults-add-btn"
                                >
                                  <i className="fa-solid fa-plus" />
                                </span>
                              </div>
                              <div>
                                <span
                                  className="guests-input__ctrl minus"
                                  id="children-subs-btn"
                                >
                                  <i className="fa-solid fa-minus" />
                                </span>
                                <span className="guests-input__value">
                                  <span id="guests-count-children">0</span>
                                  Children
                                </span>
                                <span
                                  className="guests-input__ctrl plus"
                                  id="children-add-btn"
                                >
                                  <i className="fa-solid fa-plus" />
                                </span>
                              </div>
                              <div>
                                <span
                                  className="guests-input__ctrl minus"
                                  id="room-subs-btn"
                                >
                                  <i className="fa-solid fa-minus" />
                                </span>
                                <span className="guests-input__value">
                                  <span id="guests-count-room">0</span>Rooms
                                </span>
                                <span
                                  className="guests-input__ctrl plus"
                                  id="room-add-btn"
                                >
                                  <i className="fa-solid fa-plus" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ps-1 pb-3 pt-0 mob-full">
                          <div className="dropdowns">
                            <div className="selections">
                              <i className="fa-solid fa-basket-shopping text-muted me-2" />
                              <span className="selected">Economy</span>
                              <div className="caret" />
                            </div>
                            <ul className="menu">
                              <li className="active">Economy</li>
                              <li>Premium Economy</li>
                              <li>Premium Economy</li>
                              <li>Business/First</li>
                              <li>Business</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row gx-lg-2 g-3">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                      <div className="row gy-3 gx-lg-2 gx-3">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 position-relative">
                          <div className="form-group hdd-arrow mb-0">
                            <select className="goingto form-control fw-bold">
                              <option value="">Select</option>
                              <option value="ny">New York</option>
                              <option value="sd">San Diego</option>
                              <option value="sj">San Jose</option>
                              <option value="ph">Philadelphia</option>
                              <option value="nl">Nashville</option>
                              <option value="sf">San Francisco</option>
                              <option value="hu">Houston</option>
                              <option value="sa">San Antonio</option>
                            </select>
                          </div>
                          <div className="btn-flip-icon mt-md-0">
                            <button className="p-0 m-0 text-primary">
                              <i className="fa-solid fa-right-left" />
                            </button>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                          <div className="form-groupp hdd-arrow mb-0">
                            <select className="goingto form-control fw-bold">
                              <option value="">Select</option>
                              <option value="lv">Las Vegas</option>
                              <option value="la">Los Angeles</option>
                              <option value="kc">Kansas City</option>
                              <option value="no">New Orleans</option>
                              <option value="kc">Jacksonville</option>
                              <option value="lb">Long Beach</option>
                              <option value="cl">Columbus</option>
                              <option value="cn">Canada</option>
                            </select>
                          </div>
                          <div>Yamin</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12">
                      <div className="row gy-3 gx-lg-2 gx-3">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                          <div className="form-group mb-0">
                            <input
                              className="form-control fw-bold choosedate"
                              type="text"
                              placeholder="Departure.."
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                          <div className="form-group mb-0">
                            <input
                              className="form-control fw-bold choosedate"
                              type="text"
                              placeholder="Return.."
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-12">
                      <div className="form-group mb-0">
                        <button
                          type="button"
                          className="btn btn-primary full-width fw-medium"
                        >
                          <i className="fa-solid fa-magnifying-glass me-2" />
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="border-bottom">
          <div className="container">
            <div className="row align-items-center justify-content-between g-4">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
                <div className="featuresBox-wrap">
                  <div className="featuresBox-icons mb-3">
                    <i className="fa-solid fa-sack-dollar fs-1 text-primary" />
                  </div>
                  <div className="featuresBox-captions">
                    <h4 className="fw-bold fs-5 lh-base mb-0">Easy Booking</h4>
                    <p className="m-0">
                      Cicero famously orated against his political opponent
                      Lucius Sergius Catilina. Occasionally the first Oration
                      against Catiline.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
                <div className="featuresBox-wrap">
                  <div className="featuresBox-icons mb-3">
                    <i className="fa-solid fa-umbrella-beach fs-1 text-primary" />
                  </div>
                  <div className="featuresBox-captions">
                    <h4 className="fw-bold fs-5 lh-base mb-0">
                      Best Destinations
                    </h4>
                    <p className="m-0">
                      Cicero famously orated against his political opponent
                      Lucius Sergius Catilina. Occasionally the first Oration
                      against Catiline.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
                <div className="featuresBox-wrap">
                  <div className="featuresBox-icons mb-3">
                    <i className="fa-solid fa-person-walking-luggage fs-1 text-primary" />
                  </div>
                  <div className="featuresBox-captions">
                    <h4 className="fw-bold fs-5 lh-base mb-0">Travel Guides</h4>
                    <p className="m-0">
                      Cicero famously orated against his political opponent
                      Lucius Sergius Catilina. Occasionally the first Oration
                      against Catiline.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-5">
                <div className="featuresBox-wrap">
                  <div className="featuresBox-icons mb-3">
                    <i className="fa-solid fa-headset fs-1 text-primary" />
                  </div>
                  <div className="featuresBox-captions">
                    <h4 className="fw-bold fs-5 lh-base mb-0">
                      Friendly Support
                    </h4>
                    <p className="m-0">
                      Cicero famously orated against his political opponent
                      Lucius Sergius Catilina. Occasionally the first Oration
                      against Catiline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Features End ================================== */}
        {/* ============================ Best Locations Design Start ================================== */}
        <section>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                <div className="secHeading-wrap text-center mb-5">
                  <h2>Explore Popular Destination</h2>
                  <p>
                    Cicero famously orated against his political opponent Lucius
                    Sergius Catilina.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center gy-4 gx-3">
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <a href="#">
                      <img
                        src="assets/img/city/c-8.png"
                        className="img-fluid rounded"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>New York</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">
                          10 Destinations
                        </span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">5 Hotels</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <a href="#">
                      <img
                        src="assets/img/city/c-7.png"
                        className="img-fluid rounded"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>Las Vegas</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">
                          06 Destinations
                        </span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">14 Hotels</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <a href="#">
                      <img
                        src="assets/img/city/c-1.png"
                        className="img-fluid rounded"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>San Antonio</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">
                          09 Destinations
                        </span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">16 Hotels</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <a href="#">
                      <img
                        src="assets/img/city/c-2.png"
                        className="img-fluid rounded"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>Houston</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">
                          07 Destinations
                        </span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">18 Hotels</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <a href="#">
                      <img
                        src="assets/img/city/c-3.png"
                        className="img-fluid rounded"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>San Francisco</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">
                          4 Destinations
                        </span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">12 Hotels</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <a href="#">
                      <img
                        src="assets/img/city/c-4.png"
                        className="img-fluid rounded"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>Nashville</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">
                          16 Destinations
                        </span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">7 Hotels</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <a href="#">
                      <img
                        src="assets/img/city/c-5.png"
                        className="img-fluid rounded"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>Philadelphia</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">
                          14 Destinations
                        </span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">10 Hotels</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div className="destination-blocks bg-white p-2 rounded border br-dashed h-100">
                  <div className="destination-blocks-pics p-1">
                    <a href="#">
                      <img
                        src="assets/img/city/c-6.png"
                        className="img-fluid rounded"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="destination-blocks-captions">
                    <div className="touritem-flexxer text-center p-3">
                      <h4 className="city fs-5 m-0 fw-bold">
                        <span>San Diego</span>
                      </h4>
                      <p className="detail ellipsis-container m-0">
                        <span className="ellipsis-item__normal">
                          12 Destinations
                        </span>
                        <span className="separate ellipsis-item__normal" />
                        <span className="ellipsis-item">32 Hotels</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Best Locations Design Start ================================== */}
        {/* ============================ Popular Routes Design Start ================================== */}
        <section className="gray-simple">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                <div className="secHeading-wrap text-center mb-5">
                  <h2>Explore Popular Routes</h2>
                  <p>
                    Cicero famously orated against his political opponent Lucius
                    Sergius Catilina.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center gy-4 gx-3">
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div className="pop-touritem">
                  <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
                    <div className="flight-thumb-wrapper">
                      <div className=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                        <div className="label bg-success text-light d-inline-flex align-items-center justify-content-center">
                          <span className="svg-icon text-light svg-icon-2hx me-1">
                            <svg
                              width={14}
                              height={14}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                                fill="currentColor"
                              />
                              <path
                                d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          Featured
                        </div>
                      </div>
                      <div className="popFlights-item-overHidden">
                        <img
                          src="assets/img/destination/tr-1.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <h4 className="city fs-6 m-0 fw-bold">
                          <span>New York</span>
                          <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z"
                                fill="currentColor"
                              />
                              <path
                                opacity="0.3"
                                d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          <span>Los Angeles</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">
                            Round-trip
                          </span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3 days</span>
                        </p>
                      </div>
                      <div className="flight-foots">
                        <h5 className="fs-5 low-price m-0">
                          <span className="tag-span">From</span>{" "}
                          <span className="price">US$492</span>
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div className="pop-touritem">
                  <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
                    <div className="flight-thumb-wrapper">
                      <div className="popFlights-item-overHidden">
                        <img
                          src="assets/img/destination/tr-2.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <h4 className="city fs-6 m-0 fw-bold">
                          <span>San Diego</span>
                          <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z"
                                fill="currentColor"
                              />
                              <path
                                opacity="0.3"
                                d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          <span>San Jose</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">
                            Round-trip
                          </span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3 days</span>
                        </p>
                      </div>
                      <div className="flight-foots">
                        <h5 className="fs-5 low-price m-0">
                          <span className="tag-span">From</span>{" "}
                          <span className="price">US$492</span>
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div className="pop-touritem">
                  <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
                    <div className="flight-thumb-wrapper">
                      <div className=" position-absolute top-0 left-0 ms-3 mt-3 z-1">
                        <div className="label bg-success text-light d-inline-flex align-items-center justify-content-center">
                          <span className="svg-icon text-light svg-icon-2hx me-1">
                            <svg
                              width={14}
                              height={14}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                                fill="currentColor"
                              />
                              <path
                                d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          Featured
                        </div>
                      </div>
                      <div className="popFlights-item-overHidden">
                        <img
                          src="assets/img/destination/tr-3.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <h4 className="city fs-6 m-0 fw-bold">
                          <span>Dallas</span>
                          <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z"
                                fill="currentColor"
                              />
                              <path
                                opacity="0.3"
                                d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          <span>Philadelphia</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">
                            Round-trip
                          </span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3 days</span>
                        </p>
                      </div>
                      <div className="flight-foots">
                        <h5 className="fs-5 low-price m-0">
                          <span className="tag-span">From</span>{" "}
                          <span className="price">US$492</span>
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                <div className="pop-touritem">
                  <a href="#" className="card rounded-3 shadow-wrap h-100 m-0">
                    <div className="flight-thumb-wrapper">
                      <div className="popFlights-item-overHidden">
                        <img
                          src="assets/img/destination/tr-4.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="touritem-middle position-relative p-3">
                      <div className="touritem-flexxer">
                        <h4 className="city fs-6 m-0 fw-bold">
                          <span>Denver</span>
                          <span className="svg-icon svg-icon-muted svg-icon-2hx px-1">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.4 7H4C3.4 7 3 7.4 3 8C3 8.6 3.4 9 4 9H17.4V7ZM6.60001 15H20C20.6 15 21 15.4 21 16C21 16.6 20.6 17 20 17H6.60001V15Z"
                                fill="currentColor"
                              />
                              <path
                                opacity="0.3"
                                d="M17.4 3V13L21.7 8.70001C22.1 8.30001 22.1 7.69999 21.7 7.29999L17.4 3ZM6.6 11V21L2.3 16.7C1.9 16.3 1.9 15.7 2.3 15.3L6.6 11Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                          <span>Nashville</span>
                        </h4>
                        <p className="detail ellipsis-container">
                          <span className="ellipsis-item__normal">
                            Round-trip
                          </span>
                          <span className="separate ellipsis-item__normal" />
                          <span className="ellipsis-item">3 days</span>
                        </p>
                      </div>
                      <div className="flight-foots">
                        <h5 className="fs-5 low-price m-0">
                          <span className="tag-span">From</span>{" "}
                          <span className="price">US$492</span>
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="text-center position-relative mt-5">
                  <button
                    type="button"
                    className="btn btn-light-primary fw-medium px-5"
                  >
                    Explore More
                    <i className="fa-solid fa-arrow-trend-up ms-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Popular Routes Design Start ================================== */}
        {/* ================================ Article Section Start ======================================= */}
        <section>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-8 col-lg-9 col-md-11 col-sm-12">
                <div className="secHeading-wrap text-center mb-5">
                  <h2>Travel Guide</h2>
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
        {/* ================================ Article Section Start ======================================= */}
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
        {/* Video Modal */}
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
        {/* End Video Modal */}
        <a id="back2Top" className="top-scroll" title="Back to top" href="#">
          <i className="fa-solid fa-sort-up" />
        </a>
      </div>
    </>
  );
}
