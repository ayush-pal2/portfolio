export const profile = {
  name: 'Ayush',
  title: 'Backend Engineer',
  location: 'Ghaziabad, UP',
  email: 'ayushpal8ps@gmail.com',
  phone: '+91 7982164228',
  resumeUrl: '/Ayush_Resume.pdf',
  tagline:
    'Backend engineer focused on building reliable, well-structured APIs with Django — from data modeling to caching, background jobs, and deployment.',
  links: {
    github: 'https://github.com/ayush-pal2',
    linkedin: 'https://www.linkedin.com/in/ayush-pal-048505203/',
    leetcode: 'https://leetcode.com/u/ayushpal02/',
  },
}

export const experience = [
  {
    role: 'Backend Engineer Intern',
    company: 'Makunai Global',
    companyUrl: 'https://www.makunaiglobal.ai/',
    location: 'Noida',
    period: 'Feb 2026 — Present',
    points: [
      'Built and maintained backend services using Django and Django REST Framework, delivering RESTful APIs for authentication, CRUD operations, filtering, search, and validation across multiple modules.',
      'Optimized API response times by tuning Django ORM queries with select_related, prefetch_related, indexing, and pagination, reducing redundant database hits on high-traffic endpoints.',
      'Implemented background/async workflows using Celery with Redis as the message broker to offload long-running tasks (emails, notifications, scheduled jobs) from the request-response cycle.',
      'Added Redis-based caching for frequently accessed endpoints and applied rate limiting/throttling on public APIs to reduce database load and safeguard services from abuse.',
      'Containerized services with Docker, worked with Kubernetes for deployment, and followed Git-based workflows — testing APIs with Postman.',
    ],
  },
]

export const projects = [
  {
    name: 'Departmental E-Commerce Store',
    period: 'Feb 2026',
    description:
      'A scalable e-commerce backend REST API built with Django and Django REST Framework, with separate customer and vendor flows.',
    points: [
      'Role-based dashboards and protected functionality using Django Groups and login-based access control.',
      'Relational data models for customers, vendors, products, categories, addresses, and orders with FK relationships and validation.',
      'End-to-end workflows including vendor product CRUD, search/category filtering, customer ordering, and order tracking, enforcing vendor ownership on product edits.',
    ],
    stack: ['Django', 'Django REST Framework', 'SQLite'],
    github: 'https://github.com/ayush-pal2/Ecommerce_backend',
    live: null,
  },
  {
    name: 'Travel Booking Application',
    period: 'Aug 2025',
    description:
      'A role-based access control platform where admin and user can log in separately. Full-stack travel booking supporting registration, authentication, travel search, and bookings for flights, trains, and buses.',
    points: [
      'Booking workflows with seat-availability validation, cancellation, and profile updates.',
      'Search and filtering by destination, mode, and price, with optimized queries for faster results.',
      'Deployed and maintained on PythonAnywhere.',
    ],
    stack: ['Django', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
    github: 'https://github.com/ayush-pal2/Booking_Travel',
    live: 'https://ayushpal.pythonanywhere.com/',
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'C++', 'SQL'],
  },
  {
    category: 'Backend',
    items: [
      'Django',
      'Django REST Framework',
      'REST API Design',
      'JWT Authentication',
      'Authorization',
      'Middleware',
      'Serializers',
      'Pagination',
    ],
  },
  {
    category: 'Database & ORM',
    items: [
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Django ORM',
      'Database Design',
      'Indexing',
      'Normalization',
      'Query Optimization',
    ],
  },
  {
    category: 'Dev Tools',
    items: ['Git/GitHub', 'CI/CD', 'Docker', 'Kubernetes', 'Postman'],
  },
  {
    category: 'Core CS',
    items: ['Data Structures & Algorithms', 'OOP', 'DBMS', 'Operating Systems'],
  },
]

export const education = {
  degree: 'B.Tech, Computer Science and Engineering',
  school: 'ABESEC College of Engineering',
  period: '2022 — 2026',
  cgpa: '7.6',
}
