import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DESIGN_TOKENS = {
  colors: {
    primary: '#0F172A', // Deep Navy
    accent: '#EAB308',  // Energy Yellow
    secondary: '#334155', // Slate 700
    background: '#F8FAFC', // Slate 50
    surface: '#FFFFFF',
  },
  fonts: {
    heading: 'Outfit, sans-serif',
    body: 'Inter, sans-serif',
  }
};

export const SITE_CONTENT = {
  hero: {
    headline: "Smart Facility Solutions for a Sustainable Future",
    subheadline: "Optimize your building's performance with AI-driven maintenance, energy efficiency, and integrated infrastructure services. Reduce costs and enhance reliability today.",
    cta: "Get a Free Audit",
    secondaryCta: "Explore Services"
  },
  stats: [
    { label: "Years of Excellence", value: "15+" },
    { label: "Projects Delivered", value: "500+" },
    { label: "Certified Engineers", value: "50+" },
    { label: "Client Retention", value: "98%" }
  ],
  services: [
    {
      id: "mep",
      title: "MEP Engineering",
      description: "Comprehensive Mechanical, Electrical, and Plumbing solutions designed for maximum efficiency and safety compliance.",
      features: ["HVAC Optimization", "Electrical Safety Audits", "Plumbing Infrastructure", "Fire Protection Systems"],
      icon: "Settings",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "energy",
      title: "Energy Management",
      description: "Cut utility costs by up to 30% with our AI-powered Energy Management Systems (EMS) and real-time monitoring.",
      features: ["Carbon Footprint Analysis", "Smart Metering", "Green Building Certification", "Automated Controls"],
      icon: "Zap",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "cleaning",
      title: "Industrial Hygiene",
      description: "Professional cleaning and sanitation services tailored for high-compliance industrial and commercial environments.",
      features: ["Deep Sanitization", "Hazardous Waste Disposal", "Routine Maintenance", "Eco-friendly Products"],
      icon: "Sparkles",
      image: "https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "facility",
      title: "Integrated FM",
      description: "End-to-end facility management that ensures your assets are secure, compliant, and operating at peak performance.",
      features: ["24/7 Helpdesk", "Asset Lifecycle Management", "Tenant Experience", "Security Services"],
      icon: "Building2",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    }
  ],
  process: [
    { title: "Audit & Analysis", description: "We conduct a deep-dive assessment of your current infrastructure to identify inefficiencies and risks." },
    { title: "Strategic Planning", description: "Our engineers design a tailored roadmap focused on cost reduction, compliance, and sustainability." },
    { title: "Seamless Execution", description: "We deploy expert teams to implement solutions with minimal disruption to your daily operations." },
    { title: "Continuous Optimization", description: "Using real-time data, we constantly refine performance to ensure long-term value." }
  ],
  testimonials: [
    {
      name: "Ahmad Razak",
      role: "Operations Director, TechCorp",
      content: "IS Ikhlas Suci didn't just maintain our building; they transformed it. Our energy costs dropped by 25% in the first year alone.",
      avatar: "https://i.pravatar.cc/150?u=ahmad"
    },
    {
      name: "Sarah Lim",
      role: "Facility Manager, Global Logistics",
      content: "Reliability is everything in logistics. Their MEP team ensures we have zero downtime, 24/7. Truly a partner we can trust.",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "David Chen",
      role: "CTO, Future Systems",
      content: "The predictive maintenance insights have saved us millions in potential equipment failures. A game changer.",
      avatar: "https://i.pravatar.cc/150?u=david"
    },
    {
      name: "Priya Sharma",
      role: "Head of Sustainability, GreenRe",
      content: "Their ESG reporting tools made our annual audit a breeze. Highly recommended for any eco-conscious business.",
      avatar: "https://i.pravatar.cc/150?u=priya"
    }
  ],
  highlights: [
    {
      title: "Predictive Maintenance",
      description: "Stop failures before they happen with AI-driven insights.",
      size: "large",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "ESG Compliance",
      description: "Meet global sustainability standards effortlessly.",
      size: "small",
      color: "bg-brand-blue"
    },
    {
      title: "Certified Experts",
      description: "A team of 50+ specialized engineers at your service.",
      size: "small",
      color: "bg-brand-yellow"
    },
    {
      title: "Nationwide Coverage",
      description: "Serving Kuala Lumpur, Penang, Johor, and beyond.",
      size: "medium",
      image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800"
    }
  ],
  workProcess: [
    {
      title: "Discover & Strategize",
      description: "We analyze your current infrastructure and identify key opportunities for improvement.",
    },
    {
      title: "Execute & Optimize",
      description: "Our team implements tailored solutions with minimal disruption to your operations.",
    },
    {
      title: "Analyze & Grow",
      description: "Continuous monitoring and data-driven adjustments ensure long-term efficiency.",
    }
  ],
  insights: [
    {
      title: "30% Energy Waste",
      description: "Commercial buildings typically waste up to 30% of the energy they consume due to inefficiencies.",
    },
    {
      title: "3x Higher Costs",
      description: "Reactive maintenance repairs can cost 3 to 9 times more than planned preventative strategies.",
    },
    {
      title: "15% Productivity",
      description: "Optimized indoor environmental quality can increase occupant productivity by over 15%.",
    }
  ],
  faqs: [
    {
      question: "What is this platform used for?",
      answer: "This platform is designed to help users manage their work more efficiently by offering tools that simplify organization, communication, and collaboration."
    },
    {
      question: "How do I manage my account?",
      answer: "You can manage your account settings, profile information, and subscription details directly from the user dashboard under the 'Settings' tab."
    },
    {
      question: "Can I request a refund?",
      answer: "Yes, we offer a 30-day money-back guarantee for all our subscription plans. Please contact our support team to initiate a refund request."
    },
    {
      question: "How do I reset my password?",
      answer: "Click on the 'Forgot Password' link on the login page. You will receive an email with instructions to create a new password securely."
    },
    {
      question: "Is my data safe on this platform?",
      answer: "Absolutely. We use enterprise-grade encryption and follow strict data privacy protocols to ensure your information is always secure and protected."
    },
    {
      question: "How do I contact customer support?",
      answer: "Our support team is available 24/7 via live chat, email, or phone. Visit our Contact Us page for more details."
    }
  ],
  about: {
    headline: "Engineering Trust, Delivering Excellence",
    story: "Founded on the principles of integrity and innovation, IS Ikhlas Suci has evolved from a local service provider to a nationwide leader in integrated facility solutions. We don't just manage buildings; we elevate them into intelligent assets that drive business growth.",
    mission: "To empower businesses with resilient, efficient, and sustainable infrastructure solutions.",
    vision: "To be Southeast Asia's most trusted partner for smart building intelligence and facility management.",
    values: ["Integrity", "Innovation", "Sustainability", "Reliability"]
  },
  brandEssence: {
    headline: "Why Our Clients Believe We're Different",
    description: "We combine technical mastery with a client-first approach to deliver results that matter.",
    pillars: [
      { 
        title: "Certified Experts", 
        description: "Our team consists of over 50+ certified engineers and specialists dedicated to excellence.",
        icon: "Users"
      },
      { 
        title: "Proven Results", 
        description: "With 500+ successful projects, we deliver measurable improvements in efficiency and cost.",
        icon: "CheckCircle2"
      },
      { 
        title: "Award Winning", 
        description: "Recognized industry-wide for our commitment to safety, innovation, and sustainability.",
        icon: "Award"
      },
      { 
        title: "Transparent Reporting", 
        description: "Real-time data and clear communication ensure you always know your facility's status.",
        icon: "BarChart3"
      }
    ]
  },
  certifications: [
    { name: "CIDB G7", description: "Unlimited Capacity Construction" },
    { name: "ISO 9001:2015", description: "Quality Management System" },
    { name: "Suruhanjaya Tenaga", description: "Class A Electrical Contractor" },
    { name: "MOF Registered", description: "Trusted Government Supplier" }
  ],
  projectSites: [
    { city: "Kuala Lumpur", count: "120+ Projects", lat: 3.1390, lng: 101.6869 },
    { city: "Penang", count: "45+ Projects", lat: 5.4141, lng: 100.3288 },
    { city: "Johor Bahru", count: "60+ Projects", lat: 1.4927, lng: 103.7414 },
    { city: "Melaka", count: "30+ Projects", lat: 2.1896, lng: 102.2501 },
    { city: "Kuching", count: "15+ Projects", lat: 1.5533, lng: 110.3592 }
  ],
  caseStudies: [
    {
      title: "Smart Factory Retrofit",
      client: "Semiconductor Giant",
      result: "25% Energy Savings",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      category: "Industrial IoT"
    },
    {
      title: "High-Rise MEP Upgrade",
      client: "Premium Office Tower",
      result: "Zero Unplanned Downtime",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      category: "Commercial"
    },
    {
      title: "Hospital Hygiene Program",
      client: "Private Healthcare Group",
      result: "100% Audit Compliance",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      category: "Healthcare"
    }
  ],
  blogs: [
    {
      category: "Paid Advertising",
      title: "A Beginner’s Guide to Running Profitable Ad Campaigns",
      description: "Learn the fundamentals of setting up, managing, and optimizing ad campaigns that deliver high ROI.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      category: "SEO",
      title: "Top 10 SEO Strategies That Still Work in 2025",
      description: "Discover the latest search engine optimization techniques to keep your website ranking high.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      link: "#"
    },
    {
      category: "Content Marketing",
      title: "Why Long-Form Content Still Dominates in 2025",
      description: "Explore why in-depth articles and guides continue to outperform short-form content in engagement.",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
      link: "#"
    }
  ]
};
