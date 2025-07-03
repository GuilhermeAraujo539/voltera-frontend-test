# 📊 Estimador de Idade por Nome

Um aplicativo web construído com **SvelteKit**, que utiliza a [API Agify.io](https://agify.io) para estimar a idade média de uma pessoa com base em seu **primeiro nome**.

---

## ✅ Requisitos

Antes de começar, você precisa ter instalado:

- [Node.js 18+](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

---

## 🚀 Como executar o projeto localmente

### 1. Clone o repositório

```bash
git clone https://github.com/GuilhermeAraujo539/voltera-frontend-test.git
cd voltera-frontend-test
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o ambiente

Crie um arquivo `.env` na raiz do projeto com o conteúdo:

```env
USE_MOCK=false
```

> Para testes locais sem a API real, use `USE_MOCK=true`.

### 4. Rode o projeto

```bash
npm run dev
```

Abra no navegador: [http://localhost:5173](http://localhost:5173)

---

## ✨ Funcionalidades

- 🔍 Busca de nomes com **validação automática**
- 🧠 Estimativa de idade usando a Agify API
- ⏳ Feedback visual de carregamento
- 🧼 Sanitização e validação de nomes com regex
- 🔄 Debounce para evitar múltiplas requisições
- 🧪 Modo de teste com dados mockados

---

## 🧪 Teste com dados simulados (modo mock)

Se quiser usar o app **sem internet** ou apenas simular resultados, ative o modo mock:

```env
USE_MOCK=true
```

---

## 🛠️ Tecnologias utilizadas

- [SvelteKit](https://kit.svelte.dev/)
- [Agify.io API](https://agify.io)
- HTML5 + CSS3
- JavaScript modular
- Regex para nomes
- Debounce com `setTimeout`

---

## 🙋‍♂️ Autor

Desenvolvido por **Guilherme Araujo**  
📧 [araujogui175@gmail.com]  
🔗 [https://www.linkedin.com/in/guilherme-souza-7a425b265/](https://www.linkedin.com/in/guilherme-souza-7a425b265/)

---

## 📦 Créditos

- API gratuita por [Agify.io](https://agify.io)