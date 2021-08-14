<script>
  import jikanjs from "jikanjs";
  import AnimePanel from "./Anime.svelte";
  function randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  let found = 0;
  let pkg;
  let NSFW = 0;
  let minYear = 2016;
  let minScore = 7;

  function opentab(tabid) {
    var i;
    var x = document.getElementsByClassName("tabs");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabid).style.display = "block";
  }

  function getRandomAnime() {
    let season = randomFromArray(["fall", "spring", "winter", "summer"]);
    let currentYear = new Date().getFullYear();
    let year = Math.floor(
      Math.random() * (currentYear - (minYear + 1)) + minYear
    );
    let seasonAnimes = jikanjs.loadSeason(year, season).then((response) => {
      let anime = randomFromArray(response.anime);

      while (
        anime.r18 != NSFW ||
        anime.airing_start.slice(0, 4) < minYear ||
        anime.score < minScore
      ) {
        anime = randomFromArray(response.anime);
      }
      console.log(anime);
      let genreString = "";
      for (let i = 0; i < anime.genres.length; i++) {
        genreString += anime.genres[i].name + ", ";
      }
      pkg = {
        title: anime.title,
        url: anime.url === null ? "?" : anime.url,
        synopsis: anime.synopsis === null ? "?" : anime.synopsis,
        cover: anime.image_url,
        genre: genreString,
        episode: anime.episodes,
        airing_start: anime.airing_start,
        producer: anime.producer,
        score: anime.score === null ? "?" : anime.score,
      };
      found = 1;
    });
  }
  getRandomAnime();
</script>

<main>
  <div class="tabs" id="content">
    <AnimePanel {...pkg} />
    <button on:click={getRandomAnime}>Random</button>
    <button on:click={() => opentab("settings")}>Settings</button>
  </div>
  <div class="tabs" id="settings" style="display: none;">
    <label>
      NSFW
      <input type="checkbox" bind:checked={NSFW} />
    </label>
    <label>
      Min. Score
      <input type="number" bind:value={minScore} />
    </label>
    <label>
      Min. Year
      <input type="number" bind:value={minYear} />
    </label>

    <button on:click={() => opentab("content")}>Back</button>
  </div>
</main>

<style>
  :root {
    background-color: #191919;
  }

  .tabs {
    width: 100vw;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .tabs > button {
    width: 80vw;
    background-color: #393939;
    color: #f0f0f0;
    border: 4px dashed #4c4c4c;
    border-radius: 4px;
    box-sizing: border-box;
    box-shadow: 5px 10px #0f0f0faa;
    position: relative;
    text-align: center;
    margin: 10px 10px 0px 0px;
  }

  input[type="checkbox"] {
    background-color: #393939;
    height: 30px;
    width: 30px;
    border-radius: 5px;
  }

  label {
    color: #bfbfbf;
    font-size: 20px;
  }

  @media screen and (min-width: 840px) {
    .tabs {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
      display: block;
      margin: auto;
    }

    .tabs > button {
      width: 20vw;
      margin: 0px 10px 0px 10px;
    }
  }
</style>
