<template>
  <div class="layout-form custom-width lg aboutUs">
    <h6 class="mb-5">
      <NuxtLink class="main-title normal lg" href="/">{{
        $t("Titles.home")
      }}</NuxtLink>
       <i class="fas fa-chevron-left change-angle"></i> 
      <span class="main-title normal lg">{{ $t(`Titles.trade_marks`) }}</span>
    </h6>
    <div class="sec_1 row m-0 mb-4">
      <div class="col-12 col-md-8">
        <div class="row p-4 h-100">
          <div>
            <Skeleton
              height="13rem"
              class="slider-img"
              v-if="loading"
            ></Skeleton>
          </div>
          <p class="main-title bold">{{ name }}</p>
          <div class="column">
            <p class="disc">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 p-0">
        <div
          class="p-4 h-100"
          v-if="loading"
          style="background-color: #fff !important"
        >
          <Skeleton height="13rem"></Skeleton>
        </div>
        <div v-if="image" class="img-container-main">
          <img   :src="image" alt="" />
        </div>
      </div>
    </div>
    <div class="sec_1 mb-4" v-if="loading">
      <Skeleton height="20rem" class="slider-img trade_mark" />
    </div>
    <div class="sec_1 row mb-4">
      <video
        v-if="video != ``"
        autoplay
        loop
        muted
        :src="video"
        class="slider-img trade_mark"
      ></video>
    </div>
    <div class="section_2 row justify-content-between mb-4">
      <p class="main-title">{{ $t("trade_marks.location") }}</p>
      <div class="w-100 mb-4 d-flex">
        <a class="d-flex align-items-center"> {{ $t("trade_marks.city") }} </a>
        <div class="flex justify-content-center dropdown_card">
          <Dropdown
            @change="show_city"
            v-model="city"
            :options="city_options"
            optionLabel="name"
            :placeholder="$t('trade_marks.choose_city')"
            class="w-full md:w-14rem custum-dropdown"
          />
        </div>
      </div>
      <div class="row" v-if="loading">
        <div class="col-12 col-md-4 mb-4">
          <Skeleton height="7rem"></Skeleton>
        </div>
        <div class="col-12 col-md-4 mb-4">
          <Skeleton height="7rem"></Skeleton>
        </div>
        <div class="col-12 col-md-4 mb-4">
          <Skeleton height="7rem"></Skeleton>
        </div>
      </div>
      <div
        class="col-12 col-md-3 mb-4"
        v-for="branch in branches"
        :key="branch.id"
      >
        <div class="d-flex">
          <div class="sub-sec">
            <div class="row gap-3">
              <a>{{ branch.name }} <br />{{ branch.detailed_address }}</a>
              <a
                ><img
                  class="phone-img"
                  src="../assets/images/phone.png"
                  alt=""
                /> <span>{{ branch.phone }}</span></a
              >
              <a
                ><img
                  class="phone-img"
                  src="../assets/images/directions.png"
                  alt=""
                /> <span>الاتجاهات</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section_2 row justify-content-between mb-4">
      <div v-if="loading">
        <div class="col-12 mb-1">
          <Skeleton height="1rem"></Skeleton>
        </div>
        <div class="col-12 mb-1">
          <Skeleton height="1rem"></Skeleton>
        </div>
        <div class="col-12 mb-1">
          <Skeleton height="1rem"></Skeleton>
        </div>
      </div>
      <p class="main-title mb-4">{{ description }}</p>
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
        <div class="col-12 col-md-4 mb-4" v-for="news in posts" :key="news.id">
          <div class="position-relative">
            <NuxtLink
              :to="{ path: `/news-details`, query: { id: `${news.id}` } }"
            >
              <div class="position-absolute disc-dev">
                <p>{{ news.created_at }}</p>
                <p>
                  {{ news.title }}
                </p>
              </div>
              <img class="w-100 h-100" :src="news.cover_image" alt="" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const id = useRoute().params.id;
const axios = useApi();
definePageMeta({
  name: "Titles.trade_mark",
});
const route = useRoute();
const city_options = ref([]),
  description = ref(""),
  image = ref(""),
  logo = ref(""),
  name = ref(""),
  posts = ref([]),
  video = ref(""),
  city = ref(""),
  branches = ref([]),
  loading = ref(true);
const show_city = async () => {
  await axios
    .get(`brand-branches/${route.params.id}?city_id=${city.value.id}`)
    .then((res) => {
      branches.value = res.data.data;
    });
};
onMounted(() => {
  axios
    .get(`brands/${id}`, {
      headers: {
        lang: `${localStorage.getItem("locale") == "en" ? "en" : null}`,
      },
    })
    .then((res) => {
      console.log(res.data.data);
      city_options.value = res.data.data.cities;
      description.value = res.data.data.description;
      image.value = res.data.data.image;
      logo.value = res.data.data.logo;
      name.value = res.data.data.name;
      posts.value = res.data.data.posts;
      video.value = res.data.data.video;
      branches.value = res.data.data.branches;
      loading.value = false;
    });
});
</script>

<style lang="scss" scoped>
.position-relative {
  transition: all 0.3s;
  &:hover {
    scale: 1.05;
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
.phone-img {
  width: 30px !important;
  height: 30px !important;
  vertical-align: middle;
}
.trade_marks {
  text-align: start;
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
