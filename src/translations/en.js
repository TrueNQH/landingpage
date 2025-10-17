// English translations
export const en = {
  // Navigation
  nav: {
    features: "Features",
    pricing: "Pricing", 
    testimonials: "Testimonials",
    faq: "FAQ",
    contact: "Contact",
    contactBtn: "Contact",
    tryFree: "Try Free"
  },

  // Hero section
  hero: {
    badge: "Smart Education Platform",
    title1: "Smart Education",
    title2: "Platform", 
    title3: "Powered by AI",
    description: "For language centers to optimize operations and sustainable growth.",
    languages: "(EN, JP, KR, CN)",
    tryFreeBtn: "Try Free",
    getConsultation: "Get Consultation"
  },

  // Metrics section
  metrics: {
    title: "Impressive Numbers",
    subtitle: "Numbers that prove XinKEdu's effectiveness",
    centers: {
      label: "Centers Using",
      value: "500+",
      description: "Trusted education centers"
    },
    users: {
      label: "Users", 
      value: "10k+",
      description: "Active users"
    },
    performance: {
      label: "Performance Increase",
      value: "+32%", 
      description: "Operational efficiency"
    }
  },

  // Features section
  features: {
    title: "Outstanding Features",
    subtitle: "Comprehensive solution for all educational management needs",
    
    aiExam: {
      title: "AI Exam Creation (Fast & Smart)",
      desc: "Automatically generate exams by topic, difficulty, learning outcomes. Support multiple question types and automatic grading.",
      bullets: [
        "Generate questions: Multiple choice, True/False, Fill-in-blank, Essay",
        "Adjust difficulty, skills & learning outcomes (Bloom/CEFR)",
        "Question bank by topic, tags & levels",
        "Auto prevent duplicate questions & shuffle answers",
        "Answer explanations, grading suggestions & scoring"
      ]
    },

    ocrExam: {
      title: "Create Exams from Images (OCR)",
      desc: "Capture/upload paper exam images, OCR system & format standardization, export exams in seconds.",
      bullets: [
        "Accurate Vietnamese/EN text recognition, noise resistant",
        "Auto crop/deskew & background cleaning",
        "Standardize layout, separate questions/answers",
        "Create question bank from images with single capture",
        "Random options & auto numbering"
      ]
    },

    aiAssistant: {
      title: "AI Teaching Assistant Live & Class Analysis",
      desc: "Real-time monitoring, interaction suggestions, highlight marking & class report export.",
      bullets: [
        "Suggest quizzes/exercises based on class progress",
        "Ask AI about knowledge just taught for reinforcement",
        "Monitor interaction levels & alert weak students",
        "Mark highlights by timestamp",
        "Quick feedback collection (poll) & opinion summary"
      ]
    },

    checkin: {
      title: "Teaching Check-in / Check-out",
      desc: "One-tap teaching session attendance: GPS + instant notes.",
      bullets: [
        "Check-in by location & time, offline support",
        "Verification photos & teaching session proof notes",
        "Late/early departure alerts & attendance statistics",
        "Auto payroll reconciliation by session/schedule",
        "Export attendance data for salary calculation"
      ]
    },

    schedule: {
      title: "Teacher Scheduling",
      desc: "Visual class scheduling, avoid conflicts and auto reminders via Zalo/Email.",
      bullets: [
        "Drag-drop classes by week/month, schedule templates",
        "Real-time room/time/teacher conflict detection",
        "Manage multiple campuses/classrooms & equipment",
        "Filter by subject, level, shift, teacher & status",
        "Sync schedule with AI reminders, email/Zalo"
      ]
    },

    exam: {
      title: "Online Testing & Score Viewing",
      desc: "Students take tests on web/mobile, light anti-cheating, view scores & solutions immediately after submission.",
      bullets: [
        "Scheduled exam rooms, exam codes & time limits",
        "Light camera/mic monitoring, tab-out detection",
        "Auto grading, instant score & ranking display",
        "View answers, solutions & wrong answer analysis",
        "Conditional retake (attempts, score threshold, different bank)"
      ]
    },

    special: {
      title: "Special Features",
      subtitle: "Advanced tools to help centers operate smoothly and transparently.",
      
      crm: {
        title: "CRM & Human Resources Management",
        desc: "Track enrollment pipeline, manage profiles & role permissions; sync KPIs and payroll from teaching sessions.",
        bullets: [
          "Enrollment pipeline by stage & probability",
          "Lead scoring, lead sources & automated nurturing",
          "Teacher/staff profiles, contracts & certificates",
          "Detailed permissions by role & unit",
          "Payroll/KPI sync from check-in & teaching schedule"
        ]
      },

      accounting: {
        title: "Accounting Support",
        desc: "Manage tuition fees, debts; revenue/expense reports by class-course; export transparent reconciliation files.",
        bullets: [
          "Create invoices/receipts by period, package",
          "Track debts & multi-channel automatic fee reminders",
          "Transparent receipts/expenses & fund journal",
          "Revenue-expense reports by class/course/campus",
          "Export accounting files (Excel/CSV) & quick reconciliation"
        ]
      }
    }
  },

  // Pricing section
  pricing: {
    title: "Service Pricing",
    subtitle: "Choose a package suitable for your center's development stage.",
    
    plans: {
      free: {
        ribbon: "Free Trial",
        price: "Free",
        unit: "",
        note: "Full features but limited resources (storage, AI calls/day, bandwidth).",
        features: [
          "AI Document Analysis",
          "AI Exam Creation from Documents",
          "AI Exam Creation from Images (OCR)",
          "AI Class Analysis",
          "AI Student Performance Assessment",
          "Editable Questions",
          "Publish / Unpublish Exams",
          "Live Teaching (real-time instruction)",
          "View Teaching Schedule",
          "Teaching Check-in",
          "Select and Take Tests",
          "View Scores and Answers",
          "Auto Create Practice Tests",
          "View Teacher Published Materials",
          "Schedule Teachers",
          "Record Teaching Sessions",
          "Manage Teachers",
          "Manage Students",
          "Manage Classes",
          "Manage Staff Profiles"
        ]
      },
      
      basic: {
        ribbon: "Basic",
        price: "300",
        unit: "000đ",
        note: "Core feature set for small centers.",
        features: [
          "Process PDF/TXT uploads < 10MB",
          "AI Document Analysis",
          "AI Exam Creation from Documents",
          "Multiple Question Types",
          "Publish / Unpublish Exams",
          "Select and Take Tests",
          "View Scores and Answers",
          "Schedule Teachers",
          "Record Teaching Sessions"
        ]
      },

      advance: {
        ribbon: "Advance",
        price: "3.000",
        unit: "000đ",
        note: "Extended for proactive classroom operations.",
        features: [
          "Includes most Basic features",
          "Editable Questions",
          "Teaching Check-in",
          "AI Exam Creation from Images (OCR)",
          "Live Teaching (real-time instruction)",
          "AI Class Analysis",
          "Manage Teachers / Students / Classes"
        ]
      },

      pro: {
        ribbon: "Pro",
        price: "5.000",
        unit: "000đ",
        note: "Additional advanced operation modules.",
        features: [
          "Includes most Advance features",
          "Process PDF/TXT uploads > 10MB",
          "AI Student Performance Assessment",
          "Auto Create Practice Tests by Chapter/Lesson",
          "View Teacher Published Materials",
          "View Personal Learning Progress Reports",
          "Manage Staff Profiles",
          "Accounting",
          "Consultation Chatbot"
        ]
      }
    },
    
    buyNow: "CONTACT US",
    contactUs: "CONTACT US"
  },

  // Testimonials section
  testimonials: {
    title: "What Customers Say?",
    subtitle: "Real feedback from centers that have implemented EduCRM",
    
    items: [
      {
        name: "Nguyen Huong",
        title: "Director of Alpha Center",
        quote: "EduCRM helps our team reduce 40% data entry time and better track students. User-friendly interface, easy to use.",
        avatar: "NH"
      },
      {
        name: "Tran Minh",
        title: "Enrollment Manager",
        quote: "Clear pipeline, conversion rate increased significantly after just 2 weeks of use. Customer support is very enthusiastic.",
        avatar: "TM"
      },
      {
        name: "Le Thi Mai",
        title: "Principal of Secondary School",
        quote: "Class management and schedule features are very convenient. Helps schools operate more efficiently.",
        avatar: "LM"
      }
    ]
  },

  // FAQ section
  faq: {
    title: "Frequently Asked Questions",
    
    items: [
      {
        q: "Implementation & Timeline",
        a: "XinKEdu implements according to standard process including quick needs assessment, sample configuration (classes, subjects, teachers, permissions), initial data entry and user training. With cloud package, time is usually 1-3 working days. If there are specific customizations or integration with existing systems, we plan clear acceptance milestones to ensure progress."
      },
      {
        q: "Data Security & Compliance",
        a: "Data is encrypted in transit and at rest, role-based permissions (RBAC), access logging and regular backups. We apply principle of least privilege, regular testing and anomaly alerts. Infrastructure separated by customer; option for storage region near Vietnam. Backup/restore process documentation ready to provide when activated."
      },
      {
        q: "AI Features & OCR Exam Creation",
        a: "AI supports teaching content suggestions, quick question bank creation by difficulty level, and class analysis to provide highlights, action items. With OCR, you upload images/PDFs, system recognizes and converts to editable questions, preserving natural subject symbols. Can export to Word/PDF or directly to question bank."
      },
      {
        q: "SSO Integration, API & Data Import",
        a: "System supports Google/Microsoft SSO, email domain binding and internal authentication combination if needed. We provide REST API with webhooks to connect CRM/accounting/LMS. Initial data import uses CSV/XLSX/Google Sheets with visual field mapping, error checking when uploading and quick fix guidance before recording."
      },
      {
        q: "Scale, Performance & Permissions",
        a: "XinKEdu serves from hundreds to tens of thousands of students. Multi-campus with reports by campus or consolidated. Detailed permissions by role and scope (grade level, campus), support approval for sensitive operations. Flexible architecture helps scale resources according to actual needs without interrupting teaching activities."
      },
      {
        q: "Trial, Pricing & Invoicing",
        a: "You get 14-day trial with core features. When upgrading, all trial data is preserved. We support monthly/yearly payment, discounts for long-term payment and non-profit educational organizations. Full VAT invoice export; all customization costs (if any) are transparently separated by category."
      },
      {
        q: "Technical Support, SLA & Post-Trial Data",
        a: "Support via email/chat during business hours; Pro/Enterprise packages have priority channel with clear response/resolution SLA. We provide documentation, tutorial videos and regular training when major updates. After trial, data is kept 30 days for you to upgrade or export; after deadline, system safely deletes according to standard process."
      }
    ]
  },

  // Contact section
  contact: {
    title: "We're Always Ready to Support",
    subtitle: "Fill in information to receive consultation & demo according to your needs. Response within 24h.",
    
    form: {
      title: "Send Consultation Request",
      name: "Full Name",
      center: "Operating Center",
      email: "Email",
      phone: "Contact Phone Number",
      message: "Your Needs",
      submit: "Send Consultation Request",
      privacy: "We commit to protecting your information.",
      placeholders: {
        name: "Nguyen Van A",
        center: "E.g: XinK Language Center",
        email: "you@company.com",
        phone: "0862706996 or +84862706996",
        message: "Brief description (number of classes, needed features, expected timeline...)"
      },
      phoneFormat: "Format: 0XXXXXXXXX or +84XXXXXXXXX"
    },

    info: {
      hotline: "Hotline",
      available24: "24/7 Available",
      phone: "086.270.6996",
      email: "Email",
      emailAddress: "edu@xinkgroup.com",
      address: "Address",
      addressText: "4th Floor, ICT1 Building, Software Park No. 2 Nhu Nguyet Street, Hai Chau Ward, Da Nang City"
    }
  },

  // Footer
  footer: {
    description: "Comprehensive solution for education. Optimize operations, sustainable growth.",
    company: "XINKGROUP JOINT STOCK COMPANY",
    companyInfo: "Business registration number: 0402241823. Business registration certificate issued by Da Nang Department of Planning and Investment for the first time on 12/07/2024.",
    address: "Address: Lot 8B2, An Thuong 37, My An Ward, Ngu Hanh Son District, Da Nang City, Vietnam",
    
    products: {
      title: "Products",
      features: "Features",
      pricing: "Pricing",
      testimonials: "Testimonials",
      demo: "Demo"
    },

    support: {
      title: "Support",
      faq: "FAQ",
      contact: "Contact",
      docs: "Documentation",
      guide: "Guide"
    },

    legal: {
      copyright: "© 2025 XinKGroup. All rights reserved.",
      terms: "Terms",
      privacy: "Privacy",
      policy: "Policy"
    }
  },

  // Login modal
  login: {
    title: "Login to Try",
    email: "Email",
    password: "Password",
    loginBtn: "Login",
    noAccount: "Don't have an account?",
    register: "Register",
    placeholders: {
      email: "you@company.com",
      password: "Minimum 6 characters"
    },
    showPassword: "Show",
    hidePassword: "Hide"
  },

  // Chatbot
  chatbot: {
    open: "Open chatbot",
    close: "Close",
    title: "XinKEdu Chat",
    placeholder: "Enter message...",
    send: "Send",
    greeting: "Hello! How can I help you?",
    response: "Thank you! We will contact you soon."
  },

  // Common
  common: {
    required: "*",
    seeMore: "See More",
    collapse: "Collapse"
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

