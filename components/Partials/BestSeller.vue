<template>
    
            <div class="best__seller__card" v-if="product.main_variant">
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
                <NuxtLink :href="'/product/'+product.id">Quick view</NuxtLink>
                <img v-if="product.main_variant.media && product.main_variant.media.length>0" :src="product.main_variant.media[0].original_url" alt="" />
     
              </div>
              <div class="best__seller__card__content">
                <h5>{{product.title}}</h5>
                <p> {{getSubstring(product.des,0,20) }} </p>
                <span v-if="product.main_variant">sar {{product.main_variant.price}}</span>
              </div>
            </div>
</template>


<script>

    export default {
        props:{
            product:{
                type:Object,
            }
        },
        methods :{
            getSubstring(text, start, length) {
            return text.substr(start, length);
            }
        }

    }

</script>