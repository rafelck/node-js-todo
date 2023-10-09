import {
    setTimeout,
} from "timers/promises";

export class TodolistService {
    todoList = ["kerja", "makan", "kawin"];

    getJsonTodoList() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todoList.map((value, index) => {
                return {
                    id: index,
                    todo: value
                }
            })
        })
    }

    getToDoList(req, res) {

        res.write(this.getJsonTodoList());
        res.end();

    }

    setToDoList(req, res) {
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            this.todoList.push(body.todo)
        })

        setTimeout(10000).then(r => {
            res.write(this.getJsonTodoList());
            res.end();
        });
    }

    updateToDoList(req, res) {
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            if (this.todoList[body.id]) {
                this.todoList[body.id] = body.todo;
            }
        })

        setTimeout(10000).then(r => {
            res.write(this.getJsonTodoList());
            res.end();
        });
    }

    deleteToDoList(req, res) {
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            if (this.todoList[body.id]) {
                this.todoList.splice(body.id, 1)
            }
        })

        setTimeout(10000).then(r => {
            res.write(this.getJsonTodoList());
            res.end();
        });


    }
}