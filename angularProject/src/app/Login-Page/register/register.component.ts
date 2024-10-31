import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiResponse} from "../../util/api.response.model";
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  selectedFile: File | null = null;

  constructor(private http: HttpClient,
              private router: Router
  ) {
  }

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(form: any) {
    const userData = {
      ...form.value,
      role: 'PATIENT', // Set default role
    };

    console.log('from submit', userData);
    const formData: FormData = new FormData();
    formData.append('user', new Blob([JSON.stringify(userData)], {type: 'application/json'}));

    if (this.selectedFile) {
      formData.append('image', this.selectedFile, this.selectedFile.name);
    }

    this.http.post<ApiResponse>('http://localhost:8080/api/user/saveUser', formData)
      .subscribe(response => {
          console.log(response);
          alert('Registration successful!');
          // Handle success or error response
          this.router.navigate(['/login']);
        },
        error => {
          console.error(error);
          // Optionally handle error response
          alert('Registration failed. Please try again.');
        });
  }
}
