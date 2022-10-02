<template>
  <div>
    <b-col>
      <b-card
        :title="name"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Job-Info"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
        footer="Card footer"
      >
        <b-card-text
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ea
          magni quia hic dolores iste officiis sit. Ullam, omnis vitae,
          necessitatibus dicta minima facere earum qui alias sequi a enim.
        </b-card-text>
        <b-button variant="primary">Apply</b-button>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  name: "JobCard",
  props: ["name"],
};
</script>

<style lang="scss" scoped></style>
