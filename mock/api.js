let mockRulesets = require('./data/rulesets.json');

const proxy = {
    _proxy: {
      changeHost: true,
      httpProxy: {
        options: {
          ignorePath: true,
        },
      },    
    },
    'GET /rulesets': (_, res) => {
      res.json(mockRulesets)
    },
    'DELETE /rulesets/:id': (req, res) => {
      mockRulesets = mockRulesets.filter(({id}) => id  != req.params.id)
      res.status(204);
      res.send();
    }
  }
  module.exports = proxy;