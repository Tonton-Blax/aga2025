<script lang="ts">
	import IBouton from './IBouton.svelte';
	import { fly } from 'svelte/transition';
    // import signThomas from "$lib/assets/sign-thomas.webp";
	// import signXavier from "$lib/assets/sign-xavier.webp";
	import fleche from "$lib/assets/svgs/fleche.svg";
	import { onMount, tick } from 'svelte';
	import { replacePlaceholders } from '$lib/utils';
	import { ratioSalaireLabel } from '$lib/i18n';
	import gsap from "gsap";
    
    const { user, l, language, dates } : { user: App.IUser | null, l: App.ILocalizedContent, language: 'fr' | 'en', dates: App.Dates } = $props();	
	let mounted = $state(false);

	let flecheEl: HTMLImageElement | null = $state(null);
	let flecheTextEl: HTMLDivElement | null = $state(null);

	const localizationKey = $derived(`${user?.local}-${language}` as App.LanguageCode);
	
	const lettre = $derived(replacePlaceholders(l.sections.lettre.texte, {
		...user,
		dear: user?.civilite === 'H' ? l.general.dear[0] : l.general.dear[1],
		feminin: user?.civilite === 'H' ? '' : 'e',
		tranche1: dates.tranche1[localizationKey],
		tranche2: dates.tranche2[localizationKey],
		ratio_salaire: user ? ratioSalaireLabel(user) : '',
	}));

	onMount(async () => { 
		mounted = true;
		await tick();
		gsap.timeline({
			 scrollTrigger: {
				trigger: flecheEl,
				start: "top 80%",
			}
		})
		.from(flecheEl, 
			{ yPercent: -100, duration: 0.5, ease: "power1.in" }
		)
		.from(flecheTextEl, 
			{ yPercent: 120, duration: 0.5, ease: "power1.out" }, 
			"-=0.3"
		);
	})
</script>
<div id="lettre" class="w-full flex flex-row md:pt-0 pt-12">
	{#if !mounted}
	<div class="w-full md:px-24 px-2 md:py-16 py:2 md:mt-0 mt-5 bg-white rounded-xl h-screen" ></div>
	{:else}
	<div class="w-full md:px-24 px-6 md:py-16 py:2 md:mt-0 mt-5 bg-white rounded-xl" transition:fly={{y: 100, duration: 1000 }}>
		<h2 class="text-center mt-4 mb-12 text-3xl font-bold md:pt-0 pt-10">
			{user?.civilite === 'H' ? l.general.dear[0] : l.general.dear[1]} {user?.prenom},
		</h2>
		<p class="prose prose-strong:font-semibold font-light leading-6 max-w-none md:text-[0.95rem] text-lg">
			{@html lettre}
		</p>


		<!-- NOTE: LETTRE->SIGNATURE -->
		<div class="flex flex-row w-full space-x-4 mt-16 font-head">
			<div class="w-1/2 flex flex-col items-center space-y-3 text-center">
				<!-- <div class="-mb-1.5">
					<img class="h-10 w-auto" src={signXavier} alt="Mot de Xavier Niel">
				</div> -->
				<p class="text-ired text-md">Xavier Niel</p>
				<p class="text-black text-xs font-thin uppercase">{l.sections.lettre.intituleXN}</p>
			</div>
			<div class="w-1/2 flex flex-col items-center space-y-3">
				<!-- <div class="-mb-1.5">
					<img class="h-10 w-auto" src={signThomas} alt="Mot de Thomas Reynaud">
				</div> -->
				<p class="text-ired text-md">Thomas Reynaud</p>
				<p class="text-black text-xs font-thin uppercase">{l.sections.lettre.intituleTR}</p>
			</div>
		</div>

		<!-- NOTE: DL LETTRE -->
		<div class="w-full flex md:flex-row flex-col bg-igray-100 rounded-2xl mt-16 overflow-hidden lg:max-w-none max-w-[90vw] sm:max-w-[75vw] mx-auto pb-10 md:pb-0">
			<div class="flex flex-col border-1 pb-12 gap-y-2 w-3/4 md:border-r border-white px-12 mx-auto">
				<img bind:this={flecheEl} src={fleche} alt="Flèche décorative" class="mx-auto mb-4 opacity-[0.41]" />
				<div class="text-center text-xs" bind:this={flecheTextEl}>
					<span class="text-ired text-pretty">Poursuivez la lecture</span> et découvrez-en plus sur le Plan d’Attribution Gratuite d’Actions Iliad
				</div>
			</div>
			<div class="flex flex-col mx-auto space-y-0 justify-center items-center w-full px-12">
				<IBouton smallText fullW spaceY="small" link="https://files.aga-2024.com/{user?.id}.pdf" text={l.sections.lettre.boutonDownload} />
				<IBouton smallText fullW spaceY="small" link="https://files.aga-2024.com/{user?.id}.pdf" text={l.sections.lettre.boutonGuide} />
			</div>
		</div>
		<div class="flex flex-row w-full md:mt-16 mt-2 md:pb-0 pb-8 justify-start text-xs text-igray-200">
			1. {l.sections.lettre.ps}
		</div>
	</div>
	{/if}
</div>
