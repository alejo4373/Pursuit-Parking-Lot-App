const router = require('express').Router()
const { ParkingLot } = require('../db/models');

router.post('/', async (req, res, next) => {
  const lotName = req.body.name
  try {
    let newLot = await ParkingLot.create(lotName);
    res.json({
      payload: newLot,
      message: "new lot created",
      error: false
    })
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    let lots = await ParkingLot.getAll();
    res.json({
      payload: lots,
      message: "all lots retrieved",
      error: false
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router;