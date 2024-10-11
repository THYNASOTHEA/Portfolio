
    <template>
  <!-- blog section -->
<h1>Hllllloooo</h1>
  <div class="col-md-6 col-lg-4 mx-auto">
    <div class="box">
      <div class="img-box">
        <img src="" alt="" />
      </div>
      <div class="detail-box">
        <h5>
          {{ title }}
        </h5>
        <p>
          {{ shortDescription }}
        </p>
        <a href=""> Read More </a>
      </div>
    </div>
  </div>

  <!-- end blog section -->
</template>
      <script>
export default {
  props: ["img", "title", "shortDescription"],
};
</script>
