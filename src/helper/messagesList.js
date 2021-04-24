import * as rulesSend from '../msgRules/msgSend';
localStorage.setItem("flag","")
var msgS=[]
export async function sendR(){
    
    if(localStorage.getItem("flag")!= "true"){
        console.log("SSS")
    
        
        rulesSend.listm.forEach(element => {
            let p;
            p = Promise.resolve(element);
            p.then(function(object) {
                msgS.push(object.default);
            });
        });
        localStorage.setItem("flag","true")
    }
    return msgS

    
}
window.onload