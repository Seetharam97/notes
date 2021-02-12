const express = require('express');

const router = express.Router();

const userService = require('./User.service.js');


// Notes add details
router.post('/addNotes', addNotes);
router.post('/updateNotes', updateNotes);
router.post('/deleteNotes', deleteNotes);
router.get('/getNotes', getNotes);
router.get('/getNotesById', getNotesById);
// remainder details
router.post('/addRemainder', addRemainder);
router.post('/updateRemainder', updateRemainder);
router.get('/fetchRemainder', fetchRemainder);
router.post('/deleteRemainder', deleteRemainder);

module.exports = router;


// functions

// 1. addNotes
function addNotes(req, res, next){
	console.log("addNotes in the Controller");
	userService.addNotes(req.body, function(result){
		console.log("result"+result)
		res.json({ "message":"Success", "status": "Notes has been added Successfully" });
	});
};

// 2.getNotes
function getNotes(req, res, next) {
    console.log("get the notes in Controller");
    userService.getNotes(req.body, function(result){
      console.log("result"+result);
      res.json({"status":"Notes details","records":result});
    });

};
// 3.getNotesById
function getNotesById(req, res, next) {
    console.log("get the notes by individual id in Controller");
    userService.getNotesById(req.body, function(result){
      console.log("result"+result);
      res.json({"status":"Notes details by individual id","records":result});
    });
};

// 4.updateNotes
function updateNotes(req, res, next){
	console.log("update notes in the Controller");
	userService.updateNotes(req.body, function(result){
		console.log("result"+result);
		res.json({ "message": "Success", "status": "Notes has been updated", "records": result })

	});
};

// 5.deleteNotes
function deleteNotes(req, res, next){
	console.log("delete notes in Controller");
	userService.deleteNotes(req.body, function(result){
		console.log("result"+result)
		res.json({ "message": "Success", "status": "Notes has been deleted"})
	});
};

// addRemainders
function addRemainder(req, res, next){
	console.log("add remainder");
	userService.addRemainder(req.body, function(result){
		console.log('result'+result)
		res.json({"message": "success", "status": "Remainder has been added"})
	});
};
// update  Remainder
function updateRemainder(req, res, next){
	console.log("Update the remainder")
	userService.updateRemainder(req.body, function(result){
		console.log('result'+result)
		res.json({"message": "Updated sucessfully", "status": "Remainder has been updated", "records": result}) 
	});
};
// fetch myremainder
function fetchRemainder(req, res, next){
	console.log("Fetch the remainder")
	userService.fetchRemainder(req.body, function(result){
		console.log('results'+result)
		res.json({"message": "fetched details", "records": result})
	});
};
// delete the remainder
function deleteRemainder(req, res, next){
	console.log("delete the remainder");
	userService.deleteRemainder(req.body, function(result){
		res.json({"message": "sucess", "status": "Remainder has been deleted"});
	});
};