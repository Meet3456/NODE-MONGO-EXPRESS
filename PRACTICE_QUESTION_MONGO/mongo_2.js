const mongoose = require("mongoose")

//Connecting to DataBase:
mongoose.connect("mongodb://0.0.0.0:27017/Student1")
    .then(()=>{
        console.log("Connection successful");
    })
    .catch(err =>{
        console.log("Connection failed, error: ",err);
    });

//Defining Schema:
const StudentSchema = new mongoose.Schema({
    name:String,
    percentage:Number,
    address:String
});

//Creating a model name Student - which takes collection name and Schema of the model
const Student = new mongoose.model("info-students",StudentSchema)


//Function to insert student record:
async function insertStudent(student){
    const newStudent = new Student(student);
    await newStudent.save();
    console.log('Student record inserted successfully.')
}

const student1 = {
    name: 'John Doe',
    percentage: 95,
    address: 'Andheri'
};

const student3 = {
    name: 'Mike Johnson',
    percentage: 30,
    address: 'Andheri'
  };


//function to find student who scored mmore than 90%:
async function morethan90(percentage){
    const students = await Student.find({percentage:{$gt:percentage}});  //$gt stands for greater than:
    console.log(`Students who secured more than ${percentage}%:`);
    console.log(students);
}

//Function to display students who failed the examination
async function lessthan35(){
    const students = await Student.find({percentage:{$lt:35}});  //$gt stands for greater than:
    console.log('Failing Students:');
    console.log(students);
}

//Query to display students who stay in Andheri
async function livingin(){
    const students = await Student.find({address:'Andheri'});
    console.log("Students living in Andheri:",students)
}



livingin()
// morethan90(90)
// lessthan35()
// insertStudent(student1);
// insertStudent(student3);