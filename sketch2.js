var headX = 250;
var headY = 200;
var headDirection = 2;

var bodyX = 135;
var bodyY = 350;
var bodyDirection = 3;

var eyebrowX1 = 270;
var eyebrowY1 = 180;
var eyebrowDirection1 = 1.3;

var eyebrowX2 = 200;
var eyebrowY2 = 180;
var eyebrowDirection2 = 1.5;

var neckX = 225;
var neckY = 295;
var neckDirection = 5;

var size = 32;
var count = 0;
var sizeDirection = 2;

function setup()
        {
            createCanvas (500,600);
        }
        function draw()
        {
            background(90, 60, 450);

            //top head hair
            fill('brown');
            stroke('brown');
            ellipse(250,330,170,160);

            //neck
            stroke('black')
            fill(270, 200, 70);
            rect(neckX,neckY,50,60);
            neckY += neckDirection;
            if(neckY <= 100 || neckY >= 500 )
            {
                neckDirection *= -1;
            }
            neckX += neckDirection;
            if(neckX <= 100 || neckX >= 500)
            {
                neckDirection *= 1;
            }

            //head
            stroke('black')
            fill(270, 200, 70);
            circle(headX,headY,200);
            headX+=headDirection;
            if(headX >= 300 || headX <= 200)
            {
                headDirection *= -1;
            }

            //white of eyes
            fill('white');
            ellipse(285,200,40,25);
            ellipse(210,200,40,25);

            //iris
            fill(color(0, 0, 255));
            circle(285,200,25);
            circle(210,200,25);

            //pupil
            fill('#222222');
            circle(285,200,12);
            circle(210,200,12);
            
            //eyebrows
            fill('brown');
            rect(270,eyebrowY1,25,5);
            eyebrowY1 += eyebrowDirection1;
            if(eyebrowY1 <= 160 || eyebrowY1 >= 187 )
            {
                eyebrowDirection1 *= -1;
            }
            rect(200,eyebrowY2,25,5);
            eyebrowY2 += eyebrowDirection2;
            if(eyebrowY2 <= 160 || eyebrowY2 >= 187 )
            {
                eyebrowDirection2 *= -1;
            }

            //lips
            line(230, 260, 265, 260);
            curve(240, 260, 240, 270, 255, 270, 255, 260)

            //shirt body
            fill('purple');
            stroke('purple');
            rect(bodyX,350,220,250);
            bodyX += bodyDirection;
            if(bodyX <= 100 || bodyX >= 200 )
            {
                bodyDirection *= -1;
            }

            //arms and hand
            fill(270, 200, 70);
            stroke(color('black'));
            ellipse(135,445,40,190);
            ellipse(355,445,40,190);
            ellipse(225,530,200,40);
            ellipse(355,600,40,190);
            circle(330, 530, 47);
            ellipse(343,507,40,14);
            ellipse(360,518,30,15);
            ellipse(360,527,30,15);
            ellipse(360,535,30,15);
            ellipse(360,544,30,13);

            //ridge of nose in points
            point(245, 216);
            point(245, 218);
            point(245, 220);
            point(246, 222);
            point(246, 224);
            point(246, 226);
            point(245, 228);
            point(245, 230);
            point(245, 232);
            point(244, 234);

            //bottom of nose in points
            point(240, 240);
            point(242, 240);
            point(244, 241);
            point(246, 241);
            point(248, 240);
            point(250, 240);
            
            //shirt sleeves
            fill('purple');
            stroke('purple');
            triangle(135, 345, 160, 380, 110, 380);
            triangle(355, 345, 330, 380, 380, 380);

            //hair part 1
            fill('brown');
            stroke('brown');
            ellipse(250,130,150,60);
            ellipse(170,260,37,240);
            ellipse(330,260,37,240);
            ellipse(160,240,37,220);
            ellipse(340,240,37,220);

            //hair part 2
            ellipse(180,140,50,40);
            ellipse(180,150,60,45);
            ellipse(320,140,50,40);
            ellipse(320,150,60,45);
            ellipse(300,145,60,45);
            ellipse(315,160,45,60);
            ellipse(325,180,45,60);

            //hair part 3
            ellipse(190,340,17,90);
            ellipse(207,340,17,83);
            ellipse(219,340,17,86);
            ellipse(310,340,17,90);
            ellipse(290,340,17,83);
            ellipse(275,340,17,86);

            //Title
            fill('black');
            stroke('black');
            textSize(size);
            size+= sizeDirection;
            count++;
            if(count > 5)
            {
                sizeDirection *=-1;
                count = 0;
            }
            text('Natalie Verploegen', 250, 50);
            textSize(size);
            size+= sizeDirection;
            count++;
            if(count > 5)
            {
                sizeDirection *=-1;
                count = 0;
            }
            text('as shapes', 250, 80);
            textAlign(CENTER);
            textFont('Times New Romans');

            //Signature
            textSize(20);
            text('Natalie Verploegen', 80, 590);
            textFont('Helvetica');
        }