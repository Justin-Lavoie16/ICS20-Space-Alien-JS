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

  create(data) {}

  update(time, delta) {
    if (time > 3000) {
      this.scene.switch("titleScene")
    }
  }
}

export default SplashScene
