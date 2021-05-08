const express = require('express')
const router = express.Router();
const WashingMachine = require("../models/washingMachine")

router.get("/",(req,res) => {
    res.send("Hey")
})

// get
router.get("/:barcodeId", async (req, res) => {
    const washingmachine = await WashingMachine.findOne({
        barcodeId: req.params.barcodeId,
    })
    res.json(washingmachine)
})

//post
router.post("/", (req, res) => {
    const washingmachine = new WashingMachine(req.body)
    washingmachine.save().then(washingmachine => {
        res.send(washingmachine)
    }).catch(err => {
        res.status(500).send(err)
    })
})

module.exports = router