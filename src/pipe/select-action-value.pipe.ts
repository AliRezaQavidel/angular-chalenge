import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { HttpService } from 'src/services/http.service';

@Pipe({
  name: 'selectaAtionValue'
})

export class SelectActionValuePipe implements PipeTransform {

  constructor(private httpService: HttpService) { }

  async transform(value: any, args?: any): Promise<{}> {
    const result = await this.selectDestenitionJsonFile(value);
    return result.value;
  }

  selectDestenitionJsonFile = async (item) => {
    var value: any = {};
    if (item == 'add') {
      const cnt = await this.httpService.getAddJson().then(data => {
        value = data;
      }, error => {
        value.value = 'missing data'
      });
      return value;
    } else {
      const cnt = await this.httpService.getMultiplyJson().then(data => {
        value = data;
      }, error => {
        value.value = 'missing data'
      });
      return value;
    }
  }

}
