<script lang="ts">
	import Accordion from '$lib/Accordion.svelte';
    const { l } : { l: App.ILocalizedContent } = $props();
</script>
{#each l.sections.faq.qa as faq, i}
<div class="faq-item">
    <Accordion>
        {#snippet head()}
            <p class="text-sm font-medium text-left">{i+1}.&nbsp;{faq.question}</p>
        {/snippet}
        {#snippet details()}
            <p class="prose font-light pr-8 text-left">{@html faq.reponse}</p>
        {/snippet}
    </Accordion>
    <hr class="h-1 bg-white w-full my-2">
</div>
{/each}
