<template>
  <v-app-bar app clipped-left color="bgHeaderFooter">
    <v-app-bar-nav-icon
      color="accent"
      @click.stop="$store.dispatch('drawerAction', !$store.state.drawer)">
    </v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-toolbar-title class="mr-12 align-center">
      <img src="../assets/logo.png" style="width: 140px" alt />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-avatar v-on="on" size="36">
          <img src="../assets/user.svg" alt="John" />
        </v-avatar>
      </template>

      <v-list>
        <v-list-item link @click.prevent="signOut">
          <v-list-item-title>Sign Out</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('user', [
      'signOut',
    ]),
  },
  created() {
    // console.log(this);
  },
};
</script>
