
import { getRequestConfig } from 'next-intl/server';
type Messages = typeof import('./messages/ru.json')
declare module 'next-intl' {
    interface AppConfig {
        Messages: Messages  // ✅ shu yerda e'lon qilinadi
    }
}

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? 'ru';  // ✅ default locale

  
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});