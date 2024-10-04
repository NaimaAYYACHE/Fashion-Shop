import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Slider1Component } from './slider1/slider1.component';
import { Slider2Component } from './slider2/slider2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategorieComponent } from './Categories/categorie/categorie.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProduitComponent } from './produit/produit/produit.component';
import { ProductDetailComponent } from './produit/product-detail/product-detail.component';
import { CategorieListComponent } from './categories/categorie-list/categorie-list.component';
import { ProductListComponent } from './produit/product-list/product-list.component';
import { ErrComponent } from './err/err.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './User/profile/profile.component';
import { SettingComponent } from './User/setting/setting.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { FaqComponent } from './footerC/faq/faq.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ArticleComponent } from './admin/article/article.component';
import { AddArticleComponent } from './admin/add-article/add-article.component';
import { CategoiresComponent } from './admin/Categorie/categoires/categoires.component';
import { AddCatComponent } from './admin/Categorie/add-cat/add-cat.component';
import { UpdateCatComponent } from './admin/Categorie/update-cat/update-cat.component';
import { UserComponent } from './admin/users/user/user.component';
import { AddUserComponent } from './admin/users/add-user/add-user.component';
import { UpdateUserComponent } from './admin/users/update-user/update-user.component';
import { HttpClientModule } from '@angular/common/http';
import { DelComponent } from './Alerts/del/del.component'; // Importez le module HttpClientModule
import { UpdateArticleComponent } from './admin/update-article/update-article.component';
import { ProduitByCategorieComponent } from './Categories/produit-by-categorie/produit-by-categorie.component';
import { ArticleEtatComponent } from './admin/articles/article-etat/article-etat.component';
import { DashComponent } from './admin/dash/dash.component';
import { LoginComponent } from './User/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HomeComponentComponent,
    Slider1Component,
    Slider2Component,
    NavbarComponent,
    CategorieComponent,
    FooterComponent,
    ProduitComponent,
    ProductDetailComponent,
    CategorieListComponent,
    ProductListComponent,
    ErrComponent,
    CartComponent,
    ProfileComponent,
    SettingComponent,
    WishListComponent,
    FaqComponent,
    AdminHomeComponent,
    ArticleComponent,
    AddArticleComponent,
    UpdateArticleComponent,
    CategoiresComponent,
    AddCatComponent,
    UpdateCatComponent,
    UserComponent,
    AddUserComponent,
    UpdateUserComponent,
    DelComponent,
    ProduitByCategorieComponent,
    ArticleEtatComponent,
    DashComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
