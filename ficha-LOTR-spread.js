//personagens de Lord of the Rings
//posições 1 = companheiro, 2 = inimigo
//raças 1 = hobbit, 2 = humano, 3 = elfo, 4 = anão
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
    posicao: 1,
    raca: 2,
  },
];

//Classes de personagens
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

//Posições classificadas como 1(companheiro) e 2(inimigo)
const posicao = {
  posicao: "companheiro",
};
const posicao2 = {
  posicao: "inimigo",
};

//Raças classificadas como 1(hobbit), 2(humano), 3(elfo) e 4(anão) e suas características
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

//Funçaõ que atribui os atributos de cada classe ao personagem
personagensLOTR.forEach((personagem) => {
  let atributos = {};
  if (personagem.classe === "ladino") {
    atributos = { ...personagem, ...ladino };
    console.log("==========================");
  } else if (personagem.classe === "guerreiro") {
    atributos = { ...personagem, ...guerreiros };
    console.log("==========================");
  } else if (personagem.classe === "clérigo") {
    atributos = { ...personagem, ...clerigo };
    console.log("==========================");
  }
  //Condição para atribuir os atributos de acordo com a posição do personagem
  if (personagem.posicao === 1) {
    atributos.defesa += 5;
    atributos = { ...atributos, ...posicao };
  } else if (personagem.posicao === 2) {
    atributos.forca += 7;
    atributos = { ...atributos, ...posicao2 };
  }
//Condição para atribuir os atributos de acordo com a raça do personagem
  if (personagem.raca === 1) {
    atributos.carisma +=2;
    atributos.destreza +=2;
    atributos = { ...atributos, ...hobbit };
  } else if (personagem.raca === 2) {
    atributos = { ...atributos, ...humano };
  } else if (personagem.raca === 3) {
    atributos.forca += 3;
    atributos.defesa += 3;
    atributos.destreza += 3;
    atributos.carisma += 3;
    atributos = { ...atributos, ...elfo };
  } else if (personagem.raca === 4) {
    atributos.forca += 5;
    atributos.carisma -= 2;
    atributos.inteligencia -= 1;
    atributos = { ...atributos, ...anao };
  }
  
  console.log(atributos);
});
