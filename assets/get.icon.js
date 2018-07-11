var __img_host__ = "http://pb47lh0dj.bkt.clouddn.com/tvlogo/";

var __cctv__ = {
    "11": "cctv11",
    "12": "cctv12",
    "13": "cctv13",
    "14": "cctv14",
    "15": "cctv15",
    "1": "cctv1",
    "2": "cctv2",
    "3": "cctv3",
    "4": "cctv4",
    "5+": "cctv5plus",
    "5 plus": "cctv5plus",
    "5": "cctv5",
    "6": "cctv6",
    "7": "cctv7",
    "8": "cctv8",
    "9": "cctv9",
    "10": "cctv10",
}

var __dict_json__ = {
    "CCTV": __cctv__,
    "cctv": __cctv__,
    "辽宁": "liaoning",
    "山东": "shandong",
    "安徽": "anhui",
    "北京": "beijing",
    "重庆": "chongqing",
    "东方": "dongfang",
    "甘肃": "gansu",
    "广东": "guangdong",
    "广西": "guangxi",
    "贵州": "guizhou",
    "河北": "hebei",
    "黑龙": "heilongjiang",
    "湖北": "hubei",
    "湖南": "hunan",
    "江苏": "jiangsu",
    "江西": "jiangxi",
    "教育": "jiaoyu",
    "金鹰": "jinying",
    "卡酷": "kaku",
    "内蒙": "neimenggu",
    "宁夏": "ningxia",
    "青海": "qinghai",
    "山西": "shanxi",
    "深圳": "shenzhen",
    "四川": "sichuan",
    "天津": "tianjin",
    "完美": "wanmei",
    "新疆": "xinjiang",
    "浙江": "zhejiang"
}


function __gen_url(name) {
    return __img_host__ + name + ".png"
}

function complement_tv_icon(name) {
    for (var key in __dict_json__) {
        if (name.indexOf(key) >= 0) {
            var value = __dict_json__[key];
            if (typeof(value) === "string") {
                return __gen_url(value)
            } else {
                for (var c_key in value) {
                    if (name.indexOf(c_key) >= 0) {
                        return __gen_url(value[c_key]);
                    }
                }
            }

        }
    }
    return __gen_url("default");
}