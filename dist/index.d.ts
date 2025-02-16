export type IsKeyOf<T, K> = K extends keyof T ? true : false;
export declare function collect<T, K extends keyof T>(keys: readonly K[], obj: Readonly<T>): Readonly<Pick<T, K>>;
