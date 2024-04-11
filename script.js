// JavaScript


//  index page scripts stART
// this logic is used to add the subject whenver click on the add more sub btn
document.getElementById('addSubject').addEventListener('click', function () {
    // by accessing the id of subject div container to create the dynamically div element
    const subjectsContainer = document.getElementById('subjectsContainer');
    //  createElement is used to create the element append to DOM
    const subjectRow = document.createElement('div');
    subjectRow.classList.add('subject-row');
    subjectRow.innerHTML = `
      <label for="subject">Subject:</label>
      <input type="text" class="subject" name="subject[]" required>
      <label for="outOf">Out of:</label>
      <select name="outOf[]" class="outOf" required>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      <label for="marks">Obtained Marks:</label>
      <input type="number" class="marks" name="marks[]" min="0" required>
      <button type="button" class="removeSubject">Remove Subject</button>
    `;
    // the element which i have created 
    // is appended to sunject container of subject div
    subjectsContainer.appendChild(subjectRow);
});


// here i have used the eventlistener 
// for when click on remove btn 
// the element which i have created using the Createelement and appended to subject div 
// is with remove method and event is built in object for every htm element which is speciying the 
// target value 
document.getElementById('subjectsContainer').addEventListener('click', function (event) {
    if (event.target.classList.contains('removeSubject')) {
        event.target.parentElement.remove();
    }
});

document.getElementById('studentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission it will not refresh the form


    const formData = {
        fullName: document.getElementById('fullName').value,
        rollNumber: document.getElementById('rollNumber').value,
        subjects: []
    };

    const subjectInputs = document.querySelectorAll('.subject');
    const outOfInputs = document.querySelectorAll('.outOf');
    const marksInputs = document.querySelectorAll('.marks');



    subjectInputs.forEach((subjectInput, index) => {
        formData.subjects.push({
            name: subjectInput.value,
            outOf: outOfInputs[index].value,
            obtained: marksInputs[index].value
        });
    });

    // local storage is api that can store data  by setItem Method and can 
    // get the by getitem method 
    // setItem is  method  used to add the data through key and value.
    localStorage.setItem('formData', JSON.stringify(formData));
    window.location.href = 'score.html'; // Redirect to score.html
});

//   index.html script ends







