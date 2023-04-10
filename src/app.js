import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const users = []
const tweets = []


app.post("/sign-up", (req, res) => {
    const userData = {
        username: req.body.username,
        avatar: req.body.avatar
    }

    users.push(userData)
    res.send("OK")
})

app.post("/tweets", (req, res) => {
    const tweetSave = {
        username: req.body.username,
        tweet: req.body.tweet
    };

    //  {
    //     return res.status(401).send("UNAUTHORIZED")
    // }

    // const user = req.body

    // const userValid = users.find(item => item.username === user.username)

    // if(!userValid) return res.status(401).send("UNAUTHORIZED")

    // tweets.push(tweet)


    res.send("OK")
})

app.get("/tweets", (req, res) => {
    const post = tweets.map((m) => ({
        username: (m.username),
        tweet: (m.tweet),
        avatar: (users.find((i) => i.username === m.username)).avatar,
    }))

    res.send(post.slice(-10).reverse())
})

app.listen(5000, () => {
    console.log("Rodando na porta: 5000")
})