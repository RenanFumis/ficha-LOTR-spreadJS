//personagens de Lord of the Rings
const personagensLOTR = [
  {
    nome: "Frodo",
    classe: "ladino",
  },
  {
    nome: "Sam",
    classe: "clérigo",
  },
  {
    nome: "Merry",
    classe: "guerreiro",
  },
  {
    nome: "Pippin",
    classe: "guerreiro",
  },
  {
    nome: "Gollum",
    classe: "ladino",
  },
  {
    nome: "Bilbo",
    classe: "ladino",
  },
  {
    nome: "Aragorn",
    classe: "guerreiro",
  },
  {
    nome: "Gimli",
    classe: "guerreiro",
  },
  {
    nome: "Legolas",
    classe: "guerreiro",
  },
  {
    nome: "Gandalf",
    classe: "clérigo",
  },
  {
    nome: "Saruman",
    classe: "clérigo",
  },
  {
    nome: "Boromir",
    classe: "guerreiro",
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

  console.log(atributos);
});
