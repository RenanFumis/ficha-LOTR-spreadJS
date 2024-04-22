const personagensLOTR = [
  {
    nome: "Frodo",
    classe: "ladino",
    posicao: 1,
    raca: 1,
  },
  {
    nome: "Sam",
    classe: "clérigo",
    posicao: 1,
    raca: 1,
  },
  {
    nome: "Merry",
    classe: "guerreiro",
    posicao: 1,
    raca: 1,
  },
  {
    nome: "Pippin",
    classe: "guerreiro",
    posicao: 1,
    raca: 1,
  },
  {
    nome: "Gollum",
    classe: "ladino",
    posicao: 2,
    raca: 1,
  },
  {
    nome: "Bilbo",
    classe: "ladino",
    posicao: 1,
    raca: 1,
  },
  {
    nome: "Aragorn",
    classe: "guerreiro",
    posicao: 1,
    raca: 2,
  },
  {
    nome: "Gimli",
    classe: "guerreiro",
    posicao: 1,
    raca: 4,
  },
  {
    nome: "Legolas",
    classe: "guerreiro",
    posicao: 1,
    raca: 3,
  },
  {
    nome: "Gandalf",
    classe: "clérigo",
    posicao: 1,
    raca: 2,
  },
  {
    nome: "Saruman",
    classe: "clérigo",
    posicao: 2,
    raca: 2,
  },
  {
    nome: "Boromir",
    classe: "guerreiro",
    posicao: 2,
    raca: 2,
  },
];

const guerreiros = {
  forca: 10,
  defesa: 8,
  destreza: 5,
  inteligencia: 5,
  sabedoria: 5,
  carisma: 5,
  vida: 100,
};
const clerigo = {
  forca: 5,
  defesa: 5,
  destreza: 8,
  inteligencia: 10,
  sabedoria: 10,
  carisma: 10,
  vida: 100,
};

const ladino = {
  forca: 5,
  defesa: 5,
  destreza: 10,
  inteligencia: 8,
  sabedoria: 5,
  carisma: 5,
  vida: 100,
};

const posicao = {
  posicao: "companheiro",
};
const posicao2 = {
  posicao: "inimigo",
};

const hobbit = {
  raca: "hobbit",
  altura: 1.2,
  velocidade: 5,
};

const humano = {
  raca: "humano",
  altura: 1.8,
  velocidade: 7,
};

const elfo = {
  raca: "elfo",
  altura: 1.7,
  velocidade: 10,
};

const anao = {
  raca: "anão",
  altura: 1.4,
  velocidade: 6,
};

personagensLOTR.forEach((personagem) => {
  let atributos = {};
  switch (personagem.classe) {
    case "ladino":
      atributos = { ...personagem, ...ladino };
      console.log("==========================");
      break;
    case "guerreiro":
      atributos = { ...personagem, ...guerreiros };
      console.log("==========================");
      break;
    case "clérigo":
      atributos = { ...personagem, ...clerigo };
      console.log("==========================");
      break;
  }

  switch (personagem.posicao) {
    case 1:
      atributos.defesa += 5;
      atributos = { ...atributos, ...posicao };
      break;
    case 2:
      atributos.forca += 7;
      atributos = { ...atributos, ...posicao2 };
      break;
  }

  switch (personagem.raca) {
    case 1:
      atributos.carisma += 2;
      atributos.destreza += 2;
      atributos = { ...atributos, ...hobbit };
      break;
    case 2:
      atributos = { ...atributos, ...humano };
      break;
    case 3:
      atributos.forca += 3;
      atributos.defesa += 3;
      atributos.destreza += 3;
      atributos.carisma += 3;
      atributos = { ...atributos, ...elfo };
      break;
    case 4:
      atributos.forca += 5;
      atributos.carisma -= 2;
      atributos.inteligencia -= 1;
      atributos = { ...atributos, ...anao };
      break;
  }
  console.log(atributos);
});
