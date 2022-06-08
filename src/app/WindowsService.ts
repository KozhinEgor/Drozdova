import {Injectable} from "@angular/core";
import {window} from "./classes";

@Injectable({
  providedIn: 'root'
})
export class WindowsService{
  windows:window[] = [];
}
