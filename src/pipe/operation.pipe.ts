import { Pipe, PipeTransform } from '@angular/core';
import { promise } from 'protractor';
import { HttpService } from 'src/services/http.service';

@Pipe({
  name: 'operation'
})
export class OperationPipe implements PipeTransform {

  constructor(private httpService: HttpService) { }

  async transform(value: any, args?: any): Promise<{}> {
    let result;
    let operator = await this.selectDestenitionJsonFile(value.action);

    if (operator == 'error') {
      return 'missing data'
    }
    if (value.action == 'add') {
      result = value.value + operator.value;
    } else {
      result = value.value * operator.value;
    }

    return result;
  }

  selectDestenitionJsonFile = async (item) => {
    var value;

    if (item == 'add') {
      const cnt = await this.httpService.getAddJson().then(data => {
        value = data;
      }, error => {
        value = 'error'
      });
      return value;
    } else {
      const cnt = await this.httpService.getMultiplyJson().then(data => {
        value = data;
      }, error => {
        value = 'error'
      });

      return value;
    }
  }

}
