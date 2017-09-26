/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
 *
**/
var suiicons =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var paths = __webpack_require__(1);
	var inject = __webpack_require__(238);

	module.exports = {
	  paths: paths,
	  inject: inject
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  accessibility: __webpack_require__(2),
	  cluster: __webpack_require__(3),
	  home: __webpack_require__(4),
	  navi_airplane: __webpack_require__(5),
	  navi_alertwrench: __webpack_require__(6),
	  navi_analytics: __webpack_require__(7),
	  navi_analytics_rtl: __webpack_require__(8),
	  navi_appstore: __webpack_require__(9),
	  navi_atsymbol: __webpack_require__(10),
	  navi_atv: __webpack_require__(11),
	  navi_badge: __webpack_require__(12),
	  navi_badgeperson: __webpack_require__(13),
	  navi_badgepersoncard: __webpack_require__(14),
	  navi_badgepersoncard_rtl: __webpack_require__(15),
	  navi_badgestar: __webpack_require__(16),
	  navi_bank: __webpack_require__(17),
	  navi_bankcycle: __webpack_require__(18),
	  navi_bankcycle_rtl: __webpack_require__(19),
	  navi_barcode: __webpack_require__(20),
	  navi_bell: __webpack_require__(21),
	  navi_bill: __webpack_require__(22),
	  navi_bill_rtl: __webpack_require__(23),
	  navi_binder: __webpack_require__(24),
	  navi_binder_rtl: __webpack_require__(25),
	  navi_binders: __webpack_require__(26),
	  navi_binoculars: __webpack_require__(27),
	  navi_book: __webpack_require__(28),
	  navi_book_rtl: __webpack_require__(29),
	  navi_books: __webpack_require__(30),
	  navi_boxes: __webpack_require__(31),
	  navi_briefcasecash: __webpack_require__(32),
	  navi_briefcasesearch: __webpack_require__(33),
	  navi_buildinginformation: __webpack_require__(34),
	  navi_buildinginformation_rtl: __webpack_require__(35),
	  navi_buildings: __webpack_require__(36),
	  navi_calculator: __webpack_require__(37),
	  navi_calendar: __webpack_require__(38),
	  navi_calendar_rtl: __webpack_require__(39),
	  navi_calendarbox: __webpack_require__(40),
	  navi_calendarbox_rtl: __webpack_require__(41),
	  navi_calendarclipboard: __webpack_require__(42),
	  navi_calendarclipboard_rtl: __webpack_require__(43),
	  navi_calendarconfigure: __webpack_require__(44),
	  navi_calendarconfigure_rtl: __webpack_require__(45),
	  navi_car: __webpack_require__(46),
	  navi_cart: __webpack_require__(47),
	  navi_checkbook: __webpack_require__(48),
	  navi_checkbook_rtl: __webpack_require__(49),
	  navi_checklist: __webpack_require__(50),
	  navi_checklist_rtl: __webpack_require__(51),
	  navi_climb: __webpack_require__(52),
	  navi_clipboard: __webpack_require__(53),
	  navi_clipboardcheckmark: __webpack_require__(54),
	  navi_cloud: __webpack_require__(55),
	  navi_clouddocument: __webpack_require__(56),
	  navi_cluster: __webpack_require__(57),
	  navi_coins: __webpack_require__(58),
	  navi_compass: __webpack_require__(59),
	  navi_configure: __webpack_require__(60),
	  navi_connectingdots: __webpack_require__(61),
	  navi_contactbowl: __webpack_require__(62),
	  navi_contacts: __webpack_require__(63),
	  navi_contacts_rtl: __webpack_require__(64),
	  navi_controls: __webpack_require__(65),
	  navi_controltower: __webpack_require__(66),
	  navi_creditcards: __webpack_require__(67),
	  navi_crystalball: __webpack_require__(68),
	  navi_cycle: __webpack_require__(69),
	  navi_cycle_rtl: __webpack_require__(70),
	  navi_dashboard: __webpack_require__(71),
	  navi_dashboard_rtl: __webpack_require__(72),
	  navi_decline: __webpack_require__(73),
	  navi_decline_rtl: __webpack_require__(74),
	  navi_deliver: __webpack_require__(75),
	  navi_directory: __webpack_require__(76),
	  navi_distribute: __webpack_require__(77),
	  navi_distribute_rtl: __webpack_require__(78),
	  navi_document: __webpack_require__(79),
	  navi_documentbadge: __webpack_require__(80),
	  navi_dollycart: __webpack_require__(81),
	  navi_download: __webpack_require__(82),
	  navi_enter: __webpack_require__(83),
	  navi_envelope: __webpack_require__(84),
	  navi_envelopechart: __webpack_require__(85),
	  navi_envelopechart_rtl: __webpack_require__(86),
	  navi_exchange: __webpack_require__(87),
	  navi_exchange2: __webpack_require__(88),
	  navi_financialinformation: __webpack_require__(89),
	  navi_financialinformation_rtl: __webpack_require__(90),
	  navi_flag: __webpack_require__(91),
	  navi_flowchart: __webpack_require__(92),
	  navi_folio: __webpack_require__(93),
	  navi_forklift: __webpack_require__(94),
	  navi_formwrench: __webpack_require__(95),
	  navi_gantt: __webpack_require__(96),
	  navi_gantt_rtl: __webpack_require__(97),
	  navi_gauge: __webpack_require__(98),
	  navi_gears: __webpack_require__(99),
	  navi_gearsruler: __webpack_require__(100),
	  navi_gearswrench: __webpack_require__(101),
	  navi_generic: __webpack_require__(102),
	  navi_group: __webpack_require__(103),
	  navi_groupdashed: __webpack_require__(104),
	  navi_groupmove: __webpack_require__(105),
	  navi_groupmove_rtl: __webpack_require__(106),
	  navi_growth: __webpack_require__(107),
	  navi_growth_rtl: __webpack_require__(108),
	  navi_handshake: __webpack_require__(109),
	  navi_headphones: __webpack_require__(110),
	  navi_headphonesquestion: __webpack_require__(111),
	  navi_headphonesquestion_rtl: __webpack_require__(112),
	  navi_household: __webpack_require__(113),
	  navi_key: __webpack_require__(114),
	  navi_ledger: __webpack_require__(115),
	  navi_ledger_rtl: __webpack_require__(116),
	  navi_ledgerclock: __webpack_require__(117),
	  navi_ledgerclock_rtl: __webpack_require__(118),
	  navi_ledgermove: __webpack_require__(119),
	  navi_ledgermove_rtl: __webpack_require__(120),
	  navi_lightbulb: __webpack_require__(121),
	  navi_lightbulbbox: __webpack_require__(122),
	  navi_linedots: __webpack_require__(123),
	  navi_match: __webpack_require__(124),
	  navi_matrix: __webpack_require__(125),
	  navi_medical: __webpack_require__(126),
	  navi_megaphone: __webpack_require__(127),
	  navi_message: __webpack_require__(128),
	  navi_messageexchange: __webpack_require__(129),
	  navi_microphone: __webpack_require__(130),
	  navi_migrate: __webpack_require__(131),
	  navi_migrate_rtl: __webpack_require__(132),
	  navi_model: __webpack_require__(133),
	  navi_moneyanalytics: __webpack_require__(134),
	  navi_moneyedit: __webpack_require__(135),
	  navi_moneygroup: __webpack_require__(136),
	  navi_monitorgift: __webpack_require__(137),
	  navi_mortarboard: __webpack_require__(138),
	  navi_moveahead: __webpack_require__(139),
	  navi_moveahead_rtl: __webpack_require__(140),
	  navi_newpage: __webpack_require__(141),
	  navi_objects: __webpack_require__(142),
	  navi_organizationarrange: __webpack_require__(143),
	  navi_organizationedit: __webpack_require__(144),
	  navi_packages: __webpack_require__(145),
	  navi_paintbrush: __webpack_require__(146),
	  navi_peopleconnect: __webpack_require__(147),
	  navi_person: __webpack_require__(148),
	  navi_personbook: __webpack_require__(149),
	  navi_personcertificate: __webpack_require__(150),
	  navi_personchat: __webpack_require__(151),
	  navi_personedit: __webpack_require__(152),
	  navi_persongear: __webpack_require__(153),
	  navi_persongraph: __webpack_require__(154),
	  navi_persongrid: __webpack_require__(155),
	  navi_personhands2: __webpack_require__(156),
	  navi_personhub: __webpack_require__(157),
	  navi_personinformation: __webpack_require__(158),
	  navi_personinformation_rtl: __webpack_require__(159),
	  navi_personinfosearch: __webpack_require__(160),
	  navi_personlist: __webpack_require__(161),
	  navi_personlist_rtl: __webpack_require__(162),
	  navi_personmissing: __webpack_require__(163),
	  navi_personmoveup: __webpack_require__(164),
	  navi_personnew: __webpack_require__(165),
	  navi_personrotate: __webpack_require__(166),
	  navi_personsearch: __webpack_require__(167),
	  navi_personselect: __webpack_require__(168),
	  navi_personselect2: __webpack_require__(169),
	  navi_personselect3: __webpack_require__(170),
	  navi_personselect4: __webpack_require__(171),
	  navi_personslip2: __webpack_require__(172),
	  navi_personslip2_rtl: __webpack_require__(173),
	  navi_personslipinformation: __webpack_require__(174),
	  navi_personslipinformation_rtl: __webpack_require__(175),
	  navi_personstack: __webpack_require__(176),
	  navi_personstretch: __webpack_require__(177),
	  navi_personstretchedit: __webpack_require__(178),
	  navi_persontarget: __webpack_require__(179),
	  navi_personwave: __webpack_require__(180),
	  navi_personwaveedit: __webpack_require__(181),
	  navi_phonemobilegear: __webpack_require__(182),
	  navi_phonemobilegraph: __webpack_require__(183),
	  navi_piechart: __webpack_require__(184),
	  navi_plan: __webpack_require__(185),
	  navi_pricetag: __webpack_require__(186),
	  navi_productsinformation: __webpack_require__(187),
	  navi_productsinformation_rtl: __webpack_require__(188),
	  navi_pushpin: __webpack_require__(189),
	  navi_puzzle: __webpack_require__(190),
	  navi_pyramid: __webpack_require__(191),
	  navi_receipt: __webpack_require__(192),
	  navi_recycle: __webpack_require__(193),
	  navi_regions: __webpack_require__(194),
	  navi_report: __webpack_require__(195),
	  navi_report_rtl: __webpack_require__(196),
	  navi_reportsearch: __webpack_require__(197),
	  navi_reportsearch_rtl: __webpack_require__(198),
	  navi_resolve: __webpack_require__(199),
	  navi_resolve_rtl: __webpack_require__(200),
	  navi_ribbon: __webpack_require__(201),
	  navi_scales: __webpack_require__(202),
	  navi_scroll: __webpack_require__(203),
	  navi_scroll_rtl: __webpack_require__(204),
	  navi_search: __webpack_require__(205),
	  navi_select: __webpack_require__(206),
	  navi_servers: __webpack_require__(207),
	  navi_shieldapprove: __webpack_require__(208),
	  navi_shieldlock: __webpack_require__(209),
	  navi_ship: __webpack_require__(210),
	  navi_shipcash: __webpack_require__(211),
	  navi_signature: __webpack_require__(212),
	  navi_signpost: __webpack_require__(213),
	  navi_soap: __webpack_require__(214),
	  navi_spaces: __webpack_require__(215),
	  navi_stopwatch: __webpack_require__(216),
	  navi_store: __webpack_require__(217),
	  navi_target: __webpack_require__(218),
	  navi_textsearch: __webpack_require__(219),
	  navi_thumbsup: __webpack_require__(220),
	  navi_ticketperson: __webpack_require__(221),
	  navi_toolbox: __webpack_require__(222),
	  navi_trophy: __webpack_require__(223),
	  navi_truck: __webpack_require__(224),
	  navi_upchart: __webpack_require__(225),
	  navi_upchart_rtl: __webpack_require__(226),
	  navi_upload: __webpack_require__(227),
	  navi_video: __webpack_require__(228),
	  navi_wallet: __webpack_require__(229),
	  navi_webpagesearch: __webpack_require__(230),
	  navi_webpagesearch_rtl: __webpack_require__(231),
	  navi_webpagewarnerror: __webpack_require__(232),
	  navi_webpagewarnerror_rtl: __webpack_require__(233),
	  navi_wrenchregion: __webpack_require__(234),
	  questionmark: __webpack_require__(235),
	  shortcut: __webpack_require__(236),
	  star: __webpack_require__(237),
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = 'M4 10 L28 10 L28 12 C16 12 18 16 24 30 L22 30 L16 20 L10 30 L8 30 C14 16 16 12 4 12 L4 10 M16 2 C20 2 20 8 16 8 C12 8 12 2 16 2 Z';



/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  viewBox: '0 0 48 48',
	  paths: [
	    {
	      d: 'M28.47 41.31c0.66 0 1.19 0.53 1.19 1.19s-0.53 1.19-1.19 1.19 -1.19-0.53-1.19-1.19S27.81 41.31 28.47 41.31zM24.47 41.31c0.66 0 1.19 0.53 1.19 1.19s-0.53 1.19-1.19 1.19c-0.66 0-1.19-0.53-1.19-1.19S23.81 41.31 24.47 41.31zM20.5 41.31c0.66 0 1.19 0.53 1.19 1.19s-0.53 1.19-1.19 1.19 -1.19-0.53-1.19-1.19S19.84 41.31 20.5 41.31z'
	    }
	  ]
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = 'M16 0 L32 10 L28 10 L16 3 L4 10 L0 10 M16 5 L28 12 L28 28 L18 28 L18 20 L14 20 L14 28 L4 28 L4 12 Z';


/***/ },
/* 5 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd06',
	  paths: [{"class":"svg-shortcut","d":"M28.05 42.5L25 45.2v-1.7c-.44-.1-1.4-.15-2.45.6-1.4 1-1.57 1.47-1.57 1.47s-.4-1.24.8-2.7c1.26-1.54 2.67-1.56 3.23-1.5v-1.63l3.05 2.72z"},{"class":"svg-cluster","d":"M28.47 41.3c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm-4 0c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2zm-3.97 0c.66 0 1.2.55 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2z"},{"class":"svg-icon14","d":"M34.3 23.5l.05-.07c.63-.6 1.63-.57 2.22.08.6.66.57 1.68-.07 2.3l-1.32 1.26-.9-3.57zm-10.02-9.6l.38-.47c.55-.67.4-1.62-.35-2.12a1.8 1.8 0 0 0-2.35.32l-1.07 1.3 3.4.97z"},{"class":"svg-icon12","d":"M21.86 20.54L11 13.74 12.7 12l13.5 3.87-.97.95a47.92 47.92 0 0 0-3.37 3.72zm8.23 3.07c-.94.92-1.97 1.83-3.02 2.7L33.35 37 35 35.35l-3.14-13.48-1.77 1.74zm7.54-13.24c-.93-.94-4.02.35-4.02.35-2.27 1.37-5.08 4.65-8.34 7.9-5.25 5.23-11.18 13.06-10.17 14.26 1.02 1.2 9.12-5.3 14.36-10.54 3.3-3.3 6.6-5.82 7.87-8 0 0 1.24-3.02.3-3.96zm-1.33 3.17l-.74 1-2.24-2.28 1.12-.7 1.87 1.98zM18.26 29.25L11.2 28 10 29.24l4.7 3.13s-.6.6-.33.88c.32.34.93-.26.93-.26l3.54 5 1.18-1.24-1.77-7.5z"}]
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28.05 42.5L25 45.2v-1.7c-.44-.1-1.4-.15-2.45.6-1.4 1-1.57 1.47-1.57 1.47s-.4-1.24.8-2.7c1.26-1.54 2.67-1.56 3.23-1.5v-1.63l3.05 2.72z"},{"class":"svg-cluster","d":"M28.47 41.3c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm-4 0c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2zm-3.97 0c.66 0 1.2.55 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2z"},{"class":"svg-icon08","d":"M20.06 28.8c0-.38-.05-.73-.05-1.18 0-.86.94-1.6 2-1.6 1.33 0 1.78 1.08 1.93 1.64l3.7-3.64c-.02-.58 0-2.04 0-2.54 0-2.8 1.85-4.2 4.47-4.43A11.58 11.58 0 0 0 21.5 10C15.18 10 10 15.18 10 21.5c0 5.1 3.4 9.5 8.06 10.96a5.8 5.8 0 0 1 2-3.66zM20 15.37c0-1 .9-1.37 2-1.37s2 .37 2 1.37v8.28c0 1-.88 1.36-2 1.36s-2-.35-2-1.35v-8.28z"},{"class":"svg-icon17","d":"M37.07 26.15c-1.22 1.25-2.2.78-3.48.46l-5.5 6.7c.27 1.32.05 2.72-.9 3.6-1.2 1.1-2.67.78-4.48.9l1.8-1.8c.36-.34.6-1.35 0-1.8l-.9-.9c-.4-.38-1.43-.32-1.8 0l-1.8 1.8c0-1.7-.3-3.37.9-4.47 1.03-.95 2.85-1.1 4.5-.9l4.48-5.37c-.16-1.45-.1-3.52.9-4.48 1.16-1.13 2.54-.8 4.48-.9l-1.8 1.8c-.35.34-.4 1.4 0 1.8l.9.88c.4.38 1.44.35 1.8 0l1.8-1.8c-.02 2.36.23 3.33-.9 4.5z"}]
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon05","d":"M15 15h8v5h-8v-5zm10 0h6v5h-6v-5zm13 2.5c0 2.2-2 2.5-2 2.5h-3v-5h3s2 .2 2 2.5z"},{"class":"svg-icon01","d":"M15 22h8v5h-8v-5zm16 2.4c0 2.3-2 2.6-2 2.6h-4v-5h3.8s2.3.2 2.3 2.4z"},{"class":"svg-icon03","d":"M23 31.3c0 2.3-2 2.7-2 2.7h-6v-5h5.8s2.3 0 2.3 2.3z"},{"class":"svg-icon02","d":"M10 12h3v25h-3V12z"}]
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon05","d":"M33 15h-8v5h8v-5zm-10 5h-6v-5h6v5zm-11-5h3v5h-3s-2-.3-2-2.5c0-2.3 2-2.5 2-2.5z"},{"class":"svg-icon01","d":"M33 22h-8v5h8v-5zm-13.8 0H23v5h-4s-2-.3-2-2.6c0-2.2 2-2.4 2-2.4z"},{"class":"svg-icon03","d":"M25 31.3c0 2.3 2 2.7 2 2.7h6v-5h-5.8S25 29 25 31.3z"},{"class":"svg-icon02","d":"M38 12h-3v25h3V12z"}]
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon08","d":"M35 15h-6.7c0-2.8-2-5-5-5-2.7 0-4.6 2.2-4.6 5H12s1 6 1 12c0 6.2-1 11-1 11h23s-1-4.8-1-11c0-6 1-12 1-12zm-11.6-3c1.5 0 2.6 1.4 2.6 3h-5c0-1.6.8-3 2.4-3m0 21c-3.6 0-6.4-2.8-6.4-6.5s2.8-6.5 6.4-6.5 6.6 3 6.6 6.6-3 6.4-6.6 6.4z"},{"class":"svg-icon12","d":"M28 27c0 2-1.2 1.8-1.7 1.8-1.4 0-1 1-3 1-1.3 0-1.6-1-3-.8-1.2 0-1.7-.8-1.7-2 0-.7.5-1.4 1.3-1.7 0-2 1.7-1.7 2-1.7.5-.7 1.2-1.2 2-1.2 2.2 0 2.3 2.4 2.3 2.4s1.8.4 1.8 2z"}]
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28.05 42.5L25 45.2v-1.7c-.44-.1-1.4-.15-2.45.6-1.4 1-1.57 1.47-1.57 1.47s-.4-1.24.8-2.7c1.26-1.54 2.67-1.56 3.23-1.5v-1.63l3.05 2.72z"},{"class":"svg-cluster","d":"M28.47 41.3c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm-4 0c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2zm-3.97 0c.66 0 1.2.55 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M24.58 21.4c.35.4.52.98.52 1.72 0 .67-.13 1.38-.38 2.15s-.55 1.36-.9 1.76c-.24.28-.5.5-.74.62-.33.2-.68.28-1.05.28-.5 0-.92-.2-1.26-.6-.34-.4-.5-1-.5-1.84 0-.64.12-1.35.36-2.16.24-.8.6-1.44 1.08-1.88.5-.43 1-.65 1.58-.65.52 0 .96.2 1.3.6zm13.4 3.1C38 31.95 31.74 38 24 38s-14-6.05-14-13.5S16.28 11 24 11s14 6.05 14 13.5zm-4.97 5.05h-2.1a6.23 6.23 0 0 1-2.72 1.97c-1.13.44-2.48.66-4.05.66-1.62 0-3.07-.26-4.33-.8a5.94 5.94 0 0 1-2.95-2.48 7.1 7.1 0 0 1-1.05-3.8c0-1.42.32-2.8.94-4.12a6.94 6.94 0 0 1 2.8-3.07 8.88 8.88 0 0 1 4.53-1.08c2.1 0 3.72.54 4.9 1.63a5.38 5.38 0 0 1 1.74 4.07 5.8 5.8 0 0 1-2.23 4.62c-.5.4-.9.58-1.22.58-.1 0-.2-.04-.27-.12-.08-.08-.12-.2-.12-.37 0-.13.05-.42.14-.87l1.5-7.08h-2.6l-.26 1.1c-.56-.9-1.42-1.35-2.6-1.35-1.63 0-2.98.78-4.03 2.33a7.54 7.54 0 0 0-1.3 4.24c0 1.25.37 2.25 1.1 3 .7.76 1.62 1.14 2.7 1.14 1.02 0 1.9-.37 2.68-1.12.1.36.28.64.56.83.27.2.68.3 1.23.3 2.02 0 3.68-.87 4.97-2.58a7.32 7.32 0 0 0 1.55-4.55c0-1.4-.35-2.7-1.03-3.9-.68-1.2-1.66-2.1-2.95-2.75s-2.76-.97-4.4-.97c-1.96 0-3.7.4-5.2 1.2s-2.73 2-3.6 3.6a10.64 10.64 0 0 0-.16 9.85 7.44 7.44 0 0 0 3.52 3.25 13.2 13.2 0 0 0 5.6 1.1c2.25 0 4.15-.44 5.7-1.3a7.14 7.14 0 0 0 3.03-3.15z"}]
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M33.8 22h-3.4a8 8 0 0 0-3.4 6v2h-6a7.2 7.2 0 0 0 0-2.2 5.5 5.5 0 0 0-1.5-3.8l9.6-4.5a2 2 0 0 1 1.2-1.4c-.5-1.3-.5-1-1-1H28a1 1 0 0 1-.8-1 1 1 0 0 1 .8-1s4-.7 4.4 3H34c1 0 1.2 1 1.2 2s-.2 2-1.2 2z"},{"class":"svg-icon05","d":"M13.4 18h8.2c.8 0 1.4 0 1.4 1.2S19 22 18.4 22h-5c-.8 0-1.4-1-1.4-2s.6-2 1.4-2z"},{"class":"svg-icon17","d":"M15 33a5 5 0 1 1 5-5 5 5 0 0 1-5 5zm0-7a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm18 7a5 5 0 1 1 5-5 5 5 0 0 1-5 5zm0-7a2 2 0 1 0 2 2 2 2 0 0 0-2-2z"}]
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd10',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon09","d":"M35 24.6l3-2.3-3.4-1.5 2-3.4H33l.6-3.6-3.5 1-.5-3.7-3 2.2-1.7-3.2-2 3-3-2.4L19 14l-3.5-1 .4 3.6H12l1.6 3.2-3.5 1.2 2.6 2.6-3 2.3 3.4 1.5-2 3 3.7.4-.7 3.6 3.6-1 .4 3.7 3-2.2 1.8 3.2 2-3 3 2.4.8-3.5 3.4 1.2-.3-3.7 3.8.2-1.6-3.4 3.5-1-2.6-2.7zM24 34c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"},{"class":"svg-icon01","d":"M24 16c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-1.6 13l-4-4 1.7-2 2.6 2.4 5.3-6 2 2-7.6 7.5z"}]
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd06',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon09","d":"M35 24.6l3-2.3-3.4-1.5 2-3.4H33l.6-3.6-3.5 1-.5-3.7-3 2.2-1.7-3.2-2 3-3-2.4L19 14l-3.5-1 .4 3.6H12l1.6 3.2-3.5 1.2 2.6 2.6-3 2.3 3.4 1.5-2 3 3.7.4-.7 3.6 3.6-1 .4 3.7 3-2.2 1.8 3.2 2-3 3 2.4.8-3.5 3.4 1.2-.3-3.7 3.8.2-1.6-3.4 3.5-1-2.6-2.7zM24 34c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"},{"class":"svg-icon01","d":"M24 16c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 3c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2zm3 9.3s0 .7-.7.7h-4.6c-.7 0-.7-.7-.7-.7V25c0-.8 1-1 1-1h1l1 2 1-2h1s1 .2 1 1v3.3z"}]
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28.05 42.5L25 45.2v-1.7c-.44-.1-1.4-.15-2.45.6-1.4 1-1.57 1.47-1.57 1.47s-.4-1.24.8-2.7c1.26-1.54 2.67-1.56 3.23-1.5v-1.63l3.05 2.72z"},{"class":"svg-cluster","d":"M28.47 41.3c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm-4 0c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2zm-3.97 0c.66 0 1.2.55 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M36.53 33.97h-25.1a1.45 1.45 0 0 1-1.46-1.45V15.47a1.45 1.45 0 0 1 1.45-1.44h25.1A1.45 1.45 0 0 1 38 15.47v17.05a1.45 1.45 0 0 1-1.45 1.45zm-10.8-13.93l-2.05.08.33-1.98-1.93.62-.38-1.97L20.1 18l-1.14-1.72-1 1.7-1.57-1.27-.43 1.97-1.92-.66.28 2-2.03.02.95 1.77-1.93.85 1.54 1.2-1.54 1.32 1.9.75-1 1.75 2.03.07-.32 2 1.93-.63.38 1.97 1.6-1.23 1.05 1.73 1.07-1.7 1.57 1.27.43-1.97 1.92.66-.3-2 2.04-.02-.96-1.77 1.9-.72-1.5-1.34 1.53-1.33-1.87-.72zM35 19h-7v2h7v-2zm0 4h-7v2h7v-2zm0 4h-7l-.07 1.97L35 29v-2zm-15.98 2.05a5.1 5.1 0 1 1 5.05-5.15 5.1 5.1 0 0 1-5.05 5.15zm-.03-9.3a4.26 4.26 0 0 0 .03 8.53 4.26 4.26 0 1 0-.04-8.52z"},{"class":"svg-icon03","d":"M20.6 27h-3.26a.37.37 0 0 1-.37-.4v-2.2a.38.38 0 0 1 .38-.42h.85l.8 1.03.86-1.03h.74a.4.4 0 0 1 .4.42v2.17a.4.4 0 0 1-.4.4zm-1.56-6.33a1.32 1.32 0 0 1 0 2.64 1.32 1.32 0 0 1 0-2.63z"}]
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M11.5 34h25c1 0 1.5-.7 1.5-1.5v-17c0-.8-.6-1.5-1.4-1.5h-25c-1 0-1.6.7-1.6 1.5v17c0 .8.7 1.5 1.5 1.5zm10.8-14h2l-.3-2 2 .8.3-2L28 18l1-1.7 1 1.7 1.6-1.3.4 2 2-.7-.3 2h2l-1 1.8 2 1-1.6 1 1.7 1.4-2 .7 1 1.7h-2l.4 2-2-.6-.2 2-1.6-1-1 1.6L28 30l-1.5 1-.5-2-2 .7.4-2-2-.2 1-1.7-2-.7L23 24l-1.6-1.3 2-.8-1-2zM13 19h7v2h-7v-2zm0 4h7v2h-7v-2zm0 4h7v2h-7v-2zm16 2c2.8 0 5-2.2 5-5 .2-2.8-2-5-5-5s-5 2-5 5c0 2.7 2.2 5 5 5zm0-9.2c2.4 0 4.3 2 4.2 4.2 0 2.4-1.8 4.3-4.2 4.3-2.4 0-4.3-2-4.3-4.3s2-4.3 4.3-4.2zm-2 6.8v-2.2c0-.4.4-.4.4-.4h.7l1 1 .8-1h1s.2 0 .2.4v2.2s0 .4-.3.4h-3.3c-.4 0-.4-.4-.4-.4zm3.3-4.6c0 .7-.6 1.3-1.3 1.3-.8 0-1.3-.6-1.3-1.3 0-.7.5-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3z"}]
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd05',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon09","d":"M35 24.6l3-2.3-3.4-1.5 2-3.4H33l.6-3.6-3.5 1-.5-3.7-3 2.2-1.7-3.2-2 3-3-2.4L19 14l-3.5-1 .4 3.6H12l1.6 3.2-3.5 1.2 2.6 2.6-3 2.3 3.4 1.5-2 3 3.7.4-.7 3.6 3.6-1 .4 3.7 3-2.2 1.8 3.2 2-3 3 2.4.8-3.5 3.4 1.2-.3-3.7 3.8.2-1.6-3.4 3.5-1-2.6-2.7zM24 34c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z"},{"class":"svg-icon01","d":"M24 16c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 13l-4-2.5-4 2.5 1.3-4.2L18 22h4l2-4 2 4h4l-3.5 2.8L28 29z"}]
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon05","d":"M37 37H11v-3h2v-3h2V21h4v10h3V21h4v10h3V21h4v10h2v3h2v3z"},{"class":"svg-icon03","d":"M36 19H12v-2l12-6 12 6v2z"}]
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M34 31.5l2 1.5h-7l2-5.5 1.4 2c1-1.4 1.7-2 1.7-3.6v-1h3v1c0 2.5-1 4.2-3 5.5zm-22-2.3l-2 .2 2.7-4.4 4 3.3-2.2.4c.6 1.3 1.3 2.3 2.7 3l.8.4-1 2c-.4 0-.8-.2-1-.4-2.2-1-3.8-2.4-4-4.4zm13.4-17L26 10l3 5.7-5.6 1.3 1-2.3c-1.4-.3-3-.2-4.5.6-.2 0-.7.4-.8.5L18 13.2l1-.6c2-1.2 4.4-1.5 6.4-.4z"},{"class":"svg-icon04","d":"M14.5 16c2 0 3.5 1.6 3.5 3.5 0 2-1.6 3.5-3.5 3.5-2 0-3.5-1.6-3.5-3.5 0-2 1.6-3.5 3.5-3.5zm19 0c2 0 3.5 1.6 3.5 3.5 0 2-1.6 3.5-3.5 3.5-2 0-3.5-1.6-3.5-3.5 0-2 1.6-3.5 3.5-3.5zm-10 15c2 0 3.5 1.6 3.5 3.5 0 2-1.6 3.5-3.5 3.5-2 0-3.5-1.6-3.5-3.5 0-2 1.6-3.5 3.5-3.5z"},{"class":"svg-icon05","d":"M29 29H19v-1h1v-1h1v-4h1v4h1v-4h2v4h1v-4h1v4h1v1h1v1z"},{"class":"svg-icon03","d":"M28 22h-8v-1l4-2 4 2v1z"}]
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M14 31.5L12 33h7l-2-5.5-1.4 2c-1-1.4-1.7-2-1.7-3.6v-1h-3v1c0 2.5 1 4.2 3 5.5zm18 2c-.2.3-.6.4-1 .5l-1-2 .8-.3c1.4-.7 2-1.7 2.7-3l-2.2-.4 4-3.3 2.7 4.4-2-.2c-.2 2-1.8 3.5-4 4.4zm-3-21l1 .7-1.2 2.6-.7-.5c-1.4-.8-3-1-4.5-.6l1 2.3-5.5-1.3 3-5.7.6 2.2c2-1 4.4-.8 6.4.4z"},{"class":"svg-icon04","d":"M33.5 16c-2 0-3.5 1.6-3.5 3.5 0 2 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5c0-2-1.6-3.5-3.5-3.5zM18 19.5c0 2-1.6 3.5-3.5 3.5-2 0-3.5-1.6-3.5-3.5 0-2 1.6-3.5 3.5-3.5 2 0 3.5 1.6 3.5 3.5zm10 15c0 2-1.6 3.5-3.5 3.5-2 0-3.5-1.6-3.5-3.5 0-2 1.6-3.5 3.5-3.5 2 0 3.5 1.6 3.5 3.5z"},{"class":"svg-icon05","d":"M19 29h10v-1h-1v-1h-1v-4h-1v4h-1v-4h-2v4h-1v-4h-1v4h-1v1h-1v1z"},{"class":"svg-icon03","d":"M20 22h8v-1l-4-2-4 2v1z"}]
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd10',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M15 14h1v20h-1V14zm3 0h1v20h-1V14zm2 0h3v20h-3V14zm5 0h2v20h-2V14zm11 0h2v20h-2V14zm-7 0h3v20h-3V14zm5 0h1v20h-1V14zm-24 0h3v20h-3V14z"}]
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd11',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon09","d":"M34.4 25c-2-3-4.6 2.4-9.3-8.7-.7-2-4-3.3-6.5-3.2.2-.4 0-1 0-1.5-.6-1.2-2-1.8-3.3-1.3-1.3.5-2 2-1.4 3.2.3.5.6 1 1 1.2-1.7 1.6-3.4 5-2.6 7 4.6 11-1 9 0 12.5l1.7 4s6.5-1.6 11-3.5c4.6-2 11-5.5 11-5.5l-1.6-4zM15.7 11.5c.6-.2 1.2 0 1.5.6.2.6 0 1.3-.6 1.5-.6.2-1.3 0-1.5-.6 0-.7 0-1.3.7-1.6zM28 35c.2 1.2-.4 2.3-1.4 2.8-1 .5-2 0-2.6-1 .5 0 1.3-.5 2-.8l2-1z"}]
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon08","d":"M36.6 24h-19c-1 0-1.6.4-1.6 1.3v11c0 1.2.5 1.7 1.6 1.7h19c1 0 1.4-.3 1.4-1V25.2c0-1-.4-1.3-1.4-1.3zM30 36h-5v-1h5v1zm0-3H18v-1h12v1zm0-3H18v-1h12v1zm6 6h-4v-1h4v1zm0-3h-4v-1h4v1zm0-3h-4v-1h4v1zm0-3H18v-1h18v1z"},{"class":"svg-icon01","d":"M25.3 19l3.7 3H16l3.6-3 3 2.2 2.7-2.3zM14 23.5L10 27h4v-3.4zm-4-12.3v14.4l8.7-7.4-8.7-7zm0-1.3l12.4 10L35 10H10zm16.2 8.3l4.4 3.7H35V11.3l-8.8 7zM35 10z"}]
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon08","d":"M36.5 24h-19c-1 0-1.5.4-1.5 1.3V37c0 .7.5 1 1.4 1h19c1 0 1.6-.5 1.6-1.6v-11c0-1-.5-1.4-1.5-1.4zM22 36h-4v-1h4v1zm0-3h-4v-1h4v1zm0-3h-4v-1h4v1zm7 6h-5v-1h5v1zm7-3H24v-1h12v1zm0-3H24v-1h12v1zm0-3H18v-1h18v1z"},{"class":"svg-icon01","d":"M18.7 18.3L10 25.7V11.3l8.7 7zm6.6.6L22.5 21l-3-2.3-3.6 3h13l-3.7-3zM14 23.5L10 27h4v-3.4zm20.7-12l-8.5 6.7 4.4 3.7H35V11.3l-.3.2zM35 10H10l12.4 10 12.2-9.7.4-.3z"}]
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M20 13h13c1 0 2 1 2 2v21c0 1-.8 2-2 2H20V13z"},{"class":"svg-icon05","d":"M36 34V12H17c0-1 .8-2 1.8-2h17.4c1.2 0 1.8.7 1.8 1.8v20.5c0 1-1 1.7-2 1.7zM14.7 13c-1 0-1.7.8-1.7 1.8v.2h1.3c1 0 1.7.7 1.7 1.7v1.6c0 1-.8 1.7-1.7 1.7H13v3h1.3c1 0 1.7.7 1.7 1.7v1.6c0 1-.8 1.7-1.7 1.7H13v3h1.3c1 0 1.7.7 1.7 1.7v1.6c0 1-.8 1.7-1.7 1.7H13v.2c0 .5.2 1 .5 1.2.3.4.8.6 1.3.6H19V13h-4.3z"},{"class":"svg-icon18","d":"M10.8 16h3.4c.4 0 .8.7.8 1.5s-.4 1.5-.8 1.5h-3.4c-.4 0-.8-.7-.8-1.5s.4-1.5.8-1.5zm0 8h3.4c.4 0 .8.7.8 1.5s-.4 1.5-.8 1.5h-3.4c-.4 0-.8-.7-.8-1.5s.4-1.5.8-1.5zm0 8h3.4c.4 0 .8.7.8 1.5s-.4 1.5-.8 1.5h-3.4c-.4 0-.8-.7-.8-1.5s.4-1.5.8-1.5z"}]
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M28 13H15c-1 0-2 1-2 2v21c0 1 .8 2 2 2h13V13z"},{"class":"svg-icon05","d":"M12 34V12h19c0-1-.8-2-1.8-2H11.8c-1.2 0-1.8.7-1.8 1.8v20.5c0 1 1 1.7 2 1.7zm21.7 2c-1 0-1.7-.7-1.7-1.7v-1.6c0-1 .8-1.7 1.7-1.7H35v-3h-1.3c-1 0-1.7-.7-1.7-1.7v-1.6c0-1 .8-1.7 1.7-1.7H35v-3h-1.3c-1 0-1.7-.7-1.7-1.7v-1.6c0-1 .8-1.7 1.7-1.7H35v-.2c0-1-.8-1.8-1.7-1.8H29v25h4.3c.4 0 1-.2 1.2-.6.3-.3.5-.7.5-1.2V36h-1.3z"},{"class":"svg-icon18","d":"M37.2 16h-3.4c-.4 0-.8.7-.8 1.5s.4 1.5.8 1.5h3.4c.4 0 .8-.7.8-1.5s-.4-1.5-.8-1.5zm.8 9.5c0 .8-.4 1.5-.8 1.5h-3.4c-.4 0-.8-.7-.8-1.5s.4-1.5.8-1.5h3.4c.4 0 .8.7.8 1.5zm0 8c0 .8-.4 1.5-.8 1.5h-3.4c-.4 0-.8-.7-.8-1.5s.4-1.5.8-1.5h3.4c.4 0 .8.7.8 1.5z"}]
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M11 10l-1 1v26l1 1h7V10h-7zm3 25.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM16 25h-4V12h4v13z"},{"class":"svg-icon10","d":"M20 10v28h8V10h-8zm4 25.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM26 25h-4V12h4v13z"},{"class":"svg-icon02","d":"M37 10h-7v28h7l1-1V11l-1-1zm-3 25.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM36 25h-4V12h4v13z"}]
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon05","d":"M27.5 18.8c-.8-1-2-1.7-3.5-1.7-1.4 0-2.7.8-3.5 1.8l-4.8 1.6c1.7 0 3 1 4 2 .7.8 1 1.8 1.3 2.4V26c0 .8 0 1.5-.3 2l2-.3c.4 0 .6-.4.5-.7l-.2-1h2l-.2 1c0 .3 0 .6.5.7l2 .4c-.3-.5-.4-1.2-.4-2V25c.2-.6.6-1.6 1.4-2.4 1-1 2.2-2 4-2l-5-1.6z"},{"class":"svg-icon12","d":"M38 27c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5zm-5-3.2c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2 3.2-1.4 3.2-3.2-1.4-3.2-3.2-3.2zM20 27c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.2 5 5zm-5-3.2c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1.8 0 3.2-1.4 3.2-3.2s-1.4-3.2-3.2-3.2z"}]
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon01","d":"M31 13H17.7v25H31c1.3 0 2-.7 2-2V15c0-1-1-2-2-2z"},{"class":"svg-icon09","d":"M34 35V12H14.8c0-1 .8-2 2-2h17c1.3 0 2.2.7 2.2 2v21c0 1-1 2-2 2zm-22 1V15c0-1 1-2 2-2h3v25h-3c-1 0-2-1-2-2z"}]
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon01","d":"M30 13H17c-1 0-2 1-2 2v21c0 1.3.7 2 2 2h13V13z"},{"class":"svg-icon09","d":"M14 35V12h19.2c0-1-.8-2-2-2h-17c-1.3 0-2.2.7-2.2 2v21c0 1 1 2 2 2zm20 3h-3V13h3c1 0 2 1 2 2v21c0 1-1 2-2 2z"}]
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd05',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M14 10c-1.7 0-3 .4-3 1.6v24.8c0 1.2 1.3 1.6 3 1.6s3-.4 3-1.6V11.6c0-1.2-1.4-1.6-3-1.6zm2 26h-4v-2h4v2zm0-21h-4v-2h4v2z"},{"class":"svg-icon05","d":"M21 10c-1.6 0-3 .4-3 1.6v24.8c0 1.2 1.4 1.6 3 1.6s3-.4 3-1.6V11.6c0-1.2-1.3-1.6-3-1.6zm2 26h-4v-2h4v2zm0-21h-4v-2h4v2z"},{"class":"svg-icon03","d":"M38 35.4L31.3 12c-.4-1.2-2-1-3.6-.7-1.7.4-3 1-2.7 2.3L31.8 37c.3 1.2 1.8 1.2 3.5.7 1.8-.4 3-1 2.7-2.3zM27.2 16.6l-.5-1.8 3.7-1 .5 1.8-3.7 1zm5.4 19.2l-.5-1.8 3.7-1 .4 1.8-3.7 1z"}]
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd05',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon11","d":"M18 12h13v12H18V12z"},{"class":"svg-icon03","d":"M11 25h13v12H11V25z"},{"class":"svg-icon15","d":"M25 25h13v12H25V25z"}]
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon18","d":"M29 18.3c-5.4 0-9.8 4.5-9.8 10 0 1.6.4 3.3 1.2 4.7H14c-2.3 0-4-2-4-4V19c0-2.2 1.7-4 4-4h18c2.2 0 4 1.7 4 4v2.4c-1.8-2-4-3-7-3zM27 14v-1h-7v1h-2v-3h11v3h-2z"},{"class":"svg-icon09","d":"M29.5 37c-4.8 0-8.6-3.7-8.6-8.5 0-4.7 3.7-8.5 8.5-8.5s8.6 3.8 8.6 8.5c0 4.8-3.8 8.6-8.5 8.6zM24 33h11v-1h-1v-5h-2v5h-1.3v-5h-2.3v5H27v-5h-2v5h-1v1zm5.4-11l-6.2 4h12.6l-6.4-4z"}]
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd10',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon18","d":"M29 14v-2h-9v2h-2v-4h13v4h-2zm6 20H20.8a8.5 8.5 0 0 0 5.2-7.2 7.2 7.2 0 0 0-7-6.8c-3.6 0-7 3.3-7 6.8a9 9 0 0 0 1.5 5l-1.3 2c-.8-.5-1.2-1.3-1.2-2.8V19c0-2.2.8-3 3-3h21c2.2 0 3 .8 3 3v12c0 2.2-.8 3-3 3z"},{"class":"svg-icon12","d":"M19 32a5 5 0 1 1 5-5 5 5 0 0 1-5 5zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3z"},{"class":"svg-icon15","d":"M16.6 33L15 32l-3 4.6a1.5 1.5 0 0 0 .5 1 2 2 0 0 0 1.3 0z"}]
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M34 10H14a2 2 0 0 0-2 2v24c0 1 .8 2 2 2h20c1.2 0 2-1 2-2V12c0-1-.8-2-2-2zm-2 17H16v-1h1V13h7v3h7v10h1v1zm-9 6h9c.6 0 1 .4 1 1s-.4 1-1 1h-9c-.6 0-1-.4-1-1s.4-1 1-1zm-7-4h3c.6 0 1 .4 1 1s-.4 1-1 1h-3c-.6 0-1-.4-1-1s.4-1 1-1zm7 0h9c.6 0 1 .4 1 1s-.4 1-1 1h-9c-.6 0-1-.4-1-1s.4-1 1-1zm-7 4h3c.6 0 1 .4 1 1s-.4 1-1 1h-3c-.6 0-1-.4-1-1s.4-1 1-1zm2-18h2v2h-2v-2zm3 0h2v2h-2v-2zm-3 3h2v2h-2v-2zm3 0h2v2h-2v-2zm-3 3h2v2h-2v-2zm3 0h2v2h-2v-2zm-1 3h1v2h-1v-2zm5-6h2v2h-2v-2zm3 0h2v2h-2v-2zm-3 3h2v2h-2v-2zm3 0h2v2h-2v-2zm-1 3h1v2h-1v-2z"}]
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.7-1.5 1.7s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M34 38H14a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2zm-9-9h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2zm0 4h-9a1 1 0 0 0 0 2h9a1 1 0 0 0 0-2zm7-4h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2zm0 4h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2zm-8-17h-7v10h7V16zm7-3h-7v13h7V13zm-1 2h-2v2h2v-2zm-3 0h-2v2h2v-2zm3 3h-2v2h2v-2zm-3 0h-2v2h2v-2zm3 3h-2v2h2v-2zm-3 0h-2v2h2v-2zm5 5h-8v1h8v-1zm-4-2h-1v2h1v-2zm-5-6h-2v2h2v-2zm-3 0h-2v2h2v-2zm3 3h-2v2h2v-2zm-3 0h-2v2h2v-2zm1 3h-1v2h1v-2zm3 2h-8v1h8"}]
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon05","d":"M24 38H10v-2h1V12s.4-1 1-1h11l1 1v26zm-8-25h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3zm0 8h3v-3h-3v3zm6-23h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3z"},{"class":"svg-icon02","d":"M10 38h14V17s.4-1 1-1h11l1 1v19h1v2H10zm19-20h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3zm0 8h3v-3h-3v3zm6-18h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3z"}]
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M32 11H17c-.6 0-2 1.4-2 2v22c0 .6 1.4 2 2 2h15c.6 0 2-1.4 2-2V13c0-.6-1.4-2-2-2zM21 34h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3v-2h3v2zm5 12h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3v-2h3v2zm5 12h-3v-6h3v6zm0-8h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4H18v-4h13v4z"}]
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon11","d":"M35 38H14c-2.4 0-3-.5-3-3V16h27v19c0 2.5-.4 3-3 3zM16 23h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3zm5-15h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3zm5-15h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3zm5-15h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3zm5-10h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3z"},{"class":"svg-icon08","d":"M38 15H11c0-2.4-.3-4 2-4h1v1c0 .7 1.3 2 2 2h2c.7 0 2-1.3 2-2v-1h9v1c0 .7 1.3 2 2 2h2c.7 0 2-1.3 2-2v-1h1c2.3 0 2 1.5 2 4z"},{"class":"svg-icon18","d":"M33 13h-2v-2c0-.5.4-1 1-1 .5 0 1 .5 1 1v2zm-17 0v-2c0-.5.4-1 1-1s1 .5 1 1v2h-2z"}]
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon11","d":"M38 35c0 2.5-.6 3-3 3H14c-2.6 0-3-.5-3-3V16h27v19zM16 18h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3zm5-10h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3zm5-10h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3zm5-15h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3zm5-10h-3v3h3v-3zm0 5h-3v3h3v-3zm0 5h-3v3h3v-3z"},{"class":"svg-icon08","d":"M38 15H11c0-2.5-.3-4 2-4h1v1c0 .7 1.3 2 2 2h2c.7 0 2-1.3 2-2v-1h9v1c0 .7 1.3 2 2 2h2c.7 0 2-1.3 2-2v-1h1c2.3 0 2 1.6 2 4z"},{"class":"svg-icon18","d":"M31 13v-2c0-.5.4-1 1-1 .5 0 1 .5 1 1v2h-2zm-15-2c0-.5.4-1 1-1s1 .5 1 1v2h-2v-2z"}]
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd10',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon11","d":"M23 34v-8l5-3v-2h3v1h2l1 .6V19H10v15c0 .8.2 2 1 2h12v-2zm0-13h3v3h-3v-3zm-5 0h3v3h-3v-3zm0 5h3v3h-3v-3zm-2 8h-3v-3h3v3zm0-5h-3v-3h3v3zm2 5v-3h3v3h-3z"},{"class":"svg-icon08","d":"M10 13s0-1 2-1h1v2s1 2 2 2h2c1 0 2-2 2-2v-2h6v2s1 2 2 2h2c1 0 2-2 2-2v-2h2s1 .3 1 1v4H10v-4z"},{"class":"svg-icon18","d":"M15 11s0-1 1-1 1 1 1 1v3h-2v-3zm12 0s0-1 1-1 1 1 1 1v3h-2v-3z"},{"class":"svg-icon04","d":"M25 27l6.5-3 6.5 3-6.5 3-6.5-3zm7 4l6-3v7l-6 3v-7zm-1 7l-6-3v-7l6 3v7z"}]
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd10',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon11","d":"M14 19v3.6l1-.6h2v-1h3v2l5 3v10h12c.8 0 1-1.2 1-2V19H14zm11 5h-3v-3h3v3zm5 10h-3v-3h3v3zm0-5h-3v-3h3v3zm0-5h-3v-3h3v3zm5 10h-3v-3h3v3zm0-5h-3v-3h3v3z"},{"class":"svg-icon08","d":"M14 17v-4l1-1h2v2s1 2 2 2h2c1 0 2-2 2-2v-2h6v2s1 2 2 2h2c1 0 2-2 2-2v-2h1c2 0 2 1 2 1v4H14z"},{"class":"svg-icon04","d":"M23 27l-6.5-3-6.5 3 6.5 3 6.5-3zm-7 11l-6-3v-7l6 3v7zm1-7l6-3v7l-6 3v-7z"},{"class":"svg-icon18","d":"M33 11s0-1-1-1-1 1-1 1v3h2v-3zm-12 3h-2v-3s0-1 1-1 1 1 1 1v3z"}]
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon11","d":"M10 18v14c0 2.2-.4 4 1 4h12v-2h-1v-3h1v-2h-1v-3h1v-2h-1v-3h3v1h1.2c.3-.8 2-.8 2.2-.8 0 0 .2-1 1.5-1.5 3-1 4 1.7 4 1.7V18H10zm5 16h-3v-3h3v3zm0-5h-3v-3h3v3zm5 5h-3v-3h3v3zm0-5h-3v-3h3v3zm0-5h-3v-3h3v3z"},{"class":"svg-icon08","d":"M10 17v-3s0-2 1-2h2v2c0 .6 1.4 2 2 2h2c.6 0 2-1.4 2-2v-2h6v2c0 .6 1.4 2 2 2h2c.6 0 2-1.4 2-2v-2h2c1 0 1 2 1 2v3H10z"},{"class":"svg-icon18","d":"M27 25v-2c0-.5.3-1 1-1h1v-.7c0-.5 1-1.3 2-1.3s2 1 2 1.3v.7h1c.8 0 1 0 1 1v2h-8zm4-4c-.6 0-1 .4-1 1 0 .5.4 1 1 1 .5 0 1-.5 1-1 0-.6-.5-1-1-1zm-3-11c.5 0 1 .5 1 1v3h-2v-3c0-.5.5-1 1-1zm-12 0c.5 0 1 .5 1 1v3h-2v-3c0-.5.5-1 1-1z"},{"class":"svg-icon01","d":"M37.2 38h-12c-.5 0-1.2-.7-1.2-1.2v-13c0-.5.3-.8.8-.8H26v1h-1v13h12V24h-1v-1h1.2c.5 0 .8.3.8.8v13.4c0 .5-.3.8-.8.8z"},{"class":"svg-icon18","d":"M27 32h8v2h-8v-2zm0-4h8v2h-8v-2z"}]
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon11","d":"M38 32V18H14v2.7s1-1.6 3.3-1.6c1.7 0 2.7 1.4 2.7 2 0 0 1.4-.3 1.8 1H23v-1h3v3h-1v2h1v3h-1v2h1v3h-1v2h12c1.4 0 1-1.8 1-4zm-7 2h-3v-3h3v3zm0-5h-3v-3h3v3zm0-5h-3v-3h3v3zm5 10h-3v-3h3v3zm0-5h-3v-3h3v3z"},{"class":"svg-icon08","d":"M38 17v-3s0-2-1-2h-2v2c0 .6-1.4 2-2 2h-2c-.6 0-2-1.4-2-2v-2h-6v2c0 .6-1.4 2-2 2h-2c-.6 0-2-1.4-2-2v-2h-2c-1 0-1 2-1 2v3h24z"},{"class":"svg-icon18","d":"M20 10c-.5 0-1 .5-1 1v3h2v-3c0-.5-.5-1-1-1zm13 1v3h-2v-3c0-.5.5-1 1-1s1 .5 1 1zM20 22h-1v-.7c0-.5-1-1.3-2-1.3s-2 1-2 1.3v.7h-1c-.4 0-1 .3-1 1v2h8v-2c0-.5-.3-1-1-1zm-3 1c-.5 0-1-.5-1-1a1 1 0 0 1 2 0c0 .5-.4 1-1 1z"},{"class":"svg-icon01","d":"M10.8 38h12c.5 0 1.2-.7 1.2-1.2v-13c0-.5-.3-.8-.8-.8H22v1h1v13H11V24h1v-1h-1.2c-.5 0-.8.3-.8.8v13.4c0 .5.3.8.8.8z"},{"class":"svg-icon18","d":"M21 32h-8v2h8v-2zm0-2h-8v-2h8v2z"}]
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon11","d":"M27 24v-3h2c0-.8 0-1.5.4-2H10v13c0 2.2-.4 4 1 4h8v-2h-2v-3h2.2a4 4 0 0 1 2.8-3.2V26h3v1.3h.5l3-3.3H27zM15 34h-3v-3h3v3zm0-5h-3v-3h3v3zm5 0h-3v-3h3v3zm0-5h-3v-3h3v3zm5 0h-3v-3h3v3zm8 12h-5l2-2.2 4-5V32c0 2.2.3 4-1 4z"},{"class":"svg-icon18","d":"M37 26.4c-1 1-2.3 1-3.7.6l-2 2.2L28 33c.4 1.3.2 3-.8 4-1.2 1.2-2.7 1.3-4.3.5l1.8-1.8c.3-.3.4-1 0-1.3L23.6 33c-.5-.3-1-.3-1.4 0l-1.7 2c-.7-1.8-.7-3.3.5-4.5 1-1 2.5-1 4-.5l2.4-2.7 2.5-3c-.5-1.3-.6-3.2.5-4.2 1.2-1 2.7-1.3 4.3-.6l-1.8 2c-.4.2-.4.8 0 1.2l1.3 1.3c.4.3 1 .2 1.4-.2l1.8-1.8c.8 1.6.6 3.2-.6 4.4z"},{"class":"svg-icon08","d":"M10 17v-3s0-2 1-2h2v2c0 .6 1.4 2 2 2h2c.6 0 2-1.4 2-2v-2h6v2c0 .6 1.4 2 2 2h2c.6 0 2-1.4 2-2v-2h2c1 0 1 2 1 2v3H10z"},{"class":"svg-icon18","d":"M28 10c.5 0 1 .5 1 1v3h-2v-3c0-.5.5-1 1-1zm-12 0c.5 0 1 .5 1 1v3h-2v-3c0-.5.5-1 1-1z"}]
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon11","d":"M20 36h-5c-1.3 0-1-1.8-1-4v-3l4 4.8 2 2.2zm17 0h-8v-2h2v-3h-2.2c-.4-1.6-1.3-2.7-2.8-3.2V26h-3v1.3h-.5l-3-3.3H21v-3h-2c0-.8 0-1.5-.4-2H38v13c0 2.2.4 4-1 4zM26 21h-3v3h3v-3zm5 5h-3v3h3v-3zm0-5h-3v3h3v-3zm5 10h-3v3h3v-3zm0-5h-3v3h3v-3z"},{"class":"svg-icon08","d":"M38 17v-3s0-2-1-2h-2v2c0 .6-1.4 2-2 2h-2c-.6 0-2-1.4-2-2v-2h-6v2c0 .6-1.4 2-2 2h-2c-.6 0-2-1.4-2-2v-2h-2c-1 0-1 2-1 2v3h24z"},{"class":"svg-icon18","d":"M20 10c-.5 0-1 .5-1 1v3h2v-3c0-.5-.5-1-1-1zm13 1v3h-2v-3c0-.5.5-1 1-1s1 .5 1 1zM11 26.4c1 1 2.3 1 3.7.6l2 2.2L20 33c-.4 1.3-.2 3 .8 4 1.2 1.2 2.7 1.3 4.3.5l-1.8-1.8c-.3-.3-.4-1 0-1.3l1.2-1.3c.5-.3 1-.3 1.4 0l1.7 2c.7-1.8.7-3.3-.5-4.5-1-1-2.5-1-4-.5l-2.4-2.7-2.5-3c.5-1.3.6-3.2-.5-4.2-1.2-1-2.7-1.3-4.3-.6l1.8 2c.4.2.4.8 0 1.2L13.7 24c-.4.3-1 .2-1.4-.2L10.5 22c-.8 1.6-.6 3.2.6 4.4z"}]
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon11","d":"M37 28h-3a2.5 2.5 0 0 0 0-.5 2.5 2.5 0 1 0-5 .5H18a2.5 2.5 0 1 0-5 0h-2a2.3 2.3 0 0 1-1-1.4 2.5 2.5 0 0 1 1-1.6v-2s0-1.6 1-2a13.6 13.6 0 0 1 2 0c.3 0 2.6-2.3 8-2a17.4 17.4 0 0 1 9 3s5.4.8 6 3a1.5 1.5 0 0 1 1 1c0 1.3-1.3 1.4-1 2zm-17-7a8.3 8.3 0 0 0-5 2h5v-2zm1 0v2h8s-4-2.7-8-2z"},{"class":"svg-icon14","d":"M15.5 26a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm16 0a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5z"}]
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M32 36c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2zm-9 0c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z"},{"class":"svg-icon12","d":"M38 17s-1.6 6.5-3 10c-.3 1.2-1 2-2 2H19v2h14c.6 0 1 .4 1 1s-.4 1-1 1H19c-1 0-2-.5-2-1l-4-19h-2c-.7 0-1-.3-1-1 0-.5.3-1 1-1h3s1 .5 1 1l.7 3H37c1 0 1 1.6 1 2zm-7 10h2l1-4h-3v4zM21 17h-5l1 4h4v-4zm0 6h-3l1 4h2v-4zm8-6h-6v4h6v-4zm0 6h-6v4h6v-4zm2-6v4h4l1-4h-5z"}]
	};

/***/ },
/* 48 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd06',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon05","d":"M16 21v12h22V21H16zm2 2h5v2h-5v-2zm3 3h14v2H21v-2zm14 5h-6v-2h6v2zm1-6h-5v-2h5v2z"},{"class":"svg-icon06","d":"M12 17v11h-2V15h22v2H12zm3 3v11h-2V18h22v2H15z"}]
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd06',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon05","d":"M16 21v12h22V21H16zm2 2h5v2h-5v-2zm7 8h-6v-2h6v2zm8-3H19v-2h14v2zm3-3h-5v-2h5v2z"},{"class":"svg-icon06","d":"M12 17v11h-2V15h22v2H12zm3 3v11h-2V18h22v2H15z"}]
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M34 10H14c-.7 0-1 .6-1 1.3v25.4c0 .7.6 1.3 1.3 1.3h19.4c.7 0 1.3-.6 1.3-1.3V11.3c0-.7-.3-1.3-1-1.3zM22 30.2L18.3 33l-2.2-1.8c-.2 0-.3-.4 0-.5l.5-.6h.6l1 1 2-2h.6l1 .8v.4zm0-7L18.3 26l-2.2-1.8c-.2 0-.3-.4 0-.5l.5-.6h.6l1 1 2-2h.6l1 .8v.4zm0-7L18.3 19l-2.2-1.8c-.2 0-.3-.4 0-.5l.5-.6h.6l1 1 2-2h.6l1 .8v.4zM32 32h-9v-2h9v2zm0-7h-9v-2h9v2zm0-7h-9v-2h9v2z"}]
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	 	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M34 10H14c-.7 0-1 .6-1 1.3v25.4c0 .7.6 1.3 1.3 1.3h19.4c.7 0 1.3-.6 1.3-1.3V11.3c0-.7-.3-1.3-1-1.3zm-9 22h-9v-2h9v2zm0-7h-9v-2h9v2zm0-7h-9v-2h9v2zm8 12.2L29.3 33 27 31.2v-.5l.7-.6h.6l1 1 2-2h.6l1 .8v.4zm0-7L29.3 26 27 24.2v-.5l.7-.6h.6l1 1 2-2h.6l1 .8v.4zm0-7L29.3 19 27 17.2v-.5l.7-.6h.6l1 1 2-2h.6l1 .8v.4z"}]
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd02',
	  paths: [{"class":"svg-shortcut","d":"M28.05 42.5L25 45.2v-1.7c-.44-.1-1.4-.15-2.45.6-1.4 1-1.57 1.47-1.57 1.47s-.4-1.24.8-2.7c1.26-1.54 2.67-1.56 3.23-1.5v-1.63l3.05 2.72z"},{"class":"svg-cluster","d":"M28.47 41.3c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm-4 0c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2zm-3.97 0c.66 0 1.2.55 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M20 36v-3h4v-3h4v-3h4v-3h4v12H20z"},{"class":"svg-icon12","d":"M23.88 23.36c-.24.27-.86.37-1.2.08l-2.95-2.36-.37 2.74 2.74 1.74c.5.13.87.6.87 1.15l-.03 3.47a1.1 1.1 0 0 1-1.14 1.13c-.65 0-1.12-.47-1.12-1.13v-2.7l-2.23-1.42c-.2.02-.44 0-.7-.04l-.32-.03-.38 3.6c-.04.33-.2.6-.46.8.04.26.02.53-.1.78l-2 3.36c-.3.6-.93.8-1.5.5-.6-.3-.8-.92-.5-1.5l1.94-3.4c.08-.14.2-.27.32-.38a1.35 1.35 0 0 1-.03-.4l.4-3.72c-.26-.12-.4-.33-.36-.7l.74-6.14-2.02 1.3.1 2.55c.02.46-.27.84-.63.84-.37 0-.86-.38-.87-.83l-.13-3.07c-.12-.36 0-.7.38-.94l2.77-1.8c.23-.15.5-.23.77-.2.15-.2.4-.38.6-.5a3.25 3.25 0 0 0 3.22 1.2l.12.2c.24.1.45.28.56.5l.73 1.9c.05.07.05.15.07.23l2.52 2.2c.34.3.42.75.18 1.03zm-6.28-9.58c-.2 1.07.5 2.1 1.58 2.3 1.07.22 2.1-.5 2.3-1.56a1.97 1.97 0 0 0-1.56-2.32c-1.08-.2-2.12.5-2.32 1.58z"}]
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M33.2 38H14.7c-.7 0-1.7-1.3-1.7-2V17c0-.7 1-2 1.7-2H16v2h-1v19h18V17h-1v-2h1.2c.7 0 1.8 1.3 1.8 2v19c0 .7-1 2-1.8 2z"},{"class":"svg-icon17","d":"M18 17v-2c0-.8.3-1 1-1h2.2l-.2-1c0-1.7 1.3-3 3-3a3 3 0 0 1 3 3c0 .3 0 .7-.2 1H29c.7 0 1 .3 1 1v2H18zm6-5.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z"},{"class":"svg-icon12","d":"M18 25h12v2H18v-2zm0-2v-2h12v2H18zm12 6v2H18v-2h12z"}]
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M33.2 15H32v2h1v19H15V17h1v-2h-1.3c-.7 0-1.7 1.3-1.7 2v19c0 .7 1 2 1.7 2h18.5c.7 0 1.8-1.3 1.8-2V17c0-.7-1-2-1.8-2z"},{"class":"svg-icon17","d":"M29 14h-2.2l.2-1a3 3 0 0 0-3-3c-1.7 0-3 1.3-3 3 0 .4 0 .7.2 1H19c-.7 0-1 .2-1 1v2h12v-2c0-.7-.3-1-1-1zm-5 .5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"},{"class":"svg-icon03","d":"M29.8 24.7L23.5 31l-4.2-4c-.3 0-.4-.7 0-1l1-1.3c.4-.2 1-.2 1.2 0l1.7 1.7 4-4.2c.4-.3.7-.3 1 0l1.6 1.7c.3.2.2.5 0 .7z"}]
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M32.5 21.3S32.2 14 26 14c-2.4 0-4.6 1-5.7 3h-1.8c-2.8 0-4.8 2.2-5 5.3-2 .6-3.5 2.6-3.5 5 0 3 2.5 4.8 5.5 4.8l1.8.2c1.7 1.2 4 1.8 6.8 1.8s5-.6 6.7-1.8H33c3 0 5-2 5-5-.2-4.8-5.5-6-5.5-6zm-.7 9h-1.5c-1.4 1-3.7 1.6-5.8 1.6-2.2 0-4.2-.7-5.6-1.6-.3 0-.6-.2-1 0-3 .7-6.3-.6-6.2-3.7 0-2 1.8-3 3.7-3.4-.3-2.6 1-4.6 3.8-4.5h2.2c1-1.6 2-3 4-3 5.5 0 5.3 6.6 5.2 6.6 0 0 5.2.6 5.5 5 .2 2.4-1.7 3.2-4.4 3z"}]
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M32.5 19.5S32.2 12 26 12c-2.4 0-4.6 1-5.7 3h-1.8c-2.8 0-4.8 2.3-5 5.5-2 .6-3.5 2.7-3.5 5 0 3.2 2.5 5 5.5 5 .4 0 1 0 1.5.2V29c-2.7.3-5.3-1-5.2-4 0-2 1.8-3 3.7-3.4-.3-2.7 1-4.8 3.8-4.7h2.2c1-1.7 2-3.2 4-3.2 5.5 0 5.3 6.8 5.2 6.8 0 0 5.2.7 5.5 5 .2 2.6-1.7 3.4-4.4 3.2H31v1.8h2c3 0 5-2 5-5-.2-5-5.5-6-5.5-6z"},{"class":"svg-icon12","d":"M29.2 21H18.8c-.4 0-.8.4-.8.8v13.4c0 .4.4.8.8.8h10.4c.4 0 .8-.4.8-.8V21.8c0-.4-.3-.8-.8-.8zM27 32h-6v-1h6v1zm0-3h-6v-1h6v1zm0-3h-6v-1h6v1z"}]
	};

/***/ },
/* 57 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd02',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M20.8 19h14.4a1.8 1.8 0 0 1 1.8 1.8v14.4a1.8 1.8 0 0 1-1.8 1.8H20.8a1.8 1.8 0 0 1-1.8-1.8V20.8a1.8 1.8 0 0 1 1.8-1.8z"},{"class":"svg-icon03","d":"M18.3 17H33a2.2 2.2 0 0 0-2-2H17a2.2 2.2 0 0 0-2 2v14a2.2 2.2 0 0 0 2 2V19c0-.8 0-2 1.3-2z"},{"class":"svg-icon06","d":"M15 13h15a2.2 2.2 0 0 0-2-2H13a2.2 2.2 0 0 0-2 2v15c0 1 0 2 2 2V15a2.2 2.2 0 0 1 2-2z"}]
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd10',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon09","d":"M15.3 27c0-6 5-10.8 10.8-10.8 2.5 0 4.7.6 6.5 1.6-1.7-3.4-5.2-5.7-9.2-5.7C17.6 12 13 17 13 22.6c0 2.5 1 4.8 2.4 6.6v-2z"},{"class":"svg-icon01","d":"M26.5 17.8c-5.3 0-9.6 4.2-9.6 9.5 0 5.2 4.2 9.4 9.5 9.4s9.5-4.2 9.5-9.4c0-5.3-4.2-9.5-9.5-9.5zm-6 5.2l6-3.2 6 3.2v1h-12v-1zM33 32H20v-1h1v-1h1v-5h1.7v5h1.7v-5h2v5h1.8v-5h2v5h.8v1h1v1z"}]
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon18","d":"M24 10c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm0 25c-6 0-11-5-11-11s5-11 11-11 11 5 11 11-5 11-11 11z"},{"class":"svg-icon08","d":"M24 13.6l-1 5.6 2-1-1-4.6zM34.3 24l-5.6.8 1-1.8 4.6 1zM23 30.3l2-1.8-1 5.6-1-3.8zm-4.6-5.6l-4.7-1 5.6-.8-1 1.8zM22 22l-5.5 9.4 9.4-5.6 5.5-9.4L22 22zm2 3.8c-1 0-2-1-2-2s1-1.8 2-1.8 2 1 2 2-1 1.8-2 1.8z"}]
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon18","d":"M11.2 20.7c1 1 2.7 1 4.2.7L18 24l3.5-3.3-2.5-2.5c.4-1.5 0-3-1.2-4-1.3-1.3-2.7-1.5-4.5-.7l2 2c.3.3.4 1 0 1.3L13.8 18c-.5.6-1.2.5-1.6 0l-2-1.8c-.7 1.6-.5 3.3.8 4.5zm12 8.6l2.7 2.5c-.6 1.5 0 3.2 1 4.3 1.4 1.3 3 1.2 4.7.4L30 34.7c-.5-.4-.5-1 0-1.5l1-1.2c.5-.5 1-.5 1.5 0l1.7 1.7c.8-1.7 1-3-.4-4.4-1.2-1-3.2-1-4.7-.6l-3-2.8-3.2 3.3zM20 12.7c-.2-.5 2-.6 4.7-.7 2.2 0 4 .3 4.8.5 1.3.3 2.7 1 3.8 2.2A6.2 6.2 0 0 1 35 19l.7 1c.5-.3 1.2-.3 1.6 0l.5.5c.4.4 0 1-.4 1.3l-2.6 2.6c-.4.5-.8.8-1.2.4l-.5-.6c-.2-.2-.2-.8 0-1.3l-1-1c-.5-.3-1-.5-1.3-.5-1 0-1.7.4-2.6.2L26.7 23 24 20l1.3-2c0-.6.5-1.3.7-2v-1c-.4-.3-.8-.4-1.3-.5-2.7-.3-4.5-1.4-4.7-2z"},{"class":"svg-icon15","d":"M26 24.5L22.5 21s-3 3.5-6 6.3c-5 4.3-7.7 6-6 8 1 1 3 1.7 3 1.7L26 24.5z"}]
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M14 12c1.7 0 3 1.3 3 3 0 1.6-1.3 3-3 3s-3-1.4-3-3c0-1.7 1.3-3 3-3zm0 9c1.7 0 3 1.3 3 3 0 1.6-1.3 3-3 3s-3-1.4-3-3c0-1.7 1.3-3 3-3zm0 9c1.7 0 3 1.3 3 3 0 1.6-1.3 3-3 3s-3-1.4-3-3c0-1.7 1.3-3 3-3zm20-18c1.7 0 3 1.3 3 3 0 1.6-1.3 3-3 3s-3-1.4-3-3c0-1.7 1.3-3 3-3zm0 9c1.7 0 3 1.3 3 3 0 1.6-1.3 3-3 3s-3-1.4-3-3c0-1.7 1.3-3 3-3zm0 9c1.7 0 3 1.3 3 3 0 1.6-1.3 3-3 3s-3-1.4-3-3c0-1.7 1.3-3 3-3z"},{"class":"svg-icon10","d":"M30 16v-3h-4v-2h-3v2h-4v3h4v10.3L19 24c0 1.2-.4 2.2-1 3l5 3v7h3v-5.4l3 1.7V33c0-1 .3-2 1-3l-4-2V16h4z"}]
	};

/***/ },
/* 62 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon11","d":"M17 20v9c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-9h2c1.6 2 3 5 3 7.7C36 32 33.4 36 30 38H18c-3.4-2-6-6-6-10.3 0-2.8 1.4-5.7 3-7.7h2zm-3-4h20c.6 0 1 .4 1 1s-.4 1-1 1H14a1 1 0 0 1 0-2z"},{"class":"svg-icon02","d":"M26 14v-2h-1v2h-1v-2h-1v2h-1v-2h-1v2h-2v-3c0-.5.5-1 1-1h8c.5 0 1 .5 1 1v3h-3zm2 14h-8c-.7 0-1.2-.5-1.2-1.2V20h10v6.8c0 .7-.5 1.2-1 1.2zm-6-5a1 1 0 0 0-1 1c0 .5.5 1 1 1s1-.5 1-1c0-.6-.5-1-1-1zm5-1h-3v1l2 1-2 1v1h3v-4z"}]
	};

/***/ },
/* 63 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon08","d":"M12 16v16h-.8c-.6 0-1.2-.6-1.2-1.2V15.2c0-.7.6-1.2 1.3-1.2h21.5c.7 0 1.2.5 1.2 1.2v.8H12z"},{"class":"svg-icon02","d":"M36.8 18H15.2c-.7 0-1.2.6-1.2 1.3v14.5c0 .7.5 1.2 1.2 1.2h21.6c.7 0 1.2-.5 1.2-1.2V19.3c0-.7-.5-1.3-1.2-1.3zm-17.3 3c1.4 0 2.5 1 2.5 2.5S21 26 19.5 26 17 25 17 23.5s1-2.5 2.5-2.5zM23 32c0 .5 0 1-.6 1h-5.8c-.5 0-.6-.5-.6-1v-4c0-.5 0-1 .6-1H18s1 2.7 1.5 2.7S21 27 21 27h1.4c.6 0 .6.5.6 1v4zm3 0c-.6 0-1-.4-1-1s.4-1 1-1c.5 0 1 .5 1 1s-.5 1-1 1zm-1-5c0-.5.4-1 1-1s1 .5 1 1-.5 1-1 1-1-.4-1-1zm1-3c-.6 0-1-.4-1-1s.4-1 1-1c.5 0 1 .4 1 1s-.5 1-1 1zm3 8v-2h6v2h-6zm6-4h-6v-2h6v2zm0-4h-6v-2h6v2z"}]
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon08","d":"M12 16v16h-.8c-.6 0-1.2-.6-1.2-1.2V15.2c0-.7.6-1.2 1.3-1.2h21.5c.7 0 1.2.5 1.2 1.2v.8H12z"},{"class":"svg-icon02","d":"M36.8 18H15.2c-.7 0-1.2.6-1.2 1.3v14.5c0 .7.5 1.2 1.2 1.2h21.6c.7 0 1.2-.5 1.2-1.2V19.3c0-.7-.5-1.3-1.2-1.3zm-4.3 3c1.4 0 2.5 1 2.5 2.5S34 26 32.5 26 30 25 30 23.5s1-2.5 2.5-2.5zM16 32v-2h6v2h-6zm6-4h-6v-2h6v2zm0-4h-6v-2h6v2zm3 8c-.6 0-1-.4-1-1s.4-1 1-1c.5 0 1 .5 1 1s-.5 1-1 1zm-1-5c0-.5.4-1 1-1 .5 0 1 .5 1 1s-.5 1-1 1c-.6 0-1-.4-1-1zm1-3c-.6 0-1-.4-1-1s.4-1 1-1c.5 0 1 .4 1 1s-.5 1-1 1zm11 8c0 .5 0 1-.6 1h-5.8c-.5 0-.6-.5-.6-1v-4c0-.5 0-1 .6-1H31s1 2.7 1.5 2.7S34 27 34 27h1.4c.6 0 .6.5.6 1v4z"}]
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M32 17v-4c0-.6 1-1 1.6-1s1.4.4 1.4 1v4h-3zm-18 3v-7c0-.6 1-1 1.6-1 .6 0 1.4.5 1.4 1v7h-3zm9 2v-9c0-.6 1-1 1.6-1 .5 0 1.4.4 1.4 1v9h-3z"},{"class":"svg-icon04","d":"M17 29v6c0 .6-1 1-1.6 1s-1.4-.4-1.4-1v-6h3zm9 2v4c0 .6-1 1-1.6 1-.5 0-1.4-.4-1.4-1v-4h3zm9-5v9c0 .6-1 1-1.6 1s-1.4-.4-1.4-1v-9h3zm-19.5-4c1.4 0 2.5 1 2.5 2.5S17 27 15.5 27 13 26 13 24.5s1-2.5 2.5-2.5zm9 2c1.4 0 2.5 1 2.5 2.5S26 29 24.5 29 22 28 22 26.5s1-2.5 2.5-2.5zm9-5c1.4 0 2.5 1 2.5 2.5 0 1.4-1 2.5-2.5 2.5S31 23 31 21.5c0-1.4 1-2.5 2.5-2.5z"}]
	};

/***/ },
/* 66 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd05',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon13","d":"M30.5 20.2c1-1.3 1.5-3 1.5-4.8 0-2-.8-4-2-5.5h1c1 1.5 1.8 3.4 1.8 5.4 0 2-.6 3.8-1.6 5.3l-1-.5zm-2-1l-1-.4c1-1 1.4-2 1.4-3.4 0-1.3-.7-2.6-1.5-3.5H29c.6 1 1 2 1 3.4 0 1.5-.5 2.8-1.4 4zm-9-.4l-1 .5c-1-1-1.5-2.4-1.5-4 0-1.2.4-2.4 1-3.4h1.5c-.8.8-1.4 2-1.4 3.4 0 1.3.6 2.5 1.4 3.4zm-3 1.4l-1 .5c-1-1.5-1.5-3.3-1.5-5.3s.7-4 1.8-5.5H17a8.33 8.33 0 0 0-.5 10.2z"},{"class":"svg-icon11","d":"M31 33h-3v4h-9v-4h-3l-3-8v-2h9v-3.2c.5 0 1 .3 1.4.3.6 0 1 0 1.6-.2V23h9v2l-3 8zm-9-8h-7l2.2 6H22v-6zm3 0v6h4.8l2.2-6h-7z"}]
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon06","d":"M37 15.6L20 11c-.7-.2-1.4.3-1.6 1l-2.2 10h14.6c.6 0 1.2.5 1.2 1.2v5.2l2 .5c.7 0 1.4-.3 1.5-1L38 17.5c0-.7-.3-1.6-1-1.8zM35.6 19L20 14.8l.5-1.8L36 17.2l-.5 1.8z"},{"class":"svg-icon03","d":"M29.7 23H11.3c-.7 0-1.3.6-1.3 1.2v11.6c0 .6.6 1.2 1.3 1.2h18.4c.7 0 1.3-.6 1.3-1.2V24.2c0-.6-.6-1.2-1.3-1.2zM12 28h3v1h-3v-1zm5 5h-5v-1h5v1zm0-5h3v1h-3v-1zm8 5h-6v-1h6v1zm0-4h-3v-1h3v1zm4 0h-2v-1h2v1z"}]
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon05","d":"M24 11c-7 0-13 5-13 11.7 0 3 1.4 6.2 3.4 8.3h19.3c2-2 3.3-5.4 3.3-8.4C37 16 31 11 24 11zm1.7 5.6c-5.7 0-9 2.5-9 6.3 0 0-.7 1-1.4 1-.6 0-1.3-1-1.3-1 0-5.2 4-9 10.7-9-1 0 2.3-.3 2.3 1.4 0 .6-1.3 1.2-1.3 1.2z"},{"class":"svg-icon02","d":"M14 32h20l3 6H11l3-6z"}]
	};

/***/ },
/* 69 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M33.2 30.7l1.3 1.3H29l1.6-4.8 1.2 1.6c1-1 1.4-1.6 1.4-3V25h2.4v1c0 2-.8 3.5-2.4 4.7zM13.5 29h-1.7l2.4-4 3.8 3-2 .4c.5 1.3 1 2.3 2.5 3l.6.3-.8 1.8-1-.3c-2-1-3.4-2.3-3.7-4.3zm12-17l.8-1.7L29 15l-5 1 1-2c-1.5-.2-3 0-4.2.6l-.7.4-1-2c.3-.3.6-.4 1-.6 1.8-1 4-1.3 5.6-.3z"},{"class":"svg-icon04","d":"M15.5 16c2 0 3.5 1.6 3.5 3.5S17.4 23 15.5 23 12 21.4 12 19.5s1.6-3.5 3.5-3.5zm18 0c2 0 3.5 1.6 3.5 3.5S35.4 23 33.5 23 30 21.4 30 19.5s1.6-3.5 3.5-3.5zm-9 15c2 0 3.5 1.6 3.5 3.5S26.4 38 24.5 38c-2 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5z"}]
	};

/***/ },
/* 70 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M15.8 30.7L14.5 32H20l-1.6-4.8-1.2 1.6c-1-1-1.4-1.6-1.4-3V25h-2.4v1c0 2 .8 3.5 2.4 4.7zm16 2.5l-1 .3-1-1.8.7-.4c1.4-.6 2-1.6 2.6-3l-2-.3 3.8-3 2.4 4h-1.7c-.3 2-1.8 3.2-3.7 4.2zM29 12.4l1 .5-1 2-.8-.4c-1.3-.7-2.7-.8-4-.5l1 2-5-1 2.5-4.7.7 1.8c1.7-1 3.8-.6 5.7.4z"},{"class":"svg-icon04","d":"M33.5 16c-2 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zM19 19.5c0 2-1.6 3.5-3.5 3.5S12 21.4 12 19.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5zm9 15c0 2-1.6 3.5-3.5 3.5-2 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5c2 0 3.5 1.6 3.5 3.5z"}]
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd11',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon18","d":"M38 16H10v18.8c0 .7.5 1.2 1 1.2h26c.7 0 1.2-.5 1.2-1.2V16zm-9 3.2c0-.7.5-1.2 1-1.2h5c.5 0 1 .5 1 1.2v5.6c0 .7-.5 1.2-1 1.2h-5c-.5 0-1-.5-1-1.2v-5.6zM21 33c0 .6-.3 1-1 1h-7c-.7 0-1-.5-1-1.2V19.2c0-.7.5-1.2 1.2-1.2h6.6c.7 0 1.2.4 1.2 1v14zm1-13.8c0-.7.5-1.2 1-1.2h4c.5 0 1 .5 1 1.2v5.6c0 .7-.5 1.2-1 1.2h-4c-.5 0-1-.5-1-1.2v-5.6zM33 33H22v-2h11v2zm3-3H22v-2h14v2z"},{"class":"svg-icon14","d":"M30 25v-5h1v4h4v1h-5zm4-5h1v3h-1v-3zm-2 1h1v2h-1v-2z"},{"class":"svg-icon03","d":"M23 20h4v1h-4v-1zm3 4h-3v-1h3v1z"},{"class":"svg-icon04","d":"M17 20c1 0 2 1 2 2h-2v-2zm-1 5c-1 0-2-1.2-2-2 0-1 1-2 2-2v2h2c0 1-1 2-2 2zm3 4h-5v-1h5v1zm0 3h-5v-1h5v1z"},{"class":"svg-icon05","d":"M11 12h26c.7 0 1.2.6 1.2 1.2V15H10v-1.8c0-.6.5-1.2 1-1.2z"}]
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd11',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon18","d":"M38 16H10v18.8c0 .7.5 1.2 1.2 1.2H37c.5 0 1-.5 1-1.2V16zm-26 3.2c0-.7.5-1.2 1-1.2h5c.5 0 1 .5 1 1.2v5.6c0 .7-.5 1.2-1 1.2h-5c-.5 0-1-.5-1-1.2v-5.6zM26 33H15v-2h11v2zm0-3H12v-2h14v2zm0-5.2c0 .7-.5 1.2-1 1.2h-4c-.5 0-1-.5-1-1.2v-5.6c0-.7.5-1.2 1-1.2h4c.5 0 1 .5 1 1.2v5.6zm10 8c0 .7-.3 1.2-1 1.2h-7c-.7 0-1-.4-1-1V19c0-.6.5-1 1.2-1h6.6c.7 0 1.2.5 1.2 1.2v13.6z"},{"class":"svg-icon14","d":"M18 25v-5h-1v4h-4v1h5zm-4-5h-1v3h1v-3zm2 1h-1v2h1v-2z"},{"class":"svg-icon03","d":"M25 20h-4v1h4v-1zm-3 4h3v-1h-3v1z"},{"class":"svg-icon04","d":"M31 20c-1 0-2 1-2 2h2v-2zm1 5c1 0 2-1.2 2-2 0-1-1-2-2-2v2h-2c0 1 1 2 2 2zm-3 4h5v-1h-5v1zm0 3h5v-1h-5v1z"},{"class":"svg-icon05","d":"M37 12H11c-.7 0-1.2.6-1.2 1.2V15h28v-1.8c0-.6-.5-1.2-1-1.2z"}]
	};

/***/ },
/* 73 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd12',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon09","d":"M36 30.5l-8-8.3-.8 3.7-1.2-.4c-6-1.6-9-7-8-12.6h-5.6c-2 7 3.5 15.7 11.3 17.7l2.3.7-.8 3.6L36 30.5z"}]
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd12',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon09","d":"M35.6 13H30c1 5.5-2 11-8 12.6l-1.2.3L20 22l-8 8.3L22.8 35l-.8-3.6 2.3-.7C32 28.7 37.5 20 35.6 13z"}]
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 43.7c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2zm-4 0c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2zm-4 0c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2z"},{"class":"svg-icon08","d":"M34.6 30c-.5-1.2-1.7-2-3-2-1.5 0-2.7.8-3.2 2h-5.8c-.5-1.2-1.7-2-3-2-1.5 0-2.7.8-3.2 2H12v-2h1v-2h16v-8h7l2 6v6h-3.4zm.4-11h-4v4h5l-1-4z"},{"class":"svg-icon11","d":"M13 25v-2h2v-2h8v-4h-8v-2h-2v-1h15v11H13z"},{"class":"svg-icon03","d":"M14 20h8v-2h-8v-2l-4 3 4 3v-2z"},{"class":"svg-icon17","d":"M31.5 34C30 34 29 33 29 31.5c0-1.4 1-2.5 2.5-2.5 1.4 0 2.5 1 2.5 2.5 0 1.4-1 2.5-2.5 2.5zm-12 0C18 34 17 33 17 31.5c0-1.4 1-2.5 2.5-2.5 1.4 0 2.5 1 2.5 2.5 0 1.4-1 2.5-2.5 2.5z"}]
	};

/***/ },
/* 76 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M33 28v-3h-8v3h-2v-3h-8v3h-2v-5h10v-3h2v3h10v5h-2z"},{"class":"svg-icon05","d":"M20.6 10h6.8c.8 0 1.6 1.2 1.6 2v4c0 .8-.7 2-1.5 2h-7c-.8 0-1.5-1.2-1.5-2v-4c0-.8.8-2 1.6-2zm1 20h5c.8 0 1.4 1 1.4 1.6V37c0 .8-.8 1-1.5 1h-5c-.8 0-1.5-.2-1.5-1v-5.4c0-.7.8-1.6 1.5-1.6zm10 0h4.8c.8 0 1.6.6 1.6 1.4v5.2c0 .8-.6 1.4-1.4 1.4h-5c-.7 0-1.6-.2-1.6-1v-5.4c0-.7.7-1.6 1.5-1.6zm-20.3 0H17c.6 0 1 1 1 1.6V37c0 .8-1 1-1.7 1h-5c-.7 0-1.3-.6-1.3-1.4v-5.2c0-.8.5-1.4 1.3-1.4z"}]
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M38 34l-5-4v3h-3.7c-1 0-2-.4-2.5-1-.5-.5-.8-1-.8-2v-5h7v3l5-4-5-4.2V23h-7v-5c0-1 .2-1.7.8-2.2.5-.5 1.4-1 2.4-1H33v3.4l5-4.3-3.7-3.2L33 9.6V13h-4.4c-1 0-2.2.3-3 1-1 1-1.6 2.4-1.6 3.6V23h-2v2h2v5.4c0 1 .5 2.4 1.3 3.3 1 1 2.2 1.3 3.3 1.3H33v3l5-4z"},{"class":"svg-icon06","d":"M15.5 20c2.5 0 4.5 2 4.5 4.5S18 29 15.5 29 11 27 11 24.5s2-4.5 4.5-4.5z"}]
	};

/***/ },
/* 78 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M27 23h-2v-5.4c0-1.2-.6-2.7-1.6-3.6-.8-.7-2-1-3-1H16V9.7l-1.3 1L11 14l5 4.3v-3.4h3.8c1 0 2 .3 2.4.8.6.5.8 1 .8 2.3v5h-7v-3.2L11 24l5 4v-3h7v5c0 1-.3 1.5-.8 2-.6.6-1.4 1-2.5 1H16v-3l-5 4 5 4v-3h4.4c1 0 2.4-.4 3.3-1.3.8-1 1.3-2.2 1.3-3.3V25h2v-2z"},{"class":"svg-icon06","d":"M33.5 20C31 20 29 22 29 24.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5z"}]
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M34 10H14c-1.6 0-2 .5-2 2v24c0 1.5.6 2 2 2h20c1.3 0 2-.5 2-2V12c0-1.5-.4-2-2-2zm-2 23H16v-2h16v2zm0-5H16v-2h16v2zm0-5H16v-2h16v2zm0-5H16v-2h16v2z"}]
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M12 38V10h24v28H12zm19-5H17a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2zm-.6-11l1.6-1.3-2-.8 1-2h-2l.3-2-2 .6-.4-2-1.8 1.2L24 14l-1 1.8-1.7-1.3-.4 2-2-.7.2 2H17l1 2-2 1 1.6 1-1.6 1.5 2 .8-1 2h2l-.3 2 2-.6.5 2 1.6-1.2 1 1.8 1.3-1.8 1.7 1.3.4-2 2.2.7-.3-2h2l-1-2 2-.7zM24 28a6 6 0 0 1-5.8-5.8 6 6 0 0 1 5.8-5.8 6 6 0 0 1 5.8 5.8A6 6 0 0 1 24 28zm0-10.6a4.8 4.8 0 1 0 4.8 4.8 4.8 4.8 0 0 0-5-4.8z"},{"class":"svg-icon03","d":"M23 25l-2.4-2.4 1-1 1.5 1.2 3.2-3.4 1 1L23 25z"}]
	};

/***/ },
/* 81 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd10',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M26 28c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2zm0-3a1 1 0 0 1 0 2 1 1 0 0 1 0-2z"},{"class":"svg-icon15","d":"M35 14l-.7-.3c-1.3 0-1.5.7-1.7 1L26 27s-.5-.2-2 0l7.4-13s.5-1.6 2.6-1.6h.5V12H38v2h-3zM12.6 28l8 5.2s-.4.7.4 1.8l-9-5.8.6-1.2z"},{"class":"svg-icon09","d":"M17 12l10 6.3L20 31l-10-6.3L17 12z"}]
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M32 28h4v9H13v-9h4v5h15v-5z"},{"class":"svg-icon03","d":"M28 21V11h-7v10h-4l7.6 10L32 21h-4z"}]
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M23 18.2V21h15v6H23v3l-7-5.8c-.2 0-.2-.6 0-.7l6.8-5.3c0-.2 0-.3 0 0z"},{"class":"svg-icon01","d":"M29 20v-6H14v20h15v-5h3v6.2c0 .7-1.3 1.8-2 1.8H13c-.7 0-2-1.3-2-2V13c0-.7 1.3-2 2-2h17c.7 0 2 1 2 1.8V20h-3z"}]
	};

/***/ },
/* 84 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon01","d":"M28.2 24l9.8-7.7v15.4L28.2 24zm9.7-9H11l13.3 10.7L38 15zm0 18L27 24.7 24 27l-2.8-2.3L11 33h27zM11 16.4v15.2l9.5-7.6-9.5-7.6z"}]
	};

/***/ },
/* 85 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd12',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon15","d":"M36.5 23h-15c-1 0-1.5.5-1.5 1.5v11.7c0 1.2.6 1.8 1.8 1.8h14.7c1 0 1.5-.4 1.5-1.2V24.5c0-1-.4-1.5-1.5-1.5zM26 30.3l2.2 1.4 2.3-3.7 2.2 1.4 1.5-3 1.3 1-2.2 4-2.4-1.2-2.4 3.7-2.2-1.5-1 1.3-1-1 1.7-2.5zM36 36H22V25h1v10h13v1z"},{"class":"svg-icon01","d":"M10 25.7V11.2l8.7 7-8.7 7.4zm0 1.3h8v-6h4.2l-2.6-2-9.6 8zm19.4-6H35v-9.7l-8.8 7 3.2 2.7zM10 10l12.5 10L35 10H10zm12.7 11h5l-2.4-2-2.6 2z"}]
	};

/***/ },
/* 86 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd12',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon15","d":"M36.4 23h-15c-1 0-1.4.5-1.4 1.5v12.3c0 .8.6 1.2 1.5 1.2h14.7c1.2 0 1.8-.6 1.8-1.8V24.5c0-1-.6-1.5-1.6-1.5zm-12.6 3.5l1.5 3 2.2-1.5 2.3 3.7 2-1.4 2 2.6-1.3.8-1-1.3-2 1.4L27 30l-2.3 1.3-2.2-4 1.3-1zM36 36H22v-1h13V25h1v11z"},{"class":"svg-icon01","d":"M19.6 19l2.6 2H18v6h-8l9.6-8zm3 2H28l-2.5-2-2.6 2zM10 25.7l8.7-7.4-8.7-7v14.4zM10 10l12.5 10L35 10H10zm19.4 11H35v-9.7l-8.8 7 3.2 2.7z"}]
	};

/***/ },
/* 87 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon06","d":"M21 34h14v-6H21v-4l-8.5 6.7v.7L21 38v-4z"},{"class":"svg-icon02","d":"M28 21H14v-6h14v-4l8.4 6.7v.7L28 24.8V21z"}]
	};

/***/ },
/* 88 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon06","d":"M15 21v14h6V21h3s-5-7.5-5.7-8.2h-.7L12 21h3z"},{"class":"svg-icon12","d":"M27 28V14h6v14h3s-5 7.3-5.7 8h-.6l-6-8H27z"}]
	};

/***/ },
/* 89 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M36 11H12c-.7 0-2 1.3-2 2v22c0 .7 1.3 2 2 2h24c.7 0 2-1.3 2-2V13c0-.7-1.3-2-2-2zm-19 6l7-4 7 4v1H17v-1zm-1 8h1v-1h2v-5h2v5h2v-5h2v5h2v-5h2v5h2v1h1v1H16v-1zm3 9h-5c-.4 0-1-.6-1-1s.6-1 1-1h5c.4 0 1 .6 1 1s-.6 1-1 1zm0-4h-5c-.4 0-1-.6-1-1s.6-1 1-1h5c.4 0 1 .6 1 1s-.6 1-1 1zm15 4H23c-.4 0-1-.6-1-1s.6-1 1-1h11c.4 0 1 .6 1 1s-.6 1-1 1zm0-4H23c-.4 0-1-.6-1-1s.6-1 1-1h11c.4 0 1 .6 1 1s-.6 1-1 1z"}]
	};

/***/ },
/* 90 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M36 11H12c-.7 0-2 1.3-2 2v22c0 .7 1.3 2 2 2h24c.7 0 2-1.3 2-2V13c0-.7-1.3-2-2-2zm-19 6l7-4 7 4v1H17v-1zm-1 8h1v-1h2v-5h2v5h2v-5h2v5h2v-5h2v5h2v1h1v1H16v-1zm9 9H14c-.4 0-1-.6-1-1s.6-1 1-1h11c.4 0 1 .6 1 1s-.6 1-1 1zm0-4H14c-.4 0-1-.6-1-1s.6-1 1-1h11c.4 0 1 .6 1 1s-.6 1-1 1zm9 4h-5c-.4 0-1-.6-1-1s.6-1 1-1h5c.4 0 1 .6 1 1s-.6 1-1 1zm0-4h-5c-.4 0-1-.6-1-1s.6-1 1-1h5c.4 0 1 .6 1 1s-.6 1-1 1z"}]
	};

/***/ },
/* 91 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon10","d":"M15.8 16l3.4 11.5.5-.3s-.6-2.3 2.6-3.8 4.7.4 7.4.4 4.8-1.6 6-3.2c1-1.6 2.3-6 2.3-6l-.8-.2s-1.6 2.2-3 2.2c-3.7 0-9-5.6-13-5.6-6.4 0-5.4 5-5.4 5z"},{"class":"svg-icon18","d":"M13.6 14.8s6 19 6.4 21c.5 2.2-3 3.3-3.5 1-.6-2.4-5.8-18.8-6.4-21-.7-2.5 3-3.4 3.6-1z"}]
	};

/***/ },
/* 92 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon06","d":"M11 33l13-5 13 5-13 5-13-5z"},{"class":"svg-icon04","d":"M11 10h26v9H11v-9z"},{"class":"svg-icon03","d":"M23 24v-4h2v4h2l-3 3-3-3h2z"}]
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd02',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M38 14v3s-.5 3.4-2 5-3.8 2-3.8 2h-6c.5-.5.8-1.2.8-2s-.4-1.6-1-2.2l-.4-.3c-.5-.3-1-.5-1.6-.5-.7 0-1.3.2-1.8.7-.7.5-1.2 1.4-1.2 2.3v.4c0 .6.4 1.2.8 1.6h-6s-2.3-.3-3.8-2c-1.4-1.6-2-4-2-4v-4h28zm-6 11h-5.8c.5.5.8 1.2.8 2 0 .5 0 1-.3 1.3-.4 1-1.5 1.7-2.7 1.7-1.3 0-2.3-.7-2.7-1.8L21 27c0-.8.3-1.5.8-2H16c-2 0-5-.6-6-3v9.2c0 1.5 2.3 2.8 4 2.8h20c1.7 0 4-1.3 4-2.8V22c-.4 2.3-4 3-6 3z"},{"class":"svg-icon05","d":"M24 20c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2zm0 5c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2z"}]
	};

/***/ },
/* 94 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M11 23h7v7h-7v-7zm0-9h7v7h-7v-7z"},{"class":"svg-icon05","d":"M35.7 28.8c-2 0-2.7 1.2-2.7 3.2h-7l.3-.6c0-2-1.8-3.8-4-3.8-1.3 0-2.6.4-3.3 1.4V14h2v10h1c0-.2.4 0 .4-.3 0-4.6 1.7-8.3 4-9.4V14H36v9h.7c.7 0 1.3.6 1.3 1.3v5.4c-.6-.5-1.4-1-2.3-1zM34 15h-6c-2.7 0-4.3 4.5-4.3 10v1.3h2s.6-3.3 2-3.3H34v-8zM10 31h8v1h-8v-1zm26-1c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2zm-13.5-1c1.4 0 2.5 1 2.5 2.5 0 1.4-1 2.5-2.5 2.5S20 33 20 31.5c0-1.4 1-2.5 2.5-2.5z"}]
	};

/***/ },
/* 95 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd05',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M18 32h-6.8c-.6 0-1.2-.7-1.2-1.4V11.2c0-.7.6-1.2 1.2-1.2h20.5c.7 0 1.3.5 1.3 1.2V17h-2v-5H12v18h6.3c-.2.4-.3 1-.3 2z"},{"class":"svg-icon17","d":"M14 20h15v-2H14v2zm0-4h15v-2H14v2z"},{"class":"svg-icon18","d":"M29 22H14v7h10c-.2 0 .2-.8 1-2v-1h.8l.8-1H25v-2h2v1.5l2-2.5zm-11 6h-2v-2h2v2zm0-3h-2v-2h2v2zm3 3h-2v-2h2v2zm0-3h-2v-2h2v2zm3 3h-2v-2h2v2zm0-3h-2v-2h2v2z"},{"class":"svg-icon18","d":"M37 26c-1 1-2 1-3.4.7l-2.8 3-3 3.5c.2 1.3 0 3-1 3.8-1 1-2.4 1.3-4 .5l1.8-1.7c.4-.3.4-1 0-1.3l-1-1.2c-.5-.4-1-.3-1.4 0L20.4 35c-.7-1.5-.5-3 .7-4 1-1 2.3-1 3.7-.7l1.6-1.7 4-4.5c-.4-1.2-.4-3 .6-4s2.4-1.3 4-.6l-1.7 1.8c-.4.3-.4 1 0 1.3l1.2 1.2c.4.4 1 .3 1.3 0l1.7-1.8c.8 1.4.6 3-.6 4z"}]
	};

/***/ },
/* 96 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon15","d":"M36.2 12H11.8c-.6 0-1.8 1.2-1.8 2v20c0 .8 1.2 2 1.8 2h24.4c.6 0 1.8-1.2 1.8-2V14c0-.8-1.2-2-1.8-2zM33 26v2H21v-2h12zm-7-2h-7v-2h7v2zm-9-6h5v2h-5v-2zm18 15H13V15h2v16h20v2z"}]
	};

/***/ },
/* 97 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon15","d":"M36.2 12H11.8c-.6 0-1.8 1.2-1.8 2v20c0 .8 1.2 2 1.8 2h24.4c.6 0 1.8-1.2 1.8-2V14c0-.8-1.2-2-1.8-2zM26 18h5v2h-5v-2zm-4 4h7v2h-7v-2zm-7 4h12v2H15v-2zm20 7H13v-2h20V15h2v18z"}]
	};

/***/ },
/* 98 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M25 15h-1v-2h1v2zm7 7v-1h2v1h-2zm-18 0v-1h2v1h-2zm6-6h1l4 6.8-1.7 1.2-3.3-8zm7 8.2c0 1.3-1.5.7-3 .7-1.6 0-3 .4-3-.8 0-1.7 1.5-3.2 3-3.2s3 1.5 3 3.2zm-8.4-6.8l-.7.7-1.6-1.4.7-.7 1.6 1.4zM31 16l.6.6L30 18l-.6-.6L31 16z"},{"class":"svg-icon04","d":"M24 10c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm0 2c6.3 0 12 5.8 12 12H12c0-6.2 5.7-12 12-12z"}]
	};

/***/ },
/* 99 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd12',
	  paths: [{"class":"svg-shortcut","d":"M28.05 42.5L25 45.2v-1.7c-.44-.1-1.4-.15-2.45.6-1.4 1-1.57 1.47-1.57 1.47s-.4-1.24.8-2.7c1.26-1.54 2.67-1.56 3.23-1.5v-1.63l3.05 2.72z"},{"class":"svg-cluster","d":"M28.47 41.3c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm-4 0c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2zm-3.97 0c.66 0 1.2.55 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2z"},{"class":"svg-icon17","d":"M37.12 27.1l-1.36-.25c-.04-.5-.18-.9-.33-1.34l1.14-.76c.53-.35.76-1.06.4-1.58l-.63-.95c-.35-.5-1.04-.5-1.56-.15l-1.15.77c-.36-.32-.85-.7-1.3-.9l.28-1.36a1.13 1.13 0 0 0-.9-1.34L30.6 19a1.16 1.16 0 0 0-1.35.9L29 21.25c-.5.04-1.03.2-1.5.35l-.75-1.14c-.36-.52-1.04-.83-1.57-.48l-.94.64c-.52.35-.52 1.1-.17 1.6l.77 1.16c-.3.36-.7.83-.92 1.27l-1.36-.27a1.14 1.14 0 0 0-1.34.9l-.22 1.1c-.12.63.27 1.3.9 1.42l1.34.27c.04.5.17 1.04.32 1.5l-1.15.77c-.5.35-.67.9-.32 1.43l.64.94c.35.53 1 .6 1.53.26l1.15-.77c.36.3.9.64 1.33.87l-.27 1.35c-.12.62.2 1.2.82 1.33l1.2.23a1.2 1.2 0 0 0 1.4-.9l.26-1.34c.5-.04.94-.23 1.4-.38l.77 1.14c.36.52.97.74 1.5.4l.94-.64c.52-.35.8-1.17.45-1.7l-.78-1.14c.32-.36.44-.66.66-1.1l1.36.27c.62.1 1.22-.3 1.34-.9l.22-1.12c.12-.62-.27-1.34-.88-1.47zm-5.17.92c-.3 1.5-1.3 2.23-2.8 1.93-1.5-.3-2.4-1.43-2.1-2.92.3-1.5 1.36-2.27 2.86-1.98s2.35 1.48 2.05 2.97z"},{"class":"svg-icon12","d":"M22.24 19.1l-.98.13c-.06.36-.16.72-.3 1.06l.77.64c.37.3.44.84.14 1.22l-.53.68a.87.87 0 0 1-1.22.15l-.77-.6c-.3.2-.62.4-.97.53l.08 1c.06.47-.33.9-.8.96l-.8.1a.9.9 0 0 1-.97-.77l-.17-1a3.8 3.8 0 0 1-1.06-.3l-.62.8a.86.86 0 0 1-1.2.14l-.7-.54a.86.86 0 0 1-.14-1.2l.6-.8c-.2-.3-.4-.6-.53-.95l-1 .08a.86.86 0 0 1-.95-.76l-.1-.86a.86.86 0 0 1 .75-.96l1-.14c.06-.37.15-.73.3-1.07l-.8-.63a.86.86 0 0 1-.14-1.2l.54-.7a.85.85 0 0 1 1.2-.14l.8.6c.3-.22.63-.4.97-.55l-.1-1a.85.85 0 0 1 .76-.95l.85-.1c.48-.06.9.28.97.75l.2.96c.36.07.7.16 1.05.3l.58-.73a.84.84 0 0 1 1.2-.15l.7.53c.37.3.44.84.14 1.22l-.6.78c.2.3.4.62.54.96l1-.07c.46-.06.9.28.95.75l.1.86a.9.9 0 0 1-.76.97zM16.32 17c-.7.08-1.4 1-1.3 1.7.07.7.97 1.4 1.67 1.3.7-.07 1.4-.97 1.3-1.67-.08-.7-.98-1.42-1.68-1.34z"}]
	};

/***/ },
/* 100 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd10',
	  paths: [{"class":"svg-shortcut","d":"M28.05 42.5L25 45.2v-1.7c-.44-.1-1.4-.15-2.45.6-1.4 1-1.57 1.47-1.57 1.47s-.4-1.24.8-2.7c1.26-1.54 2.67-1.56 3.23-1.5v-1.63l3.05 2.72z"},{"class":"svg-cluster","d":"M28.47 41.3c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm-4 0c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2zm-3.97 0c.66 0 1.2.55 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2z"},{"class":"svg-icon17","d":"M20 24.84l.23-1.18c.13-.65.77-1.08 1.42-.95l1.44.3c.22-.47.63-.96.96-1.35l-.8-1.2c-.38-.57-.38-1.35.17-1.72l1-.68c.56-.37 1.28-.04 1.65.5l.82 1.22a6.82 6.82 0 0 1 1.56-.37l.28-1.44a1.2 1.2 0 0 1 1.42-.95l1.18.25c.66.12 1.08.76.95 1.4L32 20.1c.47.23 1 .63 1.38.96l1.2-.82c.56-.37 1.3-.38 1.67.17l.67 1c.37.57.12 1.32-.43 1.7l-1.22.8c.15.5.3.9.35 1.42l1.43.3c.6.1 1 .77.95 1.38h-7.24c.08-.18.15-.37.2-.6.24-1.17-.43-2.1-1.63-2.34-1.2-.23-2.06.38-2.3 1.56-.1.53 0 1 .23 1.38h-4.83l-.05-.38-1.44-.3c-.65-.12-1.07-.83-.94-1.48z"},{"class":"svg-icon12","d":"M22.24 17.1l-.98.13c-.06.37-.16.73-.3 1.07l.77.65c.37.3.44.84.14 1.22l-.53.68a.86.86 0 0 1-1.22.15l-.77-.6c-.3.22-.62.4-.97.55l.08 1c.06.46-.33.9-.8.96l-.8.1a.87.87 0 0 1-.97-.75l-.17-1a4.62 4.62 0 0 1-1.06-.3l-.62.8a.86.86 0 0 1-1.2.13l-.7-.53a.88.88 0 0 1-.14-1.22l.6-.78c-.2-.3-.4-.62-.53-.96l-1 .07a.85.85 0 0 1-.95-.76l-.1-.85a.86.86 0 0 1 .75-.96l1-.15c.06-.37.15-.73.3-1.07l-.8-.63a.88.88 0 0 1-.14-1.22l.54-.68a.85.85 0 0 1 1.2-.15l.8.6c.3-.22.63-.4.97-.55l-.1-1a.85.85 0 0 1 .76-.95l.85-.1c.48-.06.9.28.97.75l.2.96c.36.07.7.17 1.05.3l.58-.73a.84.84 0 0 1 1.2-.15l.7.53c.37.3.43.84.14 1.22l-.6.78c.2.3.4.62.54.96l.98-.07c.48-.05.9.3.97.76l.1.85c.05.48-.3.9-.76.96zM16.32 15c-.7.08-1.4 1-1.3 1.7.07.68.97 1.38 1.67 1.3.7-.1 1.4-.98 1.3-1.67-.08-.7-.98-1.4-1.68-1.33z"},{"class":"svg-icon02","d":"M29 29v6l-1 .02v-6h1zm-3 1v4h-1v-4h1zm-6.02-1v6l-.97.02v-6H20zM17 30v4h-1v-4h1zm-2 1v3h-1v-3h1zm23-2v9h-2v-9h2zm0 7v2H10v-2h28zm-26.02-7v9h-2v-9h2zm26.04 0v2h-27v-2h27zM23 30v4h-1v-4h1zm9 0v4h-1v-4h1zm2 0v4h-1v-4h1z"}]
	};

/***/ },
/* 101 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon17","d":"M28.6 22.3c0-2.8 2-4 4.7-4.3.5-.5.6-1.3.2-2l-1-1.3c-.5-.7-1.5-.7-2.2-.2l-1.7 1c-.6-.3-1.3-1-2-1.2l.5-2c.2-1-.3-1.8-1.3-2L24 10c-.8-.2-1.7.4-2 1.3l-.3 2c-.7 0-1.4.3-2 .5l-1.2-1.6c-.6-.8-1.6-1.2-2.3-.7l-1.4 1c-.8.4-.8 1.5-.3 2.3l1.2 1.7-1.4 1.8-2-.4c-1-.3-1.8.3-2 1.2L10 21c-.2.8.4 1.8 1.3 2l2 .3c0 .8.3 1.6.5 2.3l-1.7 1c-.7.6-1 1.4-.4 2.2l1 1.4c.5.7 1.4 1 2.2.3l1.7-1c.5.4 1.3 1 2 1.2v.3h1c1-1.6 2.6-2.7 4.7-2.7h.7l3.7-3.7v-2.3zM23 26a3 3 0 0 1-3-3c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.6-1.4 3-3 3z"},{"class":"svg-icon18","d":"M37 26.7c-1 .8-2 1-3 .6L31.2 30l-3 3.5c.3 1.2.2 2.8-.7 3.6-1.2 1-2.4 1.3-4 .6l1.8-1.7c.3-.4.4-1 0-1.3l-1-1.2c-.4-.3-1-.3-1.3 0l-1.6 1.7c-.7-1.5-.5-3 .7-4 1-1 2.2-1 3.4-.4L27 29l3.7-4c-.3-1.4-.3-3 .7-4s2.3-1.3 3.8-.6L33.6 22c-.4.4-.4 1 0 1.3l1 1c.5.5 1 .4 1.3 0l1.6-1.6c.7 1.5.5 3-.6 4z"}]
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd05',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon10","d":"M22 31h6c0 .2.3.3.3.5 0 3.7-3 6.6-6.6 6.6-3.7 0-6.7-2.8-6.7-6.5s3.3-6.5 7-6.5v6z"},{"class":"svg-icon09","d":"M24 29v-5h6.7L27 18h8v11H24z"},{"class":"svg-icon04","d":"M20 11l-7 11h14l-7-11z"}]
	};

/***/ },
/* 103 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon05","d":"M24 13c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm5.2 22H18.8c-1.2 0-1.8-1.3-1.8-1.8v-7.4c0-1.8 0-1.8 1.8-1.8h1.7l3.5 4.6 3.5-4.6h1.7c1.8 0 1.8 1 1.8 1.8v7.4c0 .5-.6 1.8-1.8 1.8z"},{"class":"svg-icon11","d":"M38 23v8c0 .5-.5 1-1 1h-4v-7l2-3h2c.5 0 1 .5 1 1zm-27-1c-.5 0-1 .5-1 1v8c0 .5.5 1 1 1h4v-7l-1-3h-3zm6-3.5c0-1.7.7-3.2 1.8-4.3A3.95 3.95 0 0 0 12 17c0 2.2 1.8 4 4 4 .5 0 1 0 1.5-.2-.3-.7-.5-1.5-.5-2.3zM36 17c0-2.2-1.7-4-4-4-1.2 0-2 .4-2.8 1.2 1 1 1.8 2.6 1.8 4.3 0 .8-.2 1.6-.5 2.3.5.2 1 .2 1.5.2 2.3 0 4-1.8 4-4z"}]
	};

/***/ },
/* 104 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd10',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M19 20.4a2.42 2.42 0 0 1-4-1.9c0-1.5 1-2.6 2.5-2.6 1 0 1.8.5 2.2 1.4-.4.8-.7 1.7-.7 2.6v.4zM14.8 23c-.3 0-.8.5-.8 1v5c0 .5.5 1 .8 1H17v-5.3L16 23h-1zM33 18.5c0-1.4-1-2.5-2.5-2.5-1 0-1.8.6-2.2 1.4.4.8.7 1.6.7 2.6v.5c.4.3 1 .5 1.5.5 1.4 0 2.5-1 2.5-2.5zm.2 4.5h-1.4l-.8 1.6V30h2.2c.3 0 .8-.5.8-1v-5c0-.5-.5-1-.8-1z"},{"class":"svg-icon02","d":"M11 25h2v3h-2v-3zm0 10h2v2h-2v-2zm0-15h2v3h-2v-3zm0-5h2v3h-2v-3zm0-4h2v2h-2v-2zm24 19h2v3h-2v-3zm0-5h2v3h-2v-3zm0-14h2v2h-2v-2zM20 35h3v2h-3v-2zm-5 0h3v2h-3v-2zm10 0h3v2h-3v-2zm10 0h2v2h-2v-2zM20 11h3v2h-3v-2zm-5 0h3v2h-3v-2zm10 0h3v2h-3v-2zm5 0h3v2h-3v-2zm5 9h2v3h-2v-3zm-5 15h3v2h-3v-2zm-19-5h2v3h-2v-3zm24-15h2v3h-2v-3z"},{"class":"svg-icon05","d":"M28.2 32h-8.4c-.8 0-.8-.5-.8-1v-5.7c0-1 .5-1.3.8-1.3h1.7l2.5 4 2.5-4h1.7c.3 0 .8 1 .8 1.3V31c0 .5 0 1-.8 1zM24 17c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"}]
	};

/***/ },
/* 105 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28.05 42.5L25 45.2v-1.7c-.44-.1-1.4-.15-2.45.6-1.4 1-1.57 1.47-1.57 1.47s-.4-1.24.8-2.7c1.26-1.54 2.67-1.56 3.23-1.5v-1.63l3.05 2.72z"},{"class":"svg-cluster","d":"M28.47 41.3c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm-4 0c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2zm-3.97 0c.66 0 1.2.55 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2z"},{"class":"svg-icon11","d":"M29.92 15.75c0-.97.5-1.78 1.47-1.78s1.7.75 1.7 1.7c0 1-.55 1.4-1.52 1.4s-1.66-.35-1.66-1.32zm4.38 2.23h-1.26l-1.07 1.76v4.17l2.37.02c.3 0 .66-.34.66-.64v-4.6c0-.3-.4-.7-.7-.7zm-17.84-.84c.98 0 1.6-.5 1.6-1.46 0-.97-.5-1.7-1.47-1.7-.98 0-1.7.73-1.7 1.7s.6 1.46 1.56 1.46zM16 19.72L14.96 18l-1.3-.02c-.3 0-.72.4-.72.7l.02 4.6c0 .3.38.64.68.64L16 23.9v-4.18z"},{"class":"svg-icon05","d":"M29.96 25.6c0 .46-.85 1.32-1.32 1.32H19.4c-.47 0-1.32-.86-1.32-1.32v-5.92c0-.3.57-1.68.92-1.68h2l3.02 4.96L27 18h2c.47 0 .96 1.2.96 1.68v5.92zM24 17.1c-1.7 0-3.07-1.32-3.07-3.02s1.37-3.04 3.07-3.04 3.08 1.34 3.08 3.04-1.38 3-3.08 3z"},{"class":"svg-icon10","d":"M28.07 37.5v-2.52H12.9v-3.96h15.18v-2.5c0-.2.36-.14.5 0 .7.67 5.24 3.73 5.73 4.22.1.08.1.44 0 .52-.5.48-5.04 3.57-5.72 4.23-.14.13-.5.2-.5 0z"}]
	};

/***/ },
/* 106 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28.05 42.5L25 45.2v-1.7c-.44-.1-1.4-.15-2.45.6-1.4 1-1.57 1.47-1.57 1.47s-.4-1.24.8-2.7c1.26-1.54 2.67-1.56 3.23-1.5v-1.63l3.05 2.72z"},{"class":"svg-cluster","d":"M28.47 41.3c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm-4 0c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2zm-3.97 0c.66 0 1.2.55 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2z"},{"class":"svg-icon11","d":"M14.9 15.7c0-.98.73-1.73 1.7-1.73.98 0 1.48.8 1.48 1.78 0 .97-.7 1.32-1.66 1.32-.97 0-1.5-.42-1.5-1.38zm1.13 4.04l-1.07-1.76H13.7c-.3 0-.7.4-.7.7v4.6c0 .3.36.64.66.64h2.37v-4.18zm15.5-2.6c.98 0 1.58-.5 1.58-1.46 0-.97-.72-1.7-1.7-1.7s-1.47.73-1.47 1.7.63 1.46 1.6 1.46zm2.8.84l-1.3.02L32 19.72v4.18l2.36.02c.3 0 .68-.34.68-.64l.02-4.6c0-.3-.42-.7-.72-.7z"},{"class":"svg-icon05","d":"M18.04 25.6c0 .46.85 1.32 1.32 1.32h9.24c.47 0 1.32-.86 1.32-1.32v-5.92c0-.3-.57-1.68-.92-1.68h-2l-3.02 4.96L21 18h-2c-.47 0-.96 1.2-.96 1.68v5.92zM24 17.1c1.7 0 3.07-1.32 3.07-3.02S25.7 11.04 24 11.04a3.01 3.01 0 1 0 0 6.04z"},{"class":"svg-icon10","d":"M19.93 37.5v-2.52H35.1v-3.96H19.92v-2.5c0-.2-.36-.14-.5 0-.7.67-5.25 3.73-5.73 4.22-.1.08-.1.44 0 .52.5.48 5.04 3.57 5.72 4.23.14.13.5.2.5 0z"}]
	};

/***/ },
/* 107 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd11',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon10","d":"M38 38h-8V16c0-1 1-2 2-2h4c1 0 2 1 2 2v22z"},{"class":"svg-icon09","d":"M28 38h-8V25c0-1 1-2 2-2h4c1 0 2 1 2 2v13z"},{"class":"svg-icon15","d":"M18 29v9h-8v-9c0-1 1-2 2-2h4c1 0 2 1 2 2z"},{"class":"svg-icon04","d":"M28.8 10.3L21 11.8c-.8 0-1 .8-.5 1.5L22 15c-1.8 1.5-4.8 3.6-10 4.6-1 0-1.7 1-1.5 2 0 1 1 1.6 1.7 1.6h.3c6-1 9.7-3.6 11.7-5.4l1.4 1.7c.6.6 1.3.5 1.6-.3l2.7-7.6c.2-1-.3-1.4-1.2-1.3z"}]
	};

/***/ },
/* 108 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd11',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon10","d":"M10 38h8V16c0-1-1-2-2-2h-4c-1 0-2 1-2 2v22z"},{"class":"svg-icon09","d":"M20 38h8V25c0-1-1-2-2-2h-4c-1 0-2 1-2 2v13z"},{"class":"svg-icon15","d":"M30 29v9h8v-9c0-1-1-2-2-2h-4c-1 0-2 1-2 2z"},{"class":"svg-icon04","d":"M19.2 10.3l7.7 1.5c.8 0 1 .8.5 1.5L26 15c1.8 1.5 4.8 3.6 10 4.6 1 0 1.7 1 1.5 2 0 1-1 1.6-1.7 1.6h-.3c-6-1-9.7-3.6-11.7-5.4l-1.4 1.7c-.6.6-1.3.5-1.6-.3L18 11.6c-.2-1 .3-1.4 1.2-1.3z"}]
	};

/***/ },
/* 109 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon05","d":"M38 15.3v10.4l-2.5.8-2-2-.3.7-.5 1-.3.5c-1.6-3-3.8-4.5-7.6-6h-1.5l-.3.3h-1c0 1-.2 1-1 1l.5-3 2.6-2 3 1h3l1.7.5-.6-2 7-1.2z"},{"class":"svg-icon04","d":"M30.8 30.5L27.6 33c-2.3 1.6-3.7.8-6 0-1.8-.7-4-1.7-6.2-3-1-1.5-2.3-2.4-2-3l-.6-1-1.8 3-1-.7V16.5l6 1.6-.7 2s.7.3 1.5.4c.7-2 2.6-1.2 2.6-1.2L18 23.5l1.3.5H23v-1h1c2 .8 2.5 1.4 3.7 2 .5.6 2.8 2.5 3.3 3.4 0 0 .8 1.4-.2 2z"}]
	};

/***/ },
/* 110 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd12',
          	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M34 20h-2c0-5.5-4-7-8-7s-8 1.5-8 7h-2c0-5.7 3.5-10 10-10s10 4.4 10 10zM24 35h-3c-.5 0-.7.4-1 1h-1c-2.8-1-2.4-1-3-3h-2c0 .2-.6 3 5 5h7v-1c0-1.7-.5-2-2-2z"},{"class":"svg-icon10","d":"M14 22h1s2 0 2 1v7s-1.2 1-2 1h-1c-1.8 0-3-1.2-3-3v-3c0-1.8 1.2-3 3-3zm19 9c-.8 0-2-1-2-1v-7c0-1 2-1 2-1h1c1.8 0 3 1.4 3 3v3c0 1.8-1.2 3-3 3h-1z"}]
	};

/***/ },
/* 111 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M32 19h-1c0-5-3.6-6.3-7.5-6.3S16 14 16 19h-2c0-5 3.4-9 9.5-9s9.5 4 9.5 9h-1zM14 32h2c.5 2.4 0 3 2.6 4a3.4 3.4 0 0 0 1 0l3.6-1a2.6 2.6 0 0 1 1.8 2v1h-6.4c-5.2-2-4.6-5.8-4.6-6zm6 3h3c1.5 0 2 .3 2 2a3.8 3.8 0 0 1-2 1h-3a1 1 0 0 1-1-1c0-1 .2-2 1-2z"},{"class":"svg-icon03","d":"M14 21h1s2 0 2 1v7a3.7 3.7 0 0 1-2 1h-1a2.7 2.7 0 0 1-3-2.7v-3.6a2.7 2.7 0 0 1 3-2.7z"},{"class":"svg-icon06","d":"M33 30.7a14.2 14.2 0 0 0 3.5-3.2 4.3 4.3 0 0 0 .5-2c0-2.5-2-4.5-5.2-4.5-2.8 0-4.6 2-4.8 5h2.3c.4-2 1.5-2.7 2.7-2.7a2.4 2.4 0 0 1 2.4 2.2 2.3 2.3 0 0 1-.4 1.2s-3 2.6-3.4 3.3a4 4 0 0 0-.6 2v1h3a9.4 9.4 0 0 1 0-2.3zm0 5.8a1.3 1.3 0 0 0-1.5-1.5 1.3 1.3 0 0 0-1.5 1.4 1.3 1.3 0 0 0 1.5 1.6 1.3 1.3 0 0 0 1.5-1.5z"}]
	};

/***/ },
/* 112 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd02',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M24.5 12.7c-4 0-7.6 1.4-7.6 6.3h-2c0-5 3.4-9 9.5-9 6 0 9.5 4 9.5 9h-2c0-5-3.6-6.3-7.5-6.3zM33 32h-1c-.5 2.4 0 3-2.6 4H29c-.2-.5-.5-1-1-1h-3.2c-1.3 0-1.7.4-1.8 2v1h6.4c5.2-2 4.6-5.8 4.6-6h-1z"},{"class":"svg-icon03","d":"M34 21h-1s-2 0-2 1v7c0 .2 1 1 2 1h1c1.8 0 3-1 3-2.7v-3.6c0-1.6-1.2-2.7-3-2.7z"},{"class":"svg-icon06","d":"M15 30.7l-1.3-1c-1-1-1.8-1.6-2.2-2.2s-.5-1.3-.5-2c0-1.2.5-2.3 1.4-3.2 1-1 2.2-1.3 3.8-1.3 1.5 0 2.7.4 3.6 1.3 1 1 1 2.4 1.2 3.7h-3c-.2-1 .3-1.6-.2-2-.5-.5-1-.7-1.8-.7-.7 0-1.3.3-1.7.7s-.6 1-.6 1.6c0 .4 0 .8.3 1 .2.4.7.8 1.5 1.5.8.8 1.7 1.5 2 2 .2.6.5 1 .5 2v1h-3v-2.3zm0 5.8c0-1 .5-1.5 1.5-1.5s1.5.4 1.5 1.4c0 1.2-.4 1.6-1.5 1.6-1 0-1.5-.4-1.5-1.5z"}]
	};

/***/ },
/* 113 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M24 17l-11 8v12h22V25l-11-8zm-5 7c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2zm3.3 11h-6.8c-.2 0-.5-.8-.5-1v-4c0-.2.3-1 .5-1h1.3l2.2 2.3 2-2.4h1.3c.3 0 .7.5.7.7v4.6c0 .3-.4.7-.7.7zM29 24c1 0 2 1 2 2s-1 2-2 2-2-1-2-2 1-2 2-2zm3.3 11h-6.8c-.2 0-.5-.8-.5-1v-4c0-.2.3-1 .5-1h1.3l2.2 2.3 2-2.4h1.3c.3 0 .7.5.7.7v4.6c0 .3-.4.7-.7.7z"},{"class":"svg-icon09","d":"M10 21.2l13-8.5 1-.7 1.2.6L38 21.2 36.7 23 24 14.7 11.3 23 10 21.2z"}]
	};

/***/ },
/* 114 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd02',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon09","d":"M33.5 21H23.2A6.02 6.02 0 0 0 12 24c0 3.3 2.7 6 6 6 2.2 0 4-1.2 5.2-3H25v-2h1l1 2h1l1-2h1v1h1v-1h1v2h1l3-3v-1l-2.5-2zM16 26c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"}]
	};

/***/ },
/* 115 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd11',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M36 12H12c-.8 0-2 1.2-2 2v20c0 .8 1.2 2 2 2h24c.8 0 2-1.2 2-2V14c0-.8-1.2-2-2-2zM15 33h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm10 12h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8v-2h8v2zm5 12h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3v-2h3v2zm5 12h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4H13v-2h22v2z"}]
	};

/***/ },
/* 116 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd11',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M36 12H12c-.8 0-2 1.2-2 2v20c0 .8 1.2 2 2 2h24c.8 0 2-1.2 2-2V14c0-.8-1.2-2-2-2zM16 33h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3v-2h3v2zm5 12h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3v-2h3v2zm10 12h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8v-2h8v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4H13v-2h22v2z"}]
	};

/***/ },
/* 117 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M32 22h-3v.4l-1 .5v-1h-3v2h1.4l-1 1H25v.8c-.6 1-1 2.3-1 3.7 0 1.3.3 2.5 1 3.5H11.7c-.7 0-1.8-1-1.8-1.7V13.7c0-.7 1-1.7 1.8-1.7h20.4c.7 0 1.8 1 1.8 1.7v8.7l-2-.4zm-4-1v-2h-3v2h3zm-13 9h9v-2h-9v2zm0-3h9v-2h-9v2zm0-3h9v-2h-9v2zm0-3h9v-2h-9v2zm-3 9h2v-2h-2v2zm2-3v-2h-2v2h2zm-2-3h2v-2h-2v2zm2-3v-2h-2v2h2zm18-6H12v2h20v-2zm-3 4v2h3v-2h-3z"},{"class":"svg-icon12","d":"M32 36c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm3-6h-3v-4h-1v5h4v-1z"}]
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M36.2 33h-13a7.57 7.57 0 0 0-.2-7.2V25h-.5l-1-1H23v-2h-3v1c-.3-.3-.6-.4-1-.6V22h-3c-.7 0-1.4.2-2 .4v-8.7c0-.7 1-1.7 1.8-1.7h20.4c.7 0 1.8 1 1.8 1.7v17.6c0 .7-1 1.7-1.8 1.7zM34 30h2v-2h-2v2zm0-3h2v-2h-2v2zm0-3h2v-2h-2v2zm0-3h2v-2h-2v2zm-10 9h9v-2h-9v2zm0-3h9v-2h-9v2zm0-3h9v-2h-9v2zm0-3h9v-2h-9v2zm-4 0h3v-2h-3v2zm-4 0h3v-2h-3v2zm20-6H16v2h20v-2z"},{"class":"svg-icon12","d":"M16 36c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm3-6h-3v-4h-1v5h4v-1z"}]
	};

/***/ },
/* 119 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M33 28H15c-1.2 0-2-.6-2-2V12c0-1.2.6-2 2-2h18.3c1 0 1.7.6 1.7 2v14c0 1.4-.8 2-2 2zm-7-3h3v-2h-3v2zm0-3h3v-2h-3v2zm0-3h3v-2h-3v2zm-8 6h7v-2h-7v2zm0-3h7v-2h-7v2zm0-3h7v-2h-7v2zm-3 6h2v-2h-2v2zm0-3h2v-2h-2v2zm0-3h2v-2h-2v2zm18-6H15v2h18v-2zm0 4h-3v2h3v-2zm0 3h-3v2h3v-2zm0 3h-3v2h3v-2z"},{"class":"svg-icon10","d":"M29 36H13v-4h16v-2l6 3.8v.3l-6 4v-2z"}]
	};

/***/ },
/* 120 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M33 28H15c-1.2 0-2-.6-2-2V12c0-1.4.6-2 1.7-2H33c1.4 0 2 .8 2 2v14c0 1.4-.8 2-2 2zm-2-3h2v-2h-2v2zm0-3h2v-2h-2v2zm0-3h2v-2h-2v2zm-8 6h7v-2h-7v2zm0-3h7v-2h-7v2zm0-3h7v-2h-7v2zm-4 6h3v-2h-3v2zm0-3h3v-2h-3v2zm0-3h3v-2h-3v2zm-4 6h3v-2h-3v2zm0-3h3v-2h-3v2zm0-3h3v-2h-3v2zm18-6H15v2h18v-2z"},{"class":"svg-icon10","d":"M19 36h16v-4H19v-2l-6 3.8v.3l6 4v-2z"}]
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon17","d":"M28 35l-2 2v1h-4v-1l-2-2v-3h-1v-1h10v1h-1v3zm-9-2h10v1H19v-1z"},{"class":"svg-icon01","d":"M28.4 29c.6-1.3-.2-.5.6-2 .5-1 1-2 1.4-2.5C32 23 33 20.8 33 19c0-5-4.5-9-9-9s-9 4-9 9c0 2.3 1 4 2.6 5.5.5.5 1 1.4 1.4 2.5.8 1.5 0 .7.6 2h8.8z"}]
	};

/***/ },
/* 122 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M37 15H15c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V16c0-.6-.5-1-1-1zm-6 15v1h-1v2l-2 3h-4l-2-3v-2h-1v-1h1v-2.2l-.6-.8c-1.2-1-2.3-3.3-2.3-5 0-3.5 3.5-6 7-6s6.8 2.5 6.8 6c0 1.7-1.2 4-2.3 5l-.5.7V30h1z"},{"class":"svg-icon05","d":"M12 13.2V35h-1c-.6 0-1-.7-1-1.2V12c0-.6.4-1 1-1h24c.5 0 1 .4 1 1v1H13c-.5 0-1-.3-1 .2z"},{"class":"svg-icon17","d":"M27 34h-2l-1-1v-3h4v3l-1 1zm-4-4h6v1h-6v-1z"},{"class":"svg-icon01","d":"M28.2 29c.3-.6 0-1 .3-1.6l.8-1.3c.8-.7 1.7-2.3 1.7-3.5 0-2.5-2.4-4.5-5-4.5s-5 2-5 4.5c0 1.2 1 2.8 1.7 3.6l.8 1.4c.4.7 0 1 .3 1.6h4.4z"}]
	};

/***/ },
/* 123 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd11',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M35 11c-1.7 0-3 1.2-3 2.6v21.8c0 1.4 1.3 2.6 3 2.6s3-1.2 3-2.6V13.6c0-1.4-1.3-2.6-3-2.6zm0 24c-.5 0-1-.4-1-1s.5-1 1-1 1 .5 1 1-.4 1-1 1zm0-4c-.5 0-1-.4-1-1s.5-1 1-1 1 .5 1 1-.4 1-1 1zm0-4c-.5 0-1-.4-1-1s.5-1 1-1 1 .5 1 1-.4 1-1 1zm0-4c-.5 0-1-.4-1-1s.5-1 1-1 1 .5 1 1-.4 1-1 1z"},{"class":"svg-icon06","d":"M28 11c-1.7 0-3 1.2-3 2.6v21.8c0 1.4 1.3 2.6 3 2.6s3-1.2 3-2.6V13.6c0-1.4-1.3-2.6-3-2.6zm0 24c-.5 0-1-.4-1-1s.5-1 1-1 1 .5 1 1-.4 1-1 1zm0-4c-.5 0-1-.4-1-1s.5-1 1-1 1 .5 1 1-.4 1-1 1zm0-4c-.5 0-1-.4-1-1s.5-1 1-1 1 .5 1 1-.4 1-1 1z"},{"class":"svg-icon03","d":"M21 11c-1.7 0-3 1.2-3 2.6v21.8c0 1.4 1.3 2.6 3 2.6s3-1.2 3-2.6V13.6c0-1.4-1.3-2.6-3-2.6zm0 24c-.5 0-1-.4-1-1s.5-1 1-1 1 .5 1 1-.4 1-1 1zm0-4c-.5 0-1-.4-1-1s.5-1 1-1 1 .5 1 1-.4 1-1 1z"},{"class":"svg-icon04","d":"M14 11c-1.7 0-3 1.2-3 2.6v21.8c0 1.4 1.3 2.6 3 2.6s3-1.2 3-2.6V13.6c0-1.4-1.3-2.6-3-2.6zm0 24c-.5 0-1-.4-1-1s.5-1 1-1 1 .5 1 1-.4 1-1 1zm0-4c-.5 0-1-.4-1-1s.5-1 1-1 1 .5 1 1-.4 1-1 1zm0-4c-.5 0-1-.4-1-1s.5-1 1-1 1 .5 1 1-.4 1-1 1zm0-4c-.5 0-1-.4-1-1s.5-1 1-1 1 .5 1 1-.4 1-1 1zm0-4c-.5 0-1-.4-1-1s.5-1 1-1 1 .5 1 1-.4 1-1 1z"}]
	};

/***/ },
/* 124 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M30.5 25c3 0 5.5 2.5 5.5 5.5S33.5 36 30.5 36 25 33.5 25 30.5s2.5-5.5 5.5-5.5zm-12-13c3 0 5.5 2.5 5.5 5.5S21.5 23 18.5 23 13 20.5 13 17.5s2.5-5.5 5.5-5.5z"},{"class":"svg-icon02","d":"M31 12l6 11H25l6-11zM18 25l6 11H12l6-11z"}]
	};

/***/ },
/* 125 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M11 11v26h26V11H11zm8 24h-6v-6h6v6zm0-8h-6v-6h6v6zm0-8h-6v-6h6v6zm8 16h-6v-6h6v6zm0-8h-6v-6h6v6zm0-8h-6v-6h6v6zm8 16h-6v-6h6v6zm0-8h-6v-6h6v6zm0-8h-6v-6h6v6z"},{"class":"svg-icon10","d":"M30 22h4v4h-4v-4zm-16-8h4v4h-4v-4z"},{"class":"svg-icon07","d":"M30 14h4v4h-4v-4zM14 30h4v4h-4v-4z"}]
	};

/***/ },
/* 126 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd10',
	  paths: [{"class":"svg-shortcut","d":"M28.05 42.5L25 45.2v-1.7c-.44-.1-1.4-.15-2.45.6-1.4 1-1.57 1.47-1.57 1.47s-.4-1.24.8-2.7c1.26-1.54 2.67-1.56 3.23-1.5v-1.63l3.05 2.72z"},{"class":"svg-cluster","d":"M28.47 41.3c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm-4 0c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2zm-3.97 0c.66 0 1.2.55 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2z"},{"class":"svg-icon01","d":"M19.17 19.8c2 0 2.94 2.82 1.93 2.96-1 .14-2.58-.5-2.56.35.05 1.55 1.72 1.74 2.73 2 1.38.34 2.8.4 4.17.87.78.27 1.62.73 2.23 1.4.47.55.8 1.37.55 2.15-.28.83-.53 1-1.58 1.7-.85.58-2 .92-2.9 1.35-.57.26-1.65.72-1.6 1.5.04.7 1.72 1.14 1.7 2.04 0 .85-2.02-.5-2.22-.7-2.63-2.6 2.4-4.44 3.78-5.13.46-.23 1.86-.74 1.5-1.62-.36-.88-2.37-1.33-3.1-1.42-1.64-.2-1.5-.24-2.6-.46-1.36-.28-3.04-.6-4.04-1.85-.85-1.08-1.33-2-.88-3.14.4-1.03 1.03-1.97 2.9-1.97zm12.55 1.98c.45 1.15.07 2.06-.78 3.14-1 1.26-2.68 1.57-4.04 1.85-1.1.22-.96.25-2.6.46-.73.1-2.84.54-3.2 1.42-.35.88 1.14 1.4 1.6 1.62 1.4.7 6.4 2.52 3.78 5.13-.2.2-2.2 1.55-2.23.7 0-.9 1.63-1.34 1.67-2.03.05-.78-1-1.24-1.55-1.5-.9-.43-2.06-.77-2.9-1.34-1.06-.7-1.3-.9-1.6-1.7-.25-.8.1-1.62.56-2.15a5 5 0 0 1 2.24-1.4c1.36-.47 2.78-.54 4.16-.9 1-.24 2.68-.43 2.73-1.97.02-.83-1.65-.2-2.66-.34-1-.14-.07-2.95 1.93-2.95 1.86 0 2.5.95 2.9 1.98zm-5.8-9.82c0 1.16-.8 1.96-1.92 1.96-1.1 0-1.93-.8-1.93-1.96S22.9 10 24 10s1.93.8 1.93 1.96zM24.65 38h-1.28l-.32-24.08.53-1.08h.8l.6 1.08L24.64 38zM24 20.8c-.72-2.22-4.54-3.06-4.83-2.95-1.42.57-3.2 1.15-4.83.98-3.42-.35-4.52-5.12-4.35-5.06 2.58 1 4.8 2.16 7.24.16.82-.67 1.5-1.4 2.48-1.77 1.35-.5 1.48.76 1.5 1.86 0 .34-.02.57.18.86.22.36.7.72 1.1.8.13.02 1.5.5 1.5.2 0 .55.1 4.38 0 4.92zm0-4.9c0 .27 1.37-.2 1.5-.22.4-.08.88-.44 1.1-.8.2-.3.2-.52.2-.86 0-1.1.13-2.36 1.48-1.87 1 .37 1.66 1.1 2.48 1.77 2.45 2 4.66.86 7.25-.15.18-.06-.92 4.7-4.34 5.06-1.62.17-3.4-.4-4.83-.98-.3-.1-4.1.73-4.83 2.94-.1-.54 0-4.37 0-4.9z"}]
	};

/***/ },
/* 127 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M36.5 12c1.3 0 1.5 1 1.5 1.7v20.6c0 .7-.2 1.7-1.5 1.7-1.2 0-1.5-1-1.5-1.7V13.7c0-.7.3-1.7 1.5-1.7z"},{"class":"svg-icon12","d":"M10 21.5v6l4 1.2c-.3 2 .4 5 2 5.5l5 1.7c1.5.4 4-1.6 4.7-3.4L33 35V13l-23 8.5zM23 32c-.4 1.2-1.4 1.6-2.8 1.2l-2-.7c-1-.2-1.8-1.3-1.4-2.7l6.2 2z"}]
	};

/***/ },
/* 128 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd11',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M34 13H14c-.6 0-2 1.2-2 2v13c0 .7 1.4 2 2 2h2v5l4-4.6.6-.7H34c.6 0 2-1.3 2-2V15c0-.8-1.4-2-2-2zm-2 11H16v-2h16v2zm0-4H16v-2h16v2z"}]
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd11',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M16 35v-5h-2c-.6 0-2-1.3-2-2V15c0-.8 1.4-2 2-2h20c.6 0 2 1.2 2 2v5l-2-1h-4v2h-8v6h1l-7 8z"},{"class":"svg-icon06","d":"M29 33h8v-3h-8v-2l-6 3v1l6 3v-2z"},{"class":"svg-icon09","d":"M32 26h-8v-3h8v-2l6 3v1l-6 3v-2z"}]
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28.05 42.5L25 45.2v-1.7c-.44-.1-1.4-.15-2.45.6-1.4 1-1.57 1.47-1.57 1.47s-.4-1.24.8-2.7c1.26-1.54 2.67-1.56 3.23-1.5v-1.63l3.05 2.72z"},{"class":"svg-cluster","d":"M28.47 41.3c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm-4 0c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2zm-3.97 0c.66 0 1.2.55 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2z"},{"class":"svg-icon01","d":"M24 30c-2.74 0-4-1.93-4-5v-5h8v5c0 2.8-1.26 5-4 5zm-4-15c0-2.8 1.26-5 4-5s4 2.2 4 5v3h-8v-3z"},{"class":"svg-icon18","d":"M32 22v4c0 3.75-3.44 8-7 8v2h4l1 2H18l1-2h4v-2c-3.78 0-7-4.25-7-8v-4h-1v-2h3v7c0 2.28 3.08 4.92 5 5 1.92.08.25.08 2 0s5-3 5-5v-7h3v2h-1z"}]
	};

/***/ },
/* 131 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon09","d":"M21 23h-9c-1 0-2 0-2 1v11c0 1 1 1 2 1h9c1 0 1.8 0 1.8-1V24c0-1-1-1-2-1zm0 11h-9v-9h9v9zm-7-7h5v5h-5v-5z"},{"class":"svg-icon04","d":"M31.5 23C28 23 25 26 25 29.5s3 6.5 6.5 6.5 6.5-3 6.5-6.5-3-6.5-6.5-6.5zm0 11C29 34 27 32 27 29.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5zm0-7c1.4 0 2.5 1 2.5 2.5S33 32 31.5 32 29 31 29 29.5s1-2.5 2.5-2.5z"},{"class":"svg-icon10","d":"M34 20l-8-1v-1l2.3-1.4c-1.3-1-3-1.8-4.8-1.8-3.7 0-6.8 2.6-7.7 6H12c1.5-5 6-9 11.5-9 3 0 5.6 1 7.6 2.7l2.4-1.6h.6v7z"}]
	};

/***/ },
/* 132 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon09","d":"M36 23h-9c-1 0-2 0-2 1v11c0 1 1 1 1.8 1H36c1 0 2 0 2-1V24c0-1-1-1-2-1zm0 11h-9v-9h9v9zm-2-2h-5v-5h5v5z"},{"class":"svg-icon04","d":"M16.5 23C13 23 10 26 10 29.5s3 6.5 6.5 6.5 6.5-3 6.5-6.5-3-6.5-6.5-6.5zm0 11C14 34 12 32 12 29.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5zm2.5-4.5c0 1.4-1 2.5-2.5 2.5S14 31 14 29.5s1-2.5 2.5-2.5 2.5 1 2.5 2.5z"},{"class":"svg-icon10","d":"M36 21h-4c-1-3.4-4-6-7.7-6-1.8 0-3.5.7-4.8 1.8l2.2 1.4v.7l-8 1v-7h.6l2.3 1.7c2-1.7 4.6-2.7 7.5-2.7 5.5 0 10 4 11.4 9z"}]
	};

/***/ },
/* 133 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon10","d":"M27.2 13l-.2 1.5c0 .5 0 1 .2 1.5h-6.4l.2-1.5c0-.5 0-1-.2-1.5h6.4zM14.5 27c.5 0 1 0 1.5.2v-6.4l-1.5.2c-.5 0-1 0-1.5-.2v6.4l1.5-.2zm12.7 8l-.2-1.5c0-.5 0-1 .2-1.5h-6.4l.2 1.5c0 .5 0 1-.2 1.5h6.4zm6.3-14c-.5 0-1 0-1.5-.2v6.4l1.5-.2c.5 0 1 0 1.5.2v-6.4l-1.5.2z"},{"class":"svg-icon12","d":"M14.5 10c2.5 0 4.5 2 4.5 4.5S17 19 14.5 19 10 17 10 14.5s2-4.5 4.5-4.5zm0 19c2.5 0 4.5 2 4.5 4.5S17 38 14.5 38 10 36 10 33.5s2-4.5 4.5-4.5zm19-19c2.5 0 4.5 2 4.5 4.5S36 19 33.5 19 29 17 29 14.5s2-4.5 4.5-4.5zm0 19c2.5 0 4.5 2 4.5 4.5S36 38 33.5 38 29 36 29 33.5s2-4.5 4.5-4.5z"}]
	};

/***/ },
/* 134 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon10","d":"M16 16c-.3 1.4-1.5 2.8-3 3v-3h3zm-3 11h3c-.3-1.4-1.5-2.8-3-3v3zm5 0h1c.2-1 .5-2 1-2.8-.7-.8-1-1.7-1-2.7a4.55 4.55 0 1 1 8.3-2.5h4.4c-1-1-1.6-2-1.7-3H18c-.3 2-2.8 4.7-5 5v1c2.2.3 4.7 3 5 5zm-6 1V15h24v5.7c.8.5 1.4 1 2 1.8V13H10v17h9v-2h-7zm11.5-10c-2 0-3.5 1.6-3.5 3.5 0 .6.2 1.2.5 1.7 1.3-2 3.3-3.3 5.7-4-.7-.7-1.6-1.2-2.7-1.2zM35 16h-3c.2 1.4 1.6 2.8 3 3v-3z"},{"class":"svg-icon14","d":"M28 27.5V21c1.6 0 3.8.4 5.6 2L28 27.6z"},{"class":"svg-icon04","d":"M22.2 32c-.7-1.2-1.2-2.7-1.2-4 0-3 2.6-6 6-6.7v7L22.2 32z"},{"class":"svg-icon01","d":"M36 23c1.3 1.4 2 3 2 5 0 1.4-1.3 4-2 5l-6-5 6-5z"},{"class":"svg-icon10","d":"M28.8 28l5.2 4.5C32.6 34 31 35 28.6 35c-2 0-4.2-1-5.6-2.3l1.3-1 4.5-3.6z"}]
	};

/***/ },
/* 135 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon10","d":"M23.5 19c2 0 3.5 1.6 3.5 3.5S25.4 26 23.5 26c-2 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5zM13 23v-1c2.2-.3 4.7-3 5-5h12c0 .5.2 1 .5 1.6l-2.5 4a4.5 4.5 0 1 0-4.5 4.4c.8 0 1.5-.2 2-.5l-1 1.5H18c-.3-2-2.8-4.7-5-5zm25-9zM13 28h3c-.3-1.4-1.5-2.8-3-3v3zm0-11v3c1.5-.2 2.7-1.6 3-3h-3zm23 7.5V29h-3l-1.5 2H38v-9.4l-2 3zM24 29H12V16h20l1.4-2H10v17h13.6c0-.5 0-1.2.4-2zm9.6-1H35v-2l-1.4 2z"},{"class":"svg-icon18","d":"M28.4 32.8l-.6 1-2.6 1.2-.2-2.7.5-1.2 3 1.8z"},{"class":"svg-icon01","d":"M29 31.6L26.3 30 33 18.4l3 1.7-7 11.6z"},{"class":"svg-icon07","d":"M36.6 19l-3-1.7L35 15l3 1.7-1.4 2.3z"}]
	};

/***/ },
/* 136 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28.05 42.5L25 45.2v-1.7c-.44-.1-1.4-.15-2.45.6-1.4 1-1.57 1.47-1.57 1.47s-.4-1.24.8-2.7c1.26-1.54 2.67-1.56 3.23-1.5v-1.63l3.05 2.72z"},{"class":"svg-cluster","d":"M28.47 41.3c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm-4 0c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2zm-3.97 0c.66 0 1.2.55 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2z"},{"class":"svg-icon10","d":"M36 19.28V14H12v13h7v2h-9V12h28v8.38c-.4-.4-.94-.7-1.56-.92-.14-.07-.3-.13-.44-.18zM13 26v-2c1.46.26 1.75.48 2 2h-2zm0-11h2c-.25 1.52-.53 1.74-2 2v-2zm22 0v2c-1.4-.26-1.8-.53-2-2h2zm-22 7v-3a4.41 4.41 0 0 0 4-4h14a4.52 4.52 0 0 0 4 4v.05c-.17-.02-.33-.05-.5-.05-.33 0-.65.04-.97.1-1.24.08-2.72.35-4.53.9-.7-.22-1.36-.38-1.98-.5-.3-2.2-2.14-2.5-3.02-2.5-2.37 0-3.5 1.88-3.05 3.76-.6.76-.95 1.7-.95 2.74 0 .16.03.3.05.46-.03.34-.05.68-.05 1.04 0 .3-.33.6-.6 1H17a4.42 4.42 0 0 0-4-4zm11-4c1.2 0 1.7.6 1.96 1.27A4.4 4.4 0 0 0 24.5 19c-1 0-1.92.34-2.67.9.2-1.08.75-1.9 2.17-1.9z"},{"class":"svg-icon12","d":"M38 33c0 .3-.72 1-1 1h-2v-5l1-2h1c.28 0 1 .83 1 1.13V33zm-3.63-7.13c-.56 0-1.07-.2-1.5-.5.08-.28.13-.57.13-.87a3.5 3.5 0 0 0-.84-2.25 2.46 2.46 0 0 1 2.22-1.38 2.5 2.5 0 0 1 0 5zM26 24.5c0 .24.02.48.07.7a2.5 2.5 0 1 1 .62-2.77c-.44.58-.7 1.3-.7 2.07zM23 27l1 2v5h-2c-.28 0-1-.7-1-1v-4.88c0-.3.72-1.12 1-1.12h1z"},{"class":"svg-icon05","d":"M32.92 36h-6.9c-.84 0-1.03-.5-1.03-.85v-6.3c0-.83.46-.83.83-.83h.85l2.83 3.7 2.94-3.7h.74c.36 0 .84.47.84.83v6.3c0 .36-.26.84-1.1.84zm-3.55-9.13a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"}]
	};

/***/ },
/* 137 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd10',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon01","d":"M17.4 10.2c-3.7 1-1.2 5.6-1.2 5.6l-2.4-1.3c-1 0-1.8 2-1.8 2 1.8-.2 2.4.5 2.4.5H21v-5s-.6-2.7-3.6-1.8zm.8 3.3c-.4-1 0-1.4.6-1.5.6 0 1.2 2.2 1.2 3 0 0-1.5-.5-1.8-1.5zm10 1l-2.4 1.3s2.5-4.5-1.2-5.6c-3-1-3.6 2-3.6 2V17h6.6s.6-.7 2.4-.6c0 0-.8-1.8-1.8-2zm-4.3-1c-.5 1-2 1.5-2 1.5 0-.8.6-3 1.2-3 .7 0 1 .4.7 1.5zM19 18h4v15h-4V18z"},{"class":"svg-icon04","d":"M11 22h7v11h-7V22zm-1-4h8v4h-8v-4zm14 0h8v4h-8v-4zm0 4h7v1h-7v-1z"},{"class":"svg-icon10","d":"M36 24H26c-1 0-2 1-2 2v10c0 1 1 1.8 2 1.8h10c1 0 2-.8 2-1.7V25.8c0-1-1-1.8-2-1.8zm.2 8.4h-1.7l-.8-.7-.4 1.3-1-.3H32l-.7-3-1 5.2.3.3h-.3v.2H30l-.6.2v-.4H29l.2-.3-1.2-3.7-.8 1-.2-.2v.4h-1.3v-1.2h.8l1.6-2 1 .6v.3l.6 2.4 1-5.7h.4l1-.2.8 4 .2-.8h.6l.6.3v.3l.8 1h1.2v1z"}]
	};

/***/ },
/* 138 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon08","d":"M13.6 22.4v1.2c.6.2 1 .6 1 1.2s-.4 1-1 1.3v.8c.7 0 .7 1 .7 1.6L15 35l-.8-.8s-.8 1.8-1 1.8c-.3 0-1-1.8-1-1.8L11 35l.7-6.6c0-.6.2-1.5 1-1.7V26c-.6 0-1-.6-1-1.2s.4-1 1-1.5V22l1 .4z"},{"class":"svg-icon11","d":"M15.5 27.5c.5-2 .4-3 1.8-4.4l7 3.5 7-3.4c1.4 1.5 2.4 3.2 3 5h-1.7c-3.4 0-5.7 1-8.2 3-2.4-2-5.5-3.3-9-3.3-.4 0 .6-.3 0-.2zm9-2L10 19l14.4-6L38 19l-13.4 6.4z"}]
	};

/***/ },
/* 139 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd12',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M32 33l-5-4s-1-.2-1 .4V31H12a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14v1.5c0 .7 1 .5 1 .5z"},{"class":"svg-icon05","d":"M35 24l-5-4s-1 0-1 .4V22H15.3a1 1 0 0 0-1.3 1v2a1 1 0 0 0 1 1h14v1.4c0 .8 1 .6 1 .6z"},{"class":"svg-icon06","d":"M38 15l-5-4s-1 0-1 .4V13H18.2a1 1 0 0 0-1.2 1v2a1 1 0 0 0 1 1h14v1.5c0 .8 1 .5 1 .5z"}]
	};

/***/ },
/* 140 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd12',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M17 33l5-4s1-.2 1 .4V31h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H23v1.5c0 .7-1 .5-1 .5z"},{"class":"svg-icon05","d":"M14 24l5-4s1 0 1 .4V22h13.7a1 1 0 0 1 1.3 1v2a1 1 0 0 1-1 1H20v1.4c0 .8-1 .6-1 .6z"},{"class":"svg-icon06","d":"M11 15l5-4s1 0 1 .4V13h13.8a1 1 0 0 1 1.2 1v2a1 1 0 0 1-1 1H17v1.5c0 .8-1 .5-1 .5z"}]
	};

/***/ },
/* 141 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd10',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon18","d":"M14.4 38H31c.5 0 1-.7 1-1.4V21h-1c-3.6 0-6-2-6-7 0-.8-.2-1.3 0-2H14.5c-.7 0-1.5 1-1.5 1.7v22.7c0 .7.8 1.6 1.4 1.6z"},{"class":"svg-icon01","d":"M35 13.6h-2l2-2.3-1.2-1.3-2 2.3V10h-1.6v2.3l-2-2.3-1.2 1.3 2 2.3h-2v1.8h2l-2 2.3 1.2 1.2 2-2.3V19h1.6v-2.3l2 2.2 1.2-1.3-2-2.3h2v-1.8z"}]
	};

/***/ },
/* 142 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd02',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M30 24c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z"},{"class":"svg-icon12","d":"M18 24c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z"},{"class":"svg-icon15","d":"M24 13c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z"}]
	};

/***/ },
/* 143 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M22 21h2v6h-2v-2h-5.6c-.6 0-1.4.5-1.4 1v1h-2v-2c0-.6 1.4-2 2-2h7v-2z"},{"class":"svg-icon05","d":"M20 12h6c.5 0 1 .5 1 1v6c0 .5-.5 1-1 1h-6c-.5 0-1-.5-1-1v-6c0-.5.5-1 1-1zm-8 17h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1v-5c0-.6.4-1 1-1zm9 0h5c.6 0 1 .4 1 1v5c0 .6-.4 1-1 1h-5c-.6 0-1-.4-1-1v-5c0-.6.4-1 1-1z"},{"class":"svg-icon10","d":"M33.8 31.2L35 33h-6l2-5.4 1.6 2c1.4-1.4 2.4-3.3 2.4-5.3s-1-4-2.5-5.5L31 21l-2-6h6l-1.4 2.2c2 1.7 3.4 4.2 3.4 7 0 3-1.2 5.4-3.2 7z"}]
	};

/***/ },
/* 144 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd12',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M28 25v1h1.3l.7-1v-1c0-1.3-.8-2-2-2h-6v-1h-2v1h-6c-1.4 0-2 .8-2 2v2h2v-1c0-.5.4-1 1-1h5v2h2v-2h5c.6 0 1 .5 1 1z"},{"class":"svg-icon05","d":"M18 12h5.7c.5 0 1.3.5 1.3 1v6c0 .5-.5 1-1 1h-6c-.5 0-1-.8-1-1.3V13c0-.3.7-1 1-1zm1 16h4c.4 0 1 .7 1 1v4c0 .3-.7 1-1.2 1H19c-.4 0-1-.7-1-1v-4c0-.3.6-1 1-1zm-8 0h4c.4 0 1 .7 1 1v4c0 .3-.8 1-1.2 1H11c-.4 0-1-.7-1-1v-4c0-.3.6-1 1-1zm17 0h-1c-.4 0-1 .7-1 1v2.4l2-3.4z"},{"class":"svg-icon18","d":"M29.2 35.2l-.7 1-2.3 1-.2-2.5.4-1 2.8 1.5z"},{"class":"svg-icon01","d":"M29.8 34L27 32.7 33.5 22l2.7 1.6L30 34z"},{"class":"svg-icon07","d":"M36.7 22.6L34 21l1.3-2 2.7 1.5-1.3 2z"}]
	};

/***/ },
/* 145 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd10',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M38 25v13H11V25h10v6h7v-6h10z"},{"class":"svg-icon09","d":"M25 10v13H12V10h3v6h7v-6h3zm10 3v5h-7v-5h-1v10h9V13h-1z"},{"class":"svg-icon08","d":"M23 25h3v4h-3v-4zm7-12h3v3h-3v-3zm-13-3h3v4h-3v-4z"}]
	};

/***/ },
/* 146 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon17","d":"M17.5 29c-1.3 0-4 1.3-5 4.7-.3 1.2-2 1.7-2.5 1.7 0 0 1.7.8 3.8.6 2.2-.2 5.5-1 6.2-4.5-.5 0-1-.4-1.6-1-.5-.4-1-1-1-1.5z"},{"class":"svg-icon02","d":"M23.5 28c-1.2-.6-2.2-1.7-2.7-3l-1.3 1.2c-1 .8-.2 2 .5 2.7.7.6 2 1.5 2.7.6l1.3-1.4c-.2 0-.3 0-.5-.2-.5-.2.2 0 0 0z"},{"class":"svg-icon08","d":"M37.5 12.6c-.6-.6-1.5-1-2.2-.3l-1 .8-3.7 3.2c-2.6 2-5.2 4.3-8 6.4 0 .2-.3.4-.4.6-.6 1 .8 2.6 1.6 3.2.6.4 1.8 1 2.4.3l.7-.7 7.3-7.8 2.7-3c.7-.7 1.6-1.5.5-2.6z"}]
	};

/***/ },
/* 147 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M18.2 38h-7.4c-.3 0-.8-.6-.8-1v-5c0-.4.5-1 .8-1h1.7l2 3.4 2-3.4h1.7c.3 0 .8.6.8 1v5c0 .4-.5 1-.8 1zm-3.7-13c1.4 0 2.5 1 2.5 2.5 0 1.4-1 2.5-2.5 2.5S12 29 12 27.5c0-1.4 1-2.5 2.5-2.5zm22.7 13h-7.4c-.3 0-.8-.6-.8-1v-5c0-.4.5-1 .8-1h1.7l2 3.4 2-3.4h1.7c.3 0 .8.6.8 1v5c0 .4-.5 1-.8 1zm-3.7-13c1.4 0 2.5 1 2.5 2.5 0 1.4-1 2.5-2.5 2.5S31 29 31 27.5c0-1.4 1-2.5 2.5-2.5zm-6.3-2h-7.4c-.3 0-.8-.6-.8-1v-5c0-.4.5-1 .8-1h1.7l2 3.4 2-3.4h1.7c.3 0 .8.6.8 1v5c0 .4-.5 1-.8 1zm-3.7-13c1.4 0 2.5 1 2.5 2.5S25 15 23.5 15 21 14 21 12.5s1-2.5 2.5-2.5z"},{"class":"svg-icon03","d":"M27 29l-1 1-2-2-2 2-1-1 2-2v-2h2v2l2 2z"}]
	};

/***/ },
/* 148 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd10',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M33 38H15c-.7 0-1-.3-1-1V24c0-1 1-2 2-2h3l5 8 5-8h3c1 0 2 1.3 2 2v13c0 .7-1 1-1 1zm-9-28c3 0 5.4 2.5 5.4 5.5S27 21 24 21s-5.5-2.5-5.5-5.5S21 10 24 10z"}]
	};

/***/ },
/* 149 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M25 15.5c0 3-2.4 5.5-5.5 5.5S14 18.5 14 15.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5zm-2 9c0-1 .6-1.5 1.4-1.5h3.3c-.4-.5-1-1-1.4-1h-2.6l-4.2 7-4.3-7h-2.5c-.6 0-1.7 1-1.7 1.8V35c0 .7.2 1 1 1h11V24.4z"},{"class":"svg-icon03","d":"M36 25H26c-.5 0-1 .5-1 1v11c0 .5.5 1 1 1h10c.5 0 1-.5 1-1V26c0-.5-.4-1-1-1zm0 12H26V26h10v11z"},{"class":"svg-icon12","d":"M27 27v9h8v-9h-8zm6 7h-4v-1h4v1zm0-2h-4v-1h4v1zm0-2h-4v-1h4v1z"}]
	};

/***/ },
/* 150 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M18.5 10c2.5 0 4.5 2 4.5 4.5S21 19 18.5 19 14 17 14 14.5s2-4.5 4.5-4.5zM22 23h5v-2c0-.5-.4-1-1-1h-3l-4.2 6.3L14 20h-3c-.5 0-1 .5-1 1v11c0 .5.5 1 1 1h11V23z"},{"class":"svg-icon18","d":"M23 24v12h8v-1.8c-.4-.3-.6-.6-.8-1-.2-.4-.2-.8-.2-1.2h-5v-1h5v.4a3.1 3.1 0 0 1 3-2.5c1.4 0 2.6 1 3 2.4v.6c0 1-.4 1.7-1 2.2V36h3V24H23zm3 9h4v1h-4v-1zm8.6-4.3c-.6-1.2-2.3-1.8-4-2-1.4 0-3 1-3.8 2l-.7-.5c1-1 2.6-2.2 4.6-2.2 2 0 3.6.8 4.5 2.2l-.4.5z"},{"class":"svg-icon08","d":"M33.5 34h.5v4l-1-1-1 1v-4h.5c-1-.2-1.5-1-1.5-2s1-2 2-2 2 1 2 2-.7 1.8-1.5 2z"}]
	};

/***/ },
/* 151 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M24 11c-8 0-14 4.3-14 10.6 0 3.6 2 6.4 5 8.2V37s2.7-3 4.5-5.5c1.4.3 3 .5 4.5.5 8 0 14-4 14-10.4C38 15.3 32 11 24 11zm.5 4c1.4 0 2.5 1 2.5 2.5S26 20 24.5 20 22 19 22 17.5s1-2.5 2.5-2.5zM29 26.3c0 .3-.5.7-.8.7h-7.4c-.3 0-.8-.4-.8-.7v-4.8c0-.2.3-.5.6-.5h1.6l2.3 3.2 2.3-3.2h1.6c.4 0 .6.2.6.5v4.8z"}]
	};

/***/ },
/* 152 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd05',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M14 16.5c0-2.8 2.5-5.5 5.5-5.5s5.5 2.7 5.5 5.6c0 2.8-2.5 5.4-5.5 5.4S14 19.4 14 16.5zm8 16.8l5.2-9.3h-2.4c-.3 0-2 2-2 2l-3.3 4.8-3.7-6s-.7-.8-1.2-.8h-2.8c-1 0-1.8 1-1.8 1.6V36c0 1 1 2 1.8 2H22v-4.7z"},{"class":"svg-icon18","d":"M24 35.2l3 1.8-3 1v-2.8zm3 1.8l-3-1.8.5-1.3 3.2 1.8L27 37z"},{"class":"svg-icon01","d":"M25.2 32.7L32.6 20l3.2 1.8-7.4 12.7-3.2-1.8z"},{"class":"svg-icon07","d":"M33.3 18.7l1.5-2.6 3.2 2-1.5 2.5-3.2-1.8z"}]
	};

/***/ },
/* 153 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd02',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M26.08 36.6a1.65 1.65 0 0 0 .5.33 1.32 1.32 0 0 1-.47.08H10.9a.77.77 0 0 1-.9-.9V23.98c0-.64 1.14-1 1.8-1h2.7L18 30l4.5-7h2.7a2.1 2.1 0 0 1 .26 0l-1.56 1.57a1.4 1.4 0 0 0-.14 1.96l.48.47h-.9A1.37 1.37 0 0 0 22 28.4v3.2a1.37 1.37 0 0 0 1.33 1.4h.18a1.5 1.5 0 0 0 .43 1.43zM18.5 22a5.5 5.5 0 1 1 5.5-5.5 5.5 5.5 0 0 1-5.5 5.5z"},{"class":"svg-icon18","d":"M24.87 28.7a.86.86 0 0 0-.87.87v.87a.84.84 0 0 0 .87.84h1.24a5.3 5.3 0 0 0 .5 1.25l-.87.87a.87.87 0 0 0 0 1.24l.62.62a.87.87 0 0 0 1.24 0l.87-.88a5.36 5.36 0 0 0 1.25.52v1.24a.82.82 0 0 0 .83.86h.88a.83.83 0 0 0 .8-.88v-1.24a5.46 5.46 0 0 0 1.28-.5l.9.88a.88.88 0 0 0 1.23 0l.62-.62a.87.87 0 0 0 0-1.23l-.88-.87a5.3 5.3 0 0 0 .5-1.25h1.24a.84.84 0 0 0 .88-.84v-.87a.86.86 0 0 0-.87-.86H35.9a5.16 5.16 0 0 0-.5-1.22l.88-.87a.87.87 0 0 0 0-1.23l-.62-.62a.88.88 0 0 0-1.24 0l-.88.88a5.32 5.32 0 0 0-1.25-.5V23.9a.84.84 0 0 0-.84-.9h-.87a.84.84 0 0 0-.84.9v1.23a5.3 5.3 0 0 0-1.25.5l-.88-.88a.88.88 0 0 0-1.24 0l-.62.62a.87.87 0 0 0 0 1.23l.88.88a5.16 5.16 0 0 0-.5 1.23h-1.25zM31 28a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"}]
	};

/***/ },
/* 154 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M38 31v3H22v-3h16z"},{"class":"svg-icon06","d":"M22 30V17h3v13h-3z"},{"class":"svg-icon01","d":"M26 30V20h3v10h-3z"},{"class":"svg-icon08","d":"M30 30V14h3v16h-3z"},{"class":"svg-icon03","d":"M34 30v-5h3v5h-3z"},{"class":"svg-icon12","d":"M19.8 34h-8.6C10 34 10 33 10 33v-7c0-1 1-1 1-1h2l2.5 3 2.5-3h2s1 0 1 1v7s0 1-1.2 1zm-4.3-10c-2 0-3.5-1.5-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"}]
	};

/***/ },
/* 155 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd06',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M13 10c-1 0-2 .7-2 1.7V23h12V10H13zm4 2c1.2 0 2 .7 2 2a2 2 0 0 1-4 0c0-1.3.8-2 2-2zm-3 9v-3c0-.6 1-1 1-1h.7l1.3 1.5 1.3-1.5h.8s1 0 1 1v3h-6z"},{"class":"svg-icon14","d":"M23 25v13H12.7c-1 0-1.7-.7-1.7-1.7V25h12z"},{"class":"svg-icon03","d":"M25 25v13h10.3c1 0 1.7-.7 1.7-1.7V25H25zm6 2c1.2 0 2 .7 2 2s-1 2-2 2c-1.2 0-2-.8-2-2 0-1.3.8-2 2-2zm-3 9v-3c0-.6 1-1 1-1h.7l1.3 1.5 1.3-1.5h.8s1 0 1 1v3h-6z"},{"class":"svg-icon04","d":"M25 23V10h10.3c1 0 1.7.7 1.7 1.7V23H25z"}]
	};

/***/ },
/* 156 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28.05 42.5L25 45.2v-1.7c-.44-.1-1.4-.15-2.45.6-1.4 1-1.57 1.47-1.57 1.47s-.4-1.24.8-2.7c1.26-1.54 2.67-1.56 3.23-1.5v-1.63l3.05 2.72z"},{"class":"svg-cluster","d":"M28.47 41.3c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm-4 0c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2zm-3.97 0c.66 0 1.2.55 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2z"},{"class":"svg-icon05","d":"M17.02 23.38V19.3c0-1.3 1.2-1.28 1.2-1.28h2.76l2.54 4.43 2.52-4.43h2.76s1.2 0 1.2 1.28v4.82l-5.1 4.82h-1.86l-6.02-5.57zM20 13.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0z"},{"class":"svg-icon11","d":"M21.77 38h-5.62s.62-2.08-1.76-4.66c-1.76-1.9-2.8-3-3.47-4.74-.65-1.7-1.56-12.62-.32-12.62 1.46 0 1.65 2.35 1.65 3 0 .68.53 6.12 1.04 7.12.5 1 2.4 3.2 3.2 4.04.4.44 1.42-.52.88-1.1-.53-.56-2.54-3.17-2.54-3.17s-.92-1.04-.23-1.77c.77-.82 1.72 0 1.72 0s5.3 5.7 5.56 6.05c.2.28 1.45 1.4 1.03 4.9-.1.84-.9 1.82-1.13 2.96zm3.3-2.95c-.4-3.5.84-4.62 1.04-4.9.26-.34 5.57-6.04 5.57-6.04s.95-.82 1.7 0c.7.73-.22 1.77-.22 1.77s-2 2.6-2.54 3.18c-.53.58.5 1.53.9 1.1.8-.85 2.7-3.06 3.2-4.05.5-1 1.04-6.44 1.04-7.1 0-.67.2-3 1.64-3 1.24 0 .33 10.9-.32 12.6-.67 1.74-1.7 2.83-3.46 4.74-2.38 2.58-1.76 4.67-1.76 4.67h-5.62c-.24-1.13-1.04-2.1-1.14-2.95z"}]
	};

/***/ },
/* 157 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon06","d":"M35.5 10c1.4 0 2.5 1 2.5 2.5 0 1.4-1 2.5-2.5 2.5-1.4 0-2.5-1-2.5-2.5 0-1.4 1-2.5 2.5-2.5zM10 10h4v4h-4v-4zm16 28h-5l2.5-4 2.5 4z"},{"class":"svg-icon05","d":"M26.4 25h-5.8c-.3 0-.6-.3-.6-.5v-4c0-.2.3-.5.6-.5h1l2 2.3 1.7-2.3h1c.4 0 .7.3.7.5v4c0 .2-.3.5-.6.5zm-3-11c1.5 0 2.6 1 2.6 2.5S25 19 23.5 19 21 18 21 16.5s1-2.5 2.5-2.5z"},{"class":"svg-icon03","d":"M24.3 29.3V32H23v-3h-1l1.6-1.7 1.7 1.8h-1zm4.4-12l2-2.3 1.3 1.2-2 2.2.5.6H28v-2.5l.7.7zm-9.7-.8V19h-2.5l.7-.7-2.2-2 1.2-1.3 2.2 2 .6-.5z"}]
	};

/***/ },
/* 158 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M33.3 38H14.7c-1 0-1.7-.8-1.7-1.8V11.8c0-1 .8-1.8 1.7-1.8h18.6c1 0 1.7.8 1.7 1.8v24.4c0 1-.8 1.8-1.7 1.8zm-17-2h3.3c.2 0 .4-.4.4-1s-.2-1-.4-1h-3.2c-.2 0-.4.4-.4 1s.2 1 .4 1zm-.3-5c0 .6.2 1 .4 1h3.2c.2 0 .4-.4.4-1s-.2-1-.4-1h-3.2c-.2 0-.4.4-.4 1zm8-19c-1.6 0-3 1.3-3 3s1.4 3 3 3 3-1.2 3-3c0-1.6-1.4-3-3-3zm5 8c0-1-1-1-1-1h-2l-2 4-2-4h-2s-1 0-1 1v6s0 1 1 1h8c1 0 1-1 1-1v-6zm2.6 10h-9.2c-.2 0-.4.4-.4 1s.2 1 .4 1h9.2c.2 0 .4-.4.4-1s-.2-1-.4-1zm0 4h-9.2c-.2 0-.4.4-.4 1s.2 1 .4 1h9.2c.2 0 .4-.4.4-1s-.2-1-.4-1z"}]
	};

/***/ },
/* 159 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M33.3 38H14.7c-1 0-1.7-.8-1.7-1.8V11.8c0-1 .8-1.8 1.7-1.8h18.6c1 0 1.7.8 1.7 1.8v24.4c0 1-.8 1.8-1.7 1.8zm-17-2h9.3c.2 0 .4-.4.4-1s-.2-1-.4-1h-9.2c-.2 0-.4.4-.4 1s.2 1 .4 1zm-.3-5c0 .6.2 1 .4 1h9.2c.2 0 .4-.4.4-1s-.2-1-.4-1h-9.2c-.2 0-.4.4-.4 1zm8-19c-1.6 0-3 1.4-3 3 0 1.8 1.4 3 3 3s3-1.3 3-3-1.4-3-3-3zm5 8c0-1-1-1-1-1h-2l-2 4-2-4h-2s-1 0-1 1v6s0 1 1 1h8c1 0 1-1 1-1v-6zm2.6 10h-3.2c-.2 0-.4.4-.4 1s.2 1 .4 1h3.2c.2 0 .4-.4.4-1s-.2-1-.4-1zm0 4h-3.2c-.2 0-.4.4-.4 1s.2 1 .4 1h3.2c.2 0 .4-.4.4-1s-.2-1-.4-1z"}]
	};

/***/ },
/* 160 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon18","d":"M35.3 10H16.7c-1 0-1.7.8-1.7 1.7v6.8c1.3-1 2.8-1.5 4.5-1.5 2 0 3.8.8 5 2h.2v.2c1 .8 1.6 2 2 3l1.6-3.2h2s.7 0 .7 1v5s0 1-1 1h-3c-.3.7-.5 1.4-1 2h7.6c.2 0 .4.8.4 1s-.2 1-.4 1h-9c-.8.7-1.7 1.2-2.7 1.6v.3c0 .2-.2 1-.4 1h-3.2s-.2 0-.2-.3l-2 3.2h19.1c1 0 1.7-.8 1.7-1.7V11.7c0-1-.8-1.7-1.7-1.7zm-8.8 8C25 18 24 17 24 15.5s1-2.5 2.5-2.5 2.5 1 2.5 2.5-1 2.5-2.5 2.5zm7 15h-9c-.3 0-.5-.7-.5-1s.2-1 .4-1h9.2c.2 0 .4.7.4 1s-.2 1-.4 1z"},{"class":"svg-icon12","d":"M19.5 19c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5zm0 9c-2 0-3.5-1.6-3.5-3.5 0-2 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5c0 2-1.6 3.5-3.5 3.5z"},{"class":"svg-icon15","d":"M17 31l-3.7 6.6s-1 .6-1.7.3c-.6-.4-.6-1.5-.6-1.5l4-6.5 2 1z"}]
	};

/***/ },
/* 161 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M33 10H15c-1 0-2 1-2 2v24c0 1 1 2 2 2h18c1 0 2-1 2-2V12c0-1-1-2-2-2zm-15 2.8c.7 0 1.3.5 1.3 1.2s-.6 1.3-1.3 1.3-1.3-.6-1.3-1.3c0-.7.6-1.2 1.3-1.2zM19.6 35h-3.2c-.4 0-.4-1-.4-1v-1c0-.7 1-1 1-1l1 1.2 1-1.2s1 .3 1 1v1.6s0 .4-.4.4zm-3-5c0-.7.7-1.2 1.4-1.2s1.3.5 1.3 1.2-.6 1.3-1.3 1.3-1.3-.6-1.3-1.3zm3-3h-3.2c-.4 0-.4-1-.4-1v-1c0-.7 1-1 1-1l1 1.2 1-1.2s1 .3 1 1v1.6s0 .4-.4.4zm-3-5c0-.7.7-1.2 1.4-1.2s1.3.5 1.3 1.2-.6 1.3-1.3 1.3-1.3-.6-1.3-1.3zm3-3h-3.2c-.4 0-.4-1-.4-1v-1c0-.7 1-1 1-1l1 1.3 1-1.3s1 .3 1 1v1.6s0 .4-.4.4zM32 34H21v-1h11v1zm0-8H21v-1h11v1zm0-8H21v-1h11v1z"}]
	};

/***/ },
/* 162 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M33 10H15c-1 0-2 1-2 2v24c0 1 1 2 2 2h18c1 0 2-1 2-2V12c0-1-1-2-2-2zm-3 2.8c.7 0 1.3.5 1.3 1.2s-.6 1.3-1.3 1.3-1.3-.6-1.3-1.3c0-.7.6-1.2 1.3-1.2zM27 34H16v-1h11v1zm0-8H16v-1h11v1zm0-8H16v-1h11v1zm5 16s0 1-.4 1h-3.2c-.4 0-.4-.4-.4-.4V33c0-.7 1-1 1-1l1 1.2 1-1.2s1 .3 1 1v1zm-3.3-4c0-.7.6-1.2 1.3-1.2s1.3.5 1.3 1.2-.6 1.3-1.3 1.3-1.3-.6-1.3-1.3zm3.3-4s0 1-.4 1h-3.2c-.4 0-.4-.4-.4-.4V25c0-.7 1-1 1-1l1 1.2 1-1.2s1 .3 1 1v1zm-3.3-4c0-.7.6-1.2 1.3-1.2s1.3.5 1.3 1.2-.6 1.3-1.3 1.3-1.3-.6-1.3-1.3zm3.3-4s0 1-.4 1h-3.2c-.4 0-.4-.4-.4-.4V17c0-.7 1-1 1-1l1 1.3 1-1.3s1 .3 1 1v1z"}]
	};

/***/ },
/* 163 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M32 30h2v3h-2v-3zm-9 8h3v-2h-3v2zm-8-5h2v-3h-2v3zm19 3v-2h-2v2h-1v2h1.6c1 0 1.4-.5 1.4-2zm-7 2h3v-2h-3v2zm-8 0h3v-2h-3v2zm-2-12l-2-.7V29h2v-3zm17-.7l-2 .7v3h2v-3.7zm-12.5-5L19.7 22l.7 2 1.4-1c.4-.5.5-1.6 0-2l-.3-.7zm9-5.3c0-1.5-1-3-2-3.8l-1 1.8c.5.5.8 1.2 1 2h2zm.2 1h-2c-.2.8-.8 1.7-1.4 2.3l1.5 1.2c1-.8 1.7-2 2-3.5zm-9-3l-1.2-1.8c-1 .8-2 2.3-2 3.8h2c0-.8.5-1.5 1-2zm.7-2.6L23 12h3l.6-1.6c-.6-.2-1.4-.4-2-.4-1 0-1.6.2-2.2.4zm-.7 7.8c-.6-.5-1-1.4-1.2-2.2h-2c0 1.4.6 2.5 1.6 3.4l1.7-1.2zm-3.3 4.4L15.7 24l2.7 1.3.7-.7-.6-2zM28.6 24l.6-2-1.7-1.7-.4.7c-.3.4-.2 1.5.2 2l1.4 1zm2-1.4l-.7 2 .6.7 2.7-1.4-2.7-1.4zM17 34h-2v3c.2.7 1 1 1.3 1H18v-2h-1v-2z"}]
	};

/***/ },
/* 164 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd06',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M36 29h-2v9h-7v-9h-2c-1.3 0-1-1-1-1v-8c0-2.2 1-2 1-2h3l2.5 4.5L33 18h3s1 0 1 2v8s-.5 1-1 1zm-5.5-19c2 0 3.5 1.6 3.5 3.5S32.4 17 30.5 17c-2 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5z"},{"class":"svg-icon06","d":"M17 10.2c-.2-.3-.8-.3-1 0L12 16c-.2.3-2 2 0 2h2v19s-.2 1 1 1h3c1.2 0 1-1 1-1V18h2c2 0 .2-1.7 0-2l-4-5.8z"}]
	};

/***/ },
/* 165 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M28 38H12c-.8 0-1-.3-1-1V25c0-1 1-2 1.8-2h2.7l4.5 6 4.5-6h2.7c1 0 1.8 1.2 1.8 2v12c0 .7-1 1-1 1zm-8-26c3 0 5 2.2 5 5s-2 5-5 5c-2.7 0-5-2.3-5-5s2.3-5 5-5z"},{"class":"svg-icon09","d":"M36 19.7l-3.5-3.5-3.5 3.5-.7-.7 3.5-3.5-3.5-3.5.7-.7 3.5 3.5 3.5-3.5.7.7-3.5 3.5 3.5 3.5-.7.7z"},{"class":"svg-icon01","d":"M38 16h-5v5h-1v-5h-5v-1h5v-5h1v5h5v1z"}]
	};

/***/ },
/* 166 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M27.8 31h-7.6c-.3 0-1.2-1-1.2-1.3v-7c0-.4.3-.7.6-.7h2l2.4 3.2 2.5-3.2h2c.2 0 .5.3.5.6v7c0 .5-1 1.4-1.2 1.4zM24 15c1.8 0 3 1.3 3 3 0 1.8-1.2 3-3 3s-3-1.2-3-3c0-1.7 1.3-3 3-3z"},{"class":"svg-icon03","d":"M26.2 38c-3 .2-5.7-.5-8-2l-2 1.8-1.2-7 7 1.5-1.8 1.7c1.7 1 3.7 1.4 5.7 1.2 2-.3 3.8-1 5.2-2.3l2.8 1c-2 2.2-4.7 3.6-7.8 4zm-3.4-28c3-.2 5.7.5 8 2l2-1.8 1.2 7-7-1.5 1.8-1.7C27 13 25 12.6 23 13c-2 0-3.8 1-5.2 2L15 14c2-2.2 4.7-3.6 7.8-4z"}]
	};

/***/ },
/* 167 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28.05 42.5L25 45.2v-1.7c-.44-.1-1.4-.15-2.45.6-1.4 1-1.57 1.47-1.57 1.47s-.4-1.24.8-2.7c1.26-1.54 2.67-1.56 3.23-1.5v-1.63l3.05 2.72z"},{"class":"svg-cluster","d":"M28.47 41.3c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm-4 0c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2zm-3.97 0c.66 0 1.2.55 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M36.36 36.53s-.03 1.08-.6 1.37c-.54.28-1.56-.3-1.56-.3l-3.17-6.06a7.5 7.5 0 0 0 1.76-.9l3.56 5.9z"},{"class":"svg-icon12","d":"M37 18.22v9.7c0 .4-.93 1.07-1.34 1.07H34.5a7.45 7.45 0 0 0-1.54-10.5l1.37-1.5h1.33c.4 0 1.33.84 1.33 1.22zM21.65 17h-1.34L17 20.65 13.67 17h-1.34c-.4 0-1.33.84-1.33 1.22v9.7c0 .4.92 1.07 1.33 1.07h9.33c.16 0 .4-.12.65-.28a7.4 7.4 0 0 1 .7-9.28v-1.22c0-.38-.93-1.22-1.34-1.22zm-4.63-1c1.75 0 2.97-1.2 2.97-2.94S18.76 10 17 10c-1.74 0-3 1.3-3 3.04S15.3 16 17.04 16zM34 13.06A2.93 2.93 0 0 0 31 10c-1.73 0-3 1.3-3 3.04S29.3 16 31.04 16c1.75 0 2.97-1.2 2.97-2.94z"},{"class":"svg-icon12","d":"M28.25 18.73c-3.2 0-5.77 2.6-5.77 5.8a5.77 5.77 0 1 0 11.54 0c0-3.2-2.58-5.8-5.77-5.8zm0 9.65a3.86 3.86 0 0 1 0-7.72 3.86 3.86 0 0 1 0 7.72z"}]
	};

/***/ },
/* 168 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd12',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M22.2 21h-2c-.5 0-.7.4-.7.4l-2.8 4.2-3.2-4.2s-.2-.4-.7-.4h-2c-.4 0-.8.4-.8.8v12.4c0 .5.4.8.8.8h11.4c.4 0 .8-.3.8-.8V21.8c0-.4-.4-.8-.8-.8zm-7 14l-5-5 3-3.2 2 2 3.5-4 3.5 3-7 7zm1.3-22c2 0 3.5 1.6 3.5 3.5 0 2-1.6 3.5-3.5 3.5S13 18.4 13 16.5c0-2 1.6-3.5 3.5-3.5zm15 0c2 0 3.5 1.6 3.5 3.5 0 2-1.6 3.5-3.5 3.5S28 18.4 28 16.5c0-2 1.6-3.5 3.5-3.5zm5.7 22H25.8c-.4 0-.8-.3-.8-.8V21.8c0-.4.4-.8.8-.8h2c.5 0 .7.4.7.4l3.2 4.2 2.8-4.2s.2-.4.7-.4h2c.4 0 .8.4.8.8v12.4c0 .4-.4.8-.8.8z"},{"class":"svg-icon03","d":"M20.2 28.2l-5 5-3.4-3.2 1.4-1.4 1.8 2 3.6-4 1.6 1.6z"}]
	};

/***/ },
/* 169 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon10","d":"M26 10h11l-5.5 8-5.5-8z"},{"class":"svg-icon12","d":"M36.7 38H26.3c-.4 0-1.3-1-1.3-1.3v-6.4c0-.5 1-1.3 1.3-1.3h2c.3 0 .6.6.6.6l2.5 4 2.6-4 .7-.6h2c.4 0 1.3.8 1.3 1.3v6.4c0 .4-1 1.3-1.3 1.3zm-5.2-10.3c-2 0-4-2-4-3.8 0-2 2-4 4-4s4 2 4 4c0 1.8-2 3.7-4 3.7zM21.7 38H11.3c-.4 0-1.3-1-1.3-1.3v-6.4c0-.5 1-1.3 1.3-1.3h2c.3 0 .6.6.6.6l2.5 4 2.6-4s.6-.6.8-.6h2c.3 0 1.2.8 1.2 1.3v6.4c0 .4-1 1.3-1.3 1.3zm-5.2-10.3c-2 0-4-2-4-3.8 0-2 2-4 4-4s4 2 4 4c0 1.8-2 3.7-4 3.7z"}]
	};

/***/ },
/* 170 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M29 15.8c0 2.7-2.2 5.2-5 5.2s-5-2.5-5-5 2.3-5 5-5 5 2 5 4.8zm3 20c0 .6-.7 1.2-1.3 1.2H17c-.4 0-1-.6-1-1V24.2c0-.6 0-2.3 1-2.3h2.4l4.6 5.4 4.6-5.4H31c1 0 1 1.4 1 2v12zm-14-4.7l4.3 5 7.7-8-2-2-5.7 5.7-2.2-2.5-2 2z"}]
	};

/***/ },
/* 171 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd08',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M29 15.8c0 2.7-2.2 5.2-5 5.2s-5-2.5-5-5 2.3-5 5-5 5 2 5 4.8zm3 20c0 .6-.7 1.2-1.3 1.2H17c-.4 0-1-.6-1-1V24.2c0-.6 0-2.3 1-2.3h2.4l4.6 5.4 4.6-5.4H31c1 0 1 1.4 1 2v12zm-14-4.7l4.3 5 7.7-8-2-2-5.7 5.7-2.2-2.5-2 2z"}]
	};

/***/ },
/* 172 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M25 38h-9c-2.4 0-4-1.2-4-2 0-2 3.3-2.4 5-2.4 2 0 5 2.4 7 2.4s5 .2 5 1c0 .7-1.6 1-4 1z"},{"class":"svg-icon02","d":"M35.7 26.5a1 1 0 0 1-1.8 0S32 24 31 24a13 13 0 0 0-3.4 1.4l2.2 3.5a1.6 1.6 0 0 1 0 1.3L28.5 34a1.2 1.2 0 0 1-1.5 1 1 1 0 0 1-1-1.4l1.2-3.4-2.8-3.7L20 21c-.2 0-4 .3-4.5-.7l-2.2-2.8a1 1 0 0 1-.2-1.3 1 1 0 0 1 1.4 0l2.2 2.7a20 20 0 0 0 2.4 0c1.2 0 3-1 3.3-2l-.3-2-1-4a.8.8 0 0 1 .5-1 1 1 0 0 1 1.2.7L24 15l.6 2.4L28 22s3-1.7 4-.6l3.6 3.3a1.3 1.3 0 0 1 0 1.8zM19 14a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"}]
	};

/***/ },
/* 173 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd12',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon15","d":"M23 38h9c2.4 0 4-1.2 4-2 0-2.4-2.6-2-7-2 1 0-2.5.6-4 2-3 0-6 .3-6 1 0 .8 1.6 1 4 1z"},{"class":"svg-icon06","d":"M12.3 26.5c.5.6 1.2.7 1.8 0l3.2-2.8 1.8.3 1.4 1.4-2.2 3.5c-.2.3-.2 1 0 1.3l1.3 3.8c.2.8.8 1 1.6 1 .8-.2 1.2-.7 1-1.4L21 30.2l2.8-3.7L28 21c.2 0 4 .3 4.5-.7l2.2-2.8c.4-.4.5-1 .2-1.3-.3-.3-1-.4-1.4 0L31.4 19H29c-1.2 0-2.6-1-3-2v-2l1-4c0-.5 0-1-.5-1-.4 0-1 .2-1.2.7L24 15l-.3 1.6L20 22s-3-1.7-4-.6l-3.6 3.3c-.5.5-.5 1.3 0 1.8zM31 16c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z"}]
	};

/***/ },
/* 174 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M33.2 37H15.8a2.7 2.7 0 0 1-1.8-2V14a2.8 2.8 0 0 1 2-2h17a3 3 0 0 1 2 2v21a2.7 2.7 0 0 1-1.8 2zM17 34h3a1 1 0 0 0 0-2h-3a1 1 0 0 0 0 2zm-1-5c0 .4 1 1 2.3 1h6.3c1.4 0 2.4 0 2.4-.5 0-.4-1.8-.5-2.6-.5S22 28 21 27.7s-5 0-5 1.3zm8-13a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm8 7l-2-2h-2l-1-2a3.6 3.6 0 0 0 0-.8v-2.8c0-.5-1-.6-1 0v2.5c-.7 1.2-3 1-3 1l-1.2-1c-.4-.4-1.2.4-.7 1l1.5 1a5 5 0 0 0 1.5 0l3 4.8a4.8 4.8 0 0 1-1 2.2.6.6 0 1 0 1 .5l1-1.7a2.4 2.4 0 0 0 0-1.5l-.5-2h1.8l1.7 1.5c.6.6 1.5-.2 1-.7zm0 9h-8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"},{"class":"svg-icon12","d":"M14.3 11a1.3 1.3 0 0 0-1.3 1.3v23.3a2.4 2.4 0 0 1-1-1.5V12a2.6 2.6 0 0 1 1.8-2h17.4a2.4 2.4 0 0 1 1.4 1H14.3z"}]
	};

/***/ },
/* 175 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon06","d":"M14.8 37h17.4a2.7 2.7 0 0 0 1.8-2V14a2.8 2.8 0 0 0-2-2H15a3 3 0 0 0-2 2v21a2.7 2.7 0 0 0 1.8 2zM31 34h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2zm1-5c0 .4-1 1-2.3 1h-6.3c-1.4 0-2.4 0-2.4-.5 0-.4 1.8-.5 2.6-.5s2.4-1 3.5-1.3 5 0 5 1.3zm-8-13a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm-8 7l2-2h2l1-2a3.6 3.6 0 0 1 0-.8v-2.8c0-.5 1-.6 1 0v2.5c.7 1.2 3 1 3 1l1.2-1c.4-.4 1.2.4.7 1l-1.5 1a5 5 0 0 1-1.5 0l-3 4.8a4.8 4.8 0 0 0 1 2.2.6.6 0 1 1-1 .5l-1-1.7a2.4 2.4 0 0 1 0-1.5l.5-2h-1.8L17 23.7c-.6.6-1.5-.2-1-.7zm0 9h8a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2z"},{"class":"svg-icon06","d":"M33.7 11a1.3 1.3 0 0 1 1.3 1.3v23.3a2.4 2.4 0 0 0 1-1.5V12a2.6 2.6 0 0 0-1.8-2H16.8a2.4 2.4 0 0 0-1.4 1h18.3z"}]
	};

/***/ },
/* 176 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M36.86 33H34v-2h2v-8h-2.18a12.7 12.7 0 0 1-.43-1.34 6 6 0 0 1 1.15-.67h2.3A1.5 1.5 0 0 1 38 22.31v9.33A1.5 1.5 0 0 1 36.87 33zM30.8 18.96a6.47 6.47 0 0 0 .2-1.47c0-.2-.04-.36-.06-.54a2.5 2.5 0 1 0-2.13-4.3 6.47 6.47 0 0 0-1.67-1.1 4.5 4.5 0 1 1 3.68 7.4zm.77 14h-7.42 7.42z"},{"class":"svg-icon14","d":"M30.85 36H27.9a.34.34 0 0 0 .1-.2v-1.78h2V26h-3a2.3 2.3 0 0 0-.25-.15l.64-1.18a5.97 5.97 0 0 1 1.14-.66h2.3A1.5 1.5 0 0 1 32 25.35v9.34A1.5 1.5 0 0 1 30.85 36zM24.5 22a4.46 4.46 0 0 1-.68-.08A6.52 6.52 0 0 0 24 20.5c0-.2-.05-.4-.07-.58a2.47 2.47 0 0 0 .57.07 2.5 2.5 0 1 0-2.14-3.77 6.48 6.48 0 0 0-1.55-1.3A4.5 4.5 0 1 1 24.5 22z"},{"class":"svg-icon12","d":"M17.5 16a4.5 4.5 0 1 1-4.5 4.5 4.5 4.5 0 0 1 4.5-4.5zm6.34 22h-12.7A1.5 1.5 0 0 1 10 36.67v-9.34A1.5 1.5 0 0 1 11.15 26h2.3a2.68 2.68 0 0 1 1.16.67L17.5 32l2.88-5.33a5.97 5.97 0 0 1 1.15-.67h2.3A1.5 1.5 0 0 1 25 27.33v9.33A1.5 1.5 0 0 1 23.83 38z"}]
	};

/***/ },
/* 177 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd12',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M28.8 26l-2.4-7c.6-2 1-4.7 0-5.7-1.2-1-3.2-2-3.2-2-1.7-.8-3 .2-1.7 1 .8.4 1.8 1 2.6 1.7.5.4.6 1.4.6 2.2 0 .6 0 .8-.3 1.6L21.7 20l-.7.6s-2 4-2 4.3c0 .3 0 .7.6 1l4 1.7-1 4.2-1.4 3.5c-.3.7-.3 1 .3 1.3.6.3 1.2.2 1.5-.4l1.7-4 1.6-3 .5 2.4.2 4c0 .8.5 1.2 1 1.2.8 0 1-.4 1-1v-4.4s.2-5-.2-5.7zm-7.5-1.4l.7-1.4 1 2.2-1.7-.8zM21 18c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"}]
	};

/***/ },
/* 178 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M14 15c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2zm7.4 14l-1.2 3-2.2 4.3c-.3.7-1 1-1.5.5-.6-.3-.6-.8-.3-1.5l1.8-4 .8-3.8v-.2L18 27l-4.6-2c-.5-.3-.7-.7-.6-1 0-.3 2-4.2 2-4.2.7-1 4.2-2.8 4.2-2.8h.3v-.8c0-.8 0-1.8-.4-2.3-.7-.8-1.7-1.3-2.5-1.7-1.2-.8 0-1.8 1.7-1 0 0 2 1 3 2 1 .8 1 4.2.4 5.3L24 26v2l-1.7 3c-.4-.3-1-2-1-2zm-3.6-4l-1.3-3.5-1.2 2.3 2.5 1.2z"},{"class":"svg-icon18","d":"M26.4 34.8l-.6 1-2.6 1.2-.2-2.7.5-1.2 3 1.8z"},{"class":"svg-icon09","d":"M27 33.6L24.3 32 31 20.4l3 1.7-7 11.6z"},{"class":"svg-icon07","d":"M34.6 21l-3-1.7L33 17l3 1.7-1.4 2.3z"}]
	};

/***/ },
/* 179 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon08","d":"M38 24c0 6-5 11-11 11-1.3 0-2.7-.2-4-.6V31c1 .6 2.7 1 4 1 6.6 0 8-5.7 8-8 0-4.5-3.5-8-8-8-2 0-4.4.8-6 2v-3.3l.4-.3c1.6-1 3.5-1.4 5.4-1.4 6 0 11.2 5 11.2 11zm-15 4.7V22l-1.6-.8c1.2-1.8 3.4-3.2 5.6-3.2 3.5 0 6 2.7 6 6s-2.6 6-6 6c-1.2 0-2.8-.6-4-1.3zm1-4.7c0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.6-1.3-3-3-3s-3 1.4-3 3z"},{"class":"svg-icon12","d":"M20.7 34h-9.4C10 34 10 32.7 10 32.7v-8.4c0-1.3 1.3-1.3 1.3-1.3h2.2l2.6 4.8 2.7-4.8h2s1.3 0 1.3 1.3v8.4s0 1.3-1.3 1.3zM16 22c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"}]
	};

/***/ },
/* 180 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd12',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon05","d":"M30 16c-.2 1-1.7 2.6-3 3.5v17c0 1-.3 1.3-1 1.3-1 0-1-.5-1-1.3v-4.7c-.4-.2-.7-3.7-.7-3.7h-.5s-.4 3.5-.7 3.8v4.7c0 .8-.2 1.3-1 1.3s-1-.4-1-1.2V21.3s-1 1-1 1.7v3c0 .4-.4 1-1 1-.5 0-1-.5-1-1v-4.2l2.2-3.7c.3-.4.6-.6 1-.7h.4c.7.4 1.5.7 2.4.7 1 0 1.8 0 2.6-1 1.2-.7 1.3-1.7 1.4-2v-3.6c0-.3.2-1 1-1s1 .7 1 1.5v4zm-8-2c0 1.4.7 2 2 2s2-.6 2-2-.7-2-2-2-2 .8-2 2z"}]
	};

/***/ },
/* 181 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd12',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1 .5 1 1.2s-.4 1.2-1 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1 .5 1 1.2s-.4 1.2-1 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2z"},{"class":"svg-icon05","d":"M18 14.2c0-1.2.7-2 2-2s2 .8 2 2c0 1.3-.7 2-2 2s-2-.7-2-2zm2.3 14s.3 3 .5 3.6l2.2-4v-8.2c1.3-1 3-2.4 3-3.5v-4c0-.8-.2-1.4-1-1.4s-1 .6-1 1V15c0 .4-.2 1.4-1.4 2.2-.8.8-1.7 1-2.6 1-1 0-1.7-.4-2.4-1 0 .2-.2.2-.3.2-.5.2-.8.4-1 .8L14 22v4c0 .7.5 1 1 1 .6 0 1-.4 1-1v-3c0-.5 1-1.6 1-1.6v15.3c0 .8.2 1.2 1 1.2s1.2-.5 1-1.3l.2-4.7c.2-.3.6-3.7.6-3.7h.5z"},{"class":"svg-icon17","d":"M24.7 35.8l-3.2-2-.6 1.4V38l3-1 .7-1.2z"},{"class":"svg-icon14","d":"M30.3 18.7l1.5-2.6 3.2 2-1.5 2.5-3.2-1.8z"},{"class":"svg-icon09","d":"M22.2 32.7L29.6 20l3.2 1.8-7.4 12.7-3.2-1.8z"}]
	};

/***/ },
/* 182 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon18","d":"M31.8 10H16.2c-.7 0-1.2.5-1.2 1.2v25.6c0 .7.5 1.2 1.2 1.2h15.6c.7 0 1.2-.5 1.2-1.2V11.2c0-.7-.5-1.2-1.2-1.2zm-9.3 1h3c.3 0 .5.3.5.5 0 .3-.2.5-.5.5h-3c-.3 0-.5-.2-.5-.5 0-.2.2-.5.5-.5zM24 36c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2zm7-5H17V13h14v18z"},{"class":"svg-icon18","d":"M24 33c.6 0 1 .5 1 1 0 .6-.4 1-1 1a1 1 0 0 1-1-1c0-.5.5-1 1-1z"},{"class":"svg-icon12","d":"M28.5 21h-1c0-.3-.2-.5-.4-.8l.8-.7c.3-.2.2-.6 0-.8l-.5-.4c-.2-.3-.6-.4-.8 0l-.7.6-.8-.5v-1c0-.3-.2-.5-.6-.5h-.8c-.3 0-.6.2-.6.5v1c-.3 0-.5.2-.8.4l-.7-.8c-.2-.3-.6-.2-.8 0l-.4.5c-.3.2-.4.6 0 .8l.6.7-.5.8h-1c-.3 0-.5.3-.5.6v.8c0 .4.2.6.6.6h1c0 .3 0 .5.3.8l-.8.7c-.2.2-.2.6 0 .8l.5.5c.2.2.6.3.8 0l.7-.7.8.5v1c0 .3.3.5.6.5h.8c.4 0 .6-.2.6-.6v-1c.3 0 .5 0 .8-.3l.7.8c.2.3.6.2.8 0l.5-.5c.2-.2.3-.5 0-.8l-.7-.7.5-.8h1c.3 0 .5-.2.5-.6v-.8c0-.3-.2-.6-.5-.6zM24 24c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"}]
	};

/***/ },
/* 183 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon18","d":"M32.8 38H16.2a1.2 1.2 0 0 1-1.2-1.2V11.2a1.2 1.2 0 0 1 1.2-1.2h16.6a1.2 1.2 0 0 1 1.2 1.2v25.6a1.2 1.2 0 0 1-1.2 1.2zM25 36a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm1.5-25h-4a.5.5 0 0 0-.5.5.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5zm5.5 2H17v18h15V13z"},{"class":"svg-icon05","d":"M30 29v1H19v-1h11z"},{"class":"svg-icon03","d":"M28 24h2v4h-2v-4z"},{"class":"svg-icon07","d":"M25 16h2v12h-2V16z"},{"class":"svg-icon09","d":"M22 22h2v6h-2v-6z"},{"class":"svg-icon06","d":"M19 18h2v10h-2V18z"}]
	};

/***/ },
/* 184 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon15","d":"M24 23.2v-12c2.7 0 6.3 1 9 4.5l-9 7.5z"},{"class":"svg-icon04","d":"M22 23.2l-9 9c-1.6-2.3-3-5.4-3-8 0-6.8 5.4-12.6 12-13v12z"},{"class":"svg-icon10","d":"M23.5 24.4l8.8 8.3c-2.3 2.8-4.8 4.3-9 4.3-3.4 0-6.6-1.5-9-3.5l9.2-9z"},{"class":"svg-icon01","d":"M36 17c2.2 2.3 2 4 2 7.5 0 2.3-1.8 4.6-3 6.5l-8-7 9-7z"}]
	};

/***/ },
/* 185 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd11',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon01","d":"M36 13H13c-.7 0-2 1.3-2 2v18c0 .7 1.3 2 2 2h23c.7 0 2-1.3 2-2V15c0-.7-1.3-2-2-2zm0 20H13V15h23v18z"},{"class":"svg-icon03","d":"M26 28.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zm4.5-1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm-12 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zM35 16v16H14V16h21zM21 28.5c0-1.4-1-2.5-2.5-2.5S16 27 16 28.5s1 2.5 2.5 2.5 2.5-1 2.5-2.5zm1.4-8.4l-1.2 1.5 1 1 1.8-2 1-1-1-1-2-2-.8 1 1.2 1.3c-3 0-5.6 2.5-5.6 5.6v.3h1.4v-.3C18 22 20 20 22.3 20zm4.6 8.5c0-1.4-1-2.5-2.5-2.5S22 27 22 28.5s1 2.5 2.5 2.5 2.5-1 2.5-2.5zm.5-5.5l2-2 2 2 .8-1-2-2 2-2-.8-.8-2 2-2-2-.8.8 2 2-2 2.2.8.8zm5.5 5.5c0-1.4-1-2.5-2.5-2.5S28 27 28 28.5s1 2.5 2.5 2.5 2.5-1 2.5-2.5z"}]
	};

/***/ },
/* 186 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon08","d":"M37.4 16.4l-6.5-6c-.4 0-.8-.4-1-.4h-3.7c-.4 0-1 .6-1.4 1L10.3 26c-.5.6-.5 1.4 0 2L21 37.6c.5.4 1.4.4 2 0l14.5-15.4c.3-.3.5-.8.5-1v-3.6c0-.4-.3-1-.6-1.3zM30 26.7L23 34c-.8 1-1.6 1-2.3.2L14 28c-.7-.6-.7-1.6 0-2.2l6.8-7.2c.6-.6 2-.5 2.6.2l6.5 6c.6.6.4 1.5 0 2zm2.3-7.4c-1 1-2.6 1-3.6 0s-1-2.6 0-3.6 2.6-1 3.6 0 1 2.6 0 3.6z"},{"class":"svg-icon01","d":"M22.5 20.2l6 5c.6.5.6.7.2 1.2l-6.2 6.3c-.4.4-.7.4-1 0l-6-5.2c-.6-.4-.6-1-.2-1.3l5.7-5.6c.5-.5 1-.8 1.5-.4z"}]
	};

/***/ },
/* 187 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon11","d":"M14 35.6c-.5-.4-1-1-1-1.5V12c0-.8 1.2-2 1.8-2h17.4c.4 0 1 .5 1.4 1H15.3c-.7 0-1.3.6-1.3 1.3v23.3z"},{"class":"svg-icon11","d":"M33.2 12H16.8c-.6 0-1.8 1.2-1.8 2v21.5c0 .7 1.2 2.5 1.8 2.5h16.4c.6 0 1.8-1.8 1.8-2.5V14c0-.8-1.2-2-1.8-2zM20 16h10v9H20v-9zm1 18h-2s-1-.5-1-1 1-1 1-1h2s1 .5 1 1-1 1-1 1zm0-4h-2s-1-.5-1-1 1-1 1-1h2s1 .5 1 1-1 1-1 1zm10 4h-6s-1-.5-1-1 1-1 1-1h6s1 .5 1 1-1 1-1 1zm0-4h-6s-1-.5-1-1 1-1 1-1h6s1 .5 1 1-1 1-1 1z"}]
	};

/***/ },
/* 188 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon11","d":"M35 12v22c0 .6-.5 1.2-1 1.6V12.3c0-.7-.6-1.3-1.3-1.3H14.4c.4-.5 1-1 1.4-1h17.4c.6 0 1.8 1.2 1.8 2z"},{"class":"svg-icon11","d":"M31.2 12H14.8c-.6 0-1.8 1.2-1.8 2v21.5c0 .7 1.2 2.5 1.8 2.5h16.4c.6 0 1.8-1.8 1.8-2.5V14c0-.8-1.2-2-1.8-2zM18 16h10v9H18v-9zm5 18h-6s-1-.5-1-1 1-1 1-1h6s1 .5 1 1-1 1-1 1zm0-4h-6s-1-.5-1-1 1-1 1-1h6s1 .5 1 1-1 1-1 1zm6 4h-2s-1-.5-1-1 1-1 1-1h2s1 .5 1 1-1 1-1 1zm0-4h-2s-1-.5-1-1 1-1 1-1h2s1 .5 1 1-1 1-1 1z"}]
	};

/***/ },
/* 189 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon17","d":"M10 38l8.2-10 1 .8.8 1L10 38z"},{"class":"svg-icon02","d":"M35 20.2L28 28v6L14 20h7l6-7 8 7.2zM27 10l11 10h-3.7L27 13.5V10z"}]
	};

/***/ },
/* 190 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M31 22v-2c0-1-1-2-2-2s-2 1-2 2v2h-3v-4h-1c-.8 0-2-1-2-2 0-1.2 1-2 2-2h1v-4h9c1 0 2 1 2 2v10h-4z"},{"class":"svg-icon03","d":"M22 19v3h-3c0-2-1.7-3-3-3-1.7 0-3 1-3 3h-3V12c0-1 1-2 2-2h10v3c-2 0-3 1-3 3s1 3 3 3z"},{"class":"svg-icon03","d":"M12 35c-1 0-2-1-2-2v-9h4v-1c0-1 1-2 2-2s2 1 2 2v1h4v3h-2a2 2 0 0 0 0 4h2v4H12z"},{"class":"svg-icon10","d":"M36 38h-9v-4h-1c-1 0-2-1-2-2s1-2 2-2h1v-3h3v-1c0-.8.8-2 2-2s2 1 2 2v1h4v9c0 .8-1 2-2 2z"}]
	};

/***/ },
/* 191 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon06","d":"M12.6 29h22.8l2.2 2.3c.5.5.5 1.2 0 1.7H10.4c-.5-.5-.5-1.2 0-1.7l2.2-2.3z"},{"class":"svg-icon05","d":"M14 27l4.2-5h11.6l4.2 5H14z"},{"class":"svg-icon03","d":"M19 20l4-4.6c.5-.5 1.4-.5 2 0l4 4.6H19z"}]
	};

/***/ },
/* 192 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M19 14v24h13V14H19zm10 19h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4h-7v-2h7v2z"},{"class":"svg-icon06","d":"M17 12v22h-2V10h14v2H17z"}]
	};

/***/ },
/* 193 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M19.2 28.4l-1.7-7.2-7 2 2 1.5-2.4 4.2s-.4.7-.4 1.3c0 .7 2.8 4.4 2.8 4.4l4.8-7.8 2 1.4zM22 31v5h-9l3-5h6zm4.4-11.6L22 11.2s4.8-.2 5.3 0c.6.3 1.2 1 1.2 1l2.4 4.3 2-1.2-1.7 7-7.2-2 2.4-1zM21 21l-4.2-2.2 4-7 2.6 4.7L21 21zm8 10h9s-1.6 4.4-2 4.8c-.6.3-1 .2-1 .2h-6v2l-5-4.4 5-4.6v2zm1.5-6l4-2.2L38 30h-5l-2.5-5z"}]
	};

/***/ },
/* 194 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd12',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M26 15.3c4-2 9-3.3 9-3.3s-1.6.6-6 5.5l-3-.4v-1.7zm4.3 2.4c0 .2 3 .4 5.7 1.7V12c-1 .7-2.8 2.2-5.7 5.7zM32 22h4v-1.6s-4.2-1.5-6.3-1.8c-1.3 1.8-2.7 4-3.7 6.8.3.2 2.3.7 5 1.5v-3h1v-2zm0 11v-3h-1v-1.4l-5.3-2C25 29 24.3 33.2 24 36h12v-3h-4zm4-3zM26 18v2h-1v3h-4v-3h-1.2L18 22v1.8c2.3.2 4.4.4 6.8 1.2l-.5 1-5.3-1v5h-1v3h-4v-3c-.7 2-1 4.2-1 6h9c.7-7.2 3.7-13.8 6.5-17.7-.7 0-1.6-.3-2.5-.4z"},{"class":"svg-icon09","d":"M36 27v2h-1v3h-2v-3h-1v-2c0-1-.3-2 1-2h2c1 0 1 .6 1 2zm-2-4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"},{"class":"svg-icon05","d":"M18 27v2h-1v3h-2v-3h-1v-2c0-1-.3-2 1-2h2c1 0 1 .6 1 2zm-2-4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"},{"class":"svg-icon08","d":"M25 17v2h-1v3h-2v-3h-1v-2c0-1-.3-2 1-2h2c1 0 1 .6 1 2zm-2-4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"}]
	};

/***/ },
/* 195 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd12',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M35 12H13c-2 0-3 1.2-3 3v18c0 2 1 3 3 3h22c2 0 3-1 3-3V15c0-2-1.2-3-3-3zM19 27h-6c-.4 0-1-.6-1-1s.6-1 1-1h6c.4 0 1 .6 1 1s-.6 1-1 1zm0-3h-6c-.2 0-1-.6-1-1s.6-1 1-1h6c.4 0 1 .6 1 1s-.6 1-1 1zm0-3h-6c-.4 0-1-.6-1-1s.6-1 1-1h6c.4 0 1 .6 1 1s-.6 1-1 1zm16 12H22V20c0-1 1-1 1 0v12h12c1 0 .8 1 0 1zm-11-2v-5h5v5h-5zm11 0h-5V21h5v10zm1-14H12v-2h24v2z"}]
	};

/***/ },
/* 196 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd12',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M35 12H13c-1.8 0-3 1-3 3v18c0 2 1 3 3 3h22c2 0 3-1 3-3V15c0-1.8-1-3-3-3zm-9 21H13c-.8 0-1-1 0-1h12V20c0-1 1-1 1 0v13zm-13-2V21h5v10h-5zm6 0v-5h5v5h-5zm16-4h-6c-.4 0-1-.6-1-1s.6-1 1-1h6c.4 0 1 .6 1 1s-.6 1-1 1zm0-3h-6c-.4 0-1-.6-1-1s.6-1 1-1h6c.4 0 1 .6 1 1s-.8 1-1 1zm0-3h-6c-.4 0-1-.6-1-1s.6-1 1-1h6c.4 0 1 .6 1 1s-.6 1-1 1zm1-4H12v-2h24v2z"}]
	};

/***/ },
/* 197 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon15","d":"M16 31l-1.6-1-3.4 6.5s0 1 .5 1.4c.5.2 1.4-.4 1.4-.4l3-6.7z"},{"class":"svg-icon03","d":"M36 10H12c-.8 0-2 1.2-2 2v20c0 .4.2.8.5 1l2-3.6c-1-1.4-1.6-3-1.6-5 0-4.2 3.3-7.6 7.4-7.6H20V16h2v1.7c.7.4 1.3 1 1.8 1.5.6.5 1 1 1.3 1.8h4v7h-4c-.3.7-.8 1.4-1.4 2H35v2H20.3l-2 .2H18L17 34h19c.8 0 2-1.2 2-2V12c0-.8-1.2-2-2-2zm-23 4v-2h22v2H13zm22 14h-5V17h5v11z"},{"class":"svg-icon12","d":"M18.5 19c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5zm0 9c-2 0-3.5-1.6-3.5-3.5 0-2 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5c0 2-1.6 3.5-3.5 3.5z"}]
	};

/***/ },
/* 198 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon15","d":"M32 31l1.6-1 3.4 6.5s0 1-.5 1.4c-.5.2-1.4-.4-1.4-.4L32 31z"},{"class":"svg-icon03","d":"M30 32c0 .2-.2.2-.4.2-.7 0-1.3 0-2-.3H13v-2h11.4c-.6-.6-1-1.3-1.5-2h-4v-7h3.8c.4-.7.8-1.3 1.4-1.8.5-.6 1-1 1.8-1.5V16h2v1c.5-.2 1-.2 1.6-.2 4 0 7.5 3.4 7.5 7.7a9 9 0 0 1-1.6 5l2 3.6c.4-.2.6-.6.6-1V12c0-.8-1.2-2-2-2H12c-.8 0-2 1.2-2 2v20c0 .8 1.2 2 2 2h19l-1-2zM13 12h22v2H13v-2zm0 5h5v11h-5V17z"},{"class":"svg-icon12","d":"M29.5 19c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5zm0 9c-2 0-3.5-1.6-3.5-3.5 0-2 1.6-3.5 3.5-3.5 2 0 3.5 1.6 3.5 3.5 0 2-1.6 3.5-3.5 3.5z"}]
	};

/***/ },
/* 199 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon10","d":"M10 22h20.6v4H10v-4zm28 2l-8 6V18l8 6zm-17-9c.8 4 5.2 7 9.6 7h2c-1.5 1-4.2 1.3-6 1.3-5 0-9.4-3.6-9.6-8.3h4zm-9 18a8.5 8.5 0 0 1 8.7-8.3c2 0 4.5.3 6 1.3h-1.4c-4.4 0-8.5 3-9.3 7h-4z"}]
	};

/***/ },
/* 200 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon10","d":"M38 22H26.4c2.6-1.4 4.5-4 4.6-7h-4c-.8 4-4.8 6.7-9 7v-4l-8 6 8 6v-4h4.8c4.3 0 8.4 3 9.2 7h4c0-3-1.7-5.6-4-7h6v-4z"}]
	};

/***/ },
/* 201 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon01","d":"M24 28c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7z"},{"class":"svg-icon01","d":"M24 24c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm2.2-7.2L23 20l-1.3-1.3-1 1 2 2 .3.4 4.2-4-1-1.2z"},{"class":"svg-icon05","d":"M23.2 30L21 38l-1.5-3.7-2.8 2.6 2.2-8.3c1.2.7 2.6 1 4.2 1.3zm6-1.3l2.2 8.2-2.8-2.7-1.4 3.7-2.2-8c1.5-.2 3-.6 4.2-1.3z"}]
	};

/***/ },
/* 202 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon09","d":"M12 33c-1.2-1-2-2.3-2-4h12c0 1.7-.8 3-2 4h-8zm16 0c-1.2-1-2-2.3-2-4h12c0 1.7-.8 3-2 4h-8z"},{"class":"svg-icon01","d":"M35.7 28H37l-3.2-8h.3c.6 0 1-.5 1-1 0-.6-.4-1-1-1H27c-.4-1.2-1.5-2-2.8-2s-2.4.8-2.8 2H14c-.6 0-1 .4-1 1 0 .5.4 1 1 1h.3L11 28h1.3l3.3-8h.8l3.3 8H21l-3.2-8h3.4c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2h3.5L27 28h1.3l3.3-8h.8l3.3 8z"}]
	};

/***/ },
/* 203 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd11',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon01","d":"M32 11H13c1.3 0 3 1.7 3 3v19c0 1 1 3 3 3s3-1 3-3h13V13c0-.7-1.6-2-3-2zm-3 16h-9v-2h9v2zm2-4H20v-2h11v2zm0-4H20v-2h11v2z"},{"class":"svg-icon09","d":"M20 38h14.4c1.5 0 3.6-1 3.6-3v-1H24s-1 3.4-4 4zm-6-23v2h-3c-1.5 0-1-2-1-2s.7-2 2-2 2 .8 2 2z"}]
	};

/***/ },
/* 204 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd11',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon01","d":"M16 11c-1.4 0-3 1.3-3 2v20h13c0 2 1 3 3 3s3-2 3-3V14c0-1.3 1.7-3 3-3H16zm12 16h-9v-2h9v2zm0-4H17v-2h11v2zm0-4H17v-2h11v2z"},{"class":"svg-icon09","d":"M28 38H13.6C12 38 10 37 10 35v-1h14s1 3.4 4 4zm8-25c1.3 0 2 2 2 2s.5 2-1 2h-3v-2c0-1.2.7-2 2-2z"}]
	};

/***/ },
/* 205 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M22.5 10c-4.8 0-8.5 4-8.5 8.6s3.7 8.4 8.5 8.4 8.5-3.7 8.5-8.4-3.8-8.6-8.5-8.6zm0 14c-3 0-5.5-2.4-5.5-5.4s2.5-5.6 5.4-5.6c3 0 5.6 2.6 5.6 5.6S25.4 24 22.4 24z"},{"class":"svg-icon02","d":"M27 28.4l2.6-1.4 5.4 8.8s0 1.6-1 2c-.7.5-2.2-.2-2.2-.2L27 28.4z"}]
	};

/***/ },
/* 206 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon12","d":"M16 25v13h14V25H16zm12 11H18v-9h10v9zm2-18.5V24H16V11h12l-2.2 2H18v9h10v-2.7l2-1.8z"},{"class":"svg-icon10","d":"M32.5 12.8l-8 8-4-4.2c-.4-.2-.5-.8-.2-1l1.3-1.5h1l2 2.2 5.6-5.7c.3-.2.6-.2 1 0l1.3 1.6c.4.4.3.6 0 .8z"}]
	};

/***/ },
/* 207 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon06","d":"M35.7 30H12.3c-.7 0-1.3.6-1.3 1.3v5.4c0 .7.6 1.3 1.3 1.3h23.4c.7 0 1.3-.6 1.3-1.3v-4.4c0-.7-.6-2.3-1.3-2.3zM24 35H13v-2h11v2zm8 1a2 2 0 0 1 0-4c1.2 0 2 .8 2 2s-1 2-2 2z"},{"class":"svg-icon13","d":"M35.7 20H12.3c-.7 0-1.3.6-1.3 1.3v5.4c0 .7.6 1.3 1.3 1.3h23.4c.7 0 1.3-.6 1.3-1.3v-4.4c0-.7-.6-2.3-1.3-2.3zM24 25H13v-2h11v2zm8 1a2 2 0 0 1 0-4c1.2 0 2 .8 2 2s-1 2-2 2z"},{"class":"svg-icon14","d":"M35.7 10H12.3c-.7 0-1.3.6-1.3 1.3v5.4c0 .7.6 1.3 1.3 1.3h23.4c.7 0 1.3-.6 1.3-1.3v-4.4c0-.7-.6-2.3-1.3-2.3zM24 15H13v-2h11v2zm8 1c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"}]
	};

/***/ },
/* 208 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28.05 42.5L25 45.2v-1.7c-.44-.1-1.4-.15-2.45.6-1.4 1-1.57 1.47-1.57 1.47s-.4-1.24.8-2.7c1.26-1.54 2.67-1.56 3.23-1.5v-1.63l3.05 2.72z"},{"class":"svg-cluster","d":"M28.47 41.3c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm-4 0c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2zm-3.97 0c.66 0 1.2.55 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2z"},{"class":"svg-icon05","d":"M28.62 12.5C24.96 11.24 24 10.13 24 10.13s-.93 1.1-4.62 2.35c-3.2 1.08-7.92 1.6-7.92 1.6s.8 11.05 3.28 15.5c3.58 6.37 9.26 8.26 9.26 8.26s5.67-2.2 9.24-8.58c2.5-4.45 3.3-15.18 3.3-15.18s-4.68-.5-7.92-1.6zm3.3 16.12C28.94 34.16 24 35.88 24 35.88s-4.94-1.7-7.92-7.26c-2.08-3.86-2.64-13.2-2.64-13.2s3.27-.37 5.94-1.32C22.46 13 24 12.12 24 12.12s1.57.9 4.62 1.98c2.7.96 5.94 1.32 5.94 1.32s-.56 9.33-2.64 13.2z"},{"class":"svg-icon01","d":"M27.96 15.42c-2.64-.97-3.96-1.98-3.96-1.98s-1.3 1-3.96 1.98c-2.32.85-5.28 1.32-5.28 1.32s.84 7.75 2.64 11.22c2.58 5 6.6 6.6 6.6 6.6s4.02-1.6 6.6-6.6c1.8-3.48 2.64-11.22 2.64-11.22s-2.94-.46-5.28-1.32zm1.8 6.6l-6.42 5.94L18.72 24c-.23-.18.33-1.06.66-1.32l.76-.63c.27-.2.8-.2 1.1.04l1.74 1.5 4.2-3.85c.3-.24.6-.2.88 0l1.7 1.57c.34.26.25.52 0 .7z"}]
	};

/***/ },
/* 209 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd02',
	  paths: [{"class":"svg-shortcut","d":"M28.05 42.5L25 45.2v-1.7c-.44-.1-1.4-.15-2.45.6-1.4 1-1.57 1.47-1.57 1.47s-.4-1.24.8-2.7c1.26-1.54 2.67-1.56 3.23-1.5v-1.63l3.05 2.72z"},{"class":"svg-cluster","d":"M28.47 41.3c.66 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm-4 0c.66 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm-3.97 0c.66 0 1.2.55 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2z"},{"class":"svg-icon05","d":"M28.62 12.5C24.96 11.24 24 10.13 24 10.13s-.93 1.1-4.62 2.35c-3.2 1.08-7.92 1.6-7.92 1.6s.8 11.05 3.28 15.5c3.58 6.37 9.26 8.26 9.26 8.26s5.67-2.2 9.24-8.58c2.5-4.45 3.3-15.18 3.3-15.18s-4.68-.5-7.92-1.6zm3.3 16.12C28.94 34.16 24 35.88 24 35.88s-4.94-1.7-7.92-7.26c-2.08-3.86-2.64-13.2-2.64-13.2s3.27-.37 5.94-1.32C22.46 13 24 12.12 24 12.12s1.57.9 4.62 1.98c2.7.96 5.94 1.32 5.94 1.32s-.56 9.33-2.64 13.2z"},{"class":"svg-icon01","d":"M27.96 15.42c-2.64-.97-3.96-1.98-3.96-1.98s-1.3 1-3.96 1.98c-2.32.85-5.28 1.32-5.28 1.32s.84 7.75 2.64 11.22c2.58 5 6.6 6.6 6.6 6.6s4.02-1.6 6.6-6.6c1.8-3.48 2.64-11.22 2.64-11.22s-2.94-.46-5.28-1.32zM21 19s.4-.94 3-.94 3 .94 3 .94v3h-2s.28-2-1-2-1 2-1 2h-2v-3zm7 9h-8v-5h8v5z"}]
	};

/***/ },
/* 210 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 43.7c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2zm-4 0c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2zm-4 0c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2 1.2.5 1.2 1.2-.5 1.2-1.2 1.2z"},{"class":"svg-icon08","d":"M31.6 30c-.5-1.2-1.7-2-3-2-1.5 0-2.7.8-3.2 2h-5.8c-.5-1.2-1.7-2-3-2-1.5 0-2.7.8-3.2 2H10v-5l2-7h7v8h16v2h1v2h-4.4zM17 19h-4l-1 4h5v-4z"},{"class":"svg-icon12","d":"M35 21v4H20V14h15v3h-4v-2h-1l-5 3v2l5 3h1v-2h4z"},{"class":"svg-icon03","d":"M30 20h8v-2h-8v-2l-4 3 4 3v-2z"},{"class":"svg-icon17","d":"M28.5 34C27 34 26 33 26 31.5c0-1.4 1-2.5 2.5-2.5 1.4 0 2.5 1 2.5 2.5 0 1.4-1 2.5-2.5 2.5zm-12 0C15 34 14 33 14 31.5c0-1.4 1-2.5 2.5-2.5 1.4 0 2.5 1 2.5 2.5 0 1.4-1 2.5-2.5 2.5z"}]
	};

/***/ },
/* 211 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M26 18h-5v3h5v-3zm7-1h-5v-3h5v3zm-7 0h-5v-3h5v3z"},{"class":"svg-icon05","d":"M20 14s-1.5-1-3-1c-2.2 0-3 1-3 1h-2s-1 .4-1 1v5h9v-6zm-6 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.5 1-1 1zm3 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.5 1-1 1zm15.5 5c.8 0 1.6.2 2.4.5l3-5.5H27v4h-7v-1H10s0 5 4 5h13c1.2-1.8 3.2-3 5.5-3zm.5-3c.5 0 1 .4 1 1 0 .5-.5 1-1 1s-1-.4-1-1 .5-1 1-1zm-3 0c.6 0 1 .4 1 1 0 .5-.4 1-1 1s-1-.4-1-1 .4-1 1-1z"},{"class":"svg-icon09","d":"M32.5 24c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5zm3.5 8h-7v-1h1v-2h1v2h1v-2h1v2h1v-2h1v2h1v1zm-7-4l3.5-2 3.5 2h-7z"}]
	};

/***/ },
/* 212 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon11","d":"M36 31l-4.3-1.6L17.4 15 16 12l2-2 3 1.4 4-1.3 6.8 7v3L25 13l-2 .5L35.3 26l1.7 5h-1z"},{"class":"svg-icon10","d":"M13 31c1 0 2.6 0 4 1s1.2 1.2 2 1 2.2-3 6-3c5 0 5 3 5 4 0 1.5 1.4.3 2 0s1.3-1 3-1 2 1.2 2 2-1 1-2 1-4 2-6 2-2-1.8-2-3c0-1.6-.7-2-2-2s-3.2 3-6 3-2.8-2-6-2-2.2-3 0-3z"}]
	};

/***/ },
/* 213 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd05',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon08","d":"M15 22h16v5H15l-3-2.5 3-2.5z"},{"class":"svg-icon04","d":"M34 15H18v5h16l3-2.5-3-2.5z"},{"class":"svg-icon18","d":"M23 29h3v6l5 2v1H18v-1l5-2v-6zm0-19h3v3h-3v-3z"}]
	};

/***/ },
/* 214 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd10',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon11","d":"M17.5 19c-2 0-3.5 1.6-3.5 3.5 0 2 1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5c0-2-1.6-3.5-3.5-3.5zm0 5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM24 11c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"},{"class":"svg-icon12","d":"M32 28.6c0-3-2.4-5.3-5.4-5.3-2.7 0-5 2-5.2 4.8-1-.4-2-.7-3-.7-3.5 0-6.3 2.8-6.3 6.3 0 1.3 1.3 2.4 2 3.4h18c2-.4 4-2 4-4 0-2.3-2-4.2-4-4.4zm0 6.4H15c-.6-.7-1-1.5-1-2.4 0-2 2.4-3.3 4.7-3.3 2 0 3.3.6 4 1.3.3-2 .6-5.3 4-5.3 2.3 0 3.4 2.3 3.2 4.6l.6.6c1.8 0 3.3.5 3.3 2 0 1.3-.5 2-2 2.4z"}]
	};

/***/ },
/* 215 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd12',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon15","d":"M36.4 25h-11c-.2 0-.4.2-.4.6v10.8c0 .3.2.6.5.6h11c.2 0 .5-.3.5-.6V25.6c0-.4-.3-.6-.6-.6zM35 35h-8v-7.6l.7-.4h1.6l.7.5v.5h5v7z"},{"class":"svg-icon04","d":"M22.3 25H11.7c-.4 0-.7.4-.7.7v10.6c0 .4.3.7.7.7h10.6c.3 0 .7-.3.7-.6V25.7c0-.3-.4-.7-.7-.7zM21 33h-1l-2 2v-2h-5v-6h8v6z"},{"class":"svg-icon09","d":"M36.4 11H25.6c-.3 0-.6.2-.6.6v10.8c0 .3.3.6.6.6h10.8c.4 0 .6-.3.6-.6V11.6c0-.4-.2-.6-.6-.6zM30 12v1.5l5 .6v.8l-5 .7v1.3l-3-2.3 3-2.4zm2 9.7v-1.2l-5-.7v-.6l5-.7v-1.2l3 2.2-3 2.2z"},{"class":"svg-icon10","d":"M22.4 11H11.6c-.4 0-.6.2-.6.6v10.8c0 .3.2.6.6.6h10.8c.3 0 .6-.3.6-.6V11.6c0-.4-.3-.6-.6-.6zM16 21h-3v-3h3v3zm0-4h-3v-3h3v3zm4 4h-3v-3h3v3zm1-4h-4v-4h4v4z"}]
	};

/***/ },
/* 216 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28.05 42.5L25 45.2v-1.7c-.44-.1-1.4-.15-2.45.6-1.4 1-1.57 1.47-1.57 1.47s-.4-1.24.8-2.7c1.26-1.54 2.67-1.56 3.23-1.5v-1.63l3.05 2.72z"},{"class":"svg-cluster","d":"M28.47 41.3c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2zm-4 0c.65 0 1.2.55 1.2 1.2s-.55 1.2-1.2 1.2c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2zm-3.97 0c.66 0 1.2.55 1.2 1.2s-.54 1.2-1.2 1.2-1.2-.54-1.2-1.2.54-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M24 15.02c-6.1 0-11 4.9-11 11 0 6.08 4.9 10.97 11 10.97s11-4.9 11-11c0-6.07-4.9-10.98-11-10.98zm.02 19.97C19.06 35 15 30.96 15 26s4.06-9 9.02-9a9 9 0 0 1 0 18zm-1.36-24h2.66c.37 0 .67.34.67.75v1.5c0 .4-.3.75-.68.75h-2.66c-.37 0-.66-.33-.66-.74v-1.5c0-.42.3-.76.66-.76zM33 13.16l1.75 1.56c.32.28.32.83 0 1.22l-.6.7c-.33.4-.86.47-1.18.18l-1.74-1.55c-.32-.3-.32-.83 0-1.22l.6-.7c.33-.4.86-.47 1.18-.2z"},{"class":"svg-icon05","d":"M24.8 24.16L24.03 21H24l-.8 3.2a2.08 2.08 0 0 0-1.22 1.82c0 1.07.96 1.98 2.05 1.98 1.1 0 1.97-.9 1.97-1.98 0-.8-.5-1.54-1.2-1.86zM23 18h2v2h-2v-2zm-7 7h2v2h-2v-2zm7 7h2v2h-2v-2zm7-7h2v2h-2v-2zm-11.98-3.5l1.5-1.5 1.5 1.5-1.5 1.5-1.5-1.5zm9 0l1.5-1.5 1.5 1.5-1.5 1.5-1.5-1.5zm-9 9l1.5-1.5 1.5 1.5-1.5 1.5-1.5-1.5zm9 0l1.5-1.5 1.5 1.5-1.5 1.5-1.5-1.5z"}]
	};

/***/ },
/* 217 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M15 34h-4v-5h1v-7h2v7h1v5z"},{"class":"svg-icon05","d":"M10 14h6v3h-6v-3zm0 4h6v3h-6v-3z"},{"class":"svg-icon03","d":"M30 34H17v-2h1V22h12v-3h8v15h-8zm-1-9h-9v7h9v-7zm3 1v1h4v-1h-4zm4 2h-4v4h4v-4z"}]
	};

/***/ },
/* 218 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd07',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon08","d":"M24 10c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm0 24c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm0-17c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7zm0 10c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.6 0 3 1.3 3 3s-1.4 3-3 3z"}]
	};

/***/ },
/* 219 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon15","d":"M27 28l-1.6-1-4.4 7.2s0 1.3.6 1.7c.6.2 1.8-.4 1.8-.4L27 28z"},{"class":"svg-icon12","d":"M34.5 14C31 12 27 13 25 16.4c-2 3.3-.8 7.6 2.5 9.5 3.4 2 7.6.8 9.6-2.5S38 16 34.6 14zm.8 8.6c-1.3 2.3-4.4 3-6.8 1.7a5.18 5.18 0 0 1-2-6.8c1.5-2.4 4.6-3.2 7-1.8s3.2 4.5 1.8 7z"},{"class":"svg-icon05","d":"M12 22l-.5 1.8H10l2-7h2l2 7h-1.6L14 22h-2zm1.7-1.2l-.4-1.4L13 18l-.4 1.4-.4 1.4h1.5zM17 17h2c1 0 1.5 0 2 .2.5.3 1 .8 1 1.4 0 .6-.5 1.2-1.3 1.4.8.3 1.4 1 1.4 1.8 0 .6-.2 1-.6 1.4-.5.4-1.3.6-2.7.6H17V17zm1.5 2.6h.6c1 0 1.3-.3 1.3-.8s-.4-.8-1-.8h-.8v1.6zm0 3h.6c.8 0 1.5-.2 1.5-1 0-.6-.7-1-1.4-1h-.5v2zm14.7.7c-.3.2-1 .3-1.8.3-2.3 0-3.5-1.5-3.5-3.4 0-2.3 1.5-3.6 3.6-3.6.8 0 1.4 0 1.7.3l-.3 1-1.3-.2c-1.3 0-2.2.8-2.2 2.3 0 1.5.8 2.3 2.2 2.3.4 0 1 0 1.3-.2l.2 1.3z"}]
	};

/***/ },
/* 220 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd05',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon11","d":"M20.7 15.3C19.5 14 19.2 12 19.2 12c0-1-.6-1.2-1-.8-1.2.7-1.4 4.3-1.2 4.8.2.4 1.5 1.7 2 3 .3.8.2 1.6 0 2h-7c-1.8 0-2 1-2 2.2v.2c0 1 .7 2 1.8 2h.6v.5h-.6c-1 0-1.8.5-1.8 2 0 1 .6 1.5 1.8 1.5h.6v.6c-1.2 0-1.8 1-1.8 2s.7 1.7 1.8 1.7h1.3c-.6.3-1.3 1.2-1.3 2s1 1.3 2 1.3h10c2.2 0 3.6-1 3.6-2.7V22.5c0-2-6-6-7.3-7.2z"},{"class":"svg-icon03","d":"M30 22v12c0 .7 1 2 1.8 2H38V22h-8z"}]
	};

/***/ },
/* 221 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M10.42 28.1l1.73 1.72-2.16.43.42-2.16zM30.68 13l1.73 1.73.44-2.15-2.16.43zm-2.6-2.58l1.74 1.73.43-2.16-2.16.42zM12.6 32.83l2.15-.43L13 30.68l-.42 2.16zm25-12.92l.43.44L20.35 38l-.44-.42-2.15.43.43-2.15-.86-.86-2.16.42.43-2.15-.87-.87-2.58-2.58L10 27.66 27.65 10l2.16 2.15 2.6 2.58.85.87 2.15-.43-.43 2.15.85.86 2.16-.43-.42 2.16zm-7.76-2.58l-5.6 5.6a.6.6 0 0 0 0 .86.6.6 0 0 0 .86 0l5.6-5.6c.24-.24.24-.62 0-.86s-.62-.24-.86 0zm-7.76 4.3c.24.25.63.25.86 0l5.6-5.6a.6.6 0 0 0 0-.86.62.62 0 0 0-.86 0l-5.6 5.6a.62.62 0 0 0 0 .87zm-2.2 6.18c.84-.83.82-2.38 0-3.19-.8-.8-2.34-.8-3.17.02-.83.82-.8 2.37 0 3.18s2.34.83 3.17 0zm5.83 1.23l-2.83-2.82c-.18-.17-.56-.15-.7 0l-.72.7c-.06.07-.16.57-.16.57l.68 2.45-2.46-.7s-.4.04-.54.17l-.7.7c-.16.15-.14.57.03.74l2.76 2.75c.17.17.6.2.74.03l3.88-3.88c.16-.16.18-.54 0-.7zm7.14-9.55a.62.62 0 0 0-.87 0l-5.6 5.6c-.24.24-.24.62 0 .86s.62.24.86 0l5.6-5.6a.6.6 0 0 0 0-.86z"}]
	};

/***/ },
/* 222 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd03',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon02","d":"M32 26v3h-2v-3H18v3h-2v-3h-5v8c0 1.3.7 2 2 2h22c1.3 0 2-.7 2-2v-8h-5z"},{"class":"svg-icon08","d":"M36 18H12c-1.3 0-2 1.7-2 3v3h6v-3h2v3h12v-3h2v3h6v-3c0-1.3-.7-3-2-3z"},{"class":"svg-icon18","d":"M28.7 12h-9.4C18 12 16 13.7 16 15v1h2c0-1.8.7-2 2-2h8c1 0 2 .2 2 2h2v-1c0-1.3-2-3-3.3-3z"}]
	};

/***/ },
/* 223 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon09","d":"M27.4 24.8c-.6 1-1.2 1.6-2 2v2.8C26.8 30 28 31 28 32h-8c0-1 1.2-2 2.6-2.4v-2.8c-.8-.4-1.4-1-2-2-4.8 0-8.6-5-8.6-11V10h1.8v1.6c.6.6 3 .5 4 .6v-2s2.7-.2 6.2-.2 6.3.3 6.3.3v2c1-.2 3.3 0 4-.6V10H36v3.7c0 6.2-3.8 11-8.6 11zM17.6 14h-1c-1 0-1.3-.3-2.4-.6 0 5 2.2 8.2 5.7 9.6-1.4-2.5-2-5.4-2.4-9zm13.7 0h-.8c-.4 3.7-1 6.5-2.4 9 3.6-1.4 6.3-4 6.2-9.6-.6.7-1.8.6-3 .6z"},{"class":"svg-icon04","d":"M31 36v2H17v-2h2v-3h10v3h2z"}]
	};

/***/ },
/* 224 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd09',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon08","d":"M36 18h-7v7H11v3h-1v2h3.5c.7-1.2 2-2 3.5-2s2.8.8 3.4 2h8.2c.6-1.2 2-2 3.4-2 1.5 0 2.8.8 3.4 2H38v-6l-2-6zm-5 5v-4h4l1 4h-5z"},{"class":"svg-icon12","d":"M11 13h17v11H11V13z"},{"class":"svg-icon17","d":"M17 29a3 3 0 0 1 3 3c0 1.7-1.3 3-3 3a3 3 0 0 1-3-3c0-1.6 1.4-3 3-3zm15 0a3 3 0 0 1 3 3c0 1.7-1.3 3-3 3a3 3 0 0 1-3-3c0-1.6 1.4-3 3-3z"}]
	};

/***/ },
/* 225 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd06',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon15","d":"M37 36H11V12h2v22h24v2z"},{"class":"svg-icon03","d":"M34 17v16h-3V17h-3l4-5h1l4 5h-3z"},{"class":"svg-icon05","d":"M27 21v12h-3V21h-3l4-5h1l4 5h-3z"},{"class":"svg-icon09","d":"M20 26v7h-3v-7h-3l4-5h1l4 5h-3z"}]
	};

/***/ },
/* 226 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd06',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon15","d":"M11 36h26V12h-2v22H11v2z"},{"class":"svg-icon03","d":"M14 17v16h3V17h3l-4-5h-1l-4 5h3z"},{"class":"svg-icon05","d":"M21 21v12h3V21h3l-4-5h-1l-4 5h3z"},{"class":"svg-icon09","d":"M28 26v7h3v-7h3l-4-5h-1l-4 5h3z"}]
	};

/***/ },
/* 227 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd11',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M32 28h4v9H13v-9h4v5h15v-5z"},{"class":"svg-icon03","d":"M27.7 21v9.8H21v-10h-3.8l7.2-9.8 7.3 10h-4z"}]
	};

/***/ },
/* 228 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M24 10c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm0 25c-6 0-11-5-11-11s5-11 11-11 11 5 11 11-5 11-11 11zm-4-6V19l10 5-10 5z"}]
	};

/***/ },
/* 229 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd04',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon03","d":"M37 17v4h-8s-3 2-3 5.5c0 3.4 3 5.5 3 5.5h8v2.6c0 .8-.7 1.4-1.5 1.4H13c-2.4-.4-3-2.3-3-3.6V17h27zm-27-5h27v3H10v-3z"},{"class":"svg-icon12","d":"M30 23s-2 1.5-2 3.5 2 3.5 2 3.5h8v-7h-8zm1.5 5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"}]
	};

/***/ },
/* 230 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon18","d":"M11 14v16c0 1 .3 1.7 1 2l1.4-2.5c-1-1-1.4-2.5-1.4-4 0-1.8.8-3.5 2-4.7v-4c0-.6.8-.8.8-.8h2.4s.8.2.8 1v2h.5c1 0 1.7.2 2.5.5V16h14v4H22c.8.5 1.5 1.2 2 2h11v2H24.8l.2 1h10v2H24.8c-.6 3-3.2 5-6.3 5h-.2 17c1 0 1.7-.7 1.7-2V14H11z"},{"class":"svg-icon05","d":"M12.7 10h22.6c1 0 1.7 1 1.7 1v2H11v-2s1-1 1.7-1z"},{"class":"svg-icon12","d":"M18.5 20c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5zm0 9c-2 0-3.5-1.6-3.5-3.5 0-2 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5c0 2-1.6 3.5-3.5 3.5z"},{"class":"svg-icon15","d":"M16 31.8l-1.6-.8-3.4 5.7s0 1 .5 1.2c.5.2 1.4-.4 1.4-.4l3-5.8z"}]
	};

/***/ },
/* 231 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon18","d":"M29.7 32h-.2c-3 0-5.7-2-6.3-5H13v-2h10c0-.3 0-.7.2-1H13v-2h11c.5-.8 1.2-1.5 2-2H13v-4h14v3.5c.8-.3 1.6-.5 2.5-.5h.5v-2c0-.8.8-1 .8-1h2.4s.8.2.8 1v3.8c1.2 1.2 2 3 2 4.7 0 1.5-.5 3-1.4 4L36 32c.7-.3 1-1 1-2V14H11v16c0 1.3.8 2 1.8 2h17z"},{"class":"svg-icon05","d":"M35.3 10H12.7c-1 0-1.7 1-1.7 1v2h26v-2s-1-1-1.7-1z"},{"class":"svg-icon12","d":"M29.5 20c-3 0-5.5 2.5-5.5 5.5s2.4 5.5 5.5 5.5c3 0 5.5-2.5 5.5-5.5S32.5 20 29.5 20zm0 9c-2 0-3.5-1.6-3.5-3.5 0-2 1.6-3.5 3.5-3.5 2 0 3.5 1.6 3.5 3.5 0 2-1.6 3.5-3.5 3.5z"},{"class":"svg-icon15","d":"M32 31.8l1.6-.8 3.4 5.7s0 1-.5 1.2c-.5.2-1.4-.4-1.4-.4l-3-5.8z"}]
	};

/***/ },
/* 232 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd11',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon18","d":"M36 35H12c-1 0-2-.8-2-2V16h28v17c0 1.4-.7 2-2 2zm-14.5-3c2.5 0 4.5-2 4.5-4.5S24 23 21.5 23 17 25 17 27.5s2 4.5 4.5 4.5zM15 32V19c0-.8-1-1-1-1h-1s-1 .2-1 1v13c0 .8 1 1 1 1h2v-1zm21-14H17v3h19v-3zm0 13l-3.6-7.3c-.2-.4-.5-.7-1-.7-.3 0-.5.3-.8.7L27 31v.3c0 .4.3.7.8.7h7.5c.4 0 .7-.3.7-.7V31z"},{"class":"svg-icon08","d":"M23.8 25.8c.2-.2.4-.5.2-.7a.9.9 0 0 0-1 0l-1.5 1.6L20 25a.9.9 0 0 0-1 0c-.2.3-.2.6 0 1l1.7 1.5L19 29c-.2.3-.2.7 0 1 .3.2.7.2 1 0l1.5-1.7L23 30h1c.2-.3.2-.7 0-1l-1.8-1.6 1.6-1.6z"},{"class":"svg-icon09","d":"M32 25v4h-1v-4h1zm-1 5h1v1h-1v-1z"},{"class":"svg-icon05","d":"M12 12h24c1.3 0 2 1 2 1v2H10v-2s1-1 2-1z"}]
	};

/***/ },
/* 233 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd11',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon18","d":"M38 33c0 1.2-1 2-2 2H12c-1.3 0-2-.6-2-2V16h28v17zm-11.5-1c2.5 0 4.5-2 4.5-4.5S29 23 26.5 23 22 25 22 27.5s2 4.5 4.5 4.5zM12 31.3c0 .4.3.7.7.7h7.6c.4 0 .7-.3.7-.7V31l-3.6-7.3c-.3-.4-.5-.7-1-.7-.3 0-.6.3-.8.7L12 31v.3zM31 18H12v3h19v-3zm4 0h-1s-1 .2-1 1v14h2s1-.2 1-1V19c0-.8-1-1-1-1z"},{"class":"svg-icon08","d":"M24.2 25.8c-.2-.2-.4-.5-.2-.7.3-.2.7-.2 1 0l1.5 1.6L28 25c.3-.2.7-.2 1 0 .2.3.2.6 0 1l-1.7 1.5L29 29c.2.3.2.7 0 1-.3.2-.7.2-1 0l-1.5-1.7L25 30h-1a.9.9 0 0 1 0-1l1.8-1.6-1.6-1.6z"},{"class":"svg-icon09","d":"M16 25v4h1v-4h-1zm1 5h-1v1h1v-1z"},{"class":"svg-icon05","d":"M36 12H12c-1.3 0-2 1-2 1v2h28v-2s-1-1-2-1z"}]
	};

/***/ },
/* 234 */
/***/ function(module, exports) {

	/* Generated using generateIcons.js, do not change manually. */
	module.exports = {
	  viewBox: '0 0 48 48',
	  backgroundClass: 'svg-bkgd01',
	  paths: [{"class":"svg-shortcut","d":"M28 42.5l-3 2.7v-1.7c-.4 0-1.4 0-2.5.6-1.3 1-1.5 1.6-1.5 1.6s-.4-1.2.8-2.7c1.2-1.6 2.6-1.7 3.2-1.6v-1.6l3 2.7z"},{"class":"svg-cluster","d":"M28.5 41.3c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm-4 0c.6 0 1.2.5 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2s.5-1.2 1.2-1.2zm-4 0c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"},{"class":"svg-icon04","d":"M10 25h2v2h-2v-2zm0-4h2v2h-2v-2zm0 15v-2h3v2h-3zm0-7h2v2h-2v-2zm5 7v-2h2v2h-2zm4 0v-2h2v2h-2zm4 0v-2h2v2h-2zm4 0v-2h2v2h-2zm4 0v-2h2v2h-2zM10 17h2v2h-2v-2zm3-5v2h-3v-2h3zm22 24v-2h3v2h-3zM15 14v-2h2v2h-2zm4 0v-2h2v2h-2zm4 0v-2h2v2h-2zm4 0v-2h2v2h-2zm4 0v-2h2v2h-2zM10 33h2v3h-2v-3zm0-21h2v3h-2v-3zm25 2v-2h3v2h-3zm1 19h2v3h-2v-3zm0-21h2v3h-2v-3zm0 13h2v2h-2v-2zm0-4h2v2h-2v-2zm0 8h2v2h-2v-2zm0-12h2v2h-2v-2z"},{"class":"svg-icon18","d":"M31 22.3c-1 .8-2 1-3 .6l-2.7 2.5-3 3.2c.3 1.2.2 2.6-.7 3.4-1 1-2.4 1.2-4 .6l1.8-1.6c.4-.3.4-.8 0-1l-1-1.2c-.4-.4-1-.3-1.3 0l-1.6 1.5c-.7-1.4-.5-2.7.7-3.7 1-.8 2.2-.8 3.5-.5l1.5-1.4 3.7-4c-.3-1.2-.3-2.8.7-3.7 1-1 2.3-1.2 3.8-.6L27.6 18c-.4.3-.4.8 0 1l1 1.2c.5.3 1 .3 1.4 0l1.6-1.6c.7 1.3.5 2.7-.6 3.7z"}]
	};

/***/ },
/* 235 */
/***/ function(module, exports) {

	module.exports = 'M16 30 C20 30 20 26 16 26 C12 26 12 30 16 30 M14 24 L18 24 C18 18 24 18 24 12 S20 4 16 4 S8 6 8 12 L12 12 Q12 8 16 8 T20 12 C20 16 14 17 14 24 Z';



/***/ },
/* 236 */
/***/ function(module, exports) {

	module.exports = {
	  viewBox: '0 0 48 48',
	  paths: [
	    {
	      d: 'M28 42.5L25 45.2 25 43.5C24.6 43.4 23.6 43.4 22.5 44.1 21.2 45.1 21 45.6 21 45.6 21 45.6 20.6 44.4 21.8 42.9 23 41.4 24.4 41.3 25 41.4L25 39.8 28 42.5Z'
	    }
	  ]
	};


/***/ },
/* 237 */
/***/ function(module, exports) {

	module.exports = 'M16 0 L21 11 L32 12 L23 19 L26 31 L16 25 L6 31 L9 19 L0 12 L11 11';


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	var paths = __webpack_require__(1)

	function inject (el, key) {
	  var pathdata = paths[key]

	  var svg
	  var path
	  var svgNS = 'http://www.w3.org/2000/svg'
	  var title = document.createElementNS(svgNS, 'title')
	  var desc = document.createElementNS(svgNS, 'desc')
	  var viewBox = pathdata.viewBox || '0 0 32 32'

	  if (!pathdata.paths) pathdata = {paths: [{d: pathdata }]}

	  if (el.tagName === 'svg') {
	    svg = el.cloneNode(true)
	  } else {
	    svg = document.createElementNS(svgNS, 'svg')
	    for (var i = 0; i < el.attributes.length; i++) {
	      svg.setAttribute(el.attributes[i].name, el.attributes[i].value)
	    }
	  }

	  // if (pathdata.backgroundClass) svg.classList.add(pathdata.backgroundClass) //classList not supported in IE on SVG
	  if (pathdata.backgroundClass) svg.setAttribute('class', (svg.getAttribute('class') || '') + ' ' + pathdata.backgroundClass)

	  if (pathdata.desc) {
	    desc.innerHTML = pathdata.desc
	    svg.appendChild(desc)
	  }

	  svg.setAttribute('viewBox', viewBox)
	  svg.setAttribute('style', 'fill:currentColor')
	  if (pathdata.title) {
	    title.innerHTML = pathdata.title
	    svg.appendChild(title)
	  }

	  pathdata.paths.forEach(function (p) {
	    path = document.createElementNS(svgNS, 'path')
	    Object.keys(p).forEach(function (key, index) {
	      path.setAttribute(key, p[key])
	    })
	    svg.appendChild(path)
	  })

	  el.parentNode.replaceChild(svg, el)
	}

	module.exports = function (elements, iconKeyFn, dir_rtl) {
	  var defaultIconKey = function defaultIconKey (element) {
		  var icon = element.getAttribute('data-icon');
		  if(dir_rtl !== false && paths[icon + "_rtl"]){
			  icon = icon + "_rtl" ;			  
		  }		  
		  return icon;	    
	  }

	  var iconKey = iconKeyFn || defaultIconKey

	  if (!elements.length) elements = [elements]

	  if (typeof document !== 'undefined') {
	    for (var i = 0; i < elements.length; i++) {
	      var key = iconKey(elements[i])
	      // var key = elements[i].getAttribute('data-icon')
	      if (!paths[key]) {
	        console.log(key + ' does not exist in library.')
	      // return false
	      } else {
	        inject(elements[i], key)
	      }
	    }
	  } else {
	    console.log('svgicons.inject() only works in a browser context')
	    return false
	  }
	}


/***/ }
/******/ ]);