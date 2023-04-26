<template>
    <header>
        <div class="container">
            <div class="h_top">
                h_top
            </div>
            <div class="h_bottom">
h_bottom
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "AppHeader",
    setup() {

        return {}
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as*;

header {
    width: 100%;
    height: 140px;
    border: dashed;
}

.h_top {
    width: 100%;
    height: 50px;
    border: dashed;
}

.h_bottom {
    width: 100%;
    height: 90px;
    border: dashed;
}


</style>