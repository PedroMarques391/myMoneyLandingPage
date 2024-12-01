<script lang="ts">
    export let text: string = "";
    export let href: string = "";
</script>

<li
    role="menuitem"
    class="font-bold hover:text-white/70 transition-transform duration-300 transform hover:scale-110"
>
    <a {href}>{text}</a>
</li>
