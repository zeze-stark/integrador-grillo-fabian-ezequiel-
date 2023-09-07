// Importación de módulos
const http = require('http');



http.createServer((req, res) => {

    if (req.url === "/home") {

        res.write("Bievenid@ al servidor con Express.")
        res.end()
        return;
    }

    if (req.url === "/user"){
        const user = [{ user: "alesan", rol: "admin" }]
        res.writeHead(200, { 'Content-Type': 'application/json'})
        res.write(JSON.stringify(user));
        return res.end();
    }


    res.write("RUTA NO DISPONIBLE" + req.url)
    res.end()


}).listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"))





