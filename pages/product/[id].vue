<template>
    <div v-if="!form.busy">
    <div v-if="product">
        {{ useCartStore().cart }}

  <!---------Product cart Section Start ---------->
  <section class="product__cart mb_100">
        <div class="girl__jackets__btns d-none d-md-block">
          <div class="container">
            <div class="girl__jackets__btn__all">
              <ul class="girl__jackets__btn">
                <li>
                  <a href="#">girl</a>
                </li>
                <li>
                  <img src="assets/img/all-icon/chevron-right.svg" alt="" />
                </li>
                <li>
                  <a href="#">GIRL JACKETS</a>
                </li>
                <li>
                  <img src="assets/img/all-icon/chevron-right.svg" alt="" />
                </li>
                <li>
                  <a href="#">{{ product.title }} </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row g-3">
            <div class="col-lg-5">
              <div class="product__card__gallery">
                <div class="product-imgs">
                  <div class="img-display">
                    <div class="img-showcase">
                      <img v-for="media,index in product.main_variant.media" :src="media.original_url" alt="" />
                    </div>
                  </div>
                  <div class="img-select">
                    <div class="img-item" v-for="media,index in product.main_variant.media">
                      <a href="#" :data-id="index+1">
                        <img :src="media.original_url" alt="" />
                      </a>
                    </div>
                 
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="product__cart__contents">
                <div class="product__cart__content">
                  <a
                    href="#"
                    class="prduct-share d-none d-md-block"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38"
                      height="38"
                      viewBox="0 0 38 38"
                      fill="none"
                    >
                      <path
                        d="M32.2884 12.7168L29.5224 10.3148C27.5296 8.5841 26.7484 7.65308 25.6692 7.98221C24.3235 8.39261 24.7665 10.9821 24.7665 11.8564C22.6743 11.8564 20.4991 11.6955 18.4368 12.0307C11.6288 13.1376 9.5 17.9813 9.5 23.1998C11.4269 22.0186 13.3518 20.7015 15.6677 20.1541C18.5586 19.4707 21.7871 19.7967 24.7665 19.7967C24.7665 20.6711 24.3235 23.2606 25.6692 23.671C26.892 24.0439 27.5296 23.069 29.5224 21.3384L32.2884 18.9364C33.985 17.4631 34.8333 16.7263 34.8333 15.8266C34.8333 14.9269 33.985 14.1902 32.2884 12.7168Z"
                        stroke="#141B34"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.7314 4.75C10.6193 4.76099 7.41875 4.91074 5.37336 6.95199C3.16602 9.15486 3.16602 12.7003 3.16602 19.7912C3.16602 26.8821 3.16602 30.4275 5.37334 32.6304C7.58068 34.8333 11.1333 34.8333 18.2386 34.8333C25.3439 34.8333 28.8966 34.8333 31.1039 32.6304C32.6407 31.0967 33.1075 28.9121 33.2493 25.3333"
                        stroke="#141B34"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                  <span class="hugo-boss">HUGO BOSS</span>
                  <h4>Girly jacket PinkY STYLE IN CASHEMIRE</h4>
                  <span>sar {{ product.main_variant.price }}</span>
                  <div class="product__cart__select d-flex d-md-none">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Choose your size</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <button class="size-guide1">
                      SIZE <br />
                      GUIDE
                    </button>
                  </div>
                  <ul>
                    <li>
                      <span>Colors : <span class="seledcted-criteria">{{ form.color }} </span> </span>
                      <div class="product__color">
                        <span @click="select_criteria('color',color)" v-for="color,index in product.criteria.color" :style="'background:'+color"> </span>
                      </div>
                    </li>
                    <li>
                      <span>Sizes : <span class="seledcted-criteria">{{ form.size }} </span></span>
                      <div class="product__size">
                        <span @click="select_criteria('size',size)" v-for="size,index in product.criteria.size" > {{ size }}</span>
                      </div>
                    </li>
                    <li>
                      <span>Quantity :</span>
                      <div class="qty__counter">
                        <button @click="minus()" class="minusBtn1">-</button>
                        <span class="spn1"> {{ form.quantity }} </span>
                        <button @click="plus()" class="plusBtn1">+</button>
                      </div>
                    </li>
                  </ul>
                  <div class="product__cart__select d-none d-md-flex">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Choose your size</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <button class="size-guide">SIZE GUIDE</button>
                  </div>
                  <form action="">
                    <button @click="add_to_cart()" type="button">add to cart</button>
                    <button @click="clear_cart()" type="button">clear cart</button>
                  </form>
                  <div class="compare">
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="none"
                      >
                        <path
                          d="M28.3833 5.8248C24.4725 3.42596 21.0592 4.39266 19.0088 5.93252C18.1679 6.5639 17.7477 6.87959 17.5003 6.87959C17.253 6.87959 16.8327 6.5639 15.9918 5.93252C13.9414 4.39266 10.5282 3.42596 6.61742 5.8248C1.48501 8.97304 0.323667 19.3592 12.1621 28.1216C14.417 29.7905 15.5444 30.625 17.5003 30.625C19.4562 30.625 20.5837 29.7905 22.8386 28.1216C34.677 19.3592 33.5156 8.97304 28.3833 5.8248Z"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                      <span>wish list</span>
                    </a>
                    <a href="#" class="d-none d-md-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="none"
                      >
                        <path
                          d="M17.4854 13.1045V4.83502"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.4854 30.1445V21.875"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M30.1442 17.5001L21.875 17.4244"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.1256 17.5001L4.85645 17.4244"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M21.8749 8.74997C21.8749 8.74997 18.6527 4.37501 17.4999 4.375C16.347 4.37499 13.125 8.75 13.125 8.75"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.74997 21.875C8.74997 21.875 4.37501 18.6528 4.375 17.5C4.37499 16.347 8.75 13.125 8.75 13.125"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M26.25 13.125C26.25 13.125 30.625 16.3472 30.625 17.5C30.625 18.653 26.25 21.875 26.25 21.875"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.125 26.25C13.125 26.25 16.3471 30.625 17.4999 30.625C18.6529 30.625 21.8749 26.25 21.8749 26.25"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <span>Size Guide</span></a
                    >
                    <a href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="none"
                      >
                        <path
                          d="M27.708 24.7916V16.0416C27.708 11.9169 27.708 9.85446 26.4266 8.57306C25.1451 7.29165 23.0828 7.29165 18.958 7.29165H14.583M14.583 7.29165C14.583 6.27048 17.4914 4.36263 18.2288 3.64581M14.583 7.29165C14.583 8.31282 17.4914 10.2207 18.2288 10.9375"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.29199 10.9375V19.6875C7.29199 23.8123 7.29199 25.8746 8.5734 27.1561C9.85481 28.4375 11.9172 28.4375 16.042 28.4375H20.417M20.417 28.4375C20.417 29.4586 17.5086 31.3666 16.7712 32.0833M20.417 28.4375C20.417 27.4164 17.5086 25.5084 16.7712 24.7917"
                          stroke="#141B34"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M27.7087 30.625C29.3195 30.625 30.6253 29.3192 30.6253 27.7084C30.6253 26.0975 29.3195 24.7917 27.7087 24.7917C26.0978 24.7917 24.792 26.0975 24.792 27.7084C24.792 29.3192 26.0978 30.625 27.7087 30.625Z"
                          stroke="#141B34"
                          stroke-width="1.5"
                        />
                        <path
                          d="M7.29167 10.2083C8.9025 10.2083 10.2083 8.9025 10.2083 7.29167C10.2083 5.68084 8.9025 4.375 7.29167 4.375C5.68084 4.375 4.375 5.68084 4.375 7.29167C4.375 8.9025 5.68084 10.2083 7.29167 10.2083Z"
                          stroke="#141B34"
                          stroke-width="1.5"
                        />
                      </svg>
                      <span>compare</span></a
                    >
                  </div>
                  <div
                    class="accordion accordion-flush product__cart__accordion"
                    id="accordionFlushExample"
                  >
                    <div class="accordion-item">
                      <h2
                        class="accordion-header accordion-header1"
                        id="flush-headingOne"
                      >
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          Product details
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body accordion-body1">
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Est voluptatem commodi ut magni at, repellat
                            porro temporibus ad praesentium sint quasi
                            necessitatibus, architecto inventore in tempore,
                            eligendi placeat consequuntur similique!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2
                        class="accordion-header accordion-header1"
                        id="flush-headingTwo"
                      >
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          Delivery & return
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body accordion-body1">
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Est voluptatem commodi ut magni at, repellat
                            porro temporibus ad praesentium sint quasi
                            necessitatibus, architecto inventore in tempore,
                            eligendi placeat consequuntur similique!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2
                        class="accordion-header accordion-header1"
                        id="flush-headingThree"
                      >
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          refund policy
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body accordion-body1">
                          <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Est voluptatem commodi ut magni at, repellat
                            porro temporibus ad praesentium sint quasi
                            necessitatibus, architecto inventore in tempore,
                            eligendi placeat consequuntur similique!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!---------Product cart Section End ---------->

      <!--------- exlusive-product mobile items buttons START ---------->
      <section class="exlusive__products d-block d-md-none mb_30">
        <div class="container">
          <div class="mobile__product__title">
            <h4>New In</h4>
            <a href="girls-products.html">See all</a>
          </div>
          <div class="swiper exclusive__main__slide1">
            <div class="exclusive__main__slide2 swiper-wrapper">
              <div class="swiper-slide exluslive__product__slide__card">
                <a href="#" class="exclusive-btn"></a>
                <a href="#"
                  ><img src="assets/img/all-icon/favourite.svg" alt=""
                /></a>
                <div class="exluslive__product__slide__img">
                  <img
                    src="assets/img/exclusive-slide-product-img-1.png"
                    alt=""
                  />
                </div>
                <div class="exluslive__product__slide__content">
                  <h6>HUGO BOSS</h6>
                  <p>Girly jacket PinkY STYLE IN CASHEMIRE</p>
                  <span>SAR 10.000</span>
                </div>
              </div>
              <div class="swiper-slide exluslive__product__slide__card">
                <a href="#" class="exclusive-btn"></a>
                <a href="#"
                  ><img src="assets/img/all-icon/favourite.svg" alt=""
                /></a>
                <div class="exluslive__product__slide__img">
                  <img
                    src="assets/img/exclusive-slide-product-img-1.png"
                    alt=""
                  />
                </div>
                <div class="exluslive__product__slide__content">
                  <h6>HUGO BOSS</h6>
                  <p>Girly jacket PinkY STYLE IN CASHEMIRE</p>
                  <span>SAR 10.000</span>
                </div>
              </div>
              <div class="swiper-slide exluslive__product__slide__card">
                <a href="#" class="exclusive-btn"></a>
                <a href="#"
                  ><img src="assets/img/all-icon/favourite.svg" alt=""
                /></a>
                <div class="exluslive__product__slide__img">
                  <img
                    src="assets/img/exclusive-slide-product-img-1.png"
                    alt=""
                  />
                </div>
                <div class="exluslive__product__slide__content">
                  <h6>HUGO BOSS</h6>
                  <p>Girly jacket PinkY STYLE IN CASHEMIRE</p>
                  <span>SAR 10.000</span>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>
      <!--------- exlusive-product mobile items buttons END ---------->

      <!---------exclusive Section START ---------->
      <section class="exclusive__collection__area mb_50">
        <div class="container">
          <div class="title__area">
            <h2>Exclusive collection</h2>
            <a href="girls-products.html">Show All</a>
          </div>
          <div class="exclusive__collection__wrap">
            <div class="row g-4">
              <div class="col-lg-5">
                <div class="exclusive__banner__card">
                  <img src="assets/img/exclusive-collection-img-1.png" alt="" />
                  <div class="new__collection">
                    <div class="new__collection__title">
                      <span>New Season</span>
                      <h4>New Baby Collection</h4>
                    </div>
                    <a href="#">Shop Collection</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="swiper exclusive__main__slide">
                  <div class="exclusive__slide swiper-wrapper">
                    <div class="swiper-slide best__seller__card">
                      <a href="#" class="exclusive-btn"></a>
                      <div class="reaction">
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M4.34085 17.3781L3.17786 10.4356C2.98869 9.3063 2.89411 8.74167 3.18537 8.37083C3.47662 8 4.01468 8 5.09079 8H18.9092C19.9853 8 20.5234 8 20.8146 8.37083C21.1059 8.74167 21.0113 9.3063 20.8221 10.4356L19.6591 17.3781C19.249 19.8264 19.044 21.0505 18.2319 21.7752C17.4199 22.5 16.2534 22.5 13.9204 22.5H10.0796C7.74664 22.5 6.58014 22.5 5.76809 21.7752C4.95603 21.0505 4.75097 19.8264 4.34085 17.3781Z"
                              stroke="#141B34"
                              stroke-width="1.5"
                            />
                            <path
                              d="M7 8V7.5C7 4.73858 9.23858 2.5 12 2.5C14.7614 2.5 17 4.73858 17 7.5V8"
                              stroke="#141B34"
                              stroke-width="1.5"
                            />
                            <path
                              d="M4.5 18H19.5"
                              stroke="#141B34"
                              stroke-width="1.5"
                            />
                          </svg>
                        </button>
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M18.8303 3.99415C16.3129 2.34923 14.1158 3.01211 12.7959 4.06801C12.2546 4.50096 11.9841 4.71743 11.8249 4.71743C11.6657 4.71743 11.3951 4.50096 10.8538 4.06801C9.53399 3.01211 7.33685 2.34923 4.81949 3.99415C1.51573 6.15294 0.768163 13.2749 8.38865 19.2834C9.84011 20.4278 10.5658 21 11.8249 21C13.0839 21 13.8096 20.4278 15.2611 19.2834C22.8816 13.2749 22.134 6.15294 18.8303 3.99415Z"
                              stroke="#141B34"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <div class="best__seller__card__img">
                        <img
                          src="assets/img/exclusive-collection-img-2.png"
                          alt=""
                        />
                      </div>
                      <div class="best__seller__card__content">
                        <h5>Girly jacket grey</h5>
                        <p>Boys Blue Alpine Mountain Ski Jacket</p>
                        <span>sar 10.000</span>
                      </div>
                    </div>
                    <div class="swiper-slide best__seller__card">
                      <a href="#" class="exclusive-btn"></a>
                      <div class="reaction">
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M4.34085 17.3781L3.17786 10.4356C2.98869 9.3063 2.89411 8.74167 3.18537 8.37083C3.47662 8 4.01468 8 5.09079 8H18.9092C19.9853 8 20.5234 8 20.8146 8.37083C21.1059 8.74167 21.0113 9.3063 20.8221 10.4356L19.6591 17.3781C19.249 19.8264 19.044 21.0505 18.2319 21.7752C17.4199 22.5 16.2534 22.5 13.9204 22.5H10.0796C7.74664 22.5 6.58014 22.5 5.76809 21.7752C4.95603 21.0505 4.75097 19.8264 4.34085 17.3781Z"
                              stroke="#141B34"
                              stroke-width="1.5"
                            />
                            <path
                              d="M7 8V7.5C7 4.73858 9.23858 2.5 12 2.5C14.7614 2.5 17 4.73858 17 7.5V8"
                              stroke="#141B34"
                              stroke-width="1.5"
                            />
                            <path
                              d="M4.5 18H19.5"
                              stroke="#141B34"
                              stroke-width="1.5"
                            />
                          </svg>
                        </button>
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M18.8303 3.99415C16.3129 2.34923 14.1158 3.01211 12.7959 4.06801C12.2546 4.50096 11.9841 4.71743 11.8249 4.71743C11.6657 4.71743 11.3951 4.50096 10.8538 4.06801C9.53399 3.01211 7.33685 2.34923 4.81949 3.99415C1.51573 6.15294 0.768163 13.2749 8.38865 19.2834C9.84011 20.4278 10.5658 21 11.8249 21C13.0839 21 13.8096 20.4278 15.2611 19.2834C22.8816 13.2749 22.134 6.15294 18.8303 3.99415Z"
                              stroke="#141B34"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <div class="best__seller__card__img">
                        <img
                          src="assets/img/exclusive-collection-img-3.png"
                          alt=""
                        />
                      </div>
                      <div class="best__seller__card__content">
                        <h5>Girly jacket grey</h5>
                        <p>Boys Blue Alpine Mountain Ski Jacket</p>
                        <span>sar 10.000</span>
                      </div>
                    </div>
                    <div class="swiper-slide best__seller__card">
                      <a href="#" class="exclusive-btn"></a>
                      <div class="reaction">
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M4.34085 17.3781L3.17786 10.4356C2.98869 9.3063 2.89411 8.74167 3.18537 8.37083C3.47662 8 4.01468 8 5.09079 8H18.9092C19.9853 8 20.5234 8 20.8146 8.37083C21.1059 8.74167 21.0113 9.3063 20.8221 10.4356L19.6591 17.3781C19.249 19.8264 19.044 21.0505 18.2319 21.7752C17.4199 22.5 16.2534 22.5 13.9204 22.5H10.0796C7.74664 22.5 6.58014 22.5 5.76809 21.7752C4.95603 21.0505 4.75097 19.8264 4.34085 17.3781Z"
                              stroke="#141B34"
                              stroke-width="1.5"
                            />
                            <path
                              d="M7 8V7.5C7 4.73858 9.23858 2.5 12 2.5C14.7614 2.5 17 4.73858 17 7.5V8"
                              stroke="#141B34"
                              stroke-width="1.5"
                            />
                            <path
                              d="M4.5 18H19.5"
                              stroke="#141B34"
                              stroke-width="1.5"
                            />
                          </svg>
                        </button>
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M18.8303 3.99415C16.3129 2.34923 14.1158 3.01211 12.7959 4.06801C12.2546 4.50096 11.9841 4.71743 11.8249 4.71743C11.6657 4.71743 11.3951 4.50096 10.8538 4.06801C9.53399 3.01211 7.33685 2.34923 4.81949 3.99415C1.51573 6.15294 0.768163 13.2749 8.38865 19.2834C9.84011 20.4278 10.5658 21 11.8249 21C13.0839 21 13.8096 20.4278 15.2611 19.2834C22.8816 13.2749 22.134 6.15294 18.8303 3.99415Z"
                              stroke="#141B34"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <div class="best__seller__card__img">
                        <img
                          src="assets/img/exclusive-collection-img-4.png"
                          alt=""
                        />
                      </div>
                      <div class="best__seller__card__content">
                        <h5>Girly jacket grey</h5>
                        <p>Boys Blue Alpine Mountain Ski Jacket</p>
                        <span>sar 10.000</span>
                      </div>
                    </div>
                    <div class="swiper-slide best__seller__card">
                      <a href="#" class="exclusive-btn"></a>
                      <div class="reaction">
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M4.34085 17.3781L3.17786 10.4356C2.98869 9.3063 2.89411 8.74167 3.18537 8.37083C3.47662 8 4.01468 8 5.09079 8H18.9092C19.9853 8 20.5234 8 20.8146 8.37083C21.1059 8.74167 21.0113 9.3063 20.8221 10.4356L19.6591 17.3781C19.249 19.8264 19.044 21.0505 18.2319 21.7752C17.4199 22.5 16.2534 22.5 13.9204 22.5H10.0796C7.74664 22.5 6.58014 22.5 5.76809 21.7752C4.95603 21.0505 4.75097 19.8264 4.34085 17.3781Z"
                              stroke="#141B34"
                              stroke-width="1.5"
                            />
                            <path
                              d="M7 8V7.5C7 4.73858 9.23858 2.5 12 2.5C14.7614 2.5 17 4.73858 17 7.5V8"
                              stroke="#141B34"
                              stroke-width="1.5"
                            />
                            <path
                              d="M4.5 18H19.5"
                              stroke="#141B34"
                              stroke-width="1.5"
                            />
                          </svg>
                        </button>
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M18.8303 3.99415C16.3129 2.34923 14.1158 3.01211 12.7959 4.06801C12.2546 4.50096 11.9841 4.71743 11.8249 4.71743C11.6657 4.71743 11.3951 4.50096 10.8538 4.06801C9.53399 3.01211 7.33685 2.34923 4.81949 3.99415C1.51573 6.15294 0.768163 13.2749 8.38865 19.2834C9.84011 20.4278 10.5658 21 11.8249 21C13.0839 21 13.8096 20.4278 15.2611 19.2834C22.8816 13.2749 22.134 6.15294 18.8303 3.99415Z"
                              stroke="#141B34"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <div class="best__seller__card__img">
                        <img
                          src="assets/img/exclusive-collection-img-2.png"
                          alt=""
                        />
                      </div>
                      <div class="best__seller__card__content">
                        <h5>Girly jacket grey</h5>
                        <p>Boys Blue Alpine Mountain Ski Jacket</p>
                        <span>sar 10.000</span>
                      </div>
                    </div>
                    <div class="swiper-slide best__seller__card">
                      <a href="#" class="exclusive-btn"></a>
                      <div class="reaction">
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                          >
                            <path
                              d="M4.34085 17.3781L3.17786 10.4356C2.98869 9.3063 2.89411 8.74167 3.18537 8.37083C3.47662 8 4.01468 8 5.09079 8H18.9092C19.9853 8 20.5234 8 20.8146 8.37083C21.1059 8.74167 21.0113 9.3063 20.8221 10.4356L19.6591 17.3781C19.249 19.8264 19.044 21.0505 18.2319 21.7752C17.4199 22.5 16.2534 22.5 13.9204 22.5H10.0796C7.74664 22.5 6.58014 22.5 5.76809 21.7752C4.95603 21.0505 4.75097 19.8264 4.34085 17.3781Z"
                              stroke="#141B34"
                              stroke-width="1.5"
                            />
                            <path
                              d="M7 8V7.5C7 4.73858 9.23858 2.5 12 2.5C14.7614 2.5 17 4.73858 17 7.5V8"
                              stroke="#141B34"
                              stroke-width="1.5"
                            />
                            <path
                              d="M4.5 18H19.5"
                              stroke="#141B34"
                              stroke-width="1.5"
                            />
                          </svg>
                        </button>
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M18.8303 3.99415C16.3129 2.34923 14.1158 3.01211 12.7959 4.06801C12.2546 4.50096 11.9841 4.71743 11.8249 4.71743C11.6657 4.71743 11.3951 4.50096 10.8538 4.06801C9.53399 3.01211 7.33685 2.34923 4.81949 3.99415C1.51573 6.15294 0.768163 13.2749 8.38865 19.2834C9.84011 20.4278 10.5658 21 11.8249 21C13.0839 21 13.8096 20.4278 15.2611 19.2834C22.8816 13.2749 22.134 6.15294 18.8303 3.99415Z"
                              stroke="#141B34"
                              stroke-width="1.5"
                              stroke-linecap="round"
                            />
                          </svg>
                        </button>
                      </div>
                      <div class="best__seller__card__img">
                        <img
                          src="assets/img/exclusive-collection-img-3.png"
                          alt=""
                        />
                      </div>
                      <div class="best__seller__card__content">
                        <h5>Girly jacket grey</h5>
                        <p>Boys Blue Alpine Mountain Ski Jacket</p>
                        <span>sar 10.000</span>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-button-next">
                    <img src="assets/img/all-icon/angle-arrow.svg" alt="" />
                  </div>
                  <div class="swiper-button-prev">
                    <img src="assets/img/all-icon/angle-arrow.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!---------exclusive Section End ---------->

      <!---------package Section Start ---------->
      <section class="package__area mt_100 mb_150 d-none d-md-block">
        <div class="container">
          <div class="all__brand">
            <div class="package__cards">
              <div class="package__card package__card2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                >
                  <path
                    d="M33.0003 29.1667C33.0003 31.4678 31.1348 33.3333 28.8337 33.3333C26.5325 33.3333 24.667 31.4678 24.667 29.1667C24.667 26.8655 26.5325 25 28.8337 25C31.1348 25 33.0003 26.8655 33.0003 29.1667Z"
                    stroke="black"
                    stroke-width="2"
                  />
                  <path
                    d="M16.3333 29.1667C16.3333 31.4678 14.4678 33.3333 12.1667 33.3333C9.86548 33.3333 8 31.4678 8 29.1667C8 26.8655 9.86548 25 12.1667 25C14.4678 25 16.3333 26.8655 16.3333 29.1667Z"
                    stroke="black"
                    stroke-width="2"
                  />
                  <path
                    d="M24.6663 29.1667H16.333M3.83301 6.66675H20.4997C22.8567 6.66675 24.0352 6.66675 24.7675 7.39898C25.4997 8.13121 25.4997 9.30973 25.4997 11.6667V25.8334M26.333 10.8334H29.3353C30.7182 10.8334 31.4095 10.8334 31.9827 11.1579C32.5557 11.4824 32.9115 12.0752 33.6228 13.2609L36.4538 17.9792C36.8078 18.5692 36.9848 18.8644 37.0757 19.1919C37.1663 19.5194 37.1663 19.8634 37.1663 20.5517V25.0001C37.1663 26.5577 37.1663 27.3366 36.8313 27.9167C36.612 28.2967 36.2963 28.6124 35.9163 28.8317C35.3362 29.1667 34.5573 29.1667 32.9997 29.1667M3.83301 21.6667V25.0001C3.83301 26.5577 3.83301 27.3366 4.16794 27.9167C4.38736 28.2967 4.70296 28.6124 5.08301 28.8317C5.66314 29.1667 6.44197 29.1667 7.99967 29.1667"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.83301 11.6667H13.833M3.83301 16.6667H10.4997"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>24 HOUR DELIVERY IN SAUDI ARABIA</p>
              </div>
              <div class="package__card package__card2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                >
                  <path
                    d="M3.83301 16.6667C3.83301 11.9527 3.83301 9.59568 5.29747 8.13122C6.76194 6.66675 9.11896 6.66675 13.833 6.66675H27.1663C31.8803 6.66675 34.2373 6.66675 35.7018 8.13122C37.1663 9.59568 37.1663 11.9527 37.1663 16.6667V23.3334C37.1663 28.0474 37.1663 30.4044 35.7018 31.8689C34.2373 33.3334 31.8803 33.3334 27.1663 33.3334H13.833C9.11896 33.3334 6.76194 33.3334 5.29747 31.8689C3.83301 30.4044 3.83301 28.0474 3.83301 23.3334V16.6667Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 16.5071C10.5 8.93305 20.5 16.6502 20.5 21.6666H14.6667C11.772 21.6666 10.5 19.1164 10.5 16.5071Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30.5 16.5071C30.5 8.93305 20.5 16.6502 20.5 21.6666H26.3333C29.228 21.6666 30.5 19.1164 30.5 16.5071Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.5 6.66675V33.3334"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.83301 21.6667H37.1663"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25.5 26.6667L20.5 21.6667L15.5 26.6667"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>FREE PACKAGING FOR BIRTHDAY</p>
              </div>
              <div class="package__card package__card2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                >
                  <path
                    d="M20.5 9.58341C20.5 6.25008 23 2.91675 26.3333 2.91675C26.3333 6.25008 23.8333 9.58341 20.5 9.58341Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.3337 13.4833C20.4755 13.4833 19.8115 13.2107 19.0693 12.9061C18.1297 12.5203 17.0649 12.0833 15.3226 12.0833C12.2042 12.0833 7.16699 14.5823 7.16699 21.2491C7.16699 29.0026 12.3415 37.0833 15.6748 37.0833C16.7908 37.0833 17.7962 36.6451 18.757 36.2264C19.6362 35.8431 20.4783 35.4761 21.3337 35.4761C22.189 35.4761 23.0312 35.8431 23.9103 36.2264C24.8712 36.6451 25.8765 37.0833 26.9925 37.0833C29.3135 37.0833 32.0958 33.1653 33.8337 28.1679C31.1325 27.0336 29.397 24.3633 29.397 21.2499C29.397 18.5349 30.8397 16.7329 33.0003 15.4166C31.3337 12.9166 28.856 12.0833 27.0748 12.0833C25.3325 12.0833 24.2677 12.5203 23.328 12.9061C22.586 13.2107 22.1918 13.4833 21.3337 13.4833Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>PAY SEAMLESSLY WITH APPLE PAY</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!---------package Section End ---------->
    </div>
    <div v-else>
        <PartialsNotFound />

    </div>
    </div>
    <div v-else>
        <PartialsLoading />
    </div>

