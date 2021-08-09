var vendaServices = require('../services/venda-services');

module.exports = function (app:any) {

    const route = "/venda"
    //produto
    app.get(route, async (req:any, res:any) => {
        let resp = await vendaServices.getVendas()

        if(resp.cod == 0){
            res.json(resp).status(400)
        }else{
            res.json(resp)
        }

        
    });
};