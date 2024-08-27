<template>
  <div>
    <div class="layout-form custom-width lg aboutUs">
      <h6 class="mb-5">
        <NuxtLink class="main-title normal lg" to="/">{{
          $t("Titles.home")
        }}</NuxtLink>
         <i class="fas fa-chevron-left change-angle"></i> 
        <NuxtLink class="main-title normal lg" to="/news">{{
          $t(`nav_inks.news`)
        }}</NuxtLink>
         <i class="fas fa-chevron-left change-angle"></i> 
        <span class="main-title normal lg">{{
          $t(`news_details.news_details`)
        }}</span>
      </h6>
      <div class="m-0 mb-4 main-title bold text-center" v-if="!loading">
        <NuxtLink to="/news"
          >  <i class="fas fa-chevron-right change-angle"></i>  
          {{ response.title }}</NuxtLink
        >
      </div>
      <div
        v-if="loading"
        class="m-0 mb-4 main-title d-flex justify-content-center"
      >
        <Skeleton width="4rem" height="1rem " class="mb-1"></Skeleton>
      </div>
      <div class="row mb-4">
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
        <div class="col-12 col-md-4 mb-4 p-1">
          <div><img class="w-100" :src="response.image" alt="" /></div>
        </div>
        <div class="col-12 col-md-4 mb-4 p-1">
          <div><img class="w-100" :src="response.image" alt="" /></div>
        </div>
        <div class="col-12 col-md-4 mb-4 p-1">
          <div>
            <img class="w-100" :src="response.cover_image" alt="" />
          </div>
        </div>
      </div>
      <div class="row paragraph_sec mb-4">
        <p class="p_description"></p>
      </div>
      <div class="row align-items-center justify-content-between">
        <div class="col-12 col-md-2 mb-4">
          <div class="btn-div d-flex">
            <img src="../assets/images/publish.png" alt="" />
            <p class="m-0 row">
              <span>تاريخ النشر</span>
              <span>{{ createdAt }}</span>
            </p>
          </div>
        </div>
        <div class="col-12 col-md-2 mb-4">
          <a download :href="response.pdf" class="btn-div d-flex">
            <img src="../assets/images/download.png" alt="" />
            <p class="m-0 row">
              <span>تحميل</span>
            </p>
          </a>
        </div>
        <div class="col-12 col-md-2 mb-4">
          <button class="btn-div d-flex" @click="toggle">
            <img src="../assets/images/share.png" alt="" />
            <p class="m-0 row">
              <span>مشاركة</span>
            </p>
          </button>
          <OverlayPanel
            ref="op"
            v-model:visible="sent_successfully"
            modal
            class="custum_dialog_width"
            :draggable="false"
          >
            <div class="d-flex justify-content-evenly">
              <SocialShare network="facebook" :url="pageUrl" :styled="false" :label="false" />
              <SocialShare
                network="twitter"
                :url="pageUrl"
                :styled="false"
                :label="false"
                style="color: black"
              />

              <SocialShare :url="pageUrl" network="linkedin" :styled="false" :label="false" />
              <SocialShare :url="pageUrl" network="email" :styled="false" :label="false" />
            </div>
          </OverlayPanel>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  name: "news_details.news_details",
});

const toggle = (event) => {
    op.value.toggle(event);
  },
  op = ref(),
  loading = ref(true);

const createdAt = ref(""),
  id = useRoute().query.id,
  route = useRoute(),
  axios = useApi(),
  pageUrl = ref(''),
    response = ref({});
onMounted(() => {
  axios
    .get(`posts/${id}`, {
      headers: {
        lang: `${localStorage.getItem("locale") == "en" ? "en" : null}`,
      },
    })
    .then((res) => {
      document.querySelector(".p_description").innerHTML =
        res.data.data.description;
      response.value = res.data.data;
      createdAt.value = res.data.data?.created_at?.split(" ")[0];
      loading.value = false;
    });
    pageUrl.value = window.location.href
    
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
    font-size: 16px;
    line-height: 2;
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
.paragraph_sec {
  background-color: #ececec;
  padding: 25px 15px;
  text-align: start;
  p {
    font-size: 15px;
  }
}
.btn-div {
  align-items: center;
  img {
    width: 40px;
    height: 40px;
  }
}
button.btn-div {
  background-color: #fff;
}
.row.align-items-center.justify-content-between > div:first-child {
  padding: 0;
  @media (max-width: 1000px) {
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    padding-right: calc(var(--bs-gutter-x) * 0.5);
  }
}
</style>
