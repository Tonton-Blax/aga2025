<script>
	const { offset = 0, reverse = false } = $props();
	const offsets = [
		'top-0', '-top-2','-top-4','-top-10','-top-16','-top-20','-top-24','-top-32','-top-48', '-top-64'
	]
</script>
<button
	 aria-label="scroll to top" 
	 class="md:block relative hidden xl:ml-5 md:ml-0 z-10 {offsets[offset]}" 
	 class:reverse
	 onclick={() => window.scrollTo(0, reverse? document.body.scrollHeight : 0)}
>
	<div class="cursor-pointer w-16 h-24 xl:ml-24 md:ml-[50%] p-3 rounded-lg -translate-y-1/2 bg-igray-200 bg-opacity-50">
		<svg 
			class="group-hover:fill-ired scale-75 stroke-black {reverse ? "translate-y-7" : "translate-y-6"}"
			xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38.39" height="20.757" viewBox="0 0 38.39 20.757"
		>
			<defs>
				<clipPath id="clip-path">
				<rect id="Rectangle_1089" data-name="Rectangle 1089" width="38.39" height="20.757" fill="none" stroke-width="3"/>
				</clipPath>
			</defs>
			<g id="Groupe_102" data-name="Groupe 102" transform="translate(38.39 20.757) rotate(180)">
				<g id="Groupe_45" data-name="Groupe 45" clip-path="url(#clip-path)">
				<path id="Tracé_54" data-name="Tracé 54" d="M70.266,35,52.633,52.633,35,35" transform="translate(-33.438 -33.438)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
				</g>
			</g>
		</svg>

	</div>
</button>

<style lang="postcss">
	
	button.reverse svg {
		@apply rotate-180;
	}
	button:hover svg {
		@apply stroke-ired scale-100 transition-all;
	}
	button.reverse:hover svg {
		@apply stroke-ired scale-100 rotate-180;
	}
</style>