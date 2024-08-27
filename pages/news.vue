<template>
  <div class="container">
    <div class="layout-form custom-width lg aboutUs">
      <h6 class="mb-5">
        <NuxtLink class="main-title normal lg" href="/">{{
          $t("Titles.home")
        }}</NuxtLink>
         <i class="fas fa-chevron-left change-angle"></i> 
        <span class="main-title normal lg">{{ $t(`Titles.news`) }}</span>
      </h6>
      <div class="section_2 row justify-content-center mb-4">
        <div class="news row">
          <div class="row" v-if="loading">
            <div class="col-12 col-md-4 mb-4">
              <Skeleton width="15rem" height="13rem"></Skeleton>
            </div>
            <div class="col-12 col-md-4 mb-4">
              <Skeleton width="15rem" height="13rem"></Skeleton>
            </div>
            <div class="col-12 col-md-4 mb-4">
              <Skeleton width="15rem" height="13rem"></Skeleton>
            </div>
          </div>
          <div class="col-12 col-md-4 mb-4" v-for="i in posts" :key="i.id">
            <div class="position-relative">
              <div class="mb-2">
                <div class="position-absolute disc-dev">
                  <p>{{ i.created_at }}</p>
                  <p>
                    {{ i.title }}
                  </p>
                </div>
                <img class="w-100 h-100" :src="i.cover_image" alt="" />
              </div>
              <NuxtLink
                class="text-center w-100 btn"
                :to="{ path: `/news-details`, query: { id: `${i.id}` } }"
                >{{ $t("news.view_news") }}</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = ref([]);
definePageMeta({
  name: "Titles.news",
});
const loading = ref(true);
const axios = useApi();
onMounted(() => {
  axios
    .get("posts", {
      headers: {
        lang: `${localStorage.getItem("locale") == "en" ? "en" : null}`,
      },
    })
    .then((res) => {
      console.log(res.data.data.data);
      posts.value = res.data.data.data;
      loading.value = false;
    });
});
</script>

<style lang="scss" scoped>
.btn {
  background-color: #000000;
  color: #ffffff;
  padding: 15px 30px;
  border-radius: 3px;
  transition: all 0.3s;
  &:hover {
    scale: 1.03;
  }
}
.disc-dev {
  width: 100%;
  height: fit-content;
  background-color: #8a8a8760;
  padding: 5px 10px;
  color: #ffffff;
  font-size: 15px;
}
.sec_1 {
  > div {
    background-color: #cdcdcd;
  }
}
.slider-img.trade_mark {
  max-height: 333px;
}
a {
  color: #000000;
  font-size: 15px;
  text-align: start;
}
.aboutUs {
  text-align: start;
}
.section_2 {
  img {
    width: 50px;
    height: 50px;
  }
  .sub-sec {
    align-content: start;
    p {
      height: 50px;
      display: flex;
      margin-bottom: 20px;
      align-items: center;
      font-weight: bold;
    }
    padding-inline-start: 15px;
  }
}
</style>
