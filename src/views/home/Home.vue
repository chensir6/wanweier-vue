<template>
  <div class="home">
    <Header :citiesinfo="citiesinfo" />
    <router-view />
    <Footer />
    <ReturnTop />
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import ReturnTop from '../../components/ReturnTop.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    ReturnTop
  },
  data() {
    return {
      citiesinfo: [
        {
          sid: 1,
          sname: '湖北',
          smsg: ['四月武汉樱花最盛', '黄鹤楼欢迎各界旅客', '木兰天池，避暑之地', '户部巷，武汉小吃街'],
          slabel1: '湖北有多大，我们将会陪你走多远',
          slabel2: '让我们来尝遍湖北的美食与小吃',
          scities: ['武汉', '荆州', '宜昌', '恩施', '十堰', '咸宁', '黄冈', '荆门', '襄阳', '孝感', '黄石'],
          sspots: ['武汉大学', '湖北省神农架旅游区', '武汉市黄鹤楼公园', '屈原故里文化旅游区', '湖北武当山风景名胜区', '长江三峡风景名胜区', '恩施州恩施大峡谷景区', '武汉东湖风景名胜区', '宜昌市长阳清江画廊景区', '武汉市黄陂木兰文化生态旅游区'],
          shots: ['黄鹤楼', '恩施大峡谷', '东湖', '武当山', '三峡大坝', '土司遗址'],
          sarea: [
            { id: 1, url: require('../assets/images/hubei/spots/长江大桥.png'), title: '武汉长江大桥' },
            { id: 2, url: require('../assets/images/hubei/spots/武当山.png'), title: '武当山' },
            { id: 3, url: require('../assets/images/hubei/spots/东湖樱花园.png'), title: '东湖樱花园' },
            { id: 4, url: require('../assets/images/hubei/spots/三峡.png'), title: '三峡' },
            { id: 5, url: require('../assets/images/hubei/spots/黄鹤楼.png'), title: '黄鹤楼' },
            { id: 6, url: require('../assets/images/hubei/spots/荆州古城墙.png'), title: '武汉荆州古城墙' }
          ],
          sinfo: [
            {
              id: 1,
              area: '武汉',
              iscultrue: false,
              ishot: true,
              name: '黄鹤楼',
              position: '湖北省武汉市武昌区蛇山西坡特一号',
              opentime: '07:30-18:30',
              price: 80,
              url: require('../assets/images/hubei/spots/黄鹤楼.jpg'),
              title: '武汉黄鹤楼',
              label1: '天下江山第一楼',
              label2: '5A景区',
              detail: '黄鹤楼位于武昌江畔，紧邻长江大桥，有‘天下江山第一楼’的美誉，是江南三大名楼之一。因‘昔人已乘黄鹤去，此地空余黄鹤楼’而名扬天下。'
            },
            {
              id: 2,
              area: '武汉',
              iscultrue: false,
              ishot: true,
              name: '户部巷',
              position: '湖北省武汉市武昌区司门口',
              opentime: '全天',
              price: 0,
              url: require('../assets/images/hubei/spots/户部巷.jpg'),
              title: '武汉户部巷',
              label1: '汉味小吃第一巷',
              label2: '百年老巷',
              detail: '户部巷位于国家历史文化名城——湖北省武汉市，是一条长150米的百年老巷，其繁华的早点摊群数十年经久不衰。户部巷位于武汉市武昌区最繁华的司门口，东靠十里长街（解放路），西临浩瀚长江，南枕“天下江山第一楼”——黄鹤楼，北接都府堤红色景区，是一处由名街名楼名景名江环绕而成的美食天堂。'
            },
            {
              id: 3,
              area: '武汉',
              iscultrue: false,
              ishot: true,
              name: '东湖樱花园',
              position: '湖北省武汉市洪山区东湖风景区东湖东路58号',
              opentime: '8:00-17:30',
              price: 60,
              url: require('../assets/images/hubei/spots/东湖樱花园.png'),
              title: '武汉东湖樱花园',
              label1: '世界三大樱花之都',
              label2: '东瀛风情',
              detail: '武汉东湖磨山樱园位于东湖梅园近旁的国家5A景区东湖磨山景区南麓，占地260亩，有樱花树10000株。园内种植的第一批樱花由日本前首相田中角荣赠送给邓颖超，再由邓颖超转赠武汉东湖。绝大部分樱花是中日双方1998年共同投资栽种的。'
            },
            {
              id: 4,
              area: '武汉',
              iscultrue: true,
              ishot: false,
              name: '木兰天池',
              position: '武汉市黄陂区长轩岭镇石门山',
              opentime: '08:00-17:00',
              price: 70,
              url: require('../assets/images/hubei/spots/木兰天池.png'),
              title: '武汉木兰天池',
              label1: '中国国家级森林公园',
              label2: '5A风景区',
              detail: '木兰天池位于湖北省武汉市黄陂区北部的石门山，距武汉市中心50公里，距武汉天河国际机场40公里。景区面积13平方公里，由“浪漫山水”、“高峡人家”和“森林公园”三大主题景园链接成一个南北走向，长达十余公里的森林山水大峡谷。'
            },
            {
              id: 5,
              area: '十堰',
              iscultrue: false,
              ishot: true,
              name: '武当山',
              position: '湖北西北部十堰市丹江口市境内',
              opentime: '08:00-17:00',
              price: 50,
              url: require('../assets/images/hubei/spots/武当山.jpg'),
              title: '十堰武当山',
              label1: '中国道教圣地',
              label2: '五岳之冠',
              detail: '又名太和山、谢罗山、参上山、仙室山，古有“太岳”、“玄岳”、“大岳”之称。位于湖北西北部十堰市丹江口市境内。东接闻名古城襄阳市，西靠车城十堰市，南望原始森林神农架，北临高峡平湖丹江口水库。明代，武当山被皇帝封为“大岳”、“治世玄岳”，被尊为“皇室家庙”。'
            },
            {
              id: 6,
              area: '黄冈',
              iscultrue: true,
              ishot: false,
              name: '麻城杜鹃花',
              position: '湖北省黄冈市麻城县龟峰山景区',
              opentime: '08:00-17:00',
              price: 50,
              url: require('../assets/images/hubei/spots/麻城杜鹃.jpg'),
              title: '黄冈麻城杜鹃花',
              label1: '原生态古杜鹃群落',
              label2: '中国一绝，世界罕见',
              detail: '原生态古杜鹃群落的生态保护与科学开发，成果丰硕，成效斐然。特别是龟峰山景区现存10万亩古杜鹃群落，其面积之大、年代之久、保存之好、密度之高、花色之美，中国一绝，世界罕见。'
            },
            {
              id: 7,
              area: '武汉',
              iscultrue: true,
              ishot: false,
              name: '湖北省博物馆',
              position: '湖北省武汉市',
              opentime: '08:00-17:00',
              price: 60,
              url: require('../assets/images/hubei/spots/省博.jpg'),
              title: '湖北省武汉博物馆',
              label1: '古乐器陈列馆',
              label2: '5A风景区',
              detail: '，以青铜器、漆木器、简牍最有特色，其中国家一级文物945套、国宝级文物16套。越王勾践剑、曾侯乙编钟、郧县人头骨化石、元青花四爱图梅瓶为该馆四大镇馆之宝。'
            },
            {
              id: 8,
              area: '武汉',
              iscultrue: false,
              ishot: true,
              name: '三峡大坝',
              position: '宜昌',
              opentime: '08:00-17:00',
              price: 30,
              url: require('../assets/images/hubei/spots/三峡.jpg'),
              title: '宜昌三峡大坝',
              label1: '三峡工程',
              label2: '5A风景区',
              detail: '旅游区以世界上最大的水利枢纽工程——三峡工程为依托，全方位展示工程文化和水利文化，为游客提供游览、科教、休闲、娱乐为一体的多功能服务，将现代工程、自然风光和人文景观有机结合，使之成为国内外友人向往的旅游胜地。'
            },
            {
              id: 9,
              area: '武汉',
              iscultrue: false,
              ishot: true,
              name: '神农架',
              position: '湖北省西北部',
              opentime: '08:00-17:00',
              price: 60,
              url: require('../assets/images/hubei/spots/神农架.jpg'),
              title: '神农架',
              label1: '神农架林区',
              label2: '世界地质公园',
              detail: '地跨东经109°56′～110°58′，北纬31°15′～31°75′，全区总面积3253平方公里，坐拥联合国“世界地质公园”，辖6镇2乡和1个国家级自然保护区、1个国有森工企业林业管理局、1个国家湿地公园，林地占85%以上。'
            },
            {
              id: 10,
              area: '荆门',
              iscultrue: true,
              ishot: false,
              name: '明显陵',
              position: '湖北省钟祥市城东北5公里的纯德山上',
              opentime: '08:00-17:00',
              price: 80,
              url: require('../assets/images/hubei/spots/明显陵.jpg'),
              title: '荆门明显陵',
              label1: '明代帝陵',
              label2: '钟祥市',
              detail: '明显陵位于湖北省钟祥市城东北5公里的纯德山上，始建于明正德十四年（1519年），迄于明嘉靖四十五年（1566年），历时47年建成，是明世宗嘉靖皇帝的父亲恭睿献皇帝朱祐杬、母亲慈孝献皇后的合葬墓。'
            },
            {
              id: 11,
              area: '咸宁',
              iscultrue: true,
              ishot: false,
              name: '咸宁温泉',
              position: '湖北省咸宁市咸宁月亮湾特1号万豪温泉谷',
              opentime: '9:00-24:00',
              price: '150',
              url: require('../assets/images/hubei/spots/温泉.jpg'),
              title: '咸宁温泉',
              label1: '温泉虹影',
              label2: '桂花之乡',
              detail: '咸宁温泉又名沸潭，水温达到50℃，被称为“温泉虹影”。这里共有泉眼20余处，经常沐浴可防治皮肤病、风湿性关节炎、肠胃病、神经炎、溃疡病、感冒。除了温泉，咸宁的星星竹海也是很有名的。'
            },
            {
              id: 12,
              area: '咸宁',
              iscultrue: true,
              ishot: false,
              name: '隐水洞',
              position: '咸宁通山县大畈境内',
              opentime: '08:00-17:00',
              price: 80,
              url: require('../assets/images/hubei/spots/隐水洞.jpg'),
              title: '咸宁隐水洞',
              label1: '通山县大畈境内',
              label2: '咸宁市',
              detail: '与中国已发现的地下河洞穴相比，通山隐水洞兼备现代地下河与古河道景观，其景观质量及分布结构较好。如已开发的辽宁本溪水洞、贵州安顺龙宫、广西桂林冠岩、荔蒲丰鱼岩、重庆张关水洞等，不是地下河景观较少，便是景观仅分布在地下河的上层古通道。'
            },
            {
              id: 13,
              area: '荆州',
              iscultrue: true,
              ishot: false,
              name: '荆州古城墙',
              position: '湖北省荆州市荆州城张居正街2号',
              opentime: '08:30-17:30',
              price: '16',
              url: require('../assets/images/hubei/spots/城墙.jpg'),
              title: '荆州古城墙',
              label1: '重点文物保护单位',
              label2: '荆州市',
              detail: '荆州城墙位于湖北省荆州市荆州区。现城墙为清顺治三年（1646年）依旧基重建，墙高近9米，厚约10米，周长11.03公里，东西长，南北短。城墙、城门、敌台、堞垛等均保存较好。为全国重点文物保护单位。'
            },
            {
              id: 14,
              area: '恩施',
              iscultrue: false,
              ishot: true,
              name: '恩施大峡谷',
              position: '湖北省恩施市境内',
              opentime: '08:00-17:00',
              price: 90,
              url: require('../assets/images/hubei/spots/大峡谷.jpg'),
              title: '恩施大峡谷',
              label1: '5A风景区',
              label2: '恩施市',
              detail: '恩施大峡谷，位于世界硒都——湖北省恩施市境内，被专家赞誉可与美国科罗拉多大峡谷媲美，是清江大峡谷一段。峡谷全长108公里，面积达300平方公里。'
            },
            {
              id: 15,
              area: '襄阳',
              iscultrue: true,
              ishot: false,
              name: '隆中风景区',
              position: '湖北省襄阳市距襄阳城约13公里',
              opentime: '08:00-17:00',
              price: 60,
              url: require('../assets/images/hubei/spots/古隆中.jpg'),
              title: '襄阳隆中风景区',
              label1: '襄阳市',
              label2: '历史文化名城',
              detail: '隆中风景名胜区位于中国历史文化名城湖北省襄阳市，距襄阳城约13公里，总面积209平方公里。晋永兴年间至今，已有一千七百多年历史。包括古隆中、水镜庄、承恩寺、七里山、鹤子川等五大景区。因诸葛亮“躬耕陇亩”刘备“三顾茅庐”引发《隆中对策》被世人称为智者摇篮，三分天下的策源地。'
            },
            {
              id: 16,
              area: '咸宁',
              iscultrue: true,
              ishot: false,
              name: '赤壁古战场',
              position: '湖北省赤壁市南岸',
              opentime: '08:00-17:00',
              price: '70',
              url: require('../assets/images/hubei/spots/赤壁.jpg'),
              title: '赤壁古战场',
              label1: '赤壁市',
              label2: '历史文化名城',
              detail: '三国赤壁古战场，赤壁之战发生地，现位于湖北省赤壁市南岸（位于长江中游南岸，北依武汉，南临岳阳）是我国古代“以少胜多，以弱胜强”的七大战役中唯一尚存原貌的古战场。'
            },
            {
              id: 17,
              area: '黄冈',
              iscultrue: true,
              ishot: false,
              name: '湖北大别山',
              position: '湖北省黄冈市罗田、英山两县北部',
              opentime: '08:00-17:00',
              price: 50,
              url: require('../assets/images/hubei/spots/大别山.jpg'),
              title: '黄冈大别山风景区',
              label1: '黄冈市',
              label2: '自然保护区',
              detail: '湖北大别山国家级自然保护区位于湖北省黄冈市罗田、英山两县北部，东接安徽鹞落坪国家级自然保护区，北与安徽天马国家级自然保护区相连，西与麻城毗邻，南临罗田、英山县城。湖北大别山国家级自然保护区主要保护对象为森林生态系统、珍惜濒危野生动植物及其栖息地，是森林生态系统类型自然保护区。'
            },
            {
              id: 18,
              area: '咸宁',
              iscultrue: true,
              ishot: false,
              name: '九宫山闯王陵',
              position: '咸宁九宫山',
              opentime: '08:00-17:00',
              price: 80,
              url: require('../assets/images/hubei/spots/九宫山.jpg'),
              title: '咸宁九宫山闯王陵',
              label1: '咸宁市',
              label2: '历史文化名城',
              detail: '南虹桥在通城县城东南16公里鲤港河上。因形若长虹坐落塘湖之南而名。清咸丰七年（1857年）建，为邑中著名石桥之一。青石叠砌，五拱并置，长40米，高5米，宽5米，设计大方，结构坚实，卓跞宏伟。经历百余年风雨，迄今依然如故。碧波荡漾，夹岸树木，烟霞掩映，异景别趣。'
            },
            {
              id: 19,
              area: '宜昌',
              iscultrue: true,
              ishot: false,
              name: '清江画廊',
              position: '湖北省宜昌市的长阳土家族自治县境内',
              opentime: '08:00-17:00',
              price: 70,
              url: require('../assets/images/hubei/spots/清江画廊.jpg'),
              title: '宜昌清江画廊',
              label1: '宜昌市',
              label2: '5A风景区',
              detail: '清江画廊风景区位于湖北省宜昌市的长阳土家族自治县境内，涵盖隔河岩水电站大坝以上至湖北省恩施土家族苗族自治州巴东县水布垭镇盐池温泉，沿清江一线的所有旅游景观及景区景点。重点打造了清江古城、倒影峡、仙人寨、武落钟离山等景点'
            },
            {
              id: 20,
              area: '恩施',
              iscultrue: false,
              ishot: true,
              name: '恩施土司城',
              position: '恩施市西北，小地名叫土司路的地方，距市政府所在地500米',
              opentime: '08:00-17:00',
              price: 50,
              url: require('../assets/images/hubei/spots/土司.jpg'),
              title: '恩施土司城',
              label1: '恩施市',
              label2: '土家族土司文化',
              detail: '恩施土司城。恩施土司城坐落在恩施市西北，小地名叫土司路的地方，距市政府所在地500米。属全国唯一一座规模最大、工程最宏伟、风格最独特、景观最靓丽的土家族地区土司文化标志性工程。'
            },
            {
              id: 21,
              area: '武汉',
              iscultrue: false,
              ishot: true,
              name: '三峡人家',
              position: '宜昌三峡',
              opentime: '08:00-17:00',
              price: 80,
              url: require('../assets/images/hubei/spots/三峡人家.jpg'),
              title: '宜昌三峡人家',
              label1: '宜昌市',
              label2: '5A风景区',
              detail: '三峡人家，依山傍水，风情如画：传统的三峡吊脚楼点缀于山水之间，久违的古帆船、乌篷船安静地泊在三峡人家门前，溪边少女挥着棒槌在清洗衣服，江面上悠然的渔家在撒网打鱼……千百年来流传不衰的各种习俗风情体现着峡江人民的质朴好客。'
            },
            {
              id: 22,
              area: '荆门',
              iscultrue: false,
              ishot: true,
              name: '荆门京山美人谷',
              position: '湖北荆门新九寨',
              opentime: '08:00-17:00',
              price: 120,
              url: require('../assets/images/hubei/spots/美人谷.jpg'),
              title: '荆门京山美人谷',
              label1: '湖北新九寨',
              label2: '所谓伊人，在水一方',
              detail: '峡谷纵深八百余米，谷底怪石嶙峋；这里林涛阵阵，清风怡人，鸟语花香，美女翩翩；这里天卷云霞，层峦叠翠“蒹葭苍苍，白露为霜，所谓伊人，在水一方”美人谷集中体现了传统、纯美的中国古典山水诗意。身处其中，一步一景，恍如世外桃源，人间仙境。'
            },
            {
              id: 23,
              area: '武汉',
              iscultrue: true,
              ishot: false,
              name: '武汉首义文化',
              position: '武汉市',
              opentime: '08:00-17:00',
              price: 0,
              url: require('../assets/images/hubei/spots/首义.jpg'),
              title: '武汉首义文化',
              label1: '武汉市',
              label2: '敢为天下先',
              detail: '首义文化区的总体定位是：建设成为展现辛亥革命武昌首义历史遗迹和发生过程、缅怀首义“敢为天下先”创新精神的辛亥革命国家级纪念重地，融历史、文化、纪念、旅游等多项功能为一体的历史文化旅游区，服务武昌旧城、辐射周边的城市绿心和武昌旧城生活圈的主要节点，打造武汉城市建设新靓点、城市文化新品牌和凝聚中华民族革命精神的重要载体。'
            },
            {
              id: 24,
              area: '武汉',
              iscultrue: false,
              ishot: true,
              name: '归元禅市',
              position: '湖北省武汉市汉阳区归元寺路',
              opentime: '08:00-17:00',
              price: 60,
              url: require('../assets/images/hubei/spots/归元寺.jpg'),
              title: '武汉归元禅寺',
              label1: '汉西一境',
              label2: '武汉市',
              detail: '归元禅寺位于湖北省武汉市汉阳区归元寺路，由白光法师于清顺治十五年（公元1658年）兴建。占地153亩，有殿舍200余间，各类佛教经典7000余卷。归元禅寺属于佛教禅宗五家七宗之一的曹洞宗，故称归元禅寺。归元禅寺又被称为“汉西一境”。'
            },
            {
              id: 25,
              area: '武汉',
              iscultrue: false,
              ishot: true,
              name: '武汉长江大桥',
              position: ' 湖北省武汉市',
              opentime: '全天',
              price: 0,
              url: require('../assets/images/hubei/spots/长江大桥.png'),
              title: '',
              label1: '',
              label2: '武汉市',
              detail: ''
            },
            {
              id: 26,
              area: '咸宁',
              iscultrue: false,
              ishot: true,
              name: '咸宁星星竹海',
              position: ' 湖北省咸宁市汀泗桥镇',
              opentime: '07:00-18:00',
              price: 130,
              url: require('../assets/images/hubei/spots/咸宁星星竹海.png'),
              title: '',
              label1: '',
              label2: '咸宁市',
              detail: ''
            },
            {
              id: 27,
              area: '荆州',
              iscultrue: false,
              ishot: true,
              name: '荆州洈水风景区',
              position: ' 湖北省荆州市松滋市洈水镇',
              opentime: '7:00-18:00',
              price: 28,
              url: require('../assets/images/hubei/spots/荆州洈水风景区.png'),
              title: '',
              label1: '',
              label2: '荆州市',
              detail: ''
            },
            {
              id: 29,
              area: '荆州',
              iscultrue: false,
              ishot: true,
              name: '荆州九老仙都',
              position: '湖北省荆州市荆州古城内',
              opentime: '全天',
              price: 65,
              url: require('../assets/images/hubei/spots/荆州九老仙都.png'),
              title: '',
              label1: '',
              label2: '荆州市',
              detail: ''
            },
            {
              id: 30,
              area: '黄石',
              iscultrue: false,
              ishot: true,
              name: '黄石雷山风景区',
              position: ' 湖北省黄石市雷山风景区',
              opentime: '9:00-18:00',
              price: 28,
              url: require('../assets/images/hubei/spots/黄石雷山风景区.png'),
              title: '',
              label1: '',
              label2: '黄石市',
              detail: ''
            },
            {
              id: 31,
              area: '黄石',
              iscultrue: false,
              ishot: true,
              name: '黄石仙岛湖',
              position: ' 湖北省黄石市阳新县仙岛湖景区',
              opentime: '08:00-18:00',
              price: 28,
              url: require('../assets/images/hubei/spots/黄石仙岛湖.png'),
              title: '',
              label1: '',
              label2: '黄石市',
              detail: ''
            }
          ],
          sfood1: [
            { id: 1, start: 0, name: '蔡林记热干面', area: '武汉', url: require('../assets/images/hubei/foods/food1/欢喜坨.png'), detail: '' },
            { id: 2, start: 0, name: '糍粑', area: '武汉', url: require('../assets/images/hubei/foods/food1/糍粑.png'), detail: '' },
            { id: 3, start: 0, name: '欢喜坨', area: '武汉', url: require('../assets/images/hubei/foods/food1/欢喜坨.png'), detail: '' },
            { id: 4, start: 1, name: '三鲜豆皮', area: '武汉', url: require('../assets/images/hubei/foods/food1/老通城三鲜豆皮.png'), detail: '' },
            { id: 5, start: 1, name: '烧麦', area: '武汉', url: require('../assets/images/hubei/foods/food1/顺香居烧麦.png'), detail: '' },
            { id: 6, start: 0, name: '福庆和牛肉豆丝', area: '武汉', url: require('../assets/images/hubei/foods/food1/福庆和牛肉豆丝.png'), detail: '' },
            { id: 7, start: 0, name: '汉口精武鸭脖', area: '荆州', url: require('../assets/images/hubei/foods/food1/汉口精武鸭脖.png'), detail: '' },
            { id: 8, start: 0, name: '糊米酒', area: '荆州', url: require('../assets/images/hubei/foods/food1/糊米酒.png'), detail: '' },
            { id: 9, start: 0, name: '四季美汤包', area: '荆州', url: require('../assets/images/hubei/foods/food1/四季美汤包.png'), detail: '' },
            { id: 10, start: 0, name: '田启恒糊汤粉', area: '襄阳', url: require('../assets/images/hubei/foods/food1/田启恒糊汤粉.png'), detail: '' },
            { id: 11, start: 0, name: '小桃园煨汤', area: '襄阳', url: require('../assets/images/hubei/foods/food1/小桃园煨汤.png'), detail: '' },
            { id: 12, start: 0, name: '谢荣德面窝', area: '襄阳', url: require('../assets/images/hubei/foods/food1/谢荣德面窝.png'), detail: '' }
          ],
          sfood2: [
            { id: 1, start: 0, name: '武昌鱼', area: '武汉', spot: '黄鹤楼周边', url: require('../assets/images/hubei/foods/food2/武昌鱼.jpg'), detail: '' },
            { id: 2, start: 0, name: '精武鸭脖', area: '武汉', spot: '黄鹤楼周边', url: require('../assets/images/hubei/foods/food2/精武鸭脖.jpg'), detail: '' },
            { id: 3, start: 1, name: '热干面', area: '武汉', spot: '黄鹤楼周边', url: require('../assets/images/hubei/foods/food2/热干面.jpg'), detail: '' },
            { id: 4, start: 0, name: '面窝', area: '武汉', spot: '户部巷周边', url: require('../assets/images/hubei/foods/food2/面窝.jpg'), detail: '' },
            { id: 5, start: 0, name: '公婆饼', area: '武汉', spot: '户部巷周边', url: require('../assets/images/hubei/foods/food2/公婆饼.jpg'), detail: '' },
            { id: 6, start: 0, name: '豆皮', area: '武汉', spot: '户部巷周边', url: require('../assets/images/hubei/foods/food2/豆皮.png'), detail: '' },
            { id: 7, start: 0, name: '锅盔', area: '荆州', spot: '荆州古城墙周边', url: require('../assets/images/hubei/foods/food2/锅盔.jpg'), detail: '' },
            { id: 8, start: 0, name: '鱼糕', area: '荆州', spot: '荆州古城墙周边', url: require('../assets/images/hubei/foods/food2/鱼糕.jpg'), detail: '' },
            { id: 9, start: 0, name: '八宝饭', area: '荆州', spot: '荆州古城墙周边', url: require('../assets/images/hubei/foods/food2/八宝饭.jpg'), detail: '' },
            { id: 10, start: 0, name: '牛肉面', area: '襄阳', spot: '襄阳宜城周边', url: require('../assets/images/hubei/foods/food2/牛肉面.jpg'), detail: '' },
            { id: 11, start: 0, name: '宜城大虾', area: '襄阳', spot: '襄阳宜城周边', url: require('../assets/images/hubei/foods/food2/宜城大虾.jpg'), detail: '' },
            { id: 12, start: 0, name: '贺胜鸡汤', area: '咸宁', spot: '咸宁九宫山周边', url: require('../assets/images/hubei/foods/food2/贺胜鸡汤.jpg'), detail: '' },
            { id: 13, start: 0, name: '崇阳小麻花', area: '咸宁', spot: '咸宁九宫山周边', url: require('../assets/images/hubei/foods/food2/崇阳小麻花.jpg'), detail: '' },
            { id: 14, start: 0, name: '桂花酒', area: '咸宁', spot: '咸宁九宫山周边', url: require('../assets/images/hubei/foods/food2/桂花酒.jpg'), detail: '' },
            { id: 15, start: 0, name: '米酒', area: '孝感', spot: '孝感董永故里周边', url: require('../assets/images/hubei/foods/food2/米酒.jpg'), detail: '' },
            { id: 16, start: 0, name: '麻糖', area: '孝感', spot: '孝感董永故里周边', url: require('../assets/images/hubei/foods/food2/麻糖.jpg'), detail: '' },
            { id: 17, start: 0, name: '云梦鱼面', area: '孝感', spot: '孝感董永故里周边', url: require('../assets/images/hubei/foods/food2/云梦鱼面.jpg'), detail: '' },
            { id: 18, start: 0, name: '港饼', area: '黄石', spot: '黄石磁湖风景区周边', url: require('../assets/images/hubei/foods/food2/港饼.jpg'), detail: '' },
            { id: 19, start: 0, name: '松花皮蛋', area: '黄石', spot: '黄石磁湖风景区周边', url: require('../assets/images/hubei/foods/food2/松花皮蛋.jpg'), detail: '' },
            { id: 20, start: 0, name: '河口螃蟹', area: '黄石', spot: '黄石磁湖风景区周边', url: require('../assets/images/hubei/foods/food2/河口螃蟹.jpg'), detail: '' }
          ],
          sshop: [
            {
              id: 1,
              area: '武汉',
              name: '武汉蔡林记',
              food: '热干面',
              price: 15,
              good: 5,
              opentime: '周一~周日8:00-22:00',
              shopurl: require('../assets/images/hubei/shops/蔡林记.jpg'),
              foodurl: require('../assets/images/hubei/foods/food2/热干面.jpg'),
              detail: '蔡林记是一家经营热干面系列小吃为特色，近百年的老字号小吃面馆。其热干面，晶洁爽口，味道鲜美，深受广大市民的赞赏，享有武汉名小吃的美誉。而今，热干面已遍及江城，历久不衰，武汉人吃早餐，更是离不开这一种具特色的面食。'
            },
            {
              id: 2,
              area: '武汉',
              name: '老通城',
              food: '三鲜豆皮',
              price: 15,
              good: 3,
              opentime: '周一~周日8:00-22:00',
              shopurl: require('../assets/images/hubei/shops/老通城.jpg'),
              foodurl: require('../assets/images/hubei/shops/豆皮.png'),
              detail: '“老通城”是坐落在汉口中山大道大智路口一家大型酒楼的名字，以经营著名小吃三鲜豆皮驰名，有“豆皮大王”之称。这家酒楼创办于1931年，原址位于古汉口城堡大智门外，过去为城乡通道，故名“通城甜食店”。抗日胜利后复业，改称”老通城甜食店“。'
            },
            {
              id: 3,
              area: '武汉',
              name: '武汉五芳斋',
              food: '绿豆糕',
              price: 15,
              good: 5,
              opentime: '周一~周日8:00-22:00',
              shopurl: require('../assets/images/hubei/shops/五芳斋.png'),
              foodurl: require('../assets/images/hubei/shops/绿豆糕.jpg'),
              detail: '武汉五芳斋是武汉的老字号，地处武汉中山大道713号。在汤圆、粽子市场，品牌号召力极强，处于相对垄断的地位。该酒店曾被国家内贸部授予“中华老字号”、“中华餐饮名店”、“全国餐饮绿色食品企业”等称号，该酒店的汤圆、粽子被评为“中国名点”。'
            },
            {
              id: 4,
              area: '武汉',
              name: '贺胜桥正宗刘',
              food: '贺胜桥土鸡汤',
              price: 15,
              good: 4,
              opentime: '周一~周日8:00-22:00',
              shopurl: require('../assets/images/hubei/shops/正宗刘.jpg'),
              foodurl: require('../assets/images/hubei/shops/鸡汤.jpg'),
              detail: '“正宗刘”土鸡汤，是贺胜茶乡美食街鸡汤的起源，正宗酒店是经过30多年苦心经营树立的一个特色品牌。正宗刘土鸡汤是采用农户散养土鸡和茶园优质地下泉水，经祖传秘方精制而成，鸡汤风味独特，入口清醇，性温滋补。在当地非常有名，是地地道道的农家特产食品。'
            },
            {
              id: 5,
              area: '武汉',
              name: '鲍师傅糕点店',
              food: '鲍师傅糕点',
              price: 15,
              good: 4,
              opentime: '周一~周日8:00-22:00',
              shopurl: require('../assets/images/hubei/shops/鲍师傅.jpg'),
              foodurl: require('../assets/images/hubei/shops/糕点.jpg'),
              detail: '鲍师傅糕点是一间主营蛋糕西点的是老字号糕点店。'
            }
          ]
        }
      ]
    }
  },
  mounted() {
    sessionStorage.setItem('citiesinfo', JSON.stringify(this.citiesinfo))
  }
}
</script>
<style scoped lang="scss">
</style>
