<template>
      <!--------- best START ---------->
      <section class="best__seller mb_50 d-none d-md-block">
        <div class="container">
          <div class="title__area">
            <h2>Best Sellers</h2>
            <a href="girls-products.html">Show All</a>
          </div>
          <div class="best__seller__wrap" v-if="products.payload">
            <!-- {{ products.payload.data }} -->
            <PartialsBestSeller v-for="product,index in products.payload.data" :product="product"></PartialsBestSeller>
          </div>
          <div v-else>
            loading ....
          </div>
        </div>
      </section>
      <!--------- best End ---------->
</template>



<script>

    export default{
        data(){
            return {
                products:{},
                form : new (useNuxtApp().$vform)({
                include:[
                  'mainVariant.media',
                  'variants.media',
                ],
                pagination:5,
              })
            }      
        },  
        mounted(){
            this.get_products()
        },
        methods:{
            async get_products() {
                try {
                    const response = await this.form.get('/products') 
                    this.products = response.data
                } catch (error) {
                    console.error('Error fetching products:', error)
                }
            }
        }

    }


</script>