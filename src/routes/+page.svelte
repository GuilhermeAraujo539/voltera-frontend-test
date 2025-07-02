<script>
  import { page } from '$app/stores';
  export let data;

  let name = $page.url.searchParams.get('name') || '';
  let ageData = data.ageData;
  let loading = false;

  function updateURLAndReload() {
    const params = new URLSearchParams();
    if (name) params.set('name', name);
    window.location.href = `/?${params.toString()}`;
  }

  let debounceTimer;
  function onInput() {
    clearTimeout(debounceTimer);
    if (!name) return;
    loading = true;
    debounceTimer = setTimeout(() => {
      updateURLAndReload();
    }, 600);
  }
</script>

<main>
  <h1>Test App</h1>
  <p class="subtitle">Estimativa da idade de qualquer nome!</p>

  <div class="search-box">
    <input
      bind:value={name}
      placeholder="Digite um nome..."
      on:input={onInput}
    />
    {#if loading}
      <div class="loader"></div>
    {/if}
  </div>

  {#if ageData}
    <div class="result">
      <p><span>Nome:</span> <strong>{ageData.name}</strong></p>
      <p><span>Idade estimada:</span> <strong>{ageData.age} anos</strong></p>
      <p><span>Quantidade de registros:</span> <strong>{ageData.count.toLocaleString()}</strong></p>
    </div>
  {/if}
</main>