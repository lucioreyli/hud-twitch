# HUD-Twitch

É um projeto para criar um overlay/interface (informações) para transmissões no navegador.

O aplicativo foi desenvolvido com ReactJS, NodeJS (Express) e TypeScript.

---

O corpo do html é totalmente nulo/transparent, logo, você não precisa criar um chroma key na sua cena,
apenas precisa customizar o usuário/nome padrão (no projeto, meu usuário/nome é `lucioroadtoglory`).

![Example using app on OBS](./demo.gif)

## Variáveis de ambiente

Para executar este projeto, você vai precisar adicionar as seguintes variáveis de ambiente em seu arquivo `.env`

### Front-end (ReactJS project)

`PORT` - porta para acessar o servidor/socket.io. 2004 por padrão ou altere no `src\services\socket.ts`

### Back-end (ReactJS project)

`PORT` - porta para executar o servidor back-end. 2004 por padrão.

`DIR_BASE` - diretório base para sua pasta com arquivos do [StreamLabels](https://streamlabs.com/dashboard/streamlabels).

## Iniciando

### Baixando o projeto

Baixe ou clone o [repositório](https://github.com/lucioroadtoglory/hud-twitch) com:

```
  gh repo clone lucioroadtoglory/hud-twitch
  
```

ou

```
  git clone https://github.com/lucioroadtoglory/hud-twitch
  
```

ou [download](https://github.com/lucioroadtoglory/hud-twitch/archive/refs/heads/main.zip).

### Trocando as variáveis de ambiente

Configurando variáveis de ambiente e nomes (usuários) nas pastas
[hub-twitch-backend](https://github.com/lucioroadtoglory/hud-twitch/tree/main/hub-twitch-backend)
e
[hud-twitch-front-end](https://github.com/lucioroadtoglory/hud-twitch/tree/main/hud-twitch-front-end)
e instalar a pasta `node_modules` em ambos no passo 3.

### Executando os projetos

Executar [hub-twitch-backend app](https://github.com/lucioroadtoglory/hud-twitch/tree/main/hub-twitch-backend)
e
[hud-twitch-front-end app](https://github.com/lucioroadtoglory/hud-twitch/tree/main/hud-twitch-front-end) com `yarn` e `yarn dev` command.

```
  yarn
  yarn dev
  
```
