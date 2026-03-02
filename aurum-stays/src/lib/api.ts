const BASE = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${url}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: "Request failed" }));
    throw new Error(err.error || "Request failed");
  }
  return res.json();
}

export const api = {
  properties: {
    list: (params?: Record<string, string>) => {
      const qs = params ? "?" + new URLSearchParams(params).toString() : "";
      return fetcher<{ properties: any[]; total: number; pages: number }>(`/api/properties${qs}`);
    },
    get: (id: string) => fetcher<any>(`/api/properties/${id}`),
  },
  bookings: {
    list: () => fetcher<any[]>("/api/bookings"),
    create: (data: any) => fetcher<any>("/api/bookings", { method: "POST", body: JSON.stringify(data) }),
  },
  auth: {
    login: (data: { email: string; password: string }) =>
      fetcher<{ user: any }>("/api/auth/login", { method: "POST", body: JSON.stringify(data) }),
    register: (data: { name: string; email: string; password: string }) =>
      fetcher<{ user: any }>("/api/auth/register", { method: "POST", body: JSON.stringify(data) }),
  },
  contact: (data: any) => fetcher<any>("/api/contact", { method: "POST", body: JSON.stringify(data) }),
};
