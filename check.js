var date_hash = `
	"January" => "1월",
	"Jan" => "1월",
	"February" => "2월",
	"Feb" => "2월",
	"March" => "3월",
	"Mar" => "3월",
	"April" => "4월",
	"Apr" => "4월",
	"May" => "5월",
	"June" => "6월",
	"Jun" => "6월",
	"July" => "7월",
	"Jul" => "7월",
	"August" => "8월",
	"Aug" => "8월",
	"September" => "9월",
	"Sep" => "9월",
	"October" => "10월",
	"Oct" => "10월",
	"November" => "11월",
	"Nov" => "11월",
	"December" => "12월",
	"Dec" => "12월"
`;

var country_hash = `
	"Channel Islands" => "채널 제도",
	"Soviet Union" => "소비에트연방",
	"Saint Martin" => "세인트마틴 섬",
	"Saint Barthelemy" => "생바르텔레미",
	"European Union" => "유럽연합",
	"Europe" => "유럽",
	"Martinique" => "마르티니크",
	"Virgin Islands\\, British" => "영국령 버진아일랜드",
	"British Virgin Islands" => "영국령 버진아일랜드",
	"Gruziya" => "그루지야",
	"Nepal" => "네팔",
	"Wales" => "웨일스",
	"Taiwan" => "중화민국",
	"China\\, People's Republic of" => "중화인민공화국",
	"Cocos \\(Keeling\\) Islands" => "코코스 제도",
	"Gaza Strip" => "가자 지구",
	"Guernsey" => "건지 섬",
	"South Korea" => "대한민국",
	"Korea\\, South" => "대한민국",
	"Laos" => "라오스",
	"Lebanon" => "레바논",
	"Malaysia" => "말레이시아",
	"Maldives" => "몰디브",
	"Mongolia" => "몽골",
	"Myanmar" => "미얀마",
	"Bahrain" => "바레인",
	"Bangladesh" => "방글라데시",
	"Vietnam" => "베트남",
	"Bhutan" => "부탄",
	"North Korea" => "북한",
	"Korea\\, North" => "북한",
	"Brunei" => "브루나이",
	"Brunei Darussalam" => "브루나이",
	"Burma" => "버마",
	"Saudi Arabia" => "사우디 아라비아",
	"Sri Lanka" => "스리랑카",
	"Syria" => "시리아",
	"Singapore" => "싱가포르",
	"United Arab Emirates" => "아랍에미리트",
	"Armenia" => "아르메니아",
	"Azerbaizhan" => "아제르바이잔",
	"Azerbaijan" => "아제르바이잔",
	"Afghanistan" => "아프가니스탄",
	"Yemen" => "예멘",
	"Oman" => "오만",
	"Jordan" => "요르단",
	"Uzbekistan" => "우즈베키스탄",
	"Iraq" => "이라크",
	"Iran" => "이란",
	"Israel" => "이스라엘",
	"India" => "인도",
	"Indonesia" => "인도네시아",
	"Japan" => "일본",
	"China" => "중국",
	"Kazakhstan" => "카자흐스탄",
	"Qatar" => "카타르",
	"Cambodia" => "캄보디아",
	"Kuwait" => "쿠웨이트",
	"Kyrgyzstan" => "키르기스스탄",
	"Kypros" => "키프로스",
	"Cyprus" => "키프로스",
	"Cook Islands" => "쿡 제도",
	"Thailand" => "타이",
	"Tadzhikistan" => "타지키스탄",
	"Tajikistan" => "타지키스탄",
	"Turkey" => "터키",
	"Turkmenistan" => "투르크메니스탄",
	"Pakistan" => "파키스탄",
	"Philippines" => "필리핀",
	"Nauru" => "나우루",
	"New Zealand" => "뉴질랜드",
	"Isle of Man" => "맨 섬",
	"Jersey" => "저지 섬",
	"Kosovo" => "코소보",
	"Mayotte" => "마요트",
	"Marshall Islands" => "마셜 제도",
	"Marshall" => "마셜",
	"Federated States of Micronesia" => "미크로네시아 연방",
	"Micronesia\\, Federated States of" => "미크로네시아 연방",
	"Micronesia" => "미크로네시아 연방",
	"Russian Empire" => "러시아 제국",
	"Vanuatu" => "바누아투",
	"Western Samoa" => "서사모아",
	"Samoa" => "사모아",
	"Western Sahara" => "서사하라",
	"Montserrat" => "몬트세랫",
	"Solomon Islands" => "솔로몬 제도",
	"Austrailia" => "오스트레일리아",
	"Australia" => "오스트레일리아",
	"Kiribati" => "키리바시",
	"Tonga" => "통가",
	"Tuvalu" => "투발루",
	"Papua New Guinea" => "파푸아뉴기니",
	"Palau" => "팔라우",
	"Fiji" => "피지",
	"Greece" => "그리스",
	"Netherlands Antilles" => "네덜란드령 안틸레스",
	"Netherlands" => "네덜란드",
	"The Netherlands" => "네덜란드",
	"Macau" => "마카오",
	"Norway" => "노르웨이",
	"Denmark" => "덴마크",
	"Germany" => "독일",
	"Latvia" => "라트비아",
	"Russia" => "러시아",
	"Rumania" => "루마니아",
	"Romania" => "루마니아",
	"Luxembourg" => "룩셈부르크",
	"Lituania" => "리투아니아",
	"Lithuania" => "리투아니아",
	"Liechtenstein" => "리히텐슈타인",
	"South Sudan" => "남수단",
	"Palestinian Territory" => "팔레스타인 영토",
	"Palestine" => "팔레스타인",
	"Macedonia\\, Republic of" => "마케도니아 공화국",
	"Republic of Macedonia" => "마케도니아 공화국",
	"Macedonia" => "마케도니아",
	"Monaco" => "모나코",
	"Moldova" => "몰도바",
	"Malta" => "몰타",
	"Vatican City" => "바티칸 시국",
	"Vatican" => "바티칸",
	"Belgium" => "벨기에",
	"Belorus" => "벨로루시",
	"Bosnia Herzegovina" => "보스니아 헤르체고비나",
	"Bosnia and Herzegovina" => "보스니아 헤르체고비나",
	"Bulgaria" => "불가리아",
	"San Marino" => "산마리노",
	"Sweden" => "스웨덴",
	"Switzerland" => "스위스",
	"Spain" => "스페인",
	"Slovakia" => "슬로바키아",
	"Slovenia" => "슬로베니아",
	"Iceland" => "아이슬란드",
	"Ireland" => "아일랜드",
	"Aandorra" => "안도라",
	"Andorra" => "안도라",
	"Anguilla" => "앵귈라",
	"Albania" => "알바니아",
	"Estonia" => "에스토니아",
	"United Kingdom" => "영국",
	"Austria" => "오스트리아",
	"Ukraina" => "우크라이나",
	"Ukraine" => "우크라이나",
	"Yugoslavia" => "유고슬라비아",
	"Italy" => "이탈리아",
	"West Germany" => "서독",
	"East Germany" => "동독",
	"Czechoslovakia" => "체코슬로바키아",
	"Czech Republic" => "체코",
	"Czechia" => "체코",
	"Czech" => "체코",
	"Croatia" => "크로아티아",
	"Partugal" => "포르투갈",
	"Portugal" => "포르투갈",
	"Poland" => "폴란드",
	"France" => "프랑스",
	"Finland" => "핀란드",
	"Hungarian Soviet Republic" => "헝가리 평의회 공화국",
	"Hungary" => "헝가리",
	"Guyana" => "가이아나",
	"Guatemala" => "과테말라",
	"Grenada" => "그레나다",
	"Nicaragua" => "니카라과",
	"Dominican Republic" => "도미니카 공화국",
	"Cammon Wealth of Dominica" => "도미니카 연방",
	"Dominica" => "도미니카 연방",
	"Mexico" => "멕시코",
	"Barbados" => "바베이도스",
	"Bahamas\\, The" => "바하마",
	"The Bahamas" => "바하마",
	"Bahamas" => "바하마",
	"Venezuela" => "베네수엘라",
	"Belize" => "벨리즈",
	"Bolivia" => "볼리비아",
	"Brazil" => "브라질",
	"Saint Lucia" => "세인트루시아",
	"St. Vincent and the Grenadines" => "세인트빈센트 그레나딘",
	"Saint Vincent and the Grenadines" => "세인트빈센트 그레나딘",
	"St. Christopher and Nevis" => "세인트크리스토퍼 네비스",
	"Holy See" => "성좌",
	"Aland Islands" => "올란드 제도",
	"Réunion " => "레위니옹",
	"Reunion" => "레위니옹",
	"Virgin Islands\\, U.S." => "미국령 버진아일랜드",
	"United States Minor Outlying Islands" => "미국령 군소 제도",
	"United States Virgin Islands" => "미국령 버진아일랜드",
	"U.S. Virgin Islands" => "미국령 버진아일랜드",
	"United States of America" => "미국",
	"United States" => "미국",
	"Suriname" => "수리남",
	"Surinam" => "수리남",
	"Argentina" => "아르헨티나",
	"Haiti" => "아이티",
	"Antigua and Barbuda" => "앤티가 바부다",
	"Ecuador" => "에콰도르",
	"El Salvador" => "엘살바도르",
	"Honduras" => "온두라스",
	"Uruguay" => "우루과이",
	"Jameica" => "자메이카",
	"Jamaica" => "자메이카",
	"Faroe Islands" => "페로 제도",
	"Gibraltar" => "지브롤터",
	"Greenland" => "그린란드",
	"Guam" => "괌",
	"Chile" => "칠레",
	"Canada" => "캐나다",
	"Costa Rica" => "코스타리카",
	"Colombia" => "콜롬비아",
	"Cuba" => "쿠바",
	"Trinidad and Tobago" => "트리니다드토바고",
	"Panama" => "파나마",
	"Paraguay" => "파라과이",
	"Peru" => "페루",
	"Sint Maarten" => "신트마르턴",
	"South Georgia and the South Sandwich Islands" => "사우스조지아 사우스샌드위치 제도",
	"Svalbard" => "스발바르 제도",
	"Jan Mayen" => "얀마옌 섬",
	"Ghana" => "가나",
	"Gabon" => "가봉",
	"Gambia\\, The" => "감비아",
	"Gambia" => "감비아",
	"Guinea Bissau" => "기니비사우",
	"Guinea-Bissau" => "기니비사우",
	"Equatorial Guinea" => "적도기니",
	"Guinea" => "기니",
	"Saint Pierre and Miquelon" => "생피에르 미클롱",
	"Saint Kitts and Nevis" => "세인트키츠 네비스",
	"Saint Helena\\, Ascension and Tristan da Cunha" => "세인트헬레나 어센션 트리스탄다쿠냐",
	"Saint Helena" => "세인트헬레나",
	"Turks and Caicos Islands" => "터크스 케이커스 제도",
	"East Timor" => "동티모르",
	"Timor-Leste" => "동티모르",
	"Namibia" => "나미비아",
	"Nigeria" => "나이지리아",
	"Republic of South Africa" => "남아프리카 공화국",
	"South Africa" => "남아프리카 공화국",
	"Niger" => "니제르",
	"Liberia" => "라이베리아",
	"Lesotho" => "레소토",
	"Rwanda" => "르완다",
	"Libya" => "리비아",
	"Madagascar" => "마다가스카르",
	"Malawi" => "말라위",
	"Mali" => "말리",
	"Morocco" => "모로코",
	"Mauritius" => "모리셔스",
	"Mauritanie" => "모리타니",
	"Mauritania" => "모리타니",
	"Mozambique" => "모잠비크",
	"New Caledonia" => "누벨칼레도니",
	"Niue" => "니우에",
	"Benin" => "베냉",
	"Botswana" => "보츠와나",
	"Burundi" => "부룬디",
	"Burkina Faso" => "부르키나파소",
	"Sao Tome and Principe" => "상투메프린시페",
	"Senegal" => "세네갈",
	"Seychelles" => "세이셸",
	"Somalia" => "소말리아",
	"Sudan" => "수단",
	"Swaziland" => "스와질란드",
	"Sierra Leone" => "시에라리온",
	"Algerie" => "알제리",
	"Algeria" => "알제리",
	"Angola" => "앙골라",
	"Eritrea" => "에리트레아",
	"Ethiopia" => "에티오피아",
	"Uganda" => "우간다",
	"Egypt" => "이집트",
	"Zambia" => "잠비아",
	"Central African Republic" => "중앙 아프리카 공화국",
	"Djibouti" => "지부티",
	"Zimbabwe" => "짐바브웨",
	"Chad" => "차드",
	"Cameroon" => "카메룬",
	"Cabo Verde" => "카보베르데",
	"Cape Verde" => "카보베르데",
	"Kenya" => "케냐",
	"Comoros" => "코모로",
	"Cote d'lvoire" => "코트디부아르",
	"Cote d'Ivoire" => "코트디부아르",
	"Côte d'Ivoire" => "코트디부아르",
	"Ivory Coast" => "코트디부아르",
	"Republic of Ireland" => "아일랜드 공화국 (1919년-1922년)",
	"Congo DR" => "콩고 민주 공화국",
	"Republic of Congo" => "콩고 공화국",
	"Congo" => "콩고 공화국",
	"Congo\\, Republic of the" => "콩고 공화국",
	"Republic of the Congo" => "콩고 공화국",
	"Congo\\, Democratic Republic of the" => "콩고 민주 공화국",
	"Democratic Republic of Congo" => "콩고 민주 공화국",
	"Democratic Republic of the Congo" => "콩고 민주 공화국",
	"Cayman Islands" => "케이맨 제도",
	"Bermuda" => "버뮤다",
	"Falkland Islands" => "포클랜드 제도",
	"French Polynesia" => "프랑스령 폴리네시아",
	"Tanzania" => "탄자니아",
	"Togo" => "토고",
	"Tunisie" => "튀니지",
	"Tunisia" => "튀니지",
	"Georgia" => "조지아",
	"Serbia" => "세르비아",
	"Hong Kong" => "홍콩",
	"Belarus" => "벨라루스",
	"Puerto Rico" => "푸에르토리코",
	"Aruba" => "아루바",
	"American Samoa" => "아메리칸사모아",
	"Republic of the Congo" => "콩고 공화국",
	"West Bank" => "요르단 강 서안 지구",
	"Wallis and Futuna" => "왈리스 퓌튀나",
	"Northern Mariana Islands" => "북마리아나 제도",
	"Montenegro" => "몬테네그로",
	"Antarctica" => "남극",
	"Guadeloupe" => "과들루프",
	"British Indian Ocean Territory" => "영국령 인도양 지역",
	"French Guiana" => "프랑스령 기아나",
	"Tokelau" => "토켈라우",
	"Norfolk Island" => "노퍽 섬",
	"Bonaire\\, Saint Eustatius and Saba" => "카리브 네덜란드",
	"Bouvet Island" => "부베 섬",
	"Christmas Island" => "크리스마스 섬",
	"Curacao" => "퀴라소",
	"French Southern Territories" => "프랑스령 남방 및 남극",
	"Heard Island and McDonald Islands" => "허드 맥도널드 제도",
	"Pitcairn Islands" => "핏케언 제도"
`;

