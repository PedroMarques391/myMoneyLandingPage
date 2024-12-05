<script lang="ts">
    import Carousel from "./Carousel.svelte";

    const images = [
        {
            title: "Home",
            src: "/carouselImages/homeScreen.png",
            alt: "Página inicial da aplicação",
        },
        {
            title: "Home (Variante 2)",
            src: "/carouselImages/homeScreen2.png",
            alt: "Segunda variante da página inicial da aplicação",
        },
        {
            title: "Login",
            src: "/carouselImages/login.png",
            alt: "Tela de login da aplicação",
        },
        {
            title: "Perfil",
            src: "/carouselImages/profileScreen.png",
            alt: "Tela de perfil do usuário da aplicação",
        },
        {
            title: "Edição de Perfil",
            src: "/carouselImages/profileModal.png",
            alt: "Modal de edição do perfil do usuário na aplicação",
        },
        {
            title: "Registro",
            src: "/carouselImages/registerScreen.png",
            alt: "Tela de registro de usuários na aplicação",
        },
        {
            title: "Cadastro",
            src: "/carouselImages/signup.png",
            alt: "Tela de cadastro de usuários na aplicação",
        },
    ];
</script>

<section
    id="demonstration"
    class="bg-white/60 py-5 md:py-10 px-5 md:px-20 rounded-lg"
>
    <div class=" mx-auto space-y-8">
        <div class="text-center space-y-2">
            <h2 class="text-lg md:text-3xl font-bold text-[#189ad3]">
                Veja como o MyMoney pode facilitar sua vida
            </h2>
            <p class="text-gray-600 text-sm md:text-base">
                Veja como o MyMoney pode facilitar sua vida. Confira o vídeo e
                imagens abaixo.
            </p>
        </div>

        <div
            class="flex flex-col md:flex-row items-center justify-center gap-10 w-full"
        >
            <div class="flex-1 max-w-md md:max-w-full">
                <Carousel {images} />
            </div>

            <div class="flex-1 max-w-md md:max-w-full">
                <video
                    src="/video/myMoney.mp4"
                    title="Demonstração do MyMoney"
                    class="w-full h-full md:h-[400px] lg:h-[500px] rounded-lg object-contain"
                    controls
                    autoplay
                    muted
                    loop
                >
                    Seu navegador não suporta o elemento de vídeo.
                </video>
            </div>
        </div>
    </div>
</section>
