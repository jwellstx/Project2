const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../server');
const { expect } = chai;

chai.use(chaiHttp);

let chaiRequest;

describe('Server test', () => {

    beforeEach(async () => {
        chaiRequest = await chai.request(app);
    })

    afterEach(async () => {
        await chaiRequest.close();
    })

    it('server should return all of our cars from /', async() => {
        const results = await chaiRequest
            .get('/')

        expect(results.status).to.equal(200);
        expect(results.text).to.be.a('string');
    });

    it('server should return bad creds for wrong email', async() => {
        const postContent = {
            email: "bademail@doesntexist.com",
            password: "wrongpassword"
        }
        const results = await chaiRequest
            .post('/login')
            .send(postContent);

        expect(results.status).to.equal(200);
        expect(results.body.correctCredentials).to.be.false;
    });

    it('server should return bad creds for wrong password', async() => {
        const postContent = {
            email: "jwellstx@gmail.com",
            password: "wrongpassword"
        }
        const results = await chaiRequest
            .post('/login')
            .send(postContent);

        expect(results.status).to.equal(200);
        expect(results.body.correctCredentials).to.be.false;
    });

    it('server should return good creds for login', async() => {
        const postContent = {
            email: "jwellstx@gmail.com",
            password: "1234"
        }
        const results = await chaiRequest
            .post('/login')
            .send(postContent);

        expect(results.status).to.equal(200);
        expect(results.body.correctCredentials).to.be.true;
    });

});