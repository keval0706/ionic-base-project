import { Component, OnInit, Input } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
    selector: 'app-error-msg',
    template: `<div class="input-error" *ngIf="errorMessage !== null">{{errorMessage}}</div>`,
    styleUrls: ['./error-msg.component.scss']
})
export class ErrorMsgComponent implements OnInit {

    @Input() control: NgForm;
    @Input() fieldName: FormControl;

    constructor() { }

    get errorMessage() {
        for (const propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                return this.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }
        return null;
    }

    getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        console.log(validatorName);
        const config = {
            appPhoneValidate: 'Invalid Phone',
            appEmailValidate: 'Invalid Email Address',
            appPasswordValidate: 'Password must containt 8 characters, capital letters, lowercase, numbers and special character.',
            minlength: `Minimum Length ${validatorValue.requiredLength}`,
            min: `Minumum Value ${validatorValue.min}`,
            max: `Maximum Value ${validatorValue.max}`,
            appEqualvalidate: this.fieldName + ' does not match with new password.',
            required: this.fieldName + ' is required'
        };
        return config[validatorName];
    }

    ngOnInit() {
    }

}
