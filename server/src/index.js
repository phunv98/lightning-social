import server from './server.js';
import env from './utils/env.js';
import { connectDB } from './db/mongodb.js';

try {
    await connectDB(env.MONGO_URI);
    server.listen(env.PORT, env.HOST, () => {
        console.log(`Server is running at port ${env.PORT}`);
    });
} catch(e) {
    console.log(e);
    gracefulShutdown();
}

function gracefulShutdown() {
    console.log(`Shutting down server...`);
    process.exit(1);
}

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);