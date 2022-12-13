const todo = require('../models/model');

const getTodo = async(req,res)=>{
    const Get = await todo.find({});
    res.status(200).send(Get);
}
const createTodo = async(req,res)=>{
        try {
            const{title,description,isCompleted}=req.body;
            const existingTask = await todo.findOne({title:title});
            if(existingTask){
                res.status(401).send('User already exists');
            }
            const task = await todo.create({
                title,
                description,
                isCompleted
            });
            res.status(200).json({task});
        } catch (error) {
            res.status(400).json({error:error.message});
        }  
}
const updateTodo = async(req,res)=>{
    const {id}=req.params;
    
    const updatetodo = await todo.findByIdAndUpdate({_id:id},{...req.body});
    
    if(!updatetodo){
        res.status(400).json({error:'No such task to update'})
    }
    res.status(200).json({message:'user updated',updatetodo});
}
const deleteTodo=async(req,res)=>{
    const {id} = req.params;
    const deletetodo = await todo.findOneAndDelete({_id:id});
    if(!deletetodo){
        res.status(400).json({error:'No such task to delete'});
        
    }
    res.status(200).json({message:'user deleted',deletetodo});
}
module.exports={getTodo,createTodo,updateTodo,deleteTodo};