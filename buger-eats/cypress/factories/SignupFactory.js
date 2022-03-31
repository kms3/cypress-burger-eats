export default{
    deliver: function(){

        var data = {
            name: 'Karina Silva',
            cpf: '00000012480',
            email: 'karina@gmail.com',
            whatsapp: '81995963429',
            address: {
                postalcode: '53080300',
                street: 'Rua do Rouxinol',
                number: '150',
                details: 'CASA',
                district: 'Rio Doce',
                city_state: 'Olinda/PE'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}