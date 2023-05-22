<script>
	import MainComponent from "../../lib/components/mainComponent.svelte";
	import * as prismicH from "@prismicio/helpers"
	export let data;
	const { document } = data;
	console.log(document.data.title)
</script>

<MainComponent/> 

<article class="textComponent">
	<h1> {@html prismicH.asHTML(document.data.title)} </h1>
	<p>{@html prismicH.asHTML(document.data.content)} </p>
</article>




<style>
	.textComponent{
		display: flex;
		align-self: center;
		margin: auto;
		flex-direction: column;
		width: 50%;
		border: 1px solid #000;
		padding: 1em;
		font-family: 'Open Sans', sans-serif;
		
	}

	.textComponent > h1{
		text-align: center;
		font-family: Light;
	}

</style>