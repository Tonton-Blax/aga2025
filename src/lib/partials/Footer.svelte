<script lang="ts">
	import logoFreeLiad_en from "$lib/assets/logo-free-iliad-en.webp";
	import logoFreeLiad_fr from "$lib/assets/logo-free-iliad-fr.webp";
	import IBouton from "./IBouton.svelte";
    let { l, language, user, showModal=$bindable(false) } : { l: App.ILocalizedContent, language: App.ILocal, user: App.IUser | null, showModal: boolean } = $props();
	const logoFooter = $derived(language === 'fr' ? logoFreeLiad_fr : logoFreeLiad_en);
	const email = $derived(user?.local === 'it' ? 'aga-iliad-Italie@iliad.fr' : 'aga-iliad-france@iliad.fr')
</script>

<footer class="px-4">
	<p class="text-center -mb-2 font-light">{l.sections.basDePage.touteLaDoc}</p>

	
	<!-- <div class="flex flex-row w-full md:my-8 my-4 justify-center relative cursor-pointer">
		<button onclick={() => showModal = !showModal}
			class="bg-ired hover:bg-ired-400 min-w-96 px-5 py-4 text-sm leading-5 rounded-md font-semibold text-white text-center text-balance">
			{l.sections.basDePage.boutonReglement}
		</button>
	</div> -->


	<IBouton spaceY="medium" minWidth link="/pdf/iliad-1920x1080-{language}-{user?.local}.pdf" text={l.sections.basDePage.boutonReglement} />
	<IBouton spaceY="medium" minWidth link="https://files.aga-2024.com/{user?.id}.pdf" text={l.sections.basDePage.boutonBrochure} />
	<IBouton spaceY="medium" minWidth link="https://files.aga-2024.com/{user?.id}.pdf" text={l.sections.basDePage.boutonAttribution} />
	<p class="text-center font-light mt-16">{l.sections.basDePage.pourTouteQuestion}</p>
	<p class="text-center text-2xl font-light hover:text-ired my-12">
		<a href="mailto:{email}" target="_blank">
			{email}
		</a>
	</p>
	<p class="text-center font-light text-xs max-w-screen-sm mx-auto mb-20">{l.sections.basDePage.mentionLegale}</p>

	<p class="text-black text-xs font-thin text-center pr-3 max-w-screen-sm mx-auto">
		{l.sections.basDePage.usageInterne}
	</p>
	<div class="flex flex-row space-x-5 items-center justify-center my-8">
		<img class="w-40 h-auto" loading="lazy" src={logoFooter} alt="Logo Iliad">
		<p class="text-igray-400 text-xs">
			16, rue de la Ville-l’Évêque<br>
			75008 Paris
		</p>
	</div>
	<p class="text-black px-6 text-xs font-thin text-center">
		{@html l.sections.basDePage.companyInfo}
	</p>
</footer>