<svelte:window bind:innerWidth />
<script lang="ts">
	import iconeBal from "$lib/assets/svgs/bal.svg";
	import iconeLivre from "$lib/assets/svgs/livre.svg";
	import iconeMail from "$lib/assets/mail.webp";
	import iconeLock from "$lib/assets/lock.webp";

	const { etape, i } = $props();
	let innerWidth: number = $state(0);
</script>

<div class="flex flex-col justify-center items-center gap-y-2 etape">
	
	<p 
		class:hidden={!etape.date && innerWidth < 768}
		class="text-black md:text-xs text-lg md:order-none order-3"
	>
		{@html etape.date || '&nbsp;'}
	</p>

	<div class="w-11 h-11 bg-ired rounded-full grid place-items-center font-bold leading-none md:order-none order-2 border-[4px] border-igray-100 outlined">
		{i+1}
	</div>

	<div class="
		flex flex-col {i===0 ? 'justify-end mb-5 pt-6' : 'justify-evenly md:py-[unset] py-12'} items-center {i!==3 ? 'min-h-52' : '!pb-6'}
		w-full rounded-xl {etape.bgColor === 'red' ? 'bg-ired' : 'bg-igray-100'}
		md:p-[unset] md:max-w-none max-w-96 md:pt-6 {i===0 ? 'md:gap-y-4 gap-y-3' : 'md:gap-y-0 gap-y-3'} md:order-none order-4"
	>
	
		{#if i!==0 && etape.bgColor === 'red'}
		    <img class="w-1/2 h-auto" src={i===1 ? iconeLock : iconeMail} alt="Icône critère financier">
		{/if}
	
		<p class="px-6 {etape.bgColor === 'red' ? 'text-white' : 'text-black'} font-bold md:text-[0.7rem]">
			{etape.vignette}
		</p>
	
		{#if i===0}
		<img class="pt-3 w-5/6 h-auto" src={iconeBal} alt="Icône critère financier">
		{/if}
		{#if i===3}
		<img class="pt-4 w-full h-auto relative left-4" src={iconeLivre} alt="Icône critère financier">
		{/if}

	</div>

	{#if etape.description}
	<div class="md:order-none order-5">
		<p class="text-black font-medium text-sm leading-relaxed text-center mb-10 md:max-w-none max-w-96">
			{etape.description}
		</p>
		{#if etape.timeline}
		{#each etape.timeline as timeline}
		<div class="rounded-xl bg-igray-400 flex flex-col justify-center items-center text-sm leading-tight h-20 my-16 relative">
			<span class="absolute left-[49%] -top-1.5 w-4 h-4 -translate-x-1 rounded-full bg-ired border-white border-solid border-[3px]"></span>
			<span class="absolute left-[49%] translate-x-[3px] -translate-y-10 -top-[1px] w-[1.5px] h-12 bg-ired z-[2]"></span>
			<p class="px-6">{@html timeline}</p>
		</div>
		{/each}
		{/if}
	</div>
	{/if}

</div>

<style>
	.outlined {
		outline: 1px solid black;
	}
</style>