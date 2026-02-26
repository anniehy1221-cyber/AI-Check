import React from 'react';
import { Student } from '../types';
import { Users, ChevronDown } from 'lucide-react';

interface StudentListProps {
  students: Student[];
  selectedStudentId: string;
  onSelectStudent: (id: string) => void;
}

const StudentList: React.FC<StudentListProps> = ({ 
  students, 
  selectedStudentId, 
  onSelectStudent 
}) => {
  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200 w-64 md:w-72 lg:w-80 flex-shrink-0">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="font-semibold text-gray-800 text-base">学生对话</h2>
            <span className="text-gray-400 text-xs">共 {students.length} 人</span>
          </div>
          
          <button className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors">
            全部
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* List */}
      <div className="overflow-y-auto flex-1 p-3 space-y-1">
        {students.map((student) => {
          const isSelected = selectedStudentId === student.id;
          
          return (
            <div
              key={student.id}
              onClick={() => onSelectStudent(student.id)}
              className={`
                group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200
                ${isSelected 
                  ? 'bg-violet-50 border border-violet-500 shadow-sm' 
                  : 'hover:bg-gray-50 border border-transparent'
                }
              `}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img 
                    src={student.avatar} 
                    alt={student.name} 
                    className="w-9 h-9 rounded-full bg-gray-200 object-cover"
                  />
                </div>
                <span className={`text-sm font-medium ${isSelected ? 'text-violet-900' : 'text-gray-700'}`}>
                  {student.name}
                </span>
              </div>

              <div className={`
                text-xs px-2 py-0.5 rounded
                ${student.status === 'submitted' 
                  ? (isSelected ? 'bg-violet-200 text-violet-700' : 'bg-green-100 text-green-600')
                  : 'bg-gray-100 text-gray-400'
                }
              `}>
                {student.status === 'submitted' ? '已交' : '未交'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentList;
