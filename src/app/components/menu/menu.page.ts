import { Component, OnInit } from '@angular/core';
import { Menu } from '../../model/Menu';
import {MenuService} from '../../service/Menu.service';
import { Router } from '@angular/router';
import { loader } from '../generico/loader';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  providers:[MenuService,loader]
})
export class MenuPage implements OnInit {

  private _menuService:MenuService;
  private _lstMenu : Menu;
  private _loader: loader;

  constructor(menuService:MenuService,private router: Router,private loader: loader) {
    this._loader = loader;
    this._loader.showLoader();
    this._menuService=menuService;
    this.getMenus();
   }

  ngOnInit() {

  }
  public redirectTo(urlRedirect:string)
  {
    this.router.navigate([urlRedirect])
  }
  private getMenus(){
    this._menuService.getAll().subscribe(data =>{
      this._lstMenu=data;
      this._loader.hideLoader();
    })
  }
}
