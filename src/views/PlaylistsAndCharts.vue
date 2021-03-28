<template>
  <div class="justify-content-center pt-4 pb-4">
    <b-container fluid style="max-width: 700px;">
      <b-card>
        <div>
          <b-img src="./../assets/bopOfTheDay.png" height="36" />
        </div>

        <iframe
          src="https://cdn.lightwidget.com/widgets/5863079d5e015aeba699277b8929c0e9.html"
          width="250"
          height="250"
          scrolling="yes"
          allowtransparency="true"
          class="lightwidget-widget mt-2 rounded-lg"
          style="border:0;overflow:hidden;"
        />
      </b-card>

      <div class="mt-4">
        <b-img src="./../assets/playlists.png" height="36" />
        <b-img src="./../assets/and.png" height="36" />
        <b-img src="./../assets/charts.png" height="36" />
      </div>

      <b-card no-body class="mt-2">
        <b-tabs card>
          <b-tab
            v-for="(tabName, index) in tabNames"
            :key="index"
            :title-link-class="'tabTitle'"
            :title="tabName"
          >
            <component
              :is="getComponentName(tabName)"
            />
          </b-tab>
        </b-tabs>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Top100 from '@/views/Top100.vue';
import WeeklyRadar from '@/views/WeeklyRadar.vue';
import MonthlyRecap from '@/views/MonthlyRecap.vue';

export default {
  name: 'PlaylistsAndCharts',
  components: {
    Top100,
    WeeklyRadar,
    MonthlyRecap,
  },
  computed: {
    ...mapState(['tabNames']),
  },
  methods: {
    getComponentName(tabName) {
      let componentName
      switch (tabName) {
        case 'Top 100':
          componentName = 'Top100'
          break;
        case 'Weekly Radar':
          componentName = 'WeeklyRadar'
          break;
        case 'Monthly Recap':
          componentName = 'MonthlyRecap'
          break;
        default:
          console.log("couldn't find matching tabName")
      }
      return componentName
    },
  },
}
</script>
