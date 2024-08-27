<template>
  <div class="container">
    <div class="layout-form custom-width lg aboutUs">
      <h6 class="mb-5">
        <NuxtLink class="main-title normal lg" href="/">{{
          $t("Titles.home")
        }}</NuxtLink>
         <i class="fas fa-chevron-left change-angle"></i> 
        <span class="main-title normal lg">{{ $t(`${route.name}`) }}</span>
      </h6>
      <div class="about mb-5"></div>
      <div class="about mb-5" v-if="loading">
        <Skeleton height="1rem" class="mb-1"></Skeleton>
        <Skeleton height="1rem" class="mb-1"></Skeleton>
        <Skeleton height="1rem" class="mb-1"></Skeleton>
        <Skeleton height="1rem" class="mb-1"></Skeleton>
      </div>
      <div class="section_2 row justify-content-between">
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
        <div
          class="col-12 col-md-3 mb-4"
          v-for="cat in categories"
          :key="cat.id"
        >
          <div class="d-flex">
            <div>
              <img :src="cat.image" alt="" />
            </div>
            <div class="row sub-sec">
              <p class="main-title normal">{{ cat.name }}</p>
              <div class="row gap-3">
                <a v-for="brand in cat.brands" :key="brand">{{ brand }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  name: "Titles.aboutUs",
});
const axios = useApi();
const route = useRoute();
const categories = ref([]),
  loading = ref(true);
onMounted(() => {
  axios
    .get("about", {
      headers: {
        lang: `${localStorage.getItem("locale") == "en" ? "en" : null}`,
      },
    })
    .then((res) => {
      document.querySelector(".about").innerHTML = res.data.data.about;
      categories.value = res.data.data.categories;
      loading.value = false;
    });
});
</script>

<style lang="scss" scoped>
a {
  color: #000000;
  font-size: 15px;
  text-align: start;
}
.aboutUs {
  text-align: start;
  .about {
    font-size: 16px;
    line-height: 2.5;
  }
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
