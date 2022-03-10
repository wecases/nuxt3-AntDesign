<template>
    <a-layout class="h-screen" has-sider>
        <a-layout-sider hide-trigger collapsible :collapsed="collapsed">
            <div class="logo" />
            <a-menu
                :defaultOpenKeys="['1']"
                :defaultSelectedKeys="['0_3']"
                :style="{ width: '100%' }"
                @menuItemClick="onClickMenuItem"
            >
                <a-menu-item key="0_1" disabled>
                    <a-icon-home />
                    Menu 1
                </a-menu-item>
                <a-menu-item key="0_2">
                    <a-icon-calendar />
                    Menu 2
                </a-menu-item>
                <a-menu-item key="0_3">
                    <a-icon-calendar />
                    Menu 3
                </a-menu-item>
                <a-menu-sub-menu key="1">
                    <template #title>
                        <span><a-icon-calendar />Navigation 1</span>
                    </template>
                    <a-menu-item key="1_1">Menu 1</a-menu-item>
                    <a-menu-item key="1_2">Menu 2</a-menu-item>
                    <a-menu-sub-menu key="2" title="Navigation 2">
                        <a-menu-item key="2_1">Menu 1</a-menu-item>
                        <a-menu-item key="2_2">Menu 2</a-menu-item>
                    </a-menu-sub-menu>
                    <a-menu-sub-menu key="3" title="Navigation 3">
                        <a-menu-item key="3_1">Menu 1</a-menu-item>
                        <a-menu-item key="3_2">Menu 2</a-menu-item>
                        <a-menu-item key="3_3">Menu 3</a-menu-item>
                    </a-menu-sub-menu>
                </a-menu-sub-menu>
                <a-menu-sub-menu key="4">
                    <template #title>
                        <span><a-icon-calendar />Navigation 4</span>
                    </template>
                    <a-menu-item key="4_1">Menu 1</a-menu-item>
                    <a-menu-item key="4_2">Menu 2</a-menu-item>
                    <a-menu-item key="4_3">Menu 3</a-menu-item>
                </a-menu-sub-menu>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="padding-left: 20px">
                <a-button shape="round" @click="onCollapse">
                    <a-icon-caret-right v-if="collapsed" />
                    <a-icon-caret-left v-else />
                </a-button>
            </a-layout-header>
            <a-layout style="padding: 0 24px">
                <a-breadcrumb :style="{ margin: '16px 0' }">
                    <a-breadcrumb-item>Home</a-breadcrumb-item>
                    <a-breadcrumb-item>List</a-breadcrumb-item>
                    <a-breadcrumb-item>App</a-breadcrumb-item>
                </a-breadcrumb>
                <a-layout-content><nuxt-page /></a-layout-content>
                <a-layout-footer>Footer</a-layout-footer>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script lang="ts" setup>
import '@arco-design/web-vue/dist/arco.css'
import { Message } from '@arco-design/web-vue'
const collapsed = ref(false)
const onCollapse = () => {
    collapsed.value = !collapsed.value
}
const onClickMenuItem = (key) => {
    Message.info({ content: `You select ${key}`, showIcon: true })
}
</script>