function init() {
	$('#logo').show();
	$('#get_weather_template').show();
	$('#copy').hide();
	$('#result').hide();
}

function conv_init() {
	$('#copy').show();
	$('#logo').hide();
	$('#result').show();
	$('#get_weather_template').hide();
}

function _exit() {
	init();
	exit;
}

function get_source(pageURL){
	var url=pageURL;
	var error=0;

	re = new RegExp("\\S");
	if (re.exec($("#result").val())) {
		return 1;
	}

	re = new RegExp('^https:\/\/ko\.(m\.)*wikipedia\.org');
	if (re.exec(url)) {
		re = new RegExp('\/w\/index\.php\?');
		if (!re.exec(url)) {
			re = new RegExp('\/wiki\/');
			if (re.exec(url)) {
				var new_str=url.replace(/^.+\/wiki\//, '');
				url="https://ko.wikipedia.org/w/index.php?title=" + new_str;
			} else {
				alert("Exception Error");
				_exit();
			}
		}
		re = new RegExp('title=(특수|%ED%8A%B9%EC%88%98|위키백과|%EC%9C%84%ED%82%A4%EB%B0%B1%EA%B3%BC):');
		if (re.exec(url)) {
			alert("한국어 위키백과에 접속하셨으나 문서를 열지 않았습니다.\n빈 공간에서 작업합니다.");
			return 1;
		}
		url=url.replace(/&.+/, '');
		url += "&action=raw";
		return url;

	} else {
		alert("한국어 위키백과 웹사이트에 접속되지 않은 상태입니다.\n빈 공간에서 작업합니다.");
		return 1;
	}
	if (error == 1) {
		alert("s");
		return 1;
	}
}

function convert(content) {
	if ($("#flag").is(':checked')) {
		var country_arr = country_hash.split("\n");
		for(var i = 0; i < country_arr.length; i++) {
			country_arr[i] = country_arr[i].replace(/^\s*/, "").replace(/\s*$/, "").replace(/,$/, "").replace(/("|')/g, "");
			var en_country = country_arr[i].split(" => ")[0];
			var ko_country = country_arr[i].split(" => ")[1];
			if (en_country) {
				var source = "{{\\s*(flagicon|flag|flagcountry|국기나라|국기그림|국기)\\s*\\|\\s*" + en_country + "\\s*(}}|\|)";
				var dest = "{{\$1\|" + ko_country + "\$2";
				re = new RegExp(source, "gi");
				content = content.replace(re, dest);
			}
		}
	}
	if ($("#date").is(':checked')) {
		var date_arr = date_hash.split("\n");
		for(var i = 0; i < date_arr.length; i++) {
			date_arr[i] = date_arr[i].replace(/^\s*/, "").replace(/\s*$/, "").replace(/,$/, "").replace(/("|')/g, "");
			var en_month = date_arr[i].split(" => ")[0];
			var ko_month = date_arr[i].split(" => ")[1];
			if (en_month) {
				var source = en_month + " +(\\d|\\d\\d), +(\\d\\d\\d\\d)";
				var dest = "\$2년 " + ko_month + " \$1일";
				re = new RegExp(source, "g");
				content = content.replace(re, dest);
				source = "(\\d|\\d\\d) +" + en_month + " +(\\d\\d\\d\\d)";
				dest = "\$2년 " + ko_month + " \$1일";
				re = new RegExp(source, "g");
				content = content.replace(re, dest);
			}
		}
	}
	return content;
}

$(document).ready(function(){
	init();

	$('#link1').on('click', function() {
		window.open('https://tools.wmflabs.org/tedbot/tedtool','_blank');
	});

	$('#link2').on('click', function() {
		window.open('http://ykhwong.x-y.net','_blank');
	});

	$('#link3').on('click', function() {
		window.open('https://ko.wikipedia.org','_blank');
	});

	$('#convert_start').on('click', function() {
		chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
			var pageURL = tabs[0].url;
			var str = get_source(pageURL);
			conv_init();
			if (str == 1) {
				var cont = $("#result").val();
				$("#result").val(convert(cont));
			} else {
				$.get(str, function( cont ) {
					$("#result").val(convert(cont));
				});
			}
		});
	});
	
	$('#copy').on('click', function() {
		$('#result').focus();
		$('#result').select();
		document.execCommand('copy');
	});

	$('#get_weather_template').on('click', function() {
		var res_data = "";
		chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
			var pageURL = tabs[0].url;
			var data;
			  $.get({
				url: pageURL,
				async: false,
			  }, function (dt) {
				  data = dt;
			  });
				re = new RegExp('li class="interlanguage-link .+en\\.wikipedia\\.org\\/wiki\\/(\\S+)');
				if (re.exec(data)) {
					var results = data.match(re);
					var eng = results[1].replace(/"/, '');
					pageURL = "https://en.wikipedia.org/w/index.php?title=" + eng + "&action=raw";
					  $.get({
						url: pageURL,
						async: false,
					  }, function (dt) {
						  data = dt;
					  });
					  var splits = data.split("\n");
					  var flag = false;
					  if (!data.match(/(\{\{) *(weather *box|climate *box|infobox *weather|Klimatabelle) *(\|)*/i)) {
						  re = new RegExp('\\{\\{ *(.+ weather *box|weather *box .+) *\\}\\}', "i");
						  if (re.exec(data)) {
							  results = data.match(re);
							  eng = results[1];
							  alert("별도의 weatherbox 틀로 존재: " + eng);
					pageURL = "https://en.wikipedia.org/w/index.php?title=Template:" + eng + "&action=raw";
					  $.get({
						url: pageURL,
						async: false,
					  }, function (dt) {
						  data = dt;
						  splits = data.split("\n");
					  });
						  } else {
							alert("직접 사용된 틀 없음");
							return;
						  }
					  }
						  for(var i = 0; i < splits.length; i++) {
							re = new RegExp('(\\{\\{)(weather *box|climate *box|infobox *weather|Klimatabelle)', "i");
							if (re.exec(splits[i])) {
								if (flag) {
									alert("weatherbox 2개 이상");
								}
								flag=true;
								splits[i] = splits[i].replace(/(.+)(\{\{)(weather *box|climate *box|infobox *weather|Klimatabelle)/im, '\$2\$3');
							} else {
								var re2 = new RegExp('^ *(==|\\{ *\\| *class *=)');
								if (re2.exec(splits[i])) {
									flag = false;
								}
							}
							if (flag) {
								splits[i] = splits[i].replace(/\| *collapsed *= *(yes|y|1)/i, '');
								res_data += splits[i] + "\n";
							}
						  }
						  var re2 = new RegExp('\\{\\{ *efn *\\|');
						  if (re2.exec(res_data)) {
							  alert("내용주 포함");
						  }
						  re2 = new RegExp('<ref');
						  if (!re2.exec(res_data)) {
							  alert("각주 없음");
						  }
						  $("#result").val(res_data);
						  conv_init();
							$('#result').focus();
							$('#result').select();
							document.execCommand('copy');
				} else {
					alert("enwiki not found");
					return;
				}

		});
	});

});
