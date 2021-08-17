kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 1, 1],
  })

  const MOVE_SPEED = 120

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
loadSprite('giant-soldier', 'Ab8AsJI.png')

scene("game",({level, score}) => {
    layers(['bg', 'obj', 'ui'], 'obj')

    const maps = [
        [
        'ac)ccc[cb',
        'a       b',
        'a      *b',
        'a       b',
        'a   (   b',
        'a       b',
        '%       b',
        'a       b',
        'ddd)ddddd',
        ],
        [
        'ac)ccccccb',
        'a       $b',
        'a    }   b',
        'a        b',
        'a   ( }  b',
        'a        b',
        '%  } }   b',
        'a  }     b',
        'ddd)ddddd)',
        ]
        
    ]

    const levelCfg = {
        width: 48,
        height: 48,
        'a': [sprite('left-wall', solid())],
        'b': [sprite('right-wall'),solid()],
        'c': [sprite('top-wall'),solid()],
        'd': [sprite('bottom-wall'),solid()],
        'w': [sprite('top-right-wall'),solid()],
        'x': [sprite('bottom-left-wall'),solid()],
        'y': [sprite('top-left-wall'),solid()],
        'z': [sprite('bottom-right-wall'),solid()],
        '^': [sprite('bottom-right-wall'),solid()],
        '%': [sprite('left-door'),solid()],
        '$': [sprite('stairs'), 'next-level'],
        '*': [sprite('slicer')],
        '}': [sprite('skeletor')],
        ')': [sprite('lanterns'),solid()],
        '(': [sprite('fire-pot'),solid()],
        '[': [sprite('top-door'), 'next-level'],
        '@': [sprite('giant-soldier'),solid()]
    }

    addLevel(maps[level], levelCfg);

    // add(sprite[('bg'), layer('bg')])

    const scoreLabel = add([
        text('0'),
        pos(400, 450),
        layer('ui'),
        {
            value: score
        },
        scale(2)
    ])

    add([text('level ' + parseInt(level + 1)), pos(400,485), scale(2)])

    const player = add([
        sprite('link-going-right'),
        pos(50, 190),
        {   //right by default 
            dir: vec2(1,0),
        }
    ])

    player.action(() => {
        player.resolve() 
    })

    player.overlaps('next-level', () => {
        go("game", {
            level: (level +1) % maps.length, 
            score: scoreLabel.value
        })
    })

    keyDown('left', () => {
        player.changeSprite('link-going-left')
        player.move(-MOVE_SPEED, 0)
        player.dir = vec2(-1, 0)
      })

    keyDown('right', () => {
        player.changeSprite('link-going-right')
        player.move(MOVE_SPEED, 0)
        player.dir = vec2(1, 0)
    })

    keyDown('up', () => {
        player.changeSprite('link-going-up')
        player.move(0, -MOVE_SPEED)
        player.dir = vec2(0, -1)
    })

    keyDown('down', () => {
        player.changeSprite('link-going-down')
        player.move(0, MOVE_SPEED)
        player.dir = vec2(0, 1)
    })

    action('')

})

start("game", {level: 0, score: 0})