import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit/produit.component';
import { ProductDetailComponent } from './produit/product-detail/product-detail.component';import { HomeComponentComponent } from './home-component/home-component.component';
import { CategorieComponent } from './Categories/categorie/categorie.component';
import { CategorieListComponent } from './categories/categorie-list/categorie-list.component';
import { ProductListComponent } from './produit/product-list/product-list.component';
import { Slider2Component } from './slider2/slider2.component';
import { ErrComponent } from './err/err.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './User/profile/profile.component';
import { SettingComponent } from './User/setting/setting.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { FaqComponent } from './footerC/faq/faq.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ArticleComponent } from './admin/article/article.component';
import { AddArticleComponent } from './admin/add-article/add-article.component';
import { UpdateArticleComponent } from './admin/update-article/update-article.component';
import { CategoiresComponent } from './admin/Categorie/categoires/categoires.component';
import { AddCatComponent } from './admin/Categorie/add-cat/add-cat.component';
import { UpdateCatComponent } from './admin/Categorie/update-cat/update-cat.component';
import { UserComponent } from './admin/users/user/user.component';
import { AddUserComponent } from './admin/users/add-user/add-user.component';
import { UpdateUserComponent } from './admin/users/update-user/update-user.component';
import { ProduitByCategorieComponent } from './Categories/produit-by-categorie/produit-by-categorie.component';
import { ArticleEtatComponent } from './admin/articles/article-etat/article-etat.component';
import { DashComponent } from './admin/dash/dash.component';
import { LoginComponent } from './User/login/login.component';


const routes: Routes = [
  { path: 'produit', component: ProduitComponent },
  { path: 'details/:id', component: ProductDetailComponent },
  { path: '', component: HomeComponentComponent }, // Default route
  { path: 'home', component: HomeComponentComponent },
  { path: 'categorie', component: CategorieComponent },
  { path: 'categorieList', component: CategorieListComponent },
  { path: 'productList', component: ProductListComponent },
  { path: 'slider2', component: Slider2Component },
  { path: 'err', component: ErrComponent },
  { path: 'cart/:id', component: CartComponent },
  { path: 'profile/:id' , component:ProfileComponent} ,
  { path: 'setting/:id' , component: SettingComponent} ,
  { path: 'wish' , component:WishListComponent} ,
  { path: 'faq' , component: FaqComponent} , 
  { path: 'admin' , component: AdminHomeComponent} ,
  { path: 'article' , component: ArticleComponent} ,
  { path: 'addArticle' , component:AddArticleComponent},
  { path: 'updateArt/:id' , component:UpdateArticleComponent} ,
  { path: 'categories' , component:CategoiresComponent} , 
  { path: 'addCat' , component:AddCatComponent} ,
  { path: 'updateCat/:id' , component:UpdateCatComponent},
  { path: 'users' , component:UserComponent},
  { path: 'addUser' , component:AddUserComponent} ,
  { path: 'updateUser/:id' , component:UpdateUserComponent} ,
  { path:'productByCategorie/:id' ,component: ProduitByCategorieComponent} ,
  { path: 'produitByEtat' , component : ArticleEtatComponent} , 
  { path: 'dash' , component : DashComponent} , 
  { path: 'login' , component : LoginComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
