const express = require('express')
const router = express.Router();
const products = require("../models/product")

router.get("/",(req,res) => {
    res.send("Hey")
})

// get
router.get("/:barcodeId", async (req, res) => {
    const product = await products.findOne({
        barcodeId: req.params.barcodeId,
    })
    res.json(product)
})

//post
router.post("/", (req, res) => {
    const product = new products(req.body)
    products.save().then(product => {
        res.send(product)
    }).catch(err => {
        res.status(500).send(err)
    })
})

module.exports = router