const express = require('express');
const studentlistRoute = express.Router();
const { Addstudent, getlist, deletestudent, studentupdated, getonestudent } = require('../controllers/studentlist')



//method post
studentlistRoute = ("/Addstudent", Addstudent)


//method get
StudentlistRoute.get('/list', getlist)


//method delete
StudentlistRoute.delete('/:id', deletestudent)


//method update
StudentlistRoute.put('/:id', studentupdated)


//method getone
StudentlistRoute.get("/:id", getonestudent )



