import BaseScene from "./BaseScene"

class CreditsScene extends BaseScene {
  constructor(config) {
    super("CreditsScene", {...config, canGoBack: true})

    this.menu = [
      { scene: null, text: "Thank you for playing" },
      { scene: null, text: "Author: DStu" },
    ]
  }

  create() {
    super.create()
    this.createMenu(this.menu, () => {})
  }


}

export default CreditsScene

//https://invoicehome.com/invoices/63615330