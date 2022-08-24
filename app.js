import { Application, Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

window.Stimulus = Application.start()

Stimulus.register("hello", class extends Controller {
    static targets = [ "name", "output" ]

    connect() {
        console.log(`Hello, World!!!`) 
    } 

    greet() { 
        this.outputTarget.textContent = `Hello, ${this.name}!`
    }
    
    get name() {
        return this.nameTarget.value
    }
})