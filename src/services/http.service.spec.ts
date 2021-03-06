// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesModule } from 'src/pipe/pipes.module';
import { HttpService } from './http.service';

describe('HttpClient testing', () => {
  let httpTestingController: HttpTestingController;
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        PipesModule
      ],
      providers: [HttpService]
    });

    // Inject the http service and test controller for each test
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(HttpService);
  });


  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });

  it('get number json', () => {
    const reqResultModel: any[] = [
      {
        "value": 1,
        "action": "add"
      },
      {
        "value": 2,
        "action": "multiply"
      },
      {
        "value": 3,
        "action": "add"
      },
      {
        "value": 4,
        "action": "add"
      },
      {
        "value": 5,
        "action": "multiply"
      },
      {
        "value": 6,
        "action": "multiply"
      }
    ]

    service.getNumbersJson().subscribe((res) => {
      expect(reqResultModel).toBe(res, 'mocked')
    });

    const req = httpTestingController.expectOne('assets/json/Numbers.json');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(reqResultModel);
  })

  it('getAddjson', async () => {
    const reqResultModel: any = {
      "value": 5
    }

    service.getAddJson().then((res) => {
      expect(res).toEqual(reqResultModel);
    });

    const req = httpTestingController.expectOne('assets/json/Add.json');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(reqResultModel);
  })

  it('getMultiplyjson', async () => {
    const reqResultModel: any = {
      "value": 10
    }

    service.getMultiplyJson().then((res) => {
      expect(res).toEqual(reqResultModel);
    });

    const req = httpTestingController.expectOne('assets/json/Multiply.json');

    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');

    req.flush(reqResultModel);
  })

});