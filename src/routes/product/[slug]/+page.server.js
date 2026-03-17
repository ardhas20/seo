import { createConnection } from '$lib/server/db';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const { slug } = params;

    console.log("slug:", slug); // DEBUG

    // Krijo lidhjen me DB
    const connection = await createConnection();

    // Merr produktin nga DB
    const [rows] = await connection.query(
        "SELECT * FROM products WHERE slug = ?",
        [slug]
    );

    const product = rows[0];

    if (!product) {
        throw error(404, 'Produkt nicht gefunden');
    }

    return {
        product
    };
}