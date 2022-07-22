function funk() {
   
    let yil = parseInt(document.getElementById('yil').value);
    let oqigan = parseInt(document.getElementById('oqigan').value);
    let natija = yil + oqigan ;

    if (natija >=2013) {
        document.getElementById('natija').innerHTML = "Juda yaxshi"
    } else if ( natija >= 2012){
        document.getElementById('natija').innerHTML = "11 680 rakat qazo."
        // console.log("tekshirish 1");
    } else if ( natija >= 2011) {
        document.getElementById('natija').innerHTML = "23 360 rakat qazo."
        // console.log("tekshirish 2");
    } else if ( natija >= 2010) {
        document.getElementById('natija').innerHTML = "35 040 rakat qazo."
    } else if ( natija >= 2009) {
        document.getElementById('natija').innerHTML = "46 720 rakat qazo."
    } else if ( natija >= 2008) {
        document.getElementById('natija').innerHTML = "58 400 rakat qazo."
    } else if ( natija >= 2007) {
        document.getElementById('natija').innerHTML = "70 080 rakat qazo."
    } else if ( natija >= 2006) {
        document.getElementById('natija').innerHTML = "81 760 rakat qazo."
    } else if ( natija >= 2005) {
        document.getElementById('natija').innerHTML = "93 440 rakat qazo."
    } else if ( natija >= 2004) {
        document.getElementById('natija').innerHTML = "105 120 rakat qazo."
    } else if ( natija >= 2003) {
        document.getElementById('natija').innerHTML = "116 800 rakat qazo."
    } else if ( natija >= 2002) {
        document.getElementById('natija').innerHTML = "128 480 rakat qazo."
    } else if ( natija >= 2001) {
        document.getElementById('natija').innerHTML = "140 160 rakat qazo."
    } else if ( natija >= 2000) {
        document.getElementById('natija').innerHTML = "151 840 rakat qazo."
    } else if ( natija >= 1999) {
        document.getElementById('natija').innerHTML = "163 520 rakat qazo."
    } else if ( natija >= 1998) {
        document.getElementById('natija').innerHTML = "175 200 rakat qazo."
    } else if ( natija >= 1997) {
        document.getElementById('natija').innerHTML = "186 880 rakat qazo."
    } else if ( natija >= 1996) {
        document.getElementById('natija').innerHTML = "198 560 rakat qazo."
    } else if ( natija >= 1995) {
        document.getElementById('natija').innerHTML = "210 240 rakat qazo."
    } else if ( natija >= 1994) {
        document.getElementById('natija').innerHTML = "221 920 rakat qazo."
    } else if ( natija >= 1993) {
        document.getElementById('natija').innerHTML = "233 600 rakat qazo."
    } else if ( natija >= 1992) {
        document.getElementById('natija').innerHTML = "245 280 rakat qazo."
    } else if ( natija >= 1991) {
        document.getElementById('natija').innerHTML = "256 960 rakat qazo."
    } else if ( natija >= 1990) {
        document.getElementById('natija').innerHTML = "268 640 rakat qazo."
     } else {
        document.getElementById('natija').innerHTML = "Juda ko'p"
    }

    if ( oqigan <= 1 ) {
        document.getElementById('oqigan1').innerHTML = "11 680 rakat o'qidinggiz"
     } else if ( oqigan <= 2) {
        document.getElementById('oqigan1').innerHTML = "23 360 rakat o'qidinggiz"
     } else if ( oqigan <= 3) {
        document.getElementById('oqigan1').innerHTML = "35 040 rakat o'qidinggiz"
     } else if ( oqigan <= 4 ) {
        document.getElementById('oqigan1').innerHTML = "46 720 rakat o'qidinggiz"
     } else if ( oqigan <= 5 ) {
        document.getElementById('oqigan1').innerHTML = "58 400 rakat o'qidinggiz"
     } else if ( oqigan <= 6 ) {
        document.getElementById('oqigan1').innerHTML = "70 080 rakat o'qidinggiz"
     } else if ( oqigan <= 7 ) {
        document.getElementById('oqigan1').innerHTML = "81 760 rakat o'qidinggiz"
     } else if ( oqigan <= 8 ) {
        document.getElementById('oqigan1').innerHTML = "93 440 rakat o'qidinggiz"
     } else if ( oqigan <= 9 ) {
        document.getElementById('oqigan1').innerHTML = "105 120 rakat o'qidinggiz"
     } else if ( oqigan <= 10 ) {
        document.getElementById('oqigan1').innerHTML = "116 800 rakat o'qidinggiz"
     } else if ( oqigan <= 11 ) {
        document.getElementById('oqigan1').innerHTML = "128 480 rakat o'qidinggiz."
     } else if ( oqigan <= 12 ) {
        document.getElementById('oqigan1').innerHTML = "140 160 rakat o'qidinggiz"
     } else if ( oqigan <= 13 ) {
        document.getElementById('oqigan1').innerHTML = "151 840 rakat o'qidinggiz"
     } else if ( oqigan <= 14 ) {
        document.getElementById('oqigan1').innerHTML = "163 520 rakat o'qidinggiz"
     } else if ( oqigan <= 15 ) {
        document.getElementById('oqigan1').innerHTML = "175 200 rakat o'qidinggiz"
     } else if ( oqigan <= 16 ) {
        document.getElementById('oqigan1').innerHTML = "186 880 rakat o'qidinggiz"
     } else if ( oqigan <= 17 ) {
        document.getElementById('oqigan1').innerHTML = "198 560 rakat o'qidinggiz"
     } else if ( oqigan <= 18 ) {
        document.getElementById('oqigan1').innerHTML = "210 240 rakat o'qidinggiz"
     } else if ( oqigan <= 19 ) {
        document.getElementById('oqigan1').innerHTML = "221 920 rakat o'qidinggiz"
     } else if ( oqigan <= 20 ) {
        document.getElementById('oqigan1').innerHTML = "233 600 rakat o'qidinggiz"
     } else {
        document.getElementById('oqigan1').innerHTML = "Juda yaxshi"

     }
}