import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

window.Stimulus = Application.start()

Stimulus.register("hello", class extends Controller {
    static targets = [ "name", "output" ]

    /* connect() {
        this.outputTarget.textContent = `Hello, ${this.name}!`;
    } */

    greet() { 
        let msg = `Hello, ${this.name}!`;
        console.log(msg) 
        this.outputTarget.textContent = msg
    }
    
    get name() {
        return this.nameTarget.value
    }
})