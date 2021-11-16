import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

  project: any = [];
  apartment: any = [];
  projectImage: string;
  projectName: string;

  constructor( private readonly ps: ProjectService, private readonly as: ApartmentService, private ar: ActivatedRoute) { }

  getProjectById(id: number){
    this.ps.getProjects().subscribe((rest: any) => {
      this.project = rest.data.filter((item: { id: number }) => item.id == id);
      console.log(this.project)
      this.projectName = this.project[0].name;
      this.projectImage = this.project[0].image;
    })
  }

  getApartmentsByProjectId(id: number){
    this.as.getApartments().subscribe((rest: any) => {
      this.apartment = rest.data.filter((item:{ id: number}) => item.id == id)
      console.log(this.apartment)
    })
  }

  ngOnInit(): void {
    this.ar.params.subscribe((params: Params) => {
      if(params.id){
        this.getApartmentsByProjectId(params.id)
        if(params.projectId){
          // obtener projectId desde el parametro en la URL
          this.getProjectById(params.projectId)
        }
      }
    })
  }

}
