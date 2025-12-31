<script lang="ts">
	const { link = '', text = '', minWidth=false, spaceY = 'large', smallText = false, fullW = false } = $props();
	const widths = ['min-w-none', 'min-w-96', 'w-full'];
	const space = { xl: 'md:my-24 my-12', large: 'md:my-16 my-8', medium: 'md:my-8 my-4', small: 'md:my-4 my-2' }
	const width = $derived(minWidth ? widths[1] : fullW ? widths[2] : widths[0]);
	const textSize = $derived(smallText ? 'text-xs' : 'text-sm md:text-base');
</script>
<div class="{textSize} flex flex-row w-full {space[spaceY as keyof typeof space]} justify-center relative cursor-pointer font-head">
	<a role="button" href={link} target="_blank" class="bg-ired hover:bg-ired-400 {width} px-5 py-4 leading-5 rounded-md font-bold tracking-wider text-white text-center text-balance">
		{text}
	</a>
</div>