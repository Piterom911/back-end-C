import express from 'express';

const app = express();
const port = 3000;

const jsonBodyMiddleware = express.json();
app.use(jsonBodyMiddleware);

const db = {
    courses: [
        {id: 1, title: "front-end"},
        {id: 2, title: "back-end"},
        {id: 3, title: "automation qa"},
        {id: 4, title: "devops"},
    ]
}

app.get('/', (req, res) => {
    res.send('Hello my World!!!!!');
})

// fetch("http://localhost:3000/courses/3", {method: 'get'})
//     .then(res => res.json())
//     .then(json => console.log(json))

app.get('/courses', (req, res) => {
    const foundCourses = req.query.title
        ? db.courses.filter(c => c.title.indexOf(req.query.title as string) > -1)
        : db.courses
    res.json(foundCourses);
});

app.get('/courses/:id', (req, res) => {
    const foundCourse = db.courses.find(c => +req.params.id === c.id)
    !foundCourse ? res.sendStatus(404) : res.json(foundCourse);
});

// fetch("http://localhost:3000/courses", {
//     method: 'POST',
//     body: JSON.stringify({title: 'dba'}),
//     headers: {'content-type': 'application/json'}
// })
//     .then(res => res.json())
//     .then(json => console.log(json))
app.post('/courses', (req, res) => {
    const createdCourse = {
        id: +new Date(),
        title: req.body.title
    }

    db.courses.push(createdCourse)
    res.json(createdCourse)
})



// lesson #2

// app.get('/', (req, res) => {
//     res.send('Hello my World!!!!!');
// })
//
// app.get('/samurais', (req, res) => {
//     res.send('Hello, samurais!!!!!!')
// })
//
// app.post('/samurais', (req, res) => {
//     res.send('We have created new samurai!!!!!');
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})