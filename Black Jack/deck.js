var d1 = document.getElementById("Abord");
var d2 = document.getElementById("Bbord");
var d3 = document.getElementById("Cbord");
var d4 = document.getElementById("Dbord");
var d5 = document.getElementById("Ebord");

var p1 = document.getElementById("A1bord");
var p2 = document.getElementById("B1bord");
var p3 = document.getElementById("C1bord");
var p4 = document.getElementById("D1bord");
var p5 = document.getElementById("E1bord");

var bet_player = document.getElementById("bet1");

var bal = document.getElementById("Balance");

var total_bet = 0;

document.getElementById("overlay").style.display = "block";

function off() 
{
    document.getElementById("overlay").style.display = "none";
    var org_bal = Number(bal.innerHTML);
    localStorage.setItem("money",org_bal);
}

function off1()
{
    document.getElementById("overlay1").style.display = "none";
    score_p = [];
    score_d = [];
    cnt = 0;
    cnt1 = 0;
    sum_player = 0;
    sum_dealer = 0;
    setTimeout(function()
    {
        location.reload();    
    },100);
}

var d = true;
var p = false;

var score_p = [];
var score_d = [];

var cnt = 0;

var cnt1 = 0;

var sum_player = 0;

var sum_dealer = 0;

function cards(val,name1,suit)
{
    this.val = val;
    this.name1 = name1;
    this.suit = suit;
    this.weight = val;
}

var names = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
var suits = ["♥","♦","♠","♣"];
var card = [];
var shuffled_cards = [];

function create() 
{
    for (let i = 0; i < suits.length; i++) 
    {
        for (let j = 0; j < names.length; j++) 
        {
            card.push(new cards(j+1,names[j],suits[i]))
        }   
    }
}

create();

for (let j = 0; j < card.length; j++) 
{
    shuffled_cards.push(card[j]);    
}

function shuffle(arr) 
{
    arr.sort(function()
    {
        return  Math.random() - 0.5; 
    });
}

shuffle(shuffled_cards);

function insert(d_p,c) 
{
    var x = c;
    for(var i=0; i < d_p.length;i++)
    {
        if(i!=1)
        {
            d_p[i].innerHTML = x.name1;
        }
        else
        {
            d_p[i].innerHTML = x.suit;
        }
    }    
}

function game_start() 
{
    var deal1 = d1.children;
    var x = shuffled_cards.pop();
    insert(deal1,x);
    weight(x,d);
    color(deal1,x);
    console.log(x);
    cnt1++;
    score();
    //sum_dealer = x.weight;

    var play1 = p1.children;
    var x1 = shuffled_cards.pop();
    insert(play1,x1);
    weight(x1,p);
    cnt++;
    color(play1,x1);
    console.log(x1);

    var play2 = p2.children;
    var x2 = shuffled_cards.pop();
    insert(play2,x2);
    weight(x2,p);
    cnt++;
    color(play2,x2);
    console.log(x2);

    start.hidden = true;
    cnt = 2;
    sum_player = x1.weight + x2.weight;
    if(sum_player==21)
    winner();
}

var start = document.getElementById("Deal");
start.addEventListener("click",game_start);

function color(arr,x)
{
    for(var i=0;i<arr.length;i++)
    {
        if(x.suit == "♥" || x.suit =="♦")
        {
            arr[i].style.color = "red";
        }
        else
        {
            arr[i].style.color = "black";    
        }
    }
}

function weight(x,boo) 
{
    if(x.name1=="J" || x.name1 =="Q" || x.name1 == "K")
    {
        x.weight = 10;
        if(boo)
        score_d.push(x.weight);
        else
        score_p.push(x.weight);
    }
    else if(x.name1 == "A")
    {
        x.weight = 11;
        if(boo)
        score_d.push(x.weight);
        else
        score_p.push(x.weight);
    }
    else 
    {
        x.weight = x.val;
        if(boo)
        score_d.push(x.weight);
        else
        score_p.push(x.weight);
    }
}

var hit_btn = document.getElementById("Hit");
hit_btn.addEventListener("click",function()
{
    hit(++cnt);
    setInterval(function () 
    {
     if(sum_player>21)
     win.innerHTML = "Dealer Wins";
    },1000);
});

