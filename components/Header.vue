<template>
<!-- header-area START -->
<div class="header-area d-none d-lg-block">
      <div class="container lg">
        <div class="row align-items-center">
          <div class="col-lg-4 col-6">
            <div class="logo-area">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  d="M21.875 21.875L27.5 27.5"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 13.75C25 7.5368 19.9633 2.5 13.75 2.5C7.5368 2.5 2.5 7.5368 2.5 13.75C2.5 19.9633 7.5368 25 13.75 25C19.9633 25 25 19.9633 25 13.75Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
              <input type="text" placeholder="Search brand or product" />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="logo">
              <NuxtLink href="/about"><img src="@/assets/img/all-icon/logo.svg" alt="" /></NuxtLink>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="cart__account d-flex align-items-center">
              <a href="#" class="d-flex header__btn my-cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M10 20H19.079C24.6885 20 25.5416 16.476 26.5762 11.3364C26.8747 9.85389 27.024 9.11266 26.6651 8.61884C26.3062 8.125 25.6184 8.125 24.2426 8.125H7.5"
                    stroke="#C79828"
                    stroke-width="1.875"
                    stroke-linecap="round"
                  />
                  <path
                    d="M10 20L6.72341 4.39366C6.44519 3.28074 5.44523 2.5 4.29806 2.5H3.125"
                    stroke="#C79828"
                    stroke-width="1.875"
                    stroke-linecap="round"
                  />
                  <path
                    d="M11.1 20H10.5857C8.88152 20 7.5 21.4391 7.5 23.2142C7.5 23.5101 7.73025 23.75 8.01429 23.75H21.875"
                    stroke="#C79828"
                    stroke-width="1.875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.125 27.5C14.1605 27.5 15 26.6605 15 25.625C15 24.5895 14.1605 23.75 13.125 23.75C12.0895 23.75 11.25 24.5895 11.25 25.625C11.25 26.6605 12.0895 27.5 13.125 27.5Z"
                    stroke="#C79828"
                    stroke-width="1.875"
                  />
                  <path
                    d="M21.875 27.5C22.9105 27.5 23.75 26.6605 23.75 25.625C23.75 24.5895 22.9105 23.75 21.875 23.75C20.8395 23.75 20 24.5895 20 25.625C20 26.6605 20.8395 27.5 21.875 27.5Z"
                    stroke="#C79828"
                    stroke-width="1.875"
                  />
                </svg>
                <span>My Cart</span>
              </a>
              <a href="account-sign-in.html" class="d-flex header__btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M8.22197 19.352C6.4535 20.405 1.8167 22.5552 4.64083 25.2458C6.02039 26.56 7.55687 27.5 9.48859 27.5H20.5114C22.4431 27.5 23.9796 26.56 25.3591 25.2458C28.1833 22.5552 23.5465 20.405 21.778 19.352C17.631 16.8827 12.369 16.8827 8.22197 19.352Z"
                    stroke="#C79828"
                    stroke-width="1.875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.625 8.125C20.625 11.2316 18.1066 13.75 15 13.75C11.8934 13.75 9.375 11.2316 9.375 8.125C9.375 5.0184 11.8934 2.5 15 2.5C18.1066 2.5 20.625 5.0184 20.625 8.125Z"
                    stroke="#C79828"
                    stroke-width="1.875"
                  />
                </svg>
                <span>ACCOUNT</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- start-btn START -->
    <div class="start__menu d-flex d-lg-none">
      <a href="#" class="active"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="26"
          viewBox="0 0 24 26"
          fill="none"
        >
          <path
            d="M8.68326 23.2333V19.6554C8.68323 18.7454 9.42514 18.0059 10.3444 17.9998H13.7114C14.635 17.9998 15.3838 18.7411 15.3838 19.6554V19.6554V23.2444C15.3835 24.017 16.0065 24.6485 16.7867 24.6666H19.0314C21.2692 24.6666 23.0832 22.8708 23.0832 20.6554V20.6554V10.4775C23.0712 9.60594 22.6579 8.78755 21.9608 8.25518L14.2838 2.13283C12.9389 1.06681 11.0271 1.06681 9.68216 2.13283L2.03887 8.2663C1.33914 8.79651 0.925122 9.61626 0.916504 10.4886V20.6554C0.916504 22.8708 2.73053 24.6666 4.96823 24.6666H7.21296C8.01258 24.6666 8.66081 24.0249 8.66081 23.2333V23.2333"
            stroke="#939393"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Home</span>
      </a>
      <a href="#"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M20.4165 20.4167L25.6665 25.6667"
            stroke="#939393"
            stroke-width="1.75"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23.3335 12.8333C23.3335 7.03433 18.6325 2.33331 12.8335 2.33331C7.03451 2.33331 2.3335 7.03433 2.3335 12.8333C2.3335 18.6323 7.03451 23.3333 12.8335 23.3333C18.6325 23.3333 23.3335 18.6323 23.3335 12.8333Z"
            stroke="#939393"
            stroke-width="1.75"
            stroke-linejoin="round"
          />
        </svg>
        <span>Categories</span>
      </a>
      <a href="#"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="24"
          viewBox="0 0 20 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.1928 1.22223H5.43101C3.02884 1.22223 0.958008 3.1694 0.958008 5.57273V18.0712C0.958008 20.6099 2.89351 22.6341 5.43101 22.6341H14.7515C17.1548 22.6341 19.102 20.4757 19.102 18.0712V7.37756L13.1928 1.22223Z"
            stroke="#939393"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.8862 1.20856V4.60239C12.8862 6.25906 14.2267 7.60306 15.8822 7.60656C17.4187 7.61006 18.9902 7.61122 19.0964 7.60422"
            stroke="#939393"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.6647 16.1508H6.36816"
            stroke="#939393"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.283 10.3732H6.36768"
            stroke="#939393"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Orders</span>
      </a>
      <a href="#"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="25"
          viewBox="0 0 21 25"
          fill="none"
        >
          <circle
            cx="10.5085"
            cy="6.49106"
            r="5.57437"
            stroke="#939393"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.66652 19.8183C1.66503 19.4264 1.75267 19.0393 1.92282 18.6863C2.45676 17.6184 3.96248 17.0525 5.21191 16.7962C6.11299 16.6039 7.02653 16.4754 7.9457 16.4117C9.64748 16.2622 11.3591 16.2622 13.0609 16.4117C13.98 16.4762 14.8935 16.6046 15.7947 16.7962C17.0441 17.0525 18.5498 17.5651 19.0838 18.6863C19.4259 19.4059 19.4259 20.2413 19.0838 20.9609C18.5498 22.0822 17.0441 22.5948 15.7947 22.8404C14.8946 23.0407 13.9808 23.1728 13.0609 23.2355C11.6758 23.353 10.2842 23.3744 8.89612 23.2996C8.57575 23.2996 8.26607 23.2996 7.9457 23.2355C7.02924 23.1735 6.11888 23.0414 5.22259 22.8404C3.96248 22.5948 2.46744 22.0822 1.92282 20.9609C1.75354 20.6038 1.66598 20.2135 1.66652 19.8183Z"
            stroke="#939393"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>Account</span>
      </a>
    </div>
    <!-- mobile-header START -->
    <div class="mobile__header d-block d-lg-none">
      <div class="container">
        <div class="mobile__header__wrap">
          <a href="#"><img src="@/assets/img/all-icon/logo.svg" alt="" /></a>
          <a href="#"
            ><img src="@/assets/img/all-icon/notification.svg" alt=""
          /></a>
        </div>
      </div>
    </div>
    <!-- header-area END -->
  </template>
  
  <script setup>

  </script>
  

  