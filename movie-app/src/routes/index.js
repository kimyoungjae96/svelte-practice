import Home from './Home.svelte';
import About from './About.svelte';
import Movie from './Movie.svelte';

export default {
  '/': Home,
  '/about': About,
  '/movie/:id': Movie,
};
