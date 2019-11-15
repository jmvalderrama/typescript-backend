import app from './app';
import { startConnection } from './database';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  startConnection();
}

main();

export default app;