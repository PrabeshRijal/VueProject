<template>
    <section>
        <div v-show="isActive">
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        name: {require: true},
        selected: {default: false}
    },
    data:()=>({
        isActive: false
    }),
    mounted(){
        this.isActive = this.selected;
    }
}
</script>

<style scoped>

</style>