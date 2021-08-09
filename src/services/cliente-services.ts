import axios from "axios"
import { FiltroEnum } from "../models/enum/filtro-enum"

module.exports = {
    getClientes: async function (obj: any) {
        try {
            let clientes: any = await axios.get('https://www.mocky.io/v2/598b16291100004705515ec5')
                .then(resp => {
                    return resp.data
                }).catch(err => {
                    throw new Error(err)
                })

            let vendas = await axios.get('https://www.mocky.io/v2/598b16861100004905515ec7')
                .then(resp => {
                    return resp.data
                }).catch(err => {
                    throw new Error(err)
                })


            vendas.map(compra => {
                if (compra.cliente.length <= 14) {
                    compra.cliente = "0" + compra.cliente
                }
                clientes.map(cliente => {
                    if (cliente.cpf.length <= 14) {
                        cliente.cpf = "0" + cliente.cpf
                    }

                    if (compra.cliente === cliente.cpf.replace('-', '.')) {
                        compra.cliente = cliente;
                    }
                })
            })


            switch (Number(obj.filtro)) {
                case FiltroEnum.ALFABETICA:
                    return clientes.sort((a, b) => {
                        if (a.nome > b.nome)
                            return 1
                        else if (a.nome < b.nome)
                            return -1
                        else
                            return 0
                    })

                case FiltroEnum.MAIORVALORTOTALEMCOMPRAS:
                    vendas.sort((a, b) => {
                        if (a.valorTotal < b.valorTotal)
                            return 1
                        else if (a.valorTotal > b.valorTotal)
                            return -1
                        else
                            return 0
                    })
                    console.log(vendas)
                    clientes = []
                    vendas.map(venda => {
                        let resp = clientes.findIndex(x => JSON.stringify(x) == JSON.stringify(venda.cliente))
                        console.log(resp)
                        if (resp == -1) {
                            clientes.push(venda.cliente)
                        }
                    })

                    return clientes
                case FiltroEnum.MAISFIEIS:
                    vendas.map(venda => {
                        clientes.map(cliente => {
                            if (venda.cliente.cpf == cliente.cpf) {
                                if (!cliente.qtd) {
                                    cliente.qtd = 1
                                } else {
                                    cliente.qtd++
                                }
                            }
                        })
                    })
                    clientes.sort((a, b) => {
                        if (a.qtd < b.qtd)
                            return 1
                        else if (a.qtd > b.qtd)
                            return -1
                        else
                            return 0
                    })
                    return clientes

                default:
                    return clientes
            }

        } catch (err) {
            return { cod: 0, err }
        }
    },

    getClienteMaiorCompra: async function (ano) {
        try {
            let clientes: any = await axios.get('https://www.mocky.io/v2/598b16291100004705515ec5')
                .then(resp => {
                    return resp.data
                }).catch(err => {
                    throw new Error(err)
                })

            let vendas = await axios.get('https://www.mocky.io/v2/598b16861100004905515ec7')
                .then(resp => {
                    return resp.data
                }).catch(err => {
                    throw new Error(err)
                })


            vendas.map(compra => {
                if (compra.cliente.length <= 14) {
                    compra.cliente = "0" + compra.cliente
                }
                clientes.map(cliente => {
                    if (cliente.cpf.length <= 14) {
                        cliente.cpf = "0" + cliente.cpf
                    }

                    if (compra.cliente === cliente.cpf.replace('-', '.')) {
                        compra.cliente = cliente;
                    }
                })
            })
            vendas.sort((a, b) => {
                if (a.valorTotal < b.valorTotal)
                    return 1
                else if (a.valorTotal > b.valorTotal)
                    return -1
                else
                    return 0
            })
            return vendas.filter(venda => {
                return Number(venda.data.split('-')[2]) == ano
            })[0].cliente
        }catch(err){
            return { cod: 0, err }
        }
    }
}