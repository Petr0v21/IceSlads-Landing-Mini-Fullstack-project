import express from 'express'
import config from 'config'
import mongoose from 'mongoose'
import cors from 'cors'
import Post from './models/Post.js'
// import router from './routes/posts.rotes.js'

const app = express()
const PORT = config.get('port') || 5000

app.use(express.json({ extended: true }))
app.use(cors())
// app.use('/posts', router)

app.get('/posts/findpost', async (req, res) => {
    const posts = await Post.find({})
    console.log(posts)
    res.send(posts)
})

app.post('/posts/create', async (req, res) => {
    try {
        const { name, phone } = req.body
        const post = new Post({ name, phone })
        console.log(post)
        console.log('Hy, you do rigth, just do it! ')
        await post.save()
        res.status(201).json({massage: 'пост создан'})
    } catch (e) {
        res.status(500).json({massage: 'что-то пошло не так'})
    }
})

async function start() {
    try{
        await mongoose.connect(config.get('mongoUriSecond'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
    } catch (e) {
        console.log('Server Error:', e.message )
        process.exit(1)
    }
}

start()

