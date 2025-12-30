<script lang="ts">
	import { slide } from 'svelte/transition';
	let { open = $bindable(false), head, details } = $props();
	const handleClick = () => open = !open
</script>

<div class="accordion">
	<div class="header items-center">
		<div class="text">
			<button onclick={handleClick}>
			{@render head?.()}
			</button>
		</div>
		
		<button class="h-full w-8 text-center font-medium text-2xl" class:rotate-90={open} onclick={handleClick} >
			›
		</button>
	</div>
	
	{#if open}
	<div class="details" transition:slide>
		{#if details}
        {@render details()}
        {:else}
        Nothing here
		{/if}
	</div>
	{/if}
</div>

<style>
	div.accordion {
		margin: 1rem 0;
	}
	
	div.header {
		display:flex;
		width:100%;
	}
	
	div.header .text {
		flex: 1;
		margin-right: 5px;
	}
	
	div.details {
		/* background-color: #cecece; */
		padding:1rem 0rem;
	}
</style>
