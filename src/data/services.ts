import { Service } from '../types/service';

export const services: Service[] = [
  {
    id: 'network',
    title: 'Network Installation & IT Management',
    headline: 'Enterprise-Grade Network Solutions',
    description: 'Complete network infrastructure setup and ongoing IT management services for businesses of all sizes.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1600',
    features: [
      'Network design and implementation',
      'Hardware and software setup',
      '24/7 network monitoring',
      'IT infrastructure maintenance'
    ],
    benefits: [
      'Improved network performance and reliability',
      'Reduced downtime and operational disruptions',
      'Enhanced security and data protection',
      'Scalable infrastructure that grows with your business'
    ],
    process: [
      {
        title: 'Assessment',
        description: 'We evaluate your current infrastructure and business needs'
      },
      {
        title: 'Design',
        description: 'Create a customized network architecture plan'
      },
      {
        title: 'Implementation',
        description: 'Professional installation and configuration of all components'
      },
      {
        title: 'Monitoring',
        description: '24/7 proactive monitoring and maintenance'
      }
    ]
  },
  {
    id: 'setup',
    title: 'Computer Setup & Active Directory',
    headline: 'Professional Workstation Management',
    description: 'Professional workstation setup and Active Directory configuration for seamless network management.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1600',
    features: [
      'Workstation deployment',
      'Active Directory setup and management',
      'User account administration',
      'Group policy configuration'
    ],
    benefits: [
      'Streamlined user management',
      'Enhanced security through centralized control',
      'Improved productivity with standardized setups',
      'Efficient resource allocation'
    ],
    process: [
      {
        title: 'Planning',
        description: 'Define user roles and access requirements'
      },
      {
        title: 'Configuration',
        description: 'Set up Active Directory and group policies'
      },
      {
        title: 'Deployment',
        description: 'Roll out standardized workstation configurations'
      },
      {
        title: 'Management',
        description: 'Ongoing administration and support'
      }
    ]
  },
  {
    id: 'firewall',
    title: 'Cybersecurity & Firewall Solutions',
    headline: 'Advanced Network Protection',
    description: 'Expert implementation and management of industry-leading firewall solutions to protect your network perimeter.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600',
    features: [
      'Fortinet, Palo Alto, Cisco firewall setup',
      'Network security policy creation',
      'Regular security updates and maintenance',
      'Performance optimization'
    ],
    benefits: [
      'Enhanced network security',
      'Protection against cyber threats',
      'Compliance with security standards',
      'Real-time threat monitoring'
    ],
    process: [
      {
        title: 'Security Audit',
        description: 'Evaluate current security posture and vulnerabilities'
      },
      {
        title: 'Solution Design',
        description: 'Create custom security architecture'
      },
      {
        title: 'Implementation',
        description: 'Deploy and configure security solutions'
      },
      {
        title: 'Monitoring',
        description: 'Continuous security monitoring and updates'
      }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Security & VPN Implementation',
    headline: 'Secure Cloud Solutions',
    description: 'Comprehensive cloud security solutions and VPN implementation for secure remote access.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600',
    features: [
      'Cloud security architecture design',
      'VPN setup and configuration',
      'Multi-factor authentication',
      'Zero Trust implementation'
    ],
    benefits: [
      'Secure remote access',
      'Protected cloud resources',
      'Enhanced data privacy',
      'Scalable security solutions'
    ],
    process: [
      {
        title: 'Assessment',
        description: 'Evaluate cloud security requirements'
      },
      {
        title: 'Architecture',
        description: 'Design secure cloud infrastructure'
      },
      {
        title: 'Deployment',
        description: 'Implement security solutions'
      },
      {
        title: 'Management',
        description: 'Ongoing monitoring and maintenance'
      }
    ]
  },
  {
    id: 'mssp',
    title: 'Managed IT Support Services',
    headline: '24/7 IT Support & Management',
    description: '24/7 monitoring and management of your security infrastructure to ensure continuous protection.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1600',
    features: [
      'Real-time threat monitoring',
      'Incident response and remediation',
      'Security log management',
      'Regular security reports'
    ],
    benefits: [
      'Proactive threat prevention',
      'Rapid incident response',
      'Reduced security risks',
      'Comprehensive reporting'
    ],
    process: [
      {
        title: 'Onboarding',
        description: 'Setup monitoring and management systems'
      },
      {
        title: 'Monitoring',
        description: '24/7 security surveillance'
      },
      {
        title: 'Response',
        description: 'Rapid incident handling'
      },
      {
        title: 'Reporting',
        description: 'Regular security status updates'
      }
    ]
  }
];