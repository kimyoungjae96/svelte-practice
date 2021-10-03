<style lang="scss">
  .movie-list {
    margin-top: 30px;
    padding: 10px;
    border-radius: 4px;
    text-align: center;
    .movies {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>

<script>
  import { movies, loading } from '~/stores/movie';
  import MovieCard from '~/components/MovieCard';
  import Loader from '~/components/Loader';
  console.log($movies);
</script>

<div class="movie-list">
  {#if $loading}
    <Loader />
  {/if}
  <div class="movies">
    {#each $movies as movie (movie.imdbID)}
      <MovieCard movie="{movie}" />
    {/each}
  </div>
</div>
