<template>
    <main>
        <div class="container_large">
            <div class="jumbutron">
                jumbutron
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
            <div class="xs_jumbutron">
                xs_jumbutron
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
    height: 350px;
    border: dashed;
}

.small_jumbutron {
    height: 250px;
    border: dashed;
}
.xs_jumbutron {
    height: 150px;
    border: dashed;
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