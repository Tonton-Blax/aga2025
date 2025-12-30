<script>
	const { offset = 0, reverse = false } = $props();
	const offsets = [
		'-top-2','-top-4','-top-8','-top-16','-top-20','-top-24','-top-32','-top-48', '-top-64'
	]
</script>
<button
	 aria-label="scroll to top" 
	 class="md:block relative hidden xl:ml-5 md:ml-0 z-10 {offsets[offset]}" 
	 class:reverse
	 onclick={() => window.scrollTo(0, reverse? document.body.scrollHeight : 0)}
>
	<div class="cursor-pointer w-12 h-12 xl:ml-24 md:ml-[50%] p-3 border-2 border-offset-2 border-white rounded-lg -translate-y-1/2 bg-igray-100">
		<svg 
			class="group-hover:fill-ired" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"
		>
			<path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>
		</svg>
	</div>
</button>

<style lang="postcss">
	
	button.reverse svg {
		@apply rotate-180;
	}
	button:hover svg {
		@apply fill-ired scale-125;
	}
	button.reverse:hover svg {
		@apply fill-ired scale-125 rotate-180;
	}
</style>