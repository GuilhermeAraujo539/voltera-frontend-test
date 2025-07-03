<script>
  import '$lib/styles/app.css';
  import '$lib/styles/agify.css';
  import { page } from '$app/stores';
  import { isValidName, sanitizeName } from '$lib/utils/regex.js';
  import { onMount } from 'svelte';

  export let data;

  let name = $page.url.searchParams.get('name') || '';
  let ageData = data.ageData;
  let loading = false;
  let debounceTimer;

  onMount(() => {
    history.replaceState(null, '', window.location.pathname);
  });

  function onInput(event) {
    clearTimeout(debounceTimer);

    name = sanitizeName(event.target.value);

    if (!name.trim() || !isValidName(name)) {
      ageData = null;
      loading = false;
      return;
    }

    loading = true;
    debounceTimer = setTimeout(() => {
      const params = new URLSearchParams({ name });
      window.location.href = `/?${params.toString()}`;
    }, 1000);
  }
</script>

<svelte:head>
  <title>Estimativa de Idade por Nome</title>
  <link rel="icon" href="/voltera_energia_logo.png" />
</svelte:head>

<main>
  <img src="/voltera_energia_logotipo.png" alt="Voltera Energia Logo" class="logo" />
  <p class="subtitle">Digite o primeiro nome para estimar sua idade!</p>

  <div class="search-box">
    <span class="icon">
      <img src="/search-icon.svg" alt="Buscar" width="16" height="16" />
    </span>
    <input
      type="text"
      placeholder="Digite um nome..."
      bind:value={name}
      on:input={onInput}
      aria-label="Digite o nome para buscar a idade estimada"
    />
    {#if loading}
      <div class="loader" aria-hidden="true"></div>
    {/if}
  </div>

  {#if ageData}
    <div class="result">
      <p><span>Nome:</span> <strong>{ageData.name}</strong></p>
      <p><span>Idade estimada:</span> <strong>{ageData.age} anos</strong></p>
      <p><span>Registros:</span> <strong>{ageData.count.toLocaleString()}</strong></p>
    </div>
  {/if}
</main>