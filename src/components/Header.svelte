<script lang="ts">
    import { onMount } from "svelte";
    import ButtonMenu from "./utils/ButtonMenu.svelte";
    import Logo from "./utils/Logo.svelte";
    import MenuDesktop from "./utils/MenuDesktop.svelte";
    import MenuMobile from "./utils/MenuMobile.svelte";

    let changeSizeHeader: boolean = false;

    function handleScroll() {
        changeSizeHeader = window.scrollY > 200;
    }

    onMount(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<header
    class={`bg-[#189ad3] text-white sticky top-0 left-0 z-30 ${changeSizeHeader ? "shadow-black/50 shadow-md h-22" : "h-20"} transition-all duration-300 ease-in-out`}
>
    <section
        class="flex flex-row justify-between md:justify-around items-center p-5 h-20 w-full md:max-w-7xl mx-auto"
    >
        <Logo />

        <ButtonMenu />

        <MenuDesktop />

        <MenuMobile />
    </section>
</header>
