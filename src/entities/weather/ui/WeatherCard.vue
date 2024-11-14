<script setup lang="ts">
import { ChartData } from "chart.js";
import { WeatherCardMode, WeatherCardVariant, WeatherData } from "@/shared/types/weather";
import Chart from "@/shared/ui/Chart/Chart.vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const weatherData = defineProps<
  WeatherData & { mode: WeatherCardMode; variant: WeatherCardVariant }
>();

const {t} = useI18n()

const filteredByModeWeatherData = computed(() => {
  return {
    ...weatherData,
    list: weatherData.mode === "1day" ? weatherData.list.slice(0, 9) : weatherData.list,
  };
});

const filteredByTimeOfDayWeatherData = computed(() => {
  return {
    ...filteredByModeWeatherData.value,
    list: filteredByModeWeatherData.value.list.filter((item) => {
      const hour = new Date(item.dt * 1000).getHours();
      if (weatherData.variant === "day") {
        return hour >= 6 && hour < 18;
      } else {
        return hour < 6 || hour >= 18;
      }
    }),
  };
});

const lineChartData = computed<ChartData<"line">>(() => {
  return {
    labels: filteredByTimeOfDayWeatherData.value.list.map((item) =>
      new Date(item.dt * 1000).toLocaleString()
    ),
    datasets: [
      {
        label:  t('weather.temperature'),
        data: filteredByTimeOfDayWeatherData.value.list.map(
          (item) => +item.main.temp.toFixed(1)
        ),
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
        borderWidth: 3,
      },
      {
        label:  t('weather.feelsLike'),
        data: filteredByTimeOfDayWeatherData.value.list.map(
          (item) => item.main.feels_like
        ),
        borderColor: "rgba(153, 102, 255, 1)",
        fill: false,
        borderWidth: 3,
      },
    ],
  };
});

const feelLike = computed(
  () =>
    filteredByTimeOfDayWeatherData.value.list.reduce((a, b) => {
      return a + b.main.feels_like;
    }, 0) / filteredByTimeOfDayWeatherData.value.list.length || 0
);

const temperature = computed(
  () =>
    filteredByTimeOfDayWeatherData.value.list.reduce((a, b) => {
      return a + b.main.temp;
    }, 0) / filteredByTimeOfDayWeatherData.value.list.length || 0
);
</script>
<template>
  <div class="weather-info">
    <p>
      {{ $t('weather.temperature') }}:
      {{
        mode === "1day"
          ? filteredByTimeOfDayWeatherData.list[0].main.temp.toFixed(1)
          : temperature.toFixed(1)
      }}°C
    </p>
    <p>
      {{ $t('weather.feelsLike') }}:
      {{
        mode === "1day"
          ? filteredByTimeOfDayWeatherData.list[0].main.feels_like.toFixed(1)
          : feelLike.toFixed(1)
      }}°C. {{ filteredByTimeOfDayWeatherData.list[0].weather[0].description }}.
    </p>
    <div>
      <p>
        {{ $t('weather.wind') }}: {{ filteredByTimeOfDayWeatherData.list[0].wind.speed }}m/s E.   {{ $t('weather.pressure') }}:{{
          filteredByTimeOfDayWeatherData.list[0].main.pressure
        }}hPa.
      </p>
      <p>
        {{ $t('weather.humidity') }}: {{ filteredByTimeOfDayWeatherData.list[0].main.humidity }}% {{ $t('weather.visibility') }}:
        {{ filteredByTimeOfDayWeatherData.list[0].visibility / 1000 }}km
      </p>
    </div>
  </div>
  <p class="title-forecast">
    {{ weatherData.mode === "1day" ? $t('weather.forecast1day') :  $t('weather.forecast5days') }}:
  </p>
  <div class="chart-scroll-container">
    <div class="chart-container">
      <Chart type="line" :data="lineChartData" />
    </div>
  </div>
</template>

<style scoped>
.weather-info p {
  font-size: 20px;
  line-height: 10px;
}

.title-forecast {
  font-size: 20px;
  margin-top: 40px;
}

.chart-container {
  justify-content: center;
  margin: 0 auto;
  width: 800px;
  height: 400px;
  position: relative;
}

.chart-scroll-container {
  width: 100%;
  overflow: auto;
}

@media (max-width: 767px) {
  p {
    font-size: 14px !important;
  }
}
</style>
