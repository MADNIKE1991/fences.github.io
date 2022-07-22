$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
        autoplay:true,
		speed:1000,
		autoplaySpeed:3000,
				responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

const TOKEN = "5497849493:AAEGIwSrHSlMo5iXP5_XjfEFY8LAC2R6nsE";  
const CHAT_ID = "-756955011";
const UPI_API = 'https://api.telegram.org/bot${ TOKEN }/sendMessage';
const success = document.getElementById(success);
document.getElementById('tg').addEventListener('sobmit',function(e){
 e.preventDefault();                                              
let message = '<b> Заявка с сайта! </b>\n';
    message += '<b>Телефон</b>\n' ${ this.phone.value };
    axios.post (UPI_API,{
        chat_id: CHAT_ID,
        parse_mode: 'html'
        text: message
    })
    .then((res) =>{
        this.phone.value = "";
        success.innerHTML = "сообщение отправлено!"ж
        success.style.display"block";
    })
    .catch((err) =>{
        console.warm(err);
        finally(() =>{
            console.log('Конец');
  })
    })