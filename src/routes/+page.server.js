import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
  const name = url.searchParams.get('name');
  const useMock = env.USE_MOCK === 'true';

  if (!name || !name.trim()) {
    return { ageData: null };
  }

  if (useMock) {
    return {
      ageData: {
        name,
        age: 42,
        count: 999
      }
    };
  }

  const res = await fetch(`https://api.agify.io/?name=${encodeURIComponent(name)}`);
  const data = await res.json();
  return { ageData: data };
}