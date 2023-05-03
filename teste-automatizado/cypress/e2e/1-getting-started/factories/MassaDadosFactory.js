// import { genericsUtils } from "../support/Globais/Utils";
import faker from 'faker';
import fakerBr from 'faker-br';



// var firstName = faker.name.firstName();
// var lastName = faker.name.lastName();

// var nomeGestor = faker.name.firstName();
// var sobrenomeGestor = faker.name.lastName();

var firstName = faker.name.firstName();
var lastName = faker.name.lastName();

var pet = faker.name.firstName();

// var faker = require('faker-br');




const meuCPF = fakerBr.br.cpf();

// const moment = require("moment/moment");
// const currentDate = moment().format("DD/MM/YYYY");

const nomeCompletoUsuario = `${firstName}`;
const nomeCompletoProponente = `${firstName} ${lastName}`;


const email = `${nomeCompletoProponente}@teste.com.br`;
const nomeCompletoPet = `${firstName}`;





export default {
    massaDados: function () {
      var dados = {

        regionais:{
            regional01:"AH SP.04 Marcos Eduardo Abi Rached Silva",
            regional02:"AH SP.05 FABIANE ABI RACHED",
            regional03:"AHMG.01 AU!HAPPY PLANO DE SAÚDE ANIMAL LTDA"
        }, 

        consultorRegional03:{
            consultor01:"Agatha Celine Costa Pessoa",
            consultor02:"Ana Clara de Oliveira Soares",
            consultor03:"Clara de Oliveira Cordeiro"
        },

        especie:{
            canino:"Canino",
            felino:"Felino"

        },

        racaCanino:{
            raca01:"AFFENPINCHER",
            raca02:"AFGHAN HOUND",
            raca03:"SHIH-TZU"

        },

        inserirNomeProponente:{
        nomeCompletoP:`${nomeCompletoProponente}`, 
        
        },

        municipios:{
            municipioMG: "Belo Horizonte",
            municipioRJ: "Rio De Janeiro",
            municipioSP: "São Paulo"

        },

        emails:{
            emailProponente:`${email}`,

        },

        planos:{
            auPet: "Au! Pet",
            auPetSemCarencia: "Au! Pet (sem carência)" ,
            auFriendly: "Au! Friendly" ,
            auFriendlySemCarencia: "Au! Friendly (sem carência)" ,
            auLove: "Au! Love"

        },

        nomeParaPet:{

            nomeComPet: `${nomeCompletoPet}`
          
            
        },

        sexoPet:{
            sexo01: "Fêmea",
            sexo02: "Macho"
            
        },

        dadosPessoais:{
            cpf: meuCPF,
        },

        sexoContratante:{
            feminino: "Feminino",
            masculino: "Masculino"

        },

        formaPagamento:{
            boleto: "Boleto",
            cartao: "Cartão de Crédito"
        },

        enviarArquivos:{
            arquivoPDF: "arquivo.pdf"
        }

       
            
        

        


        


        

      
        




    };
    return dados;
  },
};