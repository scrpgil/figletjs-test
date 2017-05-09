import { Component } from '@angular/core';
import * as figlet from "lib/figletjs/figlet.js";
import {Observable} from 'rxjs/Observable';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Figlet.js Test';
    public asciis = []
    public word:string = "";
    public fonts:string[] = ["Block", "Standard"];

    constructor(
    ){
    }
    onKey(event: any) { // without type info
        this.word = event.target.value;
        this.update();
    }
    update(){
        this.asciis = [];
        var tmp = this.asciis;
        for(let font of this.fonts){
            figlet.text(this.word ,font, function callback(err, data){
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                tmp.push(data);
            });
        }
    }
}
