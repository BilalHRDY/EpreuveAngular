import { Component, OnInit } from '@angular/core';
import { Joueur } from '../class/joueur';
import { JoueurService } from '../service/joueur.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


joueurs? : Joueur[];
isLoading = false;

delete(id: number){
  this.isLoading = true;
  this.joueurService.delete(id).subscribe(data => {

    this.ngOnInit();
  })
}

  constructor(private joueurService: JoueurService) { }

  ngOnInit(): void {

this.isLoading = true;
this.joueurService.getAll().subscribe(data =>{

  this.joueurs = data;
  this.isLoading = false;
})

  }

}
