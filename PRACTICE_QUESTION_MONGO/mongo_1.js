const mongoose = require("mongoose")

mongoose.connect("mongodb://0.0.0.0:27017/Student")
    .then(()=>{
        console.log("Connection successful");
    })
    .catch(err =>{
        console.log("Connection failed, error: ",err);
    });

const StudentSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String
});

//Creating a model name Student - which takes collection name and Schema of the model
const Student = new mongoose.model("student-infos",StudentSchema)

//Function to insert a new student
const insertStudent = async(name,age,email)=>{
    try{
        const result = new Student({   
            name:name,
            age:age,
            email:email
        });
        await result.save();
        console.log("Student inserted successfully",result);
    } catch(err){
        console.log("Failed to insert student, error:",err);
    }
};


//Function to remove a student:
const deleteStudent = async(name)=>{
    const result = await Student.deleteOne({name:name});
    console.log("Student removed successfully!",result)
}


//Function to update a student record:
const updateStudent = async(name,newAge)=>{
    try{
        const student = await Student.findOneAndUpdate({ name: name }, { age: newAge }, { new: true });
        console.log('Student updated successfully:', student);
    } catch(err){
        console.log("Failed to update student, error: ", err);
    }
};


updateStudent("Vineet Chotaliya",56)