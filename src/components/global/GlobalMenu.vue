<template>
  <div class="flex h-full flex-col pt-2">
    <qu-menu
      ref="menuRef"
      :active-name="activeName"
      :open-names="openMenuNames"
      class="min-h-0 flex-1 overflow-auto"
      v-show="!isCollapsed"
      @on-select="handleSelect"
    >
      <qu-submenu v-for="menu in menuList" :key="menu.name" :name="menu.name">
        <template v-slot:title>
          <SvgIcon :name="menu.name" class="hover:text-[#0095B6]"></SvgIcon>
          {{ menu.meta.navTitle }}
        </template>
        <qu-menu-item
          v-for="item in menu.children"
          :key="item.name"
          :name="item.name"
        >
          {{ item.meta.navTitle }}</qu-menu-item
        >
      </qu-submenu>
    </qu-menu>
    <div
      v-show="isCollapsed"
      class="flex min-h-0 flex-1 flex-col items-center gap-4 border-r border-solid border-[#eee]"
    >
      <SvgIcon
        v-for="menu in menuList"
        :title="menu.meta.navTitle"
        :key="menu.name"
        :name="menu.name"
        class="cursor-pointer text-xl hover:text-[#0095B6]"
        @click="handleClickIcon(menu.name)"
      ></SvgIcon>
    </div>
    <div
      :class="`status border-r border-t border-solid border-[#eee] py-3 ${isCollapsed ? 'px-3' : 'pl-6'} `"
    >
      <SvgIcon
        :name="isCollapsed ? 'menu-expand' : 'menu-collapse'"
        class="cursor-pointer text-xl"
        @click="isCollapsed = !isCollapsed"
      ></SvgIcon>
    </div>
  </div>
</template>

<script setup lang="ts">
  import main from "@/router/module/main"
  import { nextTick, ref } from "vue"
  import { useRoute, useRouter, type RouteRecordName } from "vue-router"
  import SvgIcon from "../svgIcon/SvgIcon.vue"
  const isCollapsed = ref(false)
  const menuRef = ref()
  const menuList = main[0].children

  const router = useRouter()
  const route = useRoute()

  const openMenuNames = ref<string | RouteRecordName[]>([
    route.matched[1].name || ""
  ])
  const activeName = ref(route.name || "")
  const handleSelect = (name: string) => {
    router.push({ name })
  }
  const handleClickIcon = (name: string) => {
    isCollapsed.value = false
    openMenuNames.value = [name]
    nextTick(() => {
      menuRef.value.updateOpened()
    })
  }
</script>

<style lang="scss" scoped>
  .status {
    box-shadow: 0px 1px 0px 0px #f0f0f0 inset;
  }
  :deep(.qu-menu-item-selected) {
    color: #0095b6 !important;
    border-right: 2px solid #0095b6 !important;
    background: #ebf7f9 !important;
    font-weight: 500;
  }
  :deep(.qu-menu-item) {
    color: #333a3b;
    &:hover {
      color: #0095b6 !important;
      background: #ebf7f9 !important;
    }
  }

  :deep(.qu-menu-submenu-title) {
    color: #333a3b;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
    .qu-menu-submenu-title-icon {
      color: #333a3b;
    }
    &:hover {
      color: #0095b6 !important;
    }
  }
</style>
