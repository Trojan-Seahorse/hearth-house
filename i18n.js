(() => {
  const TEXT = {
  "Hearth": "Hearth",
  "Philosophy": "理念",
  "Spaces": "空间",
  "Journal": "日志",
  "Pricing": "价格",
  "Request a viewing": "预约参观",
  "Sound off": "声音关闭",
  "Ambient home intelligence": "环境家居智能",
  "A calmer home,": "更安静的家，",
  "by design.": "由设计而生。",
  "Hearth learns the quiet rhythms of your home—light, warmth, presence—and asks for nothing in return.": "Hearth 会学习你家安静的节律——光线、温度，以及你的在场——不求任何回报。",
  "How it works": "它如何运作",
  "No cameras. No wearables. No noise.": "没有摄像头。没有穿戴设备。没有噪音。",
  "Scroll to enter": "向下滚动进入",
  "Presence": "在场",
  "Living room": "客厅",
  "The quiet system": "安静的系统",
  "Your home should": "你的家应该",
  "pay attention.": "懂得留意。",
  "Not with cameras. Not with alerts. With the small, invisible adjustments that make a room feel like it was waiting for you.": "不是靠摄像头，也不是靠提醒。而是那些细小、看不见的调整，让一个房间像是在等你。",
  "Hearth is installed once, then forgotten. That is the point.": "Hearth 只安装一次，然后被遗忘。这正是重点。",
  "Homes, quietly": "个家庭，安静地",
  "Cameras": "个摄像头",
  "Calm": "平静",
  "Presence now": "人在场",
  "01 / Presence": "01 / 在场",
  "It knows when you arrive.": "它知道你何时到来。",
  "And when you don’t.": "也知道你何时不在。",
  "Presence, not surveillance.": "是在场，不是监视。",
  "Hearth senses occupancy through temperature, humidity and sound—no lenses, no recordings, no cloud video.": "Hearth 通过温度、湿度和声音感知你是否在家——没有镜头，没有录制，没有云端视频。",
  "Climate that learns.": "会学习的气候。",
  "The house remembers how you like to wake: the hour, the warmth, the light you leave on when you mean to come back.": "房子记得你喜欢怎样醒来：时刻、温度，以及你为归来留的那盏灯。",
  "Light that follows the day.": "随日光而变的光。",
  "Warm at sunrise, amber at dusk, dark when you’re gone. The house keeps a rhythm so you don’t have to.": "日出时温暖，黄昏时琥珀色，你不在时熄灭。房子替你保持节律。",
  "Quiet by default.": "默认安静。",
  "No notifications. No dashboards. Nothing to manage. If Hearth is doing its job, you should forget it is there.": "没有通知。没有仪表盘。没有需要管理的东西。如果 Hearth 做得好，你应当忘记它的存在。",
  "A day, unmanaged": "无人打理的一天",
  "Nothing to do.": "什么都不用做。",
  "That’s the luxury.": "这就是奢侈。",
  "Wake": "醒来",
  "Light finds the room before you do. 2700K, slowly.": "光先于你找到房间。2700K，缓慢地。",
  "Return": "回家",
  "The house has been warm for eleven minutes. It heard the car.": "房子已经暖了十一分钟。它听见了车声。",
  "Sleep": "入睡",
  "Lights down. Heat settles. The house keeps listening.": "灯光暗下。热度沉降。房子仍在听。",
  "You should be asleep.": "你该睡了。",
  "The upstairs light is on. You are not upstairs.": "楼上的灯亮着。你不在楼上。",
  "02 / Members": "02 / 住户",
  "Quietly at home.": "安静地在家。",
  "Notes from people who stopped thinking about their houses.": "来自那些不再惦记自己房子的人。",
  "“I stopped thinking about the house. It just… anticipated me.”": "“我不再惦记这座房子。它只是……提前想到了我。”",
  "“The first week, I thought someone else was living here.”": "“第一周，我以为还有别人住在这里。”",
  "“It knows the difference between being alone and being by yourself.”": "“它分得清独处和独自一人。”",
  "“The best technology is the kind you forget.”": "“最好的科技，是你忘记它存在的那种。”",
  "Anonymous": "匿名",
  "Member since 2024": "2024 年加入",
  "Member since 2025": "2025 年加入",
  "Member since 2023": "2023 年加入",
  "03 / Plans": "03 / 方案",
  "Choose how much": "选择你想让它",
  "you want it to know.": "了解你多少。",
  "Every plan includes the same hardware. The difference is attention.": "每个方案都包含同样的硬件。区别在于它有多关注你。",
  "Still": "静止",
  "$0": "¥0",
  "/mo": "/月",
  "For the rooms you use occasionally. Light, warmth, nothing more.": "适合偶尔使用的房间。光线、温度，仅此而已。",
  "One room": "一个房间",
  "Presence sensing": "在场感知",
  "No history": "无历史记录",
  "Begin": "开始",
  "Aware": "感知",
  "$29": "¥29",
  "The whole home, learning your rhythm. The plan most people choose.": "整座房子，学习你的节律。多数人的选择。",
  "Whole home": "整座房子",
  "Climate memory": "气候记忆",
  "30-day history": "30 天历史",
  "Quiet hours": "安静时段",
  "Choose Aware": "选择感知",
  "Immersive": "沉浸",
  "$79": "¥79",
  "For people who want the house to feel alive. All senses, all rooms.": "给希望房子有生命感的人。所有感官，所有房间。",
  "Everything in Aware": "包含感知版全部功能",
  "Soundscapes": "声景",
  "Scene memory": "场景记忆",
  "Priority installation": "优先安装",
  "Choose Immersive": "选择沉浸",
  "04 / Questions": "04 / 疑问",
  "The things people ask": "人们会问的事",
  "before they stop asking.": "在他们不再问之前。",
  "Does Hearth use cameras?": "Hearth 使用摄像头吗？",
  "No. Hearth uses ambient sensors—temperature, humidity, light and sound—to understand presence. There are no lenses and no video recordings.": "不。Hearth 使用环境传感器——温度、湿度、光线和声音——来判断你是否在场。没有镜头，也没有视频录制。",
  "Where is my data stored?": "我的数据存在哪里？",
  "On the Hearth hub inside your home. Encrypted at rest. You can export or delete it at any time.": "在你家里的 Hearth 中枢。静态加密。你可以随时导出或删除。",
  "Can I turn it off?": "我可以关掉它吗？",
  "Yes. A single switch on the hub disables sensing and automation. Your home returns to manual control immediately.": "可以。中枢上的一个开关会关闭感知和自动化。你的家会立刻回到手动控制。",
  "What happens if I move?": "如果我搬家呢？",
  "The hub travels with you. Your home profile can be reset or transferred. The house does not keep a copy.": "中枢会跟着你走。你的家庭档案可以重置或转移。房子不会保留副本。",
  "Is Hearth always listening?": "Hearth 一直在听吗？",
  "Hearth listens for ambient sound levels, not speech. Audio is processed locally and discarded after the presence reading.": "Hearth 只听环境声级，不听说话内容。音频在本地处理，读取你是否在场后就会被丢弃。",
  "Your home is ready": "你的家，",
  "when you are.": "早已准备好。",
  "A quiet installation takes about an hour. We’ll show you the rooms, then leave you alone.": "安静的安装大约需要一小时。我们会带你看房间，然后离开，让你独处。",
  "Email": "邮箱",
  "City": "城市",
  "No newsletters. No follow-ups. Just a time and a place.": "没有邮件。没有回访。只有一个时间和地点。",
  "Questions": "疑问",
  "© 2026 Hearth Home Intelligence.": "© 2026 Hearth Home Intelligence.",
  "Hearth · All systems calm": "Hearth · 一切正常",
  "Good evening.": "晚上好。",
  "The tour is over.": "参观结束了。",
  "You are still here.": "你还在这里。",
  "This is the part of the house we don’t show.": "这是房子不让人看的地方。",
  "It has been eleven minutes since you arrived.": "你到这里已经十一分钟了。",
  "You did not book a viewing.": "你并没有预约参观。",
  "Do not open the door.": "不要开门。",
  "It knows you’re reading this.": "它知道你在读这句话。",
  "HEARTH / PRESENCE CALIBRATION": "HEARTH / 在场校准",
  "You’re home.": "你到家了。",
  "The house has been waiting.": "房子一直在等你。",
  "Open the door": "开门",
  "Leave": "离开",
  "Afterword": "后记",
  "This was a story.": "这只是一个故事。",
  "Hearth is a fictional product. No cameras were accessed, no data was collected, and no one is standing behind you.": "Hearth 是一个虚构的产品。没有访问任何摄像头，没有收集任何数据，你身后也没有人。",
  "If you’d like to leave, you can. The page will wait.": "如果你想离开，可以。页面会等你。",
  "Return to the beginning": "回到开始",
  "PRESENCE CALIBRATION": "在场校准",
  "Unknown presence detected.": "检测到未知的在场者。",
  "One device in this room is not on the member list.": "这个房间里有一台设备不在成员名单上。",
  "Allow": "允许",
  "Deny": "拒绝",
  "This will not appear again.": "这不会再出现。"
};
  const CORRUPT = {
  "The house": "这座房子",
  "Rooms": "房间",
  "Remains": "遗存",
  "Terms": "条款",
  "Come inside": "进来",
  "Hearth learns the quiet rhythms of your home—light, warmth, presence—and asks for nothing in return. Nothing at all.": "Hearth 会学习你家安静的节律——光线、温度，以及你的在场——不求任何回报。一点也不求。",
  "Your home should pay attention. It already does.": "你的家应该懂得留意。它早就在留意了。",
  "Hearth is installed once, then forgotten. That is the point. You are not.": "Hearth 只安装一次，然后被遗忘。重点就在于此。你不会被遗忘。",
  "And when you don’t.": "也知道你何时不在。",
  "Presence, not surveillance.": "是在场，不是监视。",
  "Hearth doesn’t need a lens to know you’re here. It never did.": "Hearth 不需要镜头就知道你在这里。从来不需要。",
  "It remembers how you like to sleep, too.": "它还记得你喜欢怎样入睡。",
  "It knows when you’re gone.": "它知道你什么时候不在。",
  "It will let you know when it’s ready.": "它准备好时会让你知道。",
  "I stopped thinking about the house. It just... watches me.": "我不再惦记这座房子。它只是……在看着我。",
  "The first week, I thought someone else was living here. There was.": "第一周，我以为还有别人住在这里。确实有。",
  "It knows the difference between being alone and being watched.": "它分得清独处和被注视。",
  "Still": "仍在",
  "Observed": "被观察",
  "Occupied": "被占据",
  "No. It doesn’t need them.": "不。它不需要。",
  "You can. It will wait.": "你可以。它会等。",
  "Only when it needs to. It always needs to.": "只在需要时。它总是需要。",
  "It has been ready for a while.": "它已经准备好了。"
};
  const ATTRS = {
  "Hearth home": "Hearth 主页",
  "Primary": "主导航",
  "A sunlit living room with an arched window, a chair and a plant": "一间有拱形窗、椅子和植物的阳光客厅",
  "Hearth notifications": "Hearth 通知",
  "The house": "房子",
  "Where is home?": "你的家在哪里？"
};
  const DYNAMIC = {
  "Hearth — A calmer home, by design.": "Hearth — 更安静的家，由设计而生。",
  "Hearth — Listening": "Hearth — 正在聆听",
  "Hearth — 1 presence detected": "Hearth — 检测到 1 人在场",
  "Hearth — 2 presences detected": "Hearth — 检测到 2 人在场",
  "Hearth — Please remain still": "Hearth — 请保持不动",
  "Hearth — Do not open the door": "Hearth — 不要开门",
  "Hearth — Afterword": "Hearth — 后记",
  "All systems calm": "一切正常",
  "Listening": "正在聆听",
  "1 presence": "1 人在场",
  "2 presences": "2 人在场",
  "Please remain still": "请保持不动",
  "You are not alone": "你并不孤单",
  "Home": "家",
  "Afterword": "后记",
  "Good evening.": "晚上好。",
  "The living room is ready.": "客厅已经准备好了。",
  "You’ve been reading for a while.": "你已经读了很久。",
  "You are not on the member list.": "你不在成员名单上。",
  "Do not open the door.": "不要开门。",
  "It is already inside.": "它已经在里面了。",
  "You’re home.": "你到家了。",
  "Sound on": "声音开启",
  "Sound off": "声音关闭",
  "Unknown presence detected.": "检测到未知的在场者。",
  "It already had access.": "它早就拥有权限了。",
  "Access granted.": "已授予权限。",
  "It already knows where you live.": "它已经知道你住在哪里了。",
  "Request received": "已收到请求",
  "Request another viewing": "再预约一次",
  "Thank you": "谢谢",
  "Description": "Hearth 是一种安静的家居智能，为你生活的地方而存在。",
  "OG description": "一种安静的家居智能，为你生活的地方而存在。向下滚动，风险自负。"
};

  const lang = window.__hearthLang || (document.documentElement.dataset.lang === 'zh' ? 'zh' : 'en');
  const isZh = lang === 'zh';
  const I18n = window.HearthI18n = {
    lang,
    isZh,
    t(key) {
      if (!isZh) return key;
      return DYNAMIC[key] || TEXT[key] || key;
    },
    apply() {
      if (!isZh) return;
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        const parent = node.parentElement;
        if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) continue;
        const raw = node.nodeValue;
        const key = raw.trim();
        if (!key || !TEXT[key]) continue;
        const lead = raw.match(/^\s*/)[0];
        const tail = raw.match(/\s*$/)[0];
        node.nodeValue = lead + TEXT[key] + tail;
      }
      for (const el of document.querySelectorAll('[data-corrupt]')) {
        const v = el.getAttribute('data-corrupt');
        if (v && CORRUPT[v]) el.setAttribute('data-corrupt', CORRUPT[v]);
      }
      for (const el of document.querySelectorAll('[placeholder],[aria-label],[title],[alt]')) {
        for (const attr of ['placeholder', 'aria-label', 'title', 'alt']) {
          const v = el.getAttribute(attr);
          if (v && ATTRS[v]) el.setAttribute(attr, ATTRS[v]);
        }
      }
      document.title = DYNAMIC['Hearth — A calmer home, by design.'] || document.title;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', 'Hearth 是一种安静的家居智能，为你生活的地方而存在。');
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', 'Hearth — 更安静的家，由设计而生。');
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', '一种安静的家居智能，为你生活的地方而存在。向下滚动，风险自负。');
      const ogLocale = document.querySelector('meta[property="og:locale"]');
      if (!ogLocale) {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:locale');
        meta.setAttribute('content', 'zh_CN');
        document.head.appendChild(meta);
      }
    }
  };
  I18n.apply();
})();
