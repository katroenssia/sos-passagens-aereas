# SosPassagensAereas-WebsSite

# Como usar em sua maquina:

- clone o projeto
- depois roda o comando na pasta do projeto:
  `npm install`
- para rodar o projeto use o comando:
  `npm run dev`
- crie uma pasta chamada '.env' (variáveis de ambiente)
- nela coloque os comandos:
- `SMTP_EMAIL=SUA_CONTA_GMAIL`
- `SMTP_PASS=SUA_SENHA_GMAIL`

observações:

- agora o projeto está sendo serviço pelo backend
- o caminho da pasta ./assets agora é estático, por isso deve ser tirado.
  ex: './assets/css/hero.css' para './css/hero.css'

### diferenças entre os scripts `npm start` e `npm run dev`.

#### npm run dev

- deve ser usado em ambiente de desenvolvimento,
- pois há um script(lib nodemon) ao salvar o projeto ele renicia o servidor,

#### npm start

- depois que o projeto for hospedado, devemos ir na pasta do projeto dentro da hospedagem,
- e roda esse comando para ligar o node e criar o servidor.
