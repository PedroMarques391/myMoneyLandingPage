<script lang="ts">
    import HeaderItems from "./HeaderItems.svelte";
    import { isOpen } from "../../functions/store";
    import { fly } from "svelte/transition";
</script>

{#if $isOpen}
    <ul
        class="z-0 fixed flex flex-col md:hidden ml-10 justify-center top-0 right-0 w-1/2 gap-5 text-center items-center
            p-5 h-screen bg-[#189ad3] text-xl"
        in:fly={{ x: 300, duration: 600 }}
        out:fly={{ x: 300, duration: 600 }}
    >
        <HeaderItems text="Inicio" href="#" />
        <HeaderItems text="Sobre" href="#about" />
        <HeaderItems text="Demonstração" href="#demonstration" />
        <HeaderItems text="Download" href="#download" />
    </ul>
{/if}
