const students = [
      { name: "Jacob", score: 80 },
      { name: "Jovan", score: 60 },
      { name: "Alaiza", score: 75 },
      { name: "Anna", score: 90 },
      { name: "Maureen", score: 68 }
    ];
        const searchfunction = () => {
            const inputText = document.getElementById('input-text').value.trim().toLowerCase();
            const student = students.find(e=> e.name.toLowerCase() === inputText);
            if (student){
                document.getElementById('result').textContent = `${student.name} scored ${student.score}`;
            } else {
                document.getElementById('result').textContent = "No Record Found!";
            }
        };