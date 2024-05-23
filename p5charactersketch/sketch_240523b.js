function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#FF5722");
  face (width/2, height-175);
}

// 캐릭터 함수
function face(x, y){
  push();
    translate (x, y);
    // 마우스 움직임값
    let center = createVector (x,y);
    let mouse = createVector (mouseX,mouseY);
    // mouse가 센터로부터 얼마나 움직였나
    // 두가지 값 사이 계산해서 새로운 벡터만들기
    let move = p5.Vector.sub(mouse,center);
    // 눈동자가 눈밖으로 안나가게 하기: 눈 원의 반지름 (50) - 눈동자원의 반지름 (30) = 20
    // 마우스따라 움직임활동 조금 줄이기(작은값), move.limit 전에 배치할것
    move.mult(0.1);
    move.limit (20);
  
    // 눈동자(Pupil) 움직임값 카피
    let pupilMove = move.copy();
    pupilMove.limit (20);
  
    let eyeMove = move.copy();
    // 눈동자 조금 움직이며 단계별로
    eyeMove.mult (0.5);
  
    let noseMove = move.copy();
    noseMove.mult (0.7);
  
    let mouthMove = move.copy();
    mouthMove.mult (0.4);
  
    let hairMove = move.copy();
    hairMove.mult (0.3);
  
    let eyebrowMove = move.copy();
    eyebrowMove.mult (0.6);
  
    let earMove = move.copy();
    earMove.mult (-0.5);
  
    strokeWeight (5);
  
    // 귀
    push();
      translate (earMove.x, earMove.y);
      ellipse (-150, 0, 65, 65);
      ellipse (150, 0, 65, 65);
    pop();
  
    // 얼굴
    ellipse (0, 0, 300, 300);
  
    // 눈과 눈동자 그룹
    push();
      translate (eyeMove.x, eyeMove.y);
  
      if (mouseIsPressed) {
        fill ("black");
        rectMode (CENTER);
        noStroke ();
        rect (-60, 5, 90, 10, 5);
        rect (60, 5, 90, 10, 5);   
      }
      else {
        // 눈
        ellipse (-60, 0, 100, 100);
        ellipse (60, 0, 100, 100);

        // 눈동자
        push();
          translate (pupilMove.x, pupilMove.y);
          fill ("black");
          ellipse (-60, 0, 60, 60);
          ellipse (60, 0, 60, 60);
        pop ();
      }
  
    pop ();
  
    // 입
  push();
    translate (mouthMove.x, mouthMove.y);
    ellipse (0, 80, 40, 20);
    //ellipse (0, 80, mouseW, 20);
  pop();
  
    // 코
    push ();
      translate (noseMove.x, noseMove.y);
      strokeWeight (5);
      line (0, 50, -10, 45);
      line (0, 50, 10, 45);
    pop ();
  
    // 눈썹
    push();
      translate (eyebrowMove.x, eyebrowMove.y);
      rectMode (CENTER);
      fill ("black");
      rect (-60, -70, 50, 15, 5);
      rect (60, -70, 50, 15, 5);
    pop();
  
    // 머리
    push();
      translate (hairMove.x, hairMove.y);
      fill ("black");
      ellipse (-80, -130, 80, 70);
      ellipse (80, -130, 80, 70);
      ellipse (0, -150, 150, 110);
    pop();
  
  pop ();
}
