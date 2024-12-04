<script>
    import BrandGooglePlay from "@tabler/icons-svelte/icons/brand-google-play";
</script>

<main
    class="grid grid-cols-1 md:grid-cols-2 bg-white/50 w-full rounded-2xl overflow-hidden"
>
    <section
        class="flex flex-col justify-center items-center px-5 text-black/80"
    >
        <div class="px-5 w-4/5">
            <h1 class="text-3xl font-semibold tracking-wider">
                Controle suas finanças como nunca antes
            </h1>
            <h3 class="text-sm font-sans font-medium">
                O <b>MyMoney</b> é seu assistente fincanceiro, projetado para ajudar
                você a registrar, monitorar e organizar suas despesas e receitas
                de maneira eficaz. Transforme sua gestão financeira em algo simples
                e efiencente.
            </h3>
            <div class="my-4 flex flex-row gap-3">
                <button
                    class="bg-[#189ad3] hover:bg-[#71c7ec] transition-all duration-300 text-white font-semibold p-3 w-1/2 rounded-2xl flex items-center justify-center space-x-2"
                    aria-label="Baixar APP"
                >
                    <p>Baixar APP</p>
                    <BrandGooglePlay class="w-5 h-5" />
                </button>
                <button
                    class="border border-[#189ad3] p-3 w-1/2 rounded-2xl text-[#189ad3] font-semibold hover:bg-[#71c7ec] hover:text-white transition-all duration-300"
                    >Saiba mais</button
                >
            </div>

            <ul class="mt-4 space-y-2 text-gray-700">
                <li class="flex items-center">
                    <span class="text-green-500 text-lg">✔</span>
                    <span class="ml-2">Fácil de usar</span>
                </li>
                <li class="flex items-center">
                    <span class="text-green-500 text-lg">✔</span>
                    <span class="ml-2">Seguro e confiável</span>
                </li>
                <li class="flex items-center">
                    <span class="text-green-500 text-lg">✔</span>
                    <span class="ml-2">Tudo em um só lugar</span>
                </li>
            </ul>
        </div>
    </section>
    <section class="flex flex-col justify-center items-end mt-10">
        <img
            src="/mmHero.png"
            alt="Foto da tela inicial do aplicativo"
            class="w-4/5 object-cover"
        />
    </section>
</main>
