<template>
  <div>
    <button @click="$emit('click')">{{ text }}</button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
