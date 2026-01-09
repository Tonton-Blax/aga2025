export const i18n: Omit<App.I18n, 'it' | 'pl'> = {
	fr: {
		general: {
			dear: ['cher', 'chère'],
			menu: {
				lettre: "Lettre",
				enbref: "En bref",
				conditions: "Conditions",
				acceptation: "Acceptation",
				vente: "Vente",
				faq: "Q & A",
				documents: "Mes documents",
			},	
		},
		sections: {
			modal: "Le règlement du plan sera disponible dans quelques jours, revenez sur cette page pour le télécharger",
			header: {
				title: "votre attribution<br>gratuite d'actions<br><mark>iliad 2025</mark>"
			},
			lettre: {
				texte: `<p>Le conseil d’administration du Groupe iliad a décidé le 8 décembre 2025, sur proposition de son Directeur Général et de son fondateur, de mettre en place un <strong>plan d’Attribution Gratuite d’Actions iliad</strong> (dit « plan d’AGA »)</p> <p>Nous avons le plaisir de vous informer que vous êtes bénéficiaire de ce plan. Notre souhait de vous compter parmi nos actionnaires est une forme de reconnaissance de votre performance individuelle et témoigne de la confiance que nous plaçons en vous pour écrire notre avenir commun.</p> <p>Ainsi, ce sont <mark>{{ actions }} actions gratuites iliad</mark> qui vous ont été attribuées.</p> <p>L’acquisition de vos actions se fera en deux étapes&nbsp;:&nbsp;<strong>30% en {{ tranche1 }}</strong> et <strong>70% en {{ tranche2 }}</strong>. Leur acquisition sera conditionnée d’une part à votre présence continue dans nos effectifs à chaque échéance, et d’autre part à la réalisation par le Groupe d’objectifs financiers et environnementaux ambitieux.</p> <p>L’action iliad fait chaque année l’objet d’une valorisation par un expert financier indépendant. A date, le prix de l’action iliad s’élève à 263€, valorisant votre attribution à {{ valorisation }}<strong>{{ ratio_salaire }}.</strong></p> <p>Vous trouverez ci-dessous des informations complémentaires liées à votre attribution, ainsi que le calendrier détaillé.</p> <p>Ensemble, {{ dear }} {{ prenom }}, continuons à aller toujours plus haut, en restant fidèle à ce qui fait notre singularité : notre obsession de la qualité et de la proximité au service de nos 61 millions d’abonnés, ainsi que l’innovation utile, concrète et différenciante.</p><p>Nous comptons sur vous pour continuer à jouer un rôle clé dans cette ambition collective.</p><p>Très belle année 2026&nbsp;!</p>`,
				intituleXN: "Président du conseil d’administration",
				intituleTR: "Directeur général",
				boutonDownload: "Télécharger ma lettre d’attribution",
				boutonGuide: "Télécharger votre guide d’attribution",
				ps: "Montant brut avant prélèvements obligatoires"
			},
			videos: {
				sectionTitle: 'En vidéo',
				label1: "Comprendre le plan d’attribution gratuite d’actions en 2 minutes",
				label2: "Le message de Thomas Reynaud"
			},
			actions: {
				sectionTitle: 'Vos actions en bref',
				date: {
					label: "Date d’acquisition effective",
					text:`<strong>Tranche 1:</strong> 30% des actions le 8 décembre 2027<br><strong>Tranche 2:</strong> 70% des actions le 8 décembre 2028`
				},
				conditions: {
					label: "Conditions d’acquisition",
					text: "<strong>Tranche 1 :</strong> Présence dans le groupe au 8 décembre 2027<br><strong>Tranche 2:</strong> Présence dans le groupe au 8 décembre 2028",
				},
				nombre: {
					label: "Nombre d’actions acquises",
					text:"<strong>Le nombre d’actions qui vous sera livré peut varier en fonction de la performance du groupe</strong>"
				},
				cession: {
					label: `Cession des actions`,
					text: `<strong>Actions de Tranche 1 :</strong> dès 2028 durant une période annuelle dédiée<br> <strong>Actions de Tranche 2 :</strong> dès 2028 durant une période annuelle dédiée`,
				}
			},
			blackBlock : {
				titleCritere: {
					title:"Quelles sont les conditions de<br> performance du groupe&nbsp;?",
					sub:"La performance du groupe repose sur deux critères clé :",
				},
				criteres : [
					{
						title:"Un critère financier",
						chiffre: 25,
						description: "Qui est calculé à partir d’un des indicateurs financiers de référence du groupe (OFCF)."
					},
					{
						title:"Un critère ESG",
						chiffre: 25,
						description:"L’ESG, qui couvre les enjeux environnementaux, sociaux et de gouvernance, qui vise dans le cadre de ce plan à sensibiliser les collaborateurs du groupe à ces sujets et à réduire l’empreinte de nos activités sur l’environnement."
					}
				],
				criteresSubtitle: "50% des actions reposent sur la seule condition de présence au sein du groupe aux dates d’acquisition de chaque tranche",
				titleAttribution: {
					title: "Comment accepter mon attribution ?",
					sub: "Pour accepter votre attribution, suivez simplement les étapes !",
				},
				etapes : [
					{
						date: "Janvier 2027",
						vignette: "J’ai reçu ma lettre d’attribution",
						bgColor: "white",
					},
					{
						date: "Février 2027",
						vignette: "Je reçois un mail de la Banque Transatlantique et j’active mon compte",
						description: "Ce mail vous permettra de vous rendre sur le portail de gestion dédié, afin d’activer votre compte et de renseigner vos données personnelles (RIB, etc), et d’accepter votre attribution.",
						timeline: ["Consultation du règlement du plan", "Acceptation de mon attribution"],
						bgColor: "red"
					},
					{
						date: "Avril 2027",
						vignette: "Je reçois un lien DocuSign pour signer un contrat de liquidité",
						description: "Un contrat de liquidité est un document régissant notamment les modalités de vente de vos actions. La Banque Transtlantique vous enverra par mail un lien pour le signer, via Docusign.",
						timeline: ["Signature numérique du contrat de liquidité"],
						bgColor: "red"
					},
					{
						vignette: "Mon dossier est complet. Rendez-vous en décembre 2027 et décembre 2028 !",
						bgColor: "white"
					}	
				]
			},
			prixdeVente: {
				sectionTitle: "À quel prix pourrai-je vendre mes actions iliad ?",
				texte: "Chaque année, un expert ﬁnancier indépendant réalise une valorisation du prix de l’action iliad. Avant l’ouverture de chaque fenêtre de liquidité, le prix de l’action iliad vous sera communiqué, le montant brut total que vous percevrez au titre de la vente de vos actions se calculera ainsi :",
				vignettes: [
					"Nombre d’actions iliad acquises",
					"Prix d’une action iliad au moment de la vente",
					"Montant à percevoir<sup>*</sup>"
				],
				boutonBrochure: "Télécharger la brochure d’information complète",
			},
			faq: {
				sectionTitle: "Questions fréquentes",
				disclaimer: "<p>Cette FAQ est proposée à des fins informatives, n’a pas vocation à être exhaustive et a pour objectif de répondre aux principales questions posées par les bénéficiaires du plan d’Attribution Gratuite d’Actions (« AGA ») iliad 2025.</p><p>Pour plus de précisions sur les termes et conditions des AGA iliad, nous vous invitons à consulter la documentation transmise, notamment le règlement du plan.</p>",
				qa: [
					{
						question: "Pourquoi ai-je bénéficié d’une attribution gratuite d’actions Iliad ?",
						reponse:
							'<p>L’attribution gratuite d’actions Iliad a pour objectif de vous associer au développement de notre Groupe en vous faisant devenir, à terme, actionnaire. Cette attribution récompense votre performance individuelle et valorise votre potentiel, tout en exprimant la confiance que nous vous accordons et notre volonté de vous fidéliser sur le long terme.</p><p>Il est important de préciser que cette attribution est strictement personnelle et confidentielle. Vous ne devez en aucun cas partager cette information avec une tierce personne, qu’elle soit interne ou externe au Groupe.</p>'
					},
					{
						question: "Quels documents me seront remis pour accepter mon attribution d’actions gratuites ?",
						reponse:
							'<p>Les documents suivants vous sont/seront remis :</p> <p> <strong>Déjà disponibles </strong> <ul> <li>Votre lettre d’attribution précisant le nombre d’actions gratuites attribuées</li> <li>Le règlement du plan, détaillant les modalités et conditions d’attribution des actions gratuites (périodes et conditions d’acquisition notamment) </li> </ul> </p> <p> <strong>A venir :</strong> <ul> <li> Début février 2026 : Vous recevrez par email vos accès au site www.Transatplan.com, le portail de gestion de vos actions Iliad, administré par la Banque Transatlantique. Une fois l’email reçu, vous pourrez créer votre compte personnel (en y indiquant notamment votre adresse, RIB, personnalisation de l’email de contact etc.), pour gérer votre portefeuille d’actions.</li> <li> Mars 2026 : La Banque Transatlantique vous enverra via DocuSign la convention de liquidité, qui définit les conditions de cession des actions (calendrier, procédures, etc.). </li> </ul> </p>'
					},
					{
						question: "Qu’est-ce que la période d’acquisition et à partir de quand court-elle ?",
						reponse:
							'<p>La période d’acquisition est la période pendant laquelle le bénéficiaire d’AGA n’est pas encore propriétaire des actions attribuées. Avant l’expiration de cette période d’acquisition, il ne peut donc ni céder ses actions, ni voter, ni recevoir des dividendes au titre des actions gratuites attribuées.</p> <p>Cette période d’acquisition court à compter de la décision d’attribution du 8 décembre 2025 et prend fin le 8 décembre 2027 pour les actions de la tranche 1 et le 8 décembre 2028 pour les actions de la tranche 2.</p>'
					},
					{
						question: "Qu’advient-il de mes actions attribuées si je quitte le groupe ?",
						reponse:
							'<p>En cas de départ du groupe avant la date d’acquisition des actions, pour quelque motif que ce soit (sauf décès et départ à la retraite), les actions seront perdues sans aucune compensation.</p><p>En cas de départ du groupe après la date d’acquisition, le bénéficiaire conserve ses actions jusqu’à leur rachat.</p>'
					},
					{
						question: "Que se passe-t-il en cas de décès du bénéficiaire pendant ou après la période d’acquisition ?",
						reponse:
							'<p><strong>Pendant la période d’acquisition :</strong> Les héritiers du bénéficiaire peuvent demander l’attribution immédiate des actions gratuites par lettre recommandée adressée à la société dans un délai de 6 mois à compter du décès du bénéficiaire. A défaut de demande effectuée par les héritiers dans le délai mentionné, les actions seront perdues.</p><p><strong>Après la période d’acquisition :</strong> Les héritiers du bénéficiaire sont automatiquement substitués dans les droits et obligations du bénéficiaire et peuvent céder les actions.</p>'
					},
					{
						question: "Que sont les conditions d’acquisition de mes actions ?",
						reponse:
							'<p>L&#39;acquisition définitive des actions gratuites est soumise au respect de conditions définies dans la décision d’attribution et le règlement du plan.</p> <p> <strong>Condition de présence :</strong> pour l’attribution définitive des actions gratuites, le bénéficiaire doit avoir conservé sans interruption la qualité de salarié d’Iliad ou d’une société comprise dans le périmètre du groupe Iliad jusqu’à la fin de la période d’acquisition. Par conséquent, si le salarié quitte Iliad ou une société comprise dans le périmètre du groupe Iliad avant l’expiration de la période d’acquisition, il perd ses droits à l’attribution des actions (sauf cas de décès ou invalidité régis par la loi). Aucune indemnisation ou compensation n’est alors exigible. </p> <p> <ul> <li>Actions de la tranche 1 : pour acquérir la totalité des actions de la tranche 1, le groupe doit atteindre les conditions de performance économiques fixées. Le bénéficiaire doit également être présent au sein du Groupe de manière ininterrompue entre le 8 décembre 2025 (date d’attribution) et le 8 décembre 2027 (date d’acquisition des actions de la tranche 1).</li> <li> Actions de la tranche 2 : pour acquérir la totalité des actions de la tranche 2, le groupe doit atteindre les conditions de performance économiques fixées. Le bénéficiaire doit également être présent au sein du Groupe de manière ininterrompue entre le 8 décembre 2025 (date d’attribution) et le 8 décembre 2028 (date d’acquisition des actions de la tranche 2).</li> </ul> </p> <p> <strong>Conditions de performance :</strong> L’attribution définitive des actions gratuites dépend de la réalisation de deux critères de performance : <ul> <li> un critère financier calculé à partir de l’Operational Free Cash Flow (OFCF), l’un des indicateurs financiers de référence du groupe</li><li>un critère ESG qui couvre les enjeux environnementaux, sociaux et de gouvernance, et qui vise dans le cadre de ce plan à sensibiliser les collaborateurs du groupe à ces sujets et à réduire l’empreinte de nos activités sur l’environnement.</li> </ul> </p> <p>L’atteinte partielle ou totale de ces objectifs peut avoir un impact sur le nombre d’actions définitivement acquises.</p>'
					},
					{
						question: "Les conditions de performance du Groupe me sont-elles affectées personnellement ?",
						reponse:
							'Non, il s’agit d’objectifs collectifs à l’échelle du groupe, chacun y contribue individuellement dans son activité quotidienne, mais il n’y a pas d’objectifs individuellement fixés.'
					},
					{
						question: "Quand puis-je céder mes actions ?",
						reponse:
							'A compter de l’expiration de la période d’acquisition des actions, le bénéficiaire ayant signé la convention de liquidité peut vendre chaque année ses actions gratuites pendant une période définie, appelée « fenêtre de liquidité », selon les conditions et modalités prévues par la convention de liquidité (qui sera partagée via DocuSign aux bénéficiaires en mars 2026).'
					},
					{
						question: "Quelle est la valeur actuelle de l’action Iliad ?",
						reponse:
							'La dernière évaluation du prix de l’action iliad est de 263,00€.'
					},
					{
						question: "Comment est déterminée la valeur de mes actions ?",
						reponse:
							'La valeur de mes actions est déterminée chaque année par un expert financier indépendant de premier plan, sur la base d’une valorisation multicritères. Ainsi, il est à noter qu’aucun prix ne sera garanti. Le prix d’exercice étant susceptible de varier d’une expertise à l’autre, il sera notifié chaque année au bénéficiaire. Les frais de l’expertise sont supportés par la société.'
					},
					{
						question: "Comment notifier à Iliad mon intention de céder mes actions ?",
						reponse:
							'Lorsque vos actions vous seront acquises, vous pourrez les céder partiellement ou totalement pendant une période dédiée appelée « fenêtre de liquidité ». Vous serez alors invité(e) à suivre la procédure figurant dans la convention de liquidité. Pour les actions de la tranche 1 qui seront acquises en décembre 2027, la cession sera possible à compter de 2028. Pour les actions de la tranche 2 qui seront acquises en décembre 2028, la cession sera possible à compter de 2028. Toutes les informations spécifiques et détaillées vous seront partagées dès que la cession d’actions vous sera possible.'
					},
					{
						question: "Quel est le traitement social et fiscal des actions gratuites ?",
						reponse:
							'Le traitement social et fiscal des actions gratuites dépend de nombreux facteurs, tels que la situation personnelle du bénéficiaire et les réglementations en vigueur qui sont évolutives. En cas de doute, nous vous invitons à consulter un conseiller en la matière.'
					},
					{
						question: "Comment mettre à jour mes informations personnelles entre aujourd’hui et l’acquisition de mes actions ?",
						reponse:
							'Vous recevrez mi-janvier par email vos accès au site www.Transatplan.com, le portail de gestion de vos actions Iliad, administré par la Banque Transatlantique. Chaque bénéficiaire est invité à mettre à jour ses données personnelles à chaque changement de situation : adresse fiscale, email de contact (pour la transmission des formulaires de déclaration d’impôt sur le revenu), coordonnées bancaires notamment. Il est essentiel que ces informations demeurent à jour sur le portail Transatplan afin de garantir une communication et un processus administratif et financier optimal.'
					}
				],
			},
			basDePage: {
				touteLaDoc: "Téléchargez toute la documentation",
				boutonReglement: "Règlement du plan",
				boutonBrochure: "Brochure d’information",
				boutonAttribution: "Ma lettre d’attribution",
				pourTouteQuestion: "Pour toute question complémentaire, envoyez un message à l’adresse suivante",
				mentionLegale: "Ce support est fourni uniquement à titre indicatif à des fins d’information simplifiée et non exhaustive. Il a été établi sans préjudice des droits et obligations de l’ensemble des parties prenantes et n’a pas de valeur juridique.",
				usageInterne: "Communication à usage exclusivement interne et strictement personnelle",
				companyInfo: "SIRET : 342376332 00082 - Société anonyme à conseil d’administration au capital de 14 930 059,50€ Immatriculée<br>au registre du commerce des sociétés de Paris sous le numéro RCS 342 376 332"
			}
		},
	},
	en: {
		general: {
			dear: ['Dear', 'Dear'],
			menu: {
				lettre: "Allocation letter",
				enbref: "In a nutshell",
				conditions: "Conditions",
				acceptation: "Acceptance",
				vente: "Sell",
				faq: "Q & A",
				documents: "My documents",
			}			
		},
		sections: {
			modal: "The plan regulations will be available in a few days. Please return to this page to download them",
			lettre: {
				texte: `<p>The Board of Directors of iliad decided on December 8<sup>th</sup> 2025, on the initiative of its Founder and Chief Executive Officer, to implement a <strong>Free Iliad Share Allocation Plan.</strong></p> <p>We are pleased to inform you that <strong>you are a beneficiary of this plan</strong>. This initiative aims to recognize your contribution and to involve you in the long-term success of the Group.</p> <p>We inform you that <mark>{{ actions }} free iliad shares</mark> have been allocated to you under this plan.</p> <p>Your shares will vest in two phases : <strong>30% in {{ tranche1 }}</strong> and <strong>70% in {{ tranche2 }}</strong>, provided that you are still employed by the Group at each vesting date, and that the Group meets its financial and environmental objectives.</p> <p>Once your shares vested, you will become a shareholder of the Group and will be able to <strong>keep</strong> your shares and receive dividends, or <strong>sell</strong> them partially or totally to receive their corresponding cash value.</p> <p>Each year, the iliad share is valued by an independent financial expert. The latest iliad share price valuation was 263.00€. Based on this valuation, the {{ actions }} shares allocated to you are currently valued at <mark>{{ valorisation }}€<sup>1</sup></mark><strong>{{ ratio_salaire }}.</strong></p> <p>These free shares are a way of living up to our values of sharing, innovation and entrepreneurship. Together, let's continue to build an international telecoms group ambitious, committed and always closer to our subscribers' expectations. Yours sincerely,</p>`,
				intituleXN: "President of the Board of Directors",
				intituleTR: "Chief Executive Officer",
				boutonDownload: "Download my allocation letter",
				boutonGuide: "Download my allocation guide",
				ps: "Gross amount before tax"
			},
			header: {
				title: "Your 2025<br><mark>free iliad shares</mark><br>allocation"
			},
			videos: {
				sectionTitle: 'Video',
				label1: "Understand you free shares allocation in 2 minutes",
				label2: "Message from Thomas Reynaud"
			},
			actions: {
				sectionTitle: 'Your shares in brief',
				date: {
					label: "Vesting date",
					text: `<strong>Tranche 1:</strong>30% of the shares on {{ day }} {{ tranche1 }}<br><strong>Tranche 2:</strong><br>70% of the shares on {{ day }} {{ tranche2 }}`
				},
				conditions: {
					label: "Vesting condition",
					text: "<strong>Tranche 1:</strong>Presence within the Group on {{ day }} {{ tranche1 }}<br><strong>Tranche 2:</strong><br>Presence within the Group on {{ day }} {{ tranche2 }}",
				},
				nombre: {
					label: "Number of shares vested",
					text: "<strong>The number of shares you will receive depends on the Group's performance</strong>"
				},
				cession: {
					label: `Transfer of the shares`,
					text: `<strong>Tranche 1 shares:</strong> from 2028 during a dedicated period of time<strong>Tranche 2 shares:</strong> from 2028<br> during a dedicated period of time`,
				}
			},
			blackBlock: {
				titleCritere: {
					title: "What are the Group's performance conditions?",
					sub: "The Group's performance is based on two key criteria:",
				},
				criteres: [
					{
						title: "A financial criterion",
						chiffre: 25,
						description: "Which is calculated from the Group's main profitability indicator."
					},
					{
						title: "An ESG criterion",
						chiffre: 25,
						description: "ESG (Corporate Social Responsibility), aims to reduce the footprint of our activities on the climate and the environment."
					}
				],
				criteresSubtitle: "50% of the shares are subject only to the presence condition within the Group on the vesting dates of each tranche",
				titleAttribution: {
					title: "How to accept my shares allocation?",
					sub: "To accept your shares allocation, follow the step-by-step instructions!",
				},
				etapes: [
					{
						date: "December 2025",
						vignette: "I have received my allocation letter",
						bgColor: "white",
					},
					{
						date: "January 2026",
						vignette: "I receive an e-mail from Banque Transatlantique and activate my account",
						description: "This e-mail will take you to the dedicated website, where you will be able to activate your account, register your personal details (bank details, etc.) and accept your allocation.",
						timeline: ["Read the plan rules", "Accept my allocation"],
						bgColor: "red"
					},
					{
						date: "February 2026",
						vignette: `I receive a DocuSign link to sign the "liquidity contract"`,
						description: "A liquidity contract is a document defining the rules regarding the sale of your shares. Banque Transtlantique will email you a link to sign it, through DocuSign.",
						timeline: ["Digital signature"],
						bgColor: "red"
					},
					{
						vignette: "My registration is complete. See you in May 2028 and May 2028!",
						bgColor: "white"
					}
				]
			},
			prixdeVente: {
				sectionTitle: "At what price will I be able to sell my iliad shares?",
				texte: "Each year, an independent financial expert carries out a valuation of the iliad share price. Before the opening of each liquidity window, the iliad share price will be communicated to you, and the total gross amount you will receive for the sale of your shares will be calculated as follows:",
				vignettes: [
					"Number of shares",
					"Price of an iliad share at the time of sale",
					"Price of an iliad share at the time of sale<sup>*</sup>"
				],
				boutonBrochure: "Download the complete brochure"
			},
			faq: {
				sectionTitle: "Q&A",
				disclaimer: "<p> This Q&amp;A is provided for information purposes only, is not intended to be exhaustive, and is intended to answer the main questions that the recipients of the iliad 2025 Free Shares Allocation Plan may have. </p><p>For further details on the terms and conditions of the iliad AGA, please consult the documentation provided, in particular the plan regulations.</p>",
				qa: [{
						question: "Why did I receive an allocation of free Iliad shares?",
						reponse:
							`<p> Ilia's free share allocation plan is designed to involve you in our Group&#39;s development by making you a shareholder in the long term. This allocation rewards your individual performance and recognizes your potential, while expressing the trust we place in you and our desire to build your loyalty over the long term. </p> <p> Please note that this award is strictly personal and confidential. Under no circumstances may you share this information with any third party, whether inside or outside the Group.</p>`
					},
					{
						question: "What documents will I be given to accept my allocation of free shares?",
						reponse:
							'<p>You will or have receive(d) the following documents:</p> <p> <strong>Already received</strong> <ul> <li>Your allocation letter specifying the number of free shares allocated</li> <li>The plan regulations, detailing the terms and conditions for the allocation of free shares (vesting periods and conditions in particular)</li> </ul> </p> <p> <strong>To be received:</strong> <ul> <li>-Mid-January 2025: You will receive an e-mail with your access details to www.Transatplan.com, the website operated by Banque Transatlantique to manage your iliad shares. Once you have received the email, you will be able to create your personal account (registration of your address, bank details, personal email, etc.), to manage your shares portfolio.</li> <li>Early February 2025: Banque Transatlantique will send you, through DocuSign, the liquidity agreement, which defines the conditions for the sale of your shares (timetable, procedures, etc.).</li> </ul> </p>'
					},
					{
						question: "What is the vesting period and when does it start?",
						reponse:
							'<p> The vesting period is the period during which the shares granted are not yet owned by the beneficiary. Prior to expiry of the vesting period, the shares cannot be sold, grant right to vote or opened to receive dividends. </p> <p> The vesting period starts from the grant date in December 2025 and ends on two at the vesting date of Tranche 1 and Tranche 2. </p>'
					},
					{
						question: "What happens to my shares if I leave the Group?",
						reponse:
							'<p> In the event of termination of employment <strong>before the vesting dates</strong>, for any reason whatsoever (except death or retirement), the shares will be lost without compensation. </p> <p> In the event of termination of employment <strong>after the vesting dates</strong>, the beneficiary retains his or her shares until they are bought back. </p>'							
					},
					{
						question: "What happens if the beneficiary deceases during or after the vesting period?",
						reponse:
							'<p> <strong>During the vesting period:</strong> The beneficiary&#39;s heirs may request immediate allocation of the shares by sending a registered letter to the company within 6 months of the beneficiary&#39;s death. In the absence of a request from the heirs within the aforementioned period, the shares will be lost. </p> <p> <strong>After the vesting period:</strong> The beneficiary&#39;s heirs are automatically substituted for the beneficiary&#39;s rights and obligations and may sell the shares. </p>'
					},
					{
						question: "What are the conditions for vesting my shares?",
						reponse:
							'<p> Vesting of shares is subject to meeting the conditions set out in the allocation decision and the plan rules. </p> <p> <strong>Presence condition:</strong> for the definitive vesting of free shares, the beneficiary must have remained an uninterrupted employee of iliad or of a company included in the scope of the iliad Group until the end of the two vesting periods. Consequently, if the employee leaves Iliad or a company included in the iliad Group&#39;s scope of consolidation before the end of the vesting periods, he or she loses all rights to the allocation of shares (except in the event of retirement, death or disability governed by law). No indemnity or compensation will be payable. </p> <p> <strong>Performance conditions:</strong> The final vesting of free shares depends on the meeting of two performance criteria: <ul> <li>A financial criterion (related to the Operational Free Cash Flow “OFCF”)</li> <li>A CSR criterion (related to the co² emissions per gigabit consumed)</li> </ul> </p> <p>The partial or total achievement of these targets may have an impact on the number of shares definitively vested.</p> <p>Performance conditions apply to only 50% of the shares. The other 50% are linked only to the presence condition.</p>'
					},
					{
						question: "Are the Group's performance conditions personally applicable to me?",
						reponse:
							'No, these are collective objectives at group level, to which everyone contributes individually in their day-to-day activities, but there are no individually set objectives.'
					},
					{
						question: "When can I sell my shares?",
						reponse:
							'<p> Once the vesting period has been completed, beneficiaries who have signed the liquidity agreement may sell their free shares each year during a defined period, known as the “liquidity window”, in accordance with the terms and conditions set out in the liquidity agreement (which will be shared with beneficiaries via DocuSign at the beginning of February 2025). </p> <p>The first liquidity window for this plan will open in mid-2028.</p>'
					},
					{
						question: "What is ilia's current share price?",
						reponse:
							'The latest valuation of the iliad share price is 263,00€.'
					},
					{
						question: "How is the value of my shares determined?",
						reponse:
						"The value of my shares is determined each year by an independent financial expert, based on a multi-criteria valuation. Please note that no price is guaranteed. As the exercise price may vary from one valuation to another, it will be notified to the beneficiary each year. The expertise costs are supported by the company."
					},
					{
						question: "How do I notify iliad of my intention to sell my shares?",
						reponse:
							"Once your shares have been vested, you will be able to sell them, partially or totally, during a dedicated period called “liquidity window”. You will then be invited to follow the procedure set out in the liquidity agreement, with documents to complete. All specific and detailed information will be shared with you as soon as the transfer of shares becomes possible."
					},
					{
						question: "How my shares will be taxed?",
						reponse:
							'The taxation of shares depends on different factors, such as the beneficiary&#39;s personal situation and the local regulations in place, which are subject to change. In case of doubt, we recommend that you consult an advisor.'
					},
					{
						question: "How can I update my personal information between now and the vesting or sale of my shares?",
						reponse:
							'Mid-January, you will receive an e-mail containing your access details to www.Transatplan.com, the website operated by Banque Transatlantique to manage your iliad shares. Each beneficiary is invited to update his or her personal data whenever his or her situation changes: tax address, contact email (for the transmission of income tax return forms), bank details. It is essential that this information remains up to date on the Transatplan website, to ensure optimal communication and administrative and financial processes'
					}
				],
			},
			basDePage: {
				touteLaDoc: "Download all my documents",
				boutonReglement: "Plan rules",
				boutonBrochure: "Brochure",
				boutonAttribution: "My allocation letter",
				pourTouteQuestion: "For further questions, please send a message to",
				mentionLegale: "This material is provided for information purposes only - it is simplified and not exhaustive. It has been drawn up without prejudice to the rights and obligations of all stakeholders and has no legal value.",
				usageInterne: "Communication for internal use only and strictly personal",
				companyInfo: "SIRET number : 342376332 00082 - Société anonyme à conseil d'administration capital of €14,930,059.50 Registered at the Paris Registre du Commerce et des Sociétés under number RCS 342 376 332",
			}
		},
	},
};

function formatNFois(value: number, language: string): string {
	const processedLanguage = language === 'fr' ? 'fr-FR' : 'en-US';
	return new Intl.NumberFormat(processedLanguage, { maximumFractionDigits: 2 }).format(value);
}

function formatPct(value: number): string {
	return String(Math.round(value));
}

export function ratioSalaireLabel(user: Pick<App.IUser, 'local' | 'ratio_salaire'>): string {
	const ratio = user.ratio_salaire;
	const language = user.local === 'fr' ? 'fr' : 'en';


	if (ratio  > 0.25 && ratio < 1) {
		const pct = formatPct(Math.abs(ratio) * 100);
		return language === 'fr'
			? `, soit ${pct}% de votre rémunération annuelle brute`
			: `, representing ${pct}% of your gross annual salary`;
	}

	else if (ratio > 1) {
		const times = formatNFois(ratio, language);
		return language === 'fr'
		? `, soit ${times} fois le montant de votre rémunération annuelle brute`
		: `, equivalent of ${times} time your annual base salary`;
	}

	return '';

}