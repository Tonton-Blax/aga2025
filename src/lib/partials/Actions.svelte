<script lang="ts">
    import crieur from "$lib/assets/svgs/crieur.svg";
    const { l, dates, user, language } : { user: App.IUser | null, l: App.ILocalizedContent, language: 'fr' | 'en', dates: App.Dates } = $props();
    const localizationKey = `${user?.local || 'fr'}-${language || 'fr'}` as App.LanguageCode
</script>

<div class="md:flex flex-row w-full mx-auto xl:gap-x-24 md:gap-x-16">
    <div class="p-0 md:bg-white rounded-xl md: w-full md:w-1/2 lg:w-5/12 md:relative overflow-x-visible overflow-y-clip flex items-end">
        <img
            src={crieur}
            alt="Illustration Actions Iliad"
            class="block rounded-2xl relative z-[1] max-w-none md:ml-[20%] md:scale-125 scale-75"
        />
    </div>
    <div class="action-iliad md:w-1/2 ml-4 md:ml-0">
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

        <ul class="list-disc md:text-xl text-lg text-ired pb-1 font-head">
            <li>{l.sections.actions.nombre.label}</li>
        </ul>
        <ul class="list-none text-sm li-actions xl:pr-16">
            <li>{@html l.sections.actions.nombre.text}</li>
        </ul>
        <ul class="list-disc md:text-xl text-lg text-ired pb-1 font-head">
            <li>{l.sections.actions.cession.label}</li>
        </ul>
        <ul class="list-none text-sm li-actions xl:pr-16">
            <li>{@html l.sections.actions.cession.text}</li>
        </ul>
    </div>
</div>

<style>
    .li-actions {
        font-weight: 300;
    }
    .li-actions :global(strong) {
        font-weight: 600;
    }
    ul.list-none {
        margin-bottom: 2rem;
    }
</style>