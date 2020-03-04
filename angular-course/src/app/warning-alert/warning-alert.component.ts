import { Component } from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    templateUrl: './warning-alert.component.html',
    styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent {

    numVulnerabilities: number;
    stSeverity: string;

    constructor() {
        this.numVulnerabilities = Math.floor(Math.random() * 20) + 1;
        this.stSeverity = this.numVulnerabilities < 10 ? 'Low' : 'SEVERE';
    }

    getParagraphStyle() {
        return { fontWeight: this.numVulnerabilities > 9 ? 'bold' : 'normal' }
    }
}