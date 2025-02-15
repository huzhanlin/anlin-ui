<template>
  <al-icon @selectIconData="iconFont"></al-icon>
</template>

<script>
export default {
  methods: {
    iconFont(data) {
      console.log(data);
    }
  }
}
</script>