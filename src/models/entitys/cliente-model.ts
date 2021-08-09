export class ClienteModel {

  id: number = void(0);
  nome: string = void(0);
  cpf: string = void(0);

  constructor(
    id?: number,
    nome?: string,
    cpf?: string
  ){
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
  }
}
