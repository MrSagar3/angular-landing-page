import { Component, Output } from '@angular/core';
import {LucideAngularModule,ArrowRight} from "lucide-angular"
@Component({
  selector: 'app-middle',
  imports: [LucideAngularModule],
  templateUrl: './middle.html',
  styleUrl: './middle.css'
})
export class Middle {
@Output() ArrowRightIcon = ArrowRight
}
