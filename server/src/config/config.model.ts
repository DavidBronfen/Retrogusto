export interface IConfigModel {
    db: string;
    environment: string;
    logging: boolean;
    port: string | number;
    seed: boolean;
    secret?: ISecretConfig;
}

export interface ISecretConfig {
    googleAuth: {
        clientID: string;
        clientSecret: string;
    };
}
