<script>
	import jikanjs from 'jikanjs';
	import AnimePanel from './Anime.svelte';
	function randomFromArray(arr){
		return arr[Math.floor(Math.random() * arr.length)]
	};
	let found = 0;
	let pkg;
	let seeNSFW = 0;
	function getRandomAnime(){
		let season = randomFromArray(['fall','spring','winter','summer']);
		let currentYear = new Date().getFullYear();
		let year = Math.floor(Math.random() * (currentYear - (currentYear - 15 + 1)) + currentYear-15);
		let seasonAnimes = jikanjs.loadSeason(year, season)
			.then((response) => {
				let anime = randomFromArray(response.anime);
				if (!seeNSFW) {
					while (anime.r18){
						anime = randomFromArray(response.anime);
					}
				}
				console.log(anime);
				let genreString = '';
				for (let i = 0; i < anime.genres.length; i++) {
					genreString += anime.genres[i].name + ', ';
				};
				pkg = {
					title: anime.title,
					url: anime.url,
					synopsis: anime.synopsis,
					cover: anime.image_url,
					genre: genreString,
					episode: anime.episodes,
					airing_start: anime.airing_start,
					producer: anime.producer,
					score: anime.score,
				}
				found = 1;
			})
	}
	getRandomAnime();

</script>

<main>
	<AnimePanel {...pkg}  style="padding-bottom: 50px;"/>s

	<div style="position:fixed; bottom: 60px; text-align:center; width: 100vw; color:aliceblue">
		<a href="https://github.com" style="color:aliceblue">Github</a> | 
		<a href="https://ko-fi.com/r4yish" style="color:aliceblue">Support me</a> | 
		<input type="checkbox" bind:value={seeNSFW}> see NSFW
	</div>
	<button accesskey="enter" on:click={getRandomAnime}>Random an anime</button>
</main>

<style>

	@media (max-width: 640px) {
		
        div {
            text-align: left;
        }
	}
	
	:root {
		background-color: #282a36;
		overflow: hidden;
	}
	
	button {
		background-color: #44475a;
		color: #f8f8f2;
		position: absolute;
		left: 0px;
		bottom: 0px;
		border: 0px;
		width: 100%;
		height: 40px;
	}
</style>