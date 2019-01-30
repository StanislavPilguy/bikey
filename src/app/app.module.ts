import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import {UsersComponent} from './components/users/users.component';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './components/user/user.component';
import {UsercardComponent} from './shared/usercard/usercard.component';
import {AdduserComponent} from './components/adduser/adduser.component';
import {MatDialogModule} from '@angular/material/dialog';


const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: UsersComponent},
  {path: 'users/:id', component: UserComponent},
  {path: 'add', component: AdduserComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UsercardComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    RouterModule.forRoot(APP_ROUTES)

  ],
  providers: [
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
