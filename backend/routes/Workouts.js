const express = require('express')
const Workout = require('../Models/WorkoutModel')
const mongoose = require('mongoose')

const router = express.Router()

//Get All Workouts
router.get('/' , async (req,res) => {
    const workout = await Workout.find({}).sort({createdAt : -1})
    res.status(200).json(workout)
})

//Get Specific Workot   
router.get('/:id' , async (req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "Invalid Id !"})
    }

    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error : "No such Workout is Found !"})
    }
    res.status(200).json(workout)
})

//Create a new Workot
router.post('/',async  (req,res) => {
    const {title , load , reps} = req.body
    let emptyFields = []
    if(!title){
        emptyFields.push('title')
    }
    if(!load){
        emptyFields.push('load')
    }
    if(!reps){
        emptyFields.push('reps')
    }
    if(emptyFields.length > 0){
        return res.status(400).json({error : "Please Fill in the All Fields !", emptyFields})
    }
    try {
        const workout = await Workout.create({title , load, reps})
        res.status(200).json(workout)   
    } 
    catch (error){
        res.status(400).json({error : error.message })
    }
})

//Delete a Workout
router.delete('/:id', async (req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "Invalid Id !"})
    }

    const workout = await Workout.findOneAndDelete({_id : id})
    if(!workout){
        return res.status(404).json({error : "No such Workout is Found !"})
    }
    res.status(200).json(workout)
})

// Update a Workout
router.patch('/:id', async (req,res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "Invalid Id !"})
    }

    const workout = await Workout.findOneAndUpdate({_id : id}, {
        ...req.body
    })
    if(!workout){
        return res.status(404).json({error : "No such Workout is Found !"})
    }
    res.status(200).json(workout)
})

module.exports = router