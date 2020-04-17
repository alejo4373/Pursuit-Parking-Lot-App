const { db } = require('../pgp')

const create = async (name) => {
  const insertLotQuery = "INSERT INTO boards (name) VALUES ($/name/) RETURNING *"
  try {
    let lot = await db.one(insertLotQuery, { name })
    return lot
  } catch (err) {
    throw err;
  }
}

const getAll = async () => {
  try {
    let lots = await db.any("SELECT * FROM boards")
    return lots
  } catch (err) {
    throw err;
  }
}

const addLane = async (lane) => {
  const newLaneQuery = `
    INSERT INTO lanes(name, board_id)
      VALUES($/name/, $/board_id/)
      RETURNING * 
  `

  try {
    const newLane = await db.one(newLaneQuery, lane)
    return newLane
  } catch (err) {
    throw err;
  }
}







module.exports = {
  create,
  getAll
}
