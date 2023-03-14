import cartsDao from "../daos/dbManager/carts.dao.js";
import { Router } from 'express';

const router = Router();

router.post('/', async (req, res) => {
    try{
        const cart = await cartsDao.createCart();
        res.json(cart);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

router.get('/:id', async (req, res) => {
    try {
        const cart = await cartsDao.getCartByID(req.params.id);
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

router.post('/:id/product/:pid', async (req, res) => {
    try {
        const cart = await cartsDao.addProductToCart(req.params.id, req.params.pid)
        res.json(cart);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})

export default router;