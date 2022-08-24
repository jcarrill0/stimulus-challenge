import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

window.Stimulus = Application.start()

Stimulus.register("test", class extends Controller {
    static targets = ["USAPhone", "CRCPhone", "ALBPhone", "MXNPhone"]

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

    handleALBPhoneChange() {
        IMask(this.ALBPhoneTarget, {
            mask: '+(000) 00 000 0000'
        })
    }

    handleMXNPhoneChange() {
        IMask(this.MXNPhoneTarget, {
            mask: '+{7}(000)000-00-00'
        })
    }
})