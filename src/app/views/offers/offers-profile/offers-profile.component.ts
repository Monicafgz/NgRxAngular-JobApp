import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { OffersService } from "src/app/shared/services/offers.service";
import { Offer } from "src/app/shared/models/offer.model";
import { ProfileService } from "src/app/shared/services/profile.service";
import { User } from "src/app/shared/models/user.model";

@Component({
  selector: "app-offers-profile",
  templateUrl: "./offers-profile.component.html",
  styleUrls: ["./../offers.component.scss"],
})
export class OffersProfileComponent implements OnChanges {
  @Input() user: User;
  offers: Offer[] = [];
  displayedColumns: string[] = [
    "puesto",
    "empresa",
    "familia",
    "fecha",
    "provincia",
    "municipio",
    "detalle",
  ];
  constructor() {}
  ngOnChanges() {
    this.offers = this.user.offers;
  }
}
