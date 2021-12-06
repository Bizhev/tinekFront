import {AccountInterface} from "./account.interface";
import {Currency} from "../../../../types/currency.type";

export interface UserInterface {
  "id":  number,
  "fio": string,
  "name"?: string,
  "isActive"?: boolean,
  "isDemo"?: boolean,
  "cash"?: number,
  "cash_type"?: Currency,
  "created_at"?: Date,
  "updated_at"?: Date,
}
export interface CurrentUser extends UserInterface {
  currentAccountId: string;
}
