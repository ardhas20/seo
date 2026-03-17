<script>
    let { data } = $props();
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
    
    <h1 class="text-5xl text-center my-32">Produkt-Detailseite</h1>
    
    <h2 class="text-4xl text-center">{data.product.name}</h2>