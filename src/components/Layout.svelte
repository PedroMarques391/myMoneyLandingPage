<script>
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
</script>

<div class="flex flex-col gap-5 bg-[#71c7ec] text-white min-h-screen">
    <Header />
    <main class="flex flex-1 flex-col max-w-7 w-full mx-auto p-5">
        <slot></slot>
    </main>
    <Footer />
</div>
