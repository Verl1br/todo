const todoList = require('./models/todoList');

class todoController {
    async createTodo(req, res) {
        const {title, description, status} = req.body;
        const todo = new todoList({
            title,
            description,
            status,
        });
        await todo.save();
        return res.status(200).json(todo);
    } catch (e) {
        console.log(e);
        res.status(400).json({ message: "Create error" });
    }

    async getList(req, res) {
        try {
            const list = await todoList.find();
            res.status(200).json(list);
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: "Get error" });
        }
    }

    async getATodo(req, res) {
        try {
            const id = req.params.id;
            const todo = await Todo.findOne({ _id: id });
            res.status(200).json(todo);
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: "Get error" });
        }
    }

    async updateTodo(req, res) {
        try {
            const id = req.params.id;
            const {title, description, status} = req.body;
            const updateData = {
                title,
                description,
                status,
            };
            const todo = todoList.findByIdAndUpdate(id, updateData) 
            return res.status(200).json(todo);
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: "Update error" });
        }
    }

    async deleteTodo(req, res) {
        try {
            const id = req.params.id;
            const todo = todoList.findByIdAndDelete({ _id: id });
            return res.status(200).json(todo);
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: "Update error" });
        }
    }
}

module.exports = new todoController();
