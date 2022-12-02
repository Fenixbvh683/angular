import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http" 
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RedesComponent } from './redes/redes.component';
import { LogoapComponent } from './logoap/logoap.component';
import { Redes1Component } from './redes/redes1/redes1.component';
import { Redes2Component } from './redes/redes2/redes2.component';
import { Redes3Component } from './redes/redes3/redes3.component';
import { BannerComponent } from './banner/banner.component';
import { FotojlComponent } from './banner/fotojl/fotojl.component';
import { BannombreComponent } from './banner/bannombre/bannombre.component';
import { BantituloComponent } from './banner/bantitulo/bantitulo.component';
import { BanciudadComponent } from './banner/banciudad/banciudad.component';
import { BanbotonesComponent } from './banner/banbotones/banbotones.component';
import { BaninfoderechaComponent } from './banner/baninfoderecha/baninfoderecha.component';
import { BanderedosComponent } from './banner/banderedos/banderedos.component';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { AcertituloComponent } from './acercademi/acertitulo/acertitulo.component';
import { AcerinfoComponent } from './acercademi/acerinfo/acerinfo.component';
import { EducacionComponent } from './educacion/educacion.component';
import { EduunoComponent } from './educacion/eduuno/eduuno.component';
import { EdutituloComponent } from './educacion/edutitulo/edutitulo.component';
import { EdudosComponent } from './educacion/edudos/edudos.component';
import { EdutresComponent } from './educacion/edutres/edutres.component';
import { EducuatroComponent } from './educacion/educuatro/educuatro.component';
import { LaboralComponent } from './laboral/laboral.component';
import { ExpeunoComponent } from './laboral/expeuno/expeuno.component';
import { ExpetituloComponent } from './laboral/expetitulo/expetitulo.component';
import { LaboraunologoComponent } from './laboral/laboraunologo/laboraunologo.component';
import { LaboinfounoComponent } from './laboral/expeuno/laboinfouno/laboinfouno.component';
import { LaboraldosComponent } from './laboral/laboraldos/laboraldos.component';
import { LaboraltresComponent } from './laboral/laboraltres/laboraltres.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { HabitituloComponent } from './habilidades/habititulo/habititulo.component';
import { HabiunoComponent } from './habilidades/habiuno/habiuno.component';
import { HabidosComponent } from './habilidades/habidos/habidos.component';
import { HabitresComponent } from './habilidades/habitres/habitres.component';
import { HabicuatroComponent } from './habilidades/habicuatro/habicuatro.component';
import { HabicincoComponent } from './habilidades/habicinco/habicinco.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyetituloComponent } from './proyectos/proyetitulo/proyetitulo.component';
import { ProyeunoComponent } from './proyectos/proyeuno/proyeuno.component';
import { ProyedosComponent } from './proyectos/proyedos/proyedos.component';
import { ProyetresComponent } from './proyectos/proyetres/proyetres.component';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';





