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
      <form class="main-form" @submit.prevent="checkValidation">
        <div class="row justify-content-between">
          <div class="col-12 col-md-4 mb-4">
            <div class="d-flex flex-column input-div">
              <label for="father"
                >{{ $t("jobs.first_name")
                }}<span class="hint-red">*</span></label
              >
              <input
                id="first_name"
                class="input-main"
                :data-valid="`${$t('jobs.first_name')}`"
                type="text"
                :placeholder="`${$t('jobs.first_name')}`"
                v-model="first_name"
              />
            </div>
          </div>
          <div class="col-12 col-md-4 mb-4">
            <div class="d-flex flex-column input-div">
              <label for="father_name"
                >{{ $t("jobs.father_name")
                }}<span class="hint-red">*</span></label
              >
              <input
                id="father_name"
                class="input-main"
                :data-valid="`${$t('jobs.father_name')}`"
                type="text"
                :placeholder="`${$t('jobs.father_name')}`"
                v-model="father_name"
              />
            </div>
          </div>
          <div class="col-12 col-md-4 mb-4">
            <div class="d-flex flex-column input-div">
              <label for="family_name"
                >{{ $t("jobs.family_name")
                }}<span class="hint-red">*</span></label
              >
              <input
                id="family_name"
                class="input-main"
                :data-valid="`${$t('jobs.family_name')}`"
                type="text"
                :placeholder="`${$t('jobs.family_name')}`"
                v-model="family_name"
              />
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <label for="type"
            >{{ $t("jobs.gender") }}<span class="hint-red">*</span></label
          >
          <div class="d-flex column gap-4">
            <div class="d-flex" v-for="i in gender" :key="i.id">
              <input
                :id="'gender_' + i.id"
                class="input-main"
                name="gender"
                :data-valid="`${$t('jobs.gender')}`"
                type="radio"
                ref="gender_select"
                :value="i.id"
              />
              <label class="m-1" :for="'gender_' + i.id">{{ i.title }}</label>
            </div>
          </div>
        </div>
        <div class="row justify-content-start">
          <div class="col-12 col-md-4 mb-4">
            <div class="d-flex flex-column input-div">
              <label for="nationality"
                >{{ $t("jobs.nationality")
                }}<span class="hint-red">*</span></label
              >
              <select ref="selectedCountry"    class="input-main" :data-valid="`${$t('jobs.nationality')}`">
                <option selected class="d-none" value="">
                  {{ $t("jobs.select_nationality") }}
                </option>
                <option v-for="country in nationalities" :value="country.id">
                  {{ country.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <label for="status"
            >{{ $t("jobs.status") }}<span class="hint-red">*</span></label
          >
          <div class="d-flex column gap-4">
            <div class="d-flex" v-for="i in social_status" :key="i.id">
              <input
                :id="'status_' + i.id"
                name="status"
                type="radio"
                ref="status_select"
                :value="i.id"
              />
              <label class="m-1" :for="'status_' + i.id">{{ i.title }}</label>
            </div>
          </div>
        </div>
        <div class="row justify-content-start">
          <div class="col-12 col-md-4 mb-4">
            <div class="d-flex flex-column input-div">
              <label
                >{{ $t("jobs.city") }}<span class="hint-red">*</span></label
              >
              <input
                id="birth_city"
                :data-valid="`${$t('jobs.city')}`"
                   class="input-main"
                type="text"
                :placeholder="`${$t('jobs.birth_city')}`"
                v-model="birth_city"
              />
            </div>
          </div>
          <div class="col-12 col-md-4 mb-4">
            <div class="d-flex flex-column input-div">
              <label for="exp_years"
                >{{ $t("jobs.exp_years")
                }}<span class="hint-red">*</span></label
              >
              <input
                id="exp_years"
                :data-valid="`${$t('jobs.exp_years')}`"
                class="input-main"
                type="number"
                :placeholder="`${$t('jobs.enter_exp_years')}`"
                v-model="exp_years"
              />
            </div>
          </div>
        </div>
        <div class="row justify-content-start">
          <div class="col-12 col-md-4 mb-4">
            <div class="d-flex flex-column input-div">
              <label for="father"
                >{{ $t("jobs.work_city")
                }}<span class="hint-red">*</span></label
              >
              <select ref="workCity"    class="input-main" :data-valid="`${$t('jobs.work_city')}`">
                <option class="d-none" selected value="">
                  {{ `${$t("jobs.select_city")}` }}
                </option>
                <option v-for="i in cities" :value="i.id">
                  {{ i.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-12 col-md-4 mb-4">
            <div class="d-flex flex-column input-div">
              <label for="department"
                >{{ $t("jobs.department")
                }}<span class="hint-red">*</span></label
              >
              <select ref="select_department"    class="input-main" :data-valid="`${$t('jobs.select_department')}`">
                <option class="d-none" selected value="">
                  {{ `${$t("jobs.select_department")}` }}
                </option>
                <option v-for="i in departments" :value="i.id">
                  {{ i.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="row justify-content-start">
          <div class="col-12 col-md-4 mb-4">
            <div
              class="d-flex flex-column input-div"
              style="direction: rtl !important"
            >
              <label
                >{{ $t("jobs.phone") }}<span class="hint-red">*</span></label
              >
              <div class="d-flex">
                <input
                  v-model="phone"
                  class="input-main"
                  :data-valid="`${$t('jobs.phone')}`"
                  id="phone"
                  type="number"
                  :placeholder="`${$t('jobs.enter_phone')}`"
                  style="
                    border-radius: 0 !important;
                    width: 60%;
                    border-start-start-radius: 3px !important;
                    border-end-start-radius: 3px !important;
                  "
                />
                <select
                  ref="country_extention"
                  class="border-0"
                  style="
                    width: 40%;
                    border-radius: 0 !important;
                    border-end-end-radius: 3px !important;
                    border-start-end-radius: 3px !important;
                    text-align: center;
                  "
                >
                  <option class="d-none" selected value="">966</option>
                  <option value="vv">966</option>
                  <option value="vv">122</option>
                  <option value="vv">54</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-start">
          <div class="col-12 col-md-4 mb-4">
            <div class="d-flex flex-column input-div">
              <label
                >{{ $t("jobs.email") }}<span class="hint-red">*</span></label
              >
              <input
                v-model="email"
                :data-valid="`${$t('jobs.email')}`"
                class="input-main"
                id="email"
                type="email"
                :placeholder="`${$t('jobs.enter_email')}`"
              />
            </div>
          </div>
        </div>
        <h5 class="mb-4">{{ $t("jobs.birth_date") }}</h5>
        <div class="row justify-content-start">
          <div class="col-12 col-md-4 mb-4">
            <div class="d-flex flex-column input-div">
              <label
                >{{ $t("jobs.birth_day")
                }}<span class="hint-red">*</span></label
              >
              <select ref="birth_day"    class="input-main" :data-valid="`${$t('jobs.birth_date')}`">
                <option class="d-none" selected value="">
                  {{ `${$t("jobs.choose_birth_day")}` }}
                </option>
                <option v-for="i in days_arr()" :value="i">{{ i }}</option>
              </select>
            </div>
          </div>
          <div class="col-12 col-md-4 mb-4">
            <div class="d-flex flex-column input-div">
              <label
                >{{ $t("jobs.birth_month")
                }}<span class="hint-red">*</span></label
              >
              <select ref="birth_month" class="input-main" :data-valid="`${$t('jobs.birth_date')}`">
                <option class="d-none" selected value="">
                  {{ `${$t("jobs.choose_birth_month")}` }}
                </option>
                <option v-for="i in 12" :value="i">{{ i }}</option>
              </select>
            </div>
          </div>
          <div class="col-12 col-md-4 mb-4">
            <div class="d-flex flex-column input-div">
              <label
                >{{ $t("jobs.birth_year")
                }}<span class="hint-red">*</span></label
              >
              <select ref="birth_year" class="input-main" :data-valid="`${$t('jobs.birth_date')}`">
                <option class="d-none" selected value="">
                  {{ `${$t("jobs.choose_birth_year")}` }}
                </option>
                <option v-for="i in 60" :value="1964 + i">
                  {{ 1964 + i }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="row justify-content-start">
          <div class="col-12 col-md-4 mb-4">
            <div class="d-flex flex-column input-div">
              <label
                >{{ $t("jobs.education")
                }}<span class="hint-red">*</span></label
              >
              <input
                v-model="education"
                   class="input-main"
                   :data-valid="`${$t('jobs.education')}`"
                id="education"
                type="text"
                :placeholder="`${$t('jobs.enter_education')}`"
              />
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <label
            >{{ $t("jobs.work_saudi") }}<span class="hint-red">*</span></label
          >
          <div class="d-flex column gap-4">
            <div class="d-flex">
              <input
                name="work_saudi_yesno"
                checked
                type="radio"
                id="saudi-yes"
                value="1"
                v-model="work_saudi_yesno"
              />
              <label class="m-1" for="saudi-yes">{{ $t("jobs.yes") }}</label>
            </div>
            <div>
              <input
                name="work_saudi_yesno"
                type="radio"
                id="saudi-no"
                value="0"
                v-model="work_saudi_yesno"
              />
              <label class="m-1" for="saudi-no">{{ $t("jobs.no") }}</label>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <label for="relatives"
            >{{ $t("jobs.relatives") }}<span class="hint-red">*</span></label
          >
          <div class="d-flex column gap-4">
            <div class="d-flex">
              <input
                name="relative"
                type="radio"
                id="relative-yes"
                v-model="relative"
                checked
                value="1"
              />
              <label class="m-1" for="relative-yes">{{ $t("jobs.yes") }}</label>
            </div>
            <div>
              <input
                name="relative"
                type="radio"
                id="relative-no"
                v-model="relative"
                value="0"
              />
              <label class="m-1" for="relative-no">{{ $t("jobs.no") }}</label>
            </div>
          </div>
        </div>

        <div class="row mb-4">
          <label
            >{{ $t("jobs.work_currently")
            }}<span class="hint-red">*</span></label
          >
          <div class="d-flex column gap-4">
            <div class="d-flex">
              <input
                name="currently"
                type="radio"
                id="currently-yes"
                v-model="currently_work"
                checked
                value="1"
              />
              <label class="m-1" for="currently-yes">{{
                $t("jobs.yes")
              }}</label>
            </div>
            <div>
              <input
                name="currently"
                type="radio"
                id="currently-no"
                v-model="currently_work"
                value="0"
              />
              <label class="m-1" for="currently-no">{{ $t("jobs.no") }}</label>
            </div>
          </div>
        </div>
        <div class="row justify-content-start">
          <div class="col-12 col-md-4 mb-4">
            <div class="d-flex flex-column input-div">
              <label for="father"
                >{{ $t("jobs.vacancies") }}
                <span class="hint-red">*</span></label
              >
              <select ref="hearAboutThisJob_select"    class="input-main" :data-valid="`${$t('jobs.method')}`">
                <option class="d-none" selected value="">
                  {{ `${$t("jobs.method")}` }}
                </option>
                <option v-for="i in hearAboutThisJob" :value="i.id">
                  {{ i.question }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="row justify-content-start">
          <div class="col-12 mb-4">
            <div class="d-flex flex-column input-div">
              <label>{{ $t("jobs.cv") }}<span class="hint-red">*</span></label>
              <input
                type="file"
                id="file"
                @change="view_file"
                class="position-relative"
              />
            </div>
          </div>
        </div>
        <div class="row justify-content-start">
          <div class="col-12 mb-4">
            <div class="d-flex flex-column input-div">
              <label
                >{{ $t("jobs.photo") }}<span class="hint-red">*</span></label
              >
              <input
                type="file"
                id="file_img"
                @change="view_image"
                class="position-relative"
                accept="image/*"
              />
              <span class="hint-red" v-if="not_img">{{
                $t("jobs.pls_image")
              }}</span>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column align-items-center">
          <label class="mb-4" for="confirm"
            ><input class="m-1" type="radio" name="confirm" id="confirm" />أؤكد
            أن المعلومات المذكورة أعلاه كاملة وصحيحة وأن أي معلومات غير صحيحة أو
            مضللة تعطي صاحب العمل الحق في إنهاء العقد مستقبلًا</label
          >
          <button type="submit" class="submit_btn">
            {{ $t("jobs.send") }}
          </button>
        </div>
      </form>
    </div>
    <Toast />
  </div>
</template>

<script setup>
const days_arr = () => {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
};
// import { useToast } from "primevue/usetoast";
import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });
const toast = useToast();

const axios = useApi();
const route = useRoute();
const router = useRouter();

const cities = ref([]),
  departments = ref([]),
  gender = ref([]),
  hearAboutThisJob = ref([]),
  nationalities = ref([]),
  validarray = ref([]),
  social_status = ref([]);

const selectedCountry = ref(null),
  workCity = ref(null),
  birth_day = ref(null),
  birth_month = ref(null),
  birth_year = ref(null),
  hearAboutThisJob_select = ref(null),
  first_name = ref(""),
  father_name = ref(""),
  family_name = ref(""),
  gender_select = ref(null),
  status_select = ref(null),
  phone = ref(""),
  email = ref(""),
  education = ref(""),
  work_saudi_yesno = ref(""),
  relative = ref(""),
  currently_work = ref(""),
  birth_city = ref(""),
  select_department = ref(null),
  exp_years = ref(),
  error_msg = ref("");

const fd = new FormData();
definePageMeta({
  name: "Titles.jobs",
});
const not_img = ref(false);
const view_file = (e) => {
  fd.append("cv", e.target.files[0]);
};
const view_image = (e) => {
  if (e.target.files[0].type.includes("image/") == false) {
    not_img.value = true;
  } else {
    not_img.value = false;
    fd.append("image", e.target.files[0]);
  }
};
function checkValidation(){
      validarray.value = []
      let allInputs = document.querySelectorAll('.input-main');
      for(let i = 0 ; i < allInputs.length ; i++){
        if(allInputs[i].value.trim() == '' || allInputs[i].value.trim() == null){
          validarray.value.push(allInputs[i].dataset.valid)
        }
      }

      
      if(validarray.value.length){
        toast.add({
            severity: "error",
            detail: `${validarray.value[0] + ' ' + t("Titles.req")} `,
            life: 3000,
        });

      } else{
        submit_data()
      }
      

}
const submit_data = async () => {


  
  for (let i = 0; i < gender_select.value.length; i++) {
    if (gender_select.value[i].checked == true) {
      fd.append("gender", gender_select.value[i].value);
    }
    if (status_select.value[i].checked == true) {
      fd.append("social_status", status_select.value[i].value);
    }
  }
  fd.append("nationality_id", selectedCountry.value.value);
  fd.append("birth_day", birth_day.value.value);
  fd.append("birth_month", birth_month.value.value);
  fd.append("birth_year", birth_year.value.value);
  fd.append("hear_about_this_job_id", hearAboutThisJob_select.value.value);
  fd.append("city_work_id", workCity.value.value);
  fd.append("department_id", select_department.value.value);
  fd.append("first_name", first_name.value);
  fd.append("middle_name", father_name.value);
  fd.append("last_name", family_name.value);
  fd.append("phone", phone.value);
  fd.append("email", email.value);
  fd.append("education", education.value);
  fd.append("is_working_for_jawaher", work_saudi_yesno.value);
  fd.append("is_relative_works_for_jawaher", relative.value);
  fd.append("is_working", currently_work.value);
  fd.append("city_born", birth_city.value);
  fd.append("experience_years", exp_years.value);
  axios
    .post("job-request-store", fd, {
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
    .get("job-request-data", {
      headers: {
        lang: `${localStorage.getItem("locale") == "en" ? "en" : null}`,
      },
    })
    .then((res) => {
    
      cities.value = res.data.data.cities;
      departments.value = res.data.data.departments;
      gender.value = res.data.data.gender;
      hearAboutThisJob.value = res.data.data.hearAboutThisJob;
      nationalities.value = res.data.data.nationalities;
      social_status.value = res.data.data.social_status;
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
    font-size: 14px;
    line-height: 2;
  }
}
label {
  font-size: 16px;
  margin-bottom: 6px;
}
.input-div {
  input {
    font-size: 15px;
    background-color: #ececec;
    padding: 10px 15px;
    border-radius: 3px;
  }
  select {
    font-size: 15px;
    background-color: var(--main-2);
    padding: 10px 15px;
    border-radius: 3px;
    border: 2px solid var(--main-bg);
  }
}
input[type="file"]::file-selector-button {
  display: none;
}

input[type="file"]::-webkit-file-upload-button {
  display: none;
}
#file,
#file_img {
  &::before {
    html[lang="ar"] & {
      content: "اختر ملف";
      left: 0;
    }
    html[lang="en"] & {
      content: "Add File";
      right: 0;
    }
    position: absolute;
    top: 0;
    height: 100%;
    width: 20%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #000000;
    color: #fff;
    border-radius: 3px;
    box-shadow: 0px 0px 2px #000000;
    font-size: 13px;
  }
}
.submit_btn {
  background-color: #000000;
  color: #ffffff;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 16px;
  width: 40%;
}
input[type="radio"] {
  accent-color: #000;
}
</style>
