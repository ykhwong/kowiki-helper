var date_hash = `
	"January" => "1월",
	"February" => "2월",
	"March" => "3월",
	"April" => "4월",
	"May" => "5월",
	"June" => "6월",
	"July" => "7월",
	"August" => "8월",
	"September" => "9월",
	"October" => "10월",
	"November" => "11월",
	"December" => "12월"
`;

var country_hash = `
	"Gruziya" => "그루지야",
	"Nepal" => "네팔",
	"Taiwan" => "중화민국",
	"South Korea" => "대한민국",
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
	"Brunei" => "브루나이",
	"Saudi Arabia" => "사우디 아라비아",
	"Sri Lanka" => "스리랑카",
	"Syria" => "시리아",
	"Singapore" => "싱가포르",
	"United Arab Emirates" => "아랍에미리트",
	"Armenia" => "아르메니아",
	"Azerbaizhan" => "아제르바이잔",
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
	"Thailand" => "타이",
	"Tadzhikistan" => "타지키스탄",
	"Turkey" => "터키",
	"Turkmenistan" => "투르크메니스탄",
	"Pakistan" => "파키스탄",
	"Philippines" => "필리핀",
	"Nauru" => "나우루",
	"New zealand" => "뉴질랜드",
	"Marshall" => "마셜",
	"Micronesia" => "미크로네시아",
	"Vanuatu" => "바누아투",
	"Western Samoa" => "서사모아",
	"Solomon Islands" => "솔로몬",
	"Austrailia" => "오스트레일리아",
	"Kiribati" => "키리바시",
	"Tonga" => "통가",
	"Tuvalu" => "투발루",
	"Papua New Guinea" => "파푸아뉴기니",
	"Palau" => "팔라우",
	"Fiji" => "피지",
	"Greece" => "그리스",
	"Netherlands" => "네덜란드",
	"Norway" => "노르웨이",
	"Denmark" => "덴마크",
	"Germany" => "독일",
	"Latvia" => "라트비아",
	"Russia" => "러시아",
	"Rumania" => "루마니아",
	"Luxembourg" => "룩셈부르크",
	"Lituania" => "리투아니아",
	"Liechtenstein" => "리히텐슈타인",
	"Macedonia" => "마케도니아",
	"Monaco" => "모나코",
	"Moldova" => "몰도바",
	"Malta" => "몰타",
	"Vatican" => "바티칸",
	"Belgium" => "벨기에",
	"Belorus" => "벨로루시",
	"Bosnia Herzegovina" => "보스니아 헤르체고비나",
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
	"Albania" => "알바니아",
	"Estonia" => "에스토니아",
	"United Kingdom" => "영국",
	"Austria" => "오스트리아",
	"Ukraina" => "우크라이나",
	"Yugoslavia" => "유고슬라비아",
	"Italy" => "이탈리아",
	"Czech" => "체코",
	"Croaita" => "크로아티아",
	"Partugal" => "포르투갈",
	"Poland" => "폴란드",
	"France" => "프랑스",
	"Finland" => "핀란드",
	"Hungary" => "헝가리",
	"Guyana" => "가이아나",
	"Guatemala" => "과테말라",
	"Grenada" => "그레나다",
	"Nicaragua" => "니카라과",
	"Dominican Republic" => "도미니카 공화국",
	"Cammon Wealth of Dominica" => "도미니카 연방",
	"Mexico" => "멕시코",
	"United States of America" => "미국",
	"Barbados" => "바베이도스",
	"Bahamas" => "바하마",
	"Venezuela" => "베네수엘라",
	"Belize" => "벨리즈",
	"Bolivia" => "볼리비아",
	"Brazil" => "브라질",
	"Saint Lucia" => "세인트루시아",
	"St. Vincent and the Grenadines" => "세인트빈센트 그레나딘",
	"St. Christopher and Nevis" => "세인트크리스토퍼 네비스",
	"Surinam" => "수리남",
	"Argentina" => "아르헨티나",
	"Haiti" => "아이티",
	"Antigua and Barbuda" => "앤티가 바부다",
	"Ecuador" => "에콰도르",
	"El Salvador" => "엘살바도르",
	"Honduras" => "온두라스",
	"Uruguay" => "우루과이",
	"Jameica" => "자메이카",
	"Chile" => "칠레",
	"Canada" => "캐나다",
	"Costa Rica" => "코스타리카",
	"Colombia" => "콜롬비아",
	"Cuba" => "쿠바",
	"Trinidad and Tobago" => "트리니다드토바고",
	"Panama" => "파나마",
	"Paraguay" => "파라과이",
	"Peru" => "페루",
	"Ghana" => "가나",
	"Gabon" => "가봉",
	"Gambia" => "감비아",
	"Guinea" => "기니",
	"Guinea Bissau" => "기니비사우",
	"Namibia" => "나미비아",
	"Nigeria" => "나이지리아",
	"Republic of  South Africa" => "남아프리카 공화국",
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
	"Mozambique" => "모잠비크",
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
	"Angola" => "앙골라",
	"Eritrea" => "에리트레아",
	"Ethiopia" => "에티오피아",
	"Uganda" => "우간다",
	"Egypt" => "이집트",
	"Zambia" => "잠비아",
	"Equatorial Guinea" => "적도기니",
	"Central African Republic" => "중앙 아프리카 공화국",
	"Djibouti" => "지부티",
	"Zimbabwe" => "짐바브웨",
	"Chad" => "차드",
	"Cameroon" => "카메룬",
	"Cabo Verde" => "카보베르데",
	"Kenya" => "케냐",
	"Comoros" => "코모로",
	"Cote d'lvoire" => "코트디부아르",
	"Republic of  Congo" => "콩고 공화국",
	"Democratic Republic of Congo" => "콩고 민주 공화국",
	"Tanzania" => "탄자니아",
	"Togo" => "토고",
	"Tunisie" => "튀니지"
`;

function init() {
	$('#logo').show();
	$('#copy').hide();
	$('#result').hide();
}

function conv_init() {
	$('#copy').show();
	$('#logo').hide();
	$('#result').show();
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
			var source = "{{\\s*(flagicon|flag|국기나라|국기)\\s*\\|\\s*" + en_country + "\\s*}}";
				var dest = "{{\$1\|" + ko_country + "}}";
				re = new RegExp(source, "g");
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
});
