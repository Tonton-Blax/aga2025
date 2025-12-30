// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {

		type IUser = {
			prenom:string,
			civilite: string,
			nom:string,
			date_de_naissance:string,
			email:string,
			local:ILocal,
			actions:string,
			valorisation:string,
			ratio_salaire:number,
			id:string
		}

		type I18n = Record<ILocal, ILocalizedContent>
		
		type ILocal = 'fr' | 'en' | 'pl' | 'it';

		type ILocalizedContent = {
			general : {
				dear: [string,string],
				menu: {
					lettre: string
					videos: string
					conditions: string
					acceptation: string
					vente: string,
					faq: string,
					documents: string
				}	
			},
			sections: {
				modal:string,
				lettre: {
					texte:string
					intituleXN: string
					intituleTR: string
					boutonDownload: string
					ps: string
				},
				header: {
					title: string
				},
				videos: {
					sectionTitle: string,
					label1: string,
					label2: string	
				},
				actions: {
					sectionTitle: string
					date: LabelText
					conditions: LabelText
					nombre: LabelText
					cession: LabelText
				},
				blackBlock : {
					titleCritere: BlackTitle,
					criteres : Critere[],
					criteresSubtitle: string
					titleAttribution: BlackTitle,
					etapes: Etape[]
				},
				prixdeVente: {
					sectionTitle: string
					texte: string
					vignettes: string[],
					boutonBrochure: string
				},
				faq: {
					sectionTitle: string,
					disclaimer: string
					qa: QA[]
				},
				basDePage: {
					touteLaDoc: string
					boutonReglement: string
					boutonBrochure: string
					boutonAttribution: string
					pourTouteQuestion: string
					mentionLegale: string,
					usageInterne: string,
					companyInfo: string
				}	
			},
		}

		type QA = {
			question: string,
			reponse: string
		}

		type Etape = {
			date?: string,
			vignette : string,
			description?: string,
			timeline?: string[],
			bgColor: string
		}

		type Critere = {
			title: string,
			chiffre: number,
			description: string
		}

		type BlackTitle = {
			title: string,
			sub?: string,
		}

		type LabelText = {
			label: string,
			text: string
		}

		type LanguageCode = 'fr-fr' | 'pl-en' | 'it-en';

		type Tranche = {
			[key in LanguageCode]: string;
		};

		interface Dates {
			tranche1: Tranche;
			tranche2: Tranche;
			day: Tranche;
		}

		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}
declare module '$lib/data.json' {
	const value: App.IUser[];
	export default value;
}

export {};
