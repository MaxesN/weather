<script setup lang="ts">
import { useWeather } from "@/entities/weather";
import { fetchUserLocation, fetchWeatherByCoordinate } from "@/shared/api";
import { languages } from "@/shared/config";
import { WeatherCard } from "@/shared/types/weather";
import { loadStateFromLocalStorage } from "@/shared/utils";
import { storeToRefs } from "pinia";
import { onMounted, watch } from "vue";
import { useI18n } from "vue-i18n";
import { RouterView } from "vue-router";

const {locale} = useI18n()

const weatherStore = useWeather() ;
const weatherStoreRef = storeToRefs(weatherStore)

watch(locale, () => {
  localStorage.setItem('locale', locale.value)
})

const initUserWeather = async () => {
  const coordinates = await fetchUserLocation();

  const weather = await fetchWeatherByCoordinate(coordinates.lat, coordinates.lon, locale.value)

  weatherStore.createCard('base', weather)
};


watch(
  weatherStoreRef.favorite,
  (state) => {
    localStorage.setItem("favorite", JSON.stringify(state));
  },
  { deep: true }
);

onMounted(() => {
  if(weatherStoreRef.base.value.length === 0) {
    initUserWeather();
  } 

  weatherStoreRef.favorite.value = loadStateFromLocalStorage<WeatherCard[]>("favorite") || [];
});

</script>

<template>
  <div class="header">
    <RouterLink active-class="active" to="/">{{$t('header.home')}}</RouterLink>
    <RouterLink active-class="active" to="/favorite">{{$t('header.favorite')}}</RouterLink>
    <div>
      <select v-model="$i18n.locale">
      <option v-for="(lang, i) in languages" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
    </div>
  </div>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
}
.header {
  font-size: 24px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
.header a {
  text-decoration: none;
  color: black;
}
.active {
  font-weight: 600;
}
</style>
