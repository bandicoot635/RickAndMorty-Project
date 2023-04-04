import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../services/request-service.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  personajes: any = []
  pageSize = 20;
  currentPage = 1;
  totalItems = 0
  page = 1

  constructor(private service: RequestServiceService) { }

  ngOnInit(): void {
    this.obtenerPersonajes(this.currentPage)
  }

  obtenerPersonajes(page: number) {

    this.service.getPersonajes(page).subscribe(
      (resp: any) => {
        // console.log(resp);

        this.personajes = resp.results;
        this.totalItems = resp.info.count;
        this.currentPage = page;

      })
  }


  getStatusClass(status: string) {

    const opciones: any = {
      Dead: "text-danger",
      Alive: "text-success",
      unknown: "text-wanring"
    }

    return opciones[status]
  }


}

export interface Personaje {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: [],
  url: string,
  created: string
}
