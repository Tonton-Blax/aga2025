<script lang="ts">
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	import InputDate from '$lib/InputDate.svelte';
	import Landing from '$lib/Landing.svelte';
	import { i18n } from '$lib/i18n';
	import { onMount } from 'svelte';
	
	let { data, form } = $props();

	let user = $state(data.user)
	let urlId = $derived($page.url.searchParams.get('id'));
	
	$effect(() => {
		
		if (urlId && user?.id && urlId !== user.id) {
			invalidate('/');
			user = null;
		}
	
	})
	
	const language:App.ILocal = $derived(user?.local === 'fr' ? 'fr' : 'en');
	const l = $derived(i18n[language]);

	onMount(async () => {
		document.documentElement.setAttribute('lang', language);
	})


	</script>
	
	{#if user?.id || form?.success}
	
	<main class="md:max-width-[1280px] overflow-x-hidden bg-white mx-auto">
		<Landing {language} {user} {l}></Landing>
	</main>
	
	{:else}
	<section class="flex flex-col justify-center items-center content-center bg-gray-100 w-screen max-w-[100vw] h-screen max-h-[100vh]">
		<InputDate {form} />
	</section>
	{/if}

