alert ("GOOD MORNING!");
confirm ("Are you Reader");
var name = prompt (" whats your name ?");
var name = prompt ("Arabic/english ?");

if (age > 20) {
alert (" Your Age is accept");
} 
else 
{ alert (" Your age is young , SORRY!")

}
function na(){var showOrder;
    var orderImage;
    if (userOrder === "Arabic"){
        orderImage = '<img src="https://i2.wp.com/www.arabamerica.com/wp-content/uploads/2019/12/63652739575886387531.jpg?resize=827%2C375&ssl=1">';
    } else if(userOrder === "english"){
        orderImage = 'img src= "https://image.shutterstock.com/image-vector/design-concept-word-english-website-260nw-1043962963.jpg">';
    
    }
    console.log(orderImage);
    return orderImage;
     document.write('<p>'+ showOrder() + '</p>');
    }
    na()

