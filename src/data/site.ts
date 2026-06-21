export type Lang = 'zh' | 'en';
export type PageKey = 'about' | 'services' | 'approach' | 'contact';

export const brand = {
  name: 'Kaisa Tarot & Astrology',
  zhName: 'Kaisa 塔罗与占星咨询',
  wechatId: 'KaisaTarot',
  email: 'hello@example.com',
  instagram: 'https://instagram.com/',
};

const zh = {
  langName: '中文',
  switchLabel: 'EN',
  meta: {
    home: ['Kaisa 塔罗与占星咨询', '九年专业咨询经验，以塔罗与占星梳理真实问题，给出清晰判断与可行动的方向。'],
    about: ['关于 Kaisa', '了解 Kaisa 的专业资历、九年咨询经验与咨询理念。'],
    services: ['塔罗与占星服务', '查看 Kaisa 的塔罗咨询与占星咨询项目、适用问题、时长与价格。'],
    approach: ['咨询方法与匿名案例', '从方向判断、诊断逻辑到行动建议，了解 Kaisa 的咨询方法与匿名案例洞察。'],
    contact: ['联系与预约', '通过微信预约 Kaisa 的塔罗与占星咨询。'],
  },
  nav: { home: '首页', about: '关于', services: '服务', approach: '方法与案例', contact: '联系预约' },
  common: {
    book: '微信预约', viewServices: '查看服务', learnMore: '了解更多', readCase: '阅读洞察', backHome: '返回首页',
    credential: '专业资历', testimonial: '客户反馈', details: '服务详情', suitable: '适合', duration: '时长', delivery: '交付', price: '价格',
  },
  home: {
    eyebrow: 'TAROT · ASTROLOGY · CONSULTATION',
    title: '愿你保持对自我、\n对人类的清醒和好奇。',
    intro: '九年专业咨询经验。用塔罗与占星梳理感情、事业与人生选择，在复杂情绪里给你一条清晰、诚实、可以行动的路径。',
    proofTitle: 'About me｜关于我',
    proof: [
      '英国伦敦占星学院（LSA）职业塔罗师',
      '美国国际占星研究协会（ISAR）认证占星师',
      '师从苏•汤普金斯、法兰克•柯利福德等国际名师',
      '9 年专业咨询经验，3 年教学经历，案例2w+',
    ],
    servicesEyebrow: 'CLARITY BEFORE DIRECTION',
    servicesTitle: '在答案之前，先看清问题',
    servicesIntro: '不是替你决定人生，而是把暂时看不清的局势、关系与内在模式照亮。',
    serviceCards: [
      { icon: '✦', title: '塔罗咨询', en: 'Tarot Consultation', text: '聚焦当下的具体问题与近期走向，识别真正矛盾，给出方向判断与行动建议。', link: '/zh/services/#tarot' },
      { icon: '◯', title: '占星咨询', en: 'Astrology Consultation', text: '从本命盘与行运理解长期模式、天赋和人生周期，把选择放进更完整的时间框架。', link: '/zh/services/#astrology' },
    ],
    journalEyebrow: 'A PRACTICE IN MOTION',
    journalTitle: '让专业发生在真实生活里',
    journalItems: ['塔罗咨询 · 新加坡', '占星研究 · 上海', '跨地域线上咨询'],
    methodEyebrow: 'THE KAISA APPROACH',
    methodTitle: '答案之外，更重要的是为什么',
    methodText: '一次完整咨询，不应只有一句“会”或“不会”。我会先找到表面问题背后的真实诉求，再解释局势为何形成，最后把洞察落到你真正能执行的下一步。',
    methodSteps: [
      ['01', '方向判断', '依据当前轨迹，明确事情更可能走向哪里。'],
      ['02', '诊断逻辑', '厘清现状、关键症结和你真正想解决的问题。'],
      ['03', '行动建议', '把结论转化为具体、现实、可执行的选择。'],
    ],
    casesEyebrow: 'SELECTED INSIGHTS',
    casesTitle: '真实问题，匿名呈现',
    cases: [
      ['关系', '当“还会不会联系”背后，真正的问题是现实能否承担', '过去反复复合，不等于这一次仍会重复旧规律。关键在于触发点是否已经从情绪冲突升级为现实压力。'],
      ['事业', '想离开一份工作，和真的适合离开，是两件事', '当签证、身份或长期保障成为隐含目标，所谓“稳定”可能不是停滞，而是此刻最重要的战略资源。'],
      ['选择', '两个选项都不完美时，如何找到更适合的一条', '不比较哪张牌更好看，而是先找到你的评判标准，再观察两条路径的能量是在改善还是消耗。'],
    ],
    quote: '“她没有替我做决定，但让我第一次看清自己到底在决定什么。”',
    quoteMeta: '匿名客户反馈 · 关系咨询',
    closing: '当你准备好面对真实问题，\n答案才会开始变得清晰。',
  },
  about: {
    eyebrow: 'ABOUT KAISA', title: '理性结构与直觉洞察，\n缺一不可。',
    lead: '我是 Kaisa，一名在中国执业九年的塔罗师与占星师。我相信真正专业的咨询，不是制造神秘，而是帮助一个人在混乱中恢复判断力。',
    storyTitle: '九年里，我持续在做同一件事',
    story: ['听见一个问题没有被说出口的部分。', '客户来问感情、事业、财运或人生选择，表面的问题往往只是入口。真正影响决定的，可能是安全感、现实承担、身份焦虑，或一段迟迟没有结束的内在模式。', '塔罗让我贴近此刻正在发生的能量，占星让我看见更长的人生结构。两种系统在咨询中彼此校正，也让结论既有方向，又有上下文。'],
    credentialsTitle: '训练与认证',
    credentials: [
      ['LSA', '英国伦敦占星学院', '职业塔罗师 · Professional Tarot Practitioner'],
      ['ISAR', '美国国际占星研究协会', '认证占星师 · Certified Astrologer'],
      ['9 YEARS', '持续咨询实践', '覆盖关系、事业、财运与重大选择'],
    ],
    principlesTitle: '我的咨询原则',
    principles: [
      ['诚实', '不为了安慰而模糊结论，也不为了戏剧性夸大风险。'],
      ['完整', '结论、原因和行动建议必须同时存在。'],
      ['尊重', '不替你决定，也不把任何一张牌变成对人的指控。'],
      ['现实', '所有建议都要能够回到你的生活条件里执行。'],
    ],
    assetNote: 'Kaisa · Tarot Practitioner & Astrologer',
    certificateTitle: '专业训练，有据可循',
    certificateText: '英国伦敦占星学院（LSA）塔罗证书 · 2022',
    signatureQuote: '神秘学不是逃离现实，而是用另一种语言，重新理解现实。',
  },
  services: {
    eyebrow: 'SERVICES', title: '选择适合你此刻问题的咨询',
    lead: '塔罗适合聚焦具体问题与近期走向；占星适合理解长期模式与人生周期。预约前可先通过微信简单说明你的需求。',
    tarotTitle: '塔罗咨询', tarotIntro: '适合有明确问题，希望看清现状、趋势与行动方向的人。',
    astrologyTitle: '占星咨询', astrologyIntro: '适合希望系统理解自己、关系模式或未来周期的人。',
    items: {
      tarot: [
        { name: '基础牌阵', for: '无牌阵、恋人金字塔；适合一个明确、具体的问题', duration: '20 分钟｜3–4 张牌', delivery: '语音条 / 文字', price: '¥69' },
        { name: '复杂牌阵', for: '未来恋人、工作运势、二选一、恋人对应、维纳斯', duration: '30 分钟｜5–8 张牌', delivery: '语音条 / 文字', price: '¥88' },
        { name: '四季牌阵', for: '未来一个季度的整体运势发展；仅在春分、夏至、秋分、冬至期间开放', duration: '30 分钟｜4 张牌', delivery: '语音条 / 文字', price: '¥88' },
      ],
      astrology: [
        { name: '单项 / 基础盘', for: '单项可从感情、事业、学业、财运、健康中任选一项；基础盘提供全方面总结概括，讲明大概方向', duration: '待确认', delivery: '语音条 / 文字', price: '¥198' },
        { name: '本命盘', for: '全面详细讲解本命盘；例如感情主题可涵盖正缘性格、工作与经济条件、相处方式及婚运时间', duration: '待确认', delivery: '语音条 / 文字', price: '¥398' },
        { name: '行运盘', for: '未来一年的整体运势发展，具体到每个月可能发生的事件；包含法达、小限、太阳弧、次限、日返等技法', duration: '待确认', delivery: '语音条 / 文字', price: '¥398' },
        { name: '双人合盘', for: '适用于恋人复合或朋友关系；结合双方本命盘总结概括，分析对方是否为正缘、彼此是否合适', duration: '待确认', delivery: '语音条 / 文字', price: '¥498' },
      ],
    },
    note: '交付方式：语音条 / 文字。四季牌阵仅在二分二至期间开放。',
    processTitle: '预约流程',
    process: [['01', '说明需求', '添加微信，简单说明希望咨询的问题。'], ['02', '确认项目', '根据问题确认适合的服务、时间与费用。'], ['03', '完成预约', '付款后锁定档期，并按约定准备所需资料。']],
  },
  approach: {
    eyebrow: 'APPROACH & CASES', title: '不是套用牌意，\n而是理解一个完整的人。',
    lead: '每个问题都有它的背景、隐含决定与现实限制。咨询的价值，是把这些线索组织成一个你能理解、也能行动的全貌。',
    frameworkTitle: '一次完整咨询的三个层次',
    framework: [
      ['方向判断', '这件事按目前轨迹更可能如何发展。结论清晰，但不把趋势说成无法改变的宿命。'],
      ['诊断逻辑', '为什么会走向这里：现状是什么、关键症结在哪里、你真正想确认的又是什么。'],
      ['行动建议', '如果希望维持或改变这个走向，现在最值得做的具体动作是什么。'],
    ],
    caseTitle: '匿名案例洞察',
    cases: [
      { tag: '关系咨询', title: '这次的沉默，为什么和以前不一样', question: '来访者表面询问对方是否还会联系。两人过去曾多次分开又复合，因此她相信这次也会重复旧规律。', insight: '梳理后发现，这一次的触发点已经从普通情绪冲突，升级为婚姻条件、经济能力和家庭期待。真正的问题不再是“还有没有感情”，而是“对方是否有能力承担现实未来”。', direction: '将等待复合改为确认现实意愿：他是完全不想继续，还是因压力先行退出。只有把压力与选择分开，双方才可能进行有效对话。' },
      { tag: '事业咨询', title: '稳定，不一定等于停滞', question: '来访者想知道是否应该跳槽，但她真正放不下的是现公司能够提供的身份与长期保障。', insight: '当保障是核心目标时，同样的“保守、稳定”不应被简单解释为缺少成长。牌面需要放回真实诉求中理解，否则会得到方向完全相反的建议。', direction: '先明确保障的可兑现程度和时间成本，再比较外部机会。不是因为害怕而留下，也不是为了证明勇敢而离开。' },
      { tag: '重大选择', title: '当两个选项都不完美', question: '两个升学选择各有明显代价，单独评价都不能给出令人满意的答案。', insight: '先回到来访者当前最重要的评判标准，再比较两条路径从开始到结果的变化方向。一条可能先难后稳，另一条则先轻松后受限。', direction: '选择更符合核心标准、且能量逐步改善的路径，同时提前看见它的代价，而不是追求不存在的完美选项。' },
    ],
    privacy: '案例均经过重写与匿名化处理，仅保留可迁移的咨询洞察。',
  },
  contact: {
    eyebrow: 'BOOK A SESSION', title: '从一个真实的问题开始',
    lead: '添加微信后，请简单说明你想咨询的主题。确认服务项目、时间与费用后，付款锁定预约。',
    stepsTitle: '预约步骤', steps: [['1', '添加微信', '扫描二维码或搜索微信号。'], ['2', '发送需求', '说明咨询主题及希望预约的时间。'], ['3', '确认与付款', '双方确认项目、费用和档期后完成付款。']],
    rulesTitle: '预约与改期', rules: ['付款后预约正式生效。', '如需改期，请至少提前 24 小时联系。', '临时取消、迟到及退款规则将在确认项目时一并说明。', '咨询资料与沟通内容将被妥善保护。'],
    scan: '微信扫码预约', idLabel: '微信号', assetNote: '扫码添加时，请备注“官网咨询”。',
    other: '其他联系方式', instagram: 'Instagram', email: 'Email',
  },
  footer: { tagline: 'Clarity for the choices that matter.', rights: '保留所有权利。' },
  modal: { title: '微信预约咨询', text: '扫描二维码，或在微信中搜索以下微信号。', close: '关闭', placeholder: '添加时请备注“官网咨询”。' },
  notFound: { title: '这个页面暂时不在星图上', text: '你访问的页面不存在，或已经移动。' },
};

