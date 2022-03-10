<template>
    <div class="charts">
        <div ref="lineDom"></div>
    </div>
</template>
<script lang="ts" setup>
import { Line, LineOptions } from '@antv/g2plot'

const lineDom = ref<HTMLElement>()

const props = defineProps({
    data: {
        required: true,
        type: Array as () => LineOptions['data'],
    },
})

onMounted(() => {
    const barPlot = new Line(lineDom.value, <LineOptions>{
        data: props.data,
        xField: 'sales',
        yField: 'year',
        stepType: 'vh',
    })
    barPlot.render()
})
</script>
