"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//servidor-estatico.ts
const http = __importStar(require("http"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const servidor = http.createServer((req, res) => {
    const archivo = path.join(__dirname, "..", "public", "saludo.html"); // el dirname es como decile a el program a donde esta el archivo
    // fs para leer el archivo html
    fs.readFile(archivo, (error, contenido) => {
        if (error) {
            res.writeHead(404, { "content-Type": "text/plain" });
            res.end("Archivo no encontrado");
            return;
        }
        //no se calcula nada simplement se entrega el html tal cual
        res.writeHead(200, { "content-Type": "text/html; charset=utf-8" });
        res.end(contenido);
    });
});
// para levant un servido en dicho puerto de la compuad
servidor.listen(3005, () => console.log("Servidor escuchando en http://localhost:3005"));
//# sourceMappingURL=servidor-estatico.js.map