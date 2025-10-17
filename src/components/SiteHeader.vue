<template>
  <header class="w-full p-5 flex flex-row justify-between items-center fixed top-0 left-0 z-50">
    <h1 class="logo">
      <a href="./index" class="font-ContrailOne text-2xl">2NA</a>
    </h1>
    <div>
      <a href="mailto:yooina91@gmail.com" class="font-ContrailOne text-md leading-tight">MAIL</a>
    </div>
  </header>
</template>

<script>
  export default {
    name : 'SiteHeader',
  }
</script>

<style lang="scss">
  header .logo {
      position: relative;
      width: 100%;
      max-width: 60px;
      height: 40px;
  }
</style>
