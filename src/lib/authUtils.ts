// Auth cleanup utilities to prevent limbo states
export const cleanupAuthState = () => {
  // Remove all Supabase auth keys from localStorage (if any exist)
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
      localStorage.removeItem(key);
    }
  });
  
  // Remove from sessionStorage if in use
  Object.keys(sessionStorage || {}).forEach((key) => {
    if (key.startsWith('supabase.auth.') || key.includes('sb-')) {
      sessionStorage.removeItem(key);
    }
  });
  
  // Clear any Firebase auth storage
  Object.keys(localStorage).forEach((key) => {
    if (key.startsWith('firebase:')) {
      localStorage.removeItem(key);
    }
  });
};