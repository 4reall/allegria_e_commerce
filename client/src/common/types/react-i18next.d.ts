import 'i18next';
// import all namespaces (for the default language, only)
import common from '/public/locales/ru/common.json';

declare module 'i18next' {
	// Extend CustomTypeOptions
	interface CustomTypeOptions {
		// custom resources type
		// resources: {
		// 	common: typeof common;
		// };
		// other
	}
}
