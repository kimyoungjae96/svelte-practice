<style lang="scss">
  a {
    display: block;
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    color: $color-white-50;
    text-decoration: none;
    span {
      color: #fdc000;
    }
  }
</style>

<script>
  import { link } from 'svelte-spa-router';
</script>

<a use:link href="/">
  <span>OMDbAPI</span>.com
</a>
