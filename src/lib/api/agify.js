export async function fetchAge(name, fetchFn, useMock = false) {
  if (!name || !name.trim()) return null;

  if (useMock) {
    return {
      name,
      age: Math.floor(Math.random() * 40) + 10,
      count: 999
    };
  }

  const res = await fetchFn(`https://api.agify.io/?name=${encodeURIComponent(name)}`);
  return await res.json();
}