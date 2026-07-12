# marcelorpf.github.io — nova versão (multi-página)

Site estático (HTML/CSS/JS puro, sem gerador), pronto para o GitHub Pages.

## Estrutura

```
index.html    — página inicial (foto, nome, frase de identidade, links, navegação)
ensino.html   — cursos e materiais do RPubs
gkrreg.html   — pacote R gkrreg
sobre.html    — texto sobre mim (bio acadêmica)
blog.html     — em construção
assets/style.css — todo o visual (tokens de cor/tipografia no topo do arquivo)
assets/script.js  — toggle de idioma (lembra a escolha via localStorage, entre páginas)
assets/img/       — coloque marcelo.png aqui
```

Cada página interna tem, no topo, um link "← Início" para voltar à home, além de uma
navegação rápida entre as demais seções e o botão de idioma PT/EN — a escolha de idioma
é salva no navegador e persiste ao navegar entre as páginas.

## Como publicar

1. Copie todos os arquivos desta pasta para a raiz do repositório
   `marcelorpf.github.io` (substituindo o conteúdo antigo).
2. Coloque sua foto em `assets/img/marcelo.png` (recomendo quadrada, ex. 300×300px —
   como a foto agora aparece maior, uma imagem de boa resolução ajuda).
3. Garanta que existe um arquivo vazio `.nojekyll` na raiz.
4. Em `Settings → Pages`, confirme que a fonte é "Deploy from a branch" (não mais um
   workflow de build do Hugo).
5. Commit + push.

## Pendências para você revisar

- **Foto**: adicione `assets/img/marcelo.png`.

## Ajustando textos

Cada bloco de texto aparece duas vezes no HTML, uma dentro de `<span class="lang-pt">`
e outra em `<span class="lang-en">` — edite as duas versões juntas para manter PT e EN
sincronizados.
