function criaXicara(nome, altura, largura) {
  return {
    nome: nome,
    altura: altura,
    largura: largura,
  };
}

const xicara1 = criaXicara("Redonda", 1.0, 2.0);
console.log(xicara1);
