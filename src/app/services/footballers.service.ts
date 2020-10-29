import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FootballersService {
    private footballers:iFootballer[]=[
        {
            name:"Joao Félix",
            bio:"João Félix Sequeira ([ʒuˈɐ̃w ˈfɛliks];[n 1] born 10 November 1999) is a Portuguese professional footballer who plays as a forward for Spanish La Liga club Atlético Madrid and the Portugal national team. He is known for his speed, finishing, technique and his dribbling and he can also play as a winger or an attacking midfielder.[6][7] He is also often referred to as Menino de Ouro (The Golden Boy) by the Portuguese and Spanish sports media.[8]. Félix initially trained at Porto's youth ranks before moving to rivals Benfica in 2015. He began playing for the latter's reserve team a year later and was promoted to the first-team in 2018, making his professional debut at age 17. He then starred as a goalscorer and helped Benfica win the league title in his first and only season with them, and was awarded Primeira Liga's Best Young Player of the Year and the Golden Boy award.[9] Internationally, he became the youngest ever player to score a hat-trick in the UEFA Europa League, aged 18. Félix's performances sparked the interest of several European clubs, with Atlético Madrid signing him in 2019 for a club-record transfer worth €126 million (£113 million), the fourth-most expensive football transfer, the second-most ever paid for a teenager and the highest fee for a Portuguese player leaving the domestic league. Shortly after, Félix was listed among the shortlist for the Ballon d'Or and finished third for the Kopa Trophy in 2019.[10].Félix is a former Portugal youth international, representing his country at under-18, under-19, and under-21 levels. He earned his first cap for the senior national team, during the semi-finals of the 2019 UEFA Nations League Finals, won by Portugal on home soil.",
            img:"assets/img/joao-felix.jpg",
            age:"20",
            team:"Atletico de Madrid",
            citizenship:"Portuguese",
            countryflag:"assets/img/portugal.png"
        },
        {
            name:"Joao Félixxxxxxxx",
            bio:"João Félix Sequeira ([ʒuˈɐ̃w ˈfɛliks];[n 1] born 10 November 1999) is a Portuguese professional footballer who plays as a forward for Spanish La Liga club Atlético Madrid and the Portugal national team. He is known for his speed, finishing, technique and his dribbling and he can also play as a winger or an attacking midfielder.[6][7] He is also often referred to as Menino de Ouro (The Golden Boy) by the Portuguese and Spanish sports media.[8]. Félix initially trained at Porto's youth ranks before moving to rivals Benfica in 2015. He began playing for the latter's reserve team a year later and was promoted to the first-team in 2018, making his professional debut at age 17. He then starred as a goalscorer and helped Benfica win the league title in his first and only season with them, and was awarded Primeira Liga's Best Young Player of the Year and the Golden Boy award.[9] Internationally, he became the youngest ever player to score a hat-trick in the UEFA Europa League, aged 18. Félix's performances sparked the interest of several European clubs, with Atlético Madrid signing him in 2019 for a club-record transfer worth €126 million (£113 million), the fourth-most expensive football transfer, the second-most ever paid for a teenager and the highest fee for a Portuguese player leaving the domestic league. Shortly after, Félix was listed among the shortlist for the Ballon d'Or and finished third for the Kopa Trophy in 2019.[10].Félix is a former Portugal youth international, representing his country at under-18, under-19, and under-21 levels. He earned his first cap for the senior national team, during the semi-finals of the 2019 UEFA Nations League Finals, won by Portugal on home soil.",
            img:"assets/img/joao-felix.jpg",
            age:"20",
            team:"Atletico de Madrid",
            citizenship:"Portuguese",
            countryflag:"assets/img/portugal.png"
        },
         {
            name:"Jan Oblak",
            bio:"Portero",
            img:"assets/img/oblak.jpg",
            age:"24",
            team:"Atletico de Madrid",
            citizenship:"Slovenian",
            countryflag:"assets/img/slovenian.png"
        }
    ];
   constructor(){
       console.log("Servicio inicializado");
   }
   getFootballers(){
    return this.footballers;
   }
   getFootballer(id:number):iFootballer{
    return this.footballers[id];
   }
   searchFootballers(nameFootballer:string){
        var footballersFound:iFootballer[]=[];
        const nameSerched = nameFootballer.toLowerCase()
        this.footballers.map( (footballer, index) => { 
           if( footballer.name.toLowerCase().indexOf(nameSerched) >= 0){ 
                footballer.id=index;
                footballersFound.push(footballer);
                console.log(footballer);
           }
        });
        return footballersFound;
   }

}
export interface iFootballer{
            name:string,
            bio:string,
            img:string,
            age:string,
            team:string,
            citizenship:string,
            countryflag:string,
            id?:number
}