var express = require('express');
var request = require('request');
var router = express.Router();

var pedido="";
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/new',function(req, res, next) {
  pedido=JSON.parse(req.body.valor);
  console.log(pedido);
  res.send(pedido.status);
});

router.get('/sts',function(req, res, next) {
  console.log(pedido);
  res.send(pedido.status);
});

router.get('/completado',function(req, res, next) {
  pedido.status="Entregado";
  console.log(pedido.status);
  request.post('http://localhost:3400/completado', {
  json: {
    status: pedido.status
    }
  }, (error, res2, body) => {
  if (error) {
    console.error(error)
    respuesta="no Entregado"
    return
    }
  console.log(`statusCode: ${res2.statusCode}`)
  console.log(body)
  respuesta=body;
  })
  res.send(pedido.status);
});

router.post('/cambiar',function(req, res, next) {
  pedido.status=req.body.status;
  console.log(pedido);
  res.send(pedido.status);
});

module.exports = router;
