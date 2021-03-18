import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "box", "btn" ];

  toggle() {
    // toggling all checkboxes
    this.boxTargets.forEach((box) => {
      box.checked = this.btnTarget.checked;
    })
  }
}
