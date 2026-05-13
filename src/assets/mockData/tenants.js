// export const mockTenants = [
//   {
//     id: "tnt_001",
//     name: "Acme Pvt Ltd",
//     email: "info@acme.com",
//     phone: "9999999999",
//     description:
//       "Acme Pvt Ltd is an enterprise software company delivering scalable ERP, CRM, and cloud-based business automation solutions globally.",

//     status: "ACTIVE",
//     plan: "PRO",
//     logo: "",

//     totalInvoices: 25,
//     pendingInvoices: 4,
//     totalCredit: 500000,
//     totalDebit: 120000,
//   },

//   {
//     id: "tnt_002",
//     name: "Beta Corp",
//     email: "contact@betacorp.com",
//     phone: "8888888888",
//     description:
//       "Beta Corp is a fast-growing startup specializing in SaaS products, digital transformation, and AI-driven business solutions for enterprises.",

//     status: "INACTIVE",
//     plan: "FREE",
//     logo: "",

//     totalInvoices: 8,
//     pendingInvoices: 2,
//     totalCredit: 120000,
//     totalDebit: 50000,
//   },

//   {
//     id: "tnt_003",
//     name: "Nova Systems",
//     email: "support@novasys.com",
//     phone: "7777777777",
//     description:
//       "Nova Systems builds enterprise-grade cloud infrastructure, cybersecurity tools, and modern backend solutions for global organizations.",

//     status: "ACTIVE",
//     plan: "ENTERPRISE",
//     logo: "",

//     totalInvoices: 40,
//     pendingInvoices: 6,
//     totalCredit: 900000,
//     totalDebit: 300000,
//   },

//   {
//     id: "tnt_004",
//     name: "Vertex Solutions",
//     email: "hello@vertex.com",
//     phone: "6666666666",
//     description:
//       "Vertex Solutions provides IT consulting, ERP development, and custom software services for mid-size and large enterprises worldwide.",

//     status: "ACTIVE",
//     plan: "PRO",
//     logo: "",

//     totalInvoices: 18,
//     pendingInvoices: 3,
//     totalCredit: 300000,
//     totalDebit: 90000,
//   },

//   {
//     id: "tnt_005",
//     name: "Orion Tech",
//     email: "info@oriontech.com",
//     phone: "5555555555",
//     description:
//       "Orion Tech is focused on AI, machine learning platforms, and intelligent automation systems for modern business optimization.",

//     status: "INACTIVE",
//     plan: "FREE",
//     logo: "",

//     totalInvoices: 10,
//     pendingInvoices: 1,
//     totalCredit: 150000,
//     totalDebit: 40000,
//   },

//   {
//     id: "tnt_006",
//     name: "Zenith Cloud",
//     email: "contact@zenithcloud.com",
//     phone: "4444444444",
//     description:
//       "Zenith Cloud delivers secure cloud hosting, DevOps services, and scalable infrastructure for startups and enterprises.",

//     status: "ACTIVE",
//     plan: "PRO",
//     logo: "",

//     totalInvoices: 32,
//     pendingInvoices: 5,
//     totalCredit: 600000,
//     totalDebit: 200000,
//   },

//   {
//     id: "tnt_007",
//     name: "Pulse Digital",
//     email: "support@pulsedigital.com",
//     phone: "3333333333",
//     description:
//       "Pulse Digital specializes in digital marketing, branding, and full-stack web application development for modern businesses.",

//     status: "ACTIVE",
//     plan: "PRO",
//     logo: "",

//     totalInvoices: 22,
//     pendingInvoices: 2,
//     totalCredit: 250000,
//     totalDebit: 80000,
//   },

//   {
//     id: "tnt_008",
//     name: "Fusion Works",
//     email: "hello@fusionworks.com",
//     phone: "2222222222",
//     description:
//       "Fusion Works builds enterprise SaaS platforms, data analytics tools, and scalable backend systems for business growth.",

//     status: "INACTIVE",
//     plan: "FREE",
//     logo: "",

//     totalInvoices: 12,
//     pendingInvoices: 3,
//     totalCredit: 180000,
//     totalDebit: 70000,
//   },

//   {
//     id: "tnt_009",
//     name: "Skyline Infotech",
//     email: "info@skyline.com",
//     phone: "1111111111",
//     description:
//       "Skyline Infotech provides IT outsourcing, software engineering, and cloud migration services for global clients.",

//     status: "ACTIVE",
//     plan: "ENTERPRISE",
//     logo: "",

//     totalInvoices: 50,
//     pendingInvoices: 8,
//     totalCredit: 1200000,
//     totalDebit: 400000,
//   },

//   {
//     id: "tnt_010",
//     name: "Quantum Labs",
//     email: "contact@quantumlabs.com",
//     phone: "1010101010",
//     description:
//       "Quantum Labs focuses on cutting-edge AI research, blockchain systems, and next-generation decentralized technologies.",

