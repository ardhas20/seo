<script>
    import background from '$lib/assets/phone.jpg'
    
    export let data;
    </script>
    
    <svelte:head>
    
    <title>Ardita Electronics – Smart Technology</title>
    
    <meta name="description" content="Ardita Electronics offers modern smartphones and electronic devices at great prices." />
    
    <meta name="keywords" content="smartphones, electronics, iphone, samsung, technology shop" />
    
    <meta name="author" content="Ardita Electronics" />
    
    <meta property="og:title" content="Ardita Electronics – Smart Technology" />
    <meta property="og:description" content="Discover modern smartphones and technology." />
    <meta property="og:image" content={background} />
    <meta property="og:type" content="website" />
    
    </svelte:head>
    
    
    <!-- HERO SECTION -->
    
    <header
    class="h-[520px] bg-cover bg-center flex items-center justify-center relative"
    style="background-image: url({background})"
    >
    
    <div class="absolute inset-0 bg-black/60"></div>
    
    <div class="relative text-center text-white px-6">
    
    <h1 class="text-5xl md:text-6xl font-bold mb-4">
    Ardita Electronics
    </h1>
    
    <p class="text-xl text-gray-200">
    Discover the latest smartphones and technology
    </p>
    
    <button class="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
    Shop Now
    </button>
    
    </div>
    
    </header>
    
    
    <!-- PRODUCTS -->
    
    <main class="bg-gray-100 py-12">
    
    <section class="max-w-6xl mx-auto px-6">
    
    <h2 class="text-3xl font-bold mb-10 text-center">
    Our Smartphones
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    
        {#each data.products as product}

        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
        
        <img 
        src={product.image_url} 
        alt={product.name} 
        class="w-full h-48 object-cover rounded-lg mb-4"
        />
        
        <h3 class="text-xl font-bold mb-2">
        {product.name}
        </h3>
        
        <p class="text-gray-600 text-sm mb-4">
        {product.description}
        </p>
        
        <div class="flex justify-between items-center">
        
        <p class="text-blue-600 text-lg font-bold">
        ${product.price}
        </p>
        
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        View
        </button>
        
        </div>
        
        </div>
        
        {/each}
    
    </div>
    
    </section>
    
    </main>
    
    
    <!-- FOOTER -->
    
    <footer class="bg-gray-900 text-gray-300 py-10">
    
    <div class="max-w-6xl mx-auto px-6 text-center">
    
    <h2 class="text-2xl font-bold text-white mb-2">
    Ardita Electronics
    </h2>
    
    <p class="text-sm">
    Modern smartphones and electronics for everyone.
    </p>
    
    <p class="text-xs text-gray-500 mt-4">
    © 2026 Ardita Electronics
    </p>
    
    </div>
    
    </footer>