/** 
 * Hacker Ram: Grading students
 * 
 * 
 * 
 *  INPUT:73,67,38,33
 *  OUTPUT: 75,67,40,33
 */


const gradingStudents = (grades) => {

  return grades.map(grade => {
    const round = Math.ceil((grade +1) /5) * 5
    return (round - grade < 3) && grade >= 38 ? round : grade
})

};


gradingStudents([73,67,38,33]);