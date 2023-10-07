import {Application} from '@hotwired/stimulus'
import CheckboxController from 'index'

let input, boxes

describe('CheckboxController', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div data-controller="checkbox">
      <input type="checkbox" id="select-all" data-checkbox-target="btn" data-action="change->checkbox#toggle">
      <input type="checkbox" data-checkbox-target="box" data-action="change->checkbox#toggleOne">
      <input type="checkbox" data-checkbox-target="box" data-action="change->checkbox#toggleOne">
      <input type="checkbox" data-checkbox-target="box" data-action="change->checkbox#toggleOne">
    </div>`

    const application = Application.start()
    application.register('checkbox', CheckboxController)
    input = document.getElementById('select-all')
    boxes = document.querySelectorAll('[data-checkbox-target="box"]')
  })
  describe('#toggle', () => {
    it('checks all the checkboxes', () => {
      input.click()

      expect(Array.from(boxes).filter((box) => box.checked).length).toEqual(
        Array.from(boxes).length,
      )
    })

    it('unchecks all the checkboxes if they are already checked', () => {
      input.click()
      input.click()

      // This line has changed its expectations.
      expect(Array.from(boxes).filter((box) => box.checked).length).toEqual(0)
    })
  })

  describe('#toggleOne', () => {
    it('checks that the input is checked if all checkboxes are checked', () => {
      boxes.forEach((box) => box.click())
      expect(input.checked).toEqual(true)
    })

    it('checks that the input is not checked if no checkboxes are checked', () => {
      expect(input.checked).toEqual(false)
    })

    it('checks that the input is in an indeterminate state if some checkboxes are checked', () => {
      boxes[0].click()
      expect(input.indeterminate).toEqual(true)
    })
  })
})
