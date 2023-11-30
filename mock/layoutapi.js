// Importing a mock set of layouts from a JSON file
let mockLayouts = require('./data/layouts.json');

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

  // Endpoint for handling GET requests to '/layouts'
  'GET /layouts': (_, res) => {
    // Responds with the mockLayouts in JSON format
    res.json(mockLayouts);
  },

  // Endpoint for handling DELETE requests to '/layouts/:id'
  'DELETE /layouts/:id': (req, res) => {
    // Filters out the layout with the specified id from the mockLayouts array
    mockLayouts = mockLayouts.filter(({ id }) => id != req.params.id);

    // Responds with a default status (200 OK) and sends the response
    res.send();
  },
};

// Exporting the proxy object for use in other modules
module.exports = proxy;