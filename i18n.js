(function () {
  const dictionaries = {
    index: {
      "meta.title": {
        en: "Soothe Guide",
        ko: "Soothe 안내",
        ja: "Soothe ガイド",
        zh: "Soothe 指南"
      },
      "meta.description": {
        en: "Soothe official page with support and privacy policy links.",
        ko: "Soothe 공식 페이지. 지원 및 개인정보처리방침 링크 제공.",
        ja: "Soothe 公式ページ。サポートとプライバシーポリシーへのリンク。",
        zh: "Soothe 官方页面，包含支持与隐私政策链接。"
      },
      "ui.language": { en: "Language", ko: "언어", ja: "言語", zh: "语言" },
      tag: { en: "Soothe Official", ko: "Soothe 공식", ja: "Soothe 公式", zh: "Soothe 官方" },
      "hero.title.pre": {
        en: "Plan your day",
        ko: "하루를",
        ja: "1日を",
        zh: "让每天"
      },
      "hero.title.accent": {
        en: "with calm clarity",
        ko: "차분하게 정리",
        ja: "落ち着いて整える",
        zh: "更从容有序"
      },
      "hero.lead": {
        en: "Soothe helps you compare plans with actual execution so your next action feels simple and intentional.",
        ko: "Soothe는 계획과 실제 실행을 비교해 다음 행동을 더 쉽고 분명하게 선택하도록 돕습니다.",
        ja: "Soothe は計画と実行を比較し、次の行動をシンプルに決められるようにサポートします。",
        zh: "Soothe 帮助你对比计划与实际执行，让下一步行动更简单明确。"
      },
      "lifestyle.title": {
        en: "A lifestyle app for distracted modern life",
        ko: "집중이 흐려진 현대인을 위한 라이프스타일 앱",
        ja: "注意が散りやすい現代生活のためのライフスタイルアプリ",
        zh: "为注意力易分散的现代生活打造的方式改善应用"
      },
      "lifestyle.lead": {
        en: "Built for people whose focus gets fragmented by nonstop media, short-form feeds, and constant notifications.",
        ko: "끊임없는 미디어, 짧은 피드, 알림 속에서 집중이 분산되는 사람들을 위해 설계했습니다.",
        ja: "絶えないメディア、短いフィード、通知で集中が分断される人のために設計しました。",
        zh: "专为被媒体流、短内容和频繁通知打散注意力的人设计。"
      },
      "lifestyle.left.title": {
        en: "Noise around you",
        ko: "주변의 정보 소음",
        ja: "周囲の情報ノイズ",
        zh: "环境信息噪音"
      },
      "lifestyle.left.body": {
        en: "Media streams, social feeds, and context switching split your attention all day.",
        ko: "미디어 스트림, SNS 피드, 잦은 전환이 하루 종일 주의를 분산시킵니다.",
        ja: "メディア、SNSフィード、頻繁な切り替えが一日中注意を分散させます。",
        zh: "媒体流、社交信息流与频繁切换让注意力持续被打断。"
      },
      "lifestyle.center.title": {
        en: "Soothe rhythm loop",
        ko: "Soothe 리듬 루프",
        ja: "Soothe リズムループ",
        zh: "Soothe 节奏循环"
      },
      "lifestyle.center.body": {
        en: "Plan simple blocks, track real actions, and adjust with evidence-based insights.",
        ko: "간단히 계획하고 실제 행동을 기록한 뒤, 근거 기반 인사이트로 조정합니다.",
        ja: "シンプルに計画し実行を記録して、根拠に基づくインサイトで調整します。",
        zh: "先做简单计划，再记录真实执行，并用有依据的洞察持续调整。"
      },
      "lifestyle.right.title": {
        en: "Balanced everyday flow",
        ko: "균형 잡힌 일상 흐름",
        ja: "バランスの取れた日常フロー",
        zh: "更平衡的日常节奏"
      },
      "lifestyle.right.body": {
        en: "Clearer priorities, calmer execution, and a routine you can sustain.",
        ko: "우선순위는 더 선명해지고, 실행은 더 차분해지며, 루틴은 더 오래 지속됩니다.",
        ja: "優先順位が明確になり、実行は落ち着き、続けられる習慣になります。",
        zh: "优先级更清晰，执行更从容，习惯也更容易长期坚持。"
      },
      "card.support.title": { en: "Support", ko: "지원 페이지", ja: "サポート", zh: "支持" },
      "card.support.body": {
        en: "Get troubleshooting steps, contact details, and quick answers.",
        ko: "문제 해결 방법, 문의 채널, 자주 묻는 질문을 확인하세요.",
        ja: "トラブル対処法、問い合わせ先、よくある質問を確認できます。",
        zh: "查看问题排查步骤、联系渠道和常见问题。"
      },
      "card.privacy.title": {
        en: "Privacy Policy",
        ko: "개인정보처리방침",
        ja: "プライバシーポリシー",
        zh: "隐私政策"
      },
      "card.privacy.body": {
        en: "Review what data is processed, why it is used, and your rights.",
        ko: "처리되는 데이터, 사용 목적, 사용자 권리를 확인하세요.",
        ja: "処理されるデータ、利用目的、ユーザーの権利を確認できます。",
        zh: "查看处理的数据类型、用途与用户权利。"
      },
      "usage.title": { en: "How to use Soothe", ko: "Soothe 사용 방법", ja: "Soothe の使い方", zh: "Soothe 使用方法" },
      "usage.lead": {
        en: "Start small, keep your rhythm, and review your day with clear evidence.",
        ko: "작게 시작하고 리듬을 유지하며, 근거 기반 인사이트로 하루를 점검하세요.",
        ja: "小さく始めてリズムを保ち、根拠のあるインサイトで1日を振り返りましょう。",
        zh: "从小开始，保持节奏，并通过清晰依据复盘你的一天。"
      },
      "usage.step1.index": { en: "Step 1", ko: "1단계", ja: "ステップ 1", zh: "步骤 1" },
      "usage.step1.title": {
        en: "Set simple schedule blocks",
        ko: "간단한 시간대 계획을 세우세요",
        ja: "シンプルな時間ブロックを作成",
        zh: "先设定简单的时间块"
      },
      "usage.step1.body": {
        en: "Create day or week blocks first. Keep each block realistic so it is easy to follow.",
        ko: "하루 또는 일주일 단위로 먼저 계획하고, 무리 없는 길이로 설정해 꾸준히 지키세요.",
        ja: "まずは1日または1週間単位で計画し、無理のない長さで続けやすくしましょう。",
        zh: "先按天或按周创建计划，保持每个时间块可执行、易坚持。"
      },
      "usage.step2.index": { en: "Step 2", ko: "2단계", ja: "ステップ 2", zh: "步骤 2" },
      "usage.step2.title": {
        en: "Record what you actually do",
        ko: "실제 실행을 기록하세요",
        ja: "実際の行動を記録",
        zh: "记录你实际做了什么"
      },
      "usage.step2.body": {
        en: "Use quick activity tracking during the day. Small logs are enough to build useful patterns.",
        ko: "하루 중 짧게 기록해도 충분합니다. 작은 기록이 유의미한 패턴을 만듭니다.",
        ja: "短い記録でも十分です。小さなログが有効なパターンにつながります。",
        zh: "日常中用简短记录即可，小日志也能形成有价值的模式。"
      },
      "usage.step3.index": { en: "Step 3", ko: "3단계", ja: "ステップ 3", zh: "步骤 3" },
      "usage.step3.title": {
        en: "Compare plan and execution",
        ko: "계획과 실행을 비교하세요",
        ja: "計画と実行を比較",
        zh: "对比计划与执行"
      },
      "usage.step3.body": {
        en: "Open Timeline to check where plans matched and where time shifted.",
        ko: "타임라인에서 계획이 맞았던 구간과 시간이 밀린 구간을 확인해보세요.",
        ja: "タイムラインで、計画どおりだった時間帯とズレた時間帯を確認しましょう。",
        zh: "在时间线中查看哪些时段按计划执行、哪些时段发生偏移。"
      },
      "usage.step4.index": { en: "Step 4", ko: "4단계", ja: "ステップ 4", zh: "步骤 4" },
      "usage.step4.title": {
        en: "Improve with pattern insights",
        ko: "패턴 인사이트로 개선하세요",
        ja: "パターンインサイトで改善",
        zh: "用模式洞察持续优化"
      },
      "usage.step4.body": {
        en: "Review Patterns to adjust your next day with calmer and more consistent routines.",
        ko: "패턴 탭을 보고 다음 날 계획을 더 차분하고 일관되게 조정하세요.",
        ja: "パターンタブを見て、次の日の計画をより落ち着いて一貫性ある形に調整できます。",
        zh: "查看模式页面，帮助你把下一天安排得更稳定、更从容。"
      },
      "showcase.title": { en: "See Soothe in action", ko: "Soothe 화면 미리보기", ja: "Soothe 画面プレビュー", zh: "Soothe 画面预览" },
      "showcase.lead": {
        en: "From daily focus to weekly and monthly reflection, every screen is built to keep your rhythm clear.",
        ko: "일상 집중부터 주간/월간 회고까지, 흐름을 명확하게 유지하도록 화면을 구성했습니다.",
        ja: "日々の集中から週次・月次の振り返りまで、流れが見える画面構成になっています。",
        zh: "从每日专注到周/月复盘，每个页面都围绕清晰节奏而设计。"
      },
      "showcase.today": {
        en: "Today keeps active focus simple with quick start, flow status, and one-tap category access.",
        ko: "Today 탭은 빠른 시작, 흐름 상태, 카테고리 접근을 한 화면에서 단순하게 제공합니다.",
        ja: "Todayタブでは、クイック開始・フロー状態・カテゴリ操作を1画面でシンプルに扱えます。",
        zh: "Today 页面将快速开始、节奏状态与分类入口整合在一个清晰视图中。"
      },
      "showcase.timeline": {
        en: "Timeline compares plans and execution across day, week, and month in calendar and list views.",
        ko: "Timeline은 하루/일주일/한달 단위로 계획과 실행을 캘린더/목록에서 비교합니다.",
        ja: "Timelineは日・週・月単位で、計画と実行をカレンダー/リストで比較できます。",
        zh: "Timeline 支持按天/周/月在日历与列表中对比计划与执行。"
      },
      "showcase.patterns": {
        en: "Patterns turns your records into practical insight cards with evidence and next actions.",
        ko: "Patterns는 기록을 근거 기반 인사이트 카드로 바꿔 다음 행동까지 안내합니다.",
        ja: "Patternsは記録を根拠付きインサイトカードに変換し、次の行動まで示します。",
        zh: "Patterns 会把记录转化为带依据的洞察卡片，并给出下一步建议。"
      },
      "showcase.watch": {
        en: "Apple Watch support helps you track and stop activities quickly without breaking your flow.",
        ko: "Apple Watch 연동으로 흐름을 끊지 않고 활동 시작/종료를 빠르게 처리할 수 있습니다.",
        ja: "Apple Watch連携により、流れを止めずにアクティビティの開始/終了を素早く操作できます。",
        zh: "通过 Apple Watch，你可以在不中断节奏的情况下快速开始或结束活动。"
      },
      footer: { en: "Soothe Web Docs", ko: "Soothe 웹 문서", ja: "Soothe Web ドキュメント", zh: "Soothe 网页文档" }
    },
    support: {
      "meta.title": { en: "Soothe Support", ko: "Soothe 지원 안내", ja: "Soothe サポート", zh: "Soothe 支持" },
      "meta.description": { en: "Soothe support, contact, and FAQ.", ko: "Soothe 지원, 문의 채널, FAQ.", ja: "Soothe のサポート・問い合わせ・FAQ。", zh: "Soothe 支持、联系渠道与 FAQ。" },
      "ui.language": { en: "Language", ko: "언어", ja: "言語", zh: "语言" },
      tag: { en: "Support", ko: "지원", ja: "サポート", zh: "支持" },
      "hero.title": { en: "Support", ko: "지원 안내", ja: "サポート", zh: "支持" },
      "hero.lead": {
        en: "Find what to include when reporting an issue and check common questions.",
        ko: "문제 제보 시 필요한 정보와 자주 묻는 질문을 확인할 수 있습니다.",
        ja: "不具合報告時に必要な情報と、よくある質問を確認できます。",
        zh: "查看问题反馈时需要的信息与常见问题。"
      },
      "nav.home": { en: "Home", ko: "메인 페이지", ja: "ホーム", zh: "主页" },
      "nav.privacy": { en: "Privacy Policy", ko: "개인정보처리방침", ja: "プライバシーポリシー", zh: "隐私政策" },
      "guide.title": { en: "Before you contact us", ko: "문의 전 빠른 확인", ja: "お問い合わせ前の確認", zh: "联系前快速检查" },
      "guide.lead": {
        en: "A quick 3-step check helps us solve your issue much faster.",
        ko: "간단한 3단계 확인만으로 문제 해결 속도를 크게 높일 수 있습니다.",
        ja: "3ステップの事前確認で、問題解決をよりスムーズに進められます。",
        zh: "先做这 3 步小检查，我们可以更快帮你解决问题。"
      },
      "guide.step1.index": { en: "Step 1", ko: "1단계", ja: "ステップ 1", zh: "步骤 1" },
      "guide.step1.title": {
        en: "Confirm app and device version",
        ko: "앱/기기 버전 확인",
        ja: "アプリ・端末バージョンを確認",
        zh: "确认应用与设备版本"
      },
      "guide.step1.body": {
        en: "Please check your app version, device model, and iOS version first.",
        ko: "앱 버전, 기기 모델, iOS 버전을 먼저 확인해 주세요.",
        ja: "アプリバージョン、端末モデル、iOS バージョンを先にご確認ください。",
        zh: "请先确认应用版本、设备型号与 iOS 版本。"
      },
      "guide.step2.index": { en: "Step 2", ko: "2단계", ja: "ステップ 2", zh: "步骤 2" },
      "guide.step2.title": {
        en: "Capture what happened",
        ko: "상황 캡처하기",
        ja: "発生状況を記録",
        zh: "记录问题现场"
      },
      "guide.step2.body": {
        en: "Take one screenshot and write short reproduction steps with time information.",
        ko: "스크린샷 1장과 간단한 재현 단계, 발생 시각을 함께 적어 주세요.",
        ja: "スクリーンショット1枚と、簡単な再現手順・発生時刻をご記載ください。",
        zh: "请附 1 张截图，并写明简短复现步骤与发生时间。"
      },
      "guide.step3.index": { en: "Step 3", ko: "3단계", ja: "ステップ 3", zh: "步骤 3" },
      "guide.step3.title": {
        en: "Send a focused message",
        ko: "핵심 정보로 문의 보내기",
        ja: "要点を絞って送信",
        zh: "发送关键信息"
      },
      "guide.step3.body": {
        en: "Include only key facts and expected result so we can respond quickly.",
        ko: "핵심 사실과 기대 결과를 간단히 적어주시면 더 빠르게 답변드릴 수 있어요.",
        ja: "要点と期待する結果を簡潔に記載いただくと、より迅速に対応できます。",
        zh: "请简要说明关键事实与期望结果，我们会更快回复。"
      },
      "include.title": { en: "Include in your message", ko: "문의 시 포함 정보", ja: "お問い合わせ時に含める情報", zh: "反馈时请提供" },
      "include.item1": { en: "App version", ko: "앱 버전", ja: "アプリバージョン", zh: "应用版本" },
      "include.item2": { en: "Device model / iOS version", ko: "기기 모델 / iOS 버전", ja: "端末モデル / iOS バージョン", zh: "设备型号 / iOS 版本" },
      "include.item3": { en: "Time when issue happened", ko: "문제 발생 시각", ja: "問題発生時刻", zh: "问题发生时间" },
      "include.item4": { en: "Steps to reproduce", ko: "재현 단계", ja: "再現手順", zh: "复现步骤" },
      "include.item5": { en: "Screenshot if possible", ko: "스크린샷 (가능하면)", ja: "可能ならスクリーンショット", zh: "如可请附截图" },
      "contact.title": { en: "Contact channel", ko: "문의 채널", ja: "お問い合わせ窓口", zh: "联系渠道" },
      "faq.title": { en: "FAQ", ko: "자주 묻는 질문", ja: "よくある質問", zh: "常见问题" },
      "faq.q1": { en: "Can I use the app without Google login?", ko: "Google 로그인 없이 앱을 사용할 수 있나요?", ja: "Google ログインなしでアプリを使えますか？", zh: "不使用 Google 登录可以使用应用吗？" },
      "faq.a1": { en: "No. At this time, Google login is required to start using the app.", ko: "아니요. 현재는 앱 시작을 위해 Google 로그인이 필요합니다.", ja: "いいえ。現在はアプリ利用開始のために Google ログインが必要です。", zh: "不可以。目前开始使用应用需要 Google 登录。" },
      "faq.q2": { en: "Where are backups stored?", ko: "백업은 어디에 저장되나요?", ja: "バックアップはどこに保存されますか？", zh: "备份保存在哪里？" },
      "faq.a2": { en: "With Google Drive integration, backups are stored in appDataFolder.", ko: "Google Drive 연동 시 백업은 appDataFolder에 저장됩니다.", ja: "Google Drive 連携時、バックアップは appDataFolder に保存されます。", zh: "启用 Google Drive 后，备份会保存在 appDataFolder。" },
      "faq.q3": { en: "Is calendar sync automatic?", ko: "캘린더 동기화는 자동인가요?", ja: "カレンダー同期は自動ですか？", zh: "日历同步是自动的吗？" },
      "faq.a3": { en: "Events are created or deleted based on your actions. No automatic rearrangement is performed.", ko: "이벤트는 사용자 동작에 따라 생성/삭제되며 자동 재배치는 수행하지 않습니다.", ja: "イベントはユーザー操作に応じて作成/削除され、自動再配置は行いません。", zh: "事件会根据你的操作创建/删除，不会自动重排。" },
      footer: { en: "Soothe Web Docs", ko: "Soothe 웹 문서", ja: "Soothe Web ドキュメント", zh: "Soothe 网页文档" }
    },
    privacy: {
      "meta.title": { en: "Soothe Privacy Policy", ko: "Soothe 개인정보처리방침", ja: "Soothe プライバシーポリシー", zh: "Soothe 隐私政策" },
      "meta.description": { en: "Soothe privacy policy.", ko: "Soothe 개인정보처리방침.", ja: "Soothe プライバシーポリシー。", zh: "Soothe 隐私政策。" },
      "ui.language": { en: "Language", ko: "언어", ja: "言語", zh: "语言" },
      tag: { en: "Privacy", ko: "개인정보", ja: "プライバシー", zh: "隐私" },
      "hero.title": { en: "Privacy Policy", ko: "개인정보처리방침", ja: "プライバシーポリシー", zh: "隐私政策" },
      "hero.lead": { en: "Last updated: 2026-03-16", ko: "최종 업데이트: 2026-03-16", ja: "最終更新日: 2026-03-16", zh: "最后更新：2026-03-16" },
      "nav.home": { en: "Home", ko: "메인 페이지", ja: "ホーム", zh: "主页" },
      "nav.support": { en: "Support", ko: "지원 페이지", ja: "サポート", zh: "支持" },
      "s1.title": { en: "1. Data We Process", ko: "1. 처리하는 정보", ja: "1. 取り扱う情報", zh: "1. 我们处理的数据" },
      "s1.local": { en: "Local usage data", ko: "로컬 사용 데이터", ja: "ローカル利用データ", zh: "本地使用数据" },
      "s1.local1": { en: "Plans, records, categories, and settings created while using the app", ko: "앱 사용 중 생성된 계획, 기록, 카테고리, 설정", ja: "アプリ利用中に作成される計画、記録、カテゴリ、設定", zh: "使用应用时创建的计划、记录、分类和设置" },
      "s1.local2": { en: "Stored on your device by default", ko: "기본적으로 기기 내에 저장", ja: "原則として端末内に保存", zh: "默认保存在你的设备中" },
      "s1.google": { en: "When Google integration is enabled", ko: "Google 연동 사용 시", ja: "Google 連携を使用する場合", zh: "启用 Google 集成时" },
      "s1.google1": { en: "Google account info (account ID, email, name)", ko: "Google 계정 정보(계정 식별자, 이메일, 이름)", ja: "Google アカウント情報（識別子、メール、名前）", zh: "Google 账号信息（账号标识、邮箱、姓名）" },
      "s1.google2": { en: "Google Drive backup data", ko: "Google Drive 백업 데이터", ja: "Google Drive バックアップデータ", zh: "Google Drive 备份数据" },
      "s1.google3": { en: "Google Calendar sync data (event title, time, description)", ko: "Google Calendar 동기화 데이터(이벤트 제목, 시간, 설명)", ja: "Google Calendar 同期データ（イベント名、時間、説明）", zh: "Google 日历同步数据（事件标题、时间、说明）" },
      "s2.title": { en: "2. Why We Use Data", ko: "2. 이용 목적", ja: "2. 利用目的", zh: "2. 数据用途" },
      "s2.item1": { en: "Provide core app features (planning, tracking, insights)", ko: "앱 핵심 기능 제공(계획/기록/인사이트)", ja: "アプリの主要機能（計画/記録/インサイト）提供", zh: "提供应用核心功能（计划/记录/洞察）" },
      "s2.item2": { en: "Maintain account connection and authentication status", ko: "계정 연동 상태 표시 및 인증 유지", ja: "アカウント連携状態の表示と認証維持", zh: "维持账号连接状态与认证" },
      "s2.item3": { en: "Handle backup/restore and calendar sync", ko: "백업/복원 및 캘린더 동기화 처리", ja: "バックアップ/復元とカレンダー同期の処理", zh: "处理备份/恢复与日历同步" },
      "s3.title": { en: "3. Retention and Deletion", ko: "3. 보관 및 삭제", ja: "3. 保管と削除", zh: "3. 保存与删除" },
      "s3.item1": { en: "Local data remains on your device until you delete it", ko: "로컬 데이터는 사용자가 삭제할 때까지 기기에 보관", ja: "ローカルデータは削除されるまで端末に保存", zh: "本地数据会保存在设备中，直到你删除" },
      "s3.item2": { en: "Google-integrated data follows Google service policies", ko: "Google 연동 데이터는 Google 정책을 따름", ja: "Google 連携データは Google のポリシーに従う", zh: "Google 集成数据遵循 Google 服务政策" },
      "s3.item3": { en: "Related local credentials are removed when you log out", ko: "로그아웃 시 관련 로컬 인증 정보 제거", ja: "ログアウト時に関連するローカル認証情報を削除", zh: "退出登录时会移除相关本地凭据" },
      "s4.title": { en: "4. Third-Party Sharing and Tracking", ko: "4. 제3자 제공 및 추적", ja: "4. 第三者提供とトラッキング", zh: "4. 第三方共享与跟踪" },
      "s4.item1": { en: "No sale of personal data for advertising", ko: "광고 목적의 개인정보 판매 없음", ja: "広告目的での個人データ販売なし", zh: "不出售个人数据用于广告" },
      "s4.item2": { en: "Data may be sent to Google OAuth/Drive/Calendar only for requested features", ko: "요청한 기능 수행을 위해서만 Google OAuth/Drive/Calendar로 데이터 전달 가능", ja: "要求された機能のためにのみ Google OAuth/Drive/Calendar へデータ送信", zh: "仅在你请求相关功能时，才会发送到 Google OAuth/Drive/Calendar" },
      "s4.item3": { en: "No tracking and no personalized advertising data collection", ko: "사용자 추적 및 맞춤형 광고 데이터 수집 없음", ja: "トラッキングおよびパーソナライズ広告用データ収集なし", zh: "不进行用户跟踪，不收集个性化广告数据" },
      "s5.title": { en: "5. Your Rights and Contact", ko: "5. 이용자 권리 및 문의", ja: "5. ユーザーの権利と問い合わせ", zh: "5. 用户权利与联系" },
      "s5.item1": { en: "You can delete app data inside the app", ko: "앱 내 데이터 삭제 가능", ja: "アプリ内データの削除が可能", zh: "可在应用内删除数据" },
      "s5.item2": { en: "You can disconnect Google integration by logging out", ko: "로그아웃으로 Google 연동 해제 가능", ja: "ログアウトで Google 連携解除が可能", zh: "可通过退出登录解除 Google 集成" },
      "s5.item3": { en: "Contact channel:", ko: "문의 채널:", ja: "問い合わせ先:", zh: "联系渠道：" },
      "s5.support": { en: "Support page", ko: "지원 페이지", ja: "サポートページ", zh: "支持页面" },
      footer: { en: "Soothe Web Docs", ko: "Soothe 웹 문서", ja: "Soothe Web ドキュメント", zh: "Soothe 网页文档" }
    }
  };

  const page = document.body.dataset.page;
  const dictionary = dictionaries[page] || {};
  const select = document.getElementById("languageSelect");
  const stored = localStorage.getItem("soothe-web-language");
  const defaultLang = stored || "en";

  const translate = (key, lang) => {
    const token = dictionary[key];
    if (!token) return null;
    return token[lang] || token.en || null;
  };

  const applyLanguage = (lang) => {
    document.documentElement.lang = lang;
    if (select) select.value = lang;

    const title = translate("meta.title", lang);
    const description = translate("meta.description", lang);
    if (title) document.title = title;
    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", description);
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const value = translate(key, lang);
      if (value) element.textContent = value;
    });

    localStorage.setItem("soothe-web-language", lang);
  };

  if (select) {
    select.addEventListener("change", (event) => {
      applyLanguage(event.target.value);
    });
  }

  applyLanguage(defaultLang);
})();
