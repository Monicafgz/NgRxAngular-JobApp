import { NativeDateAdapter } from "@angular/material/core";
import { MatDateFormats } from "@angular/material/core";
import { Platform } from "@angular/cdk/platform";
import * as dayjs from "dayjs";
import "dayjs/locale/es";
import * as customParseFormat from "dayjs/plugin/customParseFormat";
import * as localizedFormat from "dayjs/plugin/localizedFormat";

export class AppDateAdapter extends NativeDateAdapter {
  constructor(matDateLocale: string, platform: Platform) {
    super(matDateLocale, platform);

    // Initalize DayJS-Parser
    dayjs.locale("de");
    dayjs.extend(customParseFormat);
    dayjs.extend(localizedFormat);
  }

  parse(value: any): Date | null {
    return dayjs(value, "DD.MM.YYYY").toDate();
  }

  format(date: Date, displayFormat: any): string {
    return dayjs(date).format(displayFormat);
  }
}
export const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: "DD.MM.YYYY",
  },
  display: {
    dateInput: "DD.MM.YYYY",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY",
  },
};
