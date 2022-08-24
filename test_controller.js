import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

window.Stimulus = Application.start()

Stimulus.register("test", class extends Controller {
    static targets = ["USAPhone", "CRCPhone"]

    /* connect() {
        console.log(this.message)
    }  */

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
    
    /* get message() {
        return this.messageTarget.textContent
    } */
})