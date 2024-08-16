import * as dotenv from 'dotenv';

export class ConfigService {
    private readonly envConfig: Record<string, string>;
    constructor() {
        const result = dotenv.config();

        if (result.error) {
            this.envConfig = process.env;
        } else {
            this.envConfig = result.parsed;
        }
    }

    public get(key: string): string {
        return this.envConfig[key];
    }

    public async getPortConfig() {
        return this.get('PORT');
    }

    public async getMongoConfig() {
        return {
            uri: 'mongodb+srv://2310087518:nW11eogX1EfRUgRu@cluster0.6xs0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
    }
}
