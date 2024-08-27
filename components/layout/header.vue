<template>
  <div class="defaultLayout">
    <header class="header">
      <div class="nav-header">
        <div class="inner">
          <nuxtLink to="/" class="logo">
            <img src="@/assets/images/logo.png" alt="logo" />
          </nuxtLink>
          <ul class="nav-links" :class="{ active: navLinksActive }">
            <li>
              <NuxtLink to="/aboutUS" class="link">
                {{ $t("nav_inks.about_us") }}
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/ourVision" class="link">
                {{ $t("nav_inks.our_vision") }}
              </NuxtLink>
            </li>

            <li>
              <NuxtLink to="/tradeMarks" class="link">
                {{ $t("nav_inks.trade_marks") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/executiveMessage" class="link">
                {{ $t("nav_inks.exec_msg") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/ourExperience" class="link">
                {{ $t("nav_inks.our_exp") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/news" class="link">
                {{ $t("nav_inks.news") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/jobs" class="link">
                {{ $t("nav_inks.jobs") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/connectus" class="link">
                {{ $t("nav_inks.connect_us") }}
              </NuxtLink>
            </li>
          </ul>
          <div class="dropdown drop-lang">
            <a
              class="dropdown-toggle hint-lang"
              href="#"
              data-bs-toggle="dropdown"
            >
              <i class="fas fa-globe icon"></i>
              <div v-if="htmlLang == ''">
                <p>العربية</p>
              </div>
              <div v-else>
                <p>
                  {{ htmlLang === "ar" ? "العربية" : "english" }}
                </p>
              </div>
            </a>

            <ul class="dropdown-menu">
              <button class="dropdown-item" @click="switchLang('ar')">
                العربيه
              </button>
              <button class="dropdown-item" @click="switchLang('en')">
                English
              </button>
            </ul>
          </div>
          <button
            class="nav-btn"
            @click="handleClick"
            :class="{ active: navBtnActive }"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
    <div
      class="nav-overlay"
      @click="handleOverlayClick"
      :class="{ show: navOverlayShow }"
    ></div>
  </div>
</template>

<script setup></script>

<script>
export default {
  data() {
    return {
      htmlLang: "",
      navBtnActive: false,
      navLinksActive: false,
      navOverlayShow: false,
      isActive: false,
    };
  },

  methods: {
    chageDir(dir) {
      let element = document.querySelector(".html_direction");
      element.setAttribute("lang", dir);
      if (dir === "ar") {
        element.setAttribute("dir", "rtl");
        this.htmlLang = dir;
      }
      if (dir === "en") {
        element.setAttribute("dir", "ltr");
        this.htmlLang = dir;
      }
    },
    switchLang(newLang) {
      const lang = useCookie("lang");
      if (newLang !== localStorage.getItem("locale")) {
        lang.value = newLang;
        localStorage.setItem("locale", newLang);
        location.reload();
      }
    },

    handleClick() {
      this.navBtnActive = true;
      this.navLinksActive = true;
      this.navOverlayShow = true;
    },

    handleOverlayClick() {
      this.navBtnActive = false;
      this.navLinksActive = false;
      this.navOverlayShow = false;
    },
  },

  async mounted() {
    let sessionKey = localStorage.getItem("locale");

    window.sessionKey = localStorage.getItem("locale");
    if (sessionKey) {
      this.chageDir(localStorage.getItem("locale"));
    }
  },
};
</script>

<style lang="scss">
.defaultLayout {
  position: sticky;
  top: 0;
  z-index: 1000;
}
</style>
