const express = require('express');

const server = express();

const port = 5000;
server.use(express.json());

let lessons = [
	{
		id: 1,
		name: 'Introduction to HTTP APIs with Node.js and Express'
	}
];

server.get('/', (req, res) => {
	res.json('Hello World');
});

server.get('/api/lessons', (req, res) => {
	res.json(lessons);
});

server.post('/api/lessons', (req, res) => {
	const lessonInformation = req.body;

	lessons.push(lessonInformation);
	res.status(201).json(lessonInformation);
});

server.delete('/api/lessons/:id', (req, res) => {
	const id = Number(req.params.id);

	lessons = lessons.filter((lesson) => lesson.id !== id);
	res.status(200).json(lessons);
});

server.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
