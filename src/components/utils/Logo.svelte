<script>
    import { isOpen } from "../../functions/store";
</script>

<a
    href="#top"
    on:click={() => isOpen.set(false)}
    class="flex justify-center items-center gap-2"
>
    <img src="/MMLogo.png" alt="MYMoney Logo" class="w-16 h-16" />
    <div class="flex flex-col">
        <span class="leading-7 tracking-widest">MY</span>
        <span class="-mt-3 tracking-widest">MONEY</span>
    </div>
</a>
