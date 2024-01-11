const Router = require('express');
const controller = require('./todoController');
const router = new Router();

router.post('/create', controller.createTodo);
router.get('/list', controller.getList);
router.get('/list/:id', controller.getATodo);
router.put('/update/:id', controller.updateTodo);
router.delete('/delete/:id', controller.deleteTodo);

module.exports = router;
