import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

window.Stimulus = Application.start()

Stimulus.register("test", class extends Controller {
    static targets = ["phone"]

    handleChangeInput(){
        let formatMask = this.phoneTarget.dataset.formatMask

        IMask(this.phoneTarget, {
            mask: formatMask
        })
    }
})