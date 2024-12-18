  const express = require("express");
  const app = express();

  const { createTodo, updateTodo } = require("./type.js");

  const {todo} = require("./db");

  app.use(express.json());

   //body {
   //title: string;
   //description
  //}

  app.post("/todo", async function(req, res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
      res.status(411).json({
        msg: "You sent the wrong input",
      })
      return;

    }

    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    })

    res.json({
      msg: "Todo created"
    })



  })

  app.get("/todos", async function(req, res){
    const todos = await todo.find({});

    res.json({
      todos
    })

  })
  
  app.put("/completed  ", async function(req, res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
      res.status(411).json({
        msg: "You sent the wrong input",
      })
      return;

    }

    await todo.update({
      _id: req.body.id
    },{
      completed: true
    })
    res.json({
      msg: "Todo marked as completed"
    })
  })

  app.listen(5879);