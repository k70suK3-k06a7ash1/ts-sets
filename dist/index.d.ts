export type IsKeyOf<T, K> = K extends keyof T ? true : false;
export declare function collect<T, K extends keyof T>(keys: K[], obj: T): Readonly<Pick<T, K>>;
