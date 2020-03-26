
exports.createDB = function(mongoose){
    const ToDoListSchema = new mongoose.Schema({
        name: String,
        items: []
    });

    return TodoList = new mongoose.model("TodoList", ToDoListSchema);
}
