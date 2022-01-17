import { Controller, Get } from '@nestjs/common';
import { ApiRequestService } from '../services/api-request.service';

@Controller('api-hnews')
export class ApiHnewsController {
  constructor(private readonly apiRequest: ApiRequestService) {}
  @Get()
  async getApiData() {
    const { data } = await this.apiRequest.findall().toPromise();
    const { hits } = data;
    //mostrar los datos de la api en la consola
    for (const item of hits) {
      console.log(item);
      console.log('\n');
    }
    return hits;
  }
}
