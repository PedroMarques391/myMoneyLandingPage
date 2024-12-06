<script lang="ts">
    import Hero from "../components/Hero.svelte";
    import Card from "../components/utils/Card.svelte";
    import {
        IconCash,
        IconLayoutDashboard,
        IconPigMoney,
        IconSearch,
        IconUser,
    } from "@tabler/icons-svelte";
    import Demonstration from "../components/utils/Demonstration.svelte";
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
</script>

<Hero />

<section id="about" class="w-full md:w-[90%] mx-auto my-5 space-y-6">
    <h1
        class="text-2xl md:text-3xl text-center md:text-left font-semibold tracking-wide"
    >
        Diferentes Formas de usar
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <p
            data-aos="flip-left"
            class="bg-white/60 text-black/80 py-2 md:py-5 px-5 text-justify md:text-left rounded-xl place-content-center text-sm h-32 md:h-auto hyphens-auto break-words"
        >
            O <b class="text-[#189ad3]">MyMoney</b> foi desenvolvido para se adaptar
            a todos os tipos de usuários. Com uma interface simples, intuitiva e
            funcional, o app transforma o gerenciamento financeiro em uma experiência
            descomplicada e eficiente.
        </p>
        <p
            data-aos="flip-right"
            class="bg-white/60 text-black/80 py-2 md:py-5 px-5 text-justify md:text-left rounded-xl place-content-center text-sm h-32 md:h-auto hyphens-auto break-words"
        >
            Organize, acompanhe e planeje suas finanças de forma prática e
            inteligente. Descubra como o <b>MyMoney</b> pode ser o parceiro ideal
            para alcançar seus objetivos financeiros.
        </p>
    </div>

    <div data-aos="fade-up" class="grid grid-cols-2 md:grid-cols-3 gap-5">
        <Card
            primary
            image="/family.jpg"
            title="Famílias"
            description="Organize o orçamento familiar e garanta uma gestão financeira eficaz para todos."
            className="col-span-2 md:col-span-1"
        />
        <Card
            primary
            image="/individuals.jpg"
            title="Usuários Individuais"
            description="Gerencie suas finanças pessoais com facilidade e alcance seus objetivos financeiros."
        />
        <Card
            primary
            image="/business.jpg"
            title="Pequenos Negócios"
            description="Controle despesas e receitas do seu negócio de forma prática e eficiente."
        />
    </div>
</section>

<section
    class="my-5 space-y-6 gap-x-20 bg-white/60 grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden"
>
    <div
        data-aos="fade-right"
        data-aos-duration={1000}
        class="flex justify-center md:justify-end mt-10"
    >
        <img
            src="/demo.png"
            alt="Print da página inicial do aplicativo"
            class="object-contain max-w-[80%] h-auto md:h-[90%]"
        />
    </div>

    <div data-aos="fade-left" data-aos-duration={1000} class="my-10">
        <ul
            class="space-y-4 mx-auto md:mx-0 w-4/5 md:w-4/5 lg:w-3/5 mt-0 mb-10 md:mb-0 md:mt-12"
        >
            <li
                class="bg-white text-[#189ad3] p-4 rounded-lg flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow"
            >
                <IconSearch class="w-6 h-6 text-[#189ad3]" />
                <span class="font-medium"
                    >Consultar informações financeiras</span
                >
            </li>

            <li
                class="bg-white text-[#189ad3] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
                <div class="flex items-center gap-4 mb-2">
                    <IconUser class="w-6 h-6 text-[#189ad3]" />
                    <span class="font-medium">Edite seu perfil como quiser</span
                    >
                </div>
                <p class="text-sm leading-relaxed text-gray-600">
                    Com o MyMoney, você tem total liberdade para personalizar
                    seu perfil do jeito que preferir. Atualize sua foto, nome,
                    profissão e número de telefone de forma rápida e simples.
                </p>
            </li>

            <li
                class="bg-white text-[#189ad3] p-4 rounded-lg flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow"
            >
                <IconPigMoney class="w-6 h-6 text-[#189ad3]" />
                <span class="font-medium">Observe suas economias</span>
            </li>

            <li
                class="bg-white text-[#189ad3] p-4 rounded-lg flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow"
            >
                <IconLayoutDashboard class="w-6 h-6 text-[#189ad3]" />
                <span class="font-medium">Organização Financeira</span>
            </li>

            <li
                class="bg-white text-[#189ad3] p-4 rounded-lg flex items-center gap-4 shadow-md hover:shadow-lg transition-shadow"
            >
                <IconCash class="w-6 h-6 text-[#189ad3]" />
                <span class="font-medium">Gerenciamento de Receitas</span>
            </li>
        </ul>
    </div>
</section>

<Demonstration />

<section
    data-aos="fade-up"
    data-aos-duration="2000"
    class="w-full md:w-[90%] mx-auto my-5 space-y-6"
>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-6 md:gap-y-12">
        <h1
            class="text-xl font-semibold tracking-wider text-center md:text-left"
        >
            O que dizem sobre o MyMoney?
        </h1>
        <p class="text-sm font-serif text-justify md:text-left">
            Embora o MyMoney ainda não esteja disponível nas lojas, os
            depoimentos abaixo refletem a experiência de usuários que testaram o
            app na versão beta.
        </p>
        <p class="text-sm font-serif text-justify md:text-left">
            Descubra como o MyMoney tem ajudado a transformar o gerenciamento
            financeiro!
        </p>
        <Card
            primary={false}
            name="João da Silva"
            occupation="Estudante"
            testimonials="Com o MyMoney, finalmente consegui organizar minha mesada e planejar meus gastos. Agora sei exatamente quanto posso gastar sem comprometer meu orçamento!"
        />

        <Card
            primary={false}
            name="Henrique Marques"
            occupation="Analista de Sistemas"
            testimonials="O MyMoney revolucionou a forma como controlo minhas finanças. É incrível poder acompanhar cada detalhe dos meus gastos e identificar onde posso economizar."
        />

        <Card
            primary={false}
            name="Leonardo da Silva"
            occupation="Concurseiro"
            testimonials="Estudar e gerenciar dinheiro ao mesmo tempo era um desafio. Com o MyMoney, ficou muito mais fácil manter o controle e focar nos meus objetivos sem preocupações financeiras."
        />
    </div>
</section>
