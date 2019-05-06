const router = require('express').Router()
const conn = require('../connection/connection')

// Tambah Kategori
router.post('/addcategories', (req, res) => {
    const {nama} = req.body;
    const sql = `insert into categories (nama) 
                 values ('${nama}')`

    conn.query(sql, (err, result) => {
        if(err) return res.send(err.sqlMessage)

        res.send(result)
    })
})

// Edit Kategori
router.patch('/editcategories/:id', (req, res) => {
    const sql = `update categories set ? where id = ?`
    const data = [req.body, req.params.id]

    conn.query(sql, data, (err, result) => {
        if(err) res.send(err.sqlMessage)

        res.send(result)
    })
})

// Hapus Kategori
router.delete('/deletecategories/:id', (req, res) => {
    const sql = `delete from categories where id = ?`
    const data = req.params.id
    conn.query(sql, data, (err, result) => {
        if(err) res.send(err.sqlMessage)
        res.send(result)
    })
})

// Tampilkan semua Kategori
router.get('/allcategories', (req, res) => {
    const sql = `select * from categories`

    conn.query(sql, (err, result) => {
        if(err) res.send(err.sqlMessage)
        res.send(result)
    })
})

module.exports = router