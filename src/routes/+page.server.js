import { fetchAge } from '$lib/api/agify.js';
import { env } from '$env/dynamic/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, fetch }) {
  const name = url.searchParams.get('name');
  const useMock = env.USE_MOCK === 'true';
  const ageData = await fetchAge(name, fetch, useMock);

  return { ageData };
}