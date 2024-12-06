<script lang="ts">
    import BrandGooglePlay from "@tabler/icons-svelte/icons/brand-google-play";
    import { onMount } from "svelte";

    let AOS: any;

    onMount(async () => {
        if (typeof window !== "undefined") {
            const aos = await import("aos");
            AOS = aos.default;
            AOS.init({
                duration: 800,
                once: true,
            });
        }
    });

    const text: string = "Controle suas finanças como nunca antes";
    let displayText: string = "";
    let index: number = 0;

    onMount(() => {
        const type = () => {
            if (index < text.length) {
                displayText += text[index];
                index++;
                setTimeout(type, 100);
            }
        };
        type();
    });
</script>

<main
    class="grid grid-cols-1 md:grid-cols-2 bg-white/50 w-full rounded-2xl overflow-hidden"
>
    <section
        class="flex flex-col justify-center items-center px-5 text-black/80 order-2 md:order-1"
    >
        <div class="px-5 w-full md:w-4/5 my-10 md:my-0">
            <h1
                class="text-2xl md:text-3xl font-semibold tracking-wider text-[#189ad3] leading-6 md:leading-none"
            >
                {displayText}
            </h1>
            <h2 class="text-sm font-sans font-medium mt-2">
                O <b class="text-[#189ad3]">MyMoney</b> é seu assistente financeiro,
                projetado para ajudar você a registrar, monitorar e organizar suas
                despesas e receitas de maneira eficaz. Transforme sua gestão financeira
                em algo simples e eficiente.
            </h2>
            <div class="my-4 flex flex-row gap-6">
                <button
                    class="bg-[#189ad3] hover:bg-[#71c7ec] transition-all duration-300 text-white font-semibold p-2 md:p-3 flex-1 rounded-2xl flex items-center justify-center space-x-2 text-sm md:text-base"
                    aria-label="Baixar APP"
                >
                    <p>Baixar APP</p>
                    <BrandGooglePlay class="w-5 h-5" />
                </button>

                <a
                    class="border border-[#189ad3] p-2 md:p-3 flex-1 rounded-2xl text-[#189ad3] font-semibold hover:bg-[#71c7ec] hover:text-white transition-all duration-300 text-sm md:text-base text-center"
                    href="#about"
                >
                    Saiba mais
                </a>
            </div>

            <ul class="mt-4 space-y-2 text-gray-700">
                <li
                    data-aos="fade-right"
                    data-aos-duration={1000}
                    class="flex items-center"
                >
                    <span class="text-green-500 text-lg">✔</span>
                    <span class="ml-2">Fácil de usar</span>
                </li>
                <li
                    data-aos="fade-right"
                    data-aos-duration={2000}
                    class="flex items-center"
                >
                    <span class="text-green-500 text-lg">✔</span>
                    <span class="ml-2">Seguro e confiável</span>
                </li>
                <li
                    data-aos="fade-right"
                    data-aos-duration={3000}
                    class="flex items-center"
                >
                    <span class="text-green-500 text-lg">✔</span>
                    <span class="ml-2">Tudo em um só lugar</span>
                </li>
            </ul>
        </div>
    </section>
    <section class="flex flex-col items-end mt-10 order-1 md:order-2">
        <img src="/mmHero2.png" alt="Foto da tela inicial do aplicativo" />
    </section>
</main>
