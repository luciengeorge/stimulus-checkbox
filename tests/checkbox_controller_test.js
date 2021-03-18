import { Application } from "stimulus";
import CheckboxController from "index";

describe("CheckboxController", () => {
  describe("#toggle", () => {
    beforeEach(() => {
      document.body.innerHTML = `
      <div data-controller="checkbox">
        <input type="checkbox" id="select-all" data-checkbox-target="btn" data-action="change->checkbox#toggle">
        <input type="checkbox" data-checkbox-target="box">
        <input type="checkbox" data-checkbox-target="box">
        <input type="checkbox" data-checkbox-target="box">
      </div>`;

      const application = Application.start();
      application.register("checkbox", CheckboxController);
    });

    it("checks all the checkboxes", () => {
      const input = document.getElementById("select-all");
      const boxes = document.querySelectorAll('[data-checkbox-target="box"]');
      input.click();

      expect(Array.from(boxes).filter(box => box.checked).length).
        toEqual(Array.from(boxes).length);
    });

    it("unchecks all the checkboxes if they are already checked", () => {
      const input = document.getElementById("select-all");
      const boxes = document.querySelectorAll('[data-checkbox-target="box"]');
      input.click();
      input.click();

      // This line has changed its expectations.
      expect(Array.from(boxes).filter(box => box.checked).length).
        toEqual(0);
    })
  });
});
