import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FamilyMemberComponent } from './family-member/family-member.component';
import { SkillComponent } from './skill/skill.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    FamilyMemberComponent,
    SkillComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
