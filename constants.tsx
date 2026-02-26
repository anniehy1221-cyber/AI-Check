import { Student, ConversationData, Message } from './types';

export const STUDENTS: Student[] = [
  { id: '1', name: '陈嘉尔', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chen', status: 'pending' },
  { id: '2', name: '张宇森', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zhang', status: 'pending' },
  { id: '3', name: '穆禹霖', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mu', status: 'pending' },
  { id: '4', name: '杨墨涵', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yang', status: 'pending' },
  { id: '5', name: '廖思齐', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Liao', status: 'pending' },
  { id: '6', name: '杨佩然', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pei', status: 'pending' },
  { id: '7', name: '孙钰潇', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sun', status: 'pending' },
  { id: '8', name: '吴思同', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Wu', status: 'pending' },
  { id: '9', name: '陈徙南', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nan', status: 'pending' },
  { id: '10', name: '陈秋濯', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Qiu', status: 'pending' },
  { id: '11', name: '杨敬豪', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hao', status: 'pending' },
  { id: '12', name: '靳杭', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jin', status: 'pending' },
  { id: '13', name: '高千禾', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gao', status: 'pending' },
  { id: '14', name: '王景行', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Wang', status: 'submitted' },
  { id: '15', name: '杨梓陌', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zi', status: 'pending' },
  { id: '16', name: '田弘毅', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tian', status: 'pending' },
];

// ... (Existing messages remain the same, I will re-declare them to be safe or assuming they are there. 
// For brevity in this response, I will include the WANG_EVALUATION data and re-include the messages to ensure the file is complete and correct)

const WANG_MSG_FRIENDSHIP: Message[] = [
  {
    id: 'm1',
    sender: 'assistant',
    content: `2. 回想细节：他们挑的“错误”，是关于什么的？是具体的某件事，还是大家最近在一起玩的某种默契变了？\n\n3. 感受频率：是只对你一个人这样，还是他们互相之间说话也变冲了？\n\n如果现在让你回想一下，他们最近一次对你“暴躁”时，当时发生了什么特别的事吗？或者那是在做什么？\n\n别担心，我会一直陪着你一起想办法搞定这个“友情小寒流”的。`,
    timestamp: '10:00 AM'
  },
  {
    id: 'm2',
    sender: 'user',
    content: `就比如我和他玩游戏的时候，我做错了一些步骤。`,
    timestamp: '10:05 AM'
  },
  {
    id: 'm3',
    sender: 'assistant',
    content: `噢，原来是在游戏战场上起的小摩擦呀！我太能理解这种感觉了。玩游戏本来是为了开心，结果因为一个操作失误就被朋友“开炮”，心里肯定特别不是滋味，甚至有点想摔手柄对不对？

其实在竞技类或者合作游戏里，大家胜负欲一上来，大脑里的“理智小人”往往就下线了，只剩下“情绪小怪兽”在叫唤。

咱们试着换个视角来看看这事儿：

1. 复盘“火力点”：那个操作失误，是咱们还没练熟的新技能，还是纯粹因为当时太紧张手抖了？

2. 读懂他们的“潜台词”：你觉得他们那一刻是真的在讨厌你，还是只是因为太想赢了，所以把对“输”的焦虑变成了对你的埋怨？

3. 试探底线：如果下次你先发制人，在失误时抢先说一句：“哎呀，我这波手残了，大家带带我！”你猜他们的反应会稍微温和一点吗？

你当时听到他们抱怨的时候，你是怎么回应他们的？是默默忍了，还是也怼回去了呀？`,
    timestamp: '10:06 AM'
  }
];

const WANG_MSG_STUDY: Message[] = [
  { id: 's1', sender: 'user', content: '最近数学成绩一直提不上去，感觉很挫败。', timestamp: '08:30 PM' },
  { id: 's2', sender: 'assistant', content: '看到你这么在意成绩，说明你很有上进心呢。我们要不要一起分析一下试卷，看看是哪个板块比较薄弱？是计算粗心，还是概念没理解透彻？', timestamp: '08:31 PM' }
];

const WANG_MSG_HOBBY: Message[] = [
  { id: 'h1', sender: 'user', content: '我想学吉他，但是怕坚持不下来。', timestamp: '04:15 PM' },
  { id: 'h2', sender: 'assistant', content: '吉他是个很棒的爱好！刚开始手指会疼，确实容易想放弃。不如我们定个小目标，比如先学会弹一首你最喜欢的儿歌？', timestamp: '04:16 PM' }
];

const WANG_MSG_FUTURE: Message[] = [
  { id: 'f1', sender: 'assistant', content: '如果让你畅想十年后的自己，你觉得你会是在做什么样的工作呢？', timestamp: '09:00 AM' },
  { id: 'f2', sender: 'user', content: '我想当一名宇航员，去探索火星！', timestamp: '09:05 AM' },
  { id: 'f3', sender: 'assistant', content: '太酷了！探索火星需要很强的身体素质和丰富的科学知识。那你觉得现在的学习中，哪些科目对实现这个梦想最有帮助呢？', timestamp: '09:06 AM' }
];

const WANG_MSG_MOOD: Message[] = [
  { id: 'm1', sender: 'user', content: '今天下雨了，体育课取消了，好郁闷。', timestamp: '02:00 PM' },
  { id: 'm2', sender: 'assistant', content: '是啊，期待已久的体育课泡汤了确实很扫兴。不过下雨天在教室里读读书，或者和同桌下下五子棋，也许也是一种不错的放松方式哦。', timestamp: '02:01 PM' }
];

// Default empty conversation for others
const DEFAULT_MSG: Message[] = [
  {
    id: 'd1',
    sender: 'assistant',
    content: '你好！今天有什么想和我聊聊的吗？无论是学习上的压力，还是生活中的趣事，我都愿意倾听。',
    timestamp: '09:00 AM'
  }
];

export const CONVERSATIONS: ConversationData = {
  '14': [
    { id: 'sess1', topic: '关于友情的困惑', date: '10月24日', messages: WANG_MSG_FRIENDSHIP },
    { id: 'sess2', topic: '学习压力疏导', date: '10月22日', messages: WANG_MSG_STUDY },
    { id: 'sess3', topic: '兴趣爱好讨论', date: '10月20日', messages: WANG_MSG_HOBBY },
    { id: 'sess4', topic: '关于未来的规划', date: '10月18日', messages: WANG_MSG_FUTURE },
    { id: 'sess5', topic: '日常心情分享', date: '10月15日', messages: WANG_MSG_MOOD },
  ],
};

// Helper to fill other students with generic data
STUDENTS.forEach(s => {
  if (s.id !== '14') {
    CONVERSATIONS[s.id] = [
      { id: `sess_${s.id}`, topic: '日常对话', date: '今天', messages: DEFAULT_MSG }
    ];
  }
});

// Mock Evaluation Data for display
export const WANG_EVALUATION = {
  score: 92,
  highlights: `1. **同理心与情感支持**: 助手展现出优秀的同理心能力，能够准确识别用户的情绪状态并给予情感支持，如“摸摸头，听起来你最近受了不少委屈”、“心里肯定特别不是滋味”等表达，有效建立了情感连接。
2. **结构化问题分析**: 助手采用系统化的分析方法，将复杂问题分解为可操作的步骤。第一次回应提出“观察环境”、“回想细节”、“感受频率”三个维度；第二次回应进一步细化到“复盘火力点”、“读懂潜台词”、“试探底线”等具体策略。
3. **情境化理解**: 助手能够将问题置于具体情境中理解，如识别出“游戏战场”这一具体场景，并提出针对性的解决方案，显示出良好的情境适应能力。
4. **积极引导与赋能**: 采用“咱们试着像玩侦探游戏一样”、“换个视角来看看”等积极引导方式，将问题转化为可解决的挑战，赋予用户解决问题的能力。`,
  improvements: `1. **解决方案的具体性**: 虽然提出了多个分析维度，但缺乏具体的操作步骤和示例。例如“试探底线”的建议可以更具体地说明如何实施。
2. **情绪调节策略的深度**: 对于朋友暴躁行为的应对策略可以更深入，包括情绪管理技巧、沟通技巧的具体应用等。
3. **长期关系维护建议**: 当前建议主要聚焦于即时情绪的应对，可以补充一些长期关系维护和冲突预防的策略。
4. **风险评估与边界设定**: 缺乏对可能风险的评估，如当朋友行为超出合理范围时如何设定个人边界。`,
  suggestions: `1. **开发具体沟通脚本**: 为用户提供具体的沟通话术示例，如“I句式”表达法：“当你说...的时候，我感到...”，帮助用户更有效地表达感受。
2. **引入情绪调节工具**: 教授简单的情绪调节技巧，如深呼吸、暂停技术等，帮助用户在冲突情境中保持冷静。
3. **建立冲突解决框架**: 提供完整的冲突解决框架，包括：识别问题→表达感受→寻求理解→共同解决方案→跟进评估。
4. **情境模拟练习**: 设计不同情境的模拟对话练习，帮助用户在实际应用前获得实验经验。
5. **边界设定指导**: 教授如何设定健康的个人边界，包括识别不合理行为、表达边界、维护边界的具体方法。`,
  metrics: [
    { title: '同理心与情感支持', tag: '优秀', tagColor: 'purple', content: '能够准确识别用户情绪状态，提供恰当的情感支持和安慰，建立良好的情感连接' },
    { title: '情境适应性', tag: '良好', tagColor: 'blue', content: '能够根据具体情境调整回应策略，提供针对性的建议，但解决方案的深度有待加强' },
    { title: '沟通策略设计', tag: '合格', tagColor: 'yellow', content: '提出基本的沟通建议，但缺乏具体的沟通技巧和话术指导，需要更系统化的沟通策略' },
    { title: '问题分析与结构化', tag: '良好', tagColor: 'teal', content: '能够将复杂问题分解为可分析的维度，提供系统化的思考框架，但具体操作步骤有待完善' },
    { title: '积极引导与赋能', tag: '优秀', tagColor: 'pink', content: '采用积极心理学方法引导用户，将问题转化为成长机会，赋予用户解决问题的能力' },
  ]
};
