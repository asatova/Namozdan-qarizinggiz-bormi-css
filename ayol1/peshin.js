function funk() {
   
    let yil = parseInt(document.getElementById('yil').value);
    let oqigan = parseInt(document.getElementById('oqigan').value);
    let natija = yil + oqigan ;

    if (natija >=2013) {
        document.getElementById('natija').innerHTML = "Juda yaxshi"
    } else if ( natija >= 2012){
        document.getElementById('natija').innerHTML = "3 650 rakat qazo."
        // console.log("tekshirish 1");
    } else if ( natija >= 2011) {
        document.getElementById('natija').innerHTML = "7 300 rakat qazo."
        // console.log("tekshirish 2");
    } else if ( natija >= 2010) {
        document.getElementById('natija').innerHTML = "10 950 rakat qazo."
    } else if ( natija >= 2009) {
        document.getElementById('natija').innerHTML = "14 600 rakat qazo."
    } else if ( natija >= 2008) {
        document.getElementById('natija').innerHTML = "18 250 rakat qazo."
    } else if ( natija >= 2007) {
        document.getElementById('natija').innerHTML = "21 900 rakat qazo."
    } else if ( natija >= 2006) {
        document.getElementById('natija').innerHTML = "25 550 rakat qazo."
    } else if ( natija >= 2005) {
        document.getElementById('natija').innerHTML = "29 200 rakat qazo."
    } else if ( natija >= 2004) {
        document.getElementById('natija').innerHTML = "32 850 rakat qazo."
    } else if ( natija >= 2003) {
        document.getElementById('natija').innerHTML = "36 500 rakat qazo."
    } else if ( natija >= 2002) {
        document.getElementById('natija').innerHTML = "40 150 rakat qazo."
    } else if ( natija >= 2001) {
        document.getElementById('natija').innerHTML = "43 800 rakat qazo."
    } else if ( natija >= 2000) {
        document.getElementById('natija').innerHTML = "47 450 rakat qazo."
    } else if ( natija >= 1999) {
        document.getElementById('natija').innerHTML = "51 100 rakat qazo."
    } else if ( natija >= 1998) {
        document.getElementById('natija').innerHTML = "54 750 rakat qazo."
    } else if ( natija >= 1997) {
        document.getElementById('natija').innerHTML = "58 400 rakat qazo."
    } else if ( natija >= 1996) {
        document.getElementById('natija').innerHTML = "62 050 rakat qazo."
    } else if ( natija >= 1995) {
        document.getElementById('natija').innerHTML = "65 700 rakat qazo."
    } else if ( natija >= 1994) {
        document.getElementById('natija').innerHTML = "69 350 rakat qazo."
    } else if ( natija >= 1993) {
        document.getElementById('natija').innerHTML = "73 000 rakat qazo."
    } else if ( natija >= 1992) {
        document.getElementById('natija').innerHTML = "76 650 rakat qazo."
    } else if ( natija >= 1991) {
        document.getElementById('natija').innerHTML = "80 300 rakat qazo."
    } else if ( natija >= 1990) {
        document.getElementById('natija').innerHTML = "83 950 rakat qazo."
     } else {
        document.getElementById('natija').innerHTML = "Juda ko'p"
    }

    if (oqigan <= 1) {
        document.getElementById('oqigan1').innerHTML = "3 650 rakat o'qidinggiz."
    } else if ( oqigan <= 2){
        document.getElementById('oqigan1').innerHTML = "7 300 rakat o'qidinggiz."
    } else if ( oqigan <= 3) {
        document.getElementById('oqigan1').innerHTML = "10 950 rakat o'qidinggiz."
    } else if ( oqigan <= 4) {
        document.getElementById('oqigan1').innerHTML = "14 600 rakat o'qidinggiz."
    } else if ( oqigan <= 5) {
        document.getElementById('oqigan1').innerHTML = "18 250  rakat o'qidinggiz."
    } else if ( oqigan <= 6) {
        document.getElementById('oqigan1').innerHTML = "21 900  rakat o'qidinggiz."
    } else if ( oqigan <= 7) {
        document.getElementById('oqigan1').innerHTML = "25 550  rakat o'qidinggiz."
    } else if ( oqigan <= 8) {
        document.getElementById('oqigan1').innerHTML = "29 200  rakat o'qidinggiz."
    } else if ( oqigan <= 9) {
        document.getElementById('oqigan1').innerHTML = "32 850  rakat o'qidinggiz."
    } else if ( oqigan <= 10) {
        document.getElementById('oqigan1').innerHTML = "36 500  rakat o'qidinggiz.."
    } else if ( oqigan <= 11) {
        document.getElementById('oqigan1').innerHTML = "40 150  rakat o'qidinggiz.."
    } else if ( oqigan <= 12) {
        document.getElementById('oqigan1').innerHTML = "43 800  rakat o'qidinggiz.."
    } else if ( oqigan <= 13) {
        document.getElementById('oqigan1').innerHTML = "47 450  rakat o'qidinggiz.."
    } else if ( oqigan <= 14) {
        document.getElementById('oqigan1').innerHTML = "51 100  rakat o'qidinggiz.."
    } else if ( oqigan <= 15) {
        document.getElementById('oqigan1').innerHTML = "54 750  rakat o'qidinggiz.."
    } else if ( oqigan <= 16) {
        document.getElementById('oqigan1').innerHTML = "58 400  rakat o'qidinggiz.."
    } else if ( oqigan <= 17) {
        document.getElementById('oqigan1').innerHTML = "62 050  rakat o'qidinggiz.."
    } else if ( oqigan <= 18) {
        document.getElementById('oqigan1').innerHTML = "65 700  rakat o'qidinggiz.."
    } else if ( oqigan <= 19) {
        document.getElementById('oqigan1').innerHTML = "69 350  rakat o'qidinggiz.."
    } else if ( oqigan <= 20) {
        document.getElementById('oqigan1').innerHTML = "73 000  rakat o'qidinggiz.."
    } else {
        document.getElementById('oqigan1').innerHTML = "Juda yaxshi"
    }
}