import { LoginComponent } from './modales/login/login.component';
import { NuevousuarioComponent } from './modales/nuevousuario/nuevousuario.component';
import { ModigruredesComponent } from './modales/modigruredes/modigruredes.component';
import { BannerimagenComponent } from './modales/bannerimagen/bannerimagen.component';
import { ModfotjlComponent } from './modales/modfotjl/modfotjl.component';
import { ModnombreComponent } from './modales/modnombre/modnombre.component';
import { ModtituloComponent } from './modales/modtitulo/modtitulo.component';
import { ModciudadComponent } from './modales/modciudad/modciudad.component';
import { ModbotonesComponent } from './modales/modbotones/modbotones.component';
import { ModinfodereComponent } from './modales/modinfodere/modinfodere.component';
import { Modinfoder1Component } from './modales/modinfoder1/modinfoder1.component';
import { ModacertituComponent } from './modales/modacertitu/modacertitu.component';
import { ModacerinfoComponent } from './modales/modacerinfo/modacerinfo.component';
import { EdutituComponent } from './modales/edutitu/edutitu.component';
import { ModeduunoComponent } from './modales/modeduuno/modeduuno.component';
import { LogodrComponent } from './modales/modeduuno/logodr/logodr.component';
import { InfounoComponent } from './modales/modeduuno/infouno/infouno.component';
import { ModeducacionComponent } from './modales/modeducacion/modeducacion.component';
import { LogoedudosComponent } from './modales/modeducacion/edudos/logoedudos/logoedudos.component';
import { InfoedudosComponent } from './modales/modeducacion/edudos/infoedudos/infoedudos.component';
import { ModedutresComponent } from './modales/modedutres/modedutres.component';
import { EudtreslogoComponent } from './modales/modedutres/eudtreslogo/eudtreslogo.component';
import { ModlaboralComponent } from './modales/modlaboral/modlaboral.component';
import { LabotituloComponent } from './modales/modlaboral/labotitulo/labotitulo.component';
import { ModuinfotresComponent } from './modales/modedutres/moduinfotres/moduinfotres.component';
import { ModeducuatroComponent } from './modales/modeducacion/modeducuatro/modeducuatro.component';
import { ModlogoeducuaComponent } from './modales/modeducacion/modeducuatro/modlogoeducua/modlogoeducua.component';
import { ModeduinfocuaComponent } from './modales/modeducacion/modeducuatro/modeduinfocua/modeduinfocua.component';
import { ExpelogounoComponent } from './modales/modlaboral/expeuno/expelogouno/expelogouno.component';
import { ExpeinfounoComponent } from './modales/modlaboral/expeuno/expeinfouno/expeinfouno.component';
import { ExpedosComponent } from './modales/modlaboral/expedos/expedos.component';
import { ExplogodosComponent } from './modales/modlaboral/expedos/explogodos/explogodos.component';
import { ExpeinfodosComponent } from './modales/modlaboral/expedos/expeinfodos/expeinfodos.component';
import { ExpetresComponent } from './modales/modlaboral/expetres/expetres.component';
import { ExpelogotresComponent } from './modales/modlaboral/expetres/expelogotres/expelogotres.component';
import { ExpeinfotresComponent } from './modales/modlaboral/expetres/expeinfotres/expeinfotres.component';
import { ModhabilidadesComponent } from './modales/modhabilidades/modhabilidades.component';
import { ModhabiunoComponent } from './modales/modhabilidades/modhabiuno/modhabiuno.component';
import { ModhabidosComponent } from './modales/modhabilidades/modhabidos/modhabidos.component';
import { ModhabitresComponent } from './modales/modhabilidades/modhabitres/modhabitres.component';
import { ModhabicuatroComponent } from './modales/modhabilidades/modhabicuatro/modhabicuatro.component';
import { ModhabicincoComponent } from './modales/modhabilidades/modhabicinco/modhabicinco.component';
import { ModhabitituloComponent } from './modales/modhabilidades/modhabititulo/modhabititulo.component';
import { ModproyectosComponent } from './modales/modproyectos/modproyectos.component';
import { TituproyeComponent } from './modales/modproyectos/tituproye/tituproye.component';
import { UnoproyeComponent } from './modales/modproyectos/unoproye/unoproye.component';
import { DosproyeComponent } from './modales/modproyectos/dosproye/dosproye.component';
import { TresproyeComponent } from './modales/modproyectos/tresproye/tresproye.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    LogoapComponent,
    Redes1Component,
    Redes2Component,
    Redes3Component,
    NuevousuarioComponent,
    ModigruredesComponent,
    BannerComponent,
    BannerimagenComponent,
    FotojlComponent,
    ModfotjlComponent,
    BannombreComponent,
    BantituloComponent,
    BanciudadComponent,
    ModnombreComponent,
    ModtituloComponent,
    ModciudadComponent,
    BanbotonesComponent,
    ModbotonesComponent,
    BaninfoderechaComponent,
    BanderedosComponent,
    ModinfodereComponent,
    Modinfoder1Component,
    AcercademiComponent,
    AcertituloComponent,
    AcerinfoComponent,
    ModacertituComponent,
    ModacerinfoComponent,
    EducacionComponent,
    EduunoComponent,
    EdutituloComponent,
    EdutituComponent,
    ModeduunoComponent,
    LogodrComponent,
    InfounoComponent,
    EdudosComponent,
    ModeducacionComponent,
    LogoedudosComponent,
    InfoedudosComponent,
    EdutresComponent,
    ModedutresComponent,
    EudtreslogoComponent,
    EducuatroComponent,
    LaboralComponent,
    ExpeunoComponent,
    ExpetituloComponent,
    ModlaboralComponent,
    LabotituloComponent,
    ModuinfotresComponent,
    ModeducuatroComponent,
    ModlogoeducuaComponent,
    ModeduinfocuaComponent,
    LaboraunologoComponent,
    LaboinfounoComponent,
    ExpelogounoComponent,
    ExpeinfounoComponent,
    LaboraldosComponent,
    ExpedosComponent,
    ExplogodosComponent,
    ExpeinfodosComponent,
    LaboraltresComponent,
    ExpetresComponent,
    ExpelogotresComponent,
    ExpeinfotresComponent,
    HabilidadesComponent,
    HabitituloComponent,
    HabiunoComponent,
    HabidosComponent,
    HabitresComponent,
    HabicuatroComponent,
    HabicincoComponent,
    ModhabilidadesComponent,
    ModhabiunoComponent,
    ModhabidosComponent,
    ModhabitresComponent,
    ModhabicuatroComponent,
    ModhabicincoComponent,
    ModhabitituloComponent,
    ProyectosComponent,
    ProyetituloComponent,
    ProyeunoComponent,
    ProyedosComponent,
    ProyetresComponent,
    ModproyectosComponent,
    TituproyeComponent,
    UnoproyeComponent,
    DosproyeComponent,
    TresproyeComponent,
    HomeComponent,
    Error404Component,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
