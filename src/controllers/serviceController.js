const serviceController = {
    
    index: (req, res) => {
        return res.send('Hello World Service')
    },

    create: (req, res) => (req, res) => {
        return res.send('Lista de serviços')
    },

    show: (req, res) => {
        return res.send('Detalhes do serviço: ' + req.params.id)
    },

    edit: (req, res) => {
        return res.send('Editar um serviço: ' + req.params.id)
    },

    store: (req, res) => {
        return res.send('Gravar um serviço: ' + req.params.id)
    },
        
    update: (req, res) => {
        return res.send('Atualização de um serviço: ' + req.params.id)        
    },

    destroy: (req, res) => {
        return res.send('Exclusão de um serviço: ' + req.params.id)
    },
}        
module.exports = serviceController;