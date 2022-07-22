function funk() {
 
    let yil = parseInt(document.getElementById('yil').value);
    let oqigan = parseInt(document.getElementById('oqigan').value);
    let natija = yil + oqigan ;

    if (natija >=2013) {
        document.getElementById('natija').innerHTML = "Juda yaxshi"
    } else if ( natija >= 2012){
        document.getElementById('natija').innerHTML = "1 460 rakat qazo."
        // console.log("tekshirish 1");
    } else if ( natija >= 2011) {
        document.getElementById('natija').innerHTML = "2 920 rakat qazo."
        // console.log("tekshirish 2");
    } else if ( natija >= 2010) {
        document.getElementById('natija').innerHTML = "4 380 rakat qazo."
    } else if ( natija >= 2009) {
        document.getElementById('natija').innerHTML = "5 840 rakat qazo."
    } else if ( natija >= 2008) {
        document.getElementById('natija').innerHTML = "7 300 rakat qazo."
    } else if ( natija >= 2007) {
        document.getElementById('natija').innerHTML = "8 760 rakat qazo."
    } else if ( natija >= 2006) {
        document.getElementById('natija').innerHTML = "10 220 rakat qazo."
    } else if ( natija >= 2005) {
        document.getElementById('natija').innerHTML = "11 680 rakat qazo."
    } else if ( natija >= 2004) {
        document.getElementById('natija').innerHTML = "13 140 rakat qazo."
    } else if ( natija >= 2003) {
        document.getElementById('natija').innerHTML = "14 160 rakat qazo."
    } else if ( natija >= 2002) {
        document.getElementById('natija').innerHTML = "16 060 rakat qazo."
    } else if ( natija >= 2001) {
        document.getElementById('natija').innerHTML = "17 520 rakat qazo."
    } else if ( natija >= 2000) {
        document.getElementById('natija').innerHTML = "18 980 rakat qazo."
    } else if ( natija >= 1999) {
        document.getElementById('natija').innerHTML = "20 440 rakat qazo."
    } else if ( natija >= 1998) {
        document.getElementById('natija').innerHTML = "21 900 rakat qazo."
    } else if ( natija >= 1997) {
        document.getElementById('natija').innerHTML = "23 360 rakat qazo."
    } else if ( natija >= 1996) {
        document.getElementById('natija').innerHTML = "24 820 rakat qazo."
    } else if ( natija >= 1995) {
        document.getElementById('natija').innerHTML = "26 280 rakat qazo."
    } else if ( natija >= 1994) {
        document.getElementById('natija').innerHTML = "27 740 rakat qazo."
    } else if ( natija >= 1993) {
        document.getElementById('natija').innerHTML = "29 200 rakat qazo."
    } else if ( natija >= 1992) {
        document.getElementById('natija').innerHTML = "30 660 rakat qazo."
    } else if ( natija >= 1991) {
        document.getElementById('natija').innerHTML = "32 120 rakat qazo."
    } else if ( natija >= 1990) {
        document.getElementById('natija').innerHTML = "33 580 rakat qazo."
     } else {
        document.getElementById('natija').innerHTML = "Juda ko'p"
    }

    if (oqigan <= 1) {
        document.getElementById('oqigan1').innerHTML = "1 460 rakat o'qidinggiz."
    } else if ( oqigan <= 2){
        document.getElementById('oqigan1').innerHTML = "2 920 rakat o'qidinggiz."
        // console.log("tekshirish 1");
    } else if ( oqigan <= 3) {
        document.getElementById('oqigan1').innerHTML = "4 380 rakat o'qidinggiz."
        // console.log("tekshirish 2");
    } else if ( oqigan <= 4) {
        document.getElementById('oqigan1').innerHTML = "5 840 rakat o'qidinggiz."
    } else if ( oqigan <= 5) {
        document.getElementById('oqigan1').innerHTML = "7 300 rakat o'qidinggiz."
    } else if ( oqigan <= 6) {
        document.getElementById('oqigan1').innerHTML = "8 760 rakat o'qidinggiz."
    } else if ( oqigan <= 7) {
        document.getElementById('oqigan1').innerHTML = "10 220 rakat o'qidinggiz."
    } else if ( oqigan <= 8) {
        document.getElementById('oqigan1').innerHTML = "11 680 rakat o'qidinggiz."
    } else if ( oqigan <= 9) {
        document.getElementById('oqigan1').innerHTML = "13 140 rakat o'qidinggiz."
    } else if ( oqigan <= 10) {
        document.getElementById('oqigan1').innerHTML = "14 160 rakat o'qidinggiz.."
    } else if ( oqigan <= 11) {
        document.getElementById('oqigan1').innerHTML = "16 060 rakat o'qidinggiz.."
    } else if ( oqigan <= 12) {
        document.getElementById('oqigan1').innerHTML = "17 520 rakat o'qidinggiz.."
    } else if ( oqigan <= 13) {
        document.getElementById('oqigan1').innerHTML = "18 980 rakat o'qidinggiz.."
    } else if ( oqigan <= 14) {
        document.getElementById('oqigan1').innerHTML = "20 440 rakat o'qidinggiz.."
    } else if ( oqigan <= 15) {
        document.getElementById('oqigan1').innerHTML = "21 900 rakat o'qidinggiz.."
    } else if ( oqigan <= 16) {
        document.getElementById('oqigan1').innerHTML = "23 360 rakat o'qidinggiz.."
    } else if ( oqigan <= 17) {
        document.getElementById('oqigan1').innerHTML = "24 820 rakat o'qidinggiz.."
    } else if ( oqigan <= 18) {
        document.getElementById('oqigan1').innerHTML = "26 280 rakat o'qidinggiz.."
    } else if ( oqigan <= 19) {
        document.getElementById('oqigan1').innerHTML = "27 740 rakat o'qidinggiz.."
    } else if ( oqigan <= 20) {
        document.getElementById('oqigan1').innerHTML = "29 200 rakat o'qidinggiz.."
    } else {
        document.getElementById('oqigan1').innerHTML = "Juda yaxshi"
    }
}