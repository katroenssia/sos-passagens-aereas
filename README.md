# SosPassagensAereas-WebsSite

#Como usar em sua maquina:

- clone o projeto
- depois roda o comando na pasta do projeto:
  `npm install`
- para rodar o projeto use o comando:
  `npm run dev`

observações:

1-agora o projeto está sendo serviço pelo backend
2- o caminho da pasta ./assets agora é estático, por isso deve ser tirado.
ex: './assets/css/hero.css' para './css/hero.css'
3-para usar o serviço de email, você deve criar uma pasta chamada '.env'(variáveis de ambiente.)

- dentro do arquivo .env
  SMTP_EMAIL=SUA_CONTA_GMAIL
  SMTP_PASS=SUA_SENHA_GMAIL
