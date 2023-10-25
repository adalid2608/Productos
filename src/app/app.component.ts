import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Productos';

  listaProductos : any[] = [
    { "id": "1",   
      "nombre": "Black Currants",   
      "imagen": "https://robohash.org/saepeestoptio.png?size=50x50&set=set1",   
      "precio": 3413,   
      "cantidad": 8
    },
    { "id": "2",
      "nombre": "Oil - Truffle, Black",   
      "imagen": "https://robohash.org/etsuntincidunt.png?size=50x50&set=set1",   
      "precio": 1625,   
      "cantidad": 4 
    },
    { "id": "3",   
      "nombre": "Bread - Rosemary Focaccia",  
      "imagen": "https://robohash.org/cumaliasmagni.png?size=50x50&set=set1",   
      "precio": 3211,   
      "cantidad": 3 
    }, 
    { "id": "4",   
      "nombre": "Tabasco Sauce, 2 Oz",   
      "imagen": "https://robohash.org/magniconsequaturnon.png?size=50x50&set=set1",   
      "precio": 2565,   
      "cantidad": 9 
    }, 
    { "id": "5",   
      "nombre": "Pasta - Detalini, White, Fresh",   
      "imagen": "https://robohash.org/perspiciatisaccusamusharum.png?size=50x50&set=set1",   
      "precio": 2459,   
      "cantidad": 2 
    }, 
    { "id": "6",   
      "nombre": "Pasta - Detalini, White, Fresh",       
      "imagen": "https://robohash.org/enimutexpedita.png?size=50x50&set=set1",   
      "precio": 4276,   
      "cantidad": 4 
    }, 
    { "id": "7",   
      "nombre": "Onions - White",   
      "imagen": "https://robohash.org/aperiamvoluptatemin.png?size=50x50&set=set1",   
      "precio": 3395,   
      "cantidad": 2 
    }, 
    { "id": "8",   
      "nombre": "Pork - Hock And Feet Attached",   
      "imagen": "https://robohash.org/omnisvelcorporis.png?size=50x50&set=set1",   
      "precio": 4179,   
      "cantidad": 3 
    }, 
    { "id": "9",  
      "nombre": "Fireball Whisky",   
      "imagen": "https://robohash.org/doloremenimsed.png?size=50x50&set=set1",   
      "precio": 1588,   
      "cantidad": 8 
    }, 
    { "id": "10",   
      "nombre": "Chicken - Whole Fryers",     
      "imagen": "https://robohash.org/sitsintvelit.png?size=50x50&set=set1",   
      "precio": 3424,   
      "cantidad": 4
    }
  ]
   numero: number = 1;

  incremento() {
    this.numero++;
  }
  decremento() {
    this.numero--;
  }
} 