const en: typeof zh = {
  langName: 'English', switchLabel: '中文',
  meta: {
    home: ['Kaisa Tarot & Astrology', 'Nine years of professional tarot and astrology practice, offering clear insight and grounded direction.'],
    about: ['About Kaisa', 'Meet Kaisa and discover her credentials, nine years of practice, and consultation philosophy.'],
    services: ['Tarot & Astrology Services', 'Explore tarot and astrology consultations, including focus, duration, delivery, and pricing.'],
    approach: ['Approach & Anonymous Cases', 'Discover Kaisa’s three-part consultation method and selected anonymous case insights.'],
    contact: ['Contact & Booking', 'Book a tarot or astrology consultation with Kaisa via WeChat.'],
  },
  nav: { home: 'Home', about: 'About', services: 'Services', approach: 'Approach & Cases', contact: 'Book' },
  common: { book: 'Book via WeChat', viewServices: 'View services', learnMore: 'Learn more', readCase: 'Read insights', backHome: 'Back home', credential: 'Credentials', testimonial: 'Client note', details: 'Service details', suitable: 'Best for', duration: 'Duration', delivery: 'Delivery', price: 'Price' },
  home: {
    eyebrow: 'TAROT · ASTROLOGY · CONSULTATION', title: 'See what is really at stake.\nThen choose your next step.',
    intro: 'Nine years of professional practice. Through tarot and astrology, I help you understand relationships, career questions, and pivotal choices with clarity, honesty, and grounded direction.',
    proofTitle: 'About me',
    proof: ['Professional Tarot Practitioner, London School of Astrology', 'ISAR Certified Astrologer', '9 years of professional practice'],
    servicesEyebrow: 'TWO LENSES, ONE PURPOSE', servicesTitle: 'Two systems, one intention', servicesIntro: 'Not to make your decisions for you, but to illuminate the patterns, dynamics, and choices that are difficult to see from within.',
    serviceCards: [
      { icon: '✦', title: 'Tarot Consultation', en: 'Focused & Immediate', text: 'Explore a specific question and its near-term direction, uncover the real tension, and leave with practical next steps.', link: '/en/services/#tarot' },
      { icon: '◯', title: 'Astrology Consultation', en: 'Structural & Long-term', text: 'Use natal and transit work to understand enduring patterns, strengths, and life cycles within a wider timeline.', link: '/en/services/#astrology' },
    ],
    journalEyebrow: 'A PRACTICE IN MOTION',
    journalTitle: 'Professional practice, grounded in real life',
    journalItems: ['Tarot consultation · Singapore', 'Astrology study · Shanghai', 'Consultations across borders'],
    methodEyebrow: 'THE KAISA APPROACH', methodTitle: 'The “why” matters as much as the answer', methodText: 'A meaningful consultation should offer more than a yes or no. We identify the real question beneath the surface, understand why the situation has formed, and translate insight into your next realistic move.',
    methodSteps: [['01', 'Direction', 'A clear view of where the current trajectory is most likely to lead.'], ['02', 'Diagnosis', 'The present dynamic, key tension, and the question you are truly trying to answer.'], ['03', 'Action', 'Specific, realistic choices that can sustain or change the direction.']],
    casesEyebrow: 'SELECTED INSIGHTS', casesTitle: 'Real questions, carefully anonymised',
    cases: [['Relationships', 'When “Will they contact me?” is really a question about capacity', 'A history of reconciliation does not guarantee the same pattern will repeat when emotional conflict has become a question of real-world responsibility.'], ['Career', 'Wanting to leave and being ready to leave are not the same', 'When residency or long-term security is the hidden priority, stability may be a strategic resource rather than stagnation.'], ['Decisions', 'Finding the stronger path when neither option is perfect', 'Start with the criterion that matters most, then compare whether each path becomes more stable or more depleted over time.']],
    quote: '“She did not make the decision for me. She helped me see what I was actually deciding.”', quoteMeta: 'Anonymous client · Relationship consultation', closing: 'Clarity begins when you are ready\nto meet the real question.',
  },
  about: {
    eyebrow: 'ABOUT KAISA', title: 'Intuitive insight,\ngrounded in structure.', lead: 'I’m Kaisa, a tarot practitioner and astrologer with nine years of professional experience in China. I believe a good consultation does not manufacture mystery. It restores your ability to see and choose clearly.',
    storyTitle: 'For nine years, I have kept returning to one thing', story: ['Listening for the part of a question that has not yet been spoken.', 'Clients arrive with questions about relationships, career, money, and major decisions. The stated question is often only an entrance. Underneath may be a need for security, the weight of responsibility, anxiety about identity, or a pattern that has never fully ended.', 'Tarot brings us close to what is happening now. Astrology reveals the longer structure. Together, they create a reading that offers both direction and context.'],
    credentialsTitle: 'Training & credentials', credentials: [['LSA', 'London School of Astrology', 'Professional Tarot Practitioner'], ['ISAR', 'International Society for Astrological Research', 'Certified Astrologer'], ['9 YEARS', 'Ongoing consultation practice', 'Relationships, career, finances, and major decisions']],
    principlesTitle: 'Consultation principles', principles: [['Honesty', 'No vague reassurance, and no exaggeration for dramatic effect.'], ['Completeness', 'Direction, reasoning, and practical advice belong together.'], ['Respect', 'I do not decide for you or turn a symbol into an accusation.'], ['Grounding', 'Advice must make sense within the realities of your life.']],
    assetNote: 'Kaisa · Tarot Practitioner & Astrologer',
    certificateTitle: 'Professional training, clearly evidenced',
    certificateText: 'Certificate in Tarot, London School of Astrology · 2022',
    signatureQuote: 'Mysticism is not an escape from reality, but another language through which to understand it.',
  },
  services: {
    eyebrow: 'SERVICES', title: 'Choose the right lens for your question', lead: 'Tarot is suited to specific questions and near-term direction. Astrology supports a deeper understanding of long-term patterns and cycles. You are welcome to describe your needs briefly on WeChat before booking.',
    tarotTitle: 'Tarot consultations', tarotIntro: 'For a clear question where you want to understand the present dynamic, likely direction, and next steps.', astrologyTitle: 'Astrology consultations', astrologyIntro: 'For a systematic understanding of yourself, relationship patterns, or a significant life cycle.',
    items: {
      tarot: [{ name: 'Essential Spread', for: 'Open reading or Lovers Pyramid; suited to one clear, specific question', duration: '20 minutes | 3–4 cards', delivery: 'Voice message / text', price: 'CNY 69' }, { name: 'Complex Spread', for: 'Future Lover, Career Outlook, Either–Or, Lovers Correspondence, or Venus spread', duration: '30 minutes | 5–8 cards', delivery: 'Voice message / text', price: 'CNY 88' }, { name: 'Seasonal Spread', for: 'The overall direction of the coming quarter; available only around the equinoxes and solstices', duration: '30 minutes | 4 cards', delivery: 'Voice message / text', price: 'CNY 88' }],
      astrology: [{ name: 'Single Topic / Foundation Chart', for: 'Choose one topic: relationships, career, education, finances, or health; the foundation reading gives an overall summary and broad direction', duration: 'To be confirmed', delivery: 'Voice message / text', price: 'CNY 198' }, { name: 'Natal Chart Reading', for: 'A detailed natal chart reading; a relationship-focused reading may cover partner characteristics, work and finances, relating style, and marriage timing', duration: 'To be confirmed', delivery: 'Voice message / text', price: 'CNY 398' }, { name: 'Year-Ahead Forecast', for: 'The overall development of the coming year, including possible events by month, using techniques such as Firdaria, profections, solar arc, secondary progressions, and solar return', duration: 'To be confirmed', delivery: 'Voice message / text', price: 'CNY 398' }, { name: 'Relationship Synastry', for: 'For romantic reconciliation or friendship dynamics; compares both natal charts to assess compatibility and long-term potential', duration: 'To be confirmed', delivery: 'Voice message / text', price: 'CNY 498' }],
    },
    note: 'Delivery: voice message / text. The Seasonal Spread is available only around the equinoxes and solstices.',
    processTitle: 'How booking works', process: [['01', 'Share your question', 'Add Kaisa on WeChat and briefly describe what you would like to explore.'], ['02', 'Confirm the service', 'We will agree on the right format, time, and fee.'], ['03', 'Secure your session', 'Payment confirms the booking and any preparation materials.']],
  },
  approach: {
    eyebrow: 'APPROACH & CASES', title: 'Not a list of meanings.\nA whole person, understood in context.', lead: 'Every question carries history, an unspoken decision, and real-world constraints. The purpose of consultation is to organise these signals into a view you can understand and act on.',
    frameworkTitle: 'Three layers of a complete consultation', framework: [['Direction', 'Where the current trajectory is most likely to lead, stated clearly without treating a trend as immutable fate.'], ['Diagnosis', 'Why the situation has formed: the present dynamic, central tension, and the question beneath the question.'], ['Action', 'What you can realistically do now to sustain or alter that direction.']],
    caseTitle: 'Anonymous case insights', cases: [
      { tag: 'Relationships', title: 'Why this silence was different', question: 'The client asked whether a former partner would contact her again. They had reconciled before, so she expected the same cycle to repeat.', insight: 'This time, the trigger had shifted from emotional conflict to marriage expectations, finances, and family pressure. The real question was no longer whether love remained, but whether he could carry a shared future.', direction: 'Move from waiting to clarifying real-world willingness: had he chosen to leave, or had pressure made him withdraw before making a choice?' },
      { tag: 'Career', title: 'Stability is not always stagnation', question: 'The client wanted to know whether to change jobs, but the real issue was the residency and long-term security attached to her current role.', insight: 'When security is the true priority, “conservative” and “stable” cannot automatically mean a lack of growth. Symbols must be read in the context of the actual need.', direction: 'Verify whether the promised security is deliverable and at what cost, then compare outside options without leaving merely to prove courage.' },
      { tag: 'Major Decisions', title: 'When neither choice is perfect', question: 'Two education options both carried meaningful drawbacks, and judging either in isolation produced no useful answer.', insight: 'We first identified the client’s most important criterion, then compared how each path changed from beginning to outcome: one difficult but stabilising, the other easy at first but increasingly constrained.', direction: 'Choose the path that fits the core criterion and improves over time, while naming its cost in advance rather than searching for a perfect option.' },
    ], privacy: 'All cases are rewritten and anonymised. Only transferable consultation insights are retained.',
  },
  contact: {
    eyebrow: 'BOOK A SESSION', title: 'Begin with one honest question', lead: 'Add Kaisa on WeChat and briefly describe what you would like to explore. Your service, session time, and fee will be confirmed before payment.',
    stepsTitle: 'Booking steps', steps: [['1', 'Add WeChat', 'Scan the QR code or search the WeChat ID.'], ['2', 'Share your needs', 'Describe your consultation topic and preferred timing.'], ['3', 'Confirm & pay', 'Your session is secured once the format, fee, time, and payment are confirmed.']],
    rulesTitle: 'Booking & rescheduling', rules: ['A booking is confirmed after payment.', 'Please contact us at least 24 hours in advance to reschedule.', 'Cancellation, lateness, and refund terms will be shared when the service is confirmed.', 'Consultation materials and messages will be treated with care.'],
    scan: 'Scan to book on WeChat', idLabel: 'WeChat ID', assetNote: 'Please mention “Website consultation” when adding Kaisa.', other: 'Other channels', instagram: 'Instagram', email: 'Email',
  },
  footer: { tagline: 'Clarity for the choices that matter.', rights: 'All rights reserved.' },
  modal: { title: 'Book via WeChat', text: 'Scan the QR code or search the WeChat ID below.', close: 'Close', placeholder: 'Please mention “Website consultation” when adding Kaisa.' },
  notFound: { title: 'This page is not in the chart', text: 'The page you requested does not exist or has moved.' },
};

export const siteContent = { zh, en };
export type SiteContent = typeof zh;

export function getContent(lang: Lang) {
  return siteContent[lang];
}

export function localizedPath(lang: Lang, page: 'home' | PageKey = 'home') {
  return page === 'home' ? `/${lang}/` : `/${lang}/${page}/`;
}
