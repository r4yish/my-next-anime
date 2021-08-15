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
  <div id="b">
    <img src={cover} alt="cover" />
  </div>
  <div>
    <h1>{title}</h1>
    <p><strong>Score : </strong>{score}</p>
    <p><strong>Episode : </strong>{episode}</p>
    <p><strong>Genre : </strong>{genre}</p>
    <p><strong>Airing Start : </strong>{airing_start}</p>
    <div id="synopsis">
      <p><strong>Hover for synopsis</strong></p>
      <div class="content">
        <div id="a">{synopsis}</div>
      </div>
    </div>
    <a href={url} target="_blank"><strong>Myanimelist Link</strong></a>
  </div>
</div>

<style>
  .flex-container {
    display: flex;
    flex-direction: column;
    margin-left: 10vw;
    width: 80vw;
  }
  .flex-container > div {
    text-align: center;
  }

  p,
  a,h1,
  strong {
    color: #e7e7e7;
    text-align: left;
  }

  strong,
  a {
    color: #faf9f9;
  }

  img {
    height: 240px !important;
    width: auto;
    max-width: 300px;
  }

  #synopsis > .content {
    box-sizing: border-box;
    border-radius: 5px;
    visibility: hidden;
    opacity: 0;
    width: 700px;
    max-width: 80vw;
    position: absolute;
    bottom: 180px;
    color: #000;
    background: #fff;
    padding: 15px;
    transition: 0s;
  }

  #synopsis > .content > #a {
    -webkit-line-clamp: 17;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
  }

  #synopsis > .content:before {
    content: "";
    position: absolute;
    width: 30px;
    background: #fff;
    height: 30px;
    bottom: -15px;
    left: 30px;
    transform: rotate(45deg);
  }

  #synopsis:hover > .content {
    visibility: visible;
    opacity: 1;
  }

  h1 {
    font-size: 1rem;
  }


  @media screen and (min-width: 840px) {
    .flex-container {
      text-align: center;
      margin: auto;
      display: flex;
      flex-direction: row;
      position: relative;
    }

    .flex-container > div{
      padding: 20px;
      text-align: left;
      width: 50%;
    }

    .flex-container > #b {
      text-align: right;
    }

    img {
      height: 300px !important;
      width: auto;
      max-width: 40vw;
    }

    #synopsis > .content {
      transition: 0.5s;
      max-width: 50vw;
    }

    h1 {
      font-size: 1.5rem;
    }
  }
</style>