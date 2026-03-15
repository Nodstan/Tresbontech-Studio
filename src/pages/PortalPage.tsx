import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { BookOpen, Calendar, Award, Users, FileText, Video, Download, Clock, CheckCircle, Circle, BarChart3, MessageSquare, Settings, User, LogOut } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  nextLesson: string;
  instructor: string;
  duration: string;
  thumbnail: string;
}

interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'reading' | 'quiz' | 'assignment';
  duration: string;
  completed: boolean;
  locked: boolean;
}

interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  type: 'info' | 'warning' | 'success';
}

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Full Stack Web Development',
    progress: 65,
    totalLessons: 120,
    completedLessons: 78,
    nextLesson: 'React Hooks Deep Dive',
    instructor: 'John Smith',
    duration: '12 weeks',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=300&h=200&fit=crop'
  },
  {
    id: '2',
    title: 'JavaScript Fundamentals',
    progress: 100,
    totalLessons: 45,
    completedLessons: 45,
    nextLesson: 'Course Completed!',
    instructor: 'Sarah Johnson',
    duration: '6 weeks',
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=300&h=200&fit=crop'
  },
  {
    id: '3',
    title: 'React Advanced Patterns',
    progress: 30,
    totalLessons: 80,
    completedLessons: 24,
    nextLesson: 'Context API Mastery',
    instructor: 'Mike Chen',
    duration: '8 weeks',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop'
  }
];

const mockLessons: Lesson[] = [
  {
    id: '1',
    title: 'Introduction to React Hooks',
    type: 'video',
    duration: '15 min',
    completed: true,
    locked: false
  },
  {
    id: '2',
    title: 'useState Hook Explained',
    type: 'video',
    duration: '20 min',
    completed: true,
    locked: false
  },
  {
    id: '3',
    title: 'Practice Exercise: Counter App',
    type: 'assignment',
    duration: '30 min',
    completed: false,
    locked: false
  },
  {
    id: '4',
    title: 'useEffect Hook Deep Dive',
    type: 'video',
    duration: '25 min',
    completed: false,
    locked: false
  },
  {
    id: '5',
    title: 'Quiz: React Hooks Basics',
    type: 'quiz',
    duration: '10 min',
    completed: false,
    locked: false
  },
  {
    id: '6',
    title: 'Advanced Patterns',
    type: 'reading',
    duration: '15 min',
    completed: false,
    locked: true
  }
];

const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'New Course: Advanced TypeScript',
    content: 'Master TypeScript with our comprehensive new course starting next month.',
    date: '2024-01-15',
    type: 'info'
  },
  {
    id: '2',
    title: 'Assignment Due Reminder',
    content: 'Don\'t forget to submit your React project by January 20th.',
    date: '2024-01-12',
    type: 'warning'
  },
  {
    id: '3',
    title: 'Congratulations to Top Performers!',
    content: 'Special recognition for students who completed 100% of their coursework.',
    date: '2024-01-10',
    type: 'success'
  }
];

