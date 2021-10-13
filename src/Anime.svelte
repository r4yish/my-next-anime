<script>
  import Kofi from "./kofi.svelte";
  export let title;
  export let url;
  export let synopsis;
  export let cover;
  export let genre;
  export let episode;
  export let airing_start;
  //export let producer;
  export let score;
</script>

<div class="flex-container">
  <div id="pic">
    <img src={cover} alt="cover" />
  </div>
  <div id="info" class="">
    <div class="text-3xl text-green-300">{title}</div>
    <div class="text-gray-300">Score : {score}</div>
    <div class="text-gray-300">Episode : {episode}</div>
    <div class="text-gray-300">Genre : {genre}</div>
    <div class="text-gray-300">Airing Date : {airing_start}</div>
    <button class="block my-3 synopsis p-2 bg-blue-200">Synopsis
    </button>
    <a href={url} class="text-gray-300 font-normal" target="_blank"><strong>Myanimelist Link</strong></a>
  </div>
</div>

<style>
</style>
