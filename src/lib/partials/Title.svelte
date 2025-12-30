<script>
    const { title, id = `${Math.random().toString(36).substring(2, 9)}` } = $props();
</script>

<hr class="h-1 bg-white w-full md:mt-0 mt-10">
<h3 {id} class="text-center text-igray-200 font-bold text-3xl py-8 text-balance">
	{title}
</h3>
<hr class="h-1 bg-white w-full md:mb-0 mb-10">
