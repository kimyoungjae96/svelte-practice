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
  import { movies } from '~/stores/movie';
  import MovieCard from '~/components/MovieCard';
  console.log($movies);
</script>

<div class="movie-list">
  <div class="movies">
    {#each $movies as movie (movie.imdbID)}
      <MovieCard movie="{movie}" />
    {/each}
  </div>
</div>
