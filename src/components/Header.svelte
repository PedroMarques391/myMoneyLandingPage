<script lang="ts">
    import { isOpen } from "../functions/store";
    import ButtonMenu from "./utils/ButtonMenu.svelte";
    import Logo from "./utils/Logo.svelte";
    import MenuDesktop from "./utils/MenuDesktop.svelte";
    import MenuMobile from "./utils/MenuMobile.svelte";
</script>

<header class="bg-[#189ad3] text-white">
    <section
        class="flex flex-row justify-between md:justify-around items-center p-5 h-20 w-full md:max-w-7xl mx-auto"
    >
        <Logo />

        <ButtonMenu />

        <MenuDesktop />

        <MenuMobile />
    </section>
</header>
