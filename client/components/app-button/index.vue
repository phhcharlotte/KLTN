<template>
  <button :class="classNames" v-bind="$attrs" :disabled="loading || disabled">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: [String, Array],
    default: "primary",
    validator(value) {
      return ["primary", "detail", "primary-cancel", "delete"].includes(value);
    },
  },
  size: {
    type: String,
    default: "medium",
    validator(value) {
      return ["medium", "large", ""].includes(value);
    },
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const classNames = computed(() => {
  const classNames = ["app-button"];
  [props.type, props.size].forEach((value) => {
    if (value) {
      classNames.push(`app-button--${value}`);
    }
  });

  if (props.loading) {
    classNames.push("app-button--loading");
  }
  return classNames;
});
</script>

<style lang="scss">
@import "./index.scss";
</style>
