import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { TamanosEspecificacion } from './tamano';
import { TamanoService } from './tamano.service';

describe('TamanoService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let tamService: TamanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TamanoService
      ]
    });

    //Instantiates HttpClient, HttpTestingController and TamanoService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    tamService = TestBed.inject(TamanoService);
  });

  afterEach(() => {
    httpTestingController.verify(); 
  });

  describe('obtiene a los tamaños', () => {
    let expectedTam: TamanosEspecificacion[];

    beforeEach(() => {
      //Dummy data to be returned by request.
      expectedTam = [
        { nombre: 'Mediano', especificacion: 'Va desde 16 a 29 cm' },
        { nombre: 'Grande', especificacion: 'Va desde 30 a 50 cm' },
      ] as TamanosEspecificacion[];
    });
    
    it('retorna un ok al encontrar apesar de que no hay ningún tamaño', () => {
      tamService.getAll().subscribe(
        tamanos => expect(tamanos.nombre.length).toEqual(0),
        fail
      );

      const req = httpTestingController.expectOne(tamService.empUrl);
      req.flush([]); //Return datos vacios
    });
    
    /*it('retorna un 404 no encontrado al no el tamaño', () => {
      tamService.getAll().subscribe(
        tamanos => expect(tamanos.nombre.length).toEqual(0),
        fail
      );

      const req = httpTestingController.expectOne(tamService.empUrl);

      const msg = '404 error';
      req.flush(msg, { status: 404, statusText: 'Not Found' }); //Retorna un error
    });*/

    it('debe devolver los tamaños esperados llamando una vez', () => {
      tamService.getAll().subscribe(
        tamanos => expect(tamanos.nombre.length).toEqual(0),
        fail
      );

      const req = httpTestingController.expectOne(tamService.empUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedTam); 
    });
  });
});