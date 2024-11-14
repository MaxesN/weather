<script setup lang="ts">
import { useWeather } from "@/entities/weather";

const { createCard } = useWeather();
</script>

<template>
  <button @click="createCard('base')">{{ $t('weather.addCard') }}</button>
</template>
