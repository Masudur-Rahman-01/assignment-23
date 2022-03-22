
// Get Elements
import Alert from "./src/Alert.js"
import Storage from "./src/Storage.js"

const student_add_form = document.getElementById('student_add_form')
const student_data_list = document.getElementById('student_data_list')

// Students Form Submit For Data Add
student_add_form.addEventListener('submit', function (e) {
    e.preventDefault();

    const msg = document.querySelector('.msg')

    let form_data = new FormData(e.target)
    let data = Object.fromEntries(form_data.entries())
    

    let { name, roll, cell, location } = data

    if (name == '' || roll=='' || cell == '' || location == '') {

        msg.innerHTML = Alert.danger('All fields are required')
    } else {

        Storage.set('students', data)
        student_add_form.reset()
        getAllStudent()
    }
    
})

// Show All Student Data
getAllStudent()
function getAllStudent() {

    let data = Storage.get('students')

    let list = ''

    data.map((data, index) => {

        let { name, roll, cell, location, photo } = data;
        
        list += ` 
        <tr>
        <td>${index + 1}</td>
        <td>${name}</td>
        <td>${roll}</td>
        <td>${cell}</td>
        <td>${location}</td></td>
        <td><img src="${photo ? photo : './img/default.jpg'}" style ="height:50px; width:50px; object-fit:cover;"/> </td>
            <td>
            <button class="btn btn-info btn-sm"><i class="fas fa-eye"></i></button>
            <button class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
            <button class="btn btn-danger btn-sm"><i class="fas fa-trash"></i></button>
            </td>
            </tr>
            `
        })
        
        student_data_list.innerHTML = list
    };
    
    