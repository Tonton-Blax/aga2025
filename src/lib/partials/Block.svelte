<script lang="ts">
    let { children, my = '0', mt = '0', bg = undefined } = $props();
    const _my = {
        '0' :  "",
        '-96': "xl:-my-96 md:-my-60",
        '96':  "xl:my-96 md:my-60",
        '6':   "md:my-6",
        '8':   "md:my-8",
        '10':  "md:my-10",
        '12':  "md:my-12",
        '14':  "md:my-14",
        '24':  "md:my-24",
        '28':  "md:my-28",
        '32':  "md:my-32",
        '36':  "md:my-36"
    }

    const _mt = {
        '0' : "",
        '-96':"xl:-mt-120 md:-mt-60",
        '96': "xl:mt-96 md:mt-60",
        '6': "mmd:t-6",
        '8': "mmd:t-8",
        '10': "md:mt-10",
        '12': "md:mt-12",
        '14': "md:mt-14",
        '24': "md:mt-24",
        '28': "md:mt-28",
        '32': "md:mt-32",
        '36': "md:mt-36"
    }
</script>

<section class="xl:w-2/3 md:w-4/5 w-11/12 mx-auto relative {bg && `bg-${bg}`} {_my[my as keyof typeof _my]} {_mt[mt as keyof typeof _mt]}">
    {@render children()}
</section>
