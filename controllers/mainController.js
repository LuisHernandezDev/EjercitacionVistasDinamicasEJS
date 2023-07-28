const controller = {

    getIndex: (req, res) => {
        res.render('index');
    },

    getDetalleMenu: (req, res) => {
        res.render('detalleMenu');
    },
};


module.exports = controller;