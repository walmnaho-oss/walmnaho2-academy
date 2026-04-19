export interface Course {
  id: string;
  slug: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  overview: { ar: string; en: string };
  outcomes: { ar: string[]; en: string[] };
  category: "Quran" | "Arabic" | "Islamic Studies" | "Kids";
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  duration: { ar: string; en: string };
  rating: number;
  students: number;
  image: string;
  price: { ar: string; en: string };
  isFeatured?: boolean;
  durationDetails: {
    title: { ar: string; en: string };
    hours: number;
    lessons: number;
  }[];
}

export const categories = ["Quran", "Arabic", "Islamic Studies", "Kids"] as const;

export const courses: Course[] = [
  {
    id: "c1",
    title: { ar: "تلاوة القرآن مع التجويد", en: "Quran Recitation with Tajweed" },
    slug: "quran-recitation-with-tajweed",
    description: {
      ar: "حقق الإتقان في فن التلاوة بدقة ورنين روحي وكمال تقني.",
      en: "Achieve mastery in the art of Tilawah with precision, spiritual resonance, and technical perfection.",
    },
    overview: {
      ar: "انطلق في رحلة تحولية إلى قلب الكلمة الإلهية. تم تصميم هذه الدورة للباحثين عن التميز، حيث تغمرك في علم التجويد العميق. تحت إشراف نخبة من العلماء، ستصقل كل مخرج حرف لتردد صدى تلاوة النبي ﷺ.",
      en: "Embark on a transformative journey into the heart of the Divine Word. Designed for seekers of excellence, this masterclass immerses you in the profound science of Tajweed. Under distinguished scholars, you will refine every articulation to echo the Prophet's ﷺ recitation.",
    },
    outcomes: {
      ar: [
        "النطق السليم لجميع الحروف العربية من مخارجها الدقيقة.",
        "الإتقان الكامل لأحكام النون والميم الساكنة والمدود.",
        "تطوير أسلوب تلاوة شجي ومؤثر روحياً.",
        "القدرة على تحديد وتطبيق قواعد التجويد في الوقت الفعلي.",
        "ثقة عميقة في إمامة الصلاة والتلاوات العامة.",
      ],
      en: [
        "Perfect articulation of all Arabic letters from their precise points of origin.",
        "Complete mastery over the rules of Noon and Meem Sakinah, and Mudood.",
        "Development of a melodic and spiritually resonant recitation style.",
        "Ability to identify and apply complex tajweed rules in real-time during recitation.",
        "A deep-seated confidence in leading prayers and public recitations.",
      ],
    },
    durationDetails: [
      { title: { ar: "أسس مخارج الحروف", en: "Foundations of Articulation" }, lessons: 12, hours: 18 },
      { title: { ar: "التجويد التطبيقي", en: "Applied Tajweed Mechanics" }, lessons: 15, hours: 22 },
      { title: { ar: "الدقة واللحن والطلاقة", en: "Nuance, Melody & Fluency" }, lessons: 10, hours: 15 },
    ],
    category: "Quran",
    level: "Beginner",
    duration: { ar: "3 أشهر", en: "3 Months" },
    rating: 4.9,
    students: 120,
    image: "/images/courses/quran-recitation.webp",
    price: { ar: "$49/شهرياً", en: "$49/mo" },
    isFeatured: true,
  },
  {
    id: "c2",
    title: { ar: "اللغة العربية الشاملة", en: "Comprehensive Arabic" },
    slug: "comprehensive-arabic",
    description: {
      ar: "اكتشف الكنوز اللغوية للقرآن والتراث الكلاسيكي.",
      en: "Uncover the linguistic treasures of the Quran and the classical heritage.",
    },
    overview: {
      ar: "اللغة العربية هي المفتاح لفهم التراث المجيد. يوفر هذا البرنامج الركائز الأساسية للتنقل في اللغة العربية الفصحى الحديثة بأناقة.",
      en: "The Arabic language is a key to understanding a glorious heritage. This program provides the foundational pillars to navigate Modern Standard Arabic with elegance.",
    },
    outcomes: {
      ar: [
        "قراءة وكتابة الأبجدية العربية بثقة.",
        "إتقان التراكيب الحوارية الأساسية.",
        "فهم منطق بناء الجملة العربية.",
        "تحديد جذور الكلمات واشتقاقاتها.",
        "التواصل بفعالية في السياقات الأكاديمية.",
      ],
      en: [
        "Confidently read and write the Arabic alphabet with proper calligraphy.",
        "Master basic conversational structures and essential daily vocabulary.",
        "Understand the fundamental logic of Arabic sentence construction.",
        "Develop the ability to identify core root words and their derivations.",
        "Communicate effectively in standard social and academic settings.",
      ],
    },
    durationDetails: [
      { title: { ar: "الأبجدية وعلم الأصوات", en: "The Alphabet & Phonology" }, lessons: 20, hours: 30 },
      { title: { ar: "الركائز اللغوية والنحو", en: "Linguistic Pillars & Grammar" }, lessons: 24, hours: 36 },
      { title: { ar: "الانغماس الحواري", en: "Conversational Immersion" }, lessons: 16, hours: 24 },
    ],
    category: "Arabic",
    level: "Beginner",
    duration: { ar: "6 أشهر", en: "6 Months" },
    rating: 4.8,
    students: 85,
    image: "/images/courses/arabic-level1.webp",
    price: { ar: "$59/شهرياً", en: "$59/mo" },
    isFeatured: true,
  },
  {
    id: "c3",
    title: { ar: "فقه العبادات", en: "Fiqh of Worship" },
    slug: "fiqh-of-worship",
    description: {
      ar: "عمق عبادتك من خلال الفهم الدقيق للأحكام الشرعية.",
      en: "Deepen your devotion through the precise understanding of sacred laws.",
    },
    overview: {
      ar: "فهم منهجية العبادة هو الخطوة الأولى نحو الإخلاص القلبي. تقدم هذه الدورة استكشافاً منظماً لفقه الطهارة والصلاة.",
      en: "Understanding the methodology of worship is the first step toward spiritual sincerity. This course provides a structured exploration of the Fiqh of Taharah and Salah.",
    },
    outcomes: {
      ar: [
        "إتقان أحكام الوضوء والغسل والتيمم.",
        "فهم أركان وشروط وسنن الصلاة اليومية.",
        "تعلم التعامل مع سجود السهو.",
        "استكشاف الفروق بين المذاهب الكبرى.",
        "مواءمة الممارسة الخارجية مع التميز الروحي.",
      ],
      en: [
        "Master the detailed rulings of Wudu, Ghusl, and Tayammum.",
        "Understand the essentials, conditions, and sunnahs of daily prayer.",
        "Learn to properly handle Sujud al-Sahw.",
        "Explore the differences between the major Madhabs.",
        "Align your outer practice with inner spiritual excellence.",
      ],
    },
    durationDetails: [
      { title: { ar: "محراب الطهارة", en: "The Sanctuary of Purification" }, lessons: 10, hours: 15 },
      { title: { ar: "أركان الصلاة", en: "Pillars of Salah" }, lessons: 14, hours: 21 },
      { title: { ar: "صقل عبادتك", en: "Refining Your Devotion" }, lessons: 8, hours: 12 },
    ],
    category: "Islamic Studies",
    level: "Intermediate",
    duration: { ar: "4 أشهر", en: "4 Months" },
    rating: 5.0,
    students: 60,
    image: "/images/courses/fiqh-worship.webp",
    price: { ar: "$45/شهرياً", en: "$45/mo" },
    isFeatured: true,
  },
  {
    id: "c4",
    title: { ar: "القاعدة النورانية للأطفال", en: "Noorani Qaida for Kids" },
    slug: "noorani-qaida-for-kids",
    description: {
      ar: "مقدمة حانية للحروف الإلهية تُغرس بالحب وتُوجّه بالصبر.",
      en: "A nurturing introduction to the divine letters, planted with love and guided by patience.",
    },
    overview: {
      ar: "لمتعلمينا الصغار، تبدأ الرحلة بالقاعدة النورانية. يستخدم معلّمونا مزيجاً من الصوتيات التقليدية والتفاعل المرتكز على الطفل.",
      en: "For our youngest learners, the journey begins with the Noorani Qaida. Our certified mentors use a blend of traditional phonetics and engaging, child-centered interaction.",
    },
    outcomes: {
      ar: [
        "التعرف والنطق المثالي لجميع الحروف العربية.",
        "فهم الحركات الأساسية وتوصيل الحروف.",
        "تطوير إيقاع القراءة الصحيح.",
        "حفظ الأدعية اليومية والسور القصيرة.",
        "بناء رابط عاطفي مع اللغة العربية.",
      ],
      en: [
        "Recognition and perfect pronunciation of all Arabic letters.",
        "Understanding of basic vowel movements and connecting letters.",
        "Development of correct reading rhythm and initial Tajweed familiarity.",
        "Memorization of foundational daily Duas and short Surahs.",
        "An emotional and spiritual bond with the Arabic language.",
      ],
    },
    durationDetails: [
      { title: { ar: "عالم الحروف", en: "The World of Letters" }, lessons: 15, hours: 22 },
      { title: { ar: "الحركات والروابط", en: "Vowels & Connections" }, lessons: 15, hours: 22 },
      { title: { ar: "بداية التلاوة", en: "Beginning to Recite" }, lessons: 10, hours: 15 },
    ],
    category: "Kids",
    level: "Beginner",
    duration: { ar: "3 أشهر", en: "3 Months" },
    rating: 4.9,
    students: 200,
    image: "/images/courses/kids-qaida.webp",
    price: { ar: "$39/شهرياً", en: "$39/mo" },
    isFeatured: true,
  },
  {
    id: "c5",
    title: { ar: "حفظ القرآن الكريم", en: "Quran Memorization (Hifz)" },
    slug: "quran-memorization-hifz",
    description: {
      ar: "برنامج مكثف لحفظ القرآن الكريم مع متابعة مستمرة ومراجعة منهجية.",
      en: "An intensive program for memorizing the Holy Quran with continuous follow-up and systematic review.",
    },
    overview: {
      ar: "برنامج حفظ القرآن يوفر بيئة داعمة للحفظ المتقن مع خطة مخصصة لكل طالب حسب مستواه وقدرته.",
      en: "Our Hifz program offers a supportive environment for proficient memorization with a customized plan for each student based on their level and capacity.",
    },
    outcomes: {
      ar: [
        "حفظ القرآن الكريم بالتجويد.",
        "مراجعة منظمة للأجزاء المحفوظة.",
        "تقوية الحفظ بالفهم والتدبر.",
        "بناء روتين يومي فعال للحفظ.",
        "المتابعة المستمرة مع شيخ متخصص.",
      ],
      en: [
        "Memorize the Holy Quran with proper Tajweed.",
        "Systematic review of memorized portions.",
        "Strengthen memorization through understanding.",
        "Build an effective daily memorization routine.",
        "Continuous follow-up with a dedicated scholar.",
      ],
    },
    durationDetails: [
      { title: { ar: "التأسيس والتهيئة", en: "Foundation & Preparation" }, lessons: 10, hours: 15 },
      { title: { ar: "الحفظ المكثف", en: "Intensive Memorization" }, lessons: 30, hours: 45 },
      { title: { ar: "المراجعة والتثبيت", en: "Review & Consolidation" }, lessons: 20, hours: 30 },
    ],
    category: "Quran",
    level: "All Levels",
    duration: { ar: "مرن", en: "Flexible" },
    rating: 5.0,
    students: 150,
    image: "/images/courses/hifz.webp",
    price: { ar: "$55/شهرياً", en: "$55/mo" },
    isFeatured: true,
  },
  {
    id: "c6",
    title: { ar: "الحديث: الأربعون النووية", en: "Hadith: 40 Nawawi" },
    slug: "hadith-40-nawawi",
    description: {
      ar: "دراسة الأحاديث الأساسية المتعلقة بالمبادئ الإسلامية.",
      en: "Study the foundational sayings of the Prophet ﷺ related to core Islamic principles.",
    },
    overview: {
      ar: "شرح وافٍ للأحاديث الأربعين التي جمعها الإمام النووي، والتي تعتبر قواعد الدين الأساسية.",
      en: "A comprehensive explanation of the forty Hadiths collected by Imam al-Nawawi, considered the foundational rules of religion.",
    },
    outcomes: {
      ar: [
        "حفظ وفهم الأحاديث الأربعين النووية.",
        "استخلاص الفوائد الفقهية والتربوية.",
        "فهم منهج الإمام النووي في الجمع.",
        "تطبيق مضامين الأحاديث في الحياة اليومية.",
        "التعرف على علم مصطلح الحديث.",
      ],
      en: [
        "Memorize and understand the 40 Nawawi Hadiths.",
        "Extract juristic and educational benefits from each hadith.",
        "Understand Imam Nawawi's methodology in collecting hadiths.",
        "Apply hadith teachings in daily life.",
        "Introduction to the science of Hadith terminology.",
      ],
    },
    durationDetails: [
      { title: { ar: "أحاديث العبادات والنيات", en: "Hadiths of Worship & Intentions" }, lessons: 10, hours: 15 },
      { title: { ar: "أحاديث المعاملات والأخلاق", en: "Hadiths of Conduct & Ethics" }, lessons: 10, hours: 15 },
      { title: { ar: "المراجعة والتطبيق", en: "Review & Application" }, lessons: 6, hours: 9 },
    ],
    category: "Islamic Studies",
    level: "Beginner",
    duration: { ar: "3 أشهر", en: "3 Months" },
    rating: 4.9,
    students: 75,
    image: "/images/courses/hadith-40-nawawi.webp",
    price: { ar: "$40/شهرياً", en: "$40/mo" },
    isFeatured: true,
  },
];
