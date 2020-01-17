export class LoginDto {
    constructor(
        public email?: string,
        public password?: string,
    ) { }
}

export class RegistrationDto {
    constructor(
        public name?: string,
        public email?: string,
        public password?: string,
        public cPassword?: string
    ) { }
}
