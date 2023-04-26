<template>
    <footer>
        <div class="container">
            <div class="subscribe">
                subscribe
            </div>
            <div class="link">
                link
            </div>
            <div class="copy">
                copy
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "AppFooter",
    setup() {

        return {}
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as*;

.subscribe {
    height: 150px;
    border: dashed;
}

.link {
    height: 350px;
    border: dashed;
}

.copy {
    height: 50px;
    border: dashed;
}</style>