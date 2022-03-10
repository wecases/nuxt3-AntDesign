<template>
    <div class="w-1/2 my-0 mx-auto">
        <charts-line :data="data" />
        <div class="text-red-600">
            <span>x:</span>
            <span>{{ x }}</span>
        </div>
        <div class="text-red-600">
            <span>y:</span>
            <span>{{ y }}</span>
        </div>
        <div class="text-green-600">
            <span>user:</span>
            <span>{{ user.username }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
const { x, y } = useMouse()
const data = [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 145 },
    { year: '1958 年', sales: 48 },
]

const user = userStore() // use pinia is esay
</script>
