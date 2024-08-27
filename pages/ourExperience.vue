<template>
  <div>
    <div class="container">
      <div class="layout-form custom-width lg aboutUs">
        <h6 class="mb-5">
          <NuxtLink class="main-title normal lg" href="/">{{
            $t("Titles.home")
          }}</NuxtLink>
           <i class="fas fa-chevron-left change-angle"></i> 
          <span class="main-title normal lg">{{ $t(`Titles.our_exp`) }}</span>
        </h6>
        <div v-if="loading">
          <Skeleton height="1rem" class="mb-3 w-25"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton><br />
          <Skeleton height="1rem" class="mb-3 w-25"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton><br /><Skeleton
            height="1rem"
            class="mb-3 w-25"
          ></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton>
          <Skeleton height="1rem" class="mb-2"></Skeleton>
        </div>
        <div class="main-parag mb-4"></div>
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
        <div class="cards_view row">
          <div
            v-for="i in services"
            :key="i.id"
            class="col-12 col-md-4 mb-4 d-flex"
          >
            <div class="card_view">
              <h6 class="mb-4 text-center">{{ i.title }}</h6>
              <div class="parag-view" v-html="i.description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  name: "Titles.our_exp",
});
const axios = useApi();
const services = ref([]),
  loading = ref(true);
onMounted(() => {
  axios
    .get("expertise", {
      headers: {
        lang: `${localStorage.getItem("locale") == "en" ? "en" : null}`,
      },
    })
    .then((res) => {
      document.querySelector(".main-parag").innerHTML = res.data.data.expertise;
      services.value = res.data.data.services;
      loading.value = false;
    });
});
</script>

<style lang="scss" scoped>
.aboutUs {
  text-align: start;
  p {
    font-size: 16px;
    line-height: 2;
  }
}
.main-parag {
  font-size: 20px;
  h4 {
    font-size: 20px !important;
  }
  p {
    font-size: 15px;
  }
}
.card_view {
  background-color: var(--main-2);
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 40px;
  padding-bottom: 100px;
  flex-grow: 2;
  h6 {
    font-weight: bold;
    font-size: 17px;
  }
  p {
    line-height: 2;
    font-size: 13px;
  }
}
</style>
