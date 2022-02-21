<template>
  <div class="mt-5">
    <v-row class="justify-center">
      <v-col cols="12" sm="10" md="8">
        <v-card class="pa-5 rounded-lg">
          <h3 class="font-weight-bold text-center my-0">
            Refer friends for extra tiskets
          </h3>
          <p class="mb-0 text-body-1 text-center">
            Use your unique link below to refer your friends
          </p>
          <v-text-field
            outlined
            dense
            label="Link"
            type="text"
            hide-details
            class="my-3"
            value="http://localhost:3000/"
          >
            <template #append>
              <v-btn
                type="submit"
                color="purple darken-3"
                class="white--text mb-2"
              >
                Copy Link
              </v-btn>
            </template>
          </v-text-field>
          <div class="d-flex justify-center mt-3">
            <v-btn depressed outlined class="primary--text mr-5 rounded-lg"
              >Share on Twitter <v-icon right> mdi-twitter </v-icon></v-btn
            >
            <v-btn depressed outlined class="primary--text rounded-lg"
              >Share on Telegram</v-btn
            >
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
