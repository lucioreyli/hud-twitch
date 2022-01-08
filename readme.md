
<img src="https://images.emojiterra.com/google/noto-emoji/v2.028/128px/1f1fa-1f1f8.png" width="24px">
HUD-Twitch is a project to create an overlay (bottom informations) for streaming in web browser.
The app was developed with ReactJS and NodeJS. 

<img src="https://images.emojiterra.com/google/noto-emoji/v2.028/128px/1f1e7-1f1f7.png" width="24px">
HUD-Twitch é um projeto para criar um overlay (informações na parte inferior) para transmissões no navegador.
O aplicativo foi desenvolvido com ReactJS e NodeJS.

The body of html is totally null/transparent, then, you don't need create a chroma key in your streaming software, you only need customize the current user (in the project, is my user -lucioreyli/lucioroadtoglory-).

O corpo do html é totalmente nulo/transparent, logo, você não precisa criar um chroma key na sua cena, você apenas precisa customizar o usuário/nome padrão (no projeto, meu usuário/nome é -lucioreyli/lucioroadtoglory-).



![Example using app on OBS](https://iili.io/YgR7j4.gif)




## Environment Variables | Variáveis de ambiente
To run this project, you will need to add the following environment variables at your `.env` file

Para executar este projeto, você vai precisar adicionar as seguintes variáveis de ambiente em seu arquivo `.env`


### Front-end (ReactJS project)
`PORT` port to back-end socket.io/server.
2004 by default or change on `src\services\socket.ts`

porta para acessar o servidor/socket.io. 2004 por padrão ou altere no `src\services\socket.ts`

### Back-end (ReactJS project)
`PORT` - port for back-end server. 2004 by default.

porta para executar o servidor back-end. 2004 por padrão.

`DIR_BASE` - base directory to your folder with
[StreamLabels](https://streamlabs.com/dashboard/streamlabels)'s files.

diretório base para sua pasta com arquivos do [StreamLabels](https://streamlabs.com/dashboard/streamlabels).




## Using | Usando
### First step | Primeiro passo
Download or clone the [repository](https://github.com/lucioroadtoglory/hud-twitch) with:

```
  gh repo clone lucioroadtoglory/hud-twitch
```

or [download](https://github.com/lucioroadtoglory/hud-twitch/archive/refs/heads/main.zip).


### Second step
Setting enviroment variables and names in 
[hub-twitch-backend](https://github.com/lucioroadtoglory/hud-twitch/tree/main/hub-twitch-backend) 
and 
[hud-twitch-front-end](https://github.com/lucioroadtoglory/hud-twitch/tree/main/hud-twitch-front-end) 
folder and install the `node_modules` at both.


### Third step
Run [hub-twitch-backend app](https://github.com/lucioroadtoglory/hud-twitch/tree/main/hub-twitch-backend) 
and 
[hud-twitch-front-end app](https://github.com/lucioroadtoglory/hud-twitch/tree/main/hud-twitch-front-end) with `yarn dev` command.

```
  yarn dev
```


### Segundo passo
Configurando variáveis de ambiente e nomes (usuários) nas pastas
[hub-twitch-backend](https://github.com/lucioroadtoglory/hud-twitch/tree/main/hub-twitch-backend) 
e
[hud-twitch-front-end](https://github.com/lucioroadtoglory/hud-twitch/tree/main/hud-twitch-front-end) 
e instalar a pasta `node_modules` em ambos no passo 3.


### Third step
Executar [hub-twitch-backend app](https://github.com/lucioroadtoglory/hud-twitch/tree/main/hub-twitch-backend) 
e
[hud-twitch-front-end app](https://github.com/lucioroadtoglory/hud-twitch/tree/main/hud-twitch-front-end) com `yarn` e `yarn dev` command.

```
  yarn
  yarn dev
```