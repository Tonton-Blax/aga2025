<svelte:head>

  <meta property="og:url" content="https://iliad2024.vercel.app/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="iliad - AGA 2024">
  <meta property="og:description" content="Plan d’Attribution Gratuite d’Actions iliad 2024 - Plan AGA -">
  <meta property="og:image" content="/og.jpg">

  <title>iliad - AGA 2024</title>

</svelte:head>

<script lang="ts">
	import { onMount } from 'svelte';
  import { injectAnalytics } from '@vercel/analytics/sveltekit'
  import { PUBLIC_ISDEV } from '$env/static/public';
	import '../app.css';
	let { children } = $props();
  onMount(() => {
    injectAnalytics({ mode: PUBLIC_ISDEV==='true' ? 'development' : 'production' });
    window.scrollTo(0, 0);
  })
</script>

{@render children()}
