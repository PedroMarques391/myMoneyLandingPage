<script lang="ts">
    import { isOpen } from "../../functions/store";

    export let className: string = "";

    function onClick() {
        isOpen.update((current) => !current);
    }
</script>

<button
    on:click={onClick}
    aria-label="Toggle menu"
    class={`md:hidden w-8 h-8 z-10 ${className}`}
>
    <div
        class={`${$isOpen ? "rotate-45 translate-y-2" : "rotate-0"}
            bg-white h-1 w-full mb-1 transition-transform block relative 
            `}
    ></div>
    <div
        class={`bg-white h-1 w-full ${$isOpen ? "opacity-0" : "opacity-100"} 
                transition-opacity block relative`}
    ></div>
    <div
        class={`${$isOpen ? "-rotate-45 -translate-y-2" : "rotate-0"}
                bg-white h-1 w-full mt-1 transition-transform block relative  
                `}
    ></div>
</button>
