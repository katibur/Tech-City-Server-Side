const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const categories = require('./Data/Categories/Categories.json');

const courses = require('./Data/Courses/Courses.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('api running on port 5000')
});

app.listen(port, () => {
    console.log('api is running on port', port);
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
});

app.get('/course-categories/:id', (req, res) => {
    const id = req.params.id;
    {
        const courseCategory = courses.filter(singlecourseCategory => singlecourseCategory.category_id === id);
        res.send(courseCategory);
    }
});


app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(singleCourse => singleCourse._id === id);
    res.send(selectedCourse);

    // console.log(req.params.id);
});