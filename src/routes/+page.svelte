<script>
	import MainComponent from "../lib/components/mainComponent.svelte";
	import * as prismicH from "@prismicio/helpers";

	export let data;
	const { document } = data;
	console.log(document)
</script>
<MainComponent/>

{#each data.document as data }

	<a href=" {data.uid}">{@html prismicH.asHTML(data.data.title)}</a>
	<br>
	
	
{/each}