declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY: string;
      NEXT_PUBLIC_EMAILJS_SERVICE_KEY: string;
      NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}
export {};
