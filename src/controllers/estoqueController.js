const { request, response } = require("express")
const mongoose = require("mongoose");
const Produtos = require("../models/Produtos");


//GET
const estoqueGeral = (request, response) => {

    Produtos.find()
        .then((Produtos) => {
            response.status(200).json(Produtos);
        })
        .catch(err => next(err));
}

//GET
const nomeProduto = (request, response) => {

    const {nomeProduto} = request.params;

    Produtos.find({nomeProduto: nomeProduto})
        .then((produto) => {
            console.log(produto.createdAt)
            response.status(200).json(produto);
        })
        .catch(err => next(err));
}

//POST
const cadastroProduto = async (request, response) => {
    let { nomeProduto, descricao, estoque, valorFabrica } = request.body;
    
  
     const novoProduto = new Produtos({
        nomeProduto,
        descricao,
        estoque,
        valorFabrica,
    });

    const checarNome =  request.body.nomeProduto

    console.log(checarNome)
    
    Produtos.findOne({nomeProduto: checarNome})
        .then(produto => {
            if (produto){
                response.status(400).json("Produto já cadastrado")
            }else {
                novoProduto.save()
                .then((res) => {
                    response.status(201).json(res);
                })
                .catch(err => next(err));
            }
        })

    
    }

//PATCH
const abastecerEstoque = async (request, response) => {

    
    const { nomeProduto, estoque } = request.body;
    
    try {
        let produto = await Produtos.findOne({ nomeProduto });

        produto.estoque = produto.estoque + estoque

        await produto.save();

        return response.status(201).json("Estoque abastecido!");

    }
    catch (err) {

        return response.status(400).json({ error: err.message })
        //PERSONALIZAR MSG
    }
}

//DELETE
const deletarProduto = (request, response) => {
    const { id } = request.params
    const salt = bcrypt.genSaltSync(bcryptSalt);
    
                Produtos.findByIdAndDelete(id)
                    .then(() => {
                        response.status(200).json("Produto deletado!");
                    })
                    .catch((err) => {
                        throw new Error(err);
                    });
            }
        

module.exports = {
    estoqueGeral,
    nomeProduto,
    cadastroProduto,
    abastecerEstoque,
    deletarProduto
}