function vadekrediHesapla()
{

    var cekilecekTutar,vadeSayisi;

    var aylikTaksit,odenecekToplamTutar;

    cekilecekTutar=document.getElementById("Kredi").value;

    var liste= document.getElementById("Vade");

    vadeSayisi=liste.options[liste.selectedIndex].value;


    if(vadeSayisi==12)
    {

        odenecekToplamTutar=cekilecekTutar*1.2;
    }

    else if(vadeSayisi==24)
    {

        odenecekToplamTutar=cekilecekTutar*1.3;
    }

    else if(vadeSayisi==36)
    {

        odenecekToplamTutar=cekilecekTutar*1.4;
    }

    else if(vadeSayisi==48)
    {

        odenecekToplamTutar=cekilecekTutar*1.5;
    }

    aylikTaksit=odenecekToplamTutar/vadeSayisi;

    document.querySelector("#sonuc").innerHTML="Toplam Geri Ödeme: "+odenecekToplamTutar+"<br>"+
    "Aylık Vade Ücreti: "+aylikTaksit.toFixed(2);


}