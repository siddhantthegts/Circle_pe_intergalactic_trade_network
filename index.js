const http = require('http');

const port = 3000,
  httpStatus = require('http-status-codes'),
  app = http.createServer((req, res) => {
    console.log(`Server running on port ${port}`);
    res.writeHead(httpStatus.StatusCodes.OK, {
      'Content-Type': 'text/html',
    });

    let resMessage = '<h1>Hello from trade network API </h1>';
    res.write(resMessage);
    res.end();
    console.log(`Sent a response: ${resMessage}`);
  });
app.listen(port);
console.log(
  `Server is started successfullt and listening at port number ${port}`
);
