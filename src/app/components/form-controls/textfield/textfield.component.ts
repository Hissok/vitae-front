import { Component, ElementRef, Input, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextfieldComponent
    }
  ]
})
export class TextfieldComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  @Input() placeholder = "";
  @Input() type = "text";
  @Input() icon = "";

  @Output() input = new EventEmitter<any>();

  value: string = "";
  onChange = (value: string) => {};
  onTouched = () => {};
  touched = false;
  disabled = false;

  @ViewChild('input') field! : ElementRef<HTMLInputElement>;

  crypted = false; // Mode pour le type password

  ngOnInit(): void {
    this.crypted = this.type === "password";
  }

  onInput(value: any){
    this.onChange(value.target.value)
    this.input.emit(value);
  }

  // Pour afficher / masquer le text d'un type password
  // TODO: BUG SUR LA SELECTION DE TEXTE QUI REMET LE CURSEUR AU DEBUT
  toggleCrypted(){
    this.crypted = !this.crypted;
    this.field.nativeElement.focus();
    this.field.nativeElement.setSelectionRange(length, length);
  }

  // Focus l'input du composant
  focus(){
    this.field.nativeElement.focus();
  }

  writeValue(value: string){
    this.value = value;
  }
  registerOnChange(onChange: any){
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any){
    this.onTouched = onTouched;
  }
  setDisabledState(disabeld: boolean){
    this.disabled = disabeld;
  }

}
