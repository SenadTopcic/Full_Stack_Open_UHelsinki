import React from 'react'
import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'

//display all courses
const Course = ({courses}) => {
    return (
        <div>
            {courses.map(course => 
                <div key = {course.id}>
                    <Header course = {course}/>
                    <Content course = {course}/>
                    <Total course = {course}/>
                </div>
            )}
        </div >
    )
}
export default Course;
