const express = require('express');

const DataAccessModel = require('./dataAccessModel.js');

const router = express.Router();

//GET
router.get('/recipes/', (request, responce) => {
  DataAccessModel.getRecipes()
    .then(output => { responce.json(output); })
    .catch( error => {
      console.log(error);
      responce.status(500).json( {error: "Get Failed."} )
    })
});

router.get('/recipes/:id/shoppingList', (request, responce) => {
  DataAccessModel.getShoppingList(request.params.id)
    .then(output => { responce.json(output); })
    .catch( error => {
      console.log(error);
      responce.status(500).json( {error: "Get Failed."} )
    })
});

module.exports = router;
