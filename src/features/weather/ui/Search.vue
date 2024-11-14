<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useWeather } from "@/entities/weather";
import { City } from "@/shared/types";
import { Delay } from "@/shared/utils";
import { ref, watch } from "vue";
import { fetchCities, fetchWeatherByCoordinateByNameCity } from "../../../shared/api";
import loader from '/loader.svg?url'


const {id} = defineProps<{id: string}>()

const isFocus = ref(false);
const search = ref("");
const cities = ref<City[]>();
const selectedCity = ref<City>();
const isLoading = ref(false)


const {locale} = useI18n()
const { changeCity } = useWeather()

const delay = new Delay(1500);

const handlerFindCities = async () => {
  const foundCities = await fetchCities(search.value)
  cities.value = foundCities
  isLoading.value = false
}

const handlerSelectedCity = async (city: City) => {
  search.value = city.name;
  selectedCity.value = city;

  const data = await fetchWeatherByCoordinateByNameCity(city.name, city.country.code, locale.value)

  changeCity(id, data)
};

watch(search, () => {
  isLoading.value = true
  delay.start(() => handlerFindCities());
});

</script>

<template>
  <div class="autocomplete-container">
  <div class="loader-container">
    <input
      :placeholder="$t('weather.enterCity')"
      class="autocomplete"
      type="text"
      v-model="search"
      @focus="isFocus = true"
      @blur="isFocus = false"
    />
    <img v-if="isLoading" class="loader" width="18px" :src="loader" alt="">
  </div>
    <div v-if="isFocus && search.length > 0 && cities" class="autocomplete-list">
      <button
        @mousedown="handlerSelectedCity(city)"
        class="autocomplete-item"
        v-for="city in cities"
        :key="city.code"
      >
        <p>{{ city.name }}, {{ city?.state?.name ?? city.country.name }}</p>
      </button>
    </div>
  </div>
  <div></div>
</template>

<style scoped>
.autocomplete-container {
  position: relative;
  max-width: 400px;
  width: 100%;
}

.loader-container {
  position: relative;
}

.loader {
  position: absolute;
  top: 3px;
  right: 0;
}

.autocomplete {
  width: 100%;
  height: 20px;
}

.autocomplete-list {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
}

.autocomplete-item {
  width: 100%;
}
</style>
