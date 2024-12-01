<script lang="ts">
	import "../app.css";
	import Layout from "../components/Layout.svelte";
	let { children } = $props();
</script>

<Layout>
	{@render children()}
</Layout>
