import React, { useState, useRef, useEffect } from 'react';
import { Message, Student, Session } from '../types';
import { Copy, HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { WANG_EVALUATION } from '../constants';

interface ConversationViewProps {
  student: Student;
  sessions: Session[];
  currentSessionId: string;
  onSelectSession: (id: string) => void;
}

const ConversationView: React.FC<ConversationViewProps> = ({ 
  student, 
  sessions, 
  currentSessionId, 
  onSelectSession 
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isEvaluationExpanded, setIsEvaluationExpanded] = useState(true);

  const currentSession = sessions.find(s => s.id === currentSessionId);
  const messages = currentSession?.messages || [];

  // Only show evaluation for Wang Jingxing (id 14) as per requirements/mock
  const hasEvaluation = student.id === '14';

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getTagStyle = (color: string) => {
    switch (color) {
      case 'purple': return 'bg-purple-100 text-purple-700';
      case 'blue': return 'bg-blue-100 text-blue-700';
      case 'teal': return 'bg-teal-100 text-teal-700';
      case 'pink': return 'bg-pink-100 text-pink-700';
      case 'yellow': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-white relative">
      {/* Top Tabs */}
      <div className="h-12 border-b border-gray-200 flex items-center justify-center bg-white z-20 flex-shrink-0">
        <div className="flex gap-8 text-sm font-medium">
          <button className="text-gray-400 hover:text-gray-600 transition-colors">概览</button>
          <button className="text-gray-900 border-b-2 border-black pb-3 -mb-3">详情</button>
        </div>
      </div>

      {/* Main Scrollable Area */}
      <div className="flex-1 overflow-y-auto bg-white p-6 md:p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* AI Evaluation Panel */}
          {hasEvaluation && (
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
              {/* Header */}
              <div className="px-6 py-4 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-5 bg-blue-600 rounded-full"></div>
                  <h3 className="font-bold text-gray-800 text-lg">AI评价</h3>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>成绩 (满分100分)</span>
                    <div className="w-16 h-8 border border-gray-300 rounded flex items-center justify-center font-bold text-gray-800 bg-white">
                      {WANG_EVALUATION.score}
                    </div>
                  </div>
                  <button className="bg-violet-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-violet-700 transition-colors shadow-sm">
                    发布成绩
                  </button>
                  <button 
                    onClick={() => setIsEvaluationExpanded(!isEvaluationExpanded)}
                    className="flex items-center gap-1 text-gray-400 hover:text-gray-600 text-sm"
                  >
                    <span>{isEvaluationExpanded ? '收起面板' : '展开面板'}</span>
                    {isEvaluationExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
              </div>

              {/* Collapsible Content */}
              {isEvaluationExpanded && (
                <div className="p-6 space-y-6">
                  {/* Top Cards Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Highlights */}
                    <div className="bg-green-50/50 p-4 rounded-lg space-y-2">
                      <span className="inline-block px-2 py-0.5 bg-green-200 text-green-700 text-xs font-semibold rounded mb-1">
                        闪光点
                      </span>
                      <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {WANG_EVALUATION.highlights}
                      </p>
                    </div>
                    {/* Improvements */}
                    <div className="bg-orange-50/50 p-4 rounded-lg space-y-2">
                      <span className="inline-block px-2 py-0.5 bg-orange-200 text-orange-700 text-xs font-semibold rounded mb-1">
                        待改进
                      </span>
                      <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {WANG_EVALUATION.improvements}
                      </p>
                    </div>
                    {/* Suggestions */}
                    <div className="bg-blue-50/50 p-4 rounded-lg space-y-2">
                      <span className="inline-block px-2 py-0.5 bg-blue-200 text-blue-700 text-xs font-semibold rounded mb-1">
                        行动建议
                      </span>
                      <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {WANG_EVALUATION.suggestions}
                      </p>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-2">
                    {/* Column 1 */}
                    <div className="space-y-6">
                      {[0, 1, 2].map(idx => {
                        const metric = WANG_EVALUATION.metrics[idx];
                        return (
                          <div key={idx} className="space-y-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-bold text-gray-800">{metric.title}</span>
                              <span className={`text-xs px-1.5 py-0.5 rounded ${getTagStyle(metric.tagColor)}`}>
                                {metric.tag}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">{metric.content}</p>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Column 2 */}
                    <div className="space-y-6">
                      {[3, 4].map(idx => {
                        const metric = WANG_EVALUATION.metrics[idx];
                        return (
                          <div key={idx} className="space-y-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm font-bold text-gray-800">{metric.title}</span>
                              <span className={`text-xs px-1.5 py-0.5 rounded ${getTagStyle(metric.tagColor)}`}>
                                {metric.tag}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">{metric.content}</p>
                          </div>
                        );
                      })}
                      
                      {/* Teacher Feedback Input */}
                      <div className="space-y-2 pt-2">
                        <span className="text-sm font-bold text-gray-800">教师反馈</span>
                        <textarea 
                          className="w-full h-20 bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-violet-400 resize-none placeholder-gray-400"
                          placeholder="请输入反馈内容"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Session Switcher Header & Messages */}
          <div className="pt-2">
            {/* Session Header Row */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-blue-600 rounded-full"></div>
                <h3 className="font-bold text-gray-800 text-lg">5次详情对话</h3>
              </div>

              {/* Dropdown embedded in header */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-full transition-colors border border-gray-200"
                >
                  <MessageSquare size={14} className="text-violet-500" />
                  <span className="font-medium">
                    {currentSession?.topic || '选择对话'}
                  </span>
                  <span className="text-gray-400 text-xs bg-white px-1.5 py-0.5 rounded border border-gray-100">
                    {currentSession?.date}
                  </span>
                  <ChevronDown size={14} className={`text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                     <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      历史对话 ({sessions.length})
                    </div>
                    <div className="max-h-[300px] overflow-y-auto">
                      {sessions.map(session => (
                        <button
                          key={session.id}
                          onClick={() => {
                            onSelectSession(session.id);
                            setIsDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between hover:bg-gray-50 transition-colors
                            ${session.id === currentSessionId ? 'bg-violet-50 text-violet-700' : 'text-gray-700'}
                          `}
                        >
                          <span className="truncate flex-1 pr-2">{session.topic}</span>
                          <span className={`text-xs ${session.id === currentSessionId ? 'text-violet-400' : 'text-gray-400'}`}>
                            {session.date}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Chat Messages */}
            <div className="space-y-8 pl-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'user' ? (
                    // User Message (Right aligned, gray bubble)
                    <div className="max-w-[80%] bg-gray-100 text-gray-800 px-6 py-4 rounded-3xl rounded-tr-sm text-base leading-relaxed tracking-wide">
                      {msg.content}
                    </div>
                  ) : (
                    // Assistant Message (Left aligned, no bubble usually, just text)
                    <div className="max-w-3xl w-full text-gray-800 text-base leading-7 space-y-4 group">
                      {/* Render content preserving newlines */}
                      <div className="whitespace-pre-wrap">
                        {msg.content}
                      </div>
                      
                      {/* Action Bar (Copy icon) */}
                      <div className="pt-1">
                        <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded hover:bg-gray-50">
                          <Copy size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Helper Icon */}
            <div className="fixed right-8 bottom-1/2 transform translate-y-full z-10">
                <button className="p-1 text-gray-300 hover:text-gray-500 transition-colors">
                    <HelpCircle size={24} />
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationView;
