function Dsy() {
    this.Items = {};
}
Dsy.prototype.add = function (id, iArray) {
    this.Items[id] = iArray;
};
Dsy.prototype.Exists = function (id) {
    if (typeof(this.Items[id]) === "undefined")
        return false;
    return true;
};
function change(v) {
    var str = "0";
    for (var i = 0; i < v; i++) { str += ("_" + (document.getElementById(s[i]).selectedIndex - 1));}
    var ss = document.getElementById(s[v]);
    //with (ss) {
        ss.length = 0;
        ss.options[0] = new Option(opt0[v], opt0[v]);
        if (v && document.getElementById(s[v - 1]).selectedIndex > 0 || !v) {
            if (dsy.Exists(str)) {
                var ar = dsy.Items[str];
                for (i = 0; i < ar.length; i++)ss.options[length] = new Option(ar[i], ar[i]);
                if (v)ss.options[0].selected = true;
            }
        }
        if (++v < s.length) {change(v);}
    //}
}
function preselect(p_key) {
    console.log(p_key);
    var index;
    var provinces = ["tw","hk","my"];
    var cnt = provinces.length;
   
    for (var i = 0; i < cnt; i++) {
        if (p_key === provinces[i]) {
            index = i;
            break;
        }
    }
    
    if (index < provinces.length) {
        console.log(  document.getElementById(s[0]) );
        document.getElementById(s[0]).selectedIndex = index + 1;
        change(1);
    }
}
var dsy = new Dsy();
dsy.add("0_0_0", ["中正區", "大同區", "中山區", "松山區", "大安區", "萬華區", "信義區", "士林區", "北投區", "內湖區", "南港區", "文山區"]);
dsy.add("0_0_1", ["仁愛區", "信義區", "中正區", "中山區", "安樂區", "暖暖區", "七堵區"]);
dsy.add("0_0_2", ["萬里區", "金山區", "板橋區", "汐止區", "深坑區", "石碇區", "瑞芳區", "平溪區", "雙溪區", "貢寮區", "新店區", "坪林區", "烏來區", "永和區", "中和區", "土城區", "三峽區", "樹林區", "鶯歌區", "三重區", "新莊區", "泰山區", "林口區", "蘆洲區", "五股區", "八里區", "淡水區", "三芝區", "石門區"]);
dsy.add("0_0_3", ["中壢區", "平鎮區", "龍潭區", "楊梅區", "新屋區", "觀音區", "桃園區", "龜山區", "八德區", "大溪區", "復興區", "大園區", "蘆竹區"]);
dsy.add("0_0_4", ["東區", "香山區", "北區"]);
dsy.add("0_0_5", ["竹北市", "湖口鄉", "新豐鄉", "新埔鎮", "關西鎮", "芎林鄉", "寶山鄉", "竹東鎮", "五峰鄉", "橫山鄉", "尖石鄉", "北埔鄉", "峨嵋鄉"]);
dsy.add("0_0_6", ["竹南鎮", "頭份市", "三灣鄉", "南庄鄉", "獅潭鄉", "後龍鎮", "通宵鎮", "苑裡鎮", "苗栗市", "造橋鄉", "頭屋鄉", "公館鄉", "大湖鄉", "泰安鄉", "銅鑼鄉", "三義鄉", "西湖鄉", "卓蘭鎮"]);
dsy.add("0_0_7", ["中區", "東區", "南區", "西區", "北區", "北屯區", "西屯區", "南屯區", "太平區", "大里區", "霧峰區", "烏日區", "豐原區", "后里區", "石岡區", "東勢區", "和平區", "新社區", "潭子區", "大雅區", "神岡區", "大肚區", "沙鹿區", "龍井區", "梧棲區", "清水區", "大甲區", "外埔區", "大安區",]);
dsy.add("0_0_8", ["彰化市", "芬園鄉", "花壇鄉", "秀水鄉", "鹿港鎮", "福興鄉", "線西鄉", "和美鎮", "伸港鄉", "員林市", "社頭鄉", "永靖鄉", "埔心鄉", "溪湖鎮", "大村鄉", "埔鹽鄉", "田中鎮", "北斗鎮", "田尾鄉", "埤頭鄉", "溪州鄉", "竹塘鄉", "二林鎮", "大城鄉", "芳苑鄉", "二水鄉"]);
dsy.add("0_0_9", ["南投市", "中寮鄉", "草屯鎮", "國姓鄉", "埔里鎮", "仁愛鄉", "名間鄉", "集集鎮", "水里鄉", "魚池鄉", "信義鄉", "竹山鎮", "鹿谷鄉"]);
dsy.add("0_0_10", ["斗南鎮", "大埤鄉", "虎尾鎮", "土庫鎮", "褒忠鄉", "東勢鄉", "台西鄉", "崙背鄉", "麥寮鄉", "斗六市", "林內鄉", "古坑鄉", "莿桐鄉", "西螺鎮", "二崙鄉", "北港鎮", "水林鄉", "口湖鄉", "四湖鄉", "元長鄉"]);
dsy.add("0_0_11", ["東區", "西區"]);
dsy.add("0_0_12", ["番路鄉", "梅山鄉", "竹崎鄉", "阿里山", "中埔鄉", "大埔鄉", "水上鄉", "鹿草鄉", "太保市", "朴子市", "東石鄉", "六腳鄉", "新港鄉", "民雄鄉", "大林鎮", "溪口鄉", "義竹鄉", "布袋鎮"]);
dsy.add("0_0_13", ["中西區", "東區", "南區", "西區", "北區", "安平區", "安南區", "永康區", "歸仁區", "新化區", "左鎮區", "玉井區", "楠西區", "南化區", "仁德區", "關廟區", "龍崎區", "官田區", "麻豆區", "佳里區", "西港區", "七股區", "將軍區", "學甲區", "北門區", "新營區", "後壁區", "白河區", "東山區", "六甲區", "下營區", "柳營區", "鹽水區", "善化區", "大內區", "山上區", "新市區", "安定區"]);
dsy.add("0_0_14", ["新興區", "前金區", "苓雅區", "鹽埕區", "鼓山區", "旗津區", "前鎮區", "三民區", "楠梓區", "小港區", "左營區", "仁武區", "大社區", "岡山區", "路竹區", "阿蓮區", "田寮區", "燕巢區", "橋頭區", "梓官區", "彌陀區", "永安區", "湖內區", "鳳山區", "大寮區", "林園區", "鳥松區", "大樹區", "旗山區", "美濃區", "六龜區", "內門區", "杉林區", "甲仙區", "桃源區", "那瑪夏區", "茂林區", "茄萣區"]);
dsy.add("0_0_15", ["屏東市", "三地門", "霧台鄉", "瑪家鄉", "九如鄉", "里港鄉", "高樹鄉", "鹽埔鄉", "長治鄉", "麟洛鄉", "竹田鄉", "內埔鄉", "萬丹鄉", "潮州鎮", "泰武鄉", "來義鄉", "萬巒鄉", "崁頂鄉", "新埤鄉", "南州鄉", "林邊鄉", "東港鎮", "琉球鄉", "佳冬鄉", "新園鄉", "枋寮鄉", "枋山鄉", "春日鄉", "獅子鄉", "車城鄉", "牡丹鄉", "恆春鎮", "滿州鄉"]);
dsy.add("0_0_16", ["宜蘭市", "頭城鎮", "礁溪鄉", "壯圍鄉", "員山鄉", "羅東鎮", "三星鄉", "大同鄉", "五結鄉", "冬山鄉", "蘇澳鎮", "南澳鄉"]);
dsy.add("0_0_17", ["台東市", "綠島鄉", "蘭嶼鄉", "延平鄉", "卑南鄉", "鹿野鄉", "關山鎮", "海端鄉", "池上鄉", "東河鄉", "成功鎮", "長濱鄉", "太麻里", "金峰鄉", "大武鄉", "達仁鄉"]);
dsy.add("0_0_18", ["花蓮市", "新城鄉", "秀林鄉", "吉安鄉", "壽豐鄉", "鳳林鎮", "光復鄉", "豐濱鄉", "瑞穗鄉", "萬榮鄉", "玉里鎮", "卓溪鄉", "富里鄉"]);
dsy.add("0_0_19", ["金沙鎮", "金湖鎮", "金寧鄉", "金城鎮", "烈嶼鄉"]);
dsy.add("0_0_20", ["南竿鄉", "北竿鄉", "莒光鄉", "東引鄉"]);
dsy.add("0_0_21", ["馬公市", "西嶼鄉", "白沙鄉", "湖西鄉"]);
dsy.add("0_0", ["台北市", "基隆市", "新北市", "桃園市", "新竹市", "新竹縣", "苗栗縣", "台中市", "彰化縣", "南投縣", "雲林縣", "嘉義市", "嘉義縣", "台南市", "高雄市", "屏東縣", "宜蘭縣", "台東縣", "花蓮縣", "金門縣", "連江縣", "澎湖縣"]);
dsy.add("0_1_0", ["中西區","灣仔區","東區","南區"]);
dsy.add("0_1_1", ["九龍城區","觀塘區","深水埗區","黃大仙區","油尖旺區"]);
dsy.add("0_1_2", ["西區","北區","東區"]);
dsy.add("0_1_3", ["離島"]);
dsy.add("0_1", ["香港島", "九龍半島", "新界", "離島"]);
dsy.add("0_2", ["Johor", "Kedah", "Kelantan", "Melaka", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Pulau Pinang", "Selangor", "Terengganu", "WP Kuala Lumpur", "WP Putrajaya"]);
dsy.add("0_2_0", ["Ayer Baloi", "Ayer Hitam", "Batu Pahat", "Benut", "Bukit Pasir", "Endau", "Gelang Patah", "Jementah", "Johor Bahru", "Kahang", "Kluang", "Kota Tinggi", "Kukup", "Kulai", "Masai", "Mersing", "Muar", "Nusajaya", "Paloh", "Parit Jawa", "Parit Raja", "Parit Sulong", "Pasir Gudang", "Pekan Nenas", "Pengerang", "Pontian", "Rengam", "Rengit", "Segamat", "Semerah", "Senai", "Senggarang", "Seri Gading", "Seri Medan", "Simpang Rengam", "Tangkak", "Ulu Tiram", "Yong Peng"]);
dsy.add("0_2_1", ["Alor Setar", "Ayer Hitam", "Baling", "Bandar Baharu", "Bedong", "Bukit Kayu Hitam", "Changloon", "Gurun", "Jeniang", "Jitra", "Karangan", "Kepala Batas", "Kodiang", "Kota Kuala Muda", "Kota Sarang Semut", "Kuala Kedah", "Kuala Ketil", "Kuala Nerang", "Kuala Pegang", "Kulim", "Kupang", "Langgar", "Langkawi", "Lunas", "Merbok", "Padang Serai", "Pendang", "Pokok Sena", "Serdang", "Sik", "Simpang Empat", "Sungai Petani", "Yan"]);
dsy.add("0_2_2", ["Ayer Lanas", "Bachok", "Cherang Ruku", "Dabong", "Gua Musang", "Jeli", "Kem Desa Pahlawan", "Ketereh", "Kota Bharu", "Kuala Balah", "Kuala Krai", "Machang", "Melor", "Pasir Mas", "Pasir Puteh", "Pulai Chondong", "Rantau Panjang", "Selising", "Tanah Merah", "Temangan", "Tumpat", "Wakaf Bharu"]);
dsy.add("0_2_3", ["Alor Gajah", "Asahan", "Ayer Keroh", "Bemban", "Durian Tunggal", "Jasin", "Kuala Sungai Baru", "Lubok China", "Masjid Tanah", "Melaka", "Merlimau", "Selandar", "Sungai Udang", "Tanjong Kling"]);
dsy.add("0_2_4", ["Bahau", "Bandar Enstek", "Gemas", "Gemencheh", "Kota", "Kuala Pilah", "Labu", "Linggi", "Mantin", "Nilai", "Port Dickson", "Rantau", "Rembau", "Rompin", "Senawang", "Seremban", "Si Rusa", "Tampin", "Tanjong Ipoh"]);
dsy.add("0_2_5", ["Balok", "Bandar Bera", "Bandar Pusat  Jengka", "Bandar Pusat Jengka", "Bentong", "Bukit Fraser", "Bukit Goh", "Chenor", "Chini", "Damak", "Dong", "Gambang", "Genting Highlands", "Jerantut", "Karak", "Kemayan", "Kuala Krau", "Kuala Lipis", "Kuala Rompin", "Kuantan", "Lanchang", "Mentakab", "Muadzam Shah", "Padang Tengku", "Pekan", "Raub", "SungaRuan", "Sungai Koyan", "Sungai Lembing", "Temerloh", "Triang"]);
dsy.add("0_2_6", ["Ayer Tawar", "Bagan Serai", "Batu Gajah", "Bidor", "Changkat Jering", "Chemor", "Gopeng", "Ipoh", "Jeram", "Kampar", "Kampung Kepayang", "Kamunting", "Kuala Kangsar", "Kuala Sepetang", "Langkap", "Lumut", "Malim Nawar", "Matang", "Pantai Remis", "Parit Buntar", "Pusing", "Seri Manjong", "Simpang", "Sitiawan", "Sungai Siput", "Taiping", "Tanjong Rambutan", "Tanjong Tualang", "Tapah", "Teluk Intan", "Temoh", "Trong", "Ulu Kinta"]);
dsy.add("0_2_7", ["Arau", "Kaki Bukit", "Kangar", "Kuala Perlis", "Padang Besar", "Simpang Ampat"]);
dsy.add("0_2_8", ["Ayer Itam", "Balik Pulau", "Batu Ferringhi", "Batu Maung", "Bayan Lepas", "Bukit Mertajam", "Butterworth", "Gelugor", "Jelutong", "Kepala Batas", "Kubang Semang", "Nibong Tebal", "Penaga", "Penang Hill", "Perai", "Permatang Pauh", "Pulau Pinang", "Simpang Ampat", "Tanjong Bungah", "Tasek Gelugor", "USM Pulau Pinang"]);
dsy.add("0_2_9", ["Ampang", "Bandar Baru Bangi", "Bandar Puncak Alam", "Banting", "Batang Kali", "Batu Arang", "Batu Caves", "Beranang", "Bestari Jaya", "Bukit Rotan", "Cheras", "Cyberjaya", "Dengkil", "Jenjarom", "Jeram", "KLIA", "Kajang", "Kapar", "Kerling", "Klang", "Kuala Kubu Baru", "Kuala Selangor", "Pelabuhan Klang", "Petaling Jaya", "Puchong", "Pulau Carey", "Pulau Indah", "Rasa", "Rawang", "Sekinchan", "Semenyih", "Sepang", "Serdang", "Serendah", "Seri Kembangan", "Shah Alam", "Subang Jaya", "Sungai Besar", "Sungai Buloh", "Sungai Pelek", "Tanjong Karang", "Tanjong Malim", "Tanjong Sepat", "Telok Panglima Garang"]);
dsy.add("0_2_10", ["Ajil", "Al Muktatfi Billah Shah", "Ayer Puteh", "Bukit Besi", "Bukit Payong", "Ceneh", "Chalok", "Cukai", "Dungun", "Jerteh", "Kampung Raja", "Kemasek", "Kerteh", "Ketengah Jaya", "Kijal", "Kuala Berang", "Kuala Besut", "Kuala Terengganu", "Marang", "Paka", "Permaisuri", "Sungai Tong"]);
dsy.add("0_2_11", ["Kuala Lumpur"]);
dsy.add("0_2_12", ["Putrajaya"]);
dsy.add("0", ["tw","hk","my"]);
var s=["province","city","area"];
var opt0=["國家/地區","城市","區縣"];
function showarea(){
    for(var i=0;i<s.length-1;i++){
         document.getElementById(s[i]).onchange=new Function("change("+(i+1)+");");
        //  console.log(document.getElementById(s));
    }
   change(0);
}
export default {
     showarea,
     preselect,
     change
};