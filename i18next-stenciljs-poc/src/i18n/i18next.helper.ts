import i18next from 'i18next';
import Backend from 'i18next-http-backend';

export class I18nServiceBuilder {
  private constructor() { }

  public static async buildI18n(language: string, component: string): Promise<I18nService> {
    return await this._initI18n(language, component);
  }

  private static async _initI18n(language: string, component: string): Promise<I18nService> {
    if (!i18next.isInitialized) {
      await i18next
        .use(Backend)
        .init({
          lng: language, debug: true, ns: [],
          backend: {
            loadPath: '/build/i18n/{{ns}}.{{lng}}.i18n.json'
          }
        })
    }
    if (language !== i18next.language) await i18next.changeLanguage(language);
    await i18next.loadNamespaces(component);
    return new I18nServiceConcrete(i18next, language, component);
  }
}

export abstract class I18nService {
  abstract translate(key: string): string;
}

class I18nServiceConcrete extends I18nService {
  _i18next: any;
  _lang: string;
  _component: string;
  constructor(i18nInstance: any, language: string, component: string) {
    super();
    this._lang = language;
    this._i18next = i18nInstance;
    this._component = component;
  }

  translate(key: string) {
    return this._i18next.t(`${this._component}:${key}`);
  }
}
