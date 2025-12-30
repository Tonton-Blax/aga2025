<script lang="ts">
	const { link = '', text = '', minWidth=false, spaceY = 'large' } = $props();
	const widths = ['min-w-none', 'min-w-96']
	const space = { xl: 'md:my-24 my-12', large: 'md:my-16 my-8', medium: 'md:my-8 my-4', small: 'md:my-4 my-2' }
	const minW = $derived(minWidth ? widths[1] : widths[0]);
</script>
<div class="flex flex-row w-full {space[spaceY as keyof typeof space]} justify-center relative cursor-pointer">
	<a role="button" href={link} target="_blank" class="bg-ired hover:bg-ired-400 {minW} px-5 py-4 text-sm leading-5 rounded-md font-semibold text-white text-center text-balance">
		{text}
	</a>
</div>