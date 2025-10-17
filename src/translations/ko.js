// Korean translations
export const ko = {
  // Navigation
  nav: {
    features: "기능",
    pricing: "가격", 
    testimonials: "후기",
    faq: "FAQ",
    contact: "연락처",
    contactBtn: "연락처",
    tryFree: "무료 체험"
  },

  // Hero section
  hero: {
    badge: "스마트 교육 플랫폼",
    title1: "스마트 교육",
    title2: "플랫폼", 
    title3: "AI 지원",
    description: "언어 센터의 운영 최적화와 지속 가능한 성장을 위해.",
    languages: "(EN, JP, KR, CN)",
    tryFreeBtn: "무료 체험",
    getConsultation: "상담 받기"
  },

  // Metrics section
  metrics: {
    title: "인상적인 수치",
    subtitle: "XinKEdu의 효과를 증명하는 숫자들",
    centers: {
      label: "사용 센터",
      value: "500+",
      description: "신뢰받는 교육 센터"
    },
    users: {
      label: "사용자", 
      value: "10k+",
      description: "활성 사용자"
    },
    performance: {
      label: "성능 향상",
      value: "+32%", 
      description: "운영 효율성"
    }
  },

  // Features section
  features: {
    title: "주요 기능",
    subtitle: "모든 교육 관리 요구사항을 위한 종합 솔루션",
    
    aiExam: {
      title: "AI 시험 생성 (빠르고 스마트)",
      desc: "주제, 난이도, 학습 성과에 따라 자동으로 시험을 생성합니다. 다양한 문제 유형과 자동 채점을 지원합니다.",
      bullets: [
        "문제 생성: 객관식, O/X, 빈칸 채우기, 서술형",
        "난이도, 기술 및 학습 성과 조정 (Bloom/CEFR)",
        "주제별, 태그별, 레벨별 문제 은행",
        "중복 문제 자동 방지 및 답안 섞기",
        "답안 설명, 채점 제안 및 점수"
      ]
    },

    ocrExam: {
      title: "이미지에서 시험 생성 (OCR)",
      desc: "종이 시험 이미지를 촬영/업로드하고, OCR 시스템과 형식 표준화로 몇 초 만에 시험을 내보냅니다.",
      bullets: [
        "한국어/영어 텍스트 정확한 인식, 노이즈 저항",
        "자동 크롭/데스큐 및 배경 정리",
        "레이아웃 표준화, 문제/답안 분리",
        "한 번의 촬영으로 이미지에서 문제 은행 생성",
        "랜덤 옵션 및 자동 번호 매기기"
      ]
    },

    aiAssistant: {
      title: "AI 교수 보조 실시간 및 수업 분석",
      desc: "실시간 모니터링, 상호작용 제안, 하이라이트 표시 및 수업 보고서 내보내기.",
      bullets: [
        "수업 진행에 따른 퀴즈/연습 문제 제안",
        "방금 가르친 지식에 대해 AI에게 질문하여 강화",
        "상호작용 수준 모니터링 및 약한 학생 경고",
        "타임스탬프별 하이라이트 표시",
        "빠른 피드백 수집 (투표) 및 의견 요약"
      ]
    },

    checkin: {
      title: "교수 체크인 / 체크아웃",
      desc: "한 번의 터치로 교수 세션 출석: GPS + 즉시 메모.",
      bullets: [
        "위치 및 시간별 체크인, 오프라인 지원",
        "인증 사진 및 교수 세션 증명 메모",
        "지각/조기 퇴근 경고 및 출석 통계",
        "세션/일정별 자동 급여 대조",
        "급여 계산을 위한 출석 데이터 내보내기"
      ]
    },

    schedule: {
      title: "교사 일정 관리",
      desc: "시각적 수업 일정 관리, 충돌 방지 및 Zalo/이메일을 통한 자동 알림.",
      bullets: [
        "주/월별 드래그 앤 드롭 수업, 일정 템플릿",
        "실시간 교실/시간/교사 충돌 감지",
        "다중 캠퍼스/교실 및 장비 관리",
        "과목, 레벨, 교대, 교사 및 상태별 필터링",
        "AI 알림, 이메일/Zalo와 일정 동기화"
      ]
    },

    exam: {
      title: "온라인 시험 및 점수 보기",
      desc: "학생들이 웹/모바일에서 시험을 보고, 가벼운 부정행위 방지, 제출 후 즉시 점수 및 해답을 확인합니다.",
      bullets: [
        "일정별 시험실, 시험 코드 및 시간 제한",
        "가벼운 카메라/마이크 모니터링, 탭 아웃 감지",
        "자동 채점, 즉시 점수 및 순위 표시",
        "답안, 해답 및 틀린 답 분석 보기",
        "조건부 재시험 (시도 횟수, 점수 임계값, 다른 은행)"
      ]
    },

    special: {
      title: "특별 기능",
      subtitle: "센터가 원활하고 투명하게 운영되도록 돕는 고급 도구.",
      
      crm: {
        title: "CRM 및 인사 관리",
        desc: "등록 파이프라인 추적, 프로필 및 역할 권한 관리; 교수 세션에서 KPI 및 급여 동기화.",
        bullets: [
          "단계별 및 확률별 등록 파이프라인",
          "리드 점수, 리드 소스 및 자동 육성",
          "교사/직원 프로필, 계약 및 인증서",
          "역할 및 단위별 세부 권한",
          "체크인 및 교수 일정에서 급여/KPI 동기화"
        ]
      },

      accounting: {
        title: "회계 지원",
        desc: "수업료, 부채 관리; 클래스-코스별 수익/비용 보고서; 투명한 대조 파일 내보내기.",
        bullets: [
          "기간별, 패키지별 송장/영수증 생성",
          "부채 추적 및 다채널 자동 수업료 알림",
          "투명한 수입/지출 및 자금 일지",
          "클래스/코스/캠퍼스별 수익-지출 보고서",
          "회계 파일 내보내기 (Excel/CSV) 및 빠른 대조"
        ]
      }
    }
  },

  // Pricing section
  pricing: {
    title: "서비스 가격",
    subtitle: "센터의 발전 단계에 맞는 패키지를 선택하세요.",
    
    plans: {
      free: {
        ribbon: "무료 체험",
        price: "무료",
        unit: "",
        note: "전체 기능이지만 제한된 리소스 (저장 공간, AI 호출/일, 대역폭).",
        features: [
          "AI 문서 분석",
          "문서에서 AI 시험 생성",
          "이미지에서 AI 시험 생성 (OCR)",
          "AI 수업 분석",
          "AI 학생 성과 평가",
          "편집 가능한 문제",
          "시험 게시 / 게시 취소",
          "라이브 티칭 (실시간 수업)",
          "교수 일정 보기",
          "교수 체크인",
          "시험 선택 및 응시",
          "점수 및 답안 보기",
          "자동 연습 시험 생성",
          "교사가 게시한 자료 보기",
          "교사 일정 관리",
          "교수 세션 기록",
          "교사 관리",
          "학생 관리",
          "수업 관리",
          "직원 프로필 관리"
        ]
      },
      
      basic: {
        ribbon: "기본",
        price: "300",
        unit: "000đ",
        note: "소규모 센터를 위한 핵심 기능 세트.",
        features: [
          "PDF/TXT 업로드 처리 < 10MB",
          "AI 문서 분석",
          "문서에서 AI 시험 생성",
          "다양한 문제 유형",
          "시험 게시 / 게시 취소",
          "시험 선택 및 응시",
          "점수 및 답안 보기",
          "교사 일정 관리",
          "교수 세션 기록"
        ]
      },

      advance: {
        ribbon: "고급",
        price: "3.000",
        unit: "000đ",
        note: "능동적인 교실 운영을 위한 확장.",
        features: [
          "대부분의 기본 기능 포함",
          "편집 가능한 문제",
          "교수 체크인",
          "이미지에서 AI 시험 생성 (OCR)",
          "라이브 티칭 (실시간 수업)",
          "AI 수업 분석",
          "교사 / 학생 / 수업 관리"
        ]
      },

      pro: {
        ribbon: "프로",
        price: "5.000",
        unit: "000đ",
        note: "고급 운영 모듈 추가.",
        features: [
          "대부분의 고급 기능 포함",
          "PDF/TXT 업로드 처리 > 10MB",
          "AI 학생 성과 평가",
          "챕터/레슨별 자동 연습 시험 생성",
          "교사가 게시한 자료 보기",
          "개인 학습 진행 보고서 보기",
          "직원 프로필 관리",
          "회계",
          "상담 챗봇"
        ]
      }
    },
    
    buyNow: "지금 구매",
    contactUs: "문의하기"
  },

  // Testimonials section
  testimonials: {
    title: "고객들이 말하는 것?",
    subtitle: "EduCRM을 구현한 센터들의 실제 피드백",
    
    items: [
      {
        name: "Nguyen Huong",
        title: "Alpha 센터장",
        quote: "EduCRM이 우리 팀의 데이터 입력 시간을 40% 줄이고 학생 추적을 더 잘할 수 있게 도왔습니다. 사용자 친화적인 인터페이스로 쉽게 사용할 수 있습니다.",
        avatar: "NH"
      },
      {
        name: "Tran Minh",
        title: "등록 관리자",
        quote: "명확한 파이프라인으로 단 2주 사용 후 전환율이 크게 증가했습니다. 고객 지원이 매우 열정적입니다.",
        avatar: "TM"
      },
      {
        name: "Le Thi Mai",
        title: "중학교 교장",
        quote: "수업 관리 및 일정 기능이 매우 편리합니다. 학교 운영을 더 효율적으로 만드는 데 도움이 됩니다.",
        avatar: "LM"
      }
    ]
  },

  // FAQ section
  faq: {
    title: "자주 묻는 질문",
    
    items: [
      {
        q: "구현 및 일정",
        a: "XinKEdu는 빠른 요구사항 평가, 샘플 구성 (수업, 과목, 교사, 권한), 초기 데이터 입력 및 사용자 교육을 포함한 표준 프로세스에 따라 구현됩니다. 클라우드 패키지의 경우 시간은 보통 1-3 근무일입니다. 특정 사용자 정의나 기존 시스템과의 통합이 있는 경우 명확한 수락 마일스톤을 계획하여 진행을 보장합니다."
      },
      {
        q: "데이터 보안 및 규정 준수",
        a: "데이터는 전송 중과 저장 시 암호화되며, 역할 기반 권한(RBAC), 액세스 로깅 및 정기 백업이 적용됩니다. 최소 권한 원칙을 적용하고 정기적인 테스트와 이상 징후 알림을 제공합니다. 고객별로 분리된 인프라; 베트남 근처 저장 지역 옵션. 백업/복원 프로세스 문서는 활성화 시 제공할 준비가 되어 있습니다."
      },
      {
        q: "AI 기능 및 OCR 시험 생성",
        a: "AI는 교수 내용 제안, 난이도별 빠른 문제 은행 생성, 수업 분석을 지원하여 하이라이트와 실행 항목을 제공합니다. OCR을 사용하면 이미지/PDF를 업로드하고 시스템이 인식하여 편집 가능한 문제로 변환하며 자연스러운 과목 기호를 유지합니다. Word/PDF로 내보내거나 직접 문제 은행에 넣을 수 있습니다."
      },
      {
        q: "SSO 통합, API 및 데이터 가져오기",
        a: "시스템은 Google/Microsoft SSO를 지원하며, 필요시 이메일 도메인 바인딩과 내부 인증 조합을 지원합니다. CRM/회계/LMS 연결을 위한 REST API와 웹훅을 제공합니다. 초기 데이터 가져오기는 시각적 필드 매핑과 함께 CSV/XLSX/Google Sheets를 사용하며, 업로드 시 즉시 오류 검사와 기록 전 빠른 수정 가이드를 제공합니다."
      },
      {
        q: "규모, 성능 및 권한",
        a: "XinKEdu는 수백 명에서 수만 명의 학생까지 서비스합니다. 캠퍼스별 보고서 또는 통합 보고서가 있는 다중 캠퍼스. 역할 및 범위(학년, 캠퍼스)별 세부 권한, 민감한 작업 승인 지원. 실제 요구사항에 따라 리소스를 확장할 수 있는 유연한 아키텍처로 교수 활동을 중단하지 않습니다."
      },
      {
        q: "체험, 가격 및 청구서",
        a: "핵심 기능으로 14일 체험이 가능합니다. 업그레이드 시 모든 체험 데이터가 보존됩니다. 월/년 단위 결제를 지원하며 장기 결제 및 비영리 교육 기관에 대한 할인을 제공합니다. 완전한 VAT 송장 내보내기; 모든 사용자 정의 비용(있는 경우)은 카테고리별로 투명하게 분리됩니다."
      },
      {
        q: "기술 지원, SLA 및 체험 후 데이터",
        a: "업무 시간 중 이메일/채팅을 통한 지원; Pro/Enterprise 패키지는 명확한 응답/해결 SLA와 함께 우선 채널을 제공합니다. 문서, 튜토리얼 비디오 및 주요 업데이트 시 정기 교육을 제공합니다. 체험 후 데이터는 업그레이드하거나 내보낼 수 있도록 30일간 보관됩니다; 기한 초과 시 시스템이 표준 프로세스에 따라 안전하게 삭제합니다."
      }
    ]
  },

  // Contact section
  contact: {
    title: "우리는 항상 지원할 준비가 되어 있습니다",
    subtitle: "요구사항에 따른 상담 및 데모를 받기 위해 정보를 입력하세요. 24시간 내 응답.",
    
    form: {
      title: "상담 요청 보내기",
      name: "성명",
      center: "운영 센터",
      email: "이메일",
      phone: "연락처 전화번호",
      message: "귀하의 요구사항",
      submit: "상담 요청 보내기",
      privacy: "우리는 귀하의 정보 보호를 약속합니다.",
      placeholders: {
        name: "Nguyen Van A",
        center: "예: XinK Language Center",
        email: "you@company.com",
        phone: "0862706996 또는 +84862706996",
        message: "간단한 설명 (수업 수, 필요한 기능, 예상 일정...)"
      },
      phoneFormat: "형식: 0XXXXXXXXX 또는 +84XXXXXXXXX"
    },

    info: {
      hotline: "핫라인",
      available24: "24/7 이용 가능",
      phone: "086.270.6996",
      email: "이메일",
      emailAddress: "edu@xinkgroup.com",
      address: "주소",
      addressText: "4층, ICT1 빌딩, 소프트웨어 파크 2호, Nhu Nguyet 거리, Hai Chau Ward, Da Nang City"
    }
  },

  // Footer
  footer: {
    description: "교육을 위한 종합 솔루션. 운영 최적화, 지속 가능한 성장.",
    company: "XINKGROUP 주식회사",
    companyInfo: "사업자등록번호: 0402241823. 다낭시 기획투자부에서 처음 발급한 사업자등록증, 2024년 7월 12일.",
    address: "주소: 베트남 다낭시 Ngu Hanh Son 구 My An Ward An Thuong 37 Lot 8B2",
    
    products: {
      title: "제품",
      features: "기능",
      pricing: "가격",
      testimonials: "후기",
      demo: "데모"
    },

    support: {
      title: "지원",
      faq: "FAQ",
      contact: "연락처",
      docs: "문서",
      guide: "가이드"
    },

    legal: {
      copyright: "© 2025 XinKGroup. 모든 권리 보유.",
      terms: "약관",
      privacy: "개인정보보호",
      policy: "정책"
    }
  },

  // Login modal
  login: {
    title: "체험을 위해 로그인",
    email: "이메일",
    password: "비밀번호",
    loginBtn: "로그인",
    noAccount: "계정이 없으신가요?",
    register: "등록",
    placeholders: {
      email: "you@company.com",
      password: "최소 6자"
    },
    showPassword: "표시",
    hidePassword: "숨기기"
  },

  // Chatbot
  chatbot: {
    open: "챗봇 열기",
    close: "닫기",
    title: "XinKEdu 채팅",
    placeholder: "메시지 입력...",
    send: "보내기",
    greeting: "안녕하세요! 어떻게 도와드릴까요?",
    response: "감사합니다! 곧 연락드리겠습니다."
  },

  // Common
  common: {
    required: "*",
    seeMore: "더 보기",
    collapse: "접기"
  },

  // Language names
  languages: {
    vi: "Tiếng Việt",
    en: "English",
    ko: "한국어",
    zh: "中文", 
    ja: "日本語"
  }
};

