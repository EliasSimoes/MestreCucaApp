import { Observable } from 'rxjs/Rx';
import { IngredientesModel } from './ingredientes.model';
import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()

export class IngredientesService {

    constructor( private http: Http ){

    }

    getIngredientes(){
       return this.http.get('http://10.0.56.16:3000/ingredientes').map((res: Response) => {
          const ingredientes =  res.json();
          const transformedIngredientes :IngredientesModel[] = [];
          console.log(ingredientes);
          for(let ingrediente of ingredientes){
              transformedIngredientes.push( new IngredientesModel(ingrediente.ingrediente_id, ingrediente.nome))
          }

          return transformedIngredientes;    
    })
    
    .catch((error:Response)=> Observable.throw(error));
    }
}