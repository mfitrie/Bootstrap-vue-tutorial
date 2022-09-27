<template>
  <!-- <div class="home"></div> -->
  <b-container>
    <b-row align-v="center">
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </b-row>
  </b-container>
</template>

<script>
import JobCard from "../components/JobCard.vue";

export default {
  name: "HomeView",
  components: {
    JobCard,
  },
};
</script>
