import React from 'react';
import "../assets/CSS/CourseList.css"
function CourseList() {
  const courses = [
    { 
      id: 1, 
      name: 'Introduction to React', 
      difficulty: 'Beginner', 
      imageUrl: 'https://example.com/react_intro_image.jpg',
      description: 'Learn the basics of React including components, props, and state.',
      instructor: 'John Doe',
      duration: '4 weeks'
    },
    { 
      id: 2, 
      name: 'Advanced React Concepts', 
      difficulty: 'Intermediate', 
      imageUrl: 'https://example.com/advanced_react_image.jpg',
      description: 'Dive deeper into React with topics like context, higher-order components, and performance optimization.',
      instructor: 'Jane Smith',
      duration: '6 weeks'
    },
    { 
      id: 3, 
      name: 'React Hooks Tutorial', 
      difficulty: 'Intermediate', 
      imageUrl: 'https://example.com/react_hooks_image.jpg',
      description: 'Learn how to use React Hooks to manage state and side effects in functional components.',
      instructor: 'James Johnson',
      duration: '3 weeks'
    },
    { 
      id: 4, 
      name: 'Mastering Redux', 
      difficulty: 'Advanced', 
      imageUrl: 'https://example.com/mastering_redux_image.jpg',
      description: 'Master Redux and its ecosystem for managing state in large-scale applications.',
      instructor: 'Emily Brown',
      duration: '8 weeks'
    }
  ];

  return (
    <div className="course-list-container">
      {courses.map(course => (
        <div className="course-item" key={course.id}>
          <img className="course-image" src={course.imageUrl} alt={course.name} />
          <div className="course-details">
            <h3 className="course-title">{course.name}</h3>
            <p className="course-info"><strong>Difficulty:</strong> {course.difficulty}</p>
            <p className="course-info"><strong>Instructor:</strong> {course.instructor}</p>
            <p className="course-info"><strong>Duration:</strong> {course.duration}</p>
            <p className="course-description">{course.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseList;
