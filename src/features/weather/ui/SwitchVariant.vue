<script lang="ts" setup>
import { useWeather } from "@/entities/weather";
import { List, WeatherCardVariant } from "@/shared/types/weather";

const { id, where, variant } = defineProps<{
  id: string;
  where: List;
  variant: WeatherCardVariant;
}>();

const { switchVariant } = useWeather();
</script>

<template>
  <button @click="switchVariant(where, id)">{{ $t(`weather.${variant}`)  }}</button>
</template>
