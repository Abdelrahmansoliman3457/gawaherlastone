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
        <div>
          <div class="row mb-4 parag-view-f">
            <p class="main-title m-0 p-0">
              <img
                src="../assets/images/address.png"
                alt=""
                style="width: 30px"
                class="m-1"
              />{{ $t("connect_us.address") }}
            </p>
            <p class="mb-1 p-0">
              <img
                src="../assets/images/address.png"
                alt=""
                style="width: 30px"
                class="invisible"
              />
              {{ site_address }}
            </p>
            <div>
              <Skeleton
                height="20rem"
                class="slider-img"
                v-if="loading"
              ></Skeleton>
            </div>
            <GMapMap
              v-if="!loading"
              :options="{
                zoomControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: true,
                disableDefaultUi: false,
              
              }"
              :center="center"
              :zoom="18"
              map-type-id="terrain"
              style="width: 100%; height: 350px"
            >
              <GMapMarker
                :key="marker.id"
                v-for="marker in markers"
                :position="marker.position"
              />
            </GMapMap>
          </div>
          <div class="row mb-4 parag-view-f">
            <div class="d-flex">
              <div class="d-flex align-items-start">
                <img
                  src="../assets/images/phone_connect.png"
                  style="width: 30px"
                  alt=""
                  class="m-2"
                />
              </div>
              <div>
                <p class="connect-title">{{ $t("connect_us.phone") }}</p>
                <Skeleton v-if="loading" height="1rem" class="mb-1"></Skeleton>
                <p class="connect-title">{{ phone }}</p>
              </div>
            </div>
          </div>
          <div class="row mb-4 parag-view-f">
            <div class="d-flex">
              <div class="d-flex align-items-start">
                <img
                  src="../assets/images/email.png"
                  style="width: 30px"
                  alt=""
                  class="m-2"
                />
              </div>
              <div>
                <p class="connect-title">
                  {{ $t("connect_us.email") }}
                </p>
                <p class="connect-title">
                  <Skeleton v-if="loading" height="1rem" class="mb-1"></Skeleton
                  >{{ email }}
                </p>
              </div>
            </div>
          </div>
          <div class="row mb-4 parag-view-f">
            <div class="d-flex">
              <div class="d-flex align-items-start">
                <img
                  src="../assets/images/cs.png"
                  style="width: 30px"
                  alt=""
                  class="m-2"
                />
              </div>
              <div>
                <p class="connect-title">{{ $t("connect_us.cs") }}</p>
                <p class="connect-title">
                  <Skeleton v-if="loading" height="1rem" class="mb-1"></Skeleton
                  >{{ cs }}
                </p>
              </div>
            </div>
          </div>
          <div class="row mb-4 parag-view-f">
            <div class="d-flex">
              <div class="d-flex align-items-start">
                <img
                  src="../assets/images/follow.png"
                  style="width: 30px"
                  alt=""
                  class="m-2"
                />
              </div>
              <div>
                <p class="connect-title">{{ $t("connect_us.follow") }}</p>
                <p class="connect-title">
                  <Skeleton
                    v-if="loading"
                    height="1rem"
                    class="mb-1"
                  ></Skeleton>
                  <span v-for="i in follow" :key="i.name">
                    <a :href="i.link"
                      ><img
                        class="m-1"
                        style="width: 30px"
                        :src="i.icon"
                        alt=""
                    /></a>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="row mb-4 parag-view">
            <form class="main-form" @submit.prevent="submit_data">
              <div class="row justify-content-between">
                <div class="w-100 mb-2 p-0">
                  <div class="d-flex flex-column input-div">
                    <label for="name"
                      >{{ $t("jobs.first_name")
                      }}<span class="hint-red">*</span></label
                    >
                    <input
                      id="name"
                      type="text"
                      :placeholder="`${$t('jobs.first_name')}`"
                      v-model="first_name"
                    />
                  </div>
                </div>
                <div class="w-100 mb-2 p-0">
                  <div class="d-flex flex-column input-div">
                    <label for="family_name"
                      >{{ $t("jobs.phone")
                      }}<span class="hint-red">*</span></label
                    >
                    <input
                      id="phone"
                      type="number"
                      :placeholder="`${$t('jobs.enter_phone')}`"
                      v-model="phone_enter"
                    />
                  </div>
                </div>
                <div class="w-100 mb-2 p-0">
                  <div class="d-flex flex-column input-div">
                    <label for="email"
                      >{{ $t("jobs.email")
                      }}<span class="hint-red">*</span></label
                    >
                    <input
                      id="email"
                      type="text"
                      :placeholder="`${$t('jobs.enter_email')}`"
                      v-model="email_enter"
                    />
                  </div>
                </div>
                <div class="w-100 mb-5 p-0">
                  <div class="d-flex flex-column input-div">
                    <label for="message"
                      >{{ $t("jobs.message")
                      }}<span class="hint-red">*</span></label
                    >
                    <textarea
                      id="message"
                      rows="5"
                      :placeholder="`${$t('jobs.enter_message')}`"
                      v-model="message"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="submit_btn">
                  {{ $t("jobs.send") }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Toast />
  </div>
</template>

<script setup>
definePageMeta({
  name: "Titles.connect_us",
});
import { useToast } from "primevue/usetoast";
const toast = useToast();
const axios = useApi();
const route = useRoute();
const router = useRouter();
const center = ref({ lat: 24.093048, lng: 46.84212 }),
  loading = ref(true),
  markers = ref([
    {
      id: "dfsldjl3r",
      position: {
        lat: 24.093048,
        lng: 46.84212,
      },
    },
  ]),
  site_address = ref(""),
  phone = ref(""),
  email = ref(""),
  cs = ref(""),
  follow = ref([]),
  fd = new FormData(),
  first_name = ref(""),
  phone_enter = ref(""),
  email_enter = ref(""),
  message = ref("");

const submit_data = async () => {
  console.log(first_name.value);
  fd.append("name", first_name.value);
  fd.append("phone", phone_enter.value);
  fd.append("email", email_enter.value);
  fd.append("content", message.value);
  axios
    .post("contact-us-store", fd, {
      headers: {
        lang: `${localStorage.getItem("locale") == "en" ? "en" : null}`,
      },
    })
    .then((res) => {
      if (res.data.key == "success") {
        toast.add({
          severity: "success",
          summary: `${res.data.key}`,
          detail: `${res.data.msg}`,
          life: 3000,
        });
        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        toast.add({
          severity: "error",
          summary: `${res.data.key}`,
          detail: `${res.data.msg}`,
          life: 3000,
        });
      }
    });
};
onMounted(() => {
  axios
    .get("contact-us-info", {
      headers: {
        lang: `${localStorage.getItem("locale") == "en" ? "en" : null}`,
      },
    })
    .then((res) => {
      console.log(res.data.data);
      center.value.lng = +res.data.data.site_lng;
      center.value.lat = +res.data.data.site_lat;
      markers.value[0].position.lat = +res.data.data.site_lat;
      markers.value[0].position.lng = +res.data.data.site_lng;
      site_address.value = res.data.data.site_address;
      phone.value = res.data.data.phone;
      email.value = res.data.data.email;
      cs.value = res.data.data.customer_service;
      follow.value = res.data.data.socials;
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
  padding: 30px 40px;
  p {
    font-size: 15px;
    line-height: 2.5 !important;
  }
}
.parag-view {
  label {
    font-size: 16px;
    margin-bottom: 6px;
  }
  background-color: #fff;
  input {
    background-color: var(--main-2);
    font-size: 15px;
    padding: 10px 15px;
    border-radius: 3px;
  }
  textarea {
    background-color: var(--main-2);
    font-size: 15px;
    padding: 10px 15px;
    border-radius: 3px;
    resize: none;
  }
}
.info {
  > span:first-child {
    font-size: 18px;
    padding-bottom: 20px;
  }
  font-size: 14px;
}
.connect-title {
  font-size: 18px !important;
  margin: 0;
  font-weight: 600;
}
.submit_btn {
  background-color: #000000;
  color: #ffffff;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 16px;
  width: 40%;
}
</style>
