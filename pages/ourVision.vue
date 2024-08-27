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
        <div class="parag-view row mb-5">
          <h4
            class="col-12 col-md-4 justify-content-center row align-items-center p-0 mb-4"
          >
            {{ $t("OurVision.our_vision") }}
          </h4>

          <div class="col-12 col-md-8 p-0 vision">
            <div class="about" v-if="loading">
              <Skeleton height="1rem" class="mb-1"></Skeleton>
              <Skeleton height="1rem" class="mb-1"></Skeleton>
              <Skeleton height="1rem" class="mb-1"></Skeleton>
              <Skeleton height="1rem" class="mb-1"></Skeleton>
              <Skeleton height="1rem" class="mb-1"></Skeleton>
              <Skeleton height="1rem" class="mb-1"></Skeleton>
              <Skeleton height="1rem" class="mb-1"></Skeleton>
            </div>
          </div>
        </div>
        <div class="parag-view row">
          <h4
            class="col-12 col-md-4 justify-content-center row align-items-center p-0 mb-4"
          >
            {{ $t("OurVision.our_msg") }}
          </h4>

          <div class="col-12 col-md-8 p-0 message">
            <div class="about" v-if="loading">
              <Skeleton height="1rem" class="mb-1"></Skeleton>
              <Skeleton height="1rem" class="mb-1"></Skeleton>
              <Skeleton height="1rem" class="mb-1"></Skeleton>
              <Skeleton height="1rem" class="mb-1"></Skeleton>
              <Skeleton height="1rem" class="mb-1"></Skeleton>
              <Skeleton height="1rem" class="mb-1"></Skeleton>
              <Skeleton height="1rem" class="mb-1"></Skeleton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  name: "Titles.our_vision",
});
const axios = useApi();
const route = useRoute(),
  loading = ref(true);

onMounted(() => {
  axios
    .get("vision-and-message", {
      headers: {
        lang: `${localStorage.getItem("locale") == "en" ? "en" : null}`,
      },
    })
    .then((res) => {
      console.log(res.data);
      document.querySelector(".vision").innerHTML = res.data.data.vision;
      document.querySelector(".message").innerHTML = res.data.data.mission;
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
  p {
    font-size: 15px;
    line-height: 2.5;
  }
}
.parag-view {
  background-color: var(--main-2);
  padding: 50px;
}
</style>
