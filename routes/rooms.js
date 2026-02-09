const express = require('express');
const router = express.Router();

// Mocked room data
let rooms = [];

// Endpoint to create a new room
router.post('/rooms', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Room name is required' });
    }
    const newRoom = { id: rooms.length + 1, name };
    rooms.push(newRoom);
    res.status(201).json(newRoom);
});

// Endpoint to get all rooms
router.get('/rooms', (req, res) => {
    res.json(rooms);
});

// Endpoint to get a specific room by id
router.get('/rooms/:id', (req, res) => {
    const room = rooms.find(r => r.id === parseInt(req.params.id));
    if (!room) {
        return res.status(404).json({ error: 'Room not found' });
    }
    res.json(room);
});

// Endpoint to update a room by id
router.put('/rooms/:id', (req, res) => {
    const room = rooms.find(r => r.id === parseInt(req.params.id));
    if (!room) {
        return res.status(404).json({ error: 'Room not found' });
    }
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Room name is required' });
    }
    room.name = name;
    res.json(room);
});

// Endpoint to delete a room by id
router.delete('/rooms/:id', (req, res) => {
    const roomIndex = rooms.findIndex(r => r.id === parseInt(req.params.id));
    if (roomIndex === -1) {
        return res.status(404).json({ error: 'Room not found' });
    }
    rooms.splice(roomIndex, 1);
    res.status(204).send();
});

module.exports = router;