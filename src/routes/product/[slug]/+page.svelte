<script>
    export let data;
    const product = data.product;
</script>

<svelte:head>
    <title>{product.name} – Ardita Digital</title>
    <meta name="description" content={product.description} />
</svelte:head>


<!-- HERO / PRODUCT NAME -->
<section class="py-16 bg-gradient-to-r from-purple-100 to-blue-100 text-center">
    <h1 class="text-5xl font-extrabold text-gray-800">
        {product.name}
    </h1>
</section>


<!-- PRODUCT DETAILS -->
<section class="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-12 items-center">

    <!-- IMAGE -->
    <div class="flex justify-center">
        <img
            src={product.image_url}
            alt={product.name}
            class="w-full max-w-md h-[400px] object-cover rounded-2xl shadow-2xl"
        />
    </div>

    <!-- DETAILS -->
    <div class="space-y-6">
        <h2 class="text-3xl font-bold text-gray-800">
            {product.name}
        </h2>

        <p class="text-gray-600 text-lg">
            {product.description}
        </p>

        <p class="text-purple-600 font-bold text-3xl">
            ${product.price}
        </p>

        <button class="px-8 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition">
            Buy Now
        </button>
    </div>

</section>

