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


module.exports = {
  create,
  getAll
}