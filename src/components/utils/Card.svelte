<script lang="ts">
    import User from "@tabler/icons-svelte/icons/user";

    export let title: string = "";
    export let image: string = "";
    export let description: string = "";
    export let className: string = "";
    export let primary: boolean;
    export let testimonials: string = "";
    export let name: string = "";
    export let occupation: string = "";
</script>

{#if primary}
    <div
        class={`bg-white/50 text-black/80 rounded-2xl overflow-hidden relative  transition-transform hover:scale-105 duration-300 ${className}`}
    >
        <img src={image} alt={title} class="w-full h-64 object-cover" />

        <div class="p-3 my-5 space-y-2">
            <h2
                class={`text-xl text-center md:text-left md:text-2xl font-bold text-[#189ad3]`}
            >
                {title}
            </h2>
            <p
                class="text-sm font-serif text-justify break-words hyphens-auto md:text-left"
            >
                {description}
            </p>
        </div>
        <button
            class="absolute top-3 left-3 bg-white/70 text-[#189ad3] p-2 rounded-full flex items-center justify-center hover:text-[#71c7ec] transition-all duration-300"
        >
            <a class="text-sm font-semibold" href="/">Experimente</a>
        </button>
    </div>
{:else}
    <div
        class="bg-white/50 text-black/80 rounded-2xl space-y-4 overflow-hidden p-5 transition-transform hover:scale-105 duration-300"
    >
        <p
            class="text-sm font-serif text-justify md:text-left hyphens-auto break-words"
        >
            "{testimonials}"
        </p>
        <div class="flex flex-row items-center gap-3">
            <User class="w-6 h-6 text-black" />
            <div class="flex flex-col">
                <span class="text-xs font-semibold">{name}</span>
                <span class="text-xs font-semibold">{occupation}</span>
            </div>
        </div>
    </div>
{/if}
