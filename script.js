
window.onload=function(){
    document.querySelector('#generator').addEventListener("click", ()=>{

    var first = 'A ';
    var adj = ['little', 'horrendous ', 'angry ', 'drepessed ','crazy ','green ','lazy ','beautiful ','powerfull' ];
    var noun = ['frog ','doctor ','rat ', 'cat ', 'pilot ', 'firefighter ', 'robot '];
    var action = ['took my ', 'threw my ', 'yelled at my ' , 'kicked my ', 'stole my ', 'burned my ', 'ate my ', 'hit my '];
    var possetion = ['finger ', 'bike ', 'watch ', 'head ', 'wallet ', 'shirt ', 'keys ', 'computer ', 'phone ', 'guitar '];
    var where = ['on the street','in my house','at the university', 'in front of the church', 'near the mall', 'near the toilet', 'at the bus station'];
    
    var random1=Math.floor(Math.random()*adj.length);
    var random2=Math.floor(Math.random()*noun.length);
    var random3=Math.floor(Math.random()*action.length);
    var random4=Math.floor(Math.random()*possetion.length);
    var random5=Math.floor(Math.random()*where.length);
    
    
    document.querySelector('#Excuse').innerHTML= first+adj[random1]+noun[random2]+action[random3]+possetion[random4]+where[random5];   
    });
    
};
