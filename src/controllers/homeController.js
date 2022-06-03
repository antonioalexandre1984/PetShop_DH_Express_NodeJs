const db = require('../db.json');

const homeController = {
    
    index: (req, res) => {
      const title = 'Minha primeira aplicação com ejs'
        return res.render('home',{ title});
    },

     upon: (req, res) =>{
         return res.render('home/upon')
    },

  services: (req, res) => {
     const services = db.services
        return res.render('home/services',{services})
    },

    login: (req, res) => {
        return res.render('home/login')
    },

    contact: (req, res) => {
      return res.render('home/contact')
    },

    register: (req, res) => {
      return res.render('home/register')
    },
   
}

module.exports = homeController;