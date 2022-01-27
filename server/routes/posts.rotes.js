import { Router } from 'express'
import Post from '../models/Post.js'

const router = Router()

//  api/posts/
router.post('/create', async (req, res) => {
    try {
        const { name, category } = req.body

        const post = new Post({ name, category })

        await post.save()
        res.status(201).json({massage: 'пост создан'})
    } catch (e) {
        res.status(500).json({massage: 'что-то пошло не так'})
    }
})

router.get('/create', async (req, res) => {
    console.log('Hy, you do rigth, just do it! ')
})

export default router