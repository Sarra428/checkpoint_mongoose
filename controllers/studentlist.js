
const studentlist = require('../models/studentlist');
const studentlistSchema = require('../models/studentlist');




//method post
exports.Addstudent = async(req,res)=>{
    const {name, age, email, schoolYear} = req.body,
    try {
        const studentlist = new studentlistSchema(req.body);
        const found = await studentlistSchema.findOne('email');
        if (found){  return res.status(400).send({msg:'count is already exists'})  };
        console.log(studentlist);
    } catch (error) {
        res.status(500).send({msg:"could not add student to the list"});
    }
}



//method get
exports.getlist = async(req,res)=>{

    try {
        const studentlist = await StudentlistSchema.find()
        res.status(200).send({msg:"new student is added", studentlist})
    } catch (error) {
    res.status(500).send({msg:"could not find student"})       
    }

}



//method delete
exports.deletestudent = async(req,res)=>{

    try {
        const deleted = await StudentlistSchema.findByIdAndDelete(req.params._id)
        res.status(200).send({msg:"student is deleted", deleted})
    } catch (error) {
        res.status(500).send({msg:"could not delete student"})
    }
    
    }



    //method update 
    exports.studentupdated = async (req,res)=>{

        try {
            const updated = await StudentlistSchema.findByIdAndUpdate(req.params.id, {$set:req.body});
            res.status(200).send({msg: "student updated", updated})
        } catch (error) {
            res.status(500).send({msg:"could not updated", error})
        }
    
    }




    //method get for one student
    exports.getonestudent = async(req,res)=>{

        try {
            const foundstudent = await StudentlistSchema.findById(req.params.id)
            res.status(200).send({msg:"student found", foundstudent})
        } catch (error) {
            res.status(500).send({msg:"could not found", error})
        }
        
        }