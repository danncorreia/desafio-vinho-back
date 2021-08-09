import axios from "axios"
import { FiltroEnum } from "../models/enum/filtro-enum"

module.exports = {
    getVendas: async function () {
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


            return vendas

        } catch (err) {
            return { cod: 0, err }
        }
    }
}