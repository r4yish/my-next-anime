<script>
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
  <div>
    <img src={cover} alt="cover" />
  </div>
  <div>
    <p style="font-size: 1.4rem;">{title}</p>
    <p><strong>Score : </strong>{score}</p>
    <p><strong>Episode : </strong>{episode}</p>
    <p><strong>Genre : </strong>{genre}</p>
    <p><strong>Airing Start : </strong>{airing_start}</p>
    <p><strong>Synopsis : </strong>{synopsis}</p>
    <strong><a href={url} target="_blank">Myanimelist Link</a></strong>
  </div>
</div>

<style>
  
  .flex-container {
    text-align: center;
    margin: auto;
    display: flex;
    position: relative;
  }

  .flex-container > div {
    padding: 20px;
    max-width: 90vw;
  }

  img {
    width: 240px !important;
    height: auto;
    text-align: center;
    margin: auto;
  }

  strong,
  a {
    color: #a0a0a0;
  }

  .flex-container > div > p {
    color: #e7e7e7;
  }

  @media screen and (max-width: 640px) {
    .flex-container {
      display: flex;
      flex-direction: column;
      width: 100vw;
      padding: 0px;
      max-width: 90vw;
    }
    .flex-container>div {
      padding: 5px;

    }
  }
</style>
