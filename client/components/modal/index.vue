<template>
  <a-modal
    v-model:visible="visible"
    title=""
    footer=""
    width="80%"
    :closable="false"
    class="app-modal"
  >
    <header v-if="!$slots.header" class="app-modal__header">
      <div class="app-modal__modal-name">{{ props.title }}</div>
      <a-button
        class="app-modal__header-cancel-btn"
        type="text"
        @click="onCloseModal"
        >x</a-button
      >
    </header>
    <slot name="header" class="app-modal__header" />

    <main v-if="!$slots.default" class="app-modal__body"></main>
    <slot class="app-modal__body" />

    <footer>
      <slot name="footer" />
    </footer>
  </a-modal>
</template>

<script setup>
const visible = true;
const emits = defineEmits(["close"]);
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});

const onCloseModal = () => emits("close");
</script>

<style lang="scss">
@import "./index.scss";
</style>
