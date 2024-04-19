//personagens de Lord of the Rings
const personagensLOTR = [
  {
    nome: "Frodo",
    classe: "ladino",
    posicao: 1,
  },
  {
    nome: "Sam",
    classe: "clérigo",
    posicao: 1,
  },
  {
    nome: "Merry",
    classe: "guerreiro",
    posicao: 1,
  },
  {
    nome: "Pippin",
    classe: "guerreiro",
    posicao: 1,
  },
  {
    nome: "Gollum",
    classe: "ladino",
    posicao: 2,
  },
  {
    nome: "Bilbo",
    classe: "ladino",
    posicao: 1,
  },
  {
    nome: "Aragorn",
    classe: "guerreiro",
    posicao: 1,
  },
  {
    nome: "Gimli",
    classe: "guerreiro",
    posicao: 1,
  },
  {
    nome: "Legolas",
    classe: "guerreiro",
    posicao: 1,
  },
  {
    nome: "Gandalf",
    classe: "clérigo",
    posicao: 1,
  },
  {
    nome: "Saruman",
    classe: "clérigo",
    posicao: 2,
  },
  {
    nome: "Boromir",
    classe: "guerreiro",
    posicao: 1,
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

  console.log(atributos);
});
