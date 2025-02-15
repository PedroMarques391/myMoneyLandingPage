<script lang="ts">
    import ArrowLeft from "@tabler/icons-svelte/icons/arrow-left";
    import ArrowRight from "@tabler/icons-svelte/icons/arrow-right";
    import { onMount } from "svelte";

    type TCarouselType = {
        title: string;
        src: string;
        alt: string;
    };

    export let images: TCarouselType[];

    let currentIndex: number = 0;
    let autoRotateInterval: any;

    const nextSlide = (): void => {
        currentIndex < images.length - 1
            ? (currentIndex += 2)
            : (currentIndex = 0);
    };

    const prevSlide = (): void => {
        currentIndex > 0 ? (currentIndex -= 2) : (currentIndex = 0);
    };

    const startAutoRotate = (intervalMs = 3000): void => {
        stopAutoRotate();
        autoRotateInterval = setInterval(nextSlide, intervalMs);
    };

    const stopAutoRotate = (): void => {
        if (autoRotateInterval) {
            clearInterval(autoRotateInterval);
        }
    };

    onMount(() => {
        startAutoRotate();
        return () => stopAutoRotate();
    });
</script>

<div class="relative overflow-hidden rounded-lg">
    <button
        class="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 z-10 rounded-full shadow-md hover:shadow-lg disabled:bg-gray-200 disabled:shadow-none disabled:text-gray-400 disabled:cursor-not-allowed transition-all duration-300 ease-in-out"
        on:click={prevSlide}
        disabled={currentIndex === 0}
        aria-label="Anterior"
    >
        <ArrowLeft
            aria-label="Seta para esquerda"
            class="w-6 h-6 text-gray-600"
        />
    </button>

    <ul
        class="flex transition-transform duration-300 ease-in-out"
        style="transform: translateX(-{currentIndex * (100 / 3.0)}%)"
    >
        {#each images as { title, src, alt }}
            <li class="shrink-0 w-3/4 md:w-1/2 lg:w-[40%] mx-2">
                <img {title} {src} {alt} class="rounded w-full object-cover" />
            </li>
        {/each}
    </ul>

    <button
        class="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-gray-950 hover:shadow-lg z-10 disabled:bg-gray-200 disabled:shadow-none disabled:text-gray-400 disabled:cursor-not-allowed transition-all duration-300 ease-in-out"
        on:click={nextSlide}
        disabled={currentIndex === images.length - 1}
        aria-label="Seguinte"
    >
        <ArrowRight
            aria-label="Seta para direita"
            class="w-6 h-6 text-gray-600"
        />
    </button>
</div>
