import { createConnection } from '$lib/server/db';
import { json } from '@sveltejs/kit';

export async function GET() {
    const db = await createConnection();

    const [products] = await db.query("SELECT * FROM products");
 
    return json(products);
}