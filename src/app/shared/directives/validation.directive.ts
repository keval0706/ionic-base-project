import { Directive, ElementRef, HostListener, Input, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl, NgModel } from '@angular/forms';

@Directive({
    selector: '[appIsNumber]'
})
export class IsNumberDirective {

    private el: HTMLInputElement;
    constructor(private elementRef: ElementRef) {
        this.el = this.elementRef.nativeElement;
    }

    @HostListener('keydown', ['$event']) onKeyUp(event) {
        const e = <KeyboardEvent>event;

        if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+C
            (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+V
            (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }

        // Ensure that it is a number
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    }
}

@Directive({
    selector: '[appIsDecimal]'
})
export class IsDecimalDirective {

    private el: HTMLInputElement;
    constructor(private elementRef: ElementRef, private ngModel: NgModel) {
        this.el = this.elementRef.nativeElement;
    }

    @HostListener('keydown', ['$event']) onkeydown(event) {
        const e = <KeyboardEvent>event;
        const value = (<HTMLInputElement>event.target).value;
        const DEFAULT_DECIMAL_VALUE = 0.0;

        if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+C
            (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+V
            (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }

        // Ensure that it is a number and contains only one decimal point
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            if (e.keyCode === 110 || e.keyCode === 190) {
                if (value.toString().includes('.')) {
                    e.preventDefault();
                }
                if (value.length === 0 && e.key === '.') {
                    this.ngModel.update.emit(DEFAULT_DECIMAL_VALUE);
                }
            } else {
                e.preventDefault();
            }
        }
    }
}

@Directive({
    selector: '[appEmailValidate][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: EmailValidator, multi: true }
    ]
})
export class EmailValidator implements Validator {
    validator: ValidatorFn;
    constructor() {
        this.validator = validateEmailFactory();
    }
    validate(c: FormControl) {
        return this.validator(c);
    }
}

// validation function
function validateEmailFactory(): ValidatorFn {
    return (c: AbstractControl) => {
        if (c.value) {
            // tslint:disable-next-line:max-line-length
            if (c.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                return null;
            } else {
                return {
                    appEmailValidate: true
                };
            }
        }
    };
}


@Directive({
    selector: '[appPhoneValidate][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: PhoneValidator, multi: true }
    ]
})
export class PhoneValidator implements Validator {
    validator: ValidatorFn;
    constructor() {
        this.validator = validatePhoneFactory();
    }
    validate(c: FormControl) {
        return this.validator(c);
    }
}

// validation function
function validatePhoneFactory(): ValidatorFn {
    return (c: AbstractControl) => {
        if (c.value) {
            if (c.value.match(/^[89]\d{9}$/) || c.value.match(/^[6]\d{9}$/)) {
                return null;
            } else {
                return {
                    appPhoneValidate: true
                };
            }
        }
    };
}


@Directive({
    selector: '[appPasswordValidate][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: PasswordValidator, multi: true }
    ]
})
export class PasswordValidator implements Validator {
    validator: ValidatorFn;
    constructor() {
        this.validator = validatePasswordFactory();
    }
    validate(c: FormControl) {
        return this.validator(c);
    }
}

// validation function
function validatePasswordFactory(): ValidatorFn {
    return (c: AbstractControl) => {
        if (c.value) {
            if (c.value.match(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/)) {
                return null;
            } else {
                return {
                    appPasswordValidate: true
                };
            }
        }
    };
}

@Directive({
    selector: '[appEqualvalidate][formControlName],[formControl],[ngModel]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => EqualValidator),
            multi: true
        }
    ]
})
export class EqualValidator implements Validator {

    constructor(@Attribute('appEqualvalidate') public appEqualvalidate: string) { }

    validate(abControl: AbstractControl): { [key: string]: any } {
        // Get self value.
        const val = abControl.value;
        // Get control value.
        const cValue = abControl.root.get(this.appEqualvalidate);
        // value not equal
        if (cValue && val !== cValue.value) {
            return {
                appEqualvalidate: false
            };
        }

        return null;
    }
}

