<template>
  <v-app id="inspire" :style="{backgroundColor: bgColor}">
    <side-bar v-if="$store.state.user.currentUser"></side-bar>
    <top-bar v-if="$store.state.user.currentUser"></top-bar>
    <router-view></router-view>
    <c-footer></c-footer>
  </v-app>
</template>

<script>
import TopBar from './partials/TopBar.vue';
import SideBar from './partials/SideBar.vue';
import CFooter from './partials/Footer.vue';

export default {
  components: {
    TopBar,
    SideBar,
    CFooter,
  },
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
  }),
  computed: {
    bgColor() {
      let color = '#121212';
      if (!this.$vuetify.theme.dark) {
        color = '#f0f0f0';
      }
      return color;
    },
  },
};
</script>
