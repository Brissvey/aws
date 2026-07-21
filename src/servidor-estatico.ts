//servidor-estatico.ts
import * as http from "http";
import * as fs from "fs";
import * as path from "path";

const servidor = http.createServer((req: any, res: any)=>{
    const archivo = path.join(__dirname, "..","public","saludo.html"); // el dirname es como decile a el program a donde esta el archivo
// fs para leer el archivo html
    fs.readFile(archivo, (error:any, contenido:any)=>{
        if(error){
            res.writeHead(404,{"content-Type": "text/plain"})
            res.end("Archivo no encontrado");
            return;
        }
        //no se calcula nada simplement se entrega el html tal cual
        res.writeHead(200,{"content-Type": "text/html; charset=utf-8"})
        res.end(contenido)
    })
});

// para levant un servido en dicho puerto de la compuad

servidor.listen(3005,()=>console.log("Servidor escuchando en http://localhost:3005"))