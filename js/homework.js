        /*first task*/
        var name = 'John';
        var admin = name;
        var first = document.querySelector('.first');
        first.onclick = function (){ 
            alert(admin);
        }
        /*second task*/
        var ourPlanet = 'earth';
        var visitor = 'john';
        var second = document.querySelector('.second')
        second.onclick = function(){
            second.innerHTML+= '. our planet is '+ourPlanet+' and current visitor is '+visitor;
        }
        /*fourth task*/
        var fourth = document.querySelector('.fourth');
        fourth.onclick = function(){
            var a = 10;
            if(a === 10){
                fourth.innerHTML += ' true';
            } else {
                fourth.innerHTML += ' false';
            }
        }
        /*task fifth*/
        var fifth = document.querySelector('.fifth');
        fifth.onclick = function(){
            var num = 3;
            alert(num);
        }
        /*task sixth*/
        var sixth = document.querySelector('.sixth');
        sixth.onclick = function(){
            var a = 10;
            var b = 2;
            alert(a + b);
            alert(a - b);
            alert(a * b);
            alert(a / b);
        }
        /*seventh task*/
        var seventh = document.querySelector('.seventh');
        seventh.onclick = function(){
            var c = 15;
            var d = 2;
            var result = c + d;
            alert(result);
        }
        /*eighth*/
        var eighth = document.querySelector('.eighth');
        eighth.onclick = function(){
            var a = 10;
            var b = 2;
            var c = 5;
            eighth.innerHTML += a + b + c;
        }
        /*ninth*/
        var ninth = document.querySelector('.ninth');
        ninth.onclick = function (){
            var a = 17;
            var b = 10;
            var c = a - b;
            var d = 7;
            var result = c + d;
            ninth.innerHTML += result;
        }
        /*tenth*/
        var tenth = document.querySelector('.tenth');
        tenth.onclick = function(){
            var str = 'Hallo, world!';
            alert(str);
        }
        /*eleventh*/
        var eleventh = document.querySelector('.eleventh');
        eleventh.onclick = function(){
            var str1 ='Hallo,';
            var str2 = ' world!';
            alert(str1+str2);
        }
        /*twelvth*/
        var twelvth = document.querySelector('.twelvth');
        twelvth.onclick = function(){
            var myName = 'Vova';
            alert('Hallo, '+myName); 
        } 
        /*thirtteenth*/
        var thirtteenth = document.querySelector('.thirtteenth');
        thirtteenth.onclick = function(){
            var age = '28';
            alert('Мне '+age+' лет');
        }
        /*fourteents*/
        var fourteents = document.querySelector('.fourteents');
        fourteents.onclick = function(){
            var str = 'abcde';
            alert(str[0]+' '+str[2]+' '+str[4]);
        }
        /*fifteenth*/
        var fifteenth = document.querySelector('.fifteenth');
        fifteenth.onclick = function(){
            var num ='12345';
            var mult = 1;
            for(var i=1; i<=num.length; i++){
                var mult = mult * i;
            }
            alert(mult);
        }
        /*sixteenth*/
        var sixteenth = document.querySelector('.sixteenth');
        sixteenth.onclick = function(){
            var hour = 23;
            var minute = 13;
            var second = 50;
            var result = hour+':'+minute+':'+second;
            sixteenth.innerHTML += result ;
        }
        /*seventeenth*/
        var seventeenth = document.querySelector('.seventeenth');
        seventeenth.onclick = function(){
            var num = 5;
            alert(Math.pow(num,2));
        }
        /*eighteenth*/
        var eighteenth = document.querySelector('.eighteenth');
        eighteenth.onclick = function(){
            var m = 10;
            var n;
            if(m > 50){
                n = 'Больше';
            } else {
                n = 'меньше';
            }
            alert(n);
        }
        /*nineteenth*/
        var nineteenth = document.querySelector('.nineteenth');
        nineteenth.onclick = function(){
            var a1 = 5 + 3;
            var a2 = 5 - 3;
            var a3 = 5 * 3;
            var a4 = 5 / 3;
            console.log(a1, a2, a3, a4);
        }
        /*twentieth*/
        var twentieth = document.querySelector('.twentieth');
        twentieth.onclick = function(){
            var a6 = 5 % 3;
            var a7 = 3 % 5;
            var a8 = 5 +'3';
            var a9 = '5'-3;
            var a10 = 35+'kg';
            console.log(a6, a7, a8, a9, a10);
        }
        /*twentyfirst*/
        var twentyfirst = document.querySelector('.twentyfirst');
        twentyfirst.onclick = function(){
            var str = 'hallo';
            var num = 123;
            var flag = true;
            var txt = 'true';
            console.log(typeof(str), typeof(num), typeof(flag), typeof(txt))
        }