<script lang="ts">
	import content from "$lib/assets/svgs/tasse.svg";
	import icone3 from "$lib/assets/svgs/actions-acquises.svg";
	import icone4 from "$lib/assets/svgs/actions-prix.svg";
	import fois from "$lib/assets/signe-x.svg";
	import egal from "$lib/assets/signe-egal.svg";
    const { l } : { l: App.ILocalizedContent } = $props();
</script>

<div class="pb-6"></div>
<p class="md:pl-20 xl:pr-[22rem] md:pr-[37%] pl-12 pr-[8vw] md:mb-6 mb-10 font-light">
	{l.sections.prixdeVente.texte}
</p>


<div class="grid grid-cols-3 md:translate-x-12 translate-x-[2vw] gap-0 md:pt-0 pt-8">

	<!-- NOTE: 3 BLOCKS PRIX DE VENTE -->

	<div class="flex flex-col items-center">
		<div class="flex w-full">
			<div class="md:w-4/5 w:5/6 flex flex-col justify-center items-center justify-items-center">
				<img class="mb-5 w-20 h-auto" loading="lazy" src={icone3} alt="Icône nombre d'actions">
				<div class="h-24 w-4/5 text-balance bg-igray-200 justify-center text-center items-center text-white md:font-medium font-light text-xs rounded-xl flex md:p-6 p-2">
					{@html l.sections.prixdeVente.vignettes[0]}
				</div>
			</div>
			<div class="md:w-1/5 w-1/6 md:self-end self-center md:pb-8 pb-0 md:pt-0 pt-20 justify-items-center">
				<img class="w-7 h-auto" src={fois} alt="que multiplie">
			</div>
		</div>
	</div>

	<div class="flex flex-col items-center">
		<div class="flex w-full">
			<div class="md:w-4/5 w:5/6 flex flex-col justify-center items-center justify-items-center">
				<img class="mb-5 w-20 h-auto" loading="lazy" src={icone4} alt="Icône nombre d'actions">
				<div class="h-24 w-4/5 text-balance bg-igray-200 justify-center text-center items-center text-white md:font-medium font-light text-xs rounded-xl flex md:p-6 p-2">
					{@html l.sections.prixdeVente.vignettes[1]}
				</div>
			</div>
			<div class="md:w-1/5 w-1/6 md:self-end self-center md:pb-8 pb-0 md:pt-0 pt-20 justify-items-center">
				<img class="w-7 h-auto" src={egal} alt="égal">
			</div>
		</div>
	</div>

	<div class="flex flex-col items-start mt-5">
		<div class="flex">
			<div class="md:w-4/5 w:5/6 flex flex-col justify-center items-center justify-items-center">
				<div class="w-48 h-20 relative flex overflow-visible">
					<img loading="lazy" src={content} alt="Icône tasse de café">
				</div>
				<div class="h-24 w-4/5 bg-ired text-center items-center text-white md:font-medium font-light text-xs rounded-xl flex md:p-6 p-2">
					<span>{@html l.sections.prixdeVente.vignettes[2]}</span>
				</div>
			</div>
		</div>
	</div>
	
</div>

<style>

	.content {
		max-width: 160px;
		position: absolute;
		top: calc(-100% - 160px / 2);
		right: -40px;
	}

	@media (max-width: 767px) {
		.content {
			max-width: 100px;
			position: absolute;
			top: calc(-100% + 10px);
			right: -15px;
		}
	}

</style>