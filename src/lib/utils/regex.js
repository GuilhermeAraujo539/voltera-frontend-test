export const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+([ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

export function isValidName(name) {
  if (typeof name !== 'string') return false;
  const trimmed = name.trim();
  if (!trimmed) return false;
  return nameRegex.test(trimmed);
}

export function sanitizeName(input) {
  if (typeof input !== 'string') return '';
  return input.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ' -]/g, '');
}
