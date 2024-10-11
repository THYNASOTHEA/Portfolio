<template>
  <section class="blog_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>Blog</h2>
      </div>
      <div class="row">
        <Blog
          v-for="(item, index) in blog"
          :key="index"
          :img="item.img"
          :title="item.title"
          :shortDescription="item.shortDescription"
        >
        </Blog>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import Blog from "./blog.vue";
export default {
  components: {
    Blog,
  },

  data() {
    return {
      blog: [],
    };
  },

  async created() {
    //Call API to get course data
    // const url = "v1/courses";
    //Promise and Async
    // const response = await axios.get(url);
    console.log("A");
    // const response = await axios.get("/v1/courses");
    const response = await axios.get("v1/courses");
    console.log("A1");
    const course = response.data;
    this.blog = course;
    console.log("blog", this.blog);
  },
};
</script>