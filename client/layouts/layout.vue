<template>
    <a-layout>
      <a-layout-header class="header">
        <p style="color: #fff; text-align: right;" @click="logOut">Log out</p>
      </a-layout-header>
      <a-layout>
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            v-model:selectedKeys="selectedKeys"
            mode="inline"
            :style="{ height: '100%', borderRight: 0 }"
          >
          <template v-for="item in menuList" :key="item.key">
            <template v-if="!item.children">
              <router-link :to="{ name: item.routeName }">
                <a-menu-item :key="item.key" class="app-layout__menu-item">
                  <span slot="title">
                    {{ item.title }}
                  </span>
                </a-menu-item>
              </router-link>
            </template>
          </template>
          </a-menu>
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
          <a-layout-content
            :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
          >
        <Suspense>
          <template #fallback>
            <div>loading</div>
          </template>
          <nuxt-page />
        </Suspense>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </template>
  <script setup>
  const router = useRouter();
  const selectedKeys = ref(['1']);
  const menuList = [{
    title: 'Home',
    routeName: "home",
    _2lightRouteNames: ["home"]
  },
  {
    title: 'Quản lý KLTN/CĐTN',
    routeName: "manager",
    _2lightRouteNames: ["manager"]
  },
]
watch(
  () => router.currentRoute.value,
  () => {
    setSelectedMenu();
  }
);

watch(
  () => menuList.value,
  () => {
    setSelectedMenu();
  }
);

onMounted(() => {
  setSelectedMenu();
});
const updateHead = (menuData = {}) => {
  useHead({
    title: menuData.title,
  });
};

const setSelectedMenu = () => {
  const currentMenuItem = find(menuList.value, (item) =>
    item._2lightRouteNames.includes(router.currentRoute.value.name)
  );
  updateHead(currentMenuItem);
  selectedKeys.value = [currentMenuItem?.key];
};

const logOut = () => {
    return navigateTo({
      name: "login",
    });
}
  </script>
  <style scoped>
  #components-layout-demo-top-side-2 .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
  }
  
  .ant-row-rtl #components-layout-demo-top-side-2 .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }
  
  .site-layout-background {
    background: #fff;
  }
  </style>