const express = require('express');

const router = express.Router();

let idCount = 5;

let listaProductos = [
	{
		title: "ASUS TUF Gaming AMD RX 6950 XT 16 Gb OC EDITION",
		price: 1181,
		thumbnail: "https://m.media-amazon.com/images/I/81Y+Zr51m4L._AC_SX522_.jpg",
		id: 1
	},
	{
		title: "Gigabyte AORUS RTX 3080 Ti Master 12 GB GDDR6X",
		price: 1564,
		thumbnail: "https://m.media-amazon.com/images/I/517lkQvi+pS._AC_SX522_.jpg",
		id: 2
	},
	{
		title: "MSI RX 6900 XT Gaming X Trio 16 Gb",
		price: 1343,
		thumbnail: "https://m.media-amazon.com/images/I/815a7kn-FDS._AC_SL1500_.jpg",
		id: 3
	},
	{
		title: "ASUS ROG Strix NVIDIA GeForce RTX 3090 OC Edition 24GB GDDR6X",
		price: 2289,
		thumbnail: "https://m.media-amazon.com/images/I/81q6ZBQFsHL._AC_SX522_.jpg",
		id: 4
	}
]


//GET
router.get('/', async (_req,res) => {
    try {
        res.status(200).json(listaProductos)
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id', (req,res) => {
    try {
        let producto = listaProductos.find(product => product.id == req.params.id)
        producto ? res.status(200).json(producto) : res.status(300).json({error:"Not found"})
    } catch (error) {
        res.status(500).json(error)
    }
});

//POST
router.post('/', (req,res) => {
    try {
        const { body } = req
		listaProductos.push({idCount, ...body})
		idCount += 1
		res.status(200).json({
			succes: true,
			data: listaProductos.find( e => e.id == idCount-1)
		});
    } catch (error) {
        res.status(500).json(error);
    }
});

//PUT
router.put('/:id', (req,res) => {
    try {
        const { body } = req
		let index = listaProductos.findIndex(product => product.id == req.params.id)
		listaProductos[index] = {...listaProductos[index],...body}

		res.status(200).json({
			succes: true,
			data: listaProductos[index]
		});
    } catch (error) {
        res.status(500).json(error);
    }
});

//DELETE

router.delete('/:id', (req, res) =>{
	try{
		let index = listaProductos.findIndex(product => product.id == req.params.id)
		listaProductos.splice(index, 1)
		
		res.status(200).json({
			succes: true,
		})
	} catch (error){
		res.status(500).json(error)
	}
});



module.exports = router;