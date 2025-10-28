// assets/main.js
// Basic client-side helpers. IMPORTANT: do not rely on client-side security alone.

(function () {
  // Basic input check: block suspicious query strings to reduce trivial attacks
  const suspicious = ['<script','javascript:','data:','base64,'];
  const loc = location.href.toLowerCase();
  for (const s of suspicious) {
    if (loc.includes(s)) {
      console.warn('Suspicious pattern blocked in URL:', s);
      // Optionally redirect
      // location.href = '/';
    }
  }

  // Prevent clickjacking: if loaded in an iframe by mistake, bust out (works when CSP/X-Frame-Options not set)
  if (window.top !== window.self) {
    window.top.location = window.self.location;
  }

  // Simple PDF viewer fallback: open in new tab (we set target="_blank" in template).
  // If you want a modal viewer, implement an iframe modal here and check file ext = .pdf

  // Add CSP meta if you like (server headers > meta tag)
})();
