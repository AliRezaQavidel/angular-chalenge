/* tslint:disable:no-unused-variable */

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, fakeAsync } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from 'src/services/http.service';
import { OperationPipe } from './operation.pipe';

describe('Pipe: Operatione', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
      ],
      providers: [HttpService]
    });
    // Inject the http service and test controller for each test
    service = TestBed.get(HttpService);
  });

  it('create an instance', () => {
    const pipe = new OperationPipe(service); // * pipe instantiation
    expect(pipe).toBeTruthy();
  });

  it('should truncate 6', fakeAsync(() => {
    // Arrange
    const pipe = new OperationPipe(service);

    // Act
    const ret: any = pipe.transform({ value: 1, action: "add" }).then((res: any) => {
      expect(res.value).toEqual(6);
    });
  }));

  it('should return 5', fakeAsync(() => {
    // Arrange
    const pipe = new OperationPipe(service);

    // Act
    const ret: any = pipe.selectDestenitionJsonFile('add').then((res: any) => {
      expect(res).toEqual({ value: '5' });
    });

  }));

});
