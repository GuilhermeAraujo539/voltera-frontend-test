<script>
  import '$lib/styles/app.css';
  import '$lib/styles/agify.css';
  import { page } from '$app/stores';
  import { isValidName, sanitizeName } from '$lib/utils/regex.js';

  export let data;

  let name = $page.url.searchParams.get('name') || '';
  let ageData = data.ageData;
  let loading = false;
  let debounceTimer;

  function onInput(event) {
    clearTimeout(debounceTimer);

    // Sanitiza o input, removendo caracteres inválidos
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

<main>
  <img src="/voltera_energia_logo.png" alt="Voltera Energia Logo" class="logo" />
  <p class="subtitle">Estimativa da idade de qualquer nome!</p>

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