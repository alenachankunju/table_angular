import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Username: string = 'Enter username';

  userlist: any = [
    { Id: '1',Name: 'Manu', Age: '24', Email: 'manu@gmail.com' },
    { Id: '2',Name: 'Sanu', Age: '19', Email: 'sanu@gmail.com' },
    { Id: '3',Name: 'Sabu', Age: '39', Email: 'sabu@gmail.com' },
    { Id: '4',Name: 'Jithin', Age: '27', Email: 'jithin@gmail.com' },
    { Id: '5',Name: 'Rakesh', Age: '10', Email: 'rakesh@gmail.com' },
    { Id: '6',Name: 'Anu', Age: '30', Email: 'anu@gmail.com' },
  ];

  // onclick(prouser: { value: any }) {
  //   if (prouser.value.length > 0) {
  //     this.userlist.push(prouser.value);
  //     prouser.value = '';
  //   }
  // }

  ondelete(id:number) {
    // const foundIndex = this.userlist.value.findIndex(id === this.id);
    this.userlist.splice(id,1);
  }
}
