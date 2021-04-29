import * as rulesSend from '../msgRules/msgSend';
import * as rulesRecieve from '../msgRules/msgRecieved'
localStorage.setItem("msgS","")
localStorage.setItem("msgR","")
var msgS=[]
var msgR=[]
export async function sendR(){
    
    if(localStorage.getItem("msgS")!= "true"){
    
        
        rulesSend.listm.forEach(element => {
            let p;
            p = Promise.resolve(element);
            p.then(function(object) {
                msgS.push(object.default);
            });
        });
        localStorage.setItem("msgS","true")
    }
    return msgS

    
}
export async function recieveR(){
    
    if(localStorage.getItem("msgR")!= "true"){
        console.log("SSS")
    
        
        rulesRecieve.listmR.forEach(element => {
            let p;
            p = Promise.resolve(element);
            p.then(function(object) {
                msgR.push(object.default);
            });
        });
        localStorage.setItem("msgR","true")
    }
    return msgR

    
}
window.onload