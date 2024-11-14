<script setup lang="ts">

const {isDialog, onClose} = defineProps<{
    isDialog: boolean
    onClose: () => void
}>()

</script>

<template>
    <div @click="onClose" v-if="isDialog"class="wrapper">
    <div @click.stop class="container">
    <slot/>
    </div>
    </div>
</template>

<style scoped>
.wrapper {
    background: #00000048;
    width: 100vw;
    min-height: 100vh;
    left: 0;
    top: 0;
    margin: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}

.container {
    background: white;
    padding: 20px;
    border-radius: 10px;
}

</style>