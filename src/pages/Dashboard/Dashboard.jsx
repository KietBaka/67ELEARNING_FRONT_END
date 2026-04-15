import React,{useState} from 'react';
import './Dashboard.css';
import {useNavigate, useParams} from 'react-router-dom';


const Dashboard = () => {
  const navigate = useNavigate();

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const courses = [
  { id: 'giai-tich', title: 'Giai tich 1', info :'Hoc ve dao ham tich phan'},
  { id: 'triet-hoc', title: 'Triet hoc Mac-Lenin', info:'Hoc ve the gioi quan'}
];

const handleConfirmLogout = () =>{
  navigate('/');
}

  return (
    <div className="dashboard-container">
      {/* 1. Thanh bên (Sidebar) */}
      <aside className="sidebar">
        <div className="sidebar-logo">67EL</div>
        <nav>
          <div className="nav-item active"><i className="fa-solid fa-house"></i> Trang chủ</div>
          <div className="nav-item"><i className="fa-solid fa-book"></i> Khóa học</div>
          <div className="nav-item"><i className="fa-solid fa-user"></i> Hồ sơ</div>
          <div className="nav-item logout" onClick={() => setShowLogoutModal(true)}>
            <i className="fa-solid fa-right-from-bracket"></i> Đăng xuất
          </div>
        </nav>

      </aside>

      {/* 2. Nội dung chính */}
      <main className="main-content">
        <header className="top-header">
          <h2>Chào mừng trở lại, Kiệt! 👋</h2>
          <div className="user-info">
            <img src="https://ui-avatars.com/api/?name=Kiet+Vo" alt="avatar" />
          </div>
        </header>

        <section className="stats">
          <div className="stat-card"><h3>12</h3><p>Khóa học đã tham gia</p></div>
          <div className="stat-card"><h3>85%</h3><p>Tiến độ trung bình</p></div>
          <div className="stat-card"><h3>4</h3><p>Chứng chỉ đã đạt</p></div>
        </section>

        <h3>Khóa học của bạn</h3>
        <div className="course-grid">
          {courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-banner" style={{ backgroundColor: course.color }}>
                <i className="fa-solid fa-code"></i>
              </div>
              <div className="course-info">
                <h4>{course.title}</h4>
                <p>Giảng viên: {course.teacher}</p>
                <div className="course-footer">
                  <span><i className="fa-solid fa-users"></i> {course.students}</span>
                  <button className="btn-learn"
                  onClick = {() => navigate(`/course/${course.id}`)}
                  >Học tiếp</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      {showLogoutModal && (
      <div className = "modal-overlay">
        <div className = "modal-content">
          <h3>Xac nhan DANG XUAT</h3>
          <p>Ban co cha la muon dang xuat</p>
          <div className = "modal-buttons">
            <button className = "btn-cancel" onClick={() => setShowLogoutModal(false)}>
                  Hủy
            </button>
            <button className="btn-confirm-logout" onClick={handleConfirmLogout}>
              Dang xuat
            </button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Dashboard;