export type Provider = {
  slug: string;
  name: string;
  credentials: string;
  category: "Psychiatry" | "Research" | "Nurse Practitioner" | "Counseling";
  yearsLabel?: string;
  initials: string;
  photo?: string;
  bio: string[];
  practiceDetails?: string[];
  note?: string;
};

export const providers: Provider[] = [
  {
    slug: "dr-lucas",
    name: "Dr. Marshall B. Lucas",
    credentials: "M.D. · Psychiatry · Founder",
    category: "Psychiatry",
    yearsLabel: "30 years",
    initials: "ML",
    photo: "https://static.wixstatic.com/media/d12b1c_f06b6544297f417a974f518a3c2786ea~mv2_d_2016_3016_s_2.png/v1/fill/w_900,h_1100,al_c,q_90/file.png",
    bio: [
      "Dr. Lucas is a graduate of The University of Texas at Austin and The University of Texas Medical School in Houston. He completed his psychiatric residency in Houston as well as fellowships in child and adolescent psychiatry. Dr. Lucas entered private practice in 1995. He is triple board certified by the ABPN in adult, child, adolescent and addiction psychiatry. Dr. Lucas sees patients at Woodland Springs Psychiatric Hospital.",
      "The strength of his practice is the embodiment of accurate assessments with responsible medication management. He believes in working with multi-disciplinary practitioners to create the most beneficial treatment plan for each of his patients.",
    ],
  },
  {
    slug: "dr-devos",
    name: "Dr. Cynthia DeVos",
    credentials: "M.D. · Child, Adolescent & Adult Psychiatry",
    category: "Psychiatry",
    yearsLabel: "28 years",
    initials: "CD",
    photo: "https://static.wixstatic.com/media/d12b1c_b61e31592133438ca0d3ce1de2ab15a4~mv2_d_2592_3872_s_4_2.png/v1/fill/w_900,h_1100,al_c,q_90/file.png",
    bio: [
      "Dr. DeVos is a graduate of Texas A&M University. She attended the University of Texas Medical School in Houston and went on to complete a residency in psychiatry and fellowship in child and adolescent psychiatry.",
      "Dr. DeVos is board certified by the American Board of Psychiatry and Neurology in both psychiatry and child and adolescent psychiatry. She began her outpatient private practice with Family Psychiatry of The Woodlands in 2001 working with adults, adolescents and children providing diagnostic assessment and medication management.",
    ],
    practiceDetails: [
      "Accepts ages 6 and up",
      "Office hours: Wednesday & Thursday mornings",
      "Private pay only — no insurance",
    ],
    note: "If the patient has a history of hospitalization, Dr. DeVos recommends seeking a provider who is affiliated with a hospital, as Dr. DeVos does not see patients in the hospital.",
  },
  {
    slug: "dr-goldsby",
    name: "Michael Goldsby",
    credentials: "Ph.D., CCRP · Director of Clinical Research",
    category: "Research",
    yearsLabel: "34 years",
    initials: "MG",
    photo: "https://static.wixstatic.com/media/d12b1c_3e08ac5e6fe54542aafbb04b2ac52956~mv2_d_2592_3872_s_4_2.png/v1/fill/w_900,h_1100,al_c,q_90/file.png",
    bio: [
      "Dr. Goldsby is the Director of Clinical Research at Family Psychiatry of The Woodlands. He earned a BS in Kinesiology at Texas A&M University, with post-graduate studies at Eastern Washington University, and Capella University where he earned a Master's Degree in Family Psychology and a Ph.D. in Clinical Psychology. Dr. Goldsby is a Certified Clinical Research Professional and a member of the Society of Clinical Research Associates. He has completed over 150 clinical trials involving psychotropic medications for various DSM-V diagnoses. He completed his clinical psychology residency in neuropsychology with emphasis on psychological testing.",
      "Dr. Goldsby has over 34 years of clinical psychology experience as Director of Clinical Research, Director of Adjunctive Therapy in three psychiatric hospitals in Texas, and in private psychiatric clinics and research facilities in Houston. He also served as Clinical Regulatory Director for a global medical device company and has extensive experience working with the FDA in Washington, D.C. on clinical trials development.",
      "Dr. Goldsby has authored over 75 publications as an expert book reviewer for an authoritative book review company for newly published health sciences books from the APA, Oxford University Press, and Guilford Press. He has been a keynote speaker at clinical trials investigator meetings for Bristol-Myers Squibb and other leading pharmaceutical companies. He has served as Chairman of the Board of Directors for the American Diabetes Association / Brazos Valley Affiliate and on the Board of Directors for the Bryan/College Station Athletic Federation / Texas A&M University.",
    ],
  },
  {
    slug: "kathleen-dalton",
    name: "Kathleen Dalton",
    credentials: "MSN, APN, PMHNP-BC",
    category: "Nurse Practitioner",
    initials: "KD",
    photo: "https://static.wixstatic.com/media/d12b1c_32fca9b9b1bb4f56bc3c23f4c135dab5~mv2.png/v1/fill/w_900,h_1100,al_c,q_90/file.png",
    bio: [
      "Kathleen received her Bachelors of Science in Nursing from Western Connecticut State University. She began her nursing career in cardiac care and has worked over the years in various medical settings. In 2007 Kathleen began her career in psychiatric nursing and shortly realized it was her passion. Kathleen went on to pursue her advanced psychiatric nursing degree at Midwestern State University receiving her Master of Science in Nursing. Kathleen graduated top of her Psychiatric Nurse Practitioner Program with a 4.0 GPA.",
      "Kathleen is ANCC Board Certified Psychiatric Mental Health Nurse Practitioner. Kathleen is a member of the American Association of Nurse Practitioners, the American Nurses Association and Sigma Theta Tau International Honor Society. Kathleen strives to provide patient-centered care by active listening to best assess and treat her patients' mental health needs.",
    ],
  },
  {
    slug: "brian-graham",
    name: "Brian D. Graham",
    credentials: "APRN, PMHNP-BC",
    category: "Nurse Practitioner",
    yearsLabel: "22 years",
    initials: "BG",
    photo: "https://static.wixstatic.com/media/d12b1c_61f4d02b81904d67b84c1acbaecaec71~mv2.png/v1/fill/w_900,h_1100,al_c,q_90/file.png",
    bio: [
      "Brian received his undergrad nursing degree in 1998 from IVY Tech State College in Bloomington, Indiana. He began his RN career in mental health as a charge nurse for two separate private freestanding psychiatric hospitals. To broaden his RN experiences, he spent several years between a premiere orthopedics unit in Greensboro, NC and a Cardiac Cath-Lab and emergency heart team in Albany, NY. In late 2005, he returned to Indiana and the mental health field as the House Nursing Supervisor for Bloomington Meadows Hospital, where he began his RN career.",
      "In early 2013, Brian achieved his Master of Science in Nursing from Indiana University where he graduated top of his Psychiatric Nurse Practitioner program and received the University's Academic Achievement Award for maintaining a 4.0 GPA. In school, he piloted a year long internship program that promoted an interdisciplinary healthcare model to provide adult psychiatric evaluations, psychotherapy, and pharmacotherapy through Midtown Community Health Centers in downtown Indianapolis, Indiana. After graduation, he worked for Meadows Hospital in Bloomington, Indiana and collaborated with the largest pediatric medical practice in southern Indiana, Riley Physicians, to provide psychiatric pharmacotherapy to their children of ages 5 years old and above. He was the primary care practitioner for Meadows' Partial Hospital Program, providing intensive psychotherapy and pharmacotherapy to teens aged 12 to 17 years old. Lastly, he also served as a primary provider on the hospital's acute inpatient child, teen, and adult units treating all varieties of mental health disorders and chemical dependency issues.",
      "Brian is ANCC Board Certified as a Family Psychiatric Mental Health Nurse Practitioner and is a member of the American Nurses Association, The American Psychiatric Nurses Association, and Sigma Theta Tau International honor society.",
    ],
    practiceDetails: ["Accepts ages 5 – 55"],
  },
  {
    slug: "comfort-ibe",
    name: "Comfort U. Ibe",
    credentials: "MSN, APN, PMHNP-BC",
    category: "Nurse Practitioner",
    initials: "CI",
    photo: "https://static.wixstatic.com/media/d12b1c_7d050f561d554eaa89c4b131deb22a53~mv2.png/v1/fill/w_900,h_1100,al_c,q_90/file.png",
    bio: [
      "Comfort graduated from Loyola University in Chicago, Illinois with a bachelor's degree in Nursing in August 2008. She was licensed and began her nursing career in the med/surg unit of Alden Town Manor Rehabilitation and Healthcare Center in Cicero, Illinois.",
      "She later relocated to Texas to work in the med/surg unit at Conroe Medical Center and then transitioned to becoming a Wellness Director in an assisted living and memory care facility in Conroe.",
      "Her love for psychiatry motivated her to work as an RN/RN relief supervisor in a forensic psychiatric hospital in Conroe where she worked for 8 years. While working as a psychiatric nurse, Comfort enrolled in a Master of Nursing in Psychiatry program and graduated in 2019 with a GPA of 4.0. During her two-year master's program, she completed a year long clinical internship in psychiatric evaluations, psychotherapy and pharmacotherapy across the lifespan. Comfort is ANCC Board Certified in Psychiatric Mental Health, a member of the American Nurses Association, and a member of Sigma Theta Tau International Honor Society.",
      "She also completed an MBA program from the University of Calabar, Nigeria.",
    ],
  },
  {
    slug: "aveleigh-cook",
    name: "Aveleigh Cook",
    credentials: "Psychiatric / Mental Health Nurse Practitioner",
    category: "Nurse Practitioner",
    initials: "AC",
    photo: "https://static.wixstatic.com/media/d12b1c_46aec634536049c687defa02afe3d000~mv2.jpg/v1/fill/w_900,h_1100,al_c,q_90/file.jpg",
    bio: [
      "Aveleigh Cook became an RN in Canada through the University of Western Ontario in London and practiced in several medical surgical areas as well as on an IV Team. She has two years of experience administering chemotherapy. She completed her Master's Degree in Nursing at The University of Texas Houston Health Science Center and has been a Board Certified Psychiatric/Mental Health Nurse Practitioner since 2009.",
      "She treats patients of all ages and has experience at all levels of care in both inpatient and outpatient settings, and also with The Harris County Juvenile Probation Department. She is working with the Houston Area Suicide Prevention Coalition. She enjoys reading, traveling, hiking, and swimming. She has volunteered in two missions, one in Guatemala and one in Cuba, and is joining a combined medical/faith mission in Peru in the near future.",
    ],
  },
  {
    slug: "melissa-everett",
    name: "Melissa Everett",
    credentials: "PMHNP-BC",
    category: "Nurse Practitioner",
    initials: "ME",
    photo: "https://static.wixstatic.com/media/d12b1c_01260c8a0c9a49a4b0c8746c058e12c2~mv2.png/v1/fill/w_900,h_1100,al_c,q_90/file.png",
    bio: [
      "Melissa Everett is an ANCC Board Certified Psychiatric Mental Health Nurse Practitioner with 19 years of nursing experience. She earned her Bachelor of Science in Nursing from California State University, Dominguez Hills, and her Master of Science in Nursing with a specialization in psychiatric mental health from Walden University.",
      "Melissa began her career in medical-surgical and critical care settings before transitioning to psychiatric nursing, where she found her passion in helping individuals navigate mental health challenges. She has experience working with adults managing conditions such as anxiety, depression, bipolar disorder, OCD, and ADHD.",
      "Melissa has received specialized training from the Beck Institute in Cognitive Behavioral Therapy (CBT) Essentials, as well as targeted CBT interventions for anxiety, depression, chronic pain, and weight loss. She has also pursued additional training focused on the evaluation and treatment of ADHD. Melissa is committed to providing compassionate, evidence-based, and collaborative care that empowers clients to achieve lasting mental wellness.",
    ],
  },
  {
    slug: "mark-lejsek",
    name: "Mark Lejsek",
    credentials: "APRN, PMHNP-BC",
    category: "Nurse Practitioner",
    yearsLabel: "15 years",
    initials: "ML",
    photo: "https://static.wixstatic.com/media/d12b1c_52e1975673804d69adccf589355db997~mv2.png/v1/fill/w_900,h_1100,al_c,q_90/file.png",
    bio: [
      "Mark graduated from Tennessee State University with his Bachelor of Science in Nursing in May 2002. He was then licensed and began work as a registered nurse in the Surgical Intensive Care Unit at Vanderbilt University Medical Center.",
      "One year later Mark enrolled in graduate school at Vanderbilt University's School of Nursing in the Psychiatric Mental Health Nurse Practitioner specialty. He also began to work full time as a registered nurse at Parthenon Pavilion Psychiatric Hospital in Nashville, TN. During Mark's two year graduate program, his practicum experience included outpatient community mental health centers, inpatient psychiatric hospitals and the Psychiatric Consult Liaison Service at Vanderbilt University Medical Center. Mark graduated with his Master of Science in Nursing in 2005. He became licensed as an Advanced Practice Nurse and is Board Certified by the American Nurses Credentialing Center as a Psychiatric Mental Health Nurse Practitioner. Mark has been with Family Psychiatry of The Woodlands since November 2005.",
    ],
    practiceDetails: ["Accepts ages 13 and up"],
  },
];

export function getProvider(slug: string): Provider | undefined {
  return providers.find((p) => p.slug === slug);
}
