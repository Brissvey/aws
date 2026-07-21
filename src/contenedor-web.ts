// contenedor dinamico

import * as http from "http";
import { Url} from "url";

const servidor = http.createServer((req:any, res:any)=>{
    const url = new URL(req.url ?? "/", `http://${req.headers.host}`)

    // cada if es una url diferente
    if(url.pathname === "/hora-saludo"){
        const nombre = url.searchParams.get("nombre")?? "visitante";
        const hora = new Date().getHours();
        const saludo = hora < 12 ? "Buenos dias"
                    : hora < 19 ? "Buenas tardes": "Buenas noches";

        res.writeHead(200,{"Content_Type": "text/html; charset=utf-8"});
        res.end(`<h1>Hola, ${nombre} - ${saludo}</h1>`)
        return;
    }
    res.writeHead(404,{'Content-Type':'text/plain'} )
    res.end('Not found')
});
servidor.listen(3006,()=>console.log("Servidor escuchando en http://localhost:3006"))