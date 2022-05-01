<template>
  <v-footer app color="bgHeaderFooter" style="font-size: .8rem">
    Copyright 2022 - Kapable.
    <v-spacer></v-spacer>
    <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
      <v-icon>mdi-circle-half-full</v-icon>
    </v-btn>
  </v-footer>
</template>
