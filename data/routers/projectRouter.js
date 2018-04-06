const express = require('express');
const router = express.Router();
const db = require('../helpers/projectModel.js');

router.get('/', (req, res) => {
  db.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(console.error('Error retrieving projects', error));
    });
  });

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.get(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      res.status(500).json(console.error('Error retrieving project', error));
    });
});

router.post('/add', (req, res) => {
  const project = req.body;
  db.insert(project)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(error => {
      res.status(500).json(console.error('Error adding project', error));
    });
});

router.put('/:id/update', (req, res) => {
  const { id } = req.params;
  const project = req.body;
  db.update(id, project)
    .then(updated => {
      res.status(200).json(updated);
    })
    .catch(error => {
      res.status(500).json(console.error('Error updating project', error));
    });
});

router.delete('/:id/delete', (req, res) => {
  const { id } = req.params;
  db.remove(id)
    .then(removed => {
      res.status(200).json(removed);
    })
    .catch(error => {
      res.status(500).json(console.error('Error deleting project', error));
    });
});

module.exports = router;
