import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  @Output()
  public compteurEvent: EventEmitter<number> = new EventEmitter<number>();
  @Input() public compteur: number;

  constructor() {}

  ngOnInit() {}

  setCompteur(val: number): void {
    this.compteurEvent.emit(val);
    this.compteur += val;
  }
}
