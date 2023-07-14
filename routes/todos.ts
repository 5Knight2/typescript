import {Router} from 'express'
import{Todo} from '../models/todos'

let todos:Todo[]=[]
const router=Router();

router.get('/',(req,res,next)=>{
    res.json({todos:todos})
})

router.post('/',(req,res,next)=>{
   const newTodo:Todo={id:new Date().toISOString(),text:req.body.text}
    todos.push(newTodo)
    res.status(200).json({msg:'Added',todos:todos})
})
router.delete('/:id',(req,res,next)=>{
    const index=todos.findIndex((currTodo)=>currTodo.id==req.params.id)
    if(index>=0){
       todos= todos.filter((currTodo)=>{currTodo.id!=req.params.id})
       res.status(200).json({msg:'deleted',todos:todos})
    }
    res.status(404).json({msg:'Item Not Found'})
})

router.put('/:id',(req,res,next)=>{
    console.log(req.params.id);
    
    const index=todos.findIndex((currTodo)=>
        currTodo.id==req.params.id)
    if(index>=0){
        todos[index].text=req.body.text;
        res.status(200).json({msg:'updated',todos:todos})
    }
    res.status(404).json({msg:'Item Not Found'})
})

export default router;