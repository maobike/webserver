
const http = require('http');


http.createServer( (req, res) => {

    //res.writeHead(200, { 'Content-Type': 'application/json' });
    //res.setHeader('Content-Disposition', 'attachement; filename=lista.csv')
    //res.writeHead(200, { 'Content-Type': 'application/csv' });
    //res.write('404 | Page not found');
    //res.write( JSON.stringify(persona) );
    //res.write( 'Id; Nombre\n' );
    //res.write( '1; Mauricio\n' );
    // res.write( '2; Pedro\n' );
    // res.write( '3; Fernando\n' );
    //res.end();


    res.write( 'Hola');
    res.end();



})
.listen( 8080 );

console.log('Escuchando en el puerto', 8080);