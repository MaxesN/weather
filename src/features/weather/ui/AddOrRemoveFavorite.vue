<script setup lang="ts">
import { useWeather } from "@/entities/weather";
import star from "/star.svg?url";
import { List } from "@/shared/types/weather";
import { Dialog } from "@/shared/ui/Dialog";
import { ref } from "vue";

const { id, where } = defineProps<{
  where: List;
  id: string;
}>();

const isDialog = ref(false);

const handlerIsDialog = () => {
  isDialog.value = !isDialog.value;
};

const { addOrRemoveFavorite } = useWeather();

const handlerAddOrRemoveFavorite = () => {
  const error = addOrRemoveFavorite(where, where === "base" ? "favorite" : "base", id);
  if (error) {
    handlerIsDialog();
  }
};
</script>

<template>
  <button @click="handlerAddOrRemoveFavorite">
    <img width="15px" height="15px" :src="star" />{{
      where === "base" ? $t("weather.addFavorite") :  $t("weather.removeFavorite")
    }}
  </button>
  <Dialog :is-dialog="isDialog" v-on:close="handlerIsDialog">
    <p>Please, delete one of the cards to add a new one</p>
  </Dialog>
</template>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px;
}
</style>
