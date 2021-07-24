const app = require('../server')
chai = require('chai')
chaiHttp = require('chai-http')
expect = chai.expect
chai.use(chaiHttp)
const url = 'http://localhost:8080/api/user'
requester = chai.request.agent(url)
describe("Testing for fetching users table", function() {
    it('should reterive all the users from the the database', function(done) {
        requester.get('/').end(function(err, res) {
            expect(res).to.have.status(200)
            done();
        })
    })
    const newUser = { name: 'david', password: 'david741', email: 'abed16021994@gmail.com' }
    it("should add david in the users table", function(done) {

        //calling ADD api
        requester
            .post('/')
            .send(newUser)
            .end(function(err, res) {
                expect(res).to.have.status(201)
                done();
            });
    });
})