import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {

  submitted = false;
  sending = false;
  errorMessage = '';

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  async onSubmit() {

    if (this.sending) {
      return;
    }

    this.sending = true;
    this.submitted = false;
    this.errorMessage = '';

    const templateParams = {
      name: this.formData.name,
      email: this.formData.email,
      title: this.formData.subject,
      message: this.formData.message,
      time: new Date().toLocaleString()
    };

    try {

      await emailjs.send(
        'service_fiz0t2q',
        'template_cejpqlh',
        templateParams,
        {
          publicKey: '2ky_jQ8FZenBVZkYd'
        }
      );

      this.submitted = true;

      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      setTimeout(() => {
        this.submitted = false;
      }, 2000);

    } catch (error) {

      console.error('EmailJS Error:', error);

      this.errorMessage =
        'Message could not be sent. Please try again.';

    } finally {

      this.sending = false;
    }
  }
}
