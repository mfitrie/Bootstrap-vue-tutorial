<template>
  <!-- <div class="home"></div> -->
  <b-container>
    <b-row align-v="center">
      <JobCard v-for="job in displayJobs" :key="job.id" :name="job.name" />
      <!-- <JobCard />
      <JobCard />
      <JobCard /> -->
    </b-row>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      @input="paginate(currentPage)"
    ></b-pagination>
  </b-container>
</template>

<script>
import JobCard from "../components/JobCard.vue";

export default {
  name: "HomeView",
  components: {
    JobCard,
  },
  data() {
    return {
      jobs: [],
      displayJobs: [],
      currentPage: 1,
      rows: 1,
      perPage: 3,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      // get json from public folder
      const res = await fetch("jobs.json");
      const val = await res.json();
      this.jobs = val;
      this.displayJobs = val.slice(0, 3);
      this.rows = this.jobs.length;
      console.log(val);
    },
    paginate(currentPage) {
      // alert(currentPage);
      const start = (currentPage - 1) * this.perPage;
      this.displayJobs = this.jobs.slice(start, start + 3);
    },
  },
};
</script>
