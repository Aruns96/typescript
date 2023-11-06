import { Router } from "express";
import { Todo } from "../models/todo";
import { type } from "os";

const routes = Router();

let todos:Todo[] = [];

type RequestBody = {text:string};
type RequestParams = {todoId:string};

routes.get("/",(req,res,next)=>{
    res.status(200).json({todos:todos})
});


routes.post("/todo",(req,res,next)=>{
    const body =req.body as RequestBody;
    const newTodo : Todo= {
        id : new Date().toISOString(),
        text : body.text,
    }
    todos.push(newTodo)

    res.status(200).json({message:"sucess",newTodo:newTodo,todos:todos});
});


routes.delete("/todo/:todoId",(req,res,next)=>{
   const params = req.params as RequestParams
    if(params.todoId === undefined){
        return res.status(404).json({message:"id not found"})
    }

    

    todos = todos.filter(todoItem => todoItem.id !== params.todoId);

    res.status(200).json({message:"deleted sucessfully",todos:todos});


})

routes.put("/todo/:todoId",(req,res,next)=>{
    const params = req.params as RequestParams

    if(params.todoId === undefined){
        return res.status(404).json({message:"id not found"})
    }

    

    const index = todos.findIndex(todoItem => todoItem.id === params.todoId);
if(index>=0){
    todos[index] = {
        id :todos[index].id,
        text:req.body.text
    }

    res.status(200).json({message:"updated sucessfully",todos:todos});
}
   


})


export default routes;