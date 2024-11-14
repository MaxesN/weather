<script lang="ts" setup>
import { Chart, ChartData, ChartOptions, ChartType, registerables } from "chart.js";
import { onBeforeUnmount, onMounted, ref, unref, watch } from "vue";

const props = defineProps<{
  type: ChartType;
  data: ChartData<"line">; 
  options?: ChartOptions<ChartType>;
}>();

Chart.register(...registerables);

const canvas = ref<HTMLCanvasElement | null>(null);
let chartInstance: Chart | null = null;

const createChart = () => {
  if (canvas.value) {
    const ctx = canvas.value.getContext("2d");

    if (ctx)
      chartInstance = new Chart(ctx, {
        type: props.type,
        data: unref(props.data),
        options: props.options,
      });
  }
};

onMounted(() => {
  createChart();
});

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy();
  }
});

watch(props, () => {
  if(chartInstance) {
    chartInstance.data = unref(props.data)
    chartInstance.update()
  }
})

</script>

<template>
  <canvas ref="canvas" />
</template>