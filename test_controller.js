import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

window.Stimulus = Application.start()

Stimulus.register("test", class extends Controller {
    static targets = [ "message" ]

    connect() {
        console.log(this.message)  
    } 
    
    get message() {
        return this.messageTarget.textContent
    }
})