import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() _mensaje;
  @Input() _icon;
  @Input() _titleModal;
  @Input() _redirectAfterClose;
  constructor( private modalCtrl: ModalController,private router: Router) { }

  ngOnInit() {
  }
  public   closeModal(){
    this.modalCtrl.dismiss();
    if(this._redirectAfterClose != null)
    {
      this.router.navigate([this._redirectAfterClose])
    }
  }

}
