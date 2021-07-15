const cidade = document.querySelector('#cidade');
const mapa = document.querySelector('#mapa-iframe');
const enedecoMap = document.querySelector('#endereco-map')

cidade.addEventListener('click', () => {
  if (cidade.value === 'belem') {
    mapa.setAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.657651920848!2d-48.47971138473438!3d-1.3820561361291956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48a1da3c40c13%3A0xf038872483a4bbd7!2sAeroporto%20Internacional%20de%20Bel%C3%A9m%2FVal-de-Cans%20-%20J%C3%BAlio%20Cezar%20Ribeiro!5e0!3m2!1spt-PT!2sbr!4v1626356300499!5m2!1spt-PT!2sbr',
    );
    enedecoMap.innerHTML = `Belém <br>
    Aeroporto Internacional de Belém / Júlio Cezar Ribeiro
    Av. Júlio César, s/n Val-de-Cans, Belém - PA, 66115-970`
  }

  if (cidade.value === 'manaus') {
    mapa.setAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.2190092940245!2d-60.048513584726024!3d-3.0358420408942353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c10c9f969b659%3A0x63e9173e40353697!2sAeroporto%20Internacional%20Manaus%20AM%20Eduardo%20Gomes!5e0!3m2!1spt-PT!2sbr!4v1626355862900!5m2!1spt-PT!2sbr',
    );
    enedecoMap.innerHTML = 'Manaus<br>Aeroporto Internacional de Manaus / Eduardo Gomes Av. Santos Dumont, 1350 - Tarumã, Manaus - AM, 69041-000.'
  }
  if (cidade.value === 'brasilia') {
    mapa.setAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15350.999594221155!2d-47.9172348!3d-15.8697369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbeebe30930ee8750!2sAeroporto%20Internacional%20de%20Bras%C3%ADlia!5e0!3m2!1spt-PT!2sbr!4v1626355463286!5m2!1spt-PT!2sbr',
    );
    enedecoMap.innerHTML = 'Brasília<br>    Aeroporto Internacional de Brasília / Presidente Juscelino Kubitschek    Lago Sul, Brasília - DF, 71608-900.'
  }
  if (cidade.value === 'rio-branco') {
    mapa.setAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.808865889894!2d-67.89954498467252!3d-9.866397207859467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x917f8d81c9325407%3A0x99f72e2a7a25cb01!2sAeroporto%20Internacional%20de%20Rio%20Branco%20-%20Pl%C3%A1cido%20de%20Castro!5e0!3m2!1spt-PT!2sbr!4v1626356020571!5m2!1spt-PT!2sbr',
    );
    enedecoMap.innerHTML = 'Rio Branco<br>Aeroporto Internacional de Rio Branco / Plácido de Castro Avenida Plácido de Castro, s/n - Vila Aeroporto, Rio Branco - AC, 69923-900.'
  }
  if (cidade.value === 'porto-seguro') {
    mapa.setAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.6828481435646!2d-39.082122684592754!3d-16.44092604356937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7369a3d6e702c4d%3A0xd46fc44ae03d2bca!2sAeroporto%20Internacional%20de%20Porto%20Seguro!5e0!3m2!1spt-PT!2sbr!4v1626355993890!5m2!1spt-PT!2sbr',
    );
    enedecoMap.innerHTML = 'Porto Seguro<br> Aeroporto de Porto Seguro Estr. do Aeroporto, S/N - Cidade Alta, Porto Seguro - BA, 45810-000.'
  }
  if (cidade.value === 'porto-alegre') {
    mapa.setAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.5114102255648!2d-51.17756978434459!3d-29.993468535869052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519775afc8a359f%3A0xc999a14760dd538f!2sAeroporto%20Internacional%20Porto%20Alegre%20Salgado%20Filho!5e0!3m2!1spt-PT!2sbr!4v1626355944507!5m2!1spt-PT!2sbr',
    );
    enedecoMap.innerHTML = 'Porto Alegre<br>Aeroporto Internacional de Porto Alegre / Salgado Filho Av. Severo Dullius, 90.010 - São João, Porto Alegre - RS, 90200-310.'
  }
  if (cidade.value === 'natal') {
    mapa.setAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.6117125427527!2d-35.36826068470827!3d-5.7688764585644075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b3ad7474c23143%3A0x75796a15251db180!2sAeroporto%20Internacional%20de%20Natal!5e0!3m2!1spt-PT!2sbr!4v1626355914995!5m2!1spt-PT!2sbr" width="600" height="450',
    );
    enedecoMap.innerHTML = 'Natal<br>Aeroporto Internacional de Natal Av. Dr. Ruy Pereira dos Santos, 3100 - Aeroporto, São Gonçalo do Amarante - RN,    59290-000.'
  }
  if (cidade.value === 'joinville') {
    mapa.setAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.116885752709!2d-48.804846984424394!3d-26.225391371205472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deae80f6c1bb5b%3A0xbf9a0cbe77a5748f!2sAeroporto%20de%20Joinville%20(JOI)%20-%20Lauro%20Carneiro%20de%20Loyola!5e0!3m2!1spt-PT!2sbr!4v1626355837427!5m2!1spt-PT!2sbr',
    );
    enedecoMap.innerHTML = 'Joinville<br>Aeroporto de Joinville / Lauro Carneiro de Loyola Av. Santos Dumont, 9000 - Aventureiro, Joinville - SC, 89226-435.'
  }
  if (cidade.value === 'florianopolis') {
    mapa.setAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.5266476379866!2d-48.54815438439474!3d-27.670113231881903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273a0c515d75f7%3A0xa78ef5ed13a752e5!2sAeroporto%20Internacional%20de%20Florian%C3%B3polis%20-%20Herc%C3%ADlio%20Luz!5e0!3m2!1spt-PT!2sbr!4v1626355788379!5m2!1spt-PT!2sbr',
    );
    enedecoMap.innerHTML = 'Florianópolis<br>Aeroporto Internacional de Florianópolis / Hercílio Luz    Rod. Acesso ao Aeroporto, nº 6.200. Bairro: Carianos. CEP: 88.047-902.'
  }
  if (cidade.value === 'foz-do-iguacu') {
    mapa.setAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.2170146442354!2d-54.49070188443676!3d-25.59770404580776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f690f505555555%3A0xcf87e0b9bf1a020f!2sAeroporto%20Internacional%20de%20Foz%20do%20Igua%C3%A7u%20-%20Cataratas!5e0!3m2!1spt-PT!2sbr!4v1626355766971!5m2!1spt-PT!2sbr',
    );
    enedecoMap.innerHTML = 'Foz do Iguaçu<br>Aeroporto Internacional de Foz do Iguaçu / Cataratas    Rod. BR 469, Km 16,5, s/n - Aeroporto, Foz do Iguaçu - PR, 85863-900.'
  }
  if (cidade.value === 'curitiba') {
    mapa.setAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14400.680049759101!2d-49.1724811!3d-25.5327132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22badb345314e9e2!2sAeroporto%20Internacional%20Afonso%20Pena!5e0!3m2!1spt-PT!2sbr!4v1626359012122!5m2!1spt-PT!2sbr',
    );
    enedecoMap.innerHTML = 'Curitiba<br>    Aeroporto Internacional Afonso Pena    Av. Rocha Pombo - Águas Belas, São José dos Pinhais - PR, 83010-900.'
  }
  if (cidade.value === 'fortaleza') {
    mapa.setAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.1517140722312!2d-38.535285284721596!3d-3.7771501444813005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74ec17dbd721b%3A0xd74cb694436d615a!2sAeroporto%20Internacional%20de%20Fortaleza%20-%20Pinto%20Martins!5e0!3m2!1spt-PT!2sbr!4v1626355697155!5m2!1spt-PT!2sbr',
    );
    enedecoMap.innerHTML = 'Fortaleza<br>    Aeroporto Internacional de Fortaleza / Pinto Martins    Av. Senador Carlos Jereissati, 3000 - Serrinha, Fortaleza - CE, 60741-900.'
  }
  if (cidade.value === 'campinas') {
    mapa.setAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.423977667355!2d-47.13975718448592!3d-23.00820004728321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8ca7445c3047b%3A0x88a68ef7d857f2a3!2sAeroporto%20Internacional%20de%20Viracopos!5e0!3m2!1spt-PT!2sbr!4v1626355629892!5m2!1spt-PT!2sbr',
    );
    enedecoMap.innerHTML = 'Campinas<br>   Aeroporto Internacional de Viracopos / Campinas    Rodovia Santos Dumont, km 66 - Parque Viracopos, Campinas - SP, 13055-900'
  }
  if (cidade.value === 'cuiaba') {
    mapa.setAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.848378324609!2d-56.119452084603346!3d-15.653060423665867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939dadd84e34c3e3%3A0x7297df2d50140bab!2sAeroporto%20Internacional%20de%20Cuiab%C3%A1%20-%20Marechal%20Rondon!5e0!3m2!1spt-PT!2sbr!4v1626355598447!5m2!1spt-PT!2sbr',
    );
    enedecoMap.innerHTML = 'Cuiabá<br>Aeroporto Internacional de Várzea Grande - Marechal Rondon    Av. João Ponce de Arruda, s/n - Vila Pirineu, Várzea Grande - MT, 78110-900.'
  }
  if (cidade.value === 'campo-grande') {
    mapa.setAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7475.829530184884!2d-54.67850066511234!3d-20.468693699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e6c269db0537%3A0xcf6b9b090ea0b007!2sAeroporto%20Internacional%20de%20Campo%20Grande!5e0!3m2!1spt-PT!2sbr!4v1626355560132!5m2!1spt-PT!2sbr',
      enedecoMap.innerHTML = 'Campo Grande<br>Aeroporto Internacional de Campo Grande    Av. Duque de Caxias, s/n - Vila Serradinho, Campo Grande - MS, 79101-901.'
    );
  }
  if (cidade.value === 'sao-jose-rio-preto') {
    mapa.setAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.4784325877094!2d-49.40709878452456!3d-20.812378271727535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad82d3d81959%3A0x7f23df6d55dda6b!2sAeroporto%20de%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto!5e0!3m2!1spt-PT!2sbr!4v1626356178243!5m2!1spt-PT!2sbr',
    );
    enedecoMap.innerHTML = 'São José do Rio Preto<br>Aeroporto Estadual de São José do Rio Preto - Prof. Eribelto Manoel Reino Av. dos Estudantes, 3505 - Jardim Novo Aeroporto, São José do Rio Preto - SP, 15035-010.'
  }
  if (cidade.value === 'teresina') {
    mapa.setAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.26801564904!2d-42.82583428471343!3d-5.0602465528116705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e38fd44186679%3A0x7b8c9c4665a24d09!2sAeroporto%20Senador%20Petr%C3%B4nio%20Portella!5e0!3m2!1spt-PT!2sbr!4v1626356220379!5m2!1spt-PT!2sbr',
    );
    enedecoMap.innerHTML = 'Teresina<br>Aeroporto de Teresina / Senador Petrônio Portella Av. Centenário, s/n - Aeroporto, Teresina - PI, 64006-700.'
  }
  if (cidade.value === 'vitoria') {
    mapa.setAttribute(
      'src',
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.028714402085!2d-40.28572328453374!3d-20.25764385381366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81842f9876a0d%3A0xb60191750aaaa62a!2sAeroporto%20de%20Vit%C3%B3ria%20-%20Eurico%20de%20Aguiar%20Salles!5e0!3m2!1spt-PT!2sbr!4v1626356240682!5m2!1spt-PT!2sbr',
    );
    enedecoMap.innerHTML = 'Vitória<br>Aeroporto Internacional de Vitória / Eurico de Aguiar Salles Av. Roza Helena Schorling Albuquerque, S/N - Aeroporto, Vitória - ES, 29075-685.'
  }
});






































































