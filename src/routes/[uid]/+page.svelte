<script>
	import * as prismicH from "@prismicio/helpers"
	export let data;
	const { document } = data;
	console.log(document.data.title)
</script>
<h1>je moeder</h1>
<h3> {@html prismicH.asHTML(document.data.title)} </h3>
<p>{@html prismicH.asHTML(document.data.content)} </p>