</template>


<script>

    export default {
        mounted(){
            const route = useRoute()
            this.id = route.params.id
            this.get_product()
            this.call_page_scripts()
        },
        data(){
            return {
                id : null,
                product : null,
                form: new (useNuxtApp().$vform)({
                    user_id:null,
                    variant_id:null,
                    quantity:1,
                    size:null,
                    color:null
                }),
            }
        },
        methods:{
            async get_product() {
                try {
                    const response = await this.form.get('/products', {
                    params: {
                        'filters[id][$eq]': this.id,  
                        include:[
                            'mainVariant.media',
                            'variants.media',
                            ],
                    }
                    })
                    this.product = response.data.payload.data[0]
                } catch (error) {
                    console.error('Error fetching products:', error)
                }
            },
            minus(){
                if(this.form.quantity > 1){
                    this.form.quantity-=1
                }
            },
            plus(){
                if(this.form.quantity <100){
                    this.form.quantity+=1
                }
            },
            select_criteria(field,value){
                this.form[field] = value
                this.search_variant()
            },
            search_variant(){
                let variant = this.product.variants.find((e)=>{
                    return e.specifications.size == this.form.size && e.specifications.color == this.form.color
                })
                if(variant){
                    this.selected_variant = variant
                    this.form.variant_id = variant.id
                }
            },
            add_to_cart(){
                const cartStore = useCartStore();
               
 
                let item = {
                    variant_id:this.form.variant_id,
                    user_id:this.form.user_id,
                    color:this.form.color,
                    size:this.form.size,
                    quantity:this.form.quantity,
                }
                cartStore.addToCart(item)

            },
            clear_cart(){
                const cartStore = useCartStore();
                cartStore.clearCart()
            },
            call_page_scripts(){
                
            },
        }
    }

</script>

