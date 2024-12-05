<script lang="ts">
    import { onMount } from "svelte";
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import { IconArrowUp } from "@tabler/icons-svelte";
    import { blur } from "svelte/transition";

    let showButtton: boolean = false;

    function handleScroll() {
        showButtton = window.scrollY > 200;
    }

    onMount(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
</script>

<div
    id="top"
    class="flex flex-col gap-5 bg-[#71c7ec] text-white min-h-screen relative"
>
    <Header />
    <main class="flex flex-1 flex-col max-w-7xl w-full mx-auto p-5">
        <slot></slot>
    </main>
    <Footer />
    {#if showButtton}
        <button
            on:click={scrollToTop}
            in:blur={{ duration: 1000 }}
            out:blur={{ duration: 1000 }}
            class="fixed bottom-5 right-0 md:bottom-20 md:right-28 bg-black/30 md:rounded-lg z-20 rounded-s-lg"
        >
            <IconArrowUp class="w-10 h-10 md:w-12 md:h-12 " />
        </button>
    {/if}
</div>
