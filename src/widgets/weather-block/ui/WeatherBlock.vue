<script setup lang="ts">
import { useWeather, WeatherCard } from "@/entities/weather";
import {
  AddCard,
  AddOrRemoveFavorite,
  DeleteCard,
  Search,
  SwitchVariant,
} from "@/features/weather";
import SwitchDays from "@/features/weather/ui/SwitchDays.vue";
import { List } from "@/shared/types/weather";
import { storeToRefs } from "pinia";

const { list } = defineProps<{
  list: List;
}>();

const weatherList = storeToRefs(useWeather())[list];
</script>

<template>
  <div
    v-if="list === 'base' || (list === 'favorite' && weatherList.length)"
    class="container"
  >
    <AddCard v-if="list === 'base'" />
    <div v-for="({ weather, id, mode, variant }, index) in weatherList" :key="id">
      <div class="header">
        <Search v-if="list === 'base'" :id="id" />
        <div class="actions">
          <SwitchVariant :where="list" :id="id" :variant="variant" />
          <SwitchDays :where="list" :id="id" :mode="mode" />
          <DeleteCard :where="list" :id="id" />
          <AddOrRemoveFavorite :where="list" :id="id" />
        </div>
      </div>
      <div>
        <p v-if="weather" class="title">
          {{ weather.city.name }}, {{ weather.city.country }}.
          {{ weather.list[0].dt_txt.split(" ")[0] }}
          {{
            mode === "5day"
              ? `- ${weather.list[weather.list.length - 1].dt_txt.split(" ")[0]}`
              : ""
          }}
        </p>
      </div>
      <div>
        <WeatherCard v-if="weather" v-bind="weather" :mode="mode" :variant="variant" />
        <hr v-if="index !== weatherList.length - 1" />
      </div>
    </div>
  </div>
  <h3 v-else-if="list === 'favorite'">
    There are no cards, please add some cards to your favorite
  </h3>
</template>

<style scoped>
.header {
  display: flex;
  gap: 24px;
  justify-content: space-between;
}

.container {
  border: solid 1px gray;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.title {
  font-size: 20px;
}

.actions {
  display: flex;
  gap: 10px;
  text-wrap: nowrap;
}

hr {
  margin-top: 30px;
}

@media (max-width: 767px) {
  .header {
    flex-direction: column;
  }

  @media (max-width: 420px) {
    .actions {
      flex-direction: column;
    }
  }
}
</style>
