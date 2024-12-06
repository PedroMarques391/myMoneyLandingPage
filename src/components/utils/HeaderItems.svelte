<script lang="ts">
    import { isOpen } from "../../functions/store";

    export let text: string = "";
    export let href: string = "";
</script>

<li
    aria-describedby="menu-item-{text}"
    class="font-bold hover:text-white/70 transition-transform duration-300 transform hover:scale-110"
>
    <a on:click={() => isOpen.set(false)} {href}>{text}</a>
</li>
