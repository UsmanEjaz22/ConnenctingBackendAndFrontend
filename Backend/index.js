import express from 'express'
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Rao is sitting next to me");
});

app.get('/api/info', (req, res) => {
    const info = [
        {id: 1, title: "first title", content: "first content"},
        {id: 2, title: "second title", content: "second content"},
        {id: 3, title: "third title", content: "third content"},
        {id: 4, title: "fourth title", content: "fourth content"},
        {id: 5, title: "fifth title", content: "fifth content"}
    ]

    res.send(info);
})

app.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
})