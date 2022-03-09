<template>
    <div class="charts">
        <div ref="line"></div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Line } from '@antv/g2plot'
const line = ref(null)

onMounted(() => {
    const data = [
        { year: '1951 年', sales: 38 },
        { year: '1952 年', sales: 52 },
        { year: '1956 年', sales: 61 },
        { year: '1957 年', sales: 145 },
        { year: '1958 年', sales: 48 },
    ]

    const barPlot = new Line(line.value, {
        data,
        xField: 'sales',
        yField: 'year',
        stepType: 'vh',
    })

    barPlot.render()
})
</script>
