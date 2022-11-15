
class SplashScene extends Phaser.Scene {

  constructor() {
    super({ key: "splashScene" })

    this.splashSceneBackgroundImage = null
  }


  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }


  preload() {
    console.log("Splash Scene")
  }

  create(data) {
  }

  update(time, delta) {
  }
}

export default SplashScene