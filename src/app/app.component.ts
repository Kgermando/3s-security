import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 's3-security';

  metaTitle = '3s-security sarl en Republique Demoncratique du congo';
  metaDescription = 'La société « 3S-Security sarl » est spécialisée dans la sécurité des personnes et des biens.';
  metaKeywords = 'Surveillance, Chiens, gardiennage, Soldats, Sécurité, Protection, trôle de vos colis et livraison, sécurité des personnes et des biens, sécurité des biens, sécurité';
  metaKeywordsContent = 'Services de surveillance statique, trôle de vos colis et livraison, sécurité des personnes et des biens, sécurité des biens, sécurité';

  constructor( private meta: Meta) { 
    this.meta.updateTag({ name: 'title', content: this.metaTitle });
    this.meta.updateTag({ name: 'description', content: this.metaDescription });
    this.meta.updateTag({ name: 'keywords', content: this.metaKeywords });
  }
}
