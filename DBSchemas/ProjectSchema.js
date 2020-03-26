exports.createDB = function(mongoose){
    const projectSchema = new mongoose.Schema({
        title: String,
        status: String,
        owner: String,
        assignee: String,
        jira: String,
        palamida: String
        //comments: [String]
    });

    return Project = new mongoose.model("Project", projectSchema);
}