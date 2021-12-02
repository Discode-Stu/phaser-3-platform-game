import Phaser from "phaser"

import PlayScene from "./scenes/Play"
import PreloadScene from "./scenes/Preload"
import MenuScene from "./scenes/Menu"
import LevelScene from "./scenes/Levels"

import CreditScene from "./scenes/Credits"

const MAP_WIDTH = 1600

const WIDTH = document.body.offsetWidth
const HEIGHT = 600
const ZOOM_FACTOR = 1.5

const SHARED_CONFIG = {
  mapOffset: MAP_WIDTH > WIDTH ? MAP_WIDTH - WIDTH : 0,
  width: WIDTH,
  height: HEIGHT,
  zoomFactor: ZOOM_FACTOR,
  debug: false,
  leftTopCorner: {
    x: (WIDTH - WIDTH / ZOOM_FACTOR) / 2,
    y: (HEIGHT - HEIGHT / ZOOM_FACTOR) / 2,
  },
  rightTopCorner: {
    x: WIDTH / ZOOM_FACTOR + (WIDTH - WIDTH / ZOOM_FACTOR) / 2,
    y: (HEIGHT - HEIGHT / ZOOM_FACTOR) / 2,
  },
  rightBottomCorner: {
    x: WIDTH / ZOOM_FACTOR + (WIDTH - WIDTH / ZOOM_FACTOR) / 2,
    y: HEIGHT / ZOOM_FACTOR + (HEIGHT - HEIGHT / ZOOM_FACTOR) / 2,
  },
  lastLevel: 2,
}

const { debug } = SHARED_CONFIG

const Scenes = [PreloadScene, MenuScene, LevelScene, PlayScene, CreditScene]
const createScene = (Scene) => new Scene(SHARED_CONFIG)

const initScenes = () => Scenes.map(createScene)

const config = {
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {
      debug,
    },
  },
  scene: initScenes(),
}

// We need to wait until FB SDK is fully loaded
// FBInstant.initializeAsync().then(() => {
  new Phaser.Game(config)
// })
// new Phaser.Game(config)
