<template>
  <VApp>
    <v-navigation-drawer elevation="0" app floating>
      <v-list nav color="#5e35b1" class="px-6">
        <v-list-item
          prepend-icon="mdi mdi-view-dashboard"
          title="John Leider"
        />
      </v-list>
      <v-list density="comfortable" nav color="#5e35b1" class="px-6">
        <v-list-item
          prepend-icon="mdi-home-city"
          title="Home"
          :to="{ name: 'index' }"
        />
        <v-list-item
          prepend-icon="mdi-account-group-outline"
          title="Login"
          :to="{ name: 'login' }"
        />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar elevation="0" />
    <v-main class="mx-4 ml-lg-1 mr-lg-4">
      <v-container fluid class="rounded-lg bg-grey-lighten-4 page-wrapper">
        <slot /> </v-container
    ></v-main>
  </VApp>
</template>
