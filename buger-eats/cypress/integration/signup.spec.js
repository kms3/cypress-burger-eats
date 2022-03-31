import signup from '../pages/SignupPage'
import SignupFactory from '../factories/SignupFactory'

describe('Signup', () => {
    beforeEach(function () {

        // cy.fixture('deliver').then((d) => {
        //     this.deliver = d
        // })

    })
    it('User should be deliver', function () {
        var deliver = SignupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('Incorrect Document', function () {
        var deliver = SignupFactory.deliver()
        deliver.cpf = '10293296AAO'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        signup.alertMessageShouldBe('Oops! CPF inválido')

    })


    it('Incorrect Email', function () {
        var deliver = SignupFactory.deliver()
        deliver.email = 'karina.mota.br'
        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })

    //context.skip('Required Fields Context', function () {
    //    const messages = [

    //        { field: 'name', output: 'É necessário informar o nome' },
    //       { field: 'name', output: 'É necessário informar o CPF' },
    //        { field: 'name', output: 'É necessário informar o email' },
    //        { field: 'name', output: 'É necessário informar o CEP' },
    //        { field: 'name', output: 'É necessário informar o número do endereço' },
    //        { field: 'name', output: 'Selecione o método de entrega' },
    //        { field: 'name', output: 'Adicione uma foto da sua CNH' },
    //    ]

    //   before(function () {
    //        signup.go()
    //        signup.submit()
    //    })

    //    messages.forEach(funcion(msg){
    //        it('${msg.field} is required', function(){
    //            SignupPage.alertMessageShouldBe(msg.output)
    //        })
    //    })
    //})

    it('Required Fields', function(){
        signup.go()
        signup.submit()

        signup.alertMessageShouldBe('É necessário informar o nome')
        signup.alertMessageShouldBe('É necessário informar o CPF')
        signup.alertMessageShouldBe('É necessário informar o email')
        signup.alertMessageShouldBe('É necessário informar o CEP')
        signup.alertMessageShouldBe('É necessário informar o número do endereço')
        signup.alertMessageShouldBe('Selecione o método de entrega')
        signup.alertMessageShouldBe('Adicione uma foto da sua CNH')
    })
})