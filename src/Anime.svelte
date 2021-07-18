<script>
    export let title;
    export let url;
    export let synopsis;
    export let cover;
    export let genre;
    export let episode;
    export let airing_start;
    //export let producer;
    export let score
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');

    :root {
		font-family: "PT Sans";
    }

    h1 {
		color: #bd93f9;
		font-size: 3rem;
	}

    p {
        color: #f8f8f2;
        font-size: 1rem;
    }

    strong, a {
        color: #50fa7b
    }
    
    .row {
		position: absolute;
		top: 50%;
		left: 50%;
		-moz-transform: translateX(-50%) translateY(-50%);
		-webkit-transform: translateX(-50%) translateY(-50%);
		transform: translateX(-50%) translateY(-50%);
        display: flex;
        width: 100%;
    }

    .column1 {
        flex: 40%;
        padding: 10px;
        
    }
    .column2 {
        flex: 40%;
        padding: 10px;
    }
    
    h2 {
        font-size: 2rem; 
        color: #ff79c6;
    }

	.tooltip-wrap {
		position: relative;
	}

	.tooltip-wrap .tooltip-content {
		display: none;
		position: absolute;
		bottom: 5%;
		left: 5%;
		right: 5%;
		background-color: #44475a;
		padding: .5em;
	}

	.tooltip-wrap:hover .tooltip-content {
		display: block;
	}

	@media (max-width: 640px) {
        .row {
            display:block;
        }

        h1 {
            font-size: 1.4rem;
        }
        h2 {
            font-size: 1.1rem;
        }
        img {
            width: 100vw;
            height: auto;
        }
	}

</style>


<div class="row">
    <div class="column1">
        <center><img style="border-radius: 10%; height: 400px; width: auto;" src="{cover}" alt="cover"></center>
    </div>
    <div class="column2">
        <h1>{title}</h1>
        <h2>⭐{score}</h2>
        <p><strong>Episode :</strong> {episode}</p>
        <p><strong>Genre :</strong> {genre} </p>
        <p><strong>Airing Start :</strong> {airing_start} </p>
		<div class="tooltip-wrap">
			<strong>Hover to see synopsis</strong>
			<p class="tooltip-content">{synopsis}</p>	
		</div><br>
        <a href="{url}" target="_blank">Myanimelist Link</a>
    </div>
</div>