const express = require('express');
const router = express.Router();
const {createDonor, getDonors,loginDonor, getDonorById,updateDonor,deleteDonor} = require('../controllers/donor.controller');


router.get('/',getDonors);
router.post('/register', createDonor);
router.post('/login', loginDonor);
router.get('/:id', getDonorById);
router.put('/:id', updateDonor);
router.delete('/:id',deleteDonor);

module.exports = router;