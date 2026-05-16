import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface FetchType {
    url: string;
    method?: "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
    body?: any;
    excludeStatus?: number[];
    isFile?: boolean;
    refreshtime?: number;
}

class Fetcher {
    private instance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
        withCredentials: true,  // cookie avtomatik ketadi
    });

    async request<T>({
        url,
        method = "GET",
        body,
        excludeStatus = [],
        isFile = false,
    }: FetchType): Promise<{ status: number; data: T }> {
        const headers: Record<string, string> = {};

        if (!isFile) {
            headers["Content-Type"] = "application/json";
        }

        const config: AxiosRequestConfig = {
            url,
            method,
            headers,
            data: body,
            validateStatus: (status) => {
                const ignored = [...excludeStatus, 400, 401, 403, 404];
                return status < 500 || ignored.includes(status);
            },
        };

        const res: AxiosResponse<T> = await this.instance.request(config);

        return { status: res.status, data: res.data };
    }

    get<T>(url: string, params?: Omit<FetchType,"url"|"body"|"isFile"|"method">) {
        return this.request<T>({ ...params, url, method: "GET" });
    }

    post<T>(url: string, body?: any, params?: Omit<FetchType, "url" | "body"|"method">) {
        return this.request<T>({ ...params, url, method: "POST", body });
    }

    put<T>(url: string, body?: any, params?: Omit<FetchType, "url" | "body"|"method">) {
        return this.request<T>({ ...params, url, method: "PUT", body });
    }

    patch<T>(url: string, body?: any, params?: Omit<FetchType, "url" | "body"|"method">) {
        return this.request<T>({ ...params, url, method: "PATCH", body });
    }

    delete<T>(url: string, params?: Omit<FetchType, "url"|"body"|"isFile"|"method">) {
        return this.request<T>({ ...params, url, method: "DELETE" });
    }
}

export const fetcher = new Fetcher();