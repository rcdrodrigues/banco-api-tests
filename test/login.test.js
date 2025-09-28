const request = require('supertest');
const {expect} = require ('chai');
require('dotenv').config();
const postLogin = require ('../fixtures/postLogin.json')

describe ('Login', () => {
    describe ('POST/ Login', () => {
        const bodyLogin = { ...postLogin }

        it ('Deve retornar 200 com um token em string quando credenciais válidas ', async () => {
           //console.log(process.env.BASE_URL)
            const resposta = await request (process.env.BASE_URL)
                .post('/Login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin);
            //console.log(resposta.status) 
            //console.log(resposta.body)       
            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');
                    
        });
    });
});