<script>
    export let data;
</script>

<svelte:head>
    <title>Ardita Digital – Tech for the Future</title>
    <meta name="description" content="Ardita Digital brings modern technology closer to you. Explore powerful smartphones and smart devices." />
    <meta name="author" content="Ardita Digital" />
</svelte:head>

<!-- HERO -->
<section class="grid md:grid-cols-2 items-center min-h-[500px] bg-gradient-to-r from-purple-100 to-blue-100">
    <div class="p-10 md:p-20 space-y-6">
        <h2 class="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Technology that Fits Your Life
        </h2>
        <p class="text-gray-700 text-lg md:text-xl">
            Explore the latest smartphones and smart devices with speed, style, and reliability.
        </p>
        <button class="mt-4 px-8 py-3 bg-purple-600 text-white rounded-2xl font-semibold hover:bg-purple-700 shadow-lg transition">
            Explore Now
        </button>
    </div>

    <div class="flex justify-center p-6 md:p-12">
        <img 
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" 
            alt="Smartphone"
            class="rounded-3xl shadow-2xl w-[350px] md:w-[450px] object-cover"
        />
    </div>
</section>

<!-- FEATURED DEVICES -->
<section class="max-w-7xl mx-auto px-6 py-20">
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-14 text-gray-900">
        Featured Devices
    </h2>

    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {#each data.products as product}
        <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
            <img src={product.image_url} alt={product.name} class="w-full h-48 object-cover"/>
            <div class="p-5 space-y-3">
                <h3 class="text-lg md:text-xl font-semibold text-gray-800">{product.name}</h3>
                <p class="text-gray-500 text-sm md:text-base line-clamp-2">{product.description}</p>
                <div class="flex justify-between items-center mt-4">
                    <span class="text-purple-600 font-bold text-lg md:text-xl">${product.price}</span>
                    <a href={`product/${product.slug}`} class="px-4 py-2 bg-purple-600 text-white rounded-xl text-sm md:text-base hover:bg-purple-700 transition">
                        View
                    </a>
                </div>
            </div>
        </div>
        {/each}
    </div>
</section>

<!-- WHY CHOOSE US -->
<section class="bg-purple-600 text-white py-20 text-center">
    <h2 class="text-3xl md:text-4xl font-bold mb-12">
        Why Choose Ardita Digital?
    </h2>
    <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        <div class="bg-purple-500/20 p-6 rounded-xl hover:bg-purple-500/30 transition">
            <h3 class="font-semibold text-xl mb-2">Fast Delivery</h3>
            <p class="text-purple-100">Get your devices quickly and safely with our reliable shipping.</p>
        </div>
        <div class="bg-purple-500/20 p-6 rounded-xl hover:bg-purple-500/30 transition">
            <h3 class="font-semibold text-xl mb-2">Quality Devices</h3>
            <p class="text-purple-100">We only offer tested and trusted technology products.</p>
        </div>
        <div class="bg-purple-500/20 p-6 rounded-xl hover:bg-purple-500/30 transition">
            <h3 class="font-semibold text-xl mb-2">Affordable Prices</h3>
            <p class="text-purple-100">Modern devices that suit your budget.</p>
        </div>
    </div>
</section>

<!-- FOOTER -->
<footer class="bg-gray-900 text-gray-400 py-12">
    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
            <h3 class="text-white font-bold mb-3">Ardita Digital</h3>
            <p>Modern devices for everyday life. Simple, reliable, and stylish.</p>
        </div>
        <div>
            <h3 class="text-white font-bold mb-3">Quick Links</h3>
            <ul class="space-y-2">
                <li><a href="#" class="hover:text-white">Featured</a></li>
                <li><a href="#" class="hover:text-white">New Arrivals</a></li>
                <li><a href="#" class="hover:text-white">Support</a></li>
            </ul>
        </div>
        <div>
            <h3 class="text-white font-bold mb-3">Contact</h3>
            <p>Email: hello@ardita-tech.com</p>
            <p>Phone: +355 69 123 4567</p>
        </div>
    </div>

    <div class="text-center mt-8 text-sm text-gray-500">
        © 2026 Ardita Digital. All rights reserved.
    </div>
</footer>