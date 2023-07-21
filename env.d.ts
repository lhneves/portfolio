declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EMAILJS_TEMPLATE_KEY: string;
      EMAILJS_SERVICE_KEY: string;
      EMAILJS_PUBLIC_KEY: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}
export {};
