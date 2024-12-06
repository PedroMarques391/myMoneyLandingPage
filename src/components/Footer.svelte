<script>
    import {
        IconBrandFacebook,
        IconBrandInstagram,
        IconBrandLinkedin,
    } from "@tabler/icons-svelte";
    import Logo from "./utils/Logo.svelte";
</script>

<footer class="bg-[#189ad3] text-white py-8">
    <div
        class="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8"
    >
        <div class="flex flex-col items-center md:items-start gap-y-5">
            <Logo />
            <p class="text-sm text-justify hyphens-auto break-words">
                O MyMoney é o aplicativo ideal para você organizar suas finanças
                de forma simples e eficiente. Nosso objetivo é ajudar você a
                alcançar suas metas financeiras.
            </p>
        </div>

        <div>
            <h1 class="text-lg font-semibold mb-4">Links Úteis</h1>
            <ul class="space-y-2">
                <li><a href="/about" class="hover:underline">Quem Somos</a></li>
                <li>
                    <a href="/features" class="hover:underline"
                        >Funcionalidades</a
                    >
                </li>
                <li>
                    <a href="/privacy-policy" class="hover:underline"
                        >Política de Privacidade</a
                    >
                </li>
                <li><a href="/contact" class="hover:underline">Contato</a></li>
            </ul>
        </div>

        <div>
            <h3 class="text-lg font-semibold mb-4">Redes Sociais</h3>
            <p class="text-sm mb-4">
                Siga-nos nas redes sociais e fique por dentro das novidades:
            </p>
            <div class="flex space-x-4">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    aria-label="Link para o github"
                    class="hover:opacity-80"
                >
                    <IconBrandFacebook class="h-7 w-7" />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    aria-label="Link para o Instagram"
                    class="hover:opacity-80"
                >
                    <IconBrandInstagram class="h-7 w-7" />
                </a>
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    aria-label="Link para o Linkedin"
                    class="hover:opacity-80"
                >
                    <IconBrandLinkedin class="h-7 w-7" />
                </a>
            </div>
        </div>
    </div>
    <div class="text-center mt-8 text-sm text-white/80">
        © 2024 MyMoney - Todos os direitos reservados.
    </div>
</footer>
