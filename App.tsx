import React, { useState, useMemo, useEffect } from 'react';
import { BookOpen, ChevronLeft, PanelLeft } from 'lucide-react';
import StudentList from './components/StudentList';
import ConversationView from './components/ConversationView';
import { STUDENTS, CONVERSATIONS } from './constants';

const App: React.FC = () => {
  // State for selected student ID. Default to Wang Jingxing (id: 14)
  const [selectedStudentId, setSelectedStudentId] = useState<string>('14');
  // State for selected session ID
  const [selectedSessionId, setSelectedSessionId] = useState<string | null>(null);

  const selectedStudent = STUDENTS.find(s => s.id === selectedStudentId) || STUDENTS[0];
  const studentSessions = CONVERSATIONS[selectedStudentId] || [];

  // Reset session when student changes
  useEffect(() => {
    if (studentSessions.length > 0) {
      setSelectedSessionId(studentSessions[0].id);
    } else {
      setSelectedSessionId(null);
    }
  }, [selectedStudentId]);

  // Determine active session
  const activeSessionId = selectedSessionId || (studentSessions.length > 0 ? studentSessions[0].id : null);
  const activeSession = studentSessions.find(s => s.id === activeSessionId) || studentSessions[0];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900 font-sans overflow-hidden">
      
      {/* Top Navigation Bar (Global) */}
      <div className="fixed top-0 left-0 w-full h-14 bg-white border-b border-gray-200 z-50 flex items-center px-4 justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
            <ChevronLeft size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-600">
            <PanelLeft size={20} />
          </button>
          
          <div className="flex items-center gap-2 text-gray-700 font-medium">
             <span className="text-yellow-600"><BookOpen size={18} fill="currentColor" className="text-yellow-100 stroke-yellow-600"/></span>
             <span>学生助手</span>
          </div>
        </div>
      </div>

      {/* Main Content Container (Padded top for navbar) */}
      <div className="flex w-full pt-14 h-full">
        
        {/* Left Sidebar: Student List */}
        <StudentList 
          students={STUDENTS}
          selectedStudentId={selectedStudentId}
          onSelectStudent={setSelectedStudentId}
        />

        {/* Right Content: Conversation View */}
        {activeSession ? (
          <ConversationView 
            student={selectedStudent}
            sessions={studentSessions}
            currentSessionId={activeSession.id}
            onSelectSession={setSelectedSessionId}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            暂无对话记录
          </div>
        )}
        
        {/* Scrollbar styles injection for consistent look */}
        <style>{`
          /* Custom scrollbar matching the clean aesthetic */
          * { scrollbar-width: thin; scrollbar-color: #e2e8f0 transparent; }
          *::-webkit-scrollbar { width: 6px; }
          *::-webkit-scrollbar-track { background: transparent; }
          *::-webkit-scrollbar-thumb { background-color: #e2e8f0; border-radius: 20px; }
          *::-webkit-scrollbar-thumb:hover { background-color: #cbd5e1; }
        `}</style>
      </div>
    </div>
  );
};

export default App;
