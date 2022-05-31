/*import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Persona } from './persona';
import { PersonaService } from './persona.service';

describe('PersonaService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let perService: PersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PersonaService
      ]
    });

    //Instantiates HttpClient, HttpTestingController and PersonaService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    perService = TestBed.inject(PersonaService);
  });

  afterEach(() => {
    httpTestingController.verify(); 
  });

  describe('obtiene a las personas', () => {
    let expectedper: Persona[];

    beforeEach(() => {
      //Dummy data to be returned by request.
      expectedper = [
        { id: 200, nombre: 'Santiago30', apellido: 'Cardenas Franco', correo: 'uncorreo@gmail.com', password: 'w3Unpo<code>t0d0' },
        { id: 500, nombre: 'Santiago', apellido: 'Cardenas Franco', correo: 'uncorreo@gmail.com', password: 'w3Unpo<code>t0d0'},
      ] as Persona[];
    });
    
    it('retorna un ok al encontrar apesar de que no hay ningún usuario o persona', () => {
      perService.getAll().subscribe(
        personas => expect(personas.nombre.length).toEqual(0),
        fail
      );

      const req = httpTestingController.expectOne(perService.empUrl);
      req.flush([]); //Return datos vacios
    });
    
    /*it('retorna un 404 no encontrado al no el usuario', () => {
      perService.getAll().subscribe(
        personas => expect(personas.nombre.length).toEqual(0),
        fail
      );

      const req = httpTestingController.expectOne(perService.empUrl);

      const msg = '404 error';
      req.flush(msg, { status: 404, statusText: 'Not Found' }); //Retorna un error
    });

    it('debe devolver los usuarios esperados llamando una vez', () => {
      perService.getAll().subscribe(
        personas => expect(personas.nombre.length).toEqual(0),
        fail
      );

      const req = httpTestingController.expectOne(perService.empUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedper); 
    });
  });
});*/