import { getAuthToken } from "./authToken";

const API_BASE_URL =
  (import.meta as unknown as { env?: { VITE_API_BASE_URL?: string } }).env
    ?.VITE_API_BASE_URL ?? "http://localhost:3000";

type ApiSuccess<T> = { success: true; data: T };
type ApiError = { success: false; error: { message: string } };
type ApiResponse<T> = ApiSuccess<T> | ApiError;

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const token = getAuthToken();

  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  const json = (await res.json()) as ApiResponse<T>;

  if (!res.ok) {
    if ("error" in json && json.error?.message) throw new Error(json.error.message);
    throw new Error(`Request failed with status ${res.status}`);
  }

  if (!("success" in json) || json.success !== true) {
    // Defensive: backend always returns {success, data|error}
    throw new Error("Unexpected API response");
  }

  return json.data;
}

export const api = {
  get<T>(path: string) {
    return request<T>(path, { method: "GET" });
  },
  post<T>(path: string, body: unknown) {
    return request<T>(path, { method: "POST", body: JSON.stringify(body) });
  },
  put<T>(path: string, body: unknown) {
    return request<T>(path, { method: "PUT", body: JSON.stringify(body) });
  },
  delete(path: string) {
    return request<unknown>(path, { method: "DELETE" });
  },
};
