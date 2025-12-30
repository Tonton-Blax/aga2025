
<script>
	import { page } from '$app/stores';
</script>

<section class="bg-white h-full min-h-screen">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center flex flex-col justify-center align-center">
            {#if $page?.status !== 418}
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">
                {$page?.status || '404'}
            </h1>
            <!-- <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's missing.</p> -->
            <p class="mb-4 text-lg font-light text-gray-500">{$page?.error?.message}</p>
            {/if}
        </div>   
    </div>
</section>