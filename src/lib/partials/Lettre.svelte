<script lang="ts">
	import IBouton from './IBouton.svelte';
	import { fly } from 'svelte/transition';
    import signThomas from "$lib/assets/sign-thomas.webp";
	import signXavier from "$lib/assets/sign-xavier.webp";
	import { onMount } from 'svelte';
	import { replacePlaceholders } from '$lib/utils';
	import { ratioSalaireLabel } from '$lib/i18n';
    
    const { user, l, language, dates } : { user: App.IUser | null, l: App.ILocalizedContent, language: 'fr' | 'en', dates: App.Dates } = $props();	
	let mounted = $state(false);

	const localizationKey = $derived(`${user?.local}-${language}` as App.LanguageCode);
	
	const lettre = $derived(replacePlaceholders(l.sections.lettre.texte, {
		...user,
		dear: user?.civilite === 'H' ? l.general.dear[0] : l.general.dear[1],
		feminin: user?.civilite === 'H' ? '' : 'e',
		tranche1: dates.tranche1[localizationKey],
		tranche2: dates.tranche2[localizationKey],
		ratio_salaire: user ? ratioSalaireLabel(user) : '',
	}));

	onMount(async () => { mounted = true })
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
		<div class="flex flex-row w-full space-x-4 mt-16">
			<div class="w-1/2 flex flex-col items-center space-y-3">
				<div class="-mb-1.5">
					<img class="h-10 w-auto" src={signXavier} alt="Mot de Xavier Niel">
				</div>
				<p class="text-ired text-md text-center">Xavier Niel</p>
				<p class="text-black text-xs uppercase text-center">{l.sections.lettre.intituleXN}</p>
			</div>
			<div class="w-1/2 flex flex-col items-center space-y-3">
				<div class="-mb-1.5">
					<img class="h-10 w-auto" src={signThomas} alt="Mot de Thomas Reynaud">
				</div>
				<p class="text-ired text-md text-center">Thomas Reynaud</p>
				<p class="text-black text-xs uppercase text-center">{l.sections.lettre.intituleTR}</p>
			</div>
		</div>

		<IBouton link="https://files.aga-2024.com/{user?.id}.pdf" text={l.sections.lettre.boutonDownload} />

		<div class="flex flex-row w-full md:mt-16 mt-2 md:pb-0 pb-8 justify-start text-xs text-igray-200">
			1. {l.sections.lettre.ps}
		</div>
	</div>
	{/if}
</div>
