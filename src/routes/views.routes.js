import { Router } from "express";
import productsDao from "../daos/dbManager/products.dao.js";
import __dirname from '../utils.js';

const router = Router();

router.get('/', async (req, res) => {
    const list = await productsDao.getAll()
    res.render('home', {products: list})
})

router.get('/edit/:id', async (req, res) => {
    const product = await productsDao.getById(req.params.id)
    res.render('edit', {product})
})

router.get('/chat', (req, res) => {
    res.render('chat')
})

export default router;