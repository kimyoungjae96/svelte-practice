<script>
  import { movies } from '~/stores/movie';
</script>

<div class="movie-list">
  <div class="movies">
    {#each $movies as movie (movie.imdbID)}
      {movie.Title}
    {/each}
  </div>
</div>
