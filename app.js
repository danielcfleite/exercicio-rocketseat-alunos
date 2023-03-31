let studentNames = []
let students = [{
    studentName: "Carlos",
    firstGrade: 10 ,
    secondGrade: 5,
    passed: false,
    overallScore: 0,
},
{
    studentName: "José",
    firstGrade: 8.85 ,
    secondGrade: 4.62,
    passed: false,
},
{
    studentName: "Maria",
    firstGrade: 9 ,
    secondGrade: 6,
    passed: false,
    overallScore: 0
},
{
    studentName: "Clara",
    firstGrade: 4 ,
    secondGrade: 6,
    passed: false,
    overallScore: 0
}]

students.forEach(element => {
    element.overallScore = (element.firstGrade + element.secondGrade) / 2
    if (element.overallScore >= 6){
        element.passed = true
    }
        messages (element.studentName, element.overallScore, element.passed)
    });

    function messages (studentName, overallScore, passed) {
        if (passed === true){
            alert (`O aluno(a) ${studentName} teve uma média de ${overallScore.toFixed(1)}, parabéns! Você foi aprovado`)
        }
        else {
            alert (`O aluno(a) ${studentName} teve uma média de ${overallScore.toFixed(1)}, não foi dessa vez, ${studentName}, tente novamente. `) 
        }
    }