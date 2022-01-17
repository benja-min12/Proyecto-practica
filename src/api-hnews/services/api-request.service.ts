import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from '@nestjs/terminus/dist/health-indicator/http/axios.interfaces';

@Injectable()
export class ApiRequestService {
  BASE_URL = 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs';
  constructor(private readonly httpService: HttpService) {}
  findall(): Observable<AxiosResponse<any>> {
    return this.httpService.get(this.BASE_URL);
  }
}
