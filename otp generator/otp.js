/* // var btn=document.getElementById("btn")
function otpgenerate(length){
    let otp = '';
    for(i=0;i<length;i++){
        otp+=Math.floor(Math.random()*10).toString();
    }
    return otp;
}
console.log(otpgenerate(6))
 */


 
// function otpgenerate() {
//     let otp="";
//     for(i = 1 ; i < 6 ; i++){
//         otp += Math.floor(Math.random()*10).toString();
//     }

//     console.log(otp)    
//     var div=document.getElementById("otp")
//     div.textContent="Your OTP is : "+ otp;    
// }



function otpgenerate(){
    let otp=""
for(i = 1; i <= 6; i++){
    otp+=Math.floor(Math.random()*10).toString();
}    
    console.log (otp)
    var div=document.getElementById("otp")
    div.textContent="Your OTP is: "+otp

}

