kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 1, 1],
  })

loadRoot('https://i.imgur.com/');
loadSprite('link-going-left', 'uDXrWR3.png');
loadSprite('link-going-right', 'B4Zbyzs.png');
loadSprite('link-going-down', 'lheDecT.png');
loadSprite('link-going-up', '8rmLO0f.png');
loadSprite('left-wall', 'y1xpVf3.png');
loadSprite('right-wall', 'QHoApbq.png');
loadSprite('top-wall', 'nUxuAyz.png');
loadSprite('bottom-wall', 'LXIzp5Y.png');
loadSprite('bottom-left-wall', 'gWaXlii.png');
loadSprite('bottom-right-wall', '0czLQE4.png');
loadSprite('top-left-wall', 'Nktx5tc.png');
loadSprite('top-right-wall', 'ZdpcL7i.jpg');
loadSprite('top-door', '4vLEzRW.png');
loadSprite('fire-pot', 'Pe7hUkb.png');
loadSprite('left-door', 'inppyi2.png');
loadSprite('lanterns', 'IPs8y2Y.png');
loadSprite('slicer', 'ueiAO1Q.png');
loadSprite('skeletor', 'Rd7Er8n.png');
loadSprite('explosion', 'hEGEH3Z.png');
loadSprite('stairs', 'LIryyEl.png');
loadSprite('back-ground', 'HfiQS1I.png');
loadSprite('grass', 'bFUrqrI.png');
loadSprite('hole', 'XmDv24V.png');

scene("game",() => {

    const map = [
        'a        ',
        'a        ',
        'a        ',
        'a        ',
        'a        ',
        'a        ',
        'a        ',
        'a        ',
        'aaaaaaaaa',
    ]

    const levelCfg = {
        width: 48,
        height: 48,
        'a': [sprite('left-wall', solid())]
    }
    addLevel(map, levelCfg);

});

start("game")