import { Component,Output } from '@angular/core';
import {LucideAngularModule,Send} from "lucide-angular"

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
 @Output() SendIcon = Send
}
