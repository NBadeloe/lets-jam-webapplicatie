<script>
	import MainComponent from "../lib/components/mainComponent.svelte";
	import * as prismicH from "@prismicio/helpers";

	export let data;
	const { document } = data;
	console.log(document)
</script>
<MainComponent/>
<section class="about">
	<p>
		Hi ik ben Nandita, een student frontend development and design. Ik werk graag georganiseerd en zoek altijd een creatieve oplossing voor mijn problemen. Ook sta ik altijd open om meer kennis op te doen. Ik vind het ook belangrijk om de mensen in mijn omgeving te motiveren en op positieve manier te beïnvloeden.
	</p>

</section>
	<h3>Nieuwste posts</h3>
<section class="blog-grid">
	
	{#each data.document as data }
		<a href=" {data.uid}">{@html prismicH.asHTML(data.data.title)}</a>
	{/each}
</section>

<style>
	.blog-grid{
	margin: 10em;
	margin-top: -7em;
	display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row;
  justify-items: center;

	}

	.blog-grid > a{
		text-decoration: none;
		color: #000;
		font-family: Light;
		font-size: smaller;
		border: 1px solid #000;
		align-items: center;
		padding:1em;
		height: 6em;
		width: 15em;

}

.about{
	width: 40em;
	height: 10em;
	margin-top: 10em;
	margin: auto;
	font-family: 'Open Sans', sans-serif;
	padding: 1em;
}
h3{
	font-family: Base;
	width: 20em;
	height: 10em;
	margin: auto;
	margin-bottom: 2em;
	text-align: center;
}
</style>