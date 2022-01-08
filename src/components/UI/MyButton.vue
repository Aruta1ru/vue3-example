<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style>
.btn {
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid rgb(134, 245, 245);
}
</style>