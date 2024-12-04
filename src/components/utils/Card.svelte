<script lang="ts">
    export let title: string;
    export let image: string;
    export let description: string;
    export let className: string = "";
</script>

<div
    class={`bg-white/50 text-black/80 rounded-2xl overflow-hidden relative ${className}`}
>
    <img src={image} alt={title} class="w-full h-64 object-cover" />
    <div class="p-3 my-5 space-y-2">
        <h2
            class={`text-xl text-center md:text-left md:text-2xl font-bold text-[#189ad3]`}
        >
            {title}
        </h2>
        <p class="text-sm font-serif">{description}</p>
    </div>
    <button
        class="absolute top-3 left-3 bg-white/70 text-[#189ad3] p-2 rounded-full flex items-center justify-center hover:text-[#71c7ec] transition-all duration-300"
    >
        <a class="text-sm font-semibold" href="/">Experimente</a>
    </button>
</div>
