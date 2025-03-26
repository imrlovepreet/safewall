export interface ServiceProcess {
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  headline: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  process: ServiceProcess[];
}