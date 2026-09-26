function humanizeError(err) {
  const msg = (err && (err.message || err.error_description || err.hint)) || String(err || "");
  console.error("[N.E.S. error]", err);

  if (/Invalid login credentials/i.test(msg))       return "Correo o contraseña incorrectos.";
  if (/User already registered/i.test(msg))         return "Ya existe una cuenta con ese correo.";
  if (/Email not confirmed/i.test(msg))             return "Confirma tu correo antes de ingresar.";
  if (/network|fetch|Failed to fetch/i.test(msg))   return "Sin conexión con el servidor. Verifica tu Internet.";
  if (/JWT|token is expired|invalid claim/i.test(msg)) return "Tu sesión expiró. Vuelve a iniciar sesión.";
  if (/row-level security|RLS|policy/i.test(msg))   return "Permiso denegado por seguridad (RLS). Revisa las políticas en Supabase.";
  if (/duplicate key|unique constraint/i.test(msg)) return "Ese registro ya existe.";
  if (/null value|not-null/i.test(msg))             return "Falta un campo obligatorio.";
  if (/foreign key/i.test(msg))                     return "Referencia inválida (usuario o grupo no existe).";
  if (/rate limit|too many/i.test(msg))             return "Demasiados intentos. Espera un momento.";
  return "Error: " + (msg || "desconocido");
}
