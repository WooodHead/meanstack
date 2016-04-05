var router = require('express').Router();
var Word = require('../models/words');
var bodyParse = require('body-parser');
var urlencoded = bodyParse.urlencoded({ extended: false });


/* get words lists */
router.get('/', (req, res, next) => {
	Word.find({}, (err, words) => {
		res.json(words);
	})
})

router.post('/', urlencoded, (req, res, next) => {
	if (req.body) {
		Word.create({ fr: req.body.word.fr, en: req.body.word.en, cat:5 });
		res.redirect("/words");
	} else {
		console.log("no data");
	}
})


router.delete('/', urlencoded, (req, res, next) => {
	if (req.body) {
		Word.findOneandRemove({id: req.id}, (err) => {
			if (err) throw err;
			res.redirect("/words");
		})
	} else {
		console.log("nothing to delete");
	}
})


module.exports = router;