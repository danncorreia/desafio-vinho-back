var clienteServices = require('../services/cliente-services');

module.exports = function (app:any) {

    const route = "/cliente"
    //produto
    app.get(route, async (req:any, res:any) => {
        console.log(req.query.filtro)
        let filtros = req.query?.filtro? req.query:{filtro:1}

        let resp = await clienteServices.getClientes(filtros)

        if(resp.cod == 0){
            res.json(resp).status(400)
        }else{
            res.json(resp)
        }

        
    });

    app.get(route+'/clienteMaiorCompra', async (req:any, res:any) => {
        let ano = req.query?.ano? req.query.ano:2016

        let resp = await clienteServices.getClienteMaiorCompra(ano)

        if(resp.cod == 0){
            res.json(resp).status(400)
        }else{
            res.json(resp)
        }

    });
};