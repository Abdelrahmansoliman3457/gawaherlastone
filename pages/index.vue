<template>
  <div>
    <main style="background: var(--main-bg)">
      <div class="d-flex justify-content-center">
        <Skeleton
          width="100rem"
          height="30rem"
          class="slider-img w-100"
          v-if="loading"
        ></Skeleton>
      </div>
      <video
        :src="video"
        autoplay
        muted
        class="slider-img"
        alt=""
        loop
        v-if="video"
      ></video>
      <div class="container">
        <div class="layout-form custom-width lg">
          <div class="row" v-if="loading">
            <div class="col-12 col-md-4 mb-4">
              <Skeleton width="15rem" height="18rem"></Skeleton>
            </div>
            <div class="col-12 col-md-4 mb-4">
              <Skeleton width="15rem" height="18rem"></Skeleton>
            </div>
            <div class="col-12 col-md-4 mb-4">
              <Skeleton width="15rem" height="18rem"></Skeleton>
            </div>
          </div>
          <div class="row" v-if="loading == false">
            <div class="col-12 col-md-4 mb-4">
              <a href="/aboutUs" class="section-dev">
                <h6 class="text-center">{{ $t("nav_inks.about_us") }}</h6>
                <img :src="about" alt="" class="section-img" />
              </a>
            </div>
            <div class="col-12 col-md-4 mb-4">
              <a href="tradeMarks" class="section-dev">
                <h6 class="text-center">{{ $t("nav_inks.trade_marks") }}</h6>
                <img :src="brands" class="section-img" alt="" />
              </a>
            </div>
            <div class="col-12 col-md-4 mb-4">
              <a href="/news" class="section-dev">
                <h6 class="text-center">{{ $t("nav_inks.news") }}</h6>
                <img :src="posts" class="section-img" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
    <main>
      <h6 class="text-center">{{ $t("home.insta_page") }}</h6>
      <div class="container">
        <div class="layout-form custom-width lg">
          <div class="row" v-if="loading">
            <div class="col-12 col-md-4 mb-4">
              <Skeleton width="15rem" height="18rem"></Skeleton>
            </div>
            <div class="col-12 col-md-4 mb-4">
              <Skeleton width="15rem" height="18rem"></Skeleton>
            </div>
            <div class="col-12 col-md-4 mb-4">
              <Skeleton width="15rem" height="18rem"></Skeleton>
            </div>
          </div>
          <div class="row">
            <div
              class="col-12 col-md-4 mb-4"
              v-for="i in instagram_gallery"
              :key="i.id"
            >
              <a class="section-dev">
                <img :src="i.image" class="section-img" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>

definePageMeta({
  name: "Titles.home",
});
const axios = useApi();
const video = ref(""),
  instagram_gallery = ref([]),
  about = ref(""),
  brands = ref(""),
  posts = ref("");
const loading = ref(true);

onMounted(() =>
  axios
    .get("home", {
      headers: {
        lang: `${localStorage.getItem("locale") == "en" ? "en" : null}`,
      },
    })
    .then((res) => {
      console.log(res.data.data);
      video.value = res.data.data.video[0].value;
      about.value = res.data.data.images[0].value;
      brands.value = res.data.data.images[1].value;
      posts.value = res.data.data.images[2].value;
      instagram_gallery.value = res.data.data.instagram_gallery;
      loading.value = false;
    })
);
</script>

<style lang="scss" scoped>
.section-img {
  width: 100%;
  height: 300px;
}
.section-dev {
  display: flex;
  flex-direction: column;
  padding: 0px;
  box-shadow: 0px 0px 8px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    scale: 1.05;
  }
}
h6 {
  color: #000000;
  padding: 10px 0;
  background: #ffffff;
  margin: 0;
}
</style>
