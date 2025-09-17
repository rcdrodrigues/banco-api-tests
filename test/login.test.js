const request = require('supertest');
const {expect} = require ('chai');

describe ('Login', () => {
    describe ('POST/ Login', () => {
        it ('Deve retornar 200 com um token em string quando credenciais válidas ', async () => {
            const resposta = await request ('http://localhost:3000')
                .post('/Login')
                .set('Content-Type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                    });
            //console.log(resposta.status) 
            //console.log(resposta.body)       
            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');
                    
        });
    });
});