import anime from 'animejs';

export function buttonEnter(buttonPath, buttonSpan) {
  anime.remove([buttonPath, buttonSpan]);
  anime({
    targets: buttonPath,
    d: 'M10,10 C10,10 50,7 90,7 C130,7 170,10 170,10 C170,10 172,20 172,30 C172,40 170,50 170,50 C170,50 130,53 90,53 C50,53 10,50 10,50 C10,50 8,40 8,30 C8,20 10,10 10,10 Z',
    elasticity: 700,
    offset: 0,
  });
  anime({
    targets: buttonSpan,
    scale: 1.15,
    duration: 800,
    offset: 0,
  });
}

export function buttonleave(buttonPath, buttonSpan) {
  anime.remove([buttonPath, buttonSpan]);
  anime({
    targets: buttonPath,
    d:
      'M10,10 C10,10 50,9.98999977 90,9.98999977 C130,9.98999977 170,10 170,10 C170,10 170.009995,20 170.009995,30 C170.009995,40 170,50 170,50 C170,50 130,50.0099983 90,50.0099983 C50,50.0099983 10,50 10,50 C10,50 9.98999977,40 9.98999977,30 C9.98999977,20 10,10 10,10 Z',
    elasticity: 700,
    offset: 0,
  });
  anime({
    targets: buttonSpan,
    scale: 1,
    duration: 800,
    offset: 0,
  });
}
