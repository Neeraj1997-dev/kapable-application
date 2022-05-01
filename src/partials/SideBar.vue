<template>
  <v-navigation-drawer
    app
    clipped
    width="300"
    mobile-breakpoint="950"
    v-model="$store.state.drawer"
    v-if="menuItems.length > 0"
  >
    <v-list
      v-for="(menu, i) in menuItems"
      :key="i"
    >
      <v-list-item
        v-if="!menu.children"
        link
        :to="menu.to"
      >
        <v-list-item-icon>
          <v-icon>{{menu.icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{menu.title}}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group
        v-if="menu.children"
        append-icon="mdi-chevron-up-circle"
        prepend-icon
        no-action
        :value="false"
      >
        <template v-slot:activator>
          <v-list-item-icon>
            <v-icon>{{menu.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="text-wrap: wrap">{{menu.title}}</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          v-for="(subMenu, i) in menu.children"
          :key="i"
          link
          :to="subMenu.to"
        >
          <v-list-item-icon>
            <v-icon>{{subMenu.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{subMenu.title}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import getMenu from '../constants/menu';

export default {
  data() {
    return {
    };
  },
  computed: {
    menuItems() {
      console.log('=============================neeraj', this.$store.state.user.currentUser);
      return getMenu(this.$store.state.user.currentUser);
    },
  },
};
</script>

<style scoped>
  .v-list{
    padding: 0
  }
  .v-btn--icon.v-size--default .v-icon{
    font-size: 30px;
  }
  .v-application--is-ltr .v-list-group--no-action > .v-list-group__items > .v-list-item{
    padding-left: 30px;
  }
  .v-list-item {
    padding: 5px 10px;
  }
  .v-list-item, .v-list-group {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1),
    0px 4px 5px 0px rgba(0, 0, 0, 0.04),
    0px 1px 10px 0px rgba(0, 0, 0, 0.02);
  }
  .v-list-group .v-list-item {
    box-shadow: none;
  }
  .v-list-group .v-list-item:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }
  .v-list-item--dense .v-list-item__title,
  .v-list-item--dense .v-list-item__subtitle,
  .v-list--dense .v-list-item .v-list-item__title,
  .v-list--dense .v-list-item .v-list-item__subtitle{
    font-size: .9rem;
  }
  .v-application--is-ltr .v-list-item__action:first-child,
  .v-application--is-ltr .v-list-item__icon:first-child{
    margin-right: 10px;
  }
  .theme--light.v-list-item--active {
    color: #e61807
  }
</style>

<style>
.v-list-group .v-list-item {
    padding: 5px 10px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.1),
    0px 4px 5px 0px rgba(0, 0, 0, 0.04),
    0px 1px 10px 0px rgba(0, 0, 0, 0.02);
  }
</style>
