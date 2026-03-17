// src/lib/server/db.js
import mysql from 'mysql2/promise';

export async function createConnection() {
    return await mysql.createConnection({
        host: 'htl-datenbank.com',
        user: 'ardhas20',
        password: '1INSY$data',
        database: 'ardhas20_seo',
        port: 28474
    });
}