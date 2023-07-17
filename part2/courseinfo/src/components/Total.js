//display total excersises 
const Total = ({ course }) => {
  const total = course.parts.reduce((sum,part) =>{
    return sum + part.exercises;
  },0 )
  return <p><strong>Total of {total} exercises</strong></p>;
}
export default Total;
