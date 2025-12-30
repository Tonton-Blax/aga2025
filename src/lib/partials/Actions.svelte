<script lang="ts">
    const { l, dates, user, language } : { user: App.IUser | null, l: App.ILocalizedContent, language: 'fr' | 'en', dates: App.Dates } = $props();
    const localizationKey = `${user?.local || 'fr'}-${language || 'fr'}` as App.LanguageCode
</script>

<div class="action-iliad">
    <ul class="list-disc md:text-xl text-lg text-ired pb-1 font-head">
        <li>{l.sections.actions.date.label}</li>
    </ul>
    <ul class="list-none text-sm li-actions">
        <li>{@html 
            l.sections.actions.date.text
            .replaceAll('{{ tranche1 }}', dates.tranche1[localizationKey])
            .replaceAll('{{ tranche2 }}', dates.tranche2[localizationKey])
            .replaceAll('{{ day }}', dates.day[localizationKey])
        }
        </li>
    </ul>
</div>


<div class="action-iliad">
    <ul class="list-disc md:text-xl text-lg text-ired pb-1 font-head">
        <li>{l.sections.actions.nombre.label}</li>
    </ul>
    <ul class="list-none text-sm li-actions xl:pr-16">
        <li>{@html l.sections.actions.nombre.text}</li>
    </ul>
</div>


<div class="action-iliad">
    <ul class="list-disc md:text-xl text-lg text-ired pb-1 font-head">
        <li>{l.sections.actions.conditions.label}</li>
    </ul>
    <ul class="list-none text-sm li-actions">
        <li>{@html 
                l.sections.actions.conditions.text
                .replaceAll('{{ tranche1 }}', dates.tranche1[localizationKey])
                .replaceAll('{{ tranche2 }}', dates.tranche2[localizationKey])
                .replaceAll('{{ day }}', dates.day[localizationKey])
            }
        </li>
    </ul>
</div>


<div class="action-iliad">
    <ul class="list-disc md:text-xl text-lg text-ired pb-1 font-head">
        <li>{l.sections.actions.cession.label}</li>
    </ul>
    <ul class="list-none text-sm li-actions xl:pr-16">
        <li>{@html l.sections.actions.cession.text}</li>
    </ul>
</div>

<style>
    .li-actions {
        font-weight: 300;
    }
    .li-actions :global(strong) {
        font-weight: 600;
    }
</style>