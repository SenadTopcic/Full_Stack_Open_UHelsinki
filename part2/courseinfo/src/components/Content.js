//display content of courses
const Content =  ({ course }) => {
  return (
    <div>
      {
        course.parts.map((line) => (
          <p key={line.id}>{line.name} {line.exercises}</p> 
        ))
      }
    </div>   
  )
}

export default Content;