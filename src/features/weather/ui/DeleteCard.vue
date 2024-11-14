<script setup lang="ts">
import { useWeather } from "@/entities/weather";
import { List } from "@/shared/types/weather";
import { Dialog } from "@/shared/ui/Dialog";
import { ref } from "vue";

const { id, where } = defineProps<{
  where: List;
  id: string;
}>();

const isDialog = ref(false);

const handlerDialog = () => {
  isDialog.value = !isDialog.value;
};
const { deleteCard } = useWeather();

const handlerDeleteCard = () => {
  deleteCard(where, id);
  handlerDialog();
};
</script>

<template>
  <button @click="handlerDialog">{{ $t('weather.deleteCard') }}</button>
  <Dialog :is-dialog="isDialog" v-on:close="handlerDialog">
    <p>{{ $t('weather.areYouSure') }}</p>
    <div class="actions">
      <button @click="handlerDeleteCard">{{$t('weather.yes')}}</button>
      <button @click="handlerDialog">{{$t('weather.no')}}</button>
    </div>
  </Dialog>
</template>

<style scoped>
.actions {
  display: flex;
  gap: 15px;
}

.actions button {
  width: 100%;
}
</style>
