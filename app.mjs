import http from "http";
import {TodolistService} from "./todolist-service.mjs";

const service = new TodolistService();
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    if (req.method === "GET") {
        service.getToDoList(req, res)
    } else if (req.method === "POST") {
        service.setToDoList(req, res)
    } else if (req.method === "PUT") {
        service.updateToDoList(req, res)
    }else if (req.method === "DELETE") {
        service.deleteToDoList(req, res)
    }
});


server.listen(7000);