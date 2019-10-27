import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

export interface Image {
  id: string;
  image: string;
}

@Component({
  selector: 'app-img',
  templateUrl: './img.page.html',
  styleUrls: ['./img.page.scss'],
})
export class ImgPage {

  url: any;
  newImage: Image = {
    id: this.afs.createId(), image: ''
  }
  loading: boolean = false;;

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }

  uploadImage(event) {
    this.loading = true;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
     
      reader.readAsDataURL(event.target.files[0]);
      // For Preview Of Image
      reader.onload = (e:any) => { // called once readAsDataURL is completed
        this.url = e.target.result;
      
        // For Uploading Image To Firebase
        const fileraw = event.target.files[0];
        console.log(fileraw)
        const filePath = '/Image/' + this.newImage.id + '/' + 'Image' + (Math.floor(1000 + Math.random() * 9000) + 1);
        const result = this.SaveImageRef(filePath, fileraw);
        const ref = result.ref;
        result.task.then(a => {
          ref.getDownloadURL().subscribe(a => {
            console.log(a);
            
            this.newImage.image = a;
            this.loading = false;
          });

          this.afs.collection('Image').doc(this.newImage.id).set(this.newImage);
        });
      }, error => {
        alert("Error");
      }

    }
  }



  SaveImageRef(filePath, file) {

    return {
      task: this.storage.upload(filePath, file)
      , ref: this.storage.ref(filePath)
    };
  }
}