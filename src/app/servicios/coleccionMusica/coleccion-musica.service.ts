import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColeccionMusicaService {

  constructor() { }
  
  files:any = [
  {
	url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',
	nombre: 'Perfect by Ed Sheeran',
	duracion: 280
  },
  {
	url: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
	nombre: 'Man Atkeya Beparwah by Nusrat Fateh Ali Khan',
	duracion: 868
  },
  {
	url: 'https://ia802802.us.archive.org/8/items/PopSweetPopGTuckerVerdigris/PopSweetPop-GTucker-Verdigris.mp3',
	nombre: 'Pop Sweet Pop by Guillaume Tucker',
	duracion: 142
  },
  {
	url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',
	nombre: 'Perfect by Ed Sheeran',
	duracion: 280
  },
  {
	url: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
	nombre: 'Man Atkeya Beparwah by Nusrat Fateh Ali Khan',
	duracion: 868
  },
  {
	url: 'https://ia802802.us.archive.org/8/items/PopSweetPopGTuckerVerdigris/PopSweetPop-GTucker-Verdigris.mp3',
	nombre: 'Pop Sweet Pop by Guillaume Tucker',
	duracion: 142
  },
  {
	url: 'https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3',
	nombre: 'Perfect by Ed Sheeran',
	duracion: 280
  },
  {
	url: 'https://ia801609.us.archive.org/16/items/nusratcollection_20170414_0953/Man%20Atkiya%20Beparwah%20De%20Naal%20Nusrat%20Fateh%20Ali%20Khan.mp3',
	nombre: 'Man Atkeya Beparwah by Nusrat Fateh Ali Khan',
	duracion: 868
  }
  ];
  
  getFiles() {
	  return of(this.files);
  }
}
