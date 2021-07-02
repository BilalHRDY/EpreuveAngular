import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { Joueur } from '../class/joueur';


import { JoueurService } from '../service/joueur.service';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  styleUrls: ['./add-joueur.component.css']
})
export class AddJoueurComponent implements OnInit {

  joueurFormulaire= new Joueur();
  joueurPoste = ['gardien', 'attaquant', 'milieu', 'defenseur'];
  isLoading = false;
  constructor(private router: Router, private joueurService: JoueurService) { }

  ngOnInit(): void {

  
  }


  joueurSubmit(){
    this.isLoading = true
    this.joueurService.add(this.joueurFormulaire).subscribe(data => {
this.router.navigate(['/']);
// this.notifier.success(this.joueurFormulaire.nom   +' ajouté', 'Félicitations, vous avez ajouter un joueur')
    })
  
  }
}
