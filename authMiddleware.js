const jwt = require('jsonwebtoken');

const secret = 'secret';
const USERNAME = 'user';
const PASSWORD = 'test';

module.exports = function(req, resp, next ){
  console.log('req', req);
  if(req.url === '/api/login' || req.url=== '/login'
      && req.method === 'POST'){
    const{ username, password } = req.body;
    if(username === USERNAME && password === PASSWORD ){
      let token = jwt.sign({ data: username, expiresIn: '1h'}, secret);
      resp.json({success: true, token});
    } else{
      resp.json({success: false});
    }
  }
  resp.end();
  return;

}
