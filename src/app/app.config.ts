import { environment } from 'src/environments/environment';

export class AppConfig {
    public static GetCars = environment.endPoint.concat('Cars/GetList');
}
