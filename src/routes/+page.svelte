<script>
    import Hero from "../components/Hero.svelte";
    import Card from "../components/utils/Card.svelte";
    import {
        IconCash,
        IconLayoutDashboard,
        IconPigMoney,
        IconSearch,
        IconUser,
    } from "@tabler/icons-svelte";
</script>

<Hero />

<section class="w-full md:w-[90%] mx-auto my-5 space-y-6">
    <h1
        class="text-2xl md:text-3xl text-center md:text-left font-semibold tracking-wide"
    >
        Diferentes Formas de usar
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <p
            class="bg-white/60 text-black/80 py-0 md:py-5 px-3 text-left rounded-xl place-content-center text-sm h-32 md:h-auto"
        >
            O <b>MyMoney</b> foi desenvolvido para se adaptar a todos os tipos de
            usuários. Com uma interface simples, intuitiva e funcional, o app transforma
            o gerenciamento financeiro em uma experiência descomplicada e eficiente.
        </p>
        <p
            class="bg-white/60 text-black/80 py-0 md:py-5 px-3 text-left rounded-xl place-content-center text-sm h-32 md:h-auto"
        >
            Organize, acompanhe e planeje suas finanças de forma prática e
            inteligente. Descubra como o <b>MyMoney</b> pode ser o parceiro ideal
            para alcançar seus objetivos financeiros.
        </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
        <Card
            image="/family.jpg"
            title="Famílias"
            description="Organize o orçamento familiar e garanta uma gestão financeira eficaz para todos."
            className="col-span-2 md:col-span-1"
        />
        <Card
            image="/individuals.jpg"
            title="Usuários Individuais"
            description="Gerencie suas finanças pessoais com facilidade e alcance seus objetivos financeiros."
        />
        <Card
            image="/business.jpg"
            title="Pequenos Negócios"
            description="Controle despesas e receitas do seu negócio de forma prática e eficiente."
        />
    </div>
</section>

<section
    class="my-5 space-y-6 gap-20 bg-white/60 grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden"
>
    <div class="flex justify-end mt-10">
        <img
            src="/demo.png"
            alt="Print da página inicial do aplicativo"
            class="object-cover h-[90%]"
        />
    </div>

    <div class="my-10">
        <ul class="space-y-4 w-full md:w-1/2 mt-12">
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
