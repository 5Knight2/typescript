"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.json({ todos: todos });
});
router.post('/', (req, res, next) => {
    const Body = req.body;
    const newTodo = { id: new Date().toISOString(), text: Body.text };
    todos.push(newTodo);
    res.status(200).json({ msg: 'Added', todos: todos });
});
router.delete('/:id', (req, res, next) => {
    const Params = req.params;
    const index = todos.findIndex((currTodo) => currTodo.id == Params.id);
    if (index >= 0) {
        todos = todos.filter((currTodo) => { currTodo.id != Params.id; });
        res.status(200).json({ msg: 'deleted', todos: todos });
    }
    res.status(404).json({ msg: 'Item Not Found' });
});
router.put('/:id', (req, res, next) => {
    const Body = req.body;
    const Params = req.params;
    const index = todos.findIndex((currTodo) => currTodo.id == Params.id);
    if (index >= 0) {
        todos[index].text = Body.text;
        res.status(200).json({ msg: 'updated', todos: todos });
    }
    res.status(404).json({ msg: 'Item Not Found' });
});
exports.default = router;
