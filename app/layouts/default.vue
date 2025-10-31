<script setup lang="ts">
import { SettingsIcon, LogoutIcon, UserIcon } from "vue-tabler-icons";
import Logo from "./component/Logo.vue";
import { sideMenu } from "~/const/sideMenu";
import NavGroup from "./component/NavGroup.vue";
import NavCollapse from "./component/NavCollapse.vue";
import NavItem from "./component/NavItem.vue";
const { clearTokens } = useAuthToken();
const logout = () => {
  clearTokens();
  navigateTo({ name: "login" });
};
</script>
<template>
  <VApp>
    <v-navigation-drawer elevation="0" app floating>
      <div class="pa-5">
        <Logo />
      </div>
      <v-list class="pa-4">
        <template v-for="(item, i) in sideMenu" :key="i">
          <NavGroup v-if="item.header" :key="item.title" :item="item" />
          <v-divider v-else-if="item.divider" class="my-3" />
          <NavCollapse v-else-if="item.children" :item="item" :level="0" />
          <NavItem v-else :item="item" :level="0" />
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar elevation="0" height="80">
      <template #append>
        <v-menu :close-on-content-click="false">
          <template #activator="{ props }">
            <v-btn
              class="profileBtn text-primary"
              color="lightprimary"
              variant="flat"
              rounded="pill"
              v-bind="props"
            >
              <v-avatar size="30" class="mr-2 py-2">
                <img src="@/assets/images/profile/user-round.svg" alt="Julia" />
              </v-avatar>
              <SettingsIcon stroke-width="1.5" />
            </v-btn>
          </template>
          <v-sheet rounded="xl" width="330" elevation="12">
            <div class="pa-4">
              <h4 class="mb-n1">
                Good Morning, <span class="font-weight-regular">John Doe</span>
              </h4>
              <span class="text-caption text-medium-emphasis"
                >Project admin</span
              >
              <v-divider class="mt-3" />
              <v-list>
                <v-list-item color="secondary" rounded="md">
                  <template #prepend>
                    <SettingsIcon size="20" class="mr-2" />
                  </template>

                  <v-list-item-title class="text-subtitle-2">
                    Account Settings</v-list-item-title
                  >
                </v-list-item>

                <v-list-item color="secondary" rounded="md">
                  <template #prepend>
                    <UserIcon size="20" class="mr-2" />
                  </template>

                  <v-list-item-title class="text-subtitle-2">
                    Social Profile</v-list-item-title
                  >

                  <template #append>
                    <v-chip
                      color="warning"
                      class="text-white"
                      text="02"
                      variant="flat"
                      size="small"
                    />
                  </template>
                </v-list-item>

                <v-list-item rounded="lg" @click.prevent="logout">
                  <template #prepend>
                    <LogoutIcon size="20" class="mr-2" />
                  </template>

                  <v-list-item-title class="text-subtitle-2">
                    Logout</v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </div>
          </v-sheet>
        </v-menu>
      </template>
    </v-app-bar>
    <v-main class="mx-4 ml-lg-1 mr-lg-4">
      <v-container fluid class="rounded-xl page-wrapper">
        <slot />
      </v-container>
      <v-container fluid class="pt-0">
        <v-footer />
      </v-container>
    </v-main>
  </VApp>
</template>
