import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

window.Stimulus = Application.start()

Stimulus.register("test", class extends Controller {
    static targets = ["USAPhone", "CRCPhone"]

    handleUSAPhoneChange() {
        IMask(this.USAPhoneTarget, {
            mask: '(000) 000-0000'
        })
    }

    handleCRCPhoneChange() {
        IMask(this.CRCPhoneTarget, {
            mask: '+(000) 0000-0000'
        })
    }
})