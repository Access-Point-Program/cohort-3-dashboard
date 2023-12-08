// Importing a mock set of rulesets from a JSON file

let mockRulesets = require('./data/rulesets.json');

const proxy = {
    // Configuration for the proxy, including the ability to change the host and HTTP proxy options
  _proxy: {
    changeHost: true,
    httpProxy: {
      options: {
        ignorePath: true,
      },
    },    
  },
      // Endpoint for handling GET requests to '/rulesets'
    'GET /ruleset': (_, res) => {
          // Responds with the mockRulesets in JSON format
      res.json(mockRulesets)
    },
     // Endpoint for handling DELETE requests to '/rulesets/:id'
    'DELETE /ruleset/:id': (req, res) => {
       // Filters out the ruleset with the specified id from the mockRulesets array
      mockRulesets = mockRulesets.filter(({id}) => id  != req.params.id)
       // Responds with a 204 No Content status, indicating successful deletion
      res.status(204);
      res.send();
    }
  }
  // Exporting the proxy object for use in other modules
  module.exports = proxy;