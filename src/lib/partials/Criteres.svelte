<script lang="ts">
    import icone1 from "$lib/assets/icone-01.webp";
	import icone2 from "$lib/assets/icone-02.webp";
    const { l } : { l: App.ILocalizedContent } = $props();

</script>
<div class="pt-10 xl:px-72 md:px-32 xl:max-w-none md:max-w-4xl mx-auto px-4 text-white text-center grid grid-cols-2 xl:gap-x-6 gap-x-3">
    <div class="w-auto flex flex-col items-center">
        <img width="82" class="aspect-1 justify-self-center" src={icone1} alt="Icône critère financier">
        <p class="pt-3.5 text-ired md:text-xl text-lg font-light">
            {l.sections.blackBlock.criteres[0].title}
        </p>
        <p class="italic text-lg text-igray-200 font-light">
            {l.sections.blackBlock.criteres[0].chiffre}%
        </p>
        <p class="text-sm md:font-medium font-light mt-2 md:max-w-none max-w-60">
            {l.sections.blackBlock.criteres[0].description}
        </p>
    </div>	
    <div class="w-auto flex flex-col items-center">
        <img width="82" class="aspect-1 justify-self-center" src={icone2} alt="Icône critère financier">
        <p class="pt-3.5 text-ired md:text-xl text-lg font-light">
            {l.sections.blackBlock.criteres[1].title}
        </p>
        <p class="italic text-lg text-igray-200 font-light">
            {l.sections.blackBlock.criteres[1].chiffre}%
        </p>
        <p class="text-sm md:font-medium font-light mt-2 md:max-w-none max-w-60">
            {l.sections.blackBlock.criteres[1].description}
        </p>
    </div>	
    
</div>

<h5 id="criteres-sub" class="text-igray-200 text-sm font-bold text-center mt-10 mb-4 max-w-xl px-2 mx-auto">
    {@html l.sections.blackBlock.criteresSubtitle}
</h5>
