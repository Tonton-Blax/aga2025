<script lang="ts">
	import FAQ from './partials/FAQ.svelte';
	import Revente from './partials/Revente.svelte';
	const { user, l, language } : { user: App.IUser | null, l: App.ILocalizedContent, language: 'fr' | 'en' } = $props();
	import { Lettre, Videos, Title, Modal, Block, Actions, BlackTitle, Criteres, Etape, ScrollButton, IBouton, Footer, Nav } from './partials';
	import Header from './partials/Header.svelte';
	import { onMount } from 'svelte';
	import gsap from "gsap";
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
	import { browser } from '$app/environment';
	import iconeBal from "$lib/assets/bal.webp";


	if (browser)
		gsap.registerPlugin(ScrollTrigger)

	let blockVideos: HTMLElement | undefined = $state();
	let blockActions: HTMLElement | undefined = $state();
	let blockBlack: HTMLElement | undefined = $state();
	let blockFAQ: HTMLElement | undefined = $state();

	let showModal = $state(false);


	onMount(async () => { 

	
		gsap.fromTo('.blackblock',
			{ y: 500, autoAlpha: 0},
			{ y: 0, autoAlpha: 1, duration: 1, scrollTrigger: { trigger: blockBlack }}
		)

		gsap.fromTo('.etape',
			{ y: 200, autoAlpha: 0},
			{ y: 0, autoAlpha: 1, stagger: 0.2, scrollTrigger: { trigger: "#criteres-sub" }}
		)

		gsap.fromTo('.action-iliad ul',
			{ filter : 'blur(200)', autoAlpha: 0},
			{ filter : 'blur(0)', autoAlpha: 1, scrollTrigger: { trigger: blockActions }}
		)

		gsap.fromTo('.faq-item',
			{autoAlpha:  0, filter : 'blur(3px)' },
			{ autoAlpha: 1, filter : 'blur(0px)', stagger: 0.1, scrollTrigger: { trigger: blockFAQ, start:"top center" } }
		)
		
	})

	const dates:App.Dates = {
		tranche1: {
			'fr-fr' : "décembre 2026",
			'pl-en': "December 2026",
			'it-en': "May 2027",
		},
		tranche2: {
			'fr-fr' : "décembre 2027",
			'pl-en': "December 2027",
			'it-en': "May 2028",
		},
		day: {
			'fr-fr' : "16",
			'pl-en': "16",
			'it-en': "31",
		}
	}

</script>


<Modal bind:showModal>
	{#snippet header()}
		<img src={iconeBal} alt="icone bal" class="w-48 justify-self-center h-auto" />
	{/snippet}

	<p class="my-4">
		{l.sections.modal}
	</p>

</Modal>

 
<Header {l} {language} />

<Nav {l} />

<section class="bg-igray-100 pb-72">

	<div class="xl:container mx-auto">

		<ScrollButton reverse />

		<Block mt="-96">
			<Lettre {user} {l} {language} {dates} />
		</Block>

		<!-- NOTE: Vos Actions -->

		<Block my="14">
			<Title title={l.sections.actions.sectionTitle} />
		</Block>

		<Block my="6">
			<div
				bind:this={blockActions} 
			>
			<!-- NOTE: CONDITIONS -->
				<Actions {user} {l} {language} {dates} />
			</div>				
		</Block>
	</div>
</section>
 

 <!-- NOTE: BLACK BLOCK -->

 <section class="relative">

	<div class="xl:max-w-[1160px] w-full mx-auto relative h-auto md:pb-0 mb-16"
		bind:this={blockBlack} 
	>
		<div
			class="md:-my-56 -my-32 h-full bg-white blackblock md:pb-0 xl:p-20 lg:p-16 p-8" 
		>
			<div>

			<!-- NOTE: CRITERES DE PERFORMANCE -->

				<Title id="conditions"
					title={l.sections.blackBlock.titleCritere.title}
					sub={l.sections.blackBlock.titleCritere.sub}
				/>

				<Criteres {l} />

				<Title
					id="acceptation"
					title={l.sections.blackBlock.titleAttribution.title}
					sub={l.sections.blackBlock.titleAttribution.sub}
				/>


				<div 
					class="pt-8 md:pb-16 pb-8 xl:px-20 md:px-4 px-20 xl:max-w-none md:max-w-5xl max-w-none mx-auto md:mb-0 mb-8 text-white text-center grid md:grid-cols-4 grid-cols-1 gap-x-3 md:gap-y-0 gap-y-4 items-start"
				>
					<Etape etape={l.sections.blackBlock.etapes[0]} i={0} />
					{#each l.sections.blackBlock.etapes.slice(1) as etape , i}
						<Etape {etape} i={i+1} />
					{/each}
				</div>

			</div>
		</div>
	</div>

 </section>

 <!-- NOTE: REVENTE -->
 <section class="bg-igray-100 md:-mt-96 -mt-60">

	<div class="xl:container mx-auto pt-56 pb-4">

		<ScrollButton offset={0} />

		<Block mt="28">
			<Title id="vente" title={l.sections.prixdeVente.sectionTitle} />
		</Block>

		<Block mt="12">
			<Revente {l} />
		</Block>

		<hr class="h-1 xl:w-2/3 md:w-4/5 w-11/12 mx-auto relative bg-white mt-20">
		<IBouton spaceY="large" link="/pdf/iliad-1920x1080-{language}-{user?.local}.pdf" text={l.sections.prixdeVente.boutonBrochure} />

	</div>
	
 </section>

 <!-- NOTE: FAQ -->

 <section class="pb-20">

	<div class="xl:container mx-auto">

		<ScrollButton offset={0} />
	
		<Block mt="10">

			<Title id="faq" title={l.sections.faq.sectionTitle} />
		</Block>
	
		<Block mt="12">
			<div bind:this={blockFAQ}>
				<FAQ {l} />				
				<p class="font-light font-igray-200 text-sm my-10 italic">
					{@html l.sections.faq.disclaimer}
				</p>
			</div>
		</Block>


	</div>
		
 </section>

<!-- NOTE: FOOTER -->

 <section class="bg-igray-100">

	<div class="xl:container mx-auto py-10" id="documents">

		<ScrollButton offset={2} />

		<Block>
			<Footer {l} {language} {user} bind:showModal />
		</Block>

	</div>
 </section>

 <style lang="postcss">

	/* .blackblock::before {
		--ratio: calc(294 / 213);
		background-image:url('/en-bref.webp');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		display: inline-block;
		position: absolute;
		content:"";
		width: 200px;
		height: calc(200px * var(--ratio));
		right:unset;
		top: calc(-0.82 * 200px * var(--ratio));
		left: 84%;
		transform: translateX(-50%);
	} */

	@media (min-width: 768px) and (max-width: 1023px) {
		.blackblock::before {
			width: 140px;
			height: calc(140px * var(--ratio));
			right:unset;
			top: calc(-0.82 * 140px * var(--ratio));
    		left: 87%;
    		transform: translateX(-50%);
		}
	}

	@media (max-width: 767px) {
		.blackblock::before {
			width: 120px;
			height: calc(120px * var(--ratio));
			right:unset;
			top: calc(-0.82 * 120px * var(--ratio));
    		left: 50%;
    		transform: translateX(-50%);
		}
	}
	

 </style>