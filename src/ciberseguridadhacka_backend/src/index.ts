import React, { useState } from 'react';
import {Server} from 'azle';
import express from 'express';
import cors from 'cors';


export default Server( () => {
    const app = express();
    app.use(cors())
    
    app.get("/",(req,res)=>{
        res.status(200).json({msg:"Service is running"})
    })

    app.get("/working",(req,res)=>{
        res.status(200).json({msg:"All working"})
    })

    
    let data:any = [];
    app.use(express.json())
    //get
    app.get("/get-data",(_:any,res:any)=>{
        return res.status(200).json(data)
    })
    //create
    app.post("/save-license",(req:any,res:any)=>{
        data.push(req.body)
        return res.status(200).json(data)
    })
    //update
    app.put("/update-license/:id",(req:any,res:any)=>{
        const dataUpdated = data.map((item:any)=>{
            if(req.params.id == item.id){
                item = req.body
            }
            return item
        })
        data = dataUpdated;
        return res.status(200).json(data)
    })
    //delete
    app.put("/delete-license/:id",(req:any,res:any)=>{
        const dataUpdated = data.filter((item:any)=>req.params.id != item.id)
        data = dataUpdated;
        return res.status(200).json(data)
    })

    app.use(cors());
    return app.listen()
})
