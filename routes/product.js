const express = require('express')
const router = express.Router();
const products = require("../models/product")

router.get("/",(req,res) => {
    res.send("Hey")
})


router.get("/prod",(req,res) => {
    res.send("Hey")
})

//get washingmachine



router.get("/prod/:prodName", (req, res) => {
    if(req.params.prodName=="washingmachine"){
        const washingmachine = await products.find({
            productGroup: req.params.prodName,
        })
        res.json(washingmachine)
    }
    
    
    // res.send(typeof(req.params.prodName))
})

// get
router.get("/:barcodeId", async (req, res) => {
    const p = await products.findOne({
        barcodeId: req.params.barcodeId,
    })
    res.json(p)
})

//post
router.post("/", (req, res) => {
    const p = new products(req.body)
    p.save().then(product => {
        res.send(product)
    }).catch(err => {
        res.status(500).send(err)
    })
})

module.exports = router