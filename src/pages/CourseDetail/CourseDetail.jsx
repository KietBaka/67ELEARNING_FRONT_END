import React from 'react';
import './CourseDetail.css';
import {useNavigate, useParams} from 'react-router-dom';

const CourseDetail = () =>{
    const {courseId} = useParams();
    const navigate = useNavigate();

    const courseData ={
        'giai-tich': {title: 'Giai tich 1', info: 'Hoc ve dao ham tich phan'},
        'triet-hoc': {title: 'Triet hoc Mac-Lenin', info: 'Hoc ve the gioi quan'}
    };

    const currentCourse = courseData[courseId] || { title: 'Không tìm thấy', info: '' };

  return (
        <div className="course-detail-container">
            <button onClick={() => navigate('/dashboard')}>⬅ Quay lại</button>
            <h1>{currentCourse.title}</h1>
            <div className="course-header">
                <p>{currentCourse.info}</p>
            </div>
        </div>
    );
}
export default CourseDetail;