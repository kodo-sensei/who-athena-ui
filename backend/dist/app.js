var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import bodyParser from "body-parser";
const app = express();
const port = 3002;
app.use(bodyParser.json());
app.use(cors());
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const request = req.body;
    console.log(request);
    fetch(request.url).then((response) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log(await response.json());
        res.send(yield response.json());
    }));
}));
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map