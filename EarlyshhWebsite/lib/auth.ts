// Simple auth utilities for demo purposes
// In production, use a proper authentication library like NextAuth.js

export type UserRole = 'admin' | 'brand' | null

export interface AuthUser {
  email: string
  role: UserRole
}

export const AUTH_STORAGE_KEY = 'earlyshh_auth'

export function setAuthUser(user: AuthUser): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user))
  }
}

export function getAuthUser(): AuthUser | null {
  if (typeof window === 'undefined') return null
  
  try {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

export function clearAuthUser(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(AUTH_STORAGE_KEY)
  }
}

export function isAuthenticated(): boolean {
  return getAuthUser() !== null
}

export function hasRole(role: UserRole): boolean {
  const user = getAuthUser()
  return user?.role === role
}