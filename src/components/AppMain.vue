<template>
    <main>
        <div class="container_large">
            <div class="jumbutron">
                <div class="container h-100 d-flex flex-column justify-content-center align-items-center">
                    <h1>Brand New Arrivals</h1>
                    <h3 class="text-uppercase">new collection from new york</h3>
                    <div class="buttons d-flex mt-4 gap-3">
                        <button class="ps-5 pe-5 p-3 rounded-5 text-uppercase">view all</button>
                    <button class=" ps-5 pe-5 rounded-5 text-uppercase">lookbook</button>
                    </div>
                </div>
            </div>
        </div>
        <section class="featured">
            <div class="container">
                featured
            </div>
        </section>
        <section class="collections">
            <div class="container">
                collections
            </div>
        </section>
        <section class="best_seller">
            <div class="container">
                best_seller
            </div>
        </section>
        <section class="on_sale">
            <div class="container">
                on_sale
            </div>
        </section>
        <section class="new_arrivals">
            <div class="container_large">
                new_arrivals
            </div>
        </section>
        <div class="container_large">
            <div class="small_jumbutron">
                small_jumbutron
            </div>
        </div>
        <section class="blog">
            <div class="container">
                <div class="b_top">
                    b_top
                </div>
            </div>
            <hr>
            <div class="container">
                <div class="b_bottom">
                    b_bottom
                </div>
            </div>
        </section>
        <div class="container_large">
            <div class="xs_banner text-center pt-5">
                <h6 class=" text-uppercase">brand logos</h6>
                <div class="container  d-flex align-items-center justify-content-between">
                    <img src="../assets/img/b_logotype_6.png" alt="authenti">
                    <img src="../assets/img/b_logotype_7.png" alt="authenti">
                    <img src="../assets/img/b_logotype_1.png" alt="authenti">
                    <img src="../assets/img/b_logotype_2.png" alt="authenti">
                    <img src="../assets/img/b_logotype_3.png" alt="authenti">
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "AppMain",
    setup() {

        return {}
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as*;

.jumbutron {
    height: 550px;
    background-image: url(../assets/img/home1_slide_three_bg_2.jpg);
    background-position: center;
    background-size: cover;
    h1{
        color: white;
        font-size: 100px;
    }
    h3{
        color: white;
    }
    button{
        background-color: rgba(255, 255, 255, 0.136);
        border: white solid 0.1px;
        color: white;
    }
}

.small_jumbutron {
    height: 250px;
    border: dashed;
}

.xs_banner {
    height: 250px;
   background-color:$bannersmall;
   img{
    max-width:100%;
   }
   h6{
    color:$NevadaDarkMuted ;
   }
}

.featured {
    width: 100%;
    height: 550px;
    border: dashed;
}

.collections {
    width: 100%;
    height: 290px;
    border: dashed;
}

.best_seller {
    width: 100%;
    height: 320px;
    border: dashed;
}

.on_sale {
    width: 100%;
    height: 270px;
    border: dashed;
}

.new_arrivals {
    width: 100%;
    height: 550px;
    border: dashed;
}

.b_top {
    width: 100%;
    height: 340px;
    border: dashed;
}

.b_bottom {
    width: 100%;
    height: 300px;
    border: dashed;
}
</style>