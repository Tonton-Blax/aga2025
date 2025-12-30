<script lang="ts">
	import { fadeBlur } from '$lib/transition';
    const { user, l, language } : { user: App.IUser | null, l: App.ILocalizedContent, language: 'fr' | 'en' } = $props();
    import apercu from "$lib/assets/apercu@2x.jpg";

    const ids = {
        fr: 'CbzD9YuEGzTnKGG4j8qFliRqr2giqfyxjG6D01xQSj9s',
        pl: 'DlrK01ql2F6Bw3M64NELSrpuvSuFQr9FOthQpR01CmjEA',
        it: 'kuRrnOlt79RgoLQM6D01b92ycik1kFqffqWzmNJiJFjw'
    }

	const localKey = $derived(user?.local === 'pl' || user?.local === 'it' || user?.local === 'fr' ? user.local : 'fr');
	const muxId = $derived(ids[localKey as keyof typeof ids]);
</script>


<div>
    {#await import('$lib/Video.svelte') then Video}
    <Video.default
        src={`https://stream.mux.com/${muxId}.m3u8`}
        poster={apercu}
    />
    {/await}
    <p class="pt-2 md:text-xs text-md text-igray-400 font-semibold text-center mt-2 text-balance">
        {@html l.sections.videos.label1}
    </p>
</div>