<script lang="ts">

	import logo_fr from "$lib/assets/logo-iliad-cropped-fr.webp";
	import logo_en from "$lib/assets/logo-iliad-cropped-en.webp";
    import megaphone from "$lib/assets/loud-couple.webp";
	import { slide, fade } from 'svelte/transition';
    import { Hamburger } from 'svelte-hamburgers';
    import { scrollTracker } from "$lib/scrollTracker.svelte";
	import { onMount } from "svelte";

	const { l, language } : { l: App.ILocalizedContent, language: 'fr' | 'en' } = $props();
	const logoHeader = $derived(language === 'fr' ? logo_fr : logo_en);

	let open = $state(false);

	const handleNav = () => {
		open = false;
	}

	onMount(() => {
		scrollTracker.init();
	})

</script>

<header class="w-full md:mt-8 mt-2.5 md:max-w-[1160px] mx-auto logo-header">
	<a href="https://www.iliad.fr/" class="flex items-center md:w-[104px] w-20 md:pl-0 pl-5 h-auto" aria-label="Lien vers site Iliad">
		<img loading="eager" src={logoHeader} alt="Logo Iliad" />
	</a>
	{#if !scrollTracker.isScrolling}
	<nav class="md:hidden block fixed z-[10] right-2 top-2" transition:fade>
		<Hamburger --color="var(--ired)"
			bind:open
			type="collapse"
			title="Toggle nav links"
			ariaControls="nav"
		/>
	
		{#if open}
			<ul id="nav" class="menu bg-igray-100 text-black font-light space-y-6 text-xl relative z-10 p-6 rounded-lg" transition:slide>
				<li class="hover:text-ired cursor-pointer"><a onclick={handleNav} href="/">{l.general.menu.lettre}</a></li>
				<li class="hover:text-ired cursor-pointer"><a onclick={handleNav} href="#videos">{l.general.menu.videos}</a></li>
				<li class="hover:text-ired cursor-pointer"><a onclick={handleNav} href="#conditions">{l.general.menu.conditions}</a></li>
				<li class="hover:text-ired cursor-pointer"><a onclick={handleNav} href="#acceptation">{l.general.menu.acceptation}</a></li>
				<li class="hover:text-ired cursor-pointer"><a onclick={handleNav} href="#vente">{l.general.menu.vente}</a></li>
				<li class="hover:text-ired cursor-pointer"><a onclick={handleNav} href="#faq">{l.general.menu.faq}</a></li>
				<li class="hover:text-ired cursor-pointer"><a onclick={handleNav} href="#documents">{l.general.menu.documents}</a></li>
			</ul>
		{/if}
	</nav>
	{/if}
</header>

 <section class="bg-black text-white md:h-[250px] h-28 max-w-[1160px] mx-auto text-center content-center xl:text-4xl md:text-3xl text-2xl leading-none flex flex-row">
	<div class="flex w-1/3 h-5/6 justify-end self-end">
		<img loading="lazy" src={megaphone} alt="Megaphone">
	</div>
	<div class="md:w-1/3 w-2/3 mx-auto flex flex-col h-full justify-evenly">
		<h1>
			{@html l.sections.header.title}<br>
		</h1>
		<!-- <p class="text-sm font-light text-igray">
			Faites défiler vers le bas pour découvrir votre<br>
			Attribution Gratuite et ses modalités
		</p> -->
	</div>
	<div class="md:flex hidden w-1/3"></div>
 </section>
 
 <style>
	@media screen and (min-width: 768px) and (max-width: 1159px) {
		.logo-header {
			padding-left:1rem;
		}
	}
 </style>