//     status: "ACTIVE",
//     plan: "ENTERPRISE",
//     logo: "",

//     totalInvoices: 60,
//     pendingInvoices: 10,
//     totalCredit: 1500000,
//     totalDebit: 500000,
//   },
// ];






// mockTenants.ts

// export interface Tenant {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   gstNumber: string;

//   address: {
//     line1: string;
//     city: string;
//     state: string;
//     country: string;
//     pincode: string;
//   };

//   description: string;

//   status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "PENDING";

//   plan: "FREE" | "PRO" | "ENTERPRISE";

//   logo: string;
//   website: string;
//   industry: string;

//   employees: number;

//   totalInvoices: number;
//   pendingInvoices: number;

//   totalCredit: number;
//   totalDebit: number;

//   gstEnabled: boolean;
//   gstType: "REGULAR" | "COMPOSITION" | "UNREGISTERED";
//   gstRate: number;

//   joinedAt: string;
// }

export const mockTenants= [
  {
    id: "tnt_001",
    name: "Acme Pvt Ltd",
    email: "info@acme.com",
    phone: "9999999999",
    gstNumber: "27ABCDE1234F1Z5",

    address: {
      line1: "Tech Park Phase 1",
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
      pincode: "400001",
    },

    description:
      "Acme Pvt Ltd is an enterprise software company delivering scalable ERP, CRM, and cloud-based business automation solutions globally.",

    status: "ACTIVE",
    plan: "PRO",

    logo: "",
    website: "https://acme.com",
    industry: "Enterprise Software",

    employees: 250,

    totalInvoices: 25,
    pendingInvoices: 4,

    totalCredit: 500000,
    totalDebit: 120000,

    gstEnabled: true,
    gstType: "REGULAR",
    gstRate: 18,

    joinedAt: "2024-01-10",
  },

  {
    id: "tnt_002",
    name: "Beta Corp",
    email: "contact@betacorp.com",
    phone: "8888888888",
    gstNumber: "29AAFCB4567K1Z2",

    address: {
      line1: "Startup Hub",
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
      pincode: "560001",
    },

    description:
      "Beta Corp is a fast-growing startup specializing in SaaS products, digital transformation, and AI-driven business solutions for enterprises.",

    status: "INACTIVE",
    plan: "FREE",

    logo: "",
    website: "https://betacorp.com",
    industry: "SaaS",

    employees: 45,

    totalInvoices: 8,
    pendingInvoices: 2,

    totalCredit: 120000,
    totalDebit: 50000,

    gstEnabled: true,
    gstType: "COMPOSITION",
    gstRate: 5,

    joinedAt: "2024-03-15",
  },

  {
    id: "tnt_003",
    name: "Nova Systems",
    email: "support@novasys.com",
    phone: "7777777777",
    gstNumber: "07AABCN7890L1Z8",

    address: {
      line1: "Cyber Tower",
      city: "New Delhi",
      state: "Delhi",
      country: "India",
      pincode: "110001",
    },

    description:
      "Nova Systems builds enterprise-grade cloud infrastructure, cybersecurity tools, and modern backend solutions for global organizations.",

    status: "ACTIVE",
    plan: "ENTERPRISE",

    logo: "",
    website: "https://novasys.com",
    industry: "Cybersecurity",

    employees: 500,

    totalInvoices: 40,
    pendingInvoices: 6,

    totalCredit: 900000,
    totalDebit: 300000,

    gstEnabled: true,
    gstType: "REGULAR",
    gstRate: 18,

    joinedAt: "2023-11-01",
  },

  {
    id: "tnt_004",
    name: "Vertex Solutions",
    email: "hello@vertex.com",
    phone: "6666666666",
    gstNumber: "24AACCV2345P1Z3",

    address: {
      line1: "Business Square",
      city: "Ahmedabad",
      state: "Gujarat",
      country: "India",
      pincode: "380001",
    },

    description:
      "Vertex Solutions provides IT consulting, ERP development, and custom software services for mid-size and large enterprises worldwide.",

    status: "ACTIVE",
    plan: "PRO",

    logo: "",
    website: "https://vertex.com",
    industry: "IT Consulting",

    employees: 180,

    totalInvoices: 18,
    pendingInvoices: 3,

    totalCredit: 300000,
    totalDebit: 90000,

    gstEnabled: true,
    gstType: "REGULAR",
    gstRate: 18,

    joinedAt: "2024-02-20",
  },

  {
    id: "tnt_005",
    name: "Orion Tech",
    email: "info@oriontech.com",
    phone: "5555555555",
    gstNumber: "33AACCO6789Q1Z7",

    address: {
      line1: "Innovation Hub",
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      pincode: "600001",
    },

    description:
      "Orion Tech is focused on AI, machine learning platforms, and intelligent automation systems for modern business optimization.",

    status: "INACTIVE",
    plan: "FREE",

    logo: "",
    website: "https://oriontech.com",
    industry: "Artificial Intelligence",

    employees: 75,

    totalInvoices: 10,
    pendingInvoices: 1,

    totalCredit: 150000,
    totalDebit: 40000,

    gstEnabled: true,
    gstType: "COMPOSITION",
    gstRate: 5,

    joinedAt: "2024-04-12",
  },

  {
    id: "tnt_006",
    name: "Zenith Cloud",
    email: "contact@zenithcloud.com",
    phone: "4444444444",
    gstNumber: "19AACZ9876R1Z1",

    address: {
      line1: "Cloud Avenue",
      city: "Kolkata",
      state: "West Bengal",
      country: "India",
      pincode: "700001",
    },

    description:
      "Zenith Cloud delivers secure cloud hosting, DevOps services, and scalable infrastructure for startups and enterprises.",

    status: "ACTIVE",
    plan: "PRO",

    logo: "",
    website: "https://zenithcloud.com",
    industry: "Cloud Infrastructure",

    employees: 220,

    totalInvoices: 32,
    pendingInvoices: 5,

    totalCredit: 600000,
    totalDebit: 200000,

    gstEnabled: true,
    gstType: "REGULAR",
    gstRate: 18,

    joinedAt: "2023-09-18",
  },

  {
    id: "tnt_007",
    name: "Pulse Digital",
    email: "support@pulsedigital.com",
    phone: "3333333333",
    gstNumber: "32AABCP4321L1Z6",

    address: {
      line1: "Media Street",
      city: "Kochi",
      state: "Kerala",
      country: "India",
      pincode: "682001",
    },

    description:
      "Pulse Digital specializes in digital marketing, branding, and full-stack web application development for modern businesses.",

    status: "ACTIVE",
    plan: "PRO",

    logo: "",
    website: "https://pulsedigital.com",
    industry: "Digital Marketing",

    employees: 95,

    totalInvoices: 22,
    pendingInvoices: 2,

    totalCredit: 250000,
    totalDebit: 80000,

    gstEnabled: true,
    gstType: "REGULAR",
    gstRate: 18,

    joinedAt: "2024-01-05",
  },

  {
    id: "tnt_008",
    name: "Fusion Works",
    email: "hello@fusionworks.com",
    phone: "2222222222",
    gstNumber: "36AACCF6543M1Z9",

    address: {
      line1: "Tech Valley",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      pincode: "500001",
    },

    description:
      "Fusion Works builds enterprise SaaS platforms, data analytics tools, and scalable backend systems for business growth.",

    status: "INACTIVE",
    plan: "FREE",

    logo: "",
    website: "https://fusionworks.com",
    industry: "Data Analytics",

    employees: 60,

    totalInvoices: 12,
    pendingInvoices: 3,

    totalCredit: 180000,
    totalDebit: 70000,

    gstEnabled: true,
    gstType: "COMPOSITION",
    gstRate: 5,

    joinedAt: "2024-05-11",
  },

  {
    id: "tnt_009",
    name: "Skyline Infotech",
    email: "info@skyline.com",
    phone: "1111111111",
    gstNumber: "08AACCS7654H1Z4",

    address: {
      line1: "Corporate Plaza",
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
      pincode: "302001",
    },

    description:
      "Skyline Infotech provides IT outsourcing, software engineering, and cloud migration services for global clients.",

    status: "ACTIVE",
    plan: "ENTERPRISE",

    logo: "",
    website: "https://skyline.com",
    industry: "IT Outsourcing",

    employees: 650,

    totalInvoices: 50,
    pendingInvoices: 8,

    totalCredit: 1200000,
    totalDebit: 400000,

    gstEnabled: true,
    gstType: "REGULAR",
    gstRate: 18,

    joinedAt: "2023-07-01",
  },

  {
    id: "tnt_010",
    name: "Quantum Labs",
    email: "contact@quantumlabs.com",
    phone: "1010101010",
    gstNumber: "09AACQ2345T1Z0",

    address: {
      line1: "Research Center",
      city: "Lucknow",
      state: "Uttar Pradesh",
      country: "India",
      pincode: "226001",
    },

    description:
      "Quantum Labs focuses on cutting-edge AI research, blockchain systems, and next-generation decentralized technologies.",

    status: "ACTIVE",
    plan: "ENTERPRISE",

    logo: "",
    website: "https://quantumlabs.com",
    industry: "AI Research",

    employees: 800,

    totalInvoices: 60,
    pendingInvoices: 10,

    totalCredit: 1500000,
    totalDebit: 500000,

    gstEnabled: true,
    gstType: "REGULAR",
    gstRate: 18,

    joinedAt: "2023-05-15",
  },
];