<template>
  <div>
    <div class="container">
      <div class="layout-form custom-width lg aboutUs">
        <h6 class="mb-5">
          <NuxtLink class="main-title normal lg" href="/">{{
            $t("Titles.home")
          }}</NuxtLink>
           <i class="fas fa-chevron-left change-angle"></i> 
          <span class="main-title normal lg">{{ $t(`${route.name}`) }}</span>
        </h6>

        <div class="parag-view-f row mb-5">
          <div class="about" v-if="loading">
            <Skeleton height="1rem" class="mb-2"></Skeleton>
            <Skeleton height="1rem" class="mb-2"></Skeleton>
            <Skeleton height="1rem" class="mb-2"></Skeleton>
            <Skeleton height="1rem" class="mb-2"></Skeleton>
            <Skeleton height="1rem" class="mb-2"></Skeleton>
            <Skeleton height="1rem" class="mb-2"></Skeleton>
          </div>
          <p class="parag-view"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  name: "Titles.exec_msg",
});
const axios = useApi();
const route = useRoute(),
  loading = ref(true);

onMounted(() => {
  axios
    .get("ceo-message", {
      headers: {
        lang: `${localStorage.getItem("locale") == "en" ? "en" : null}`,
      },
    })
    .then((res) => {
      console.log(res.data.data);
      document.querySelector(".parag-view").innerHTML = res.data.data;
      loading.value = false;
    });
});
</script>

<style lang="scss" scoped>
a {
  color: #000000;
  font-size: 16px;
  text-align: start;
}
.aboutUs {
  text-align: start;
  p {
    font-size: 15px;
    line-height: 2.5;
  }
}
.parag-view-f {
  background-color: var(--main-2);
  padding: 50px;
  p {
    font-size: 15px;
    line-height: 2.5 !important;
  }
}
.info {
  > span:first-child {
    font-size: 18px;
    padding-bottom: 20px;
  }
  font-size: 14px;
}
</style>
