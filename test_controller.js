import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

window.Stimulus = Application.start()

Stimulus.register("test", class extends Controller {
    static targets = ["phone"]


    connect(){
        IMask(this.phoneTarget, {
            mask: this.getFormat()
        })
    }
    getFormat(){
        const format = {
            usa: '(000) 000-0000',
            crc: '+(000) 0000-0000',
            alb: '+(000) 00 000 0000',
            mxn: '+(00) 000 0000000'
        }

        return format[this.phoneTarget.name]
    }
})