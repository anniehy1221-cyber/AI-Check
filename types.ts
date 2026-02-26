export interface Student {
  id: string;
  name: string;
  avatar: string;
  status: 'submitted' | 'pending'; // '已交' | '未交'
}

export interface Message {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface Session {
  id: string;
  topic: string;
  date: string;
  messages: Message[];
}

export interface ConversationData {
  [studentId: string]: Session[];
}
