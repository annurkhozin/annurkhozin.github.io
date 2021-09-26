<template>
  <div>
    <noscript>
      <strong
        >We're sorry but this site doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>

    <div :class="this.$store.state.darkMode ? 'dark-mode' : 'light-mode'">
      
      <Navbar />
      <div class="d-flex pt-2">
        <main class="content w-100">
          <div class="container">
            <Nuxt />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Default",
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    };
  },
};
</script>
