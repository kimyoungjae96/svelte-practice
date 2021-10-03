<style lang="scss">
  .skeleton-loader {
    display: flex;
    .skeletons {
      flex: 1;
      .skeleton {
        width: 100%;
        height: 100px;
        background-color: $color-area;
        border-radius: 8px;
        margin-top: 20px;

        &:first-child {
          margin-top: 0;
        }

        &.title {
          height: 100px;
        }

        &.specs {
          width: 60px;
          height: 30px;
        }

        &.plot {
          height: 300px;
        }

        &.etc {
          width: 40%;
          height: 50px;
        }
      }
    }
  }
  .poster {
    flex-shrink: 0;
    width: 500px;
    height: 500px * 3/2;
    border-radius: 10px;
    margin-right: 70px;
    background-color: $color-area;
  }
</style>

<script>
  import Loader from '../components/Loader.svelte';
  import { searchMovieBy } from '~/stores/movie';

  export let params = {};
  searchMovieBy(params.id);
</script>

<div class="container">
  <div class="skeleton-loader">
    <div class="poster"></div>
    <div class="skeletons">
      <div class="skeleton title"></div>
      <div class="skeleton specs"></div>
      <div class="skeleton plot"></div>
      <div class="skeleton etc"></div>
      <div class="skeleton etc"></div>
      <div class="skeleton etc"></div>
    </div>
    <Loader absolute />
  </div>
</div>
