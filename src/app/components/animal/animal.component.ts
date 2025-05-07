import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-animal',
  imports: [],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {

  animalList: any = [];
  animalForm: FormGroup | any
  constructor(private animalService: AnimalService,
   private formBuilder: FormBuilder,
   private router: Router,
   private toastr: ToastrService) {
   }
    

  getAllAnimals() {
    console.log('en componente');
    this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList = data;
    });
  }
  ngOnInit() {
    this.animalForm = this.formBuilder.group({
      nombre: '',
      edad: '',
      especie: '',
    });
  }
  newMessage(messageText: string) {
     this.toastr.success('Clic aquí para actualizar la lista', messageText)
     .onTap
     .pipe(take(1))
    .subscribe(() => window.location.reload());
    } 
    

}
