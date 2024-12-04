<script lang="ts">
    import { onMount } from "svelte";
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
    import { IconArrowUp } from "@tabler/icons-svelte";
    import { blur } from "svelte/transition";

    let showButtton: boolean = true;

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

<div class="flex flex-col gap-5 bg-[#71c7ec] text-white min-h-screen relative">
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
            class="fixed bottom-5 right-5 md:bottom-20 md:right-28 bg-black/30 rounded-lg"
        >
            <IconArrowUp class="w-12 h-12" />
        </button>
    {/if}
</div>
