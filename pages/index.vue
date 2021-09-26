<template>
  <div>
    <Loading />
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      currentLang:
        this.$i18n.defaultLocale === this.$i18n.locale
          ? "/"
          : "/" + this.$i18n.locale + "/"
    };
  },
  mounted() {
    this.page();
  },
  methods: {
    async page() {
      setTimeout(() => {
        this.$router.replace(this.currentLang + "home");
      }, 1000);
    }
  }
};
</script>

<style></style>
