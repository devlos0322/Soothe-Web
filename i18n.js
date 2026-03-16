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
      "repo.title": { en: "Repository", ko: "저장소", ja: "リポジトリ", zh: "代码仓库" },
      "repo.label": {
        en: "Product repository:",
        ko: "프로덕트 저장소:",
        ja: "プロダクトリポジトリ:",
        zh: "产品仓库："
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
