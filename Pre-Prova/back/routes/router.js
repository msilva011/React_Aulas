const express = require("express");
const router = express.Router();
const tasks = require("../models/taskSchema");


//create note
router.post("/create",async(req,res)=>{
    //console.log(req.body);
    const {note} = req.body;

    if(!note){
        res.status(422).json("Adicione uma nota");
    }

    try{
        const pretask = await tasks.findOne({note:note});
        console.log(pretask);

        if(pretask){
            res.status(422).send("Esta nota já existe")
        }else{
            const addtask = new tasks({note});

            await addtask.save();
            res.status(201).json(addtask);
            console.log(addtask);

        }
    } catch (error) {
        console.log(error); // Adicione esta linha para exibir o erro no console
        res.status(500).json({ error: "Internal Server Error" });
      }
      
})

//listar task
router.get("/getdata",async(req,res)=>{
    try{
        const taskdata = await tasks.find();
        res.status(201).json(taskdata)
        console.log(taskdata);
    }catch (error){
        res.status(404).json(error);
    }
})

//editar task
router.get("/gettask/:id", async (req, res) => {
    try {
      console.log(req.params);
      const { id } = req.params;
  
      const taskEdit = await tasks.findById({_id:id});
      console.log(taskEdit);
      res.status(201).json(taskEdit);
    } catch (error) {
      res.status(422).json(error);
    }
  }); 
  
  //update task
router.patch("/updatetask/:id", async(req, res) => {
    try {
      const { id } = req.params;
  
      const updatetask = await tasks.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true
        }
      );
      console.log(updatetask);
      res.status(201).json(updatetask);
    } catch (error) {
      res.status(422).json(error);
    }
  });


//remover task
router.delete("/deletetask/:id", async(req, res) => {
    try {
        console.log(req.params);
      const { id } = req.params;
  
      const deletetask = await tasks.findByIdAndDelete({_id:id})
      console.log(deletetask);
      res.status(201).json(deletetask);
      
    } catch (error) {
      res.status(422).json(error);
    }
  })


module.exports = router;