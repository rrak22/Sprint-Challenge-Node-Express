const express = require('express');
const router = express.Router();
const db = require('../helpers/actionModel.js');

router.get('/', (req, res) => {
  db.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json(console.error('Error retrieving actions', error));
    });
  });

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.get(id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      res.status(500).json(console.error('Error retrieving action', error));
    });
});

router.post('/add', (req, res) => {
  const action = req.body;
  db.insert(action)
    .then(action => {
      res.status(200).json(action)
    })
    .catch(error => {
      res.status(500).json(console.error('Error adding action', error));
    });
});

router.put('/:id/update', (req, res) => {
  const { id } = req.params;
  const action = req.body;
  db.update(id, action)
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(error => {
      res.status(500).json(console.error('Error updating action', error));
    });
});

router.delete('/:id/delete', (req, res) => {
  const { id } = req.params;
  db.remove(id)
    .then(removed => {
      res.status(200).json(removed);
    })
    .catch(error => {
      res.status(500).json(console.error('Error deleting action', error));
    });
});

module.exports = router;
