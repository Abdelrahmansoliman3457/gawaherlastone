<template>
  <!--========================= start footer ===============================-->
  <footer class="footer">
    <div class="inner-footer">
      <div class="row align-items-center justify-content-center w-100">
        <div class="col-12 col-lg-3 mb-4">
          <div class="img-footer">
            <NuxtLink to="/" class="footer-logo">
              <img src="@/assets/images/logo.png" alt="logo" />
            </NuxtLink>
          </div>
        </div>

        <div class="col-12 col-lg-3 mb-4 paragraph">
          © Saudi Jawahir Trading Company All Rights Reserved - تصميم وبرمجة
          مؤسسة أوامر الشبكة
        </div>

        <div class="col-12 col-lg-3 mb-4 d-flex justify-content-center">
          <div class="d-flex flex-column">
            <button class="share_website mb-2" @click="toggle">
              {{ $t("home.share_website") }}
            </button>

            <OverlayPanel
              ref="op"
              v-model:visible="sent_successfully"
              modal
              class="custum_dialog_width"
              :draggable="false"
            >
              <div class="d-flex justify-content-evenly">
                <SocialShare
                  network="facebook"
                  :styled="false"
                  :label="false"
                  style="color: black"
                />
                <SocialShare
                  network="twitter"
                  :styled="false"
                  :label="false"
                  style="color: black"
                />

                <SocialShare
                  network="linkedin"
                  :styled="false"
                  :label="false"
                  style="color: black"
                />
                <SocialShare
                  network="email"
                  :styled="false"
                  :label="false"
                  style="color: black"
                />
              </div>
            </OverlayPanel>
            <div class="brands">
              <a v-for="i in arr" :href="i.link"
                ><img :src="i.icon" style="width: 20px" class="m-1"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
/******************* Plugins Or Composables *******************/
import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });
const op = ref();
const toggle = (event) => {
  op.value.toggle(event);
};
const arr = ref([]);
const axios = useApi();
onMounted(() => [
  axios.get("socials").then((res) => {
    arr.value = res.data.data;
  }),
]);
</script>

<style lang="scss">
.paragraph {
  text-wrap: nowrap;
  font-size: 12px;
  width: fit-content;
  padding: 0;
  @media (max-width: 600px) {
    text-wrap: wrap;
    padding-inline-start: 13px;
  }
}
.inner-footer {
  background-color: var(--main-bg);
  padding: 50px 20px;
  .foot-title {
    color: var(--main);
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 13px;
  }

  .links {
    .link {
      display: block;
      color: var(--main);
      font-size: 14px;
      &:not(:last-child) {
        margin-bottom: 13px;
      }
    }
    .footer-icon {
      margin-inline-end: 10px;
      font-size: 18px;
    }
  }
}

.copy-right {
  padding: 10px 0;
  background-color: var(--main);
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
    .hint {
      color: var(--wh);
      font-size: 13px;
      margin-bottom: 0;
    }

    @media (max-width: 550px) {
      justify-content: center;
    }
  }
}

.footer-logo {
  margin-bottom: 10px;
  display: block;
  img {
    width: 200px;
    @media (max-width: 550px) {
      min-width: 100px;
    }
  }
}

.hint-link {
  color: var(--wh);
}
.share_website {
  background-color: #000000;
  color: #ffffff;
  padding: 10px 25px;
  border-radius: 5px;
  font-size: 15px;
}
.brands {
  display: flex;
  justify-content: space-around;
  padding: 0 15px;
  i {
    color: #000000;
    font-size: 15px;
  }
}
</style>