function hit(cnt) 
{
    if(sum_player<21)
    {
        var n = shuffled_cards.pop();
        switch(cnt)
        {
        case 3:
            var play3 = p3.children;
            insert(play3,n);
            weight(n,p);
            color(play3,n);
            cnt++;
            score1();
            break;

            case 4:
            var play4 = p4.children;
            insert(play4,n);
            weight(n,p);
            color(play4,n);
            cnt++;
            score1();
            break;

        case 5:
            var play5 = p5.children;
            insert(play5,n);
            weight(n,p);
            color(play5,n);
            cnt++;
            score1();
            break;
        }
    }
}

var stand_btn = document.getElementById("Stand");
stand_btn.addEventListener("click",function ()
{
    setInterval(function()
    {
    if(sum_dealer<19 && sum_dealer < sum_player)
    {
        stand(++cnt1);
    }
    },500);

    setTimeout(winner,2600);
});

function stand(cnt1) 
{
    hit_btn.disabled = true;
    if(sum_dealer<19)
    {
        var n = shuffled_cards.pop();
        switch(cnt1)
        {
        case 2:
            var deal2 = d2.children;
            insert(deal2,n);
            weight(n,d);
            color(deal2,n);
            cnt1++;
            score();
            break;

        case 3:
            var deal3  = d3.children;
            insert(deal3,n);
            weight(n,d);
            color(deal3,n);
            cnt1++;
            score();
            break;

        case 4:
            var deal4  = d4.children;
            insert(deal4,n);
            weight(n,d);
            color(deal4,n);
            cnt1++;
            score();
            break;

        case 5:
            var deal5 = d5.children;
            insert(deal5,n);
            weight(n,d);
            color(deal5,n);
            cnt1++;
            score();
            break;
        }
    }
}



function score() 
{
    var  sum2 = 0;
    var arr = [];
    for(var i = 0;i<score_d.length;i++)
    {
        if(score_d[i]==11)
        {
            sum2+=1;
            arr.push(score_d[i]);
        }
        else
        {
            sum2+=score_d[i];
        }
    }  
    if(sum2<=11 && arr.length>=1)
    {
        sum2+=10;
    }
    sum_dealer = sum2;
}

function score1() 
{
    var  sum1 = 0;
    var arr = [];
    for(var i = 0;i<score_p.length;i++)
    {
        if(score_p[i]==11)
        {
            sum1+=1;
            arr.push(score_p[i]);
        }
        else
        {
            sum1+=score_p[i];
        }
    }  
    if(sum1<=11 && arr.length>=1)
    {
        sum1+=10;
    }
    sum_player = sum1;
}

function winner() 
{
    var win = document.getElementById("win");
    var a = 0;
    for (let i = 0; i < score_p.length; i++) 
    {
        a += score_p[i]; 
    }
    console.log("Score Player:",a);  

    var b = 0;
    b = sum_dealer; 
    if(a>b && a<=21)
    {
        win.innerHTML = "Winner IS Player";
        bal.innerText = Number(bal.innerText) + (total_bet * 2);
        var money_left = bal.innerHTML;
        bet_player.innerText = 0;
    }
    else if(b>a && b<=21)
    {
        win.innerHTML = "Winner Is Dealer";
    }
    else if(a==b)
    {
        win.innerHTML = "Its A Tie";
    }
    
    if(a>21)
    {
        win.innerHTML = "Winner Is Dealer";
    }
    if(b>21)
    {
        win.innerHTML = "Winner Is Player";
        bal.innerText = Number(bal.innerText) + (total_bet * 2);
        var money_left = Number(bal.innerHTML);
        bet_player.innerText = 0;
    }
    start.hidden = false;
    document.getElementById("overlay1").style.display = "block";
}



function bet(n) 
{
    temp = 0;
    var temp = bet_player.innerText;
    bet_player.innerText = Number(temp) + n;
    total_bet = bet_player.innerText;
    console.log("Total:",total_bet);
    
    var org_bal = bal.innerText;
    bal.innerText = Number(org_bal) - n;
}

