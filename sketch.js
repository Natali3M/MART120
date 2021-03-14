function setup()
        {
            createCanvas (500,600);
        }
        function draw()
        {
            background(90, 60, 450);

            fill('brown');
            stroke('brown');
            ellipse(250,330,170,160);

            stroke('black')
            fill(270, 200, 70);
            rect(225,295,50,60);
            circle(250, 200, 200);

            fill('white');
            ellipse(285,200,40,25);
            ellipse(210,200,40,25);

            fill(color(0, 0, 255));
            circle(285,200,25);
            circle(210,200,25);

            fill('#222222');
            circle(285,200,12);
            circle(210,200,12);

            line(230, 260, 265, 260);
            curve(240, 260, 240, 270, 255, 270, 255, 260)

            fill('purple');
            stroke('purple');
            rect(135,350,220,250);

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

            point(240, 240);
            point(242, 240);
            point(244, 241);
            point(246, 241);
            point(248, 240);
            point(250, 240);
            
            fill('purple');
            stroke('purple');
            triangle(135, 345, 160, 380, 110, 380);
            triangle(355, 345, 330, 380, 380, 380);

            fill('brown');
            stroke('brown');
            ellipse(250,130,150,60);
            ellipse(170,260,37,240);
            ellipse(330,260,37,240);
            ellipse(160,240,37,220);
            ellipse(340,240,37,220);

            ellipse(180,140,50,40);
            ellipse(180,150,60,45);
            ellipse(320,140,50,40);
            ellipse(320,150,60,45);
            ellipse(300,145,60,45);
            ellipse(315,160,45,60);
            ellipse(325,180,45,60);

            ellipse(190,340,17,90);
            ellipse(207,340,17,83);
            ellipse(219,340,17,86);
            ellipse(310,340,17,90);
            ellipse(290,340,17,83);
            ellipse(275,340,17,86);

            fill('black');
            stroke('black');
            textSize(32);
            text('Natalie Verploegen', 250, 50);
            textSize(20);
            text('as shapes', 250, 80);
            textAlign(CENTER);
            textFont('Times New Romans');

            text('Natalie Verploegen', 80, 590);
            textSize(12);
            textFont('Helvetica');
        }