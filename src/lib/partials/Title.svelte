<script>
    const { title, id = `${Math.random().toString(36).substring(2, 9)}`, sub = '' } = $props();
</script>

<hr class="h-[1.5px] bg-black w-full md:mt-0 mt-10">
<h3 {id} class="text-center text-black font-bold text-3xl py-8 text-balance">
	{@html title}
</h3>
<hr class="h-[1.5px] bg-black w-full md:mb-0 mb-10">
{#if sub}
<h4 class="text-black text-xl mt-12 text-center font-light text-balance">
    {@html sub}
</h4>
{/if}
