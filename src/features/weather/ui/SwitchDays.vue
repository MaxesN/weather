<script lang="ts" setup>
import { useWeather } from "@/entities/weather";
import { List, WeatherCardMode } from "@/shared/types/weather";

const { id, where, mode } = defineProps<{
  id: string;
  where: List;
  mode: WeatherCardMode
}>();

const { switchDays } = useWeather();
</script>

<template>
  <button @click="switchDays(where, id)">{{ mode === '1day' ? $t('weather.oneDays') : $t('weather.fiveDays') }}</button>
</template>
