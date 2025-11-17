import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('🖤 Cumple Mery 🖤');
  codeForm: FormGroup;
  message = signal('');
  messageType = signal('');

  constructor(private fb: FormBuilder) {
    this.codeForm = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    if (this.codeForm.valid) {
      const code = this.codeForm.value.code.toLowerCase().trim();
      this.handleCodeEntry(code);
    }
  }

  private handleCodeEntry(code: string) {
    switch (code) {
      case 'feliz':
        this.message.set('¡Feliz Cumpleaños Mery! 🎉🎂 ¡Que tengas un día maravilloso!');
        this.messageType.set('success');
        break;
      case 'sorpresa':
        this.message.set('¡Sorpresa! 🎁 Tienes un regalo especial esperándote!');
        this.messageType.set('surprise');
        break;
      case 'amor':
        this.message.set('💝 Con mucho amor en tu día especial. ¡Eres increíble!');
        this.messageType.set('love');
        break;
      case 'fiesta':
        this.message.set('🎊 ¡Es hora de celebrar! ¡Que comience la fiesta!');
        this.messageType.set('party');
        break;
      case 'pastel':
        this.message.set('🍰 ¡Hora del pastel! Pide un deseo muy especial');
        this.messageType.set('cake');
        break;
      case 'mery':
        this.message.set('🌟 ¡Hola Mery! Eres una persona muy especial. ¡Feliz cumpleaños!');
        this.messageType.set('special');
        break;
      default:
        this.message.set('🤔 Código erróneo, diría que eres malilla');
        this.messageType.set('error');
    }
  }

  resetForm() {
    this.codeForm.reset();
    this.message.set('');
    this.messageType.set('');
  }
}