export default function PortalPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  // Redirect if not logged in
  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'reading':
        return <FileText className="w-4 h-4" />;
      case 'quiz':
        return <CheckCircle className="w-4 h-4" />;
      case 'assignment':
        return <BookOpen className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getAnnouncementColor = (type: string) => {
    switch (type) {
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 flex-grow">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 truncate w-40">{user.fullName || user.name || 'Student'}</h3>
              <p className="text-sm text-gray-600">Student</p>
            </div>
          </div>
          
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'dashboard' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <BarChart3 className="w-5 h-5" />
              Dashboard
            </button>
            
            <button
              onClick={() => setActiveTab('courses')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'courses' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              My Courses
            </button>
            
            <button
              onClick={() => setActiveTab('calendar')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'calendar' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Calendar className="w-5 h-5" />
              Calendar
            </button>
            
            <button
              onClick={() => setActiveTab('messages')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'messages' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              Messages
            </button>
            
            <button
              onClick={() => setActiveTab('grades')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'grades' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Award className="w-5 h-5" />
              Grades
            </button>
            
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeTab === 'settings' ? 'bg-primary/10 text-primary' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Settings className="w-5 h-5" />
              Settings
            </button>
          </nav>
        </div>
        <div className="p-6 border-t">
          <button 
            onClick={handleSignOut}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {activeTab === 'dashboard' && (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome back, {user.fullName?.split(' ')[0] || user.name?.split(' ')[0] || 'Student'}!</h1>
            
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <span className="text-sm text-gray-500">Total</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">3</h3>
                <p className="text-gray-600">Active Courses</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <span className="text-sm text-gray-500">Completed</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">1</h3>
                <p className="text-gray-600">Courses Finished</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <Clock className="w-8 h-8 text-yellow-600" />
                  <span className="text-sm text-gray-500">This Week</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">12h</h3>
                <p className="text-gray-600">Study Time</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                  <span className="text-sm text-gray-500">Average</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">87%</h3>
                <p className="text-gray-600">Grade Score</p>
              </div>
            </div>

            {/* Recent Announcements */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Announcements</h2>
              <div className="space-y-4">
                {mockAnnouncements.map(announcement => (
                  <div key={announcement.id} className={`p-4 rounded-lg border ${getAnnouncementColor(announcement.type)}`}>
                    <h3 className="font-semibold mb-2">{announcement.title}</h3>
                    <p className="text-sm mb-2">{announcement.content}</p>
                    <p className="text-xs opacity-75">{new Date(announcement.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue Learning */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Continue Learning</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {mockCourses.map(course => (
                  <div key={course.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">
                        Next: {course.nextLesson}
                      </p>
                      
                      <button 
                        onClick={() => {
                          setSelectedCourse(course);
                          setActiveTab('courses');
                        }}
                        className="w-full bg-primary text-white py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">My Courses</h1>
            
            {!selectedCourse ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockCourses.map(course => (
                  <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4">by {course.instructor} • {course.duration}</p>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span>{course.completedLessons} of {course.totalLessons} lessons</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => setSelectedCourse(course)}
                        className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                      >
                        View Course
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="mb-6 text-primary hover:text-primary/80 font-semibold"
                >
                  ← Back to Courses
                </button>
                
                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedCourse.title}</h2>
                      <p className="text-gray-600">by {selectedCourse.instructor}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{selectedCourse.progress}%</div>
                      <p className="text-sm text-gray-600">Complete</p>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                    <div 
                      className="bg-primary h-3 rounded-full" 
                      style={{ width: `${selectedCourse.progress}%` }}
                    ></div>
                  </div>
                  
                  <p className="text-gray-600">
                    {selectedCourse.completedLessons} of {selectedCourse.totalLessons} lessons completed
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Course Content</h3>
                  <div className="space-y-3">
                    {mockLessons.map(lesson => (
                      <div key={lesson.id} className={`flex items-center gap-4 p-4 rounded-lg border ${
                        lesson.locked ? 'bg-gray-50 border-gray-200 opacity-60' : 'bg-white border-gray-200 hover:bg-gray-50'
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          lesson.completed ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                        }`}>
                          {lesson.completed ? <CheckCircle className="w-4 h-4" /> : <Circle className="w-4 h-4" />}
                        </div>
                        
                        <div className="flex-1">
                          <h4 className={`font-semibold ${lesson.locked ? 'text-gray-400' : 'text-gray-900'}`}>
                            {lesson.title}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            {getLessonIcon(lesson.type)}
                            <span>{lesson.type.charAt(0).toUpperCase() + lesson.type.slice(1)}</span>
                            <span>•</span>
                            <span>{lesson.duration}</span>
                          </div>
                        </div>
                        
                        {!lesson.locked && (
                          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
                            Start
                          </button>
                        )}
                        
                        {lesson.locked && (
                          <div className="text-gray-400 text-sm font-semibold">Locked</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Calendar</h1>
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="text-center text-gray-500">
                <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Calendar integration coming soon!</p>
                <p className="text-sm mt-2">Stay tuned for scheduling and deadline management features.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Messages</h1>
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="text-center text-gray-500">
                <MessageSquare className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Messaging system coming soon!</p>
                <p className="text-sm mt-2">You'll be able to communicate with instructors and fellow students.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'grades' && (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Grades & Progress</h1>
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="text-center text-gray-500">
                <Award className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Grade tracking coming soon!</p>
                <p className="text-sm mt-2">Detailed grade reports and progress analytics will be available.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div className="text-center text-gray-500">
                <Settings className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Settings panel coming soon!</p>
                <p className="text-sm mt-2">Profile management and preferences will be available here.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
