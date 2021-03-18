import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "box", "btn" ];

  connect() {
    this.updateBtnState();
  }

  toggle() {
    // toggling all checkboxes
    this.boxTargets.forEach((box) => {
      box.checked = this.btnTarget.checked;
    })
  }

  toggleOne() {
    this.updateBtnState();
  }

  updateBtnState() {
    if (this.boxTargets.every(box => box.checked)) {
      this.btnTarget.checked = true;
    } else if (this.boxTargets.filter(box => box.checked).length !== 0) {
      this.btnTarget.indeterminate = true
    } else {
      this.btnTarget.checked = false;
    }
  }
}
