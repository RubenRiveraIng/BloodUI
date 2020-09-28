import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../../../generico/modal/modal.page';
import { CamapanasDonacionService } from '../../../../service/CampanasDonacion.service';
import { CampanasDonacion } from '../../../../model/CampanasDonacion';
import { Router ,NavigationExtras} from '@angular/router';
import {loader} from '../../../generico/loader';
@Component({
  selector: 'app-listacampanas',
  templateUrl: './listacampanas.page.html',
  styleUrls: ['./listacampanas.page.scss'],
  providers: [CamapanasDonacionService,loader]
})
export class ListacampanasPage implements OnInit {

  private _msgModal: string;
  private _iconModal: string;
  private _redirectModal: string;
  private _titleModal: string;
  private _cdService: CamapanasDonacionService;
  public _lstcbs: Array<CampanasDonacion>;
  private _loader :loader;

  constructor(private modalCtrl: ModalController,
    private cdService: CamapanasDonacionService, private router: Router,private loader:loader) {
      this._loader=loader;
      this._loader.showLoader();
    this._cdService = cdService;
    this._lstcbs = new Array<CampanasDonacion>();
    this._cdService.getCampanasDonacion().subscribe(data => {
      this._lstcbs = data;
      this._loader.hideLoader();
    });
  }

  ngOnInit() {
  }

  public detalleCamapana(id: number) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id:id
      }
    };
    this.router.navigate(['campanasdonacion/detallecampana'], navigationExtras)
  }

}
