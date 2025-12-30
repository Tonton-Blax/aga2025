<script lang="ts">
	const { l } : { l: App.ILocalizedContent } = $props();

</script>

<nav class="md:flex xl:flex-col hidden max-w-[1160px] mx-auto text-left flex-row mt-6 pb-48 py-3 xl:place-content-start md:place-content-center">
	<ul class="xl:block md:flex md:flex-row md:gap-x-6 md:items-end space-y-3 text-igray-200 relative font-head">
		<li class="hover:text-ired cursor-pointer"><a href="/">{l.general.menu.lettre}</a></li>
		<li class="hover:text-ired cursor-pointer"><a href="#videos">{l.general.menu.videos}</a></li>
		<li class="hover:text-ired cursor-pointer"><a href="#conditions">{l.general.menu.conditions}</a></li>
		<li class="hover:text-ired cursor-pointer"><a href="#acceptation">{l.general.menu.acceptation}</a></li>
		<li class="hover:text-ired cursor-pointer"><a href="#vente">{l.general.menu.vente}</a></li>
		<li class="hover:text-ired cursor-pointer"><a href="#faq">{l.general.menu.faq}</a></li>
		<li class="hover:text-ired cursor-pointer"><a href="#documents">{l.general.menu.documents}</a></li>
	</ul>
 </nav>

