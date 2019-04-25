import { Component } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { ColeccionMusicaService } from '../servicios/coleccionMusica/coleccion-musica.service'
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	valorRange = 0; //Variable asociada al range, también contiene el tiempo de reproduccion actual
	valorRangeFormateado; //Valor del range, pero formateado a HH:mm:ss
	maximo = 0; //Total de segundos que dura la canción seleccionada
	maximoFormateado; //Total de duración de la canción, pero formateada a HH:mm:ss
	i = 0; //Variable auxiliar que utilizamos en ActualizarTiempos
	
	reproduciendo = false; //Booleano para conocer el estado de la reproduccion (si está en play o no)
	
	files: any = []; //Array que contiene todas las canciones disponibles en el servicio
	indiceActual: number; //Este índice será el mismo de la canción en ejecución. Lo utilizaremos en el html para dar un estilo u otro	
	file: MediaObject; //Variable que contiene nuestra canción en sí
		
	
	constructor(private media: Media, public coleccion: ColeccionMusicaService, 
	  public toastControlador: ToastController) {
		this.coleccion.getFiles().subscribe(files => {this.files = files;});
	}
	
	cargarArchivo(index){
		if(index != this.indiceActual){
			if(this.file != null){
				this.file.release();
			}
			
			this.file=this.media.create(this.files[index].url);
			this.maximo = this.files[index].duracion;
			this.maximoFormateado = this.formatearTiempo(this.maximo);
			this.indiceActual = index;
			this.reproduciendo = true;
			this.file.play();
			this.actualizarTiempos();
		} else {
			this.mostrarToast("¡El archivo ya está cargado!");
		}
		
	}
	
	
	formatearTiempo(segundos){
	  var seg = Math.trunc(segundos%60);
	  var min = Math.trunc(segundos/60);
	  var horas = Math.trunc(min/60);
	  min = Math.trunc(min%60);
	  var tiempo;
	  
	  if(horas<10){
		  tiempo = "0" + horas + ":";
	  } else {
		  tiempo = horas + ":";
	  }
	  
	  if(min<10){
		  tiempo = tiempo + "0" + min + ":";
	  } else {
		  tiempo = tiempo + min + ":";
	  }
	  
	  if(seg<10){
		  tiempo = tiempo + "0" + seg;
	  } else {
		  tiempo = tiempo + seg;
	  }
	  
	  return tiempo;
  }
  

	actualizarTiempos(){
		setInterval(()=>{
		  //hago cosas
		  if(this.reproduciendo){
			
			this.file.getCurrentPosition().then((curpos) => {this.i = curpos});
			this.i = Math.trunc(this.i);
			if(this.i != this.valorRange){
				this.valorRange = this.i;
				//llamo a la funcion de formatear horas
				this.valorRangeFormateado = this.formatearTiempo(this.valorRange);
			}
			
			
		  }
		}
		, 5); //Se actualiza cada poco
    }

	async mostrarToast(mensaje) {
		const toast = await this.toastControlador.create({
			message: mensaje,
			duration: 2000,
			showCloseButton: true,
			closeButtonText: 'X'
		});
		toast.present();
	}
  
  play(){
	  if(this.file != null) {
		  this.reproduciendo = true;
		  this.file.play();
	  } else {
		 this.mostrarToast('No se ha seleccionado ninguna pista');
	  }
	  
	  
  }
  
  
  pause(){
	  if(this.file != null) {
		this.file.pause();
		this.reproduciendo = false;
	  } else {
		 this.mostrarToast('No se ha seleccionado ninguna pista');
	  }
	  
  }
  
  stop(){
	  if(this.file != null){
		  this.reproduciendo = false;
		  this.file.stop();
		  this.file.release();
	  } else {
		  this.mostrarToast('No se ha seleccionado ninguna pista');
	  }
	  
  }
  
  //Primero detenemos la reproduccion para que actualizarTiempos no sobreescriba el valor del range
  //y no fastidie el valor del usuario
  quiereAvanzar(){
	  if(this.file != null){
		  this.reproduciendo = false;
		  this.file.pause();
	  }
  }
  
  irA(){
	  if(this.file != null){
		  setTimeout(()=>{
			this.file.seekTo(this.valorRange*1000);
			this.valorRangeFormateado = this.formatearTiempo(this.valorRange);
			this.file.play();
			this.reproduciendo = true;
		  }, 100);
	  }
  }
  
  
  
}
