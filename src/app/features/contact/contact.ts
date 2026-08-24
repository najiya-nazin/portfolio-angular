import { CommonModule } from '@angular/common';
import { Component, NgZone, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {

  @ViewChild('contactForm') contactForm!: NgForm;

  submitted = false;
  sending = false;
  errorMessage = '';

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor(private ngZone: NgZone) {}

  onSubmit() {

    if (this.sending) {
      return;
    }

    this.sending = true;
    this.submitted = false;
    this.errorMessage = '';

    // These names MUST match your EmailJS template variables
    const templateParams = {
      name: this.formData.name,
      email: this.formData.email,
      title: this.formData.subject,
      message: this.formData.message,
      time: new Date().toLocaleString()
    };

    emailjs.send(
      'service_fiz0t2q',
      'template_cejpqlh',
      templateParams,
      {
        publicKey: '2ky_jQ8FZenBVZkYd'
      }
    )
    .then((response) => {

      console.log('Email sent successfully:', response);

      // Force Angular UI update
      this.ngZone.run(() => {

        this.sending = false;
        this.submitted = true;
        this.errorMessage = '';

        // Completely reset Angular form
        this.contactForm.resetForm();

        console.log('Form reset successfully');
        console.log('Success message should now be visible');

      });

      // Hide success message after 5 seconds
      setTimeout(() => {

        this.ngZone.run(() => {
          this.submitted = false;
        });

      }, 3000);

    })
    .catch((error) => {

      console.error('EmailJS Error:', error);

      this.ngZone.run(() => {

        this.sending = false;
        this.submitted = false;

        this.errorMessage =
          'Unable to send your message. Please try again later.';

      });

    });
  }
}
