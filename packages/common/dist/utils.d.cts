import { ClassValue } from 'clsx';

declare function cn(...inputs: ClassValue[]): string;

declare class FetchWrapper {
    private baseUrl;
    private interceptors;
    constructor(baseUrl: string);
    private request;
    get<T>(url: string): Promise<T>;
    put<T, U>(url: string, data: U): Promise<T>;
    post<T, U>(url: string, data: U): Promise<T>;
    delete<T>(url: string): Promise<T>;
}

export { FetchWrapper, cn };
