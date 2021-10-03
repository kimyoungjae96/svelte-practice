<style lang="scss">
  .movie-list {
    margin-top: 30px;
    padding: 10px;
    background-color: $color-area;
    border-radius: 4px;
    text-align: center;
    &.no-result {
      padding: 70px 0;
    }
    .message {
      color: $color-primary;
      font-size: 20px;
      text-align: center;
    }
    .movies {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>

<script>
  import { movies, loading, message } from '~/stores/movie';
  import MovieCard from '~/components/MovieCard';
  import Loader from '~/components/Loader';
</script>

<div class:no-result="{!$movies.length}" class="movie-list">
  {#if $loading}
    <Loader />
  {/if}
  <div class="message">
    {$message}
  </div>
  <div class="movies">
    {#each $movies as movie (movie.imdbID)}
      <MovieCard movie="{movie}" />
    {/each}
  </div>
</div>
