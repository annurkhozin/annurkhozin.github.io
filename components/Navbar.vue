<template>
  <div>
    <b-navbar toggleable="md" class="navbar-top py-0 py-md-1 d-none d-md-block">
      <b-container>
        <b-navbar-brand to="/" class="d-none d-md-block"
          ><span class="str"><strong>Nur Khozin</strong></span></b-navbar-brand
        >
        <b-collapse id="nav-collapse" is-nav class="d-none d-md-block">
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/"><span class="str">Home</span></b-nav-item>
            <!-- <b-nav-item to="/"><span class="str">About</span></b-nav-item> -->
            <!-- <b-nav-item to="/"><span class="str">Skill</span></b-nav-item> -->
            <b-nav-item href="https://github.com/annurkhozin/" target="_blank"
              ><span class="str">Github</span></b-nav-item
            >
            <!-- <b-nav-item to="/"><span class="str">Contact</span></b-nav-item> -->
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <LangToggle />
            <DarkLightMode />
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <b-navbar
      :class="showNavbar ? 'scrolled-down' : 'scrolled-up'"
      class="
        fixed-bottom
        shadow
        py-1 py-md-1
        d-block d-md-none d-lg-none d-xl-none
        navbar-bottom
      "
    >
      <b-navbar-nav class="nav-justified">
        <b-nav-item :to="currentLang + 'home'">
          <b-icon-house class="white"></b-icon-house>
        </b-nav-item>
        <b-nav-item><b-icon-grid class="white"></b-icon-grid> </b-nav-item>

        <b-nav-item-dropdown right dropup no-caret variant="link">
          <template #button-content>
            <b-icon-three-dots-vertical
              class="white"
            ></b-icon-three-dots-vertical>
          </template>

          <b-dropdown-item :to="currentLang + 'profile'"
            ><b-icon-person scale="0.8"></b-icon-person>
            {{ $t("Profile") }}</b-dropdown-item
          >
          <b-dropdown-item :to="currentLang + 'setting'"
            ><b-icon-gear scale="0.8"></b-icon-gear>
            {{ $t("Setting") }}</b-dropdown-item
          >
          <b-dropdown-divider></b-dropdown-divider>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
const OFFSET = 5;

export default {
  name: "Navbar",
  data() {
    return {
      currentLang:
        this.$i18n.defaultLocale === this.$i18n.locale
          ? "/"
          : "/" + this.$i18n.locale + "/",
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0
    };
  },

  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    }
  }
};
</script>

<style scoped>
.navbar {
  z-index: 1030;
}
.dark-mode .navbar {
  background-color: #2f495e;
}
.light-mode .navbar {
  background-color: white;
  /* border-bottom: 1px solid #eee; */
}
.navbar-bottom {
  margin-bottom: 10px;
  margin-left: 20%;
  margin-right: 20%;
  border-radius: 50px;
  font-size: 1rem;
}
.light-mode .navbar-bottom,
.light-mode .navbar-bottom::before {
  background: linear-gradient(to right, #50c088 0%, #51c48a 80%, #4eb883 100%);
}
.dark-mode .navbar-bottom,
.dark-mode .navbar-bottom::before {
  background: linear-gradient(to right, #328059 0%, #30845a 80%, #369465 100%);
}

.navbar-bottom:before {
  content: "";
  display: inline-block;
  height: 40px;
  position: absolute;
  bottom: -3px;
  left: 10%;
  right: 10%;
  z-index: -1;
  border-radius: 50px;
  filter: blur(10px) brightness(0.95);
  transform-style: preserve-3d;
  transition: all 0.3s ease-out;
}

.scrolled-down {
  transform: translateY(0);
  transition: all 0.7s ease-in-out;
}
.scrolled-up {
  margin-bottom: -10px;
  transform: translateY(100%);
  transition: all 0.7s ease-in-out;
}

span.notification-badge {
  position: relative;
  top: -10px;
  right: 13px;
  border-radius: 50%;
}
.navbar-bottom .navbar-nav .nuxt-link-exact-active:hover,
.navbar-bottom .navbar-nav .nuxt-link-exact-active:focus {
  color: white;
}
</style>
