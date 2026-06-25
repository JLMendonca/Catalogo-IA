# Catálogo de Ferramentas de IA (PWA) — v1.1

App web instalável com o catálogo de ferramentas de IA por atividade.
Funciona em **Android e iOS**, e depois de aberto uma vez roda **offline**.
A página inicial detecta o aparelho e deixa escolher entre a **versão Mobile** e a **versão Desktop**.

Organizado by Jose Luiz Mendonca.

---

## Arquivos do repositório

```
index.html            → página inicial (escolhe Mobile ou Desktop)
mobile.html           → catálogo, versão para celular
desktop.html          → catálogo, versão para computador
manifest-mobile.json  → manifesto PWA da versão mobile
manifest-desktop.json → manifesto PWA da versão desktop
sw.js                 → service worker (cache offline)
icons/                → ícones do app (192, 512, maskable, apple-touch, favicon)
.nojekyll             → evita processamento Jekyll no GitHub Pages
```

---

## Como publicar no GitHub Pages (sem usar linha de comando)

1. Acesse **github.com** e crie um repositório novo (ex.: `catalogo-ia`). Pode ser **público**.
2. Na página do repositório, clique em **Add file → Upload files**.
3. **Arraste TODOS os arquivos e a pasta `icons`** desta pasta para a área de upload.
   - Importante: suba o **conteúdo** desta pasta na raiz do repositório (o `index.html` precisa ficar na raiz).
4. Clique em **Commit changes**.
5. Vá em **Settings → Pages**.
6. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
7. Em **Branch**, selecione **main** e a pasta **/ (root)**. Clique em **Save**.
8. Aguarde ~1 minuto. O link aparece no topo da página de Pages, no formato:
   `https://SEU-USUARIO.github.io/catalogo-ia/`

Pronto. Abra esse link no celular ou no computador.

---

## Como instalar como app

Abra o link, escolha a versão (Mobile ou Desktop) e:

- **Android (Chrome):** toque em **Instalar** na barra que aparece (ou menu **⋮ → Instalar app**).
- **iPhone/iPad (Safari):** toque em **Compartilhar** → **“Adicionar à Tela de Início”**.

Cada versão instala como um app independente, com ícone próprio na tela inicial.

---

## Observações

- O **GitHub Pages serve por HTTPS**, que é requisito para o service worker e para o botão de instalação automático funcionarem. Por isso o app só é instalável quando publicado (não abrindo o arquivo direto do computador).
- Para **atualizar** o catálogo depois, suba os arquivos novos por cima (mesmo nome) e altere a versão do cache em `sw.js` (linha `const CACHE = "catalogo-ia-v1-1";`) para forçar a atualização nos aparelhos.
- Os preços/classificações refletem **junho/2026** e mudam com frequência — confirme sempre no link oficial dentro de cada ficha.
