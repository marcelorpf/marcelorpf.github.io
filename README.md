# marcelorpf.github.io — nova versão

Site estático simples (HTML/CSS/JS puro, sem gerador), pronto para o GitHub Pages.

## Como publicar

1. No repositório `marcelorpf.github.io`, remova a saída antiga do Hugo (ou desative o build do Hugo
   no GitHub Actions/branch `gh-pages`) — este site **não precisa de build**, é servido como está.
2. Copie os arquivos desta pasta (`index.html`, `assets/`) para a raiz do repositório.
3. Coloque sua foto em `assets/img/marcelo.png` (recomendo um quadrado, ex. 240×240px).
   Se o arquivo não existir, a foto simplesmente não aparece — o layout não quebra.
4. Adicione um arquivo vazio `.nojekyll` na raiz (evita que o GitHub tente processar a pasta
   `assets` com Jekyll).
5. Commit + push na branch usada pelo Pages (geralmente `main`, pasta raiz).

## Pendências para você revisar

- **Link do gkrreg no GitHub**: usei `https://github.com/marcelorpf` como placeholder no botão
  "GitHub ↗" da seção gkrreg, porque não encontrei o nome exato do repositório do pacote.
  Troque pelo link direto do repositório (ex. `https://github.com/marcelorpf/gkrreg`) em
  `index.html`, dentro da seção `<section id="gkrreg">`.
- **Foto**: adicione `assets/img/marcelo.png` (ver acima).
- **Links removidos**: Publons, LinkedIn e Telegram foram removidos do cabeçalho, como combinado.
  Se quiser adicioná-los de volta, é só duplicar um bloco `<a class="icon-link">` no `<header>`.

## Estrutura

```
index.html          — conteúdo (PT e EN no mesmo HTML, alternados via CSS/JS)
assets/style.css     — todo o visual (tokens de cor/tipografia no topo do arquivo)
assets/script.js     — toggle de idioma (lembra a escolha via localStorage)
assets/img/          — coloque marcelo.png aqui
```

## Trocar o idioma padrão

Por padrão a página abre em PT, exceto se o navegador do visitante estiver em outro idioma
(detecção simples por `navigator.language`). Para forçar sempre PT como padrão, remova esse
trecho em `assets/script.js` (bloco `else if (navigator.language...)`).
