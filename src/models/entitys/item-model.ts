export class ItemModel {

  produto: string = void(0);
  variedade: string = void(0);
  pais: string = void(0);
  categoria: string = void(0);
  safra: string = void(0);
  preco: number = void(0);

  constructor(
    produto?: string,
    variedade?: string,
    pais?: string,
    categoria?: string,
    safra?: string,
    preco?: number

  ){
    this.produto = produto;
    this.variedade = variedade;
    this.pais = pais;
    this.categoria = categoria;
    this.safra = safra;
    this.preco = preco;

  }
}
