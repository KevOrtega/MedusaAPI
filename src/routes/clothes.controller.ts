import { RequestHandler } from 'express'
import Clothing from './clothing'

export const createClothing: RequestHandler = async (req, res) => {
    const clothing_found: Boolean = await Clothing.findOne({title: req.body.title})
    if(clothing_found) return res.status(301).json({message: 'This clothing already exists'})

    const clothing = new Clothing(req.body)
    const saved_clothing = await clothing.save()

    return res.json(saved_clothing)
}

export const getClothes: RequestHandler = async (req, res) => {
    try {
        const clothes = await Clothing.find()
        return res.json(clothes)
    } catch (error) {
        return res.json(error)
    }
}

export const getClothing: RequestHandler = async (req, res) => {
    const clothing_found = await Clothing.findById(req.params.id)

    return clothing_found ?
    res.json(clothing_found) :
    res.status(204).json('clothing not found')
}

export const updateClothing: RequestHandler = async (req, res) => {
    const clothing_updated = await Clothing.findByIdAndUpdate(req.params.id, req.body, { new: true })

    return clothing_updated ?
    res.json(clothing_updated) :
    res.status(204).json('clothing not found')

}

export const deleteClothing: RequestHandler = async (req, res) => {
    const clothing_deleted = await Clothing.findByIdAndDelete(req.params.id)

    return clothing_deleted ?
    res.json(clothing_deleted) :
    res.status(204).json('clothing not found')
}