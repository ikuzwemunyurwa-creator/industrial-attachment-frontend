const TOKEN_KEY = "ic_auth_token";

export type AuthToken = string;

export function getAuthToken(): AuthToken | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setAuthToken(token: AuthToken) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearAuthToken() {
  localStorage.removeItem(TOKEN_KEY);
}
