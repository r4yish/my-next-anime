<script lang="ts">
	// import Kofi from './kofi.svelte';
	import jikanjs from 'jikanjs';

	const randomFromArray = (arr) => {
		return arr[Math.floor(Math.random() * arr.length)];
	};

	let NSFW: boolean = false;
	let minYear = 2016;
	let minScore = 7;

	const getSeason = async () => {
		let season = randomFromArray(['fall', 'spring', 'winter', 'summer']);
		let currentYear = new Date().getFullYear();
		let year = Math.floor(Math.random() * (currentYear - (minYear + 1)) + minYear);
		return await jikanjs.loadSeason(year, season);
	};

	var anime;

	const getAnime = async () => {
		var res = await getSeason();
		var count = 0;
		while (true) {
			anime = randomFromArray(res.anime);
			var valid = anime.r18 === NSFW && anime.score >= minScore;
			if (valid) {
				break;
			}
			count += 1;
			if (count >= 100) {
				res = await getSeason();
				count = 0;
			}
		}
		// console.log(anime);
	};

	let promise = getAnime();
</script>

<svelte:head />

<main class="text-white">
	<div class="text-xl p-6">
		{#await promise}
			<div>Loading</div>
		{:then users}
			<img class="max-h-screen-md" src={anime.image_url} alt="cover" />
			<div class="text-3xl my-4 text-green-200">{anime.title}</div>
			<div class="my-4 text-2xl">⭐ {anime.score}</div>
			<div class="my-4 ">
				{#each anime.genres as genre}
					{genre.name + ', '}
				{/each}
			</div>
			<div class="my-4">
				EP : {anime.episodes}
			</div>
			<div>Air Date : {new Date(anime.airing_start).toLocaleDateString()}</div>
			<div class="my-4 ">
				Studio :
				{#each anime.producers as producer}
					{producer.name + ', '}
				{/each}
			</div>
			<div class="text-xl text-white"><a href={anime.url}>MAL link</a></div>
      <div class="m">Synopsis : {anime.synopsis}</div>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>

	<div class="fixed bottom-0 left-0 bg-gray-900 w-screen flex flex-row gap-x-3 items-center justify-around px-4 flex-nowrap">
		<button
			class="p-2 border-none bg-blue-800"
			on:click={() => {
				promise = getAnime();
			}}>Random</button
		>

		<div>
			<input class="appearance-none border-transparent w-4 h-4 bg-green-300 checked:bg-red-700 checked:border-transparent transition-all" style="transition-duration: 600ms" type="checkbox" bind:checked={NSFW} />
			NSFW
		</div>

		<div>
			Min. Rating
			<input type="number" min="0" max="9" class="w-10 text-black p-2" bind:value={minScore} />
		</div>

		<div>
			Min. Year
			<input type="number" class="text-black p-2 w-16" bind:value={minYear} />
		</div>

		<div class="bg-blue-800 p-4 hidden sm:block">
			<a href="https://ko-fi.com/sleepntsheep">☕ Support me</a>
		</div>
	</div>
</main>