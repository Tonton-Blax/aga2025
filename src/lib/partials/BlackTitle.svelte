<script>
	const { title, sub='', id = `${Math.random().toString(36).substring(2, 9)}` } = $props();
</script>
<div class="md:pt-20 pt-14 pb-4 xl:px-48 md:px-20 px-4 text-white text-center">
	<h3 {id} class="text-ired font-extrabold leading-8 text-3xl">
		{@html title}
	</h3>
	<h4 class="text-white text-xl mt-5">
		{@html sub}
	</h4>
</div>