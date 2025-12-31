<script lang="ts">
    import icone1 from "$lib/assets/svgs/graph.svg";
	import icone2 from "$lib/assets/svgs/eco.svg";
    import what from "$lib/assets/svgs/what.svg";
    const { l } : { l: App.ILocalizedContent } = $props();

</script>
<div class="pt-10 xl:max-w-none md:max-w-4xl mx-auto px-12 md:px-24 text-black text-center grid md:grid-cols-2 xl:gap-x-6 mt-6 mb-12">
    <div class="w-auto flex flex-col gap-y-12 self-center">
        <div class="flex flex-row gap-x-6 items-start">
            <img width="82" class="aspect-1" src={icone1} alt="Icône critère financier">
            <div class="text-start">
                <p class="text-ired md:text-xl text-lg font-light">
                    {l.sections.blackBlock.criteres[0].title}
                </p>
                <p class="text-sm md:font-medium font-light mt-2 md:max-w-none max-w-60">
                    {l.sections.blackBlock.criteres[0].description}
                </p>
            </div>
        </div>
        <!-- <p class="italic text-lg text-igray-200 font-light">
            {l.sections.blackBlock.criteres[0].chiffre}%
        </p> -->
        <div class="flex flex-row gap-x-6 items-start">

            <img width="82" class="aspect-1" src={icone2} alt="Icône critère financier">
            <div class="text-start">
                <p class="text-ired md:text-xl text-lg font-light">
                    {l.sections.blackBlock.criteres[1].title}
                </p>
                <!-- <p class="italic text-lg text-igray-200 font-light">
                    {l.sections.blackBlock.criteres[1].chiffre}%
                </p> -->
                <p class="text-sm md:font-medium font-light mt-2 md:max-w-none max-w-60">
                    {l.sections.blackBlock.criteres[1].description}
                </p>
            </div>
        </div>
    </div>	
    <div class="w-auto flex flex-col items-center pl-12 justify-center">
        <div class="p-0 md:bg-igray-200 rounded-xl w-full max-h-[600px] lg:h-[90%] md:relative overflow-y-visible flex items-end">
        <img 
            src={what}
            alt="Illustration Actions Iliad"
            class="block rounded-2xl relative z-[1] max-w-none w-10/12"
        />
    </div>
    </div>	

    
</div>
<!-- 
<h5 id="criteres-sub" class="text-igray-200 text-sm font-bold text-center mt-10 mb-4 max-w-xl px-2 mx-auto">
    {@html l.sections.blackBlock.criteresSubtitle}
</h5> -->
