<script>
//keszito()–Bemeneti paraméterek száma: 0

function keszito() {
document.write("Név: Ladocsi Tamás <br> Csoport: Junior Frontend <br>Csapat: #11<br><hr>");
}

keszito()

//2.feladat: hatvanyozo()–Bemeneti paraméterek száma: 2(szam és hatvány)

function hatvanyozo(szam1,szam2) {

let hatvanyertek=Math.pow(szam1,szam2)
return hatvanyertek

}
function eredm(szam,kitevo){
document.write(szam+":"+kitevo+"<br><hr>");
}

eredm("A 2, 3. hatványa", hatvanyozo(2,3));

//3. feladat: parosLetrehoz()–Bemeneti paraméterek száma:2(alsó és felső határ)

function parosLetrehoz(ah,fh){
return (Math.round(Math.random()*(fh-ah))+ah)*2;
}
document.write(parosLetrehoz(1,50));
document.write("<br><hr>")

//4. feladat: testTomegIndex()–Bemeneti paraméterek száma: 2(suly és magasság)

function testTomegIndex(suly,magassag){
let TTI=suly/(magassag*magassag);
if(TTI<16){
	document.write(`${TTI} esetén, súlyos soványság<br>`);
}
else if(TTI<17){
	document.write(`${TTI} esetén, mérsékelt soványság<br>`);
}
else if(TTI<18.5){
	document.write(`${TTI} esetén, enyhe soványság<br>`);
}
else if(TTI<25){
	document.write(`${TTI} esetén, normális testsúly<br>`);
}
else if(TTI<30){
	document.write(`${TTI} esetén, túlsúlyos<br>`);
}
else if(TTI<35){
	document.write(`${TTI} esetén, I. fokú elhízás<br>`);
}
else if(TTI<40){
	document.write(`${TTI} esetén, II. fokú elhízás<br>`);
}
else{
	document.write(`${TTI} esetén, III. fokú (súlyos) elhízás<br>`);
}
return TTI;


}
testTomegIndex(200,2)
testTomegIndex(45,1.5)
testTomegIndex(25,1.2)


//5. feladat: egeszOsztoE()–Bemeneti paraméterek száma: 2(szam és osztó)

function egeszOsztoE(szam,oszto){
let oszt=szam%oszto;
if (oszt==0){
document.write("<hr>true<br>");}
else {
document.write("<hr>false<br>");
}
return oszt}
egeszOsztoE(25,5)
egeszOsztoE(1050,7)
egeszOsztoE(2048,3)
</script